using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Summary
{
    public enum EtiologyType : byte
    {
        None = 0,

        [RadioReportId("hea_m_120332", InstanceName = nameof(SummaryFindingType.Hemorrhage))]
        Traumatic = 1,

        [RadioReportId("hea_m_120333", InstanceName = nameof(SummaryFindingType.Hemorrhage))]
        Atraumatic = 2
    }
}