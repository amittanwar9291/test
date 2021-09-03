using System;

namespace RadioReport.KneeMRT.Domain.Enums
{
    [Flags]
    public enum KneeCompartmentsLocations : byte
    {
        None = 0,
        ASU = 1,
        AIN = 2,
        PSU = 4,
        PIN = 8
    }
}
