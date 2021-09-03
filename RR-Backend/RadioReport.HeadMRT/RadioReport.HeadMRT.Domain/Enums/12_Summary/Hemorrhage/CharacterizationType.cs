using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Summary
{
    public enum CharacterizationType : byte
    {
        None = 0,

        [RadioReportId("hea_m_120335", InstanceName = nameof(SummaryFindingType.Hemorrhage))]
        Acute = 1,

        [RadioReportId("hea_m_120336", InstanceName = nameof(SummaryFindingType.Hemorrhage))]
        Subacute = 2,

        [RadioReportId("hea_m_120337", InstanceName = nameof(SummaryFindingType.Hemorrhage))]
        Chronic = 3,

        [RadioReportId("hea_m_120338", InstanceName = nameof(SummaryFindingType.Hemorrhage))]
        AcuteOnChronic = 4,

        [RadioReportId("hea_m_120330", InstanceName = nameof(SummaryFindingType.Hemorrhage))]
        Hygroma = 5
    }
}