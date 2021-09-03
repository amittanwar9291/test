using System.Collections.Generic;
using RadioReport.Common.Logic.Models.Dtos;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Models.Kafka.Responses
{
    public class GetPatientsSyncResponse : KafkaSyncResponseBase
    {
        public List<PatientDto> PatientDtos { get; } = new List<PatientDto>();
    }
}
