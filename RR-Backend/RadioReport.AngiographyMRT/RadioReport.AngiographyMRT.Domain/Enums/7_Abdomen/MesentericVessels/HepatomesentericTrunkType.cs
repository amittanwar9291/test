using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.Abdomen
{
	public enum HepatomesentericTrunkType : byte
	{
		None = 0,

		[RadioReportId("ang_m_0703101", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        Complete = 1,

		[RadioReportId("ang_m_0703103", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        Incomplete = 2
	}
}
