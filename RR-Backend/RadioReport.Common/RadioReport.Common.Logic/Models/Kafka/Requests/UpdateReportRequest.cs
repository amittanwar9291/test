using System;
using RadioReport.Common.Logic.Enums;

namespace RadioReport.Common.Logic.Models.Kafka.Requests
{
    public class UpdateReportRequest
    {
        public Guid ReportId { get; set; }
        public ReportStatus ReportStatus { get; set; }
        public bool IsLocked { get; set; }
    }
}
