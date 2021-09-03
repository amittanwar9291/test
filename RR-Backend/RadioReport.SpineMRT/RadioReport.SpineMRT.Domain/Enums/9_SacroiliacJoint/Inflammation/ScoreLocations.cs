using System;

namespace RadioReport.SpineMRT.Domain.Enums
{
    [Flags]
    public enum ScoreLocations : byte
    {
        None = 0,
        Right1 = 1 << 0,
        Right2 = 1 << 1,
        Right3 = 1 << 2,
        Right4 = 1 << 3,
        Left1 = 1 << 4,
        Left2 = 1 << 5,
        Left3 = 1 << 6,
        Left4 = 1 << 7
    }
}