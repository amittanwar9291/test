using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Models.Kafka.Responses
{
    public class ValidateClientTokenResponse : KafkaSyncResponseBase
    {
        public bool IsValid { get; set; }
    }
}