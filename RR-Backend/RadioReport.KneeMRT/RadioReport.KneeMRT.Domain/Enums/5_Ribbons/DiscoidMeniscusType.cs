using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum DiscoidMeniscusType : byte
    {
        None = 0,

        [RadioReportId("kne_m_050209")]
        Complete = 1,

        [RadioReportId("kne_m_050210")]
        Incomplete = 2,

        [RadioReportId("kne_m_050211")]
        WrisbergVariant = 3
    }
}
