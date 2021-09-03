using System;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
    [Flags]
    public enum VertebralBodyLocalizations : byte
    {
        None = 0,
        Ventral = 1,
        Dorsal = 2
    }
}
