using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.Abdomen
{
	public enum RenalArteryLocalizationType : byte
	{
		None = 0,

		[RadioReportId("ang_m_070317", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        Ostial = 1,

		[RadioReportId("ang_m_070318", InstanceName = nameof(AbdomenFindingType.RenalArtery), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.RenalArteryStenosis))]
        [RadioReportId("ang_m_070353", InstanceName = nameof(AbdomenFindingType.RenalArtery), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.Aneurysm))]
        Proximal = 2,

		[RadioReportId("ang_m_070319", InstanceName = nameof(AbdomenFindingType.RenalArtery), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.RenalArteryStenosis))]
        [RadioReportId("ang_m_070354", InstanceName = nameof(AbdomenFindingType.RenalArtery), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.Aneurysm))]
        Distal = 3,

        [RadioReportId("ang_m_070355", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        Intraparenchymal = 4
    }
}
