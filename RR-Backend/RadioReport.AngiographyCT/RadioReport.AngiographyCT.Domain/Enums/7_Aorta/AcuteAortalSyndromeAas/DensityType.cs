using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.Aorta
{
	public enum DensityType : byte
	{
		None = 0,

		[RadioReportId("ang_c_070472", InstanceName = nameof(AortaFindingType.AcuteAortalSyndromeAas))]
		HyperdensAcute = 1,

		[RadioReportId("ang_c_070473", InstanceName = nameof(AortaFindingType.AcuteAortalSyndromeAas))]
		IsodensChronic = 2
	}
}