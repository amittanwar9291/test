using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMRT.Domain.Enums
{
    public enum MenstruationType : byte
    {
        None = 0,

        [RadioReportId("mam_m_020303")]
        NoCycle = 1,

        [RadioReportId("mam_m_020304")]
        MenstrualCycleExisting = 2
    }
}
