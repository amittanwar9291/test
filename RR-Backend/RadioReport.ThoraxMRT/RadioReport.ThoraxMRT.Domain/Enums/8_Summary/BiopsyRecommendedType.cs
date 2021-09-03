using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
    public enum BiopsyRecommendedType : byte
    {
        None = 0,

        [RadioReportId("tho_m_080111")]
        CTGuided = 1,

        [RadioReportId("tho_m_080112")]
        Bronchoscopic = 2,

        [RadioReportId("tho_m_080113")]
        USGuided = 3,

        [RadioReportId("tho_m_080114")]
        Surgical = 4
    }
}
