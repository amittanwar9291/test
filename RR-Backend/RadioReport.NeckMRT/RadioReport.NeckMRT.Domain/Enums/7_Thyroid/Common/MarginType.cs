using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Thyroid
{
	public enum MarginType : byte
	{
		None = 0,

		[RadioReportId("nec_m_070520", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		[RadioReportId("nec_m_070453", InstanceName = nameof(ThyroidFindingType.ParathyroidGlandMass))]
		[RadioReportId("nec_m_070471", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		Circumscribed = 1,

		[RadioReportId("nec_m_070521", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		[RadioReportId("nec_m_070454", InstanceName = nameof(ThyroidFindingType.ParathyroidGlandMass))]
		[RadioReportId("nec_m_070472", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		NonCircumscribed = 2
	}
}