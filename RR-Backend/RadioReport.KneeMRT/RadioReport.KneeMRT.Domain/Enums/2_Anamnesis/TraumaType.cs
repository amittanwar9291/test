using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum TraumaType : byte
    {
        None = 0,

        [RadioReportId("kne_m_020107")]
        Twisted = 1,

        [RadioReportId("kne_m_020110")]
        Fall = 2
    }
}
