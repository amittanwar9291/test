using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Summary
{
    public enum CourseType : byte
    {
        None = 0,

        [RadioReportId("hea_m_120444")]
        Progressive = 1,

        [RadioReportId("hea_m_120445")]
        Constant = 2,

        [RadioReportId("hea_m_120446")]
        Regressive = 3
    }
}
