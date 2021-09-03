using System;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    [Flags]
    public enum LungsLocations : long
    {
        None = 0,
        TruncusPulmonalis = 1 << 0,
        APulmonalisDextra = 1 << 1,
        RightS1 = 1 << 2,
        RightS2 = 1 << 3,
        RightS3 = 1 << 4,
        RightTruncusAnterior = 1 << 5,
        RightInterlobarArtery = 1 << 6,
        RightS4 = 1 << 7,
        RightS5 = 1 << 8,
        RightS6 = 1 << 9,
        RightS7 = 1 << 10,
        RightS8 = 1 << 11,
        RightS9 = 1 << 12,
        RightS10 = 1 << 13,
        APulmonalisSinistra = 1 << 14,
        LeftS1OrS2 = 1 << 15,
        LeftS3 = 1 << 16,
        LeftS4 = 1 << 17,
        LeftS5 = 1 << 18,
        LeftS6 = 1 << 19,
        LeftS8 = 1 << 20,
        LeftS9 = 1 << 21,
        LeftS10 = 1 << 22
    }
}
