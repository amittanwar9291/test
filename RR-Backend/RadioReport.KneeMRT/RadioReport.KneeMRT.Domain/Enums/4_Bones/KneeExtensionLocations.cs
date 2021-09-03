using System;

namespace RadioReport.KneeMRT.Domain.Enums.Bones
{
    [Flags]
    public enum KneeExtensionLocations
    {
        None = 0,
        FemurMetaphyseal = 1,
        FemurLatCondyle = 2,
        FemurMedCondyle = 4,
        Patella = 8,
        TibiaLatPlateau = 16,
        TibiaMedPlateau = 32,
        TibiaMetaphyseal = 64,
        FibulaHead = 128,
        FibulaMetaphyseal = 256
    }
}