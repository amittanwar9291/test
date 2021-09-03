using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMRT.Domain.Enums
{
    public enum ArePreviousTherapies : byte
    {
        None = 0,

        [RadioReportId("mam_m_020402")]
        No = 1,

        [RadioReportId("mam_m_020403")]
        Yes = 2
    }
}
