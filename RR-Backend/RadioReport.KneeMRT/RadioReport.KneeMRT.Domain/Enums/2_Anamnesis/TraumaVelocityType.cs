using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum TraumaVelocityType : byte
    {
        None = 0,

        [RadioReportId("kne_m_020108")]
        Low = 1,

        [RadioReportId("kne_m_020109")]
        High = 2
    }
}
