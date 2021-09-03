using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.BrainstemCranialNerves
{
    public enum BrainstemCranialNervesAreFindings : byte
    {
        None = 0,

        [RadioReportId("hea_m_080104")]
        BrainstemWithoutEvidence = 1,

        [RadioReportId("hea_m_080114")]
        NoDetails = 2,

        [RadioReportId("hea_m_080106")]
        True = 3
    }
}
