using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.LigamentsAndTendons
{
    public enum LigamentaLocalizationType : byte
    {
        None = 0,

        [RadioReportId("anc_m_050302", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta))]
        RuptureOfTheTibiofibularSyndesmosis = 1,

        [RadioReportId("anc_m_050303", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta))]
        RuptureOfLateralLigamentOfTheAnkle = 2,

        [RadioReportId("anc_m_050304", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta))]
        RuptureOfMedialLigamentOfTheAnkle = 3
    }
}