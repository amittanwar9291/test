using System;

namespace RadioReport.SpineCT.Domain.Enums.Disc
{
    [Flags]
    public enum DiscLocations : int
    {
        None = 0,
        Central = 1 << 0,
        ParacentralRight = 1 << 1,
        SubarticularRight = 1 << 2,
        ForaminalRight = 1 << 3,
        ExtraforaminalRight = 1 << 4,
        ParacentralLeft = 1 << 5,
        SubarticularLeft = 1 << 6,
        ForaminalLeft = 1 << 7,
        ExtraforaminalLeft = 1 << 8
    }
}
