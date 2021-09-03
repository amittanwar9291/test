using RadioReport.Common.Logic.Models.Dtos;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Models.Kafka.Responses
{
    public class GetOrAddPatientSyncResponse : KafkaSyncResponseBase
    {
        public bool IsAdded { get; set; }
        public PatientDto PatientDto { get; set; }
    }
}
