using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.SoftTissue
{
    public enum FredericsonStadiumType : byte
    {
        None = 0,

        [RadioReportId("anc_m_060385", InstanceName = nameof(SoftTissueFindingType.TibialStressSyndromeTSS))]
        Grade1 = 1,

        [RadioReportId("anc_m_060386", InstanceName = nameof(SoftTissueFindingType.TibialStressSyndromeTSS))]
        Grade2 = 2,

        [RadioReportId("anc_m_060387", InstanceName = nameof(SoftTissueFindingType.TibialStressSyndromeTSS))]
        Grade3 = 3,

        [RadioReportId("anc_m_060388", InstanceName = nameof(SoftTissueFindingType.TibialStressSyndromeTSS))]
        Grade4a = 4,

        [RadioReportId("anc_m_060389", InstanceName = nameof(SoftTissueFindingType.TibialStressSyndromeTSS))]
        Grade4b = 5
    }
}