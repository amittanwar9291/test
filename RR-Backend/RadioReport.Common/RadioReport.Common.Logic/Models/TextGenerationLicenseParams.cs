using RadioReport.Common.Logic.Enums;

namespace RadioReport.Common.Logic.Models
{
    public class TextGenerationLicenseParams
    {
        public bool ICD10Code { get; set; }
        public string Language { get; set; }
        public ReportTypes ReportType { get; set; }
    }
}
