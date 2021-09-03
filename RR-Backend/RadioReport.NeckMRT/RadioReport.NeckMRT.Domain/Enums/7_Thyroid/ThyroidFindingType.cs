using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Thyroid
{
	public enum ThyroidFindingType : byte
	{
		None = 0,

		AnomaliesNormalVariantsThyroidGland = 1,
		Thyroidectomy = 2,
		ThyroidGoiterMassInflammation = 3,
		ParathyroidGlandMass = 4,
		SalivaryGlandsMassInflammation = 5
	}
}