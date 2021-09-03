using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    public enum SideComparisonType : byte
    {
        None = 0,

        [RadioReportId("tho_c_0605101")]
        Symmetrical = 1,

        [RadioReportId("tho_c_0605102")]
        Asymmetrical = 2
    }
}
