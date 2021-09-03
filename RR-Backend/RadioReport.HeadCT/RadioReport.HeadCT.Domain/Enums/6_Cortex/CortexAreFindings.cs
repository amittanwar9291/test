using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadCT.Domain.Enums.Cortex
{
    public enum CortexAreFindings : byte
    {
        None = 0,

        [RadioReportId("hea_c_060104")]
        NormalImagingOfTheCortex = 1,

        [RadioReportId("hea_c_060113")]
        NoDetails = 2,

        [RadioReportId("hea_c_060105")]
        True = 3
    }
}
