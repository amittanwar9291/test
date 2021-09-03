using RadioReport.ThoraxCT.Domain.Enums;

namespace RadioReport.ThoraxCT.Domain.Models
{
	public class BonesFindingPresetRequest
  {
    public BonesFindingType FindingType { get; set; }

    public BonesDifferentialDiagnosisType BonesDifferentialDiagnosisType { get; set; }
  }
}
