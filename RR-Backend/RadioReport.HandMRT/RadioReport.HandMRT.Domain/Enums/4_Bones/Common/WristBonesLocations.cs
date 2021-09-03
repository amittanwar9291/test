using System;

namespace RadioReport.HandMRT.Domain.Enums
{
    [Flags]
    public enum WristBonesLocations : int
    {
        None = 0,
        Radius = 1 << 0,
        Ulna = 1 << 1,
        Scaphoid = 1 << 2,
        OsLunatum = 1 << 3,
        OsTriquetrum = 1 << 4,
        OsPisiforme = 1 << 5,
        OsTrapezium = 1 << 6,
        TrapezoidBone = 1 << 7,
        Ocapitatum = 1 << 8,
        OsHamatum = 1 << 9,
    }
}