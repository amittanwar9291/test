using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Models.Kafka.Responses
{
    public class GetReportExportSyncResponse : KafkaSyncResponseBase
    {
        public ReportResult ReportResult { get; set; }
        public Report Report { get; set; }
    }
}