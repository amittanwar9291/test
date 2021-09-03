using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum BucketHandleTear : byte
    {
        None = 0,

        [RadioReportId("kne_m_050320")]
        DoublePCLSign = 1,

        [RadioReportId("kne_m_050321")]
        FlippedMeniscusSign = 2
    }
}
