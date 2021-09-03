using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums
{
    public enum LocalExpansionType : byte
    {
        None = 0,

        [RadioReportId("han_m_0405133")]
        Intracompartmental = 1,

        [RadioReportId("han_m_0405134")]
        Extracompartmental = 2
    }
}
