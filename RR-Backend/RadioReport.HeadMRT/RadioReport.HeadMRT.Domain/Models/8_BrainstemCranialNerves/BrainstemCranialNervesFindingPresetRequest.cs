using RadioReport.HeadMRT.Domain.Enums.BrainstemCranialNerves;

namespace RadioReport.HeadMRT.Domain.Models
{
    public class BrainstemCranialNervesFindingPresetRequest
    {
        public BrainstemCranialNervesFindingType FindingType { get; set; }

        public BrainstemCranialNervesDiagnosisType DifferentialDiagnosisType { get; set; }
    }
}
