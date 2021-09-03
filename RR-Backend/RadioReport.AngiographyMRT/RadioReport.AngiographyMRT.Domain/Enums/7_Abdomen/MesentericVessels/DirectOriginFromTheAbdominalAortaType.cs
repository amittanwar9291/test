using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.Abdomen
{
	public enum DirectOriginFromTheAbdominalAortaType : byte
	{
		None = 0,

		[RadioReportId("ang_m_070395", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        LeftGastricArtery = 1,

		[RadioReportId("ang_m_070396", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        CommonHepaticArtery = 2,

		[RadioReportId("ang_m_070397", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        CommonOrigin = 3
    }
}
