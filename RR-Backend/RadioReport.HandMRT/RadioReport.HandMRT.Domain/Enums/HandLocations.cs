using System;

namespace RadioReport.HandMRT.Domain.Enums
{
    [Flags]
    public enum HandLocations: int
    {
        None = 0,
        Radius = 1 << 0,
        Ulna = 1 << 1,
        Scaphoid = 1 << 2,
        OsLunatum = 1 << 3,
        OsTriquetrum = 1 << 4,
        OsPisiforme = 1 << 5,
        OsTrapezium = 1 << 6,
        TrapezoidBone = 1 << 7,
        Ocapitatum = 1 << 8,
        OsHamatum = 1 << 9,
        D1MetacarpalBone = 1 << 10,
        D1ProximalPhalanx = 1 << 11,
        D1DistalPhalanx = 1 << 12,
        D2MetacarpalBone = 1 << 13,
        D2ProximalPhalanx = 1 << 14,
        D2MiddlePhalanx = 1 << 15,
        D2DistalPhalanx = 1 << 16,
        D3MetacarpalBone = 1 << 17,
        D3ProximalPhalanx = 1 << 18,
        D3MiddlePhalanx = 1 << 19,
        D3DistalPhalanx = 1 << 20,
        D4MetacarpalBone = 1 << 21,
        D4ProximalPhalanx = 1 << 22,
        D4MiddlePhalanx = 1 << 23,
        D4DistalPhalanx = 1 << 24,
        D5MetacarpalBone = 1 << 25,
        D5ProximalPhalanx = 1 << 26,
        D5MiddlePhalanx = 1 << 27,
        D5DistalPhalanx = 1 << 28,
        Complex = 1 << 29
    }
}