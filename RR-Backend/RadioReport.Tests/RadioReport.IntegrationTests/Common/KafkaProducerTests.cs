using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Confluent.Kafka;
using FakeItEasy;
using Microsoft.Extensions.Logging;
using RadioReport.Common.Consts;
using RadioReport.Common.Exceptions;
using RadioReport.Common.Logic.Extensions;
using RadioReport.Common.Logic.Kafka;
using RadioReport.Common.Models;
using RadioReport.IntegrationTests.Common.Helpers;
using RadioReport.IntegrationTests.Common.Models;
using Xunit;

namespace RadioReport.IntegrationTests.Common
{
    public class KafkaProducerTests
    {
        private const string _kafkaServer = "localhost:9092";
        private const string _redisServer = "localhost:6379";

        private readonly KafkaProducer _classUnderTest;
        private readonly RedisTestService _redisTestService;

        public KafkaProducerTests()
        {
            var producerConfig = new ProducerConfig { BootstrapServers = _kafkaServer };
            _redisTestService = new RedisTestService(_redisServer);
            _classUnderTest = new KafkaProducer(producerConfig, _redisTestService.CreateRedisService(), A.Fake<ILogger<KafkaProducer>>());
        }

        [Fact]
        public async void SendSynchronousRequestShouldReturnResponse()
        {
            // Arrange
            var request = new KafkaTestRequest("the-topic");
            using var kafkaTestService = new KafkaTestService(_kafkaServer);
            kafkaTestService.SpawnConsumer(request.Topic, async message =>
            {
                var deserializedRequest = DeserializeMessage(message);
                var response = new KafkaTestSyncResponse { Value = "response" };
                await Task.Delay(TimeSpan.FromSeconds(1));
                await _redisTestService.CreateRedisService()
                    .Set(deserializedRequest.CacheKey, response.AsJson(), TimeSpan.FromMinutes(Redis.Expirations.KafkaSyncRequestMinutes));
            });
            // wait until consumers standby
            await Task.Delay(TimeSpan.FromSeconds(8));
            StartTestCancelTimer(TimeSpan.FromSeconds(20));

            // Act
            var response = await _classUnderTest.SendSynchronousRequest<KafkaTestSyncResponse>(request, new HttpAuthContext());

            // Assert
            Assert.NotNull(response);
            Assert.Equal("response", response.Value);
        }

        [Fact]
        public async void SendSynchronousRequestShouldThrowTimeout()
        {
            // Arrange
            var request = new KafkaTestRequest("the-topic");

            // Act + Assert
            await Assert.ThrowsAsync<SynchronousKafkaTimedOutException>(async () =>
                await _classUnderTest.SendSynchronousRequest<KafkaTestSyncResponse>(request, new HttpAuthContext(), 5000));
        }

        [Fact]
        public async void SendObservableRequestShouldCollectConsumerResponses()
        {
            // Arrange
            var request = new KafkaTestRequest("the-topic");
            using var kafkaTestService = new KafkaTestService(_kafkaServer);
            kafkaTestService.SpawnConsumer(request.Topic, async message =>
            {
                var deserializedRequest = DeserializeMessage(message);
                await Task.Delay(TimeSpan.FromSeconds(1));
                await _redisTestService.CreateRedisService().AddToList(deserializedRequest.CacheKey, new ElementClass("response1").AsJson());
            });
            kafkaTestService.SpawnConsumer(request.Topic, async message =>
            {
                var deserializedRequest = DeserializeMessage(message);
                await Task.Delay(TimeSpan.FromSeconds(2));
                await _redisTestService.CreateRedisService().AddToList(deserializedRequest.CacheKey, new ElementClass("response2").AsJson());
            });
            kafkaTestService.SpawnConsumer(request.Topic, async message =>
            {
                var deserializedRequest = DeserializeMessage(message);
                await Task.Delay(TimeSpan.FromSeconds(2));
                await _redisTestService.CreateRedisService().AddToList(deserializedRequest.CacheKey, new ElementClass("response3").AsJson());
            });
            kafkaTestService.SpawnConsumer(request.Topic, async message =>
            {
                var deserializedRequest = DeserializeMessage(message);
                await Task.Delay(TimeSpan.FromSeconds(3));
                await _redisTestService.CreateRedisService().AddToList(deserializedRequest.CacheKey, new ElementClass("response4").AsJson());
            });
            // wait until consumers standby
            await Task.Delay(TimeSpan.FromSeconds(8));
            StartTestCancelTimer(TimeSpan.FromSeconds(20));

            // Act
            var itemEventCount = 0;
            var collectedElements = new List<ElementClass>();
            var cancellationSource = new CancellationTokenSource();
            await _classUnderTest.SendObservableRequest<ElementClass>(request, new HttpAuthContext(), cancellationToken: cancellationSource.Token)
                .Subscribe(
                    element =>
                    {
                        itemEventCount++;
                        collectedElements.Add(element);
                        if (itemEventCount == 4)
                        {
                            cancellationSource.Cancel();
                        }
                    },
                    exception =>
                    {
                        if (!(exception is OperationCanceledException))
                        {
                            throw exception;
                        }
                    });

            // Assert
            Assert.Equal(4, itemEventCount);
            Assert.Equal(4, collectedElements.Count);
            Assert.NotNull(collectedElements.Single(e => e.Value == "response1"));
            Assert.NotNull(collectedElements.Single(e => e.Value == "response2"));
            Assert.NotNull(collectedElements.Single(e => e.Value == "response3"));
            Assert.NotNull(collectedElements.Single(e => e.Value == "response4"));
            Assert.Equal("response1", collectedElements.First().Value);
            Assert.Equal("response4", collectedElements.Last().Value);
        }

        private static KafkaTestRequest DeserializeMessage(string message)
        {
            var deserializedDto = message.Deserialize<KafkaRequestDto>();
            var deserializedRequest = deserializedDto.Message.Deserialize<KafkaTestRequest>();
            
            return deserializedRequest;
        }

        private static void StartTestCancelTimer(TimeSpan duration) => Task.Delay(duration).ContinueWith(t => throw new TimeoutException());
    }
}
