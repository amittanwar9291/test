using RadioReport.Common.Logic.Models.User;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Models.Kafka.Responses
{
    public class GetUserSyncResponse : KafkaSyncResponseBase
    {
        public UserViewModel User { get; set; }
    }
}
