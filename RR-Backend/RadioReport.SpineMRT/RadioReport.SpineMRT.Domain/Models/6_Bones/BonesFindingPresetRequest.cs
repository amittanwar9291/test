using RadioReport.SpineMRT.Domain.Enums;

namespace RadioReport.SpineMRT.Domain.Models
{
    public class BonesFindingPresetRequest
    {
        public BonesFindingType FindingType { get; set; }

        public BonesDiagnosisType BonesDiagnosisType { get; set; }
    }
}
