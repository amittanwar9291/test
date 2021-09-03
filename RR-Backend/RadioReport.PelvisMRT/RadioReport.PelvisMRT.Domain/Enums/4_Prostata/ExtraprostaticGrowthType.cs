using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Prostata
{
    public enum ExtraprostaticGrowthType : byte
	{
		None = 0,

		[RadioReportId("pel_m_040321")]
		NoPenetrationOfPseudocapsule = 1,

		[RadioReportId("pel_m_040322")]
		PenetrationOfPseudocapsule = 2


	}
}
