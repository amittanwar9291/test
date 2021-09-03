using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Cortex
{
	public enum DetailsType : byte
	{
		None = 0,

		[RadioReportId("hea_m_060503")]
		Periventricular = 1,

		[RadioReportId("hea_m_060504")]
		Confluent = 2
	}
}
