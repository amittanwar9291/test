using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.Abdomen
{
	public enum AnatomicVariantsOrPathologyType : byte
	{
		None = 0,

		[RadioReportId("ang_m_070205", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        AnatomicVariantsArtery = 1,

		[RadioReportId("ang_m_070206", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        AnatomicVariantsKidney = 2,

		[RadioReportId("ang_m_070207", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
		RenalArteryStenosis = 3,

		[RadioReportId("ang_m_070208", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        FollowUpAfterStenting = 4,

		[RadioReportId("ang_m_070209", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
		FibromuscularDysplasia = 5,

		[RadioReportId("ang_m_070210", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        [RadioReportId("ang_m_070215", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        Aneurysm = 6,

		[RadioReportId("ang_m_070211", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        StatusPostKidneyTransplant = 7,

		[RadioReportId("ang_m_070212", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
		EmbolicRenalArteryOcclusion = 8,

        [RadioReportId("ang_m_070213", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        AnatomicVariants = 9,

        [RadioReportId("ang_m_070214", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        MesentericArteryStenosis = 10,

        [RadioReportId("ang_m_070216", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        StatusPostLiverTransplantation = 11
    }
}
