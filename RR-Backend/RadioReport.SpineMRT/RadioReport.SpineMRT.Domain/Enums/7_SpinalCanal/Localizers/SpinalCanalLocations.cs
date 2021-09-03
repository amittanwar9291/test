using System;

namespace RadioReport.SpineMRT.Domain.Enums.SpinalCanal
{
    [Flags]
    public enum SpinalCanalLocations : byte
    {
        None = 0,
        Intramedullary = 2,
        Extramedullary = 4,
        Epidural = 8,
        Extradural = 16
    }
}
 