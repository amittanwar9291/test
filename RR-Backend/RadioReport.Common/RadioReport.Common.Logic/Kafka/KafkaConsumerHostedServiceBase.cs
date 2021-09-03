using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Confluent.Kafka;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Linq;
using RadioReport.Common.Consts;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Extensions;
using RadioReport.Common.Helpers;
using RadioReport.Common.Interfaces;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Kafka
{
    public abstract class KafkaConsumerHostedServiceBase : BackgroundService
    {
        private readonly ConsumerConfig _consumerConfig;
        private readonly IServiceScopeFactory _serviceScopeFactory;

        protected KafkaConsumerHostedServiceBase(ConsumerConfig consumerConfig, ILogger logger, IServiceScopeFactory serviceScopeFactory,
            ICacheService cacheService)
        {
            _consumerConfig = consumerConfig;
            _serviceScopeFactory = serviceScopeFactory;
            CacheService = cacheService;
            Logger = logger;
        }

        protected abstract IEnumerable<string> Topics { get; }
        protected ICacheService CacheService { get; }
        protected ILogger Logger { get; set; }

        protected override async Task ExecuteAsync(CancellationToken cancellationToken)
        {
            try
            {
                await Task.Run(async () =>
                {
                    var consumer = new ConsumerWrapper(_consumerConfig, Topics);
                    var message = string.Empty;
                    var isSynchronous = false;

                    while (!cancellationToken.IsCancellationRequested)
                    {
                        try
                        {
                            var result = consumer.Consume(cancellationToken);
                            if (string.IsNullOrEmpty(result?.Value)) continue;

                            var dto = result.Value.Deserialize<KafkaRequestDto>();
                            message = dto.Message;
                            isSynchronous = dto.IsSynchronous;
                            if (message == null || dto.HttpAuthContext == null) continue;

                            Helper.SetDisplayLanguage(dto.HttpAuthContext.LanguageCode);
                            using var scope = _serviceScopeFactory.CreateScope();
                            var httpAuthContext = scope.ServiceProvider.GetRequiredService<HttpAuthContext>();
                            MapHttpAuthContext(dto.HttpAuthContext, httpAuthContext);
                            await OnMessageReadAsync(result.Topic, message, result.Key, scope);
                        }
                        catch (Exception loopException)
                        {
                            Logger.LogError(loopException, loopException.Message);

                            try
                            {
                                if (!isSynchronous || message.IsNullOrEmpty()) continue;
                                await WriteErrorToCache(message, loopException);
                            }
                            catch (Exception catchException)
                            {
                                Logger.LogError(catchException, catchException.Message);
                            }
                        }
                        finally
                        {
                            message = string.Empty;
                            isSynchronous = false;
                        }
                    }
                }, cancellationToken);
            }
            catch (Exception exception)
            {
                Logger.LogError(exception, exception.Message);
            }
        }

        protected abstract Task OnMessageReadAsync(string topic, string message, string key, IServiceScope serviceScope);

        private static void MapHttpAuthContext(HttpAuthContext from, HttpAuthContext to)
        {
            to.InstituteId = from.InstituteId;
            to.UserId = from.UserId;
            to.UserRole = from.UserRole;
            to.Application = from.Application;
        }

        private async Task WriteErrorToCache(string requestString, Exception exception)
        {
            var requestJson = JObject.Parse(requestString);
            var cacheKey = requestJson.Property(nameof(KafkaCachingRequestBase.CacheKey), StringComparison.OrdinalIgnoreCase)?.Value.ToString();
            if (!cacheKey.IsNullOrEmpty())
            {
                var responseJson = new JObject
                {
                    new JProperty(nameof(KafkaSyncResponseBase.Error), CreateExceptionToken(exception)),
                    new JProperty(nameof(KafkaSyncResponseBase.IsSuccess), new JValue(false))
                };
                if (exception is DomainException domainException && !domainException.Reason.IsNullOrEmpty())
                {
                    responseJson.Add(new JProperty(nameof(DomainException.Reason), domainException.Reason));
                }

                await CacheService.Set(cacheKey, responseJson.ToString(), TimeSpan.FromMinutes(Redis.Expirations.KafkaSyncRequestMinutes));
            }
        }

        private static JToken CreateExceptionToken(Exception exception)
        {
            var exceptionToken = JToken.FromObject(exception);
            // token need to be added to avoid 'Member was not found' SerializationException during deserialization
            exceptionToken["HelpURL"] = new JValue("");
            exceptionToken["StackTraceString"] = exceptionToken[nameof(Exception.StackTrace)] ?? new JValue("");
            exceptionToken["RemoteStackTraceString"] = new JValue("");

            return exceptionToken;
        }
    }
}
