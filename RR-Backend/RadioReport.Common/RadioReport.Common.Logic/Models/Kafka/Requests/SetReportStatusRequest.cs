using System;
using RadioReport.Common.Consts;
using RadioReport.Common.Logic.Enums;
using RadioReport.Common.Models;

namespace RadioReport.Common.Logic.Models.Kafka.Requests
{
    public class SetReportStatusRequest : KafkaCachingRequestBase
    {
        public SetReportStatusRequest() : base(KafkaTopic.Request.SetReportStatus)
        {
        }

        public string StudyInstanceUid { get; set; }
        public Guid? ReportId { get; set; }
        public ReportStatus Status { get; set; }
    }
}
