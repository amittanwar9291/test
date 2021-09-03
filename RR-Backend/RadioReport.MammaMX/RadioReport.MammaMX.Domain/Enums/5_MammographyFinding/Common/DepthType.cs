using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMX.Domain.Enums.MammographyFinding
{
    public enum DepthType : byte
    {
        None = 0,

        [RadioReportId("mam_mx_050210")]
        CloseToNipple = 1,

        [RadioReportId("mam_mx_050211")]
        Central = 2,

        [RadioReportId("mam_mx_050212")]
        CloseToChestWall = 3
    }
}
