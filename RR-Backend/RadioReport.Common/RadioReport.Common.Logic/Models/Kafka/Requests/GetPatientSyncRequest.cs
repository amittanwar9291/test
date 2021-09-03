using System;
using RadioReport.Common.Consts;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Models.Kafka.Requests
{
    public class GetPatientSyncRequest : KafkaCachingRequestBase
    {
        public GetPatientSyncRequest() : base(KafkaTopic.Request.GetPatientSync)
        {
        }

        public Guid PatientId { get; set; }
    }
}
