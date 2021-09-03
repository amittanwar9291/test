using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMRT.Domain.Enums
{
    public enum TimeStatusType : byte
    {
        None = 0,

        [RadioReportId("mam_m_020520")]
        Ongoing = 1,

        [RadioReportId("mam_m_020521")]
        DateUntil = 2
    }
}
