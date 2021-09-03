using System;

namespace RadioReport.HandMRT.Domain.Enums
{
    [Flags]
    public enum Locations : byte
    {
        None = 0,
        Left = 1,
        Right = 2
    }
}
