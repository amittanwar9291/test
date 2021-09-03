using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Confluent.Kafka;
using Microsoft.Extensions.Logging;
using RadioReport.Common.Consts;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Extensions;
using RadioReport.Common.Interfaces;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Kafka
{
    public class KafkaProducer : IKafkaProducer
    {
        private readonly IProducer<string, string> _producer;
        private readonly ICacheService _cacheService;
        private readonly ILogger<KafkaProducer> _logger;

        public KafkaProducer(ProducerConfig config, ICacheService cacheService, ILogger<KafkaProducer> logger)
        {
            _producer = new ProducerBuilder<string, string>(config).Build();
            _cacheService = cacheService;
            _logger = logger;
        }

        /// <summary>
        /// Sends a fire and forget kafka message. Coming from an authenticated area, a HttpAuthContext instance needs to retrieved by DI and sent along the message.
        /// </summary>
        /// <param name="topic">Kafka topic consumers listening to</param>
        /// <param name="message">Serialized message</param>
        /// <param name="httpAuthContext">Object containing authentication information that had been retrieved by JWT token parsing by middleware</param>
        /// <param name="key"></param>
        /// <returns></returns>
        public async Task WriteMessage(string topic, string message, HttpAuthContext httpAuthContext, string key = null) =>
            await WriteMessageInternal(topic, message, httpAuthContext, key, false);

        /// <summary>
        /// Sends a fire and forget kafka message without authentication information. Do NOT use it coming from an authenticated area, where authentication information
        /// could be retrievable and sent by a HttpAuthContext object. Mark according topic by adding it to the constants in the form of KafkaTopic.Anonymous.x
        /// </summary>
        /// <param name="topic">Kafka topic consumers listening to</param>
        /// <param name="message">Serialized message</param>
        /// <param name="key">Message key</param>
        /// <returns></returns>
        public async Task WriteMessageAnonymous(string topic, string message, string key = null) =>
            await WriteMessageInternal(topic, message, HttpAuthContext.Anonymous, key, false);

        public Task Trigger(string topic, HttpAuthContext httpAuthContext) => WriteMessage(topic, string.Empty, httpAuthContext);

        public Task TriggerAnonymous(string topic) => WriteMessageAnonymous(topic, string.Empty);

        /// <summary>
        /// Sends a kafka message to the topic provided by the request object and starts a task continually checking redis cache for the existance of the cache key
        /// provided by the request object until timed out by the value set by timeoutMs or successfully retrieve a value from the observed cache. Deserialized cache
        /// value is returned as soon as available. The topic consumer is supposed to deserialize the request object, utilizing pendent information and write a
        /// serialized response into cache with provided key. Coming from an authenticated area, a HttpAuthContext instance needs to retrieved by DI and sent along the
        /// message.
        /// </summary>
        /// <param name="request">Object providing topic, cache key and information for consumer side</param>
        /// <param name="httpAuthContext">Object containing authentication information that had been retrieved by JWT token parsing by middleware</param>
        /// <param name="timeoutMs">Duration until waiting for cache written response is aborted</param>
        /// <param name="cancellationToken">Token to cancel cache observing loop</param>
        /// <typeparam name="TResponse">Type the kafka consumer is supposed to instantiate and write into cache</typeparam>
        /// <returns></returns>
        public async Task<TResponse> SendSynchronousRequest<TResponse>(
            KafkaCachingRequestBase request,
            HttpAuthContext httpAuthContext,
            int timeoutMs = ConfigurationConsts.KafkaSyncRequestTimeoutMs,
            CancellationToken cancellationToken = default
        ) where TResponse : KafkaSyncResponseBase
        {
            if (request == null) throw new ArgumentNullException(nameof(request));

            await WriteMessageInternal(request.Topic, request.AsJson(), httpAuthContext, request.MessageKey, true);
            var timeoutTask = Task.Delay(timeoutMs, cancellationToken);
            var cacheObserverTask = RunCacheObserverTask<TResponse>(request.CacheKey, timeoutTask, cancellationToken, request.KeepCacheEntry);

            var firstTask = await Task.WhenAny(cacheObserverTask, timeoutTask);
            if (firstTask == cacheObserverTask)
            {
                return cacheObserverTask.Result;
            }

            throw new SynchronousKafkaTimedOutException($"Request {request.AsIndentedJson()}");
        }

        /// <summary>
        /// Sends a kafka message to the topic provided by the request object and starts a task continually checking redis cache for the existance of the cache key
        /// provided by the request object until timed out by the value set by observableTimeoutMs. Deserialized cache value is supposed to be an enumerable of TElement
        /// elements, each newly added element is emitted in an observable event stream manner. The topic consumer is supposed to deserialize the request object,
        /// utilizing pendent information and add a serialized TElement element to the cached enumerable using ICacheService.AddToList(). Coming from an authenticated
        /// area, a HttpAuthContext instance needs to retrieved by DI and sent along the message.
        /// </summary>
        /// <param name="request">Object providing topic, cache key and information for consumer side</param>
        /// <param name="observableTimeoutMs">Duration until observable stream is aborted</param>
        /// <param name="cancellationToken">Token to cancel cache observing loop</param>
        /// <typeparam name="TElement">Type of list elements cached with the provided cache key and emitted by the observable stream</typeparam>
        /// <returns></returns>
        public Common.Interfaces.IObservable<TElement> SendObservableRequest<TElement>(
            KafkaCachingRequestBase request,
            HttpAuthContext httpAuthContext,
            int observableTimeoutMs = ConfigurationConsts.KafkaObservableRequestTimeoutMs,
            CancellationToken cancellationToken = default
        ) =>
            Observable<TElement>.Create(async (onNext, onError, onComplete) =>
            {
                await WriteMessageInternal(request.Topic, request.AsJson(), httpAuthContext, request.MessageKey, true);
                await RunStreamingCacheObserverTask(request.CacheKey, onNext, onError, onComplete, observableTimeoutMs, cancellationToken);
            });

        private async Task WriteMessageInternal(string topic, string message, HttpAuthContext httpAuthContext, string key, bool isSynchronous) =>
            await _producer.ProduceAsync(topic, CreateMessage(message, httpAuthContext, key, isSynchronous));

        private static Message<string, string> CreateMessage(string message, HttpAuthContext httpAuthContext, string key, bool isSynchronous)
        {
            var dto = new KafkaRequestDto
            {
                Message = message,
                HttpAuthContext = httpAuthContext,
                IsSynchronous = isSynchronous
            };
            var messageKey = key.IsNullOrEmpty() ? Guid.NewGuid().ToString() : key;

            return new Message<string, string>
            {
                Key = messageKey,
                Value = dto.AsJson()
            };
        }

        private Task<TResponse> RunCacheObserverTask<TResponse>(string cacheKey, Task timeoutTask, CancellationToken cancellationToken, bool keepEntry)
            where TResponse : KafkaSyncResponseBase =>
            Task.Run(async () =>
            {
                var cacheValueExists = false;
                string cacheValue = null;
                while (!cacheValueExists && !timeoutTask.IsCompleted && !cancellationToken.IsCancellationRequested)
                {
                    await Task.Delay(20, cancellationToken);
                    (cacheValueExists, cacheValue) = await _cacheService.TryGet(cacheKey);
                }

                if (!cacheValueExists) return default;

                if (!keepEntry) await _cacheService.Remove(cacheKey);

                var response = cacheValue.Deserialize<TResponse>();
                if (response.Error == null) return response;

                var exception = new KafkaSyncRequestFailedException($"Kafka sync request failed: {response.Error.Message}", response.Error);
                if (!response.Reason.IsNullOrEmpty())
                {
                    exception.Reason = response.Reason;
                }

                throw exception;
            }, cancellationToken);

        private Task RunStreamingCacheObserverTask<TElement>(string cacheKey, Action<TElement> onNext, Action<Exception> onError, Action onComplete,
            int timeoutMs,
            CancellationToken cancellationToken) =>
            Task.Run(async () =>
            {
                try
                {
                    var cacheEntryExist = false;
                    var timeoutTask = Task.Delay(timeoutMs, cancellationToken);
                    while (!cacheEntryExist && !timeoutTask.IsCompleted && !cancellationToken.IsCancellationRequested)
                    {
                        await Task.Delay(20, cancellationToken);
                        if (!await _cacheService.Exists(cacheKey)) continue;

                        cacheEntryExist = true;
                    }

                    if (!cacheEntryExist) throw new MissingCacheEntryException(cacheKey);

                    var index = 0;
                    while (!timeoutTask.IsCompleted && !cancellationToken.IsCancellationRequested)
                    {
                        var elements = (await _cacheService.GetList(cacheKey)).Select(e => e.Deserialize<TElement>()).ToArray();
                        while (elements.Length > index)
                        {
                            onNext(elements[index++]);
                        }

                        await Task.Delay(20, cancellationToken);
                    }

                    await _cacheService.Remove(cacheKey);
                    onComplete?.Invoke();
                }
                catch (Exception exception)
                {
                    onError?.Invoke(exception);
                }
            }, cancellationToken);
    }
}
