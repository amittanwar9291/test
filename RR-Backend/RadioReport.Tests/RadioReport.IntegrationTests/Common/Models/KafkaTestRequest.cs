using RadioReport.Common.Models;

namespace RadioReport.IntegrationTests.Common.Models
{
    public class KafkaTestRequest : KafkaCachingRequestBase
    {
        public KafkaTestRequest(string topic) : base(topic)
        {
        }
    }
}
