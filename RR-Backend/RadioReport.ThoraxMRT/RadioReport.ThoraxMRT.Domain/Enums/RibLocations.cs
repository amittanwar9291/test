using System;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
    [Flags]
    public enum RibLocations : long 
    {
        None = 0,
        Right1 = 1 << 0,
        Right2 = 1 << 1,
        Right3 = 1 << 2,
        Right4 = 1 << 3,
        Right5 = 1 << 4,
        Right6 = 1 << 5,
        Right7 = 1 << 6,
        Right8 = 1 << 7,
        Right9 = 1 << 8,
        Right10 = 1 << 9,
        Right11 = 1 << 10,
        Right12 = 1 << 11,
        Left1 = 1 << 12,
        Left2 = 1 << 13,
        Left3 = 1 << 14,
        Left4 = 1 << 15,
        Left5 = 1 << 16,
        Left6 = 1 << 17,
        Left7 = 1 << 18,
        Left8 = 1 << 19,
        Left9 = 1 << 20,
        Left10 = 1 << 21,
        Left11 = 1 << 22,
        Left12 = 1 << 23
    }
}
