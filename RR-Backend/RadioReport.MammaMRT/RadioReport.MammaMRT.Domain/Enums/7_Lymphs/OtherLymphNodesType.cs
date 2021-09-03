using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMRT.Domain.Enums.Lymphs
{
    public enum OtherLymphNodesType : byte
    {
        None = 0,

        [RadioReportId("mam_m_070202")]
        NoLNEnlargement = 1,

        [RadioReportId("mam_m_070203")]
        EnlargedLymphNodesWithFattyHilum = 2,

        [RadioReportId("mam_m_070213")]
        LymphadenopathyUnexplained = 3
    }
}
