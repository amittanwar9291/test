using System;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
    [Flags]
    public enum SpineLocations : int
    {
        None = 0,
        C0 = 1 << 0,
        C1 = 1 << 1,
        C2 = 1 << 2,
        C3 = 1 << 3,
        C4 = 1 << 4,
        C5 = 1 << 5,
        C6 = 1 << 6,
        C7 = 1 << 7,
        TH1 = 1 << 8,
        TH2 = 1 << 9,
        TH3 = 1 << 10,
        TH4 = 1 << 11,
        TH5 = 1 << 12,
        TH6 = 1 << 13,
        TH7 = 1 << 14,
        TH8 = 1 << 15,
        TH9 = 1 << 16,
        TH10 = 1 << 17,
        TH11 = 1 << 18,
        TH12 = 1 << 19,
        L1 = 1 << 20,
        L2 = 1 << 21,
        L3 = 1 << 22,
        L4 = 1 << 23,
        L5 = 1 << 24,
        OsSacrum = 1 << 25,
        OsCoccygis = 1 << 26
    }
}
