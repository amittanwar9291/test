using System;
using RadioReport.Common.Logic.Enums;

namespace RadioReport.Common.Logic.Models.Http.Requests
{
    public class ExportRequest
    {
        public ExportFormatType ExportFormatType { get; set; }
        public string StudyInstanceUid { get; set; }
        public Guid? ReportId { get; set; }
        public string AccessionNumber { get; set; }
        public string ReportType { get; set; } = "Doctor";
        public bool AddReport { get; set; }
        public Guid InstituteId { get; set; }
        
        //Optional Parameters
        public string LanguageCode { get; set; }
        public LocalizerType? LocalizerType { get; set; }
        public bool? LocalizersBackground { get; set; }
        public bool? IsReferenceImage { get; set; }
        public bool? IsIcd10 { get; set; }
    }
}