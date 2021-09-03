using System;
using System.Collections.Generic;
using RadioReport.Common.Consts;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Models.Kafka.Requests
{
    public class GetUsersSyncRequest : KafkaCachingRequestBase
    {
        public GetUsersSyncRequest() : base(KafkaTopic.Request.GetUsersSync)
        {
        }

        public List<Guid> UserIds { get; } = new List<Guid>();
    }
}
