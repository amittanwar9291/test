using System;

namespace RadioReport.ElbowMRT.Domain.Enums
{
    [Flags]
    public enum Locations : byte
    {
        None = 0,
        Left = 1,
        Right = 2
    }
}
