using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMRT.Domain.Enums
{
    public enum KMDynamicsInitialType : byte
    {
        None = 0,

        [RadioReportId("mam_m_060404")]
        Slowly = 1,

        [RadioReportId("mam_m_060405")]
        Medium = 2,

        [RadioReportId("mam_m_060406")]
        Fast = 3,

        NotIncluded = 4
    }
}
