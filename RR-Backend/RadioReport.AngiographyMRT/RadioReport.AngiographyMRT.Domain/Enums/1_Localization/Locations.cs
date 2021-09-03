using System;

namespace RadioReport.AngiographyMRT.Domain.Enums.Localization
{
    [Flags]
    public enum Locations : byte
    {
        None = 0,
        SupraaorticVessels = 1 << 0,
        ArteriesOfTheRightUpperLimb = 1 << 1,
        ArteriesOfTheLeftUpperLimb = 1 << 2,
        Aorta = 1 << 3,
        Abdomen = 1 << 4,
        ArteriesOfPelvisAndLowerLimbs = 1 << 5
    }
}
