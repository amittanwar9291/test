using System;
using System.Collections.Generic;
using RadioReport.Common.Logic.Interfaces;

namespace RadioReport.Common.Logic.Models.ReportModels
{
    public class ReportResult : ModelBase, IDeletableItem
    {
        public Guid ReportId { get; set; }
        public Guid InstituteId { get; set; }
        public string ReportTypeName { get; set; }
        public string PatientData { get; set; }
        public string ReportHtml { get; set; }
        public List<ReportSummaryModel> ReportSummary { get; set; }
        public string Discussion { get; set; }
        public bool IsLocalizer { get; set; }
        public bool IsReferenceImage { get; set; }
        public bool IsICD10 { get; set; }
        public string Approved { get; set; }
        public bool IsDeleted { get; set; }
    }
}
