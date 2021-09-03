using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMRT.Domain.Enums
{
    public enum CutisRetraction : byte
    {
        None = 0,
        [RadioReportId("mam_m_040302")]
        No = 1,
        [RadioReportId("mam_m_040303")]
        Yes = 2
    }
}
