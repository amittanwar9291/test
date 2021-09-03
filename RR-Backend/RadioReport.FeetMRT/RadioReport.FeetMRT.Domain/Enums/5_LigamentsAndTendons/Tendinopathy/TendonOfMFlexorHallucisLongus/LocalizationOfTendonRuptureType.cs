using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.LigamentsAndTendons
{
    public enum LocalizationOfTendonRuptureType : byte
    {
        None = 0,
        
        [RadioReportId("anc_m_050536", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy))]
        TendonCrossingWithMFlexorDigitorumLongusTendon = 1,

        [RadioReportId("anc_m_050537", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy))]
        Insertion = 2
    }
}