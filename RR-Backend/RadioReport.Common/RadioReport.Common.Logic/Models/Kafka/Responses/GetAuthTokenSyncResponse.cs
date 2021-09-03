using RadioReport.Common.Logic.Models.Auth;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Models.Kafka.Responses
{
    public class GetAuthTokenSyncResponse : KafkaSyncResponseBase
    {
        public bool IsInvalidated { get; set; }
        public AuthToken AuthToken { get; set; }
    }
}
