using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Summary
{
    public enum NStageSubType : byte
    {
        None = 0,

        [RadioReportId("abd_m_120218")]
        c = 1,

        [RadioReportId("abd_m_120219")]
        p = 2
    }
}
