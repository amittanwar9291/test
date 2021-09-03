using System;

namespace RadioReport.SpineMRT.Domain.Enums
{
    [Flags]
    public enum SpineAxialLocations : byte
    {
        None = 0,
        Prevertebral = 1,
        ParaVertebralRight = 1 << 1,
        DorsalRight = 1 << 2,
        ParaVertebralLeft = 1 << 3,
        DorsalLeft = 1 << 4,
        Subcutaneous = 1 << 5
    }
}
