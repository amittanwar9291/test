using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum TumorCommonType: byte
    {
        None = 0,

        [RadioReportId("sho_m_040445")]
        Hemangioma = 1,

        [RadioReportId("sho_m_040446")]
        Sclerosis = 2,

        [RadioReportId("sho_m_040447")]
        BeningLesion = 3
    }
}
