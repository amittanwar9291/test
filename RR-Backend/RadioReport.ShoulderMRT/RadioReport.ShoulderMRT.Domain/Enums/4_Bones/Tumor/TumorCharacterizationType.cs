using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    public enum TumorCharacterizationType: byte
    {
        None = 0,

        [RadioReportId("sho_m_040327")]
        Bening = 1,

        [RadioReportId("sho_m_040328")]
        Malignant = 2,

        [RadioReportId("sho_m_040329")]
        Unclear = 3
    }
}
