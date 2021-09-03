using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Rectum
{
	public enum GrowthPatternType : byte
	{
		None = 0,

		[RadioReportId("pel_m_080257", InstanceName = nameof(RectumFindingType.SigmaMass))]
		Exophytic = 1,

		[RadioReportId("pel_m_080258", InstanceName = nameof(RectumFindingType.SigmaMass))]
		Endophytic = 2

	}
}
