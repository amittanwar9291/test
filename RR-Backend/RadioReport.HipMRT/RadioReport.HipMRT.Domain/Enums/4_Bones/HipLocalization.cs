using System;

namespace RadioReport.HipMRT.Bones.Domain.Enums
{
    [Flags]
    public enum HipSpecificLocalizations
    {
        None = 0,
        RightOsIlium = 1 << 0,
        RightOsPubis = 1 << 1,
        RightOsIschium = 1 << 2,
        RightAcetabulum = 1 << 3,
        RightFemoralHead = 1 << 4,
        RightFemoralNeck = 1 << 5,
        RightFemoralShaft = 1 << 6,
        LeftOsIlium = 1 << 7,
        LeftOsPubis = 1 << 8,
        LeftOsIschium = 1 << 9,
        LeftAcetabulum = 1 << 10,
        LeftFemoralHead = 1 << 11,
        LeftFemoralNeck = 1 << 12,
        LeftFemoralShaft = 1 << 13
    }
}