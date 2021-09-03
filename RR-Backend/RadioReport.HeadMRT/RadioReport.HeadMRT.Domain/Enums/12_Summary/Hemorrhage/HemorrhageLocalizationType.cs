using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Summary
{
    public enum HemorrhageLocalizationType : byte
    {
        None = 0,

        [RadioReportId("hea_m_120219", InstanceName = nameof(SummaryFindingType.Hemorrhage))]
        SubarachnoidHemorrhage = 1,

        [RadioReportId("hea_m_120220", InstanceName = nameof(SummaryFindingType.Hemorrhage))]
        SubduralHematoma = 2
    }
}