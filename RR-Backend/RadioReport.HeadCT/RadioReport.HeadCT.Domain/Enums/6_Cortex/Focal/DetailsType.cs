using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadCT.Domain.Enums.Cortex
{
	public enum DetailsType : byte
	{
		None = 0,

		[RadioReportId("hea_c_060503")]
		Periventricular = 1,

		[RadioReportId("hea_c_060504")]
		Confluent = 2
	}
}
