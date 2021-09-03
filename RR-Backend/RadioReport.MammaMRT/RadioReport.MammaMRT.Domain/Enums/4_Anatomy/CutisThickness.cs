using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMRT.Domain.Enums
{
    public enum CutisThickness : byte
    {
        None = 0,
        [RadioReportId("mam_m_040202")]
        NotThickened = 1,
        [RadioReportId("mam_m_040203")]
        Thickened = 2
    }
}
