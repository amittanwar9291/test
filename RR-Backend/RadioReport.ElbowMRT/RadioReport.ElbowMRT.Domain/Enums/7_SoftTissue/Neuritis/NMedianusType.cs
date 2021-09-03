using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ElbowMRT.Domain.Enums
{
	public enum NMedianusType : byte
	{
		None = 0,

		[RadioReportId("elb_m_070231")]
		SupracondylarProcessWithLigamentToMedialEpicondyle = 1,

		[RadioReportId("elb_m_070232")]
		ThickeningAponeurosismusculiBicipitisBrachii = 2

	}
}
