using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMRT.Domain.Enums
{
    public enum KMDynamicsDelayedType : byte
    {
        None = 0,

        [RadioReportId("mam_m_060408")]
        Progressive = 1,

        [RadioReportId("mam_m_060409")]
        Plateau = 2,

        [RadioReportId("mam_m_060410")]
        WashOut = 3,

        NotIncluded = 4
    }
}
