using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum PCRTestForSARSCoV2Type : byte
    {
        None = 0,

        [RadioReportId("tho_c_020204")]
        Negative = 1,

        [RadioReportId("tho_c_020205")]
        Positive = 2
    }
}