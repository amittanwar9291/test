using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Models.Kafka.Responses
{
    public class AddReportSyncResponse : KafkaSyncResponseBase
    {
        public ReportModels.Report Report { get; set; }
    }
}
