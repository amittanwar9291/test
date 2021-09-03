using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMRT.Domain.Enums
{
    public enum BIRADS: byte
    {
        None = 0,

        [RadioReportId("mam_m_050104")]
        BIRADS40 = 1,

        [RadioReportId("mam_m_050105")]
        BIRADS50 = 2
    }
}
