using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.Aorta
{
	public enum DetailsCongenitalVascularRingsType : byte
	{
		None = 0,

		[RadioReportId("ang_m_060309", InstanceName = nameof(AortaFindingType.AorticAbnormalities))]
        CommonOrigin = 1,

		[RadioReportId("ang_m_060310", InstanceName = nameof(AortaFindingType.AorticAbnormalities))]
        LeftCommonCarotidArtey = 2,

		[RadioReportId("ang_m_060311", InstanceName = nameof(AortaFindingType.AorticAbnormalities))]
        LeftVertebralArteryOrigin = 3,

		[RadioReportId("ang_m_060312", InstanceName = nameof(AortaFindingType.AorticAbnormalities))]
        AberrantRightSubclavianArtery = 4,

		[RadioReportId("ang_m_060314", InstanceName = nameof(AortaFindingType.AorticAbnormalities))]
        RightAorticArch = 5,

		[RadioReportId("ang_m_060316", InstanceName = nameof(AortaFindingType.AorticAbnormalities))]
        DoubleAorticArch = 6
	}
}
