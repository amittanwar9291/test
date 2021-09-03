using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMX.Domain.Enums
{
    public enum MenstruationType : byte
    {
        None = 0,

        [RadioReportId("mam_mx_020303")]
        NoCycle = 1,

        [RadioReportId("mam_mx_020304")]
        MenstrualCycleExisting = 2
    }
}
