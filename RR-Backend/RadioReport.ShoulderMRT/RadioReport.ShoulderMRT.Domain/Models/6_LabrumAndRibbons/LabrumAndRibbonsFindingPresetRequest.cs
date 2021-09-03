
using RadioReport.ShoulderMRT.Domain.Enums;

namespace RadioReport.ShoulderMRT.Domain.Models
{
    public class LabrumAndRibbonsFindingPresetRequest
    {
        public DiagnosisType Diagnosis { get; set; }

        public LabrumLocations LabrumLocation { get; set; }
    }
}
