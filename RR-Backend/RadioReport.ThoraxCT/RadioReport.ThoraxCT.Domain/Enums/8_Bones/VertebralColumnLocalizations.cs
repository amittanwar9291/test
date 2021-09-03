using System;

namespace RadioReport.ThoraxCT.Domain.Enums
{
    [Flags]
    public enum VertebralColumnLocalizations : long
    {
        None = 0,
        C7 = 1 << 0,
        TH1 = 1 << 1,
        TH2 = 1 << 2,
        TH3 = 1 << 3,
        TH4 = 1 << 4,
        TH5 = 1 << 5,
        TH6 = 1 << 6,
        TH7 = 1 << 7,
        TH8 = 1 << 8,
        TH9 = 1 << 9,
        TH10 = 1 << 10,
        TH11 = 1 << 11,
        TH12 = 1 << 12,
        L1 = 1 << 13
    }
}
