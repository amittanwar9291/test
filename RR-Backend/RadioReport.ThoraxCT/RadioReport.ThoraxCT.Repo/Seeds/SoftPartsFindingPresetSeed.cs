using System.Collections.Generic;
using RadioReport.ThoraxCT.Domain.Enums;
using RadioReport.ThoraxCT.Domain.Models;
using LocalizationAxialType = RadioReport.ThoraxCT.Domain.Enums.SoftParts.LocalizationAxialType;

namespace RadioReport.ThoraxCT.Repo.Seeds
{
    internal static class SoftPartsFindingPresetSeed
    {
        internal static List<SoftPartsFindingPreset> GetPreconfiguredPresets()
        {
            return new List<SoftPartsFindingPreset>
            {
                #region PleuralMass

                new SoftPartsFindingPreset
                {
                    FindingType = SoftPartsFindingType.PleuralMass,
                    DifferentialDiagnosis = SoftPartsDiagnosisType.Lipoma,
                    MarginType = MarginType.WellDefined,
                    HomogeneityType = HomogeneityType.Homogeneous,
                    IsFat = true
                },
                new SoftPartsFindingPreset
                {
                    FindingType = SoftPartsFindingType.PleuralMass,
                    DifferentialDiagnosis = SoftPartsDiagnosisType.FibrousPleuralTumor,
                    MarginType = MarginType.WellDefined,
                    IsNecrosis = true,
                    IsHemorrhage = true,
                    IsCysticChanges = true
                },
                new SoftPartsFindingPreset
                {
                    FindingType = SoftPartsFindingType.PleuralMass,
                    DifferentialDiagnosis = SoftPartsDiagnosisType.Metastasis,
                    MarginType = MarginType.WellDefined
                },
                new SoftPartsFindingPreset
                {
                    FindingType = SoftPartsFindingType.PleuralMass,
                    DifferentialDiagnosis = SoftPartsDiagnosisType.Mesothelioma,
                    IsCalcification = true,
                    IsInfiltrationChestWall = true,
                    IsInfiltrationOfExtrapleuralFatTissue = true
                },
                new SoftPartsFindingPreset
                {
                    FindingType = SoftPartsFindingType.PleuralMass,
                    DifferentialDiagnosis = SoftPartsDiagnosisType.PleuralEffusionTrapped,
                    MarginType = MarginType.WellDefined,
                    HomogeneityType = HomogeneityType.Homogeneous
                },
                new SoftPartsFindingPreset
                {
                    FindingType = SoftPartsFindingType.PleuralMass,
                    DifferentialDiagnosis = SoftPartsDiagnosisType.HematomaExtrapleural,
                    IsExtrapleuralFatSign = true,
                    DisplacementOfFatTissueType = DisplacementOfFatTissueType.Outwards
                },

                #endregion

                #region ChestWallSoftTissueMass

                new SoftPartsFindingPreset
                {
                    FindingType = SoftPartsFindingType.ChestWallSoftTissueMass,
                    DifferentialDiagnosis = SoftPartsDiagnosisType.Lipoma,
                    MarginType = MarginType.WellDefined,
                    HomogeneityType = HomogeneityType.Homogeneous,
                    DensityType = DensityType.FatEquivalent
                },
                new SoftPartsFindingPreset
                {
                    FindingType = SoftPartsFindingType.ChestWallSoftTissueMass,
                    DifferentialDiagnosis = SoftPartsDiagnosisType.Hemangioma,
                    IsCalcification = true,
                    CalcificationType = SoftPartsCalcificationType.Phlebolite
                },
                new SoftPartsFindingPreset
                {
                    FindingType = SoftPartsFindingType.ChestWallSoftTissueMass,
                    DifferentialDiagnosis = SoftPartsDiagnosisType.Lymphangioma,
                    MarginType = MarginType.WellDefined,
                    HomogeneityType = HomogeneityType.Homogeneous,
                    DensityType = DensityType.LiquidEquivalent,
                    IsCysts = true,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Minimal,
                    CMEnhancementHomogeneityType = HomogeneityType.Heterogeneous,
                    HeterogeneousType = HeterogeneousType.Peripheral
                },
                new SoftPartsFindingPreset
                {
                    FindingType = SoftPartsFindingType.ChestWallSoftTissueMass,
                    DifferentialDiagnosis = SoftPartsDiagnosisType.SchwannomaNeurinoma,
                    MarginType = MarginType.WellDefined,
                    IsCysts = true,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Marked
                },
                new SoftPartsFindingPreset
                {
                    FindingType = SoftPartsFindingType.ChestWallSoftTissueMass,
                    DifferentialDiagnosis = SoftPartsDiagnosisType.Neurofibroma,
                    MarginType = MarginType.WellDefined,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Marked,
                    CMEnhancementHomogeneityType = HomogeneityType.Heterogeneous
                },
                new SoftPartsFindingPreset
                {
                    FindingType = SoftPartsFindingType.ChestWallSoftTissueMass,
                    DifferentialDiagnosis = SoftPartsDiagnosisType.EpidermalCyst,
                    MarginType = MarginType.WellDefined,
                    DensityType = DensityType.LiquidEquivalent
                },
                new SoftPartsFindingPreset
                {
                    FindingType = SoftPartsFindingType.ChestWallSoftTissueMass,
                    DifferentialDiagnosis = SoftPartsDiagnosisType.Elastofibroma,
                    LocalizationAxialType = LocalizationAxialType.Posterior
                },
                new SoftPartsFindingPreset
                {
                    FindingType = SoftPartsFindingType.ChestWallSoftTissueMass,
                    DifferentialDiagnosis = SoftPartsDiagnosisType.Pilomatricoma,
                    IsCalcification = true,
                    CalcificationType = SoftPartsCalcificationType.Microcalcification,
                    IsCapsule = true,
                    GrowthPatternsType = SoftPartsGrowthPatternsType.Subcutaneous
                },
                new SoftPartsFindingPreset
                {
                    FindingType = SoftPartsFindingType.ChestWallSoftTissueMass,
                    DifferentialDiagnosis = SoftPartsDiagnosisType.Liposarcoma,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    IsFat = true,
                    IsSepta = true,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Minimal
                },
                new SoftPartsFindingPreset
                {
                    FindingType = SoftPartsFindingType.ChestWallSoftTissueMass,
                    DifferentialDiagnosis = SoftPartsDiagnosisType.Angiosarcoma,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    DensityType = DensityType.SoftTissueTight,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Minimal
                },
                new SoftPartsFindingPreset
                {
                    FindingType = SoftPartsFindingType.ChestWallSoftTissueMass,
                    DifferentialDiagnosis = SoftPartsDiagnosisType.UndifferentiatedPleomorpheSarcoma,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    DensityType = DensityType.SoftTissueTight,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Minimal
                },
                new SoftPartsFindingPreset
                {
                    FindingType = SoftPartsFindingType.ChestWallSoftTissueMass,
                    DifferentialDiagnosis = SoftPartsDiagnosisType.DermatofibrosarcomaProtuberans,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    DensityType = DensityType.SoftTissueTight
                },
                new SoftPartsFindingPreset
                {
                    FindingType = SoftPartsFindingType.ChestWallSoftTissueMass,
                    DifferentialDiagnosis = SoftPartsDiagnosisType.MalignantPeripheralNerveSheathTumor,
                    HomogeneityType = HomogeneityType.Heterogeneous
                }

                #endregion
            };
        }
    }
}
