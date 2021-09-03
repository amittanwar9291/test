using System;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    [Flags]
    public enum LungsFlapsLocations : byte
    {
        None = 0,
        RightOL = 1 << 0,
        RightML = 1 << 1,
        RightUL = 1 << 2,
        LeftOL = 1 << 3,
        LeftLI = 1 << 4,
        LeftUL = 1 << 5
    }
}
