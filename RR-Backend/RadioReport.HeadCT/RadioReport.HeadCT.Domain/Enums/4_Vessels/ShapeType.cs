using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadCT.Domain.Enums.Vessels
{
    public enum ShapeType : byte
    {
        None = 0,

        [RadioReportId("hea_c_0403123")]
        Saccular = 1,

        [RadioReportId("hea_c_0403124")]
        Fusiform = 2,

        [RadioReportId("hea_c_0403125")]
        FalseAneurysm = 3,

        [RadioReportId("hea_c_0403126")]
        BlisterLike = 4
    }
}
