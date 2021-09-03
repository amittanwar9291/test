using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum TransplantDetail : byte
    {
        None = 0,

        [RadioReportId("kne_m_050428")]
        Insufficient = 1,

        [RadioReportId("kne_m_050429")]
        ReRupture = 2
    }
}
