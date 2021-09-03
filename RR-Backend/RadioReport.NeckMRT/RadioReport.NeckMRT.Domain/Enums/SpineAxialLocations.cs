using System;

namespace RadioReport.NeckMRT.Domain.Enums
{
    [Flags]
    public enum SpineAxialLocations : byte
    {
        None = 0,
        Prevertebral = 1,
        ParaVertebralLeft = 1 << 1,
        DorsalLeft = 1 << 2,
        Subcutaneous = 1 << 3,
        DorsalRight = 1 << 4,
        ParaVertebralRight = 1 << 5
    }
}
