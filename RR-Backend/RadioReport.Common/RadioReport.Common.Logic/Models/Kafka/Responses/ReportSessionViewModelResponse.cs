using System.Collections.Generic;
using RadioReport.Common.Logic.Models.ReportModels;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Models.Kafka.Responses
{
    public class ReportSessionViewModelResponse : KafkaSyncResponseBase
    {
        public List<ReportSessionViewModel> ReportSessions { get; } = new List<ReportSessionViewModel>();
    }
}
