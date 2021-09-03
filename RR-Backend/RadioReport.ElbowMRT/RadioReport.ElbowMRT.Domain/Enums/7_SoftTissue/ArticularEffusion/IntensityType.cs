using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums
{
	public enum IntensityType : byte
	{
		None = 0,

		[RadioReportId("elb_m_070203", InstanceName = nameof(SoftTissueFindingType.ArticularEffusion))]
		Low = 1,

		[RadioReportId("elb_m_070204", InstanceName = nameof(SoftTissueFindingType.ArticularEffusion))]
		Marked = 2

	}
}
