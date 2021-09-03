using System.Collections.Generic;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.ElbowMRT.Domain.Enums;
using RadioReport.ElbowMRT.Domain.Models;

namespace RadioReport.ElbowMRT.Repo.Seeds
{
    internal static class SoftTissueFindingPresetSeed
    {
        internal static List<SoftTissueFindingPreset> GetPreconfiguredPresets()
        {
            return new List<SoftTissueFindingPreset>
            {
                new SoftTissueFindingPreset
                {
                    FindingType = SoftTissueFindingType.SoftTissueTumor,
                    MainFeaturesDifferentialDiagnosisType = SoftTissueDifferentialDiagnosisType.GanglionCyst,
                    T1w = SignalType.Hypo,
                    T2w = SignalType.Hyper
                },
                new SoftTissueFindingPreset
                {
                    FindingType = SoftTissueFindingType.SoftTissueTumor,
                    MainFeaturesDifferentialDiagnosisType = SoftTissueDifferentialDiagnosisType.Lipoma,
                    DemarcationType = DemarcationType.WellDefined,
                    MainHomogeneityType = HomogeneityType.Homogeneous,
                    IsFat = true
                },
                new SoftTissueFindingPreset
                {
                    FindingType = SoftTissueFindingType.SoftTissueTumor,
                    MainFeaturesDifferentialDiagnosisType = SoftTissueDifferentialDiagnosisType.Hemangioma,
                    T2w = SignalType.Hyper,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Strong,
                    CAEnhancementHomogeneityType = HomogeneityType.Homogeneous,
                    IsCalcification = true
                },
                new SoftTissueFindingPreset
                {
                    FindingType = SoftTissueFindingType.SoftTissueTumor,
                    MainFeaturesDifferentialDiagnosisType = SoftTissueDifferentialDiagnosisType.Neuroma,
                    T2w = SignalType.Hyper
                },
                new SoftTissueFindingPreset
                {
                    FindingType = SoftTissueFindingType.SoftTissueTumor,
                    MainFeaturesDifferentialDiagnosisType = SoftTissueDifferentialDiagnosisType.Schwannoma,
                    DemarcationType = DemarcationType.WellDefined,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Strong,
                    IsCysts = true
                },
                new SoftTissueFindingPreset
                {
                    FindingType = SoftTissueFindingType.SoftTissueTumor,
                    MainFeaturesDifferentialDiagnosisType = SoftTissueDifferentialDiagnosisType.Neurofibroma,
                    DemarcationType = DemarcationType.WellDefined,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Strong,
                    CAEnhancementHomogeneityType = HomogeneityType.Heterogeneous
                },
                new SoftTissueFindingPreset
                {
                    FindingType = SoftTissueFindingType.SoftTissueTumor,
                    MainFeaturesDifferentialDiagnosisType = SoftTissueDifferentialDiagnosisType.EpidermalCyst,
                    DemarcationType = DemarcationType.WellDefined,
                    T1w = SignalType.Hyper,
                    T2w = SignalType.Hypo,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Mild,
                    CAEnhancementHomogeneityType = HomogeneityType.Heterogeneous,
                    HeterogenousType = HeterogenousType.Peripheral
                },
                new SoftTissueFindingPreset
                {
                    FindingType = SoftTissueFindingType.SoftTissueTumor,
                    MainFeaturesDifferentialDiagnosisType = SoftTissueDifferentialDiagnosisType.TendonSheathFibroma,
                    T1w = SignalType.Hypo,
                    T2w = SignalType.Hypo,
                    MainHomogeneityType = HomogeneityType.Heterogeneous
                },
                new SoftTissueFindingPreset
                {
                    FindingType = SoftTissueFindingType.SoftTissueTumor,
                    MainFeaturesDifferentialDiagnosisType = SoftTissueDifferentialDiagnosisType.TenosynovialGiantCellTumor,
                    T1w = SignalType.Hypo,
                    T2w = SignalType.Hypo,
                    IsPressureErosionBonyErosion = true
                },
                new SoftTissueFindingPreset
                {
                    FindingType = SoftTissueFindingType.SoftTissueTumor,
                    MainFeaturesDifferentialDiagnosisType = SoftTissueDifferentialDiagnosisType.Pilomatrixoma,
                    IsSubcutaneous = true,
                    IsCalcification = true,
                    IsCapsule = true
                },
                new SoftTissueFindingPreset
                {
                    FindingType = SoftTissueFindingType.SoftTissueTumor,
                    MainFeaturesDifferentialDiagnosisType = SoftTissueDifferentialDiagnosisType.FibrolipomatousHamartoma,
                    IsAlongMedianNerve = true,
                    IsFat = true,
                    IsSpaghettiLikeAppearanceOfTheNerve = true,
                    IsDistractedNerveFasciclesAxialPomegranateSign = true,
                    IsMacrodactyly = true
                },
                new SoftTissueFindingPreset
                {
                    FindingType = SoftTissueFindingType.SoftTissueTumor,
                    MainFeaturesDifferentialDiagnosisType = SoftTissueDifferentialDiagnosisType.SoftTissueSarcoma,
                    MainHomogeneityType = HomogeneityType.Heterogeneous,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Strong,
                    CAEnhancementHomogeneityType = HomogeneityType.Heterogeneous
                },
                new SoftTissueFindingPreset
                {
                    FindingType = SoftTissueFindingType.SoftTissueTumor,
                    MainFeaturesDifferentialDiagnosisType = SoftTissueDifferentialDiagnosisType.SquamousCellCarcinoma,
                    MainHomogeneityType = HomogeneityType.Heterogeneous
                },
                new SoftTissueFindingPreset
                {
                    FindingType = SoftTissueFindingType.SoftTissueTumor,
                    MainFeaturesDifferentialDiagnosisType = SoftTissueDifferentialDiagnosisType.MPNST,
                    MainHomogeneityType = HomogeneityType.Heterogeneous
                },
                new SoftTissueFindingPreset
                {
                    FindingType = SoftTissueFindingType.SoftTissueTumor,
                    MainFeaturesDifferentialDiagnosisType = SoftTissueDifferentialDiagnosisType.MalignantMelanoma,
                    MainHomogeneityType = HomogeneityType.Heterogeneous
                }
            };
        }
    }
}
