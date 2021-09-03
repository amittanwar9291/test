using RadioReport.PelvisMRT.Domain.Enums.MaleGender;

namespace RadioReport.PelvisMRT.Domain.Models
{
    public class MaleGenderFindingPresetRequest
    {
        public MaleGenderFindingType FindingType { get; set; }

        public MaleGenderDiagnosisType DifferentialDiagnosisType { get; set; }
    }
}
