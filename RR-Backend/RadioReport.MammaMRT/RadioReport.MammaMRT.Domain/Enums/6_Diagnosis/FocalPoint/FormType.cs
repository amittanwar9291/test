using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMRT.Domain.Enums
{
    public enum FormType : byte
    {
        None = 0,

        [RadioReportId("mam_m_060323")]
        Round = 1,

        [RadioReportId("mam_m_060324")]
        Oval = 2,

        [RadioReportId("mam_m_060325")]
        Irregular = 3
    }
}
