using System.Collections.Generic;
using RadioReport.ThoraxCT.Domain.Enums;
using RadioReport.ThoraxCT.Domain.Models;

namespace RadioReport.ThoraxCT.Repo.Seeds
{
    internal static class MediastinumFindingPresetSeed
    {
        internal static List<MediastinumFindingPreset> GetPreconfiguredPresets()
        {
            return new List<MediastinumFindingPreset>
            {
                new MediastinumFindingPreset
                {
                    FindingType = MediastinumFindingType.Mass,
                    MainCharacteristicsDifferentialDiagnosis01 = MediastinumDiagnosisType.ThymicHyperplasia,
                    IsUpperMediastinum = true,
                    LimitationType = MediastinumLimitationType.WellDefined,
                    DensityType = DensityType.SoftTissueTight,
                    GrowthPatternsType = MediastinumGrowthPatternsType.ContinuationOfTheOrthotopicThyroidGland,
                    ContrastEnhancementType = ContrastEnhancementType.Low,
                    NoCMEnhancementHomogeneityType = HomogeneityType.Homogeneous
                },
                new MediastinumFindingPreset
                {
                    FindingType = MediastinumFindingType.Mass,
                    MainCharacteristicsDifferentialDiagnosis01 = MediastinumDiagnosisType.Lipoma,
                    IsLowerMediastinum = true,
                    IsAnteriorMediastinum = true,
                    LimitationType = MediastinumLimitationType.WellDefined,
                    HomogeneityType = HomogeneityType.Homogeneous,
                    DensityType = DensityType.FatEquivalent,
                    IsFat = true
                },
                new MediastinumFindingPreset
                {
                    FindingType = MediastinumFindingType.Mass,
                    MainCharacteristicsDifferentialDiagnosis01 = MediastinumDiagnosisType.Thymolipoma,
                    IsUpperMediastinum = true,
                    LimitationType = MediastinumLimitationType.WellDefined,
                    IsFat = true,
                    IsCapsule = true,
                    IsFibrousSepta = true
                },
                new MediastinumFindingPreset
                {
                    FindingType = MediastinumFindingType.Mass,
                    MainCharacteristicsDifferentialDiagnosis01 = MediastinumDiagnosisType.Thymoma,
                    IsUpperMediastinum = true,
                    LimitationType = MediastinumLimitationType.WellDefined,
                    DensityType = DensityType.SoftTissueTight,
                    GrowthPatternsType = MediastinumGrowthPatternsType.ContinuationOfTheOrthotopicThyroidGland,
                    ContrastEnhancementType = ContrastEnhancementType.Low,
                    NoCMEnhancementHomogeneityType = HomogeneityType.Homogeneous
                },
                new MediastinumFindingPreset
                {
                    FindingType = MediastinumFindingType.Mass,
                    MainCharacteristicsDifferentialDiagnosis01 = MediastinumDiagnosisType.Goiter,
                    IsUpperMediastinum = true,
                    LimitationType = MediastinumLimitationType.WellDefined,
                    DensityType = DensityType.SoftTissueTight,
                    IsCysts = true,
                    IsCalcification = true,
                    CalcificationType = MediastinumCalcificationType.Diffuse,
                    GrowthPatternsType = MediastinumGrowthPatternsType.ContinuationOfTheOrthotopicThyroidGland
                },
                new MediastinumFindingPreset
                {
                    FindingType = MediastinumFindingType.Mass,
                    MainCharacteristicsDifferentialDiagnosis01 = MediastinumDiagnosisType.RetrosternalGoiter,
                    IsUpperMediastinum = true,
                    LimitationType = MediastinumLimitationType.WellDefined,
                    DensityType = DensityType.SoftTissueTight,
                    IsCysts = true,
                    IsCalcification = true,
                    CalcificationType = MediastinumCalcificationType.Diffuse,
                    GrowthPatternsType = MediastinumGrowthPatternsType.ContinuationOfTheOrthotopicThyroidGland
                },
                new MediastinumFindingPreset
                {
                    FindingType = MediastinumFindingType.Mass,
                    MainCharacteristicsDifferentialDiagnosis01 = MediastinumDiagnosisType.BenignDermoidCyst,
                    IsLowerMediastinum = true,
                    IsAnteriorMediastinum = true,
                    LimitationType = MediastinumLimitationType.WellDefined,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    IsFat = true,
                    IsCysts = true,
                    IsCalcification = true,
                    IsCapsule = true,
                    IsLiquidFatMirror = true,
                    IsToothBoneSystem = true
                },
                new MediastinumFindingPreset
                {
                    FindingType = MediastinumFindingType.Mass,
                    MainCharacteristicsDifferentialDiagnosis01 = MediastinumDiagnosisType.BenignTeratoma,
                    IsLowerMediastinum = true,
                    IsAnteriorMediastinum = true,
                    LimitationType = MediastinumLimitationType.WellDefined,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    DensityType = DensityType.SoftTissueTight,
                    IsFat = true,
                    IsCysts = true,
                    IsCalcification = true,
                    IsCapsule = true,
                    IsLiquidFatMirror = true,
                    IsToothBoneSystem = true
                },
                new MediastinumFindingPreset
                {
                    FindingType = MediastinumFindingType.Mass,
                    MainCharacteristicsDifferentialDiagnosis01 = MediastinumDiagnosisType.ThymicCyst,
                    IsUpperMediastinum = true,
                    LimitationType = MediastinumLimitationType.WellDefined,
                    DensityType = DensityType.LiquidEquivalent,
                    GrowthPatternsType = MediastinumGrowthPatternsType.ContinuationOfTheOrthotopicThyroidGland,
                    ContrastEnhancementType = ContrastEnhancementType.No
                },
                new MediastinumFindingPreset
                {
                    FindingType = MediastinumFindingType.Mass,
                    MainCharacteristicsDifferentialDiagnosis01 = MediastinumDiagnosisType.BronchiogenicCyst,
                    LimitationType = MediastinumLimitationType.WellDefined,
                    DensityType = DensityType.LiquidEquivalent,
                    ContrastEnhancementType = ContrastEnhancementType.No
                },
                new MediastinumFindingPreset
                {
                    FindingType = MediastinumFindingType.Mass,
                    MainCharacteristicsDifferentialDiagnosis01 = MediastinumDiagnosisType.PericardialCyst,
                    LimitationType = MediastinumLimitationType.WellDefined,
                    DensityType = DensityType.LiquidEquivalent,
                    ContrastEnhancementType = ContrastEnhancementType.No
                },
                new MediastinumFindingPreset
                {
                    FindingType = MediastinumFindingType.Mass,
                    MainCharacteristicsDifferentialDiagnosis01 = MediastinumDiagnosisType.NeurogenicCyst,
                    IsLowerMediastinum = true,
                    IsPosteriorMediastinum = true,
                    LimitationType = MediastinumLimitationType.WellDefined,
                    DensityType = DensityType.LiquidEquivalent,
                    ContrastEnhancementType = ContrastEnhancementType.No
                },
                new MediastinumFindingPreset
                {
                    FindingType = MediastinumFindingType.Mass,
                    MainCharacteristicsDifferentialDiagnosis01 = MediastinumDiagnosisType.Ganglioneuroma,
                    ContrastEnhancementType = ContrastEnhancementType.Powerful
                },
                new MediastinumFindingPreset
                {
                    FindingType = MediastinumFindingType.Mass,
                    MainCharacteristicsDifferentialDiagnosis01 = MediastinumDiagnosisType.Neuroma,
                    IsLowerMediastinum = true,
                    IsPosteriorMediastinum = true,
                    ContrastEnhancementType = ContrastEnhancementType.Low
                },
                new MediastinumFindingPreset
                {
                    FindingType = MediastinumFindingType.Mass,
                    MainCharacteristicsDifferentialDiagnosis01 = MediastinumDiagnosisType.Paraganglioma,
                    IsLowerMediastinum = true,
                    IsPosteriorMediastinum = true,
                    ContrastEnhancementType = ContrastEnhancementType.Powerful
                },
                new MediastinumFindingPreset
                {
                    FindingType = MediastinumFindingType.Mass,
                    MainCharacteristicsDifferentialDiagnosis01 = MediastinumDiagnosisType.ThymicCarcinoma,
                    IsUpperMediastinum = true,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    DensityType = DensityType.SoftTissueTight,
                    IsCysts = true,
                    IsCalcification = true,
                    IsNecroses = true
                },
                new MediastinumFindingPreset
                {
                    FindingType = MediastinumFindingType.Mass,
                    MainCharacteristicsDifferentialDiagnosis01 = MediastinumDiagnosisType.Neuroblastoma,
                    ContrastEnhancementType = ContrastEnhancementType.Powerful
                },
                new MediastinumFindingPreset
                {
                    FindingType = MediastinumFindingType.Mass,
                    MainCharacteristicsDifferentialDiagnosis01 = MediastinumDiagnosisType.MalignantGermCellTumorNotFurtherSpecified,
                    IsLowerMediastinum = true,
                    IsAnteriorMediastinum = true,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    DensityType = DensityType.SoftTissueTight,
                    IsFat = true,
                    IsCysts = true,
                    IsCalcification = true,
                    IsCapsule = true,
                    IsLiquidFatMirror = true,
                    IsToothBoneSystem = true
                },
                new MediastinumFindingPreset
                {
                    FindingType = MediastinumFindingType.Mass,
                    MainCharacteristicsDifferentialDiagnosis01 = MediastinumDiagnosisType.MalignantDermoidCyst,
                    IsLowerMediastinum = true,
                    IsAnteriorMediastinum = true,
                    LimitationType = MediastinumLimitationType.WellDefined,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    IsFat = true,
                    IsCysts = true,
                    IsCalcification = true,
                    IsCapsule = true,
                    IsLiquidFatMirror = true,
                    IsToothBoneSystem = true
                },
                new MediastinumFindingPreset
                {
                    FindingType = MediastinumFindingType.Mass,
                    MainCharacteristicsDifferentialDiagnosis01 = MediastinumDiagnosisType.MalignantTeratoma,
                    IsLowerMediastinum = true,
                    IsAnteriorMediastinum = true,
                    LimitationType = MediastinumLimitationType.WellDefined,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    DensityType = DensityType.SoftTissueTight,
                    IsFat = true,
                    IsCysts = true,
                    IsCalcification = true,
                    IsCapsule = true,
                    IsLiquidFatMirror = true,
                    IsToothBoneSystem = true
                },
                new MediastinumFindingPreset
                {
                    FindingType = MediastinumFindingType.Mass,
                    MainCharacteristicsDifferentialDiagnosis01 = MediastinumDiagnosisType.LymphomaNotFurtherSpecified,
                    IsLowerMediastinum = true,
                    IsAnteriorMediastinum = true,
                    IsMiddleMediastinum = true,
                    LimitationType = MediastinumLimitationType.WellDefined,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    DensityType = DensityType.SoftTissueTight
                },
                new MediastinumFindingPreset
                {
                    FindingType = MediastinumFindingType.Mass,
                    MainCharacteristicsDifferentialDiagnosis01 = MediastinumDiagnosisType.MHodgkin,
                    IsLowerMediastinum = true,
                    IsAnteriorMediastinum = true,
                    IsMiddleMediastinum = true,
                    LimitationType = MediastinumLimitationType.WellDefined,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    DensityType = DensityType.SoftTissueTight
                },
                new MediastinumFindingPreset
                {
                    FindingType = MediastinumFindingType.Mass,
                    MainCharacteristicsDifferentialDiagnosis01 = MediastinumDiagnosisType.NonHodgkin,
                    IsLowerMediastinum = true,
                    IsAnteriorMediastinum = true,
                    IsMiddleMediastinum = true,
                    LimitationType = MediastinumLimitationType.WellDefined,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    DensityType = DensityType.SoftTissueTight
                },
                new MediastinumFindingPreset
                {
                    FindingType = MediastinumFindingType.Mass,
                    MainCharacteristicsDifferentialDiagnosis01 = MediastinumDiagnosisType.LiposarcomaOrBlastoma,
                    IsLowerMediastinum = true,
                    IsPosteriorMediastinum = true,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    IsFat = true,
                    ContrastEnhancementType = ContrastEnhancementType.Powerful,
                    NoCMEnhancementHomogeneityType = HomogeneityType.Heterogeneous
                }
            };
        }
    }
}
