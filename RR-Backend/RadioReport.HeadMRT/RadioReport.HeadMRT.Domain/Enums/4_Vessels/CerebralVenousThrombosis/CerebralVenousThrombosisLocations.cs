using System;

namespace RadioReport.HeadMRT.Domain.Enums.Vessels
{
    [Flags]
    public enum CerebralVenousThrombosisLocations : int
    {
        None = 0,
        SuperiorSagittalSinus = 1 << 0,
        InferiorSagittalSinus = 1 << 1,
        GreatCerebralVein = 1 << 2,
        StraightSinus = 1 << 3,
        ConfluensOfSinuses = 1 << 4,
        
        TransverseSinusRight = 1 << 5,
        SigmoidSinusRight = 1 << 6,
        SuperiorPetrosalSinusRight = 1 << 7,
        InferiorPetrosalSinusRight = 1 << 8,
        InternalJugularVeinRight = 1 << 9,
        CavernousSinusRight = 1 << 10,
        BasalVeinRight = 1 << 11,

        TransverseSinusLeft = 1 << 12,
        SigmoidSinusLeft = 1 << 13,
        SuperiorPetrosalSinusLeft = 1 << 14,
        InferiorPetrosalSinusLeft = 1 << 15,
        InternalJugularVeinLeft = 1 << 16,
        CavernousSinusLeft = 1 << 17,
        BasalVeinLeft = 1 << 18
    }
}
