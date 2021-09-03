using RadioReport.Common.Logic.Attributes;

namespace RadioReport.Common.Module.Logic.Enums.Technology
{
    public enum MagneticFieldStrengthType : byte
    {
        None = 0,

        [RadioReportId("uni_x_030112")]
        OneAndHalfT = 1,

        [RadioReportId("uni_x_030113")]
        ThreeT = 2
    }
}
