using System;

namespace RadioReport.NeckMRT.Domain.Enums
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
 