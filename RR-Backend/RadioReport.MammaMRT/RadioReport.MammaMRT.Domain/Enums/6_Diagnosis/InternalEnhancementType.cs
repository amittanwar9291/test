using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMRT.Domain.Enums
{
    public enum InternalEnhancementType : byte
    {
        None = 0,

        [RadioReportId("mam_m_060416")]
        Homogeneous = 1,

        [RadioReportId("mam_m_060417")]
        Heterogeneous = 2,

        [RadioReportId("mam_m_060418")]
        StippledPunctated = 3,

        [RadioReportId("mam_m_060419")]
        GroupedRingEnhancingMacrolobulated = 4
    }
}
