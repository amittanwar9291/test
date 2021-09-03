using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMX.Domain.Enums
{
    public enum TimeStatusType : byte
    {
        None = 0,

        [RadioReportId("mam_mx_020520")]
        Ongoing = 1,

        [RadioReportId("mam_mx_020521")]
        DateUntil = 2
    }
}
