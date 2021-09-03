using RadioReport.SpineMRT.Domain.Enums;

namespace RadioReport.SpineMRT.Domain.Models
{
    public class SoftTissuesFindingPresetRequest
    {
        public SoftTissuesDiagnosisType SoftTissuesDiagnosisType { get; set; }

        public SoftTissuesFindingType FindingType { get; set; }

        public HematomaCharacterizationType HematomaCharacterizationType { get; set; }
    }
}
