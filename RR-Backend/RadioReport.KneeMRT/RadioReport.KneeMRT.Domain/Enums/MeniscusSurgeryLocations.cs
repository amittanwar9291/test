using System;

namespace RadioReport.KneeMRT.Domain.Enums
{
    [Flags]
    public enum MeniscusSurgeryLocations : byte
    {
        None = 0,
        AHLM = 1,
        IPLM = 2,
        PHLM = 4,
        PHMM = 8,
        IPMM = 16,
        AHMM = 32
    }
}
