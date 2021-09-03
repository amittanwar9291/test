using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Summary
{
    public enum ProgressControlType : byte
    {
        None = 0,

        [RadioReportId("hea_m_120209", InstanceName = nameof(SummaryFindingType.MultipleSclerosis))]
        Progression = 1,

        [RadioReportId("hea_m_120210", InstanceName = nameof(SummaryFindingType.MultipleSclerosis))]
        Regression = 2,

        [RadioReportId("hea_m_120211", InstanceName = nameof(SummaryFindingType.MultipleSclerosis))]
        Stable = 3   
    }
}