using RadioReport.Common.Consts;
using RadioReport.Common.Enums;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Models.Kafka.Requests
{
    public class AddReportSyncRequest : KafkaCachingRequestBase
    {
        public AddReportSyncRequest(ModuleType moduleType) : base(KafkaTopic.Create(moduleType, KafkaTopic.Request.AddReportSync))
        {
        }

        public ReportModels.Report Report { get; set; }
    }
}
