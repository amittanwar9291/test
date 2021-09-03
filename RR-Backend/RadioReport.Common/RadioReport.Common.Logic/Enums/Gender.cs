using RadioReport.Common.Logic.Attributes;

namespace RadioReport.Common.Logic.Enums
{
    public enum Gender : byte
    {
        None = 0,

        [RadioReportId("uni_01_007")]
        Female = 1,

        [RadioReportId("uni_01_006")]
        Male = 2
    }
}
