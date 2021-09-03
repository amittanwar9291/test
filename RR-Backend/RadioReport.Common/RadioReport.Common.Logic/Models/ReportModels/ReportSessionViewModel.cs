using System;
using RadioReport.Common.Logic.Enums;

namespace RadioReport.Common.Logic.Models.ReportModels
{
    public class ReportSessionViewModel
    {
        public Guid ReportSessionId { get; set; }
        public Guid ReportId { get; set; }
        public Guid UserId { get; set; }
        public DateTime ReportSessionCreationDate { get; set; }
        public DateTime ReportCreationDate { get; set; }
        public string ModuleName { get; set; }
        public ReportStatus ReportStatus { get; set; }
        public string UserInitial { get; set; }
    }
}
