using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.FacialSkull
{
    public enum FacialSkullAreFindings : byte
    {
        None = 0,

        [RadioReportId("hea_m_110104")]
        NormalImagingOfFacialAndSkullBones = 1,

        [RadioReportId("hea_m_110113")]
        NoDetails = 2,

        [RadioReportId("hea_m_110105")]
        True = 3
    }
}
