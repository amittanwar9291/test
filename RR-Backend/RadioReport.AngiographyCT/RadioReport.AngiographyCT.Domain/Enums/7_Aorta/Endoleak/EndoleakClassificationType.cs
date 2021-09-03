using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.Aorta
{
	public enum EndoleakClassificationType : byte
	{
		None = 0,

		[RadioReportId("ang_c_070479", InstanceName = nameof(AortaFindingType.Endoleak))]
		Type1 = 1,

		[RadioReportId("ang_c_070480", InstanceName = nameof(AortaFindingType.Endoleak))]
		Type2 = 2,

		[RadioReportId("ang_c_070481", InstanceName = nameof(AortaFindingType.Endoleak))]
		Type3 = 3,

		[RadioReportId("ang_c_070482", InstanceName = nameof(AortaFindingType.Endoleak))]
		Type4 = 4,

		[RadioReportId("ang_c_070483", InstanceName = nameof(AortaFindingType.Endoleak))]
		Type5 = 5
	}
}