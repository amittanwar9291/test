using System;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
    [Flags]
    public enum LabrumLocations : byte
    {
        None = 0,
        //Right breast
        Superior = 1,
        //Left breast
        Anterosuperior = 2,
        Anteroinferior = 4,
        Inferior = 8,
        Posteroinferior = 16,
        Posterosuperior = 32
    }
}
