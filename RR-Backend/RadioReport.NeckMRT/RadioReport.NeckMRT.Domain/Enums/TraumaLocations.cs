using System;

namespace RadioReport.NeckMRT.Domain.Enums
{
    [Flags]
    public enum TraumaLocations : byte
    {
        None = 0,
        Ventral = 1,
        Dorsal = 2
    }
}
