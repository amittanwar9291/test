using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.Aorta
{
	public enum BeginningType : byte
	{
		None = 0,

		[RadioReportId("ang_c_070240", InstanceName = nameof(AortaFindingType.AcuteAortalSyndromeAas))]
		AscendingAorta = 1,

		[RadioReportId("ang_c_070241", InstanceName = nameof(AortaFindingType.AcuteAortalSyndromeAas))]
		DistalToTheOriginOfLeftSubclavianArtery = 2
	}
}