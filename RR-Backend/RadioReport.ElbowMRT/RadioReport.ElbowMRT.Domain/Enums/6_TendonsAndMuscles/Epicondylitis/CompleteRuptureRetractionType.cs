using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Models
{
    public enum CompleteRuptureRetractionType : byte
	{
		None = 0,

		[RadioReportId("elb_m_0604105")]
		RestrictedPronatorTeresTendon = 1,

        [RadioReportId("elb_m_0604106")]
		RestrictedFlexorCarpiRadialisTendon = 2
    }
}