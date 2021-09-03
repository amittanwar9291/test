using RadioReport.Common.Consts;
using RadioReport.Common.Enums;
using RadioReport.Common.Logic.Models.Http.Requests;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Models.Kafka.Requests
{
    public class GetReportExportSyncRequest : KafkaCachingRequestBase
    {
        public GetReportExportSyncRequest(ModuleType moduleType) : base(KafkaTopic.Create(moduleType, KafkaTopic.Request.ExportReport))
        {
        }
        
        public GetReportExportSyncRequest() : base(KafkaTopic.Request.ExportReport)
        {
        }

        public ExportRequest ExportRequest { get; set; }
    }
}