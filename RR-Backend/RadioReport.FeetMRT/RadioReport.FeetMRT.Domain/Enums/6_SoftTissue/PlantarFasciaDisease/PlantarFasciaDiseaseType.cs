using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.SoftTissue
{
    public enum PlantarFasciaDiseaseType : byte
    {
        None = 0,

        [RadioReportId("anc_m_060312", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease))]
        Rupture = 1,

        [RadioReportId("anc_m_060313", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease))]
        PlantarFasciitis = 2,

        [RadioReportId("anc_m_060314", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease))]
        PlantarFibromatosisLedderhoseDisease = 3, 

        [RadioReportId("anc_m_060316", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease))]
        TendonXanthoma = 4,

        [RadioReportId("anc_m_060317", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease))]
        ForeignBodyGranulomatousReaction = 5, 

        [RadioReportId("anc_m_060318", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease))]
        PlantarVenousThrombosis = 6,

        [RadioReportId("anc_m_060320", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease))]
        BaxtersNeuropathy = 7,

        [RadioReportId("anc_m_060321", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease))]
        StressFractureCalcaneus = 8
    }
}