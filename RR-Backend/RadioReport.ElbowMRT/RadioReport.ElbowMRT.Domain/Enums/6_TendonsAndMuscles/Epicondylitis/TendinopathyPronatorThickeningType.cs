using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums
{
	public enum TendinopathyPronatorThickeningType : byte
	{
		None = 0,

		[RadioReportId("elb_m_060315")]
		RestrictedToPronatorTeresTendon = 1,

        [RadioReportId("elb_m_060316")]
		RestrictedFlexorCarpiRadialisTendon = 2
    }
}
