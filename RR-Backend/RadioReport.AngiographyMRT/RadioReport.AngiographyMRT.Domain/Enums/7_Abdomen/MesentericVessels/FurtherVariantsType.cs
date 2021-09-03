using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.Abdomen
{
	public enum FurtherVariantsType : byte
	{
		None = 0,

		[RadioReportId("ang_m_070502", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        GastroduodenalArteryAberrantHepaticArtery = 1,

		[RadioReportId("ang_m_070503", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        GastroduodenalArterySplenicArtery = 2,

		[RadioReportId("ang_m_070504", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        MedialSegment = 3
	}
}
