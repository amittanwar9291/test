using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum LungInterstitiumAreFindings : byte
    {
        None = 0,

        [RadioReportId("tho_c_0601101")]
        PulmonaryInterstitiumNormal = 1,

        [RadioReportId("tho_c_0601102")]
        NotSpecified = 2,

        [RadioReportId("tho_c_0601103")]
        Finding = 3
    }
}