using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Domain.Enums
{
    public enum TClassificationType : byte
    {
        None = 0,

        [RadioReportId("hip_m_090303")]
        T1 = 1,

        [RadioReportId("hip_m_090304")]
        T2 = 2,

        [RadioReportId("hip_m_090305")]
        T3 = 3
    }
}
