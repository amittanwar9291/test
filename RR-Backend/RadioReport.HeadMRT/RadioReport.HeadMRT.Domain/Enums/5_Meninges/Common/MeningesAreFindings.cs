using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Meninges
{
    public enum MeningesAreFindings : byte
    {
        None = 0,

        [RadioReportId("hea_m_050104")]
        NormalImagingOfTheMeninges = 1,

        [RadioReportId("hea_m_050113")]
        NoDetails = 2,

        [RadioReportId("hea_m_050105")]
        True = 3
    }
}
