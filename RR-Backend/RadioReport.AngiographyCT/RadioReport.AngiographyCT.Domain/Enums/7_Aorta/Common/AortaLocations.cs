using System;

namespace RadioReport.AngiographyCT.Domain.Enums.Aorta
{
    [Flags]
    public enum AortaLocations : int
    {
        None = 0,
        AorticRoot = 1 << 0,
        AscendingAorta = 1 << 1,
        AorticArch = 1 << 2,
        ArcusAortaeBetweenTruncusAndCarotis = 1 << 3,
        ArcusAortaeBetweenCarotisAndSubclavia = 1 << 4,
        DescendingAorta = 1 << 5,
        SuprarenalAbdominalAorta = 1 << 6,
        InfrarenalAbdominalAorta = 1 << 7,
        RightCommonIliacArtery = 1 << 8,
        LeftCommonIliacArtery = 1 << 9,
        RightExternalIliacArtery = 1 << 10,
        LeftExternalIliacArtery = 1 << 11
    }
}
