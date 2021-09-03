using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMX.Domain.Enums
{
    public enum ArePreviousTherapies : byte
    {
        None = 0,

        [RadioReportId("mam_mx_020402")]
        No = 1,

        [RadioReportId("mam_mx_020403")]
        Yes = 2
    }
}
