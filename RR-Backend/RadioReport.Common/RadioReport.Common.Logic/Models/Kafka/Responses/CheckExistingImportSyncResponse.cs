using System;
using RadioReport.Common.Enums;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Models.Kafka.Responses
{
    public class CheckExistingImportSyncResponse : KafkaSyncResponseBase
    {
        public bool IsExisting { get; set; }
        public Guid? ReportId { get; set; }
        public ModuleType? ModuleType { get; set; }
    }
}
