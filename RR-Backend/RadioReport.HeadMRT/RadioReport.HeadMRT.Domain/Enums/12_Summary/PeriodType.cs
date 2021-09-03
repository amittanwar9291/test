using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Summary
{
    public enum PeriodType : byte
    {
        None = 0,

        [RadioReportId("hea_m_120244")]
		Months3 = 1,

        [RadioReportId("hea_m_120245")]
		Months3To6 = 2,

        [RadioReportId("hea_m_120246")]
		Months6To12 = 3,

        [RadioReportId("hea_m_120247")]
		Months12 = 4,

        [RadioReportId("hea_m_120248")]
		Months18To24 = 5
    }
}
