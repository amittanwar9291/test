using System;

namespace RadioReport.KneeMRT.Domain.Enums.Bones
{
    [Flags]
    public enum BonesLocations : byte
    {
        None = 0,
        Femur = 1,
        Patella = 2,
        Tibia = 4,
        Fibula = 8
    }
}
