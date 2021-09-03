using RadioReport.SpineMRT.Domain.Enums.SpinalCanal;

namespace RadioReport.SpineMRT.Domain.Models
{
    public class SpinalCanalFindingPresetRequest
    {
        public SpinalCanalDifferentialDiagnosisType SpinalCanalDifferentialDiagnosisType { get; set; }

        public SpinalCanalFindingType FindingType { get; set; }

        public SpinalCanalLocations SpinalCanalLocation { get; set; }
    }
}
