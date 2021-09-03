using System;

namespace RadioReport.HeadMRT.Domain.Enums.Vessels
{
    [Flags]
    public enum VascularTerritoryLocations : int
    {
        None = 0,
        AnteriorCerebralArteryACARight = 1 << 0,
        MedialLenticulostriateRight = 1 << 1,
        LateralLenticulostriateRight = 1 << 2,
        MiddleCerebralArteryRight = 1 << 3,
        PosteriorCerebralArteryPCARight = 1 << 4,
        AnteriorChoroidalArteryAChARight = 1 << 5,
        SuperiorCerebellarArterySCARight = 1 << 6,
        AnteriorInferiorCerebellarArteryAICARight = 1 << 7,
        PosteriorInferiorCerebellarArteryPICARight = 1 << 8,
        VertebralArteryVARight = 1 << 9,
        CorticalBorderZoneACAMCARight = 1 << 10,
        AnteriorCorticalBorderZoneRight = 1 << 11,
        PosteriorCorticalBorderZoneRight = 1 << 12,
        InternalBorderZoneRight = 1 << 13,
        BasilarArteryBA = 1 << 14,
        AnteriorCerebralArteryACALeft = 1 << 15,
        MedialLenticulostriateLeft = 1 << 16,
        LateralLenticulostriateLeft = 1 << 17,
        MiddleCerebralArteryLeft = 1 << 18,
        PosteriorCerebralArteryPCALeft = 1 << 19,
        AnteriorChoroidalArteryAChALeft = 1 << 20,
        SuperiorCerebellarArterySCALeft = 1 << 21,
        AnteriorInferiorCerebellarArteryAICALeft = 1 << 22,
        PosteriorInferiorCerebellarArteryPICALeft = 1 << 23,
        VertebralArteryVALeft = 1 << 24,
        CorticalBorderZoneACAMCALeft = 1 << 25,
        AnteriorCorticalBorderZoneLeft = 1 << 26,
        PosteriorCorticalBorderZoneLeft = 1 << 27,
        InternalBorderZoneLeft = 1 << 28
    }
}
