using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.Abdomen
{
	public enum RenalArteryLocalizationType : byte
	{
		None = 0,

		[RadioReportId("ang_c_080317", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        Ostial = 1,

		[RadioReportId("ang_c_080318", InstanceName = nameof(AbdomenFindingType.RenalArtery), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.RenalArteryStenosis))]
        [RadioReportId("ang_c_080353", InstanceName = nameof(AbdomenFindingType.RenalArtery), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.Aneurysm))]
        Proximal = 2,

		[RadioReportId("ang_c_080319", InstanceName = nameof(AbdomenFindingType.RenalArtery), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.RenalArteryStenosis))]
        [RadioReportId("ang_c_080354", InstanceName = nameof(AbdomenFindingType.RenalArtery), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.Aneurysm))]
        Distal = 3,

        [RadioReportId("ang_c_080355", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        Intraparenchymal = 4
    }
}
