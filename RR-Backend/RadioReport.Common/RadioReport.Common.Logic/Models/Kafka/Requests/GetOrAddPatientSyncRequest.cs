using RadioReport.Common.Consts;
using RadioReport.Common.Logic.Models.Dtos;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Models.Kafka.Requests
{
    public class GetOrAddPatientSyncRequest : KafkaCachingRequestBase
    {
        public GetOrAddPatientSyncRequest() : base(KafkaTopic.Request.GetOrAddPatientSync)
        {
        }

        public PatientDto PatientDto { get; set; }
    }
}
