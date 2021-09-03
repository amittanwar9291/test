using RadioReport.Common.Logic.Models.User;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Models.Kafka.Responses
{
    public class AddUserSyncResponse : KafkaSyncResponseBase
    {
        public UserViewModel User { get; set; }
    }
}
