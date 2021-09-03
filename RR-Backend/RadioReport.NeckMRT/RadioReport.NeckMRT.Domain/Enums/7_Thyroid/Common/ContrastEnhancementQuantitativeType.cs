using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Thyroid
{
	public enum ContrastEnhancementQuantitativeType : byte
	{
		None = 0,

		[RadioReportId("nec_m_070544", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		[RadioReportId("nec_m_070459", InstanceName = nameof(ThyroidFindingType.ParathyroidGlandMass))]
		[RadioReportId("nec_m_070499", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		No = 1,

		[RadioReportId("nec_m_070545", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		[RadioReportId("nec_m_070460", InstanceName = nameof(ThyroidFindingType.ParathyroidGlandMass))]
		[RadioReportId("nec_m_0704100", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		Weak = 2,

		[RadioReportId("nec_m_070546", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		[RadioReportId("nec_m_070461", InstanceName = nameof(ThyroidFindingType.ParathyroidGlandMass))]
		[RadioReportId("nec_m_0704101", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		Strong = 3
	}
}