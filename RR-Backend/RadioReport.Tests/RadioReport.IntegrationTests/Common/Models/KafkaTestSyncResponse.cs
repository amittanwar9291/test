using RadioReport.Common.Models;

namespace RadioReport.IntegrationTests.Common.Models
{
    public class KafkaTestSyncResponse : KafkaSyncResponseBase
    {
        public string Value { get; set; }
    }
}
