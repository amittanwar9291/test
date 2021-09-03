using RadioReport.HeadMRT.Domain.Enums.FacialSkull;

namespace RadioReport.HeadMRT.Domain.Models
{
    public class FacialSkullFindingPresetRequest
    {
        public FacialSkullFindingType FindingType { get; set; }

        public string DifferentialDiagnosisType { get; set; }
    }
}
