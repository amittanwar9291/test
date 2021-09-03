using System.Collections.Generic;
using RadioReport.ThoraxCT.Domain.Enums;
using RadioReport.ThoraxCT.Domain.Models;

namespace RadioReport.ThoraxCT.Repo.Seeds
{
    internal static class LungInterstitiumFindingPresetSeed
    {
        internal static List<LungInterstitiumFindingPreset> GetPreconfiguredPresets()
        {
            return new List<LungInterstitiumFindingPreset>
            {
                new LungInterstitiumFindingPreset
                {
                    DifferentialDiagnosis = LungInterstitiumDiagnosisType.Bronchitis,
                    FindingType = LungInterstitiumFindingType.NodularChanges,
                    DistributionSecondaryPulmonaryLobuleType = DistributionSecondaryPulmonaryLobuleType.Centrilobular,
                    RandomDistributionType = RandomDistributionType.NonTreeInBud
                },
                new LungInterstitiumFindingPreset
                {
                    DifferentialDiagnosis = LungInterstitiumDiagnosisType.FungalPneumonia,
                    FindingType = LungInterstitiumFindingType.NodularChanges,
                    DistributionSecondaryPulmonaryLobuleType = DistributionSecondaryPulmonaryLobuleType.RandomDistribution,
                    LocalizationType = LungInterstitiumLocalizationType.MiliaryPatternDiffuse
                },
                new LungInterstitiumFindingPreset
                {
                    DifferentialDiagnosis = LungInterstitiumDiagnosisType.MiliaryTuberculosis,
                    FindingType = LungInterstitiumFindingType.NodularChanges,
                    DistributionSecondaryPulmonaryLobuleType = DistributionSecondaryPulmonaryLobuleType.RandomDistribution,
                    LocalizationType = LungInterstitiumLocalizationType.MiliaryPatternDiffuse
                },
                new LungInterstitiumFindingPreset
                {
                    DifferentialDiagnosis = LungInterstitiumDiagnosisType.Bronchiolitis,
                    FindingType = LungInterstitiumFindingType.NodularChanges,
                    DistributionSecondaryPulmonaryLobuleType = DistributionSecondaryPulmonaryLobuleType.Centrilobular
                },
                new LungInterstitiumFindingPreset
                {
                    DifferentialDiagnosis = LungInterstitiumDiagnosisType.Metastases,
                    FindingType = LungInterstitiumFindingType.NodularChanges,
                    DistributionSecondaryPulmonaryLobuleType = DistributionSecondaryPulmonaryLobuleType.RandomDistribution,
                    LocalizationType = LungInterstitiumLocalizationType.MiliaryPatternDiffuse,
                    MarginType = MarginType.WellDefined
                },
                new LungInterstitiumFindingPreset
                {
                    DifferentialDiagnosis = LungInterstitiumDiagnosisType.BronchioloalveolarCarcinoma,
                    FindingType = LungInterstitiumFindingType.NodularChanges,
                    DistributionSecondaryPulmonaryLobuleType = DistributionSecondaryPulmonaryLobuleType.Centrilobular,
                    RandomDistributionType = RandomDistributionType.NonTreeInBud,
                    MarginType = MarginType.IllDefined
                },
                new LungInterstitiumFindingPreset
                {
                    DifferentialDiagnosis = LungInterstitiumDiagnosisType.BronchioloalveolarCarcinoma,
                    FindingType = LungInterstitiumFindingType.IncreasedParenchymalDensity,
                    IsConsolidation = true,
                    IsGroundGlassOpacity = true
                },
                new LungInterstitiumFindingPreset
                {
                    DifferentialDiagnosis = LungInterstitiumDiagnosisType.LymphangiosisCarcinomatosa,
                    FindingType = LungInterstitiumFindingType.NodularChanges,
                    DistributionSecondaryPulmonaryLobuleType = DistributionSecondaryPulmonaryLobuleType.Perilymphatic
                },
                new LungInterstitiumFindingPreset
                {
                    DifferentialDiagnosis = LungInterstitiumDiagnosisType.LymphangiosisCarcinomatosa,
                    FindingType = LungInterstitiumFindingType.Reticulations,
                    IsIntralobularSepta = true,
                    StructureType = StructureType.NodularSeptalThickening
                },
                new LungInterstitiumFindingPreset
                {
                    DifferentialDiagnosis = LungInterstitiumDiagnosisType.PulmonaryEdema,
                    FindingType = LungInterstitiumFindingType.Reticulations,
                    IsInterlobularSepta = true,
                    StructureType = StructureType.Smooth
                },
                new LungInterstitiumFindingPreset
                {
                    DifferentialDiagnosis = LungInterstitiumDiagnosisType.PulmonaryEdema,
                    FindingType = LungInterstitiumFindingType.IncreasedParenchymalDensity,
                    IsGroundGlassOpacity = true
                },
                new LungInterstitiumFindingPreset
                {
                    DifferentialDiagnosis = LungInterstitiumDiagnosisType.Haemorrhage,
                    FindingType = LungInterstitiumFindingType.OtherParenchymalPatterns,
                    IsCrazyPavingPattern = true
                },
                new LungInterstitiumFindingPreset
                {
                    DifferentialDiagnosis = LungInterstitiumDiagnosisType.Haemorrhage,
                    FindingType = LungInterstitiumFindingType.IncreasedParenchymalDensity,
                    IsGroundGlassOpacity = true
                },
                new LungInterstitiumFindingPreset
                {
                    DifferentialDiagnosis = LungInterstitiumDiagnosisType.CysticFibrosis,
                    FindingType = LungInterstitiumFindingType.NodularChanges,
                    DistributionSecondaryPulmonaryLobuleType = DistributionSecondaryPulmonaryLobuleType.Centrilobular,
                    RandomDistributionType = RandomDistributionType.TreeInBud,
                    IsMicronodular = true
                },
                new LungInterstitiumFindingPreset
                {
                    DifferentialDiagnosis = LungInterstitiumDiagnosisType.CysticFibrosis,
                    FindingType = LungInterstitiumFindingType.BronchialTubes,
                    IsBronchiectasis = true,
                    BronchiectasisType = BronchiectasisType.Cystic,
                    IsBronchiolectasis = true,
                    IsBronchialWallThickening = true,
                    IsMucoidImpaction = true
                }
            };
        }
    }
}
