using RadioReport.Common.Logic.Models.Dtos;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Models.Kafka.Responses
{
    public class GetPatientSyncResponse : KafkaSyncResponseBase
    {
        public PatientDto PatientDto { get; set; }
    }
}
