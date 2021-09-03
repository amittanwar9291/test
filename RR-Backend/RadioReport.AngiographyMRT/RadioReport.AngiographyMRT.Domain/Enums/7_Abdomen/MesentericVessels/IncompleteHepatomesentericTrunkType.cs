using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.Abdomen
{
	public enum IncompleteHepatomesentericTrunkType : byte
	{
		None = 0,

		[RadioReportId("ang_m_0703150", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        RightHepatomesentericTrunk = 1,

		[RadioReportId("ang_m_0703151", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        LeftHepatomesentericTrunk = 2
	}
}
