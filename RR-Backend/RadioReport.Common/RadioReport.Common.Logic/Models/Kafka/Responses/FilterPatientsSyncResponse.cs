using System;
using System.Collections.Generic;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Models.Kafka.Responses
{
    public class FilterPatientsSyncResponse : KafkaSyncResponseBase
    {
        public List<Guid> PatientIds { get; } = new List<Guid>();
    }
}
