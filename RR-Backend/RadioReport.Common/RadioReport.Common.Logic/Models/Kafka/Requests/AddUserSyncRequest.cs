using System;
using RadioReport.Common.Consts;
using RadioReport.Common.Logic.Models.User;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Models.Kafka.Requests
{
    public class AddUserSyncRequest : KafkaCachingRequestBase
    {
        public AddUserSyncRequest() : base(KafkaTopic.Request.AddUserSync)
        {
        }

        public UserViewModel User { get; set; }
    }
}
