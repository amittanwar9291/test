using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Summary
{
    public enum RegressiveType : byte
    {
        None = 0,

        [RadioReportId("hea_m_120447")]
        Partial = 1,

        [RadioReportId("hea_m_120448")]
        Complete = 2
    }
}
