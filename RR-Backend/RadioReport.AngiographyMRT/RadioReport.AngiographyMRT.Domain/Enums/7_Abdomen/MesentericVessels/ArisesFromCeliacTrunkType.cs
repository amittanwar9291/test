using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.Abdomen
{
	public enum ArisesFromCeliacTrunkType : byte
	{
		None = 0,

		[RadioReportId("ang_m_070418", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
		DorsalPancreaticArtery = 1,

		[RadioReportId("ang_m_070419", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        RightHepaticArtery = 2,

		[RadioReportId("ang_m_070420", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        GastroduodenalArtery = 3,

		[RadioReportId("ang_m_070421", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        InferiorPhrenicArteries = 4,

		[RadioReportId("ang_m_070422", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        LeftHepaticArtery = 5,

		[RadioReportId("ang_m_070423", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        TrifurkationOfRHALHAAndGDA = 6
	}
}
