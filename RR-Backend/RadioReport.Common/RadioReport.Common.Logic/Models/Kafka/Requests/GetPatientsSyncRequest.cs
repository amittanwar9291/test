using System;
using System.Collections.Generic;
using RadioReport.Common.Consts;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Models.Kafka.Requests
{
    public class GetPatientsSyncRequest : KafkaCachingRequestBase
    {
        public GetPatientsSyncRequest() : base(KafkaTopic.Request.GetPatientsSync)
        {
        }

        public List<Guid> PatientIds { get; } = new List<Guid>();
    }
}
