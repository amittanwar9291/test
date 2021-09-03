using System;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
    [Flags]
	public enum BreastLocations
    {
		None = 0,
        RightTopOuter = 1,
        RightTopInner = 1 << 1,
        RightBottomOuter = 1 << 2,
        RightBottomInner = 1 << 3,
        LeftTopOuter = 1 << 4,
        LeftTopInner = 1 << 5,
        LeftBottomOuter = 1 << 6,
        LeftBottomInner = 1 << 7
    }
}
