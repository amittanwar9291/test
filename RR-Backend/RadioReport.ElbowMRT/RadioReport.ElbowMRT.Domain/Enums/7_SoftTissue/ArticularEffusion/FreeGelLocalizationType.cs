using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums
{
	public enum FreeGelLocalizationType : byte
	{
		None = 0,

		[RadioReportId("elb_m_070211")]
		RadialSide = 1,

		[RadioReportId("elb_m_070212")]
		UlnarSide = 2
    }
}
