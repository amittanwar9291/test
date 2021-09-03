using System;

namespace RadioReport.MammaMRT.Domain.Enums
{
    [Flags]
    public enum BreastLocations
    {
        None = 0,
        Right = 1,
        Left = 2,
        RightTopOuter = 4,
        RightTopInner = 8,
        RightBottomOuter = 16,
        RightBottomInner = 32,
        LeftTopOuter = 64,
        LeftTopInner = 128,
        LeftBottomOuter = 256,
        LeftBottomInner = 512,
        RightTop = 1024,
        RightBottom = 2048,
        OuterRight = 4096,
        InnerRight = 8192,
        LeftTop = 16384,
        LeftBottom = 32768,
        InnerLeft = 65536,
        OuterLeft = 131072,
        RightRing = 262144,
        RightMiddle = 524288,
        LeftRing = 1048576,
        LeftMiddle = 2097152,
        RightShoulder = 4194304,
        LeftShoulder = 8388608
    }
}
