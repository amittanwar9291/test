using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.Aorta
{
	public enum DetailsAorticArchKinkingPseudocoarctationType : byte
	{
		None = 0,

		[RadioReportId("ang_c_070306", InstanceName = nameof(AortaFindingType.AorticAbnormalities))]
		FunctionalStenosis = 1,

		[RadioReportId("ang_c_070307", InstanceName = nameof(AortaFindingType.AorticAbnormalities))]
		MorphologicalStenosis = 2
	}
}