using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Summary
{
    public enum MStageSubType : byte
    {
        None = 0,

        [RadioReportId("abd_m_120326")]
        c = 1,

        [RadioReportId("abd_m_120327")]
        p = 2
    }
}
