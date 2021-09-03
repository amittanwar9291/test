using System;

namespace RadioReport.FeetMRT.Domain.Enums.SoftTissue
{
    [Flags]
    public enum TendonsLocalizations : int
    {
        None = 0,
        AchillesTendon = 1 << 0,
        TendonOfMPeroneusLongus = 1 << 1,
        TendonOfThePosteriorTibialisMuscle = 1 << 2,
        TendonOfMFlexorDigitorumLongus = 1  << 3,
        TendonOfMFlexorHallucisLongus = 1 << 4,
        TendonOfTheAnteriorTibialisMuscle = 1 << 5,
        TendonOfMPeroneusBrevis = 1 << 6,
        TendonExtensorDigitorumLongusMuscle = 1 << 7,
        TendonExtensorHallucisLongusMuscle = 1 << 8
    }
}