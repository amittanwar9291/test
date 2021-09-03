using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum BundleType : byte
    {
        None = 0,

        [RadioReportId("kne_m_050519")]
        AnteromedialBundle = 1,

        [RadioReportId("kne_m_050520")]
        PosterolateralBundle = 2
    }
}
