using System;

namespace RadioReport.SpineCT.Domain.Enums
{
    [Flags]
    public enum SpineLocationBones : ulong
    {
        None = 0uL,
        C1_L = 1uL << 0,
        C1_R = 1uL << 1,
        C2_L = 1uL << 2,
        C2_R = 1uL << 3,
        C3_L = 1uL << 4,
        C3_R = 1uL << 5,
        C4_L = 1uL << 6,
        C4_R = 1uL << 7,
        C5_L = 1uL << 8,
        C5_R = 1uL << 9,
        C6_L = 1uL << 10,
        C6_R = 1uL << 11,
        C7_L = 1uL << 12,
        C7_R = 1uL << 13,
        T1_L = 1uL << 14,
        T1_R = 1uL << 15,
        T2_L = 1uL << 16,
        T2_R = 1uL << 17,
        T3_L = 1uL << 18,
        T3_R = 1uL << 19,
        T4_L = 1uL << 20,
        T4_R = 1uL << 21,
        T5_L = 1uL << 22,
        T5_R = 1uL << 23,
        T6_L = 1uL << 24,
        T6_R = 1uL << 25,
        T7_L = 1uL << 26,
        T7_R = 1uL << 27,
        T8_L = 1uL << 28,
        T8_R = 1uL << 29,
        T9_L = 1uL << 30,
        T9_R = 1uL << 31,
        T10_L = 1uL << 32,
        T10_R = 1uL << 33,
        T11_L = 1uL << 34,
        T11_R = 1uL << 35,
        T12_L = 1uL << 36,
        T12_R = 1uL << 37,
        L1_L = 1uL << 38,
        L1_R = 1uL << 39,
        L2_L = 1uL << 40,
        L2_R = 1uL << 41,
        L3_L = 1uL << 42,
        L3_R = 1uL << 43,
        L4_L = 1uL << 44,
        L4_R = 1uL << 45,
        L5_L = 1uL << 46,
        L5_R = 1uL << 47,
        OsSacrum_L = 1uL << 48,
        OsSacrum_R = 1uL << 49,
        OsCoccygis_L = 1uL << 50,
        OsCoccygis_R = 1uL << 51
      }
}
