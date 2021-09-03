using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMRT.Domain.Enums
{
    public enum MenopauseType : byte
    {
        None = 0,

        [RadioReportId("mam_m_020214")]
        Premenopausal = 1,

        [RadioReportId("mam_m_020215")]
        Perimenopausal = 2,

        [RadioReportId("mam_m_020216")]
        Postmenopausal = 3
    }
}