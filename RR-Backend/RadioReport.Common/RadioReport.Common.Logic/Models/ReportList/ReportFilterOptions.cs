using System;
using System.Collections.Generic;
using RadioReport.Common.Logic.Enums;

namespace RadioReport.Common.Logic.Models.ReportList
{
    public class ReportFilterOptions
    {
        public List<ReportStatus> ReportStatuses { get; } = new List<ReportStatus>();
        public List<string> Examinations { get; } = new List<string>();
        public List<Guid> UserIds { get; } = new List<Guid>();
        public int? Age { get; set; }
        public DateTime? ExaminationDate { get; set; }
        public DateTime? FindingsDate { get; set; }
    }
}
