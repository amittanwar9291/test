using System;

namespace RadioReport.MammaMX.Domain.Enums
{
    [Flags]
    public enum Locations
    {
        None = 0,
        R1 = 1 << 0,
        R2  = 1 << 2,
        R3  = 1 << 3,
        R4  = 1 << 4,
        R5  = 1 << 5,
        R6  = 1 << 6,
        R7  = 1 << 7,
        R8  = 1 << 8,
        R9  = 1 << 9,
        R10 = 1 << 10,
        R11 = 1 << 11,
        R12 = 1 << 12,
        L1  = 1 << 13,
        L2  = 1 << 14,
        L3  = 1 << 15,
        L4  = 1 << 16,
        L5  = 1 << 17,
        L6  = 1 << 18,
        L7  = 1 << 19,
        L8  = 1 << 20,
        L9  = 1 << 21,
        L10 = 1 << 22,
        L11 = 1 << 23,
        L12 = 1 << 24
    }
}
