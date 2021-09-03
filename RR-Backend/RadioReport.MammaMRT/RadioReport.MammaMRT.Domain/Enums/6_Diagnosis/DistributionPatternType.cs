using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMRT.Domain.Enums
{
    public enum DistributionPatternType : byte
    {
        None = 0,

        [RadioReportId("mam_m_060316")]
        Focal = 1,

        [RadioReportId("mam_m_060317")]
        Linear = 2,

        [RadioReportId("mam_m_060318")]
        Segmental = 3,

        [RadioReportId("mam_m_060319")]
        Regional = 4,

        [RadioReportId("mam_m_060320")]
        Multifocal = 5,

        [RadioReportId("mam_m_060321")]
        Diffuse = 6
    }
}
