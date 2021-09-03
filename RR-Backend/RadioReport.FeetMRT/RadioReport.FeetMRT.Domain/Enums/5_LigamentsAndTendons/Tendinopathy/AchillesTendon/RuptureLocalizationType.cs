using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.LigamentsAndTendons
{
    public enum RuptureLocalizationType : byte
    {
        None = 0,
        
        [RadioReportId("anc_m_050442", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy))]
        MuscleTendonJunction = 1,

        [RadioReportId("anc_m_050443", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy))]
        MiddleToDistalAchillesTendon = 2,

        [RadioReportId("anc_m_050444", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy))]
        AchillesTendonApproach = 3
    }
}