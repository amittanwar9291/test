using System;

namespace RadioReport.MammaMX.Domain.Enums
{
    [Flags]
    public enum BreastLocations
    {
        None = 0,
        Right = 1 << 0,
        Left = 1 << 1,
        RightTopOuter = 1 << 2,
        RightTopInner = 1 << 3,
        RightBottomOuter = 1 << 4,
        RightBottomInner = 1 << 5,
        LeftTopOuter = 1 << 6,
        LeftTopInner = 1 << 7,
        LeftBottomOuter = 1 << 8,
        LeftBottomInner = 1 << 9,
        RightTop = 1 << 10,
        RightBottom = 1 << 11,
        OuterRight = 1 << 12,
        InnerRight = 1 << 13,
        LeftTop = 1 << 14,
        LeftBottom = 1 << 15,
        InnerLeft = 1 << 16,
        OuterLeft = 1 << 17,
        RightRing = 1 << 18,
        RightMiddle = 1 << 19,
        LeftRing = 1 << 20,
        LeftMiddle = 1 << 21,
        RightShoulder = 1 << 22,
        LeftShoulder = 1 << 23
    }
}
