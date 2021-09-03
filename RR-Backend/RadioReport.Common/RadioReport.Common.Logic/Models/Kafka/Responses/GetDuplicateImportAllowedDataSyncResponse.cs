using System.Collections.Generic;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Models.Kafka.Responses
{
    public class GetDuplicateImportAllowedDataSyncResponse : KafkaSyncResponseBase
    {
        public bool IsDuplicateAllowed { get; set; }
        public List<string> AvailableModules { get; } = new List<string>();
    }
}
