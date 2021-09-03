using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum Dislocation : byte
    {
        None = 0,

        [RadioReportId("kne_m_050316")]
        FlapCrack = 1,

        [RadioReportId("kne_m_050319")]
        BucketHandleTear = 2
    }
}
