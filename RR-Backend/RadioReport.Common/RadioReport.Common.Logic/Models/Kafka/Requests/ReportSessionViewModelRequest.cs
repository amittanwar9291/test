using RadioReport.Common.Consts;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Models.Kafka.Requests
{
    public class ReportSessionViewModelRequest : KafkaCachingRequestBase
    {
        public ReportSessionViewModelRequest() : base(KafkaTopic.Request.GetReportSessionViewModel)
        {
        }
    }
}
