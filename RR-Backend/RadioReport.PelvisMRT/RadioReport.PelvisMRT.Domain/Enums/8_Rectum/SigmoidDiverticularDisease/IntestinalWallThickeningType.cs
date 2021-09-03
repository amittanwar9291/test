using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Rectum
{
	public enum IntestinalWallThickeningType : byte
	{
		None = 0,

		[RadioReportId("pel_m_080325", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
		Focal = 1,

		[RadioReportId("pel_m_080326", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
		Ubiquitous = 2

	}
}
