using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMRT.Domain.Enums.Lymphs
{
    public enum AxillaryLymphNodesType : byte
    {
        None = 0,

        [RadioReportId("mam_m_070104")]
        NoLNEnlargement = 1,

        [RadioReportId("mam_m_070105")]
        EnlargedLymphNodesWithFattyHilum = 2,

        [RadioReportId("mam_m_070118")]
        Lymphadenoptahy = 3
    }
}
