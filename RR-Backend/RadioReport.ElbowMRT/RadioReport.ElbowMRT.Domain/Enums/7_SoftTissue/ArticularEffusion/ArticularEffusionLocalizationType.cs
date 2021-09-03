using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums
{
	public enum ArticularEffusionLocalizationType : byte
	{
		None = 0,

		[RadioReportId("elb_m_0703223")]
		Radial = 1,

		[RadioReportId("elb_m_0703224")]
		Ulnar = 2

	}
}
