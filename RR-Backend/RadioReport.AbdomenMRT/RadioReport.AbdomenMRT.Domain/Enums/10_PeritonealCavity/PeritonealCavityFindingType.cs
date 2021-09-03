using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.PeritonealCavity
{
	public enum PeritonealCavityFindingType : byte
	{
		None = 0,
		Ascites = 1,
		Peritonitis = 2,
		HemorrhageHematoma = 3,
		PeritonealMass = 4,
		RetroperitonealMass = 5,
		MistyMesentery = 6
	}
}