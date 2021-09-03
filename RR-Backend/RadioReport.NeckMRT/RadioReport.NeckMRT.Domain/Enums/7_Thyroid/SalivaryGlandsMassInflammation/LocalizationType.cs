using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Thyroid
{
	public enum LocalizationType : byte
	{
		None = 0,

		[RadioReportId("nec_m_070295", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		ParotidGland = 1,

		[RadioReportId("nec_m_070296", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		SubmandibularGland = 2,

		[RadioReportId("nec_m_070297", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		SublingualGland = 3
	}
}