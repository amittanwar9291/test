using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum FlapTearType : byte
    {
        None = 0,

        [RadioReportId("kne_m_050317")]
        ParatibialRecess = 1,

        [RadioReportId("kne_m_050318")]
        ParafemoralRecess = 2
    }
}
