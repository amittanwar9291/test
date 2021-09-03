using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Summary
{
    public enum OtherDiseaseType : byte
    {
        None = 0,

        [RadioReportId("hea_m_120502", InstanceName = nameof(SummaryFindingType.MultipleSclerosis))]
        ProgressiveMultifocalLeukoencephalopathy = 1,

        [RadioReportId("hea_m_120503", InstanceName = nameof(SummaryFindingType.MultipleSclerosis))]
        PMLIRIS = 2,

        [RadioReportId("hea_m_120504", InstanceName = nameof(SummaryFindingType.MultipleSclerosis))]
        CNSLymphoma = 3
    }
}