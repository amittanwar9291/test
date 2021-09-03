using System;

namespace RadioReport.SpineMRT.Domain.Enums
{
    [Flags]
    public enum TraumaLocations : byte
    {
        None = 0,
        Ventral = 1,
        Dorsal = 2
    }
}
