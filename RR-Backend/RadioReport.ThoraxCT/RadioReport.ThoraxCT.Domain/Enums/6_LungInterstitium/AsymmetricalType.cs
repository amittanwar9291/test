using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum AsymmetricalType : byte
    {
        None = 0,

        [RadioReportId("tho_c_0605104")]
        Right = 1,

        [RadioReportId("tho_c_0605105")]
        Left = 2
    }
}
