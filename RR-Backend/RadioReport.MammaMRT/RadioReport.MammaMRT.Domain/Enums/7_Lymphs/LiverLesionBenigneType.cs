using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMRT.Domain.Enums.Lymphs
{
    public enum LiverLesionBenigneType : byte
    {
        None = 0,

        [RadioReportId("mam_m_070307")]
        Cyst = 1,

        [RadioReportId("mam_m_070308")]
        Hemangioma = 2
    }
}
