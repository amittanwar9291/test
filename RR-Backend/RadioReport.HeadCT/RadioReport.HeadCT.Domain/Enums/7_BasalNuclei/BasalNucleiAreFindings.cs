using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadCT.Domain.Enums.BasalNuclei
{
    public enum BasalNucleiAreFindings : byte
    {
        None = 0,

        [RadioReportId("hea_c_070104")]
        NormalImagingOfBasalGanglia = 1,

        [RadioReportId("hea_c_070113")]
        NoDetails = 2,

        [RadioReportId("hea_c_070105")]
        True = 3
    }
}
