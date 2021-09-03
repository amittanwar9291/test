using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.Abdomen
{
    public enum MesentericVesselsLocalizationType : byte
    {
		None = 0,

		[RadioReportId("ang_m_0703107", InstanceName = nameof(AbdomenFindingType.MesentericVessels), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.MesentericArteryStenosis))]
        [RadioReportId("ang_m_0703124", InstanceName = nameof(AbdomenFindingType.MesentericVessels), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.Aneurysm))]
        CeliacTrunk = 1,

		[RadioReportId("ang_m_0703108", InstanceName = nameof(AbdomenFindingType.MesentericVessels), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.MesentericArteryStenosis))]
        [RadioReportId("ang_m_0703122", InstanceName = nameof(AbdomenFindingType.MesentericVessels), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.Aneurysm))]
        CommonHepaticArtery = 2,

		[RadioReportId("ang_m_0703109", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        HepaticArteryProper = 3,

		[RadioReportId("ang_m_0703110", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        LeftGastricArtery = 4,

		[RadioReportId("ang_m_0703111", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        RightGastricArtery = 5,

		[RadioReportId("ang_m_0703112", InstanceName = nameof(AbdomenFindingType.MesentericVessels), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.MesentericArteryStenosis))]
        [RadioReportId("ang_m_0703121", InstanceName = nameof(AbdomenFindingType.MesentericVessels), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.Aneurysm))]
        SplenicArtery = 6,

		[RadioReportId("ang_m_0703113", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        DorsalPancreaticArtery = 7,

		[RadioReportId("ang_m_0703114", InstanceName = nameof(AbdomenFindingType.MesentericVessels), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.MesentericArteryStenosis))]
        [RadioReportId("ang_m_0703123", InstanceName = nameof(AbdomenFindingType.MesentericVessels), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.Aneurysm))]
        SuperiorMesenteryArtery = 8,

		[RadioReportId("ang_m_0703115", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        InferiorPancreaticoduodenalArtery = 9,

		[RadioReportId("ang_m_0703116", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        MiddleColicArtery = 10,

		[RadioReportId("ang_m_0703117", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        InferiorMesenteryArtery = 11,

		[RadioReportId("ang_m_0703118", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        LeftColicArtery = 12
    }
}
