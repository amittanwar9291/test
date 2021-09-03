using System;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Models.Kafka.Responses
{
    public class LicenseIncrementSyncResponse : KafkaSyncResponseBase
    {
        public LicenseIncrementResult IncrementResult { get; set; }
        public Guid LicenseFractionId { get; set; }
    }
}
