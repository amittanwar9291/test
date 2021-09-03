using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
    public enum ContrastEnhancementDistributionType : byte
    {
        None = 0,
   
        [RadioReportId("tho_m_070252")]
        Peripheral = 1,

        [RadioReportId("tho_m_070253")]
        EntireLesion = 2,

        [RadioReportId("tho_m_070254")]
        Central = 3,

        [RadioReportId("tho_m_070255")]
        Septal = 4,

        [RadioReportId("tho_m_070256")]
        InTheNidus = 5
    }
}
