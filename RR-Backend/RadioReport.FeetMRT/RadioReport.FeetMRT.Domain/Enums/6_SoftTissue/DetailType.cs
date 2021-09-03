using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.SoftTissue
{
    public enum DetailType : byte
    {
        None = 0,

        [RadioReportId("anc_m_060305", InstanceName = nameof(SoftTissueFindingType.Hematoma))]
        [RadioReportId("anc_m_060336", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        [RadioReportId("anc_m_0603108", InstanceName = nameof(SoftTissueFindingType.Abscess))]
        Plantar = 1,

        [RadioReportId("anc_m_060306", InstanceName = nameof(SoftTissueFindingType.Hematoma))]
        [RadioReportId("anc_m_060337", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        [RadioReportId("anc_m_0603109", InstanceName = nameof(SoftTissueFindingType.Abscess))]
        Dorsal = 2,

        [RadioReportId("anc_m_060307", InstanceName = nameof(SoftTissueFindingType.Hematoma))]
        [RadioReportId("anc_m_060338", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        [RadioReportId("anc_m_0603110", InstanceName = nameof(SoftTissueFindingType.Abscess))]
        Medial = 3,

        [RadioReportId("anc_m_060308", InstanceName = nameof(SoftTissueFindingType.Hematoma))]
        [RadioReportId("anc_m_060339", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        [RadioReportId("anc_m_0603111", InstanceName = nameof(SoftTissueFindingType.Abscess))]
        Lateral = 4
    }
}