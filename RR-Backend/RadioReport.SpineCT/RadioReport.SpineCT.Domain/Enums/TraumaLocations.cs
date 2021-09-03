using System;

namespace RadioReport.SpineCT.Domain.Enums
{
    [Flags]
    public enum TraumaLocations : byte
    {
        None = 0,
        Ventral = 1,
        Dorsal = 2
    }
}
