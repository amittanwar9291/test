using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMRT.Domain.Enums
{
    public enum DemarcationType : byte
    {
        None = 0,

        [RadioReportId("mam_m_060327")]
        Circumscribed = 1,

        [RadioReportId("mam_m_060328")]
        Irregular = 2,

        [RadioReportId("mam_m_060329")]
        Spiculated = 3
    }
}
