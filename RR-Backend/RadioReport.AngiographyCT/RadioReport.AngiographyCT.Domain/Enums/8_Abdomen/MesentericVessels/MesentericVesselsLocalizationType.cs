using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.Abdomen
{
    public enum MesentericVesselsLocalizationType : byte
    {
		None = 0,

		[RadioReportId("ang_c_0803107", InstanceName = nameof(AbdomenFindingType.MesentericVessels), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.MesentericArteryStenosis))]
        [RadioReportId("ang_c_0803124", InstanceName = nameof(AbdomenFindingType.MesentericVessels), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.Aneurysm))]
        CeliacTrunk = 1,

		[RadioReportId("ang_c_0803108", InstanceName = nameof(AbdomenFindingType.MesentericVessels), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.MesentericArteryStenosis))]
        [RadioReportId("ang_c_0803122", InstanceName = nameof(AbdomenFindingType.MesentericVessels), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.Aneurysm))]
        CommonHepaticArtery = 2,

		[RadioReportId("ang_c_0803109", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        HepaticArteryProper = 3,

		[RadioReportId("ang_c_0803110", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        LeftGastricArtery = 4,

		[RadioReportId("ang_c_0803111", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        RightGastricArtery = 5,

		[RadioReportId("ang_c_0803112", InstanceName = nameof(AbdomenFindingType.MesentericVessels), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.MesentericArteryStenosis))]
        [RadioReportId("ang_c_0803121", InstanceName = nameof(AbdomenFindingType.MesentericVessels), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.Aneurysm))]
        SplenicArtery = 6,

		[RadioReportId("ang_c_0803113", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        DorsalPancreaticArtery = 7,

		[RadioReportId("ang_c_0803114", InstanceName = nameof(AbdomenFindingType.MesentericVessels), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.MesentericArteryStenosis))]
        [RadioReportId("ang_c_0803123", InstanceName = nameof(AbdomenFindingType.MesentericVessels), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.Aneurysm))]
        SuperiorMesenteryArtery = 8,

		[RadioReportId("ang_c_0803115", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        InferiorPancreaticoduodenalArtery = 9,

		[RadioReportId("ang_c_0803116", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        MiddleColicArtery = 10,

		[RadioReportId("ang_c_0803117", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        InferiorMesenteryArtery = 11,

		[RadioReportId("ang_c_0803118", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        LeftColicArtery = 12,

        [RadioReportId("ang_c_0803168", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        GastroduodenalArtery = 13
    }
}
