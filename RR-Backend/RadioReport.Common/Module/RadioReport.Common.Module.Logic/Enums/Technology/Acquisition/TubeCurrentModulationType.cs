using RadioReport.Common.Logic.Attributes;

namespace RadioReport.Common.Module.Logic.Enums.Technology
{
    public enum TubeCurrentModulationType : byte
    {
        None = 0,

        [RadioReportId("uni_xc_030321")]
        Modulation2D = 1,

        [RadioReportId("uni_xc_030322")]
        Modulation3D = 2
    }
}
