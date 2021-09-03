using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Summary
{
    public enum BiopsyRecommendedType : byte
    {
        None = 0,

        [RadioReportId("pel_m_120115")]
        CtSupported = 1,


        [RadioReportId("pel_m_120116")]
        Endoscopic = 2
    }
}
