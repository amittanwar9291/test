using System;

namespace RadioReport.AngiographyMRT.Domain.Enums.Aorta
{
    [Flags]
    public enum AortaLocations : int
    {
        None = 0,
        AorticRoot = 1 << 0,
        AscendingAorta = 1 << 1,
        AorticArch = 1 << 2,
        DescendingAorta = 1 << 3,
        SuprarenalAbdominalAorta = 1 << 4,
        InfrarenalAbdominalAorta = 1 << 5,
        RightCommonIliacArtery = 1 << 6,
        LeftCommonIliacArtery = 1 << 7,
        RightExternalIliacArtery = 1 << 8,
        LeftExternalIliacArtery = 1 << 9
    }
}
