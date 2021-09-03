using System;

namespace RadioReport.KneeMRT.Domain.Enums
{
    [Flags]
    public enum OsteoKneeLocations : byte
    {
        None = 0,
        FEMCONLAT = 2,
        FEMCONMED = 4,
        TIBCONLAT = 8,
        TIBEMIN = 16,
        TIBCONMED = 32
    }
}