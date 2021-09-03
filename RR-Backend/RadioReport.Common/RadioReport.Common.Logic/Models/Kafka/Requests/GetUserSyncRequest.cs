using System;
using RadioReport.Common.Consts;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Models.Kafka.Requests
{
    public class GetUserSyncRequest : KafkaCachingRequestBase
    {
        public GetUserSyncRequest() : base(KafkaTopic.Request.GetUserSync)
        {
        }

        public Guid UserId { get; set; }
        public string UserName { get; set; }
    }
}
