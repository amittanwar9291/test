using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Cortex
{
    public enum CortexAreFindings : byte
    {
        None = 0,

        [RadioReportId("hea_m_060104")]
        NormalImagingOfTheBrain = 1,

        [RadioReportId("hea_m_060113")]
        NoDetails = 2,

        [RadioReportId("hea_m_060105")]
        True = 3
    }
}
