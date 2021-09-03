using System;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    [Flags]
    public enum LungsSegmentsLocations : long
    {
        None = 0,
        RightS1 = 1 << 0,
        RightS2 = 1 << 1,
        RightS3 = 1 << 2,
        RightS4 = 1 << 3,
        RightS5 = 1 << 4,
        RightS6 = 1 << 5,
        RightS7 = 1 << 6,
        RightS8 = 1 << 7,
        RightS9 = 1 << 8,
        RightS10 = 1 << 9,
        LeftS1AndS2 = 1 << 10,
        LeftS3 = 1 << 11,
        LeftS4 = 1 << 12,
        LeftS5 = 1 << 13,
        LeftS6 = 1 << 14,
        LeftS8 = 1 << 15,
        LeftS9 = 1 << 16,
        LeftS10 = 1 << 17
    }
}
