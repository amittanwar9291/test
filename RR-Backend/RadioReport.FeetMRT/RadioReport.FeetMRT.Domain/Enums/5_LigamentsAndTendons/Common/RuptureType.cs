using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.LigamentsAndTendons
{
    public enum RuptureType : byte
    {
        None = 0,

        [RadioReportId("anc_m_050425", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta), CustomConditionName = nameof(LigamentaLocalizationType.RuptureOfTheTibiofibularSyndesmosis))]
        [RadioReportId("anc_m_050406", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta), CustomConditionName = nameof(LigamentaLocalizationType.RuptureOfLateralLigamentOfTheAnkle))]
        [RadioReportId("anc_m_050419", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta), CustomConditionName = nameof(LigamentaType.TearOfTheSpringLigamentComplex))]
        [RadioReportId("anc_m_050340", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.AchillesTendon))]
        [RadioReportId("anc_m_050517", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMPeroneusLongus) + nameof(ExtraarticularLocalizationType.TendonOfMPeroneusBrevis))]
        [RadioReportId("anc_m_050462", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfTheAnteriorTibialisMuscle))]
        [RadioReportId("anc_m_050476", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMFlexorDigitorumLongus))]
        [RadioReportId("anc_m_050530", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMFlexorHallucisLongus))]
        [RadioReportId("anc_m_0504100", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfThePosteriorTibialisMuscle))]

        PartialTear = 1,

        [RadioReportId("anc_m_050426", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta), CustomConditionName = nameof(LigamentaLocalizationType.RuptureOfTheTibiofibularSyndesmosis))]
        [RadioReportId("anc_m_050407", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta), CustomConditionName = nameof(LigamentaLocalizationType.RuptureOfLateralLigamentOfTheAnkle))]
        [RadioReportId("anc_m_050423", InstanceName = nameof(LigamentsAndTendonsFindingType.Ligamenta), CustomConditionName = nameof(LigamentaType.TearOfTheSpringLigamentComplex))]
        [RadioReportId("anc_m_050341", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.AchillesTendon))]
        [RadioReportId("anc_m_050518", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMPeroneusLongus) + nameof(ExtraarticularLocalizationType.TendonOfMPeroneusBrevis))]
        [RadioReportId("anc_m_050463", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfTheAnteriorTibialisMuscle))]
        [RadioReportId("anc_m_050477", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMFlexorDigitorumLongus))]
        [RadioReportId("anc_m_050531", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfMFlexorHallucisLongus))]
        [RadioReportId("anc_m_0504101", InstanceName = nameof(LigamentsAndTendonsFindingType.Tendinopathy), CustomConditionName = nameof(ExtraarticularLocalizationType.TendonOfThePosteriorTibialisMuscle))]
        CompleteTear = 2
    }
}