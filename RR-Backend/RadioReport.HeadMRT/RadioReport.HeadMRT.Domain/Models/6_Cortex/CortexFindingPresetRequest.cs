using RadioReport.HeadMRT.Domain.Enums.Cortex;

namespace RadioReport.HeadMRT.Domain.Models
{
    public class CortexFindingPresetRequest
    {
        public CortexFindingType FindingType { get; set; }

        public CortexDifferentialDiagnosisType DifferentialDiagnosisType { get; set; }
    }
}
