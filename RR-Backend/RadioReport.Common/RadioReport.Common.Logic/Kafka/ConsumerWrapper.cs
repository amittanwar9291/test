using System.Collections.Generic;
using System.Linq;
using System.Threading;
using Confluent.Kafka;
using RadioReport.Common.Exceptions;

namespace RadioReport.Common.Logic.Kafka
{
    public class ConsumerWrapper
    {
        private readonly IConsumer<string, string> _consumer;

        public ConsumerWrapper(ConsumerConfig config, IEnumerable<string> topics)
        {
            _consumer = new ConsumerBuilder<string, string>(config).Build();
            if (topics == null || !topics.Any())
            {
                throw new MissingKafkaTopicException("Consumer cannot be created without a topic");
            }
            _consumer.Subscribe(topics);
        }

        public ConsumeResult<string, string> Consume(CancellationToken cts)
        {
            var consumeResult = _consumer.Consume(cts);

            return consumeResult.IsPartitionEOF ? null : consumeResult;
        }
    }
}
