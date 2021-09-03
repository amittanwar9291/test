using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.Aorta
{
	public enum AnomaliesType : byte
	{
		None = 0,

		[RadioReportId("ang_c_070203", InstanceName = nameof(AortaFindingType.AorticAbnormalities))]
		AorticCoarctationCoa = 1,

		[RadioReportId("ang_c_070204", InstanceName = nameof(AortaFindingType.AorticAbnormalities))]
		KinkingOfTheAorticArchPseudocoarctation = 2,

		[RadioReportId("ang_c_070205", InstanceName = nameof(AortaFindingType.AorticAbnormalities))]
		CongenitalVascularRings = 3
	}
}