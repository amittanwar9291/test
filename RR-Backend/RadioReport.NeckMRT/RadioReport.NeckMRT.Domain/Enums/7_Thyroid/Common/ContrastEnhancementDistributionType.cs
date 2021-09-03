using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Thyroid
{
	public enum ContrastEnhancementDistributionType : byte
	{
		None = 0,

		[RadioReportId("nec_m_070550", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		[RadioReportId("nec_m_070465", InstanceName = nameof(ThyroidFindingType.ParathyroidGlandMass))]
		[RadioReportId("nec_m_0704105", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		Peripheral = 1,

		[RadioReportId("nec_m_070551", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		[RadioReportId("nec_m_070466", InstanceName = nameof(ThyroidFindingType.ParathyroidGlandMass))]
		[RadioReportId("nec_m_0704106", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		EntireLesion = 2,

		[RadioReportId("nec_m_070552", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		[RadioReportId("nec_m_070467", InstanceName = nameof(ThyroidFindingType.ParathyroidGlandMass))]
		[RadioReportId("nec_m_0704107", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		Central = 3,

		[RadioReportId("nec_m_070553", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		[RadioReportId("nec_m_070468", InstanceName = nameof(ThyroidFindingType.ParathyroidGlandMass))]
		[RadioReportId("nec_m_0704108", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		Septal = 4
	}
}