using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Thyroid
{
	public enum AbnormalitiesNormVariantsThyroidType : byte
	{
		None = 0,

		[RadioReportId("nec_m_070203", InstanceName = nameof(ThyroidFindingType.AnomaliesNormalVariantsThyroidGland))]
		Hypoplasia = 1,

		[RadioReportId("nec_m_070204", InstanceName = nameof(ThyroidFindingType.AnomaliesNormalVariantsThyroidGland))]
		ThyroidHemiagenesis = 2,

		[RadioReportId("nec_m_070205", InstanceName = nameof(ThyroidFindingType.AnomaliesNormalVariantsThyroidGland))]
		Ectopy = 3
	}
}