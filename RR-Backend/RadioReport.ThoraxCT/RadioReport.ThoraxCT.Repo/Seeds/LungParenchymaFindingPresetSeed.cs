using System.Collections.Generic;
using RadioReport.ThoraxCT.Domain.Enums;
using RadioReport.ThoraxCT.Domain.Models;
using LocalizationAxialType = RadioReport.ThoraxCT.Domain.Enums.LungParenchyma.LocalizationAxialType;

namespace RadioReport.ThoraxCT.Repo.Seeds
{
    internal static class LungParenchymaFindingPresetSeed
    {
        internal static List<LungParenchymaFindingPreset> GetPreconfiguredPresets()
        {
            return new List<LungParenchymaFindingPreset>
            {
                #region Nodule

                new LungParenchymaFindingPreset
                {
                    FindingType = LungParenchymaFindingType.Nodule,
                    MainCharacteristicsDifferentialDiagnosis01 = LungParenchymaDiagnosisType.Granuloma,
                    DensityType = LungParenchymaDensityType.Solid,
                    MarginType = MarginType.WellDefined,
                    HomogeneityType = HomogeneityType.Homogeneous,
                    IsCalcification = true,
                    CalcificationType = LungParenchymaCalcificationType.Centrally,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.No
                },
                new LungParenchymaFindingPreset
                {
                    FindingType = LungParenchymaFindingType.Nodule,
                    MainCharacteristicsDifferentialDiagnosis01 = LungParenchymaDiagnosisType.Hamartoma,
                    DensityType = LungParenchymaDensityType.Solid,
                    MarginType = MarginType.WellDefined,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    IsFat = true,
                    IsCalcification = true,
                    CalcificationType = LungParenchymaCalcificationType.Popcornstyle,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Minimal,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Heterogeneous
                },
                new LungParenchymaFindingPreset
                {
                    FindingType = LungParenchymaFindingType.Nodule,
                    MainCharacteristicsDifferentialDiagnosis01 = LungParenchymaDiagnosisType.Hemangioma,
                    DensityType = LungParenchymaDensityType.Solid,
                    MarginType = MarginType.WellDefined,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Marked,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Heterogeneous
                },
                new LungParenchymaFindingPreset
                {
                    FindingType = LungParenchymaFindingType.Nodule,
                    MainCharacteristicsDifferentialDiagnosis01 = LungParenchymaDiagnosisType.IntrapulmonaryLymphNode,
                    DensityType = LungParenchymaDensityType.Solid,
                    MarginType = MarginType.WellDefined
                },
                new LungParenchymaFindingPreset
                {
                    FindingType = LungParenchymaFindingType.Nodule,
                    MainCharacteristicsDifferentialDiagnosis01 = LungParenchymaDiagnosisType.RheumaticNodules,
                    DensityType = LungParenchymaDensityType.Solid,
                    MarginType = MarginType.WellDefined
                },
                new LungParenchymaFindingPreset
                {
                    FindingType = LungParenchymaFindingType.Nodule,
                    MainCharacteristicsDifferentialDiagnosis01 = LungParenchymaDiagnosisType.WegenersGranuloma,
                    DensityType = LungParenchymaDensityType.Solid,
                    MarginType = MarginType.IllDefined,
                    IsCavitation = true,
                    IsEccentricNecrosis = true
                },
                new LungParenchymaFindingPreset
                {
                    FindingType = LungParenchymaFindingType.Nodule,
                    MainCharacteristicsDifferentialDiagnosis01 = LungParenchymaDiagnosisType.BronchiogenicCyst,
                    MarginType = MarginType.WellDefined,
                    HomogeneityType = HomogeneityType.Homogeneous,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.No
                },
                new LungParenchymaFindingPreset
                {
                    FindingType = LungParenchymaFindingType.Nodule,
                    MainCharacteristicsDifferentialDiagnosis01 = LungParenchymaDiagnosisType.MetastasisNotFurtherSpecified,
                    DensityType = LungParenchymaDensityType.Solid,
                    MarginType = MarginType.WellDefined
                },
                new LungParenchymaFindingPreset
                {
                    FindingType = LungParenchymaFindingType.Nodule,
                    MainCharacteristicsDifferentialDiagnosis01 = LungParenchymaDiagnosisType.PrimaryLungCancer,
                    DensityType = LungParenchymaDensityType.Solid,
                    MarginType = MarginType.IllDefined,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    IsPleuralFinger = true,
                    IsCoronaRadiataOrSpiculae = true,
                    IsAssociatedAtelectasis = true
                },
                new LungParenchymaFindingPreset
                {
                    FindingType = LungParenchymaFindingType.Nodule,
                    MainCharacteristicsDifferentialDiagnosis01 = LungParenchymaDiagnosisType.Pneumonia,
                    MarginType = MarginType.IllDefined,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    IsAssociatedAtelectasis = true,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Minimal,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Heterogeneous
                },
                new LungParenchymaFindingPreset
                {
                    FindingType = LungParenchymaFindingType.Nodule,
                    MainCharacteristicsDifferentialDiagnosis01 = LungParenchymaDiagnosisType.Abscess,
                    MarginType = MarginType.IllDefined,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    IsCavitation = true,
                    IsEccentricNecrosis = true,
                    IsAssociatedAtelectasis = true,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Marked,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Heterogeneous
                },
                new LungParenchymaFindingPreset
                {
                    FindingType = LungParenchymaFindingType.Nodule,
                    MainCharacteristicsDifferentialDiagnosis01 = LungParenchymaDiagnosisType.Sequester,
                    DensityType = LungParenchymaDensityType.Solid,
                    MarginType = MarginType.WellDefined,
                    HomogeneityType = HomogeneityType.Heterogeneous
                },
                new LungParenchymaFindingPreset
                {
                    FindingType = LungParenchymaFindingType.Nodule,
                    MainCharacteristicsDifferentialDiagnosis01 = LungParenchymaDiagnosisType.PulmonaryInfarction,
                    LocalizationDetailsType = LocalizationDetailsType.PleuralBased,
                    DensityType = LungParenchymaDensityType.Subsolid,
                    SubsolidType = SubsolidType.PartiallySolid,
                    MarginType = MarginType.IllDefined,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    IsAssociatedAtelectasis = true
                },
                new LungParenchymaFindingPreset
                {
                    FindingType = LungParenchymaFindingType.Nodule,
                    MainCharacteristicsDifferentialDiagnosis01 = LungParenchymaDiagnosisType.AVMalformation,
                    DensityType = LungParenchymaDensityType.Solid,
                    MarginType = MarginType.WellDefined,
                    HomogeneityType = HomogeneityType.Homogeneous
                },
                new LungParenchymaFindingPreset
                {
                    FindingType = LungParenchymaFindingType.Nodule,
                    MainCharacteristicsDifferentialDiagnosis01 = LungParenchymaDiagnosisType.Bronchocele,
                    DensityType = LungParenchymaDensityType.Solid,
                    MarginType = MarginType.WellDefined,
                    HomogeneityType = HomogeneityType.Homogeneous,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.No
                },

                #endregion

                #region Mass

                new LungParenchymaFindingPreset
                {
                    FindingType = LungParenchymaFindingType.Mass,
                    MainCharacteristicsDifferentialDiagnosis01 = LungParenchymaDiagnosisType.Granuloma,
                    DensityType = LungParenchymaDensityType.Solid,
                    MarginType = MarginType.WellDefined,
                    HomogeneityType = HomogeneityType.Homogeneous,
                    IsCalcification = true,
                    CalcificationType = LungParenchymaCalcificationType.Centrally
                },
                new LungParenchymaFindingPreset
                {
                    FindingType = LungParenchymaFindingType.Mass,
                    MainCharacteristicsDifferentialDiagnosis01 = LungParenchymaDiagnosisType.Hamartoma,
                    DensityType = LungParenchymaDensityType.Solid,
                    MarginType = MarginType.WellDefined,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    IsFat = true,
                    IsCalcification = true,
                    CalcificationType = LungParenchymaCalcificationType.Popcornstyle
                },
                new LungParenchymaFindingPreset
                {
                    FindingType = LungParenchymaFindingType.Mass,
                    MainCharacteristicsDifferentialDiagnosis01 = LungParenchymaDiagnosisType.Hemangioma,
                    DensityType = LungParenchymaDensityType.Solid,
                    MarginType = MarginType.WellDefined,
                    HomogeneityType = HomogeneityType.Heterogeneous
                },
                new LungParenchymaFindingPreset
                {
                    FindingType = LungParenchymaFindingType.Mass,
                    MainCharacteristicsDifferentialDiagnosis01 = LungParenchymaDiagnosisType.IntrapulmonaryLymphNode,
                    DensityType = LungParenchymaDensityType.Solid,
                    MarginType = MarginType.WellDefined
                },
                new LungParenchymaFindingPreset
                {
                    FindingType = LungParenchymaFindingType.Mass,
                    MainCharacteristicsDifferentialDiagnosis01 = LungParenchymaDiagnosisType.RheumaticNodules,
                    DensityType = LungParenchymaDensityType.Solid,
                    MarginType = MarginType.WellDefined
                },
                new LungParenchymaFindingPreset
                {
                    FindingType = LungParenchymaFindingType.Mass,
                    MainCharacteristicsDifferentialDiagnosis01 = LungParenchymaDiagnosisType.WegenersGranuloma,
                    DensityType = LungParenchymaDensityType.Solid,
                    MarginType = MarginType.IllDefined,
                    IsCavitation = true,
                    IsEccentricNecrosis = true
                },
                new LungParenchymaFindingPreset
                {
                    FindingType = LungParenchymaFindingType.Mass,
                    MainCharacteristicsDifferentialDiagnosis01 = LungParenchymaDiagnosisType.BronchiogenicCyst,
                    MarginType = MarginType.WellDefined,
                    HomogeneityType = HomogeneityType.Homogeneous
                },
                new LungParenchymaFindingPreset
                {
                    FindingType = LungParenchymaFindingType.Mass,
                    MainCharacteristicsDifferentialDiagnosis01 = LungParenchymaDiagnosisType.Metastasis,
                    DensityType = LungParenchymaDensityType.Solid,
                    MarginType = MarginType.WellDefined
                },
                new LungParenchymaFindingPreset
                {
                    FindingType = LungParenchymaFindingType.Mass,
                    MainCharacteristicsDifferentialDiagnosis01 = LungParenchymaDiagnosisType.PrimaryLungCancer,
                    DensityType = LungParenchymaDensityType.Solid,
                    MarginType = MarginType.IllDefined,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    IsPleuralFinger = true,
                    IsCoronaRadiataOrSpiculae = true,
                    IsAssociatedAtelectasis = true
                },
                new LungParenchymaFindingPreset
                {
                    FindingType = LungParenchymaFindingType.Mass,
                    MainCharacteristicsDifferentialDiagnosis01 = LungParenchymaDiagnosisType.Pneumonia,
                    MarginType = MarginType.IllDefined,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    IsAssociatedAtelectasis = true
                },
                new LungParenchymaFindingPreset
                {
                    FindingType = LungParenchymaFindingType.Mass,
                    MainCharacteristicsDifferentialDiagnosis01 = LungParenchymaDiagnosisType.Abscess,
                    MarginType = MarginType.IllDefined,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    IsCavitation = true,
                    IsEccentricNecrosis = true,
                    IsAssociatedAtelectasis = true
                },
                new LungParenchymaFindingPreset
                {
                    FindingType = LungParenchymaFindingType.Mass,
                    MainCharacteristicsDifferentialDiagnosis01 = LungParenchymaDiagnosisType.Sequester,
                    DensityType = LungParenchymaDensityType.Solid,
                    MarginType = MarginType.WellDefined,
                    HomogeneityType = HomogeneityType.Heterogeneous
                },
                new LungParenchymaFindingPreset
                {
                    FindingType = LungParenchymaFindingType.Mass,
                    MainCharacteristicsDifferentialDiagnosis01 = LungParenchymaDiagnosisType.PulmonaryInfarction,
                    LocalizationDetailsType = LocalizationDetailsType.PleuralBased,
                    DensityType = LungParenchymaDensityType.Subsolid,
                    SubsolidType = SubsolidType.PartiallySolid,
                    MarginType = MarginType.IllDefined,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    IsAssociatedAtelectasis = true
                },
                new LungParenchymaFindingPreset
                {
                    FindingType = LungParenchymaFindingType.Mass,
                    MainCharacteristicsDifferentialDiagnosis01 = LungParenchymaDiagnosisType.AVMalformation,
                    DensityType = LungParenchymaDensityType.Solid,
                    MarginType = MarginType.WellDefined,
                    HomogeneityType = HomogeneityType.Homogeneous
                },
                new LungParenchymaFindingPreset
                {
                    FindingType = LungParenchymaFindingType.Mass,
                    MainCharacteristicsDifferentialDiagnosis01 = LungParenchymaDiagnosisType.Bronchocele,
                    DensityType = LungParenchymaDensityType.Solid,
                    MarginType = MarginType.WellDefined,
                    HomogeneityType = HomogeneityType.Homogeneous
                },

                #endregion

                #region Consolidation
                new LungParenchymaFindingPreset
                {
                    FindingType = LungParenchymaFindingType.Consolidation,
                    MainCharacteristicsDifferentialDiagnosis01 = LungParenchymaDiagnosisType.COVID19Pneumonia,
                    ConsolidationLocalizationType = ConsolidationLocalizationType.Lobar,
                    MainCharacteristicsLungsFlapsLocation = LungsFlapsLocations.RightML | LungsFlapsLocations.RightUL | LungsFlapsLocations.LeftUL,
                    IsGroundGlassOpacity = true,
                    GroundGlassOpacityType = GroundGlassOpacityType.Multiple,
                    LocalizationAxialType = LocalizationAxialType.Peripheral,
                    MorphologyType = MorphologyType.Spotted,
                    IsRoundedShape = true
                },
                new LungParenchymaFindingPreset
                {
                    FindingType = LungParenchymaFindingType.Consolidation,
                    MainCharacteristicsDifferentialDiagnosis01 = LungParenchymaDiagnosisType.Pneumonia,
                    ConsolidationLocalizationType = ConsolidationLocalizationType.Segmental,
                    IsGroundGlassOpacity = true,
                    GroundGlassOpacityType = GroundGlassOpacityType.Multiple,
                    IsPositiveBronchopneumogram = true,
                    IsDarkBronchusSign = true,
                    MarginType = MarginType.IllDefined,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    IsAssociatedAtelectasis = true,
                    IsAccompanyingEffusion = true
                },
                new LungParenchymaFindingPreset
                {
                    FindingType = LungParenchymaFindingType.Consolidation,
                    MainCharacteristicsDifferentialDiagnosis01 = LungParenchymaDiagnosisType.VirusPneumonia,
                    IsGroundGlassOpacity = true,
                    MarginType = MarginType.IllDefined,
                    HomogeneityType = HomogeneityType.Heterogeneous
                },
                new LungParenchymaFindingPreset
                {
                    FindingType = LungParenchymaFindingType.Consolidation,
                    MainCharacteristicsDifferentialDiagnosis01 = LungParenchymaDiagnosisType.OrganizingPneumonia,
                    IsPositiveBronchopneumogram = true,
                    LocalizationAxialType = LocalizationAxialType.Peripheral,
                    MorphologyType = MorphologyType.Spotted,
                    IsConfluent = true,
                    IsPeribronchovascular = true,
                    MarginType = MarginType.IllDefined,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    IsAssociatedAtelectasis = true,
                    IsReversedHaloSign = true
                },
                new LungParenchymaFindingPreset
                {
                    FindingType = LungParenchymaFindingType.Consolidation,
                    MainCharacteristicsDifferentialDiagnosis01 = LungParenchymaDiagnosisType.Bleeding,
                    IsGroundGlassOpacity = true,
                    MorphologyType = MorphologyType.Spotted,
                    MarginType = MarginType.IllDefined,
                    HomogeneityType = HomogeneityType.Heterogeneous
                },
                new LungParenchymaFindingPreset
                {
                    FindingType = LungParenchymaFindingType.Consolidation,
                    MainCharacteristicsDifferentialDiagnosis01 = LungParenchymaDiagnosisType.Edema,
                    IsGroundGlassOpacity = true,
                    GroundGlassOpacityType = GroundGlassOpacityType.Multiple,
                    IsPositiveBronchopneumogram = true,
                    IsDarkBronchusSign = true,
                    LocalizationAxialType = LocalizationAxialType.Central,
                    MorphologyType = MorphologyType.Extensive,
                    MarginType = MarginType.IllDefined,
                    HomogeneityType = HomogeneityType.Homogeneous,
                    IsAssociatedAtelectasis = true,
                    IsAccompanyingEffusion = true
                },
                new LungParenchymaFindingPreset
                {
                    FindingType = LungParenchymaFindingType.Consolidation,
                    MainCharacteristicsDifferentialDiagnosis01 = LungParenchymaDiagnosisType.MycetomaAspergilloma,
                    MarginType = MarginType.IllDefined,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    IsCavitation = true,
                    IsLuftsichelSign = true,
                    IsHaloSign = true
                },
                new LungParenchymaFindingPreset
                {
                    FindingType = LungParenchymaFindingType.Consolidation,
                    MainCharacteristicsDifferentialDiagnosis01 = LungParenchymaDiagnosisType.WegenersGranulomatosis,
                    IsGroundGlassOpacity = true,
                    GroundGlassOpacityType = GroundGlassOpacityType.Multiple,
                    IsPositiveBronchopneumogram = true,
                    MorphologyType = MorphologyType.Spotted,
                    IsGeographicAppearance = true,
                    IsCrazyPavingPattern = true,
                    IsInterlobularSeptalThickening = true,
                    IsPeribronchovascular = true,
                    MarginType = MarginType.IllDefined,
                    IsEccentricNecrosis = true,
                    IsCavitation = true,
                    IsHemorrhage = true
                },
                new LungParenchymaFindingPreset
                {
                    FindingType = LungParenchymaFindingType.Consolidation,
                    MainCharacteristicsDifferentialDiagnosis01 = LungParenchymaDiagnosisType.Tuberculosis,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    IsEccentricNecrosis = true,
                    IsCavitation = true
                }
                #endregion
            };
        }
    }
}
