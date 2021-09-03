using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMX.Domain.Enums
{
    public enum MenopauseType : byte
    {
        None = 0,

        [RadioReportId("mam_mx_020214")]
        Premenopausal = 1,

        [RadioReportId("mam_mx_020215")]
        Perimenopausal = 2,

        [RadioReportId("mam_mx_020216")]
        Postmenopausal = 3
    }
}