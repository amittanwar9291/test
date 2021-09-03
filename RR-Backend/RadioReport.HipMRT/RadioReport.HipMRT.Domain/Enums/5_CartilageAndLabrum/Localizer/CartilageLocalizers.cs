using System;

namespace RadioReport.HipMRT.Domain.Enums
{
    [Flags]
    public enum CartilageLocalizers : byte
    {
        None = 0,
        Anteroinferior = 1 << 0,
        Anterosuperior = 1 << 1,
        Superior = 1 << 2,
        Posterosuperior = 1 << 3,
        Posteroinferior = 1 << 4,
        FossaAcetabularis = 1 << 5
    }
}