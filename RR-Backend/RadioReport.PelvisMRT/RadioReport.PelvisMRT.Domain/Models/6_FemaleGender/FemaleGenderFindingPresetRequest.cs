using RadioReport.PelvisMRT.Domain.Enums.FemaleGender;

namespace RadioReport.PelvisMRT.Domain.Models
{
    public class FemaleGenderFindingPresetRequest
    {
        public FemaleGenderFindingType FindingType { get; set; }

        public FemaleGenderDiagnosisType DifferentialDiagnosis { get; set; }

        public DegenerationType DegenerationType1 { get; set; }
    }
}