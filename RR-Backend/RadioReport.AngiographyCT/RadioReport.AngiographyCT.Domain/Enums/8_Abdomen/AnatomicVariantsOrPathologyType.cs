using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.Abdomen
{
    public enum AnatomicVariantsOrPathologyType : byte
    {
        None = 0,

        [RadioReportId("ang_c_080205", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        AnatomicVariantsArtery = 1,

        [RadioReportId("ang_c_080206", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        AnatomicVariantsKidney = 2,

        [RadioReportId("ang_c_080207", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        RenalArteryStenosis = 3,

        [RadioReportId("ang_c_080208", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        FollowUpAfterStenting = 4,

        [RadioReportId("ang_c_080209", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        FibromuscularDysplasia = 5,

        [RadioReportId("ang_c_080210", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        [RadioReportId("ang_c_080215", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        Aneurysm = 6,

        [RadioReportId("ang_c_080211", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        StatusPostKidneyTransplant = 7,

        [RadioReportId("ang_c_080212", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        EmbolicRenalArteryOcclusion = 8,

        [RadioReportId("ang_c_080213", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        AnatomicVariants = 9,

        [RadioReportId("ang_c_080214", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        MesentericArteryStenosis = 10,

        [RadioReportId("ang_c_080216", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        StatusPostLiverTransplantation = 11
    }
}
