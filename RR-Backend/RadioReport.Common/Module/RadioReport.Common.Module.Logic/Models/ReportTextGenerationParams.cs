using System;
using RadioReport.Common.Logic.Enums;

namespace RadioReport.Common.Module.Logic.Models
{
    public class ReportTextGenerationParams
    {
        public Guid ReportId { get; set; }
        public string ReportTypeName { get; set; }
        public string LanguageCode { get; set; }
        public LocalizerType LocalizerType { get; set; }
        public bool LocalizerBackground { get; set; }
        public bool IsReferenceImage { get; set; }
        public bool IsIcd10 { get; set; }
    }
}
