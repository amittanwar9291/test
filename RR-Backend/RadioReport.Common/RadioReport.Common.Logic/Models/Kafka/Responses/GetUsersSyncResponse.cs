using System.Collections.Generic;
using RadioReport.Common.Logic.Models.User;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Models.Kafka.Responses
{
    public class GetUsersSyncResponse : KafkaSyncResponseBase
    {
        public List<UserViewModel> Users { get; } = new List<UserViewModel>();
    }
}
