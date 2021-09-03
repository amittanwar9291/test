using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.Aorta
{
	public enum AortaFindingType : byte
	{
		None = 0,
		AorticAbnormalities = 1,
		DilatationAorta = 2,
		ArterioscleroticChanges = 3,
		AcuteAortalSyndromeAas = 4,
		Endoleak = 5,
		PreoperativeMeasurements = 6,
		Aortitis = 7
	}
}