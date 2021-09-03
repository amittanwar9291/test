using System;

namespace RadioReport.AngiographyCT.Domain.Enums.Localization
{
    [Flags]
    public enum Locations : byte
    {
        None = 0,
        SupraaorticVessels = 1 << 0,
        ArteriesOfTheRightUpperLimb = 1 << 1,
        ArteriesOfTheLeftUpperLimb = 1 << 2,
        Aorta = 1 << 3,
        CoronaryArteries = 1 << 4,
        Abdomen = 1 << 5,
        ArteriesOfPelvisAndLowerLimbs = 1 << 6
    }
}
