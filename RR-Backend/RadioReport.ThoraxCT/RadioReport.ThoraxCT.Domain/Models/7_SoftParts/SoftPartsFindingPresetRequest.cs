using RadioReport.ThoraxCT.Domain.Enums;

namespace RadioReport.ThoraxCT.Domain.Models
{
	public class SoftPartsFindingPresetRequest
  {
    public SoftPartsFindingType FindingType { get; set; }

    public SoftPartsDiagnosisType DifferentialDiagnosis { get; set; }
  }
}
