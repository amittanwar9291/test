using System;
using System.Threading;
using System.Threading.Tasks;
using Confluent.Kafka;
using RadioReport.Common.Logic.Kafka;

namespace RadioReport.IntegrationTests.Common.Helpers
{
    public class KafkaTestService : IDisposable
    {
        private readonly string _kafkaServer;
        private readonly CancellationTokenSource _cancellationTokenSource = new CancellationTokenSource();

        public KafkaTestService(string kafkaServer)
        {
            _kafkaServer = kafkaServer;
        }

        public void SpawnConsumer(string topic, Action<string> consumeAction)
        {
            var config = new ConsumerConfig
            {
                BootstrapServers = _kafkaServer,
                GroupId = Guid.NewGuid().ToString()
            };
            Task.Run(() =>
            {
                var consumer = new ConsumerWrapper(config, new[] { topic });

                while (!_cancellationTokenSource.Token.IsCancellationRequested)
                {
                    var result = consumer.Consume(_cancellationTokenSource.Token);
                    if (!string.IsNullOrEmpty(result?.Value))
                    {
                        consumeAction(result.Value);
                    }
                }
            }, _cancellationTokenSource.Token);
        }

        public void Dispose() => _cancellationTokenSource.Cancel();
    }
}
