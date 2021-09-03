using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.BasalNuclei
{
    public enum BasalNucleiAreFindings : byte
    {
        None = 0,

        [RadioReportId("hea_m_070104")]
        NormalImagingOfBasalGanglia = 1,

        [RadioReportId("hea_m_070113")]
        NoDetails = 2,

        [RadioReportId("hea_m_070105")]
        True = 3
    }
}
