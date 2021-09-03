using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.SellarRegion
{
    public enum SellarRegionAreFindings : byte
    {
        None = 0,

        [RadioReportId("hea_m_100104")]
        NormalImagingOfSellarRegion = 1,

        [RadioReportId("hea_m_100113")]
        NoDetails = 2,

        [RadioReportId("hea_m_100105")]
        True = 3
    }
}
