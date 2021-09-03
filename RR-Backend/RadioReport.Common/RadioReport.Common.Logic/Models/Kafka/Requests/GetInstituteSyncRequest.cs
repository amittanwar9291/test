using System;
using System.Collections.Generic;
using RadioReport.Common.Consts;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Models.Kafka.Requests
{
    public class GetInstituteSyncRequest : KafkaCachingRequestBase
    {
        public GetInstituteSyncRequest(): base(KafkaTopic.Request.GetInstitute)
        {
        }

        public Guid InstituteId { get; set; }
        public InstituteDetailLevel Level { get; set; }
    }
}
