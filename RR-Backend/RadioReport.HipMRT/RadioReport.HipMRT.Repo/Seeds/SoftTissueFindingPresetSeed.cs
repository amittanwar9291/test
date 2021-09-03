using System.Collections.Generic;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.HipMRT.Domain.Enums.SoftTissue;
using RadioReport.HipMRT.Domain.Models;

namespace RadioReport.HipMRT.Repo.Seeds
{
    internal static class SoftTissueFindingPresetSeed
    {
        internal static List<SoftTissueFindingPreset> GetPreconfiguredPresets()
        {
            return new List<SoftTissueFindingPreset>
            {
                new SoftTissueFindingPreset
                {
                    FindingType = SoftTissueFindingType.SoftTissueMass,
                    DifferentialDiagnosis = DifferentialDiagnosisType.GanglionCyst,
                    T1wSignal = SignalType.Hypo,
                    T2wSignal = SignalType.Hyper
                },
                new SoftTissueFindingPreset
                {
                    FindingType = SoftTissueFindingType.SoftTissueMass,
                    DifferentialDiagnosis = DifferentialDiagnosisType.Lipoma,
                    MarginType = MarginType.Sharp,
                    HomogeneityType = HomogeneityType.Homogeneous,
                    IsFat = true
                },
                new SoftTissueFindingPreset
                {
                    FindingType = SoftTissueFindingType.SoftTissueMass,
                    DifferentialDiagnosis = DifferentialDiagnosisType.Hemangioma,
                    IsCalcification = true,
                    T2wSignal = SignalType.Hyper,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Pronounced,
                    CMHomogeneityType = HomogeneityType.Homogeneous
                },
                new SoftTissueFindingPreset
                {
                    FindingType = SoftTissueFindingType.SoftTissueMass,
                    DifferentialDiagnosis = DifferentialDiagnosisType.Neuroma,
                    T2wSignal = SignalType.Hyper
                },
                new SoftTissueFindingPreset
                {
                    FindingType = SoftTissueFindingType.SoftTissueMass,
                    DifferentialDiagnosis = DifferentialDiagnosisType.SchwannomaNeurinoma,
                    MarginType = MarginType.Sharp,
                    IsCysts = true,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Pronounced
                },
                new SoftTissueFindingPreset
                {
                    FindingType = SoftTissueFindingType.SoftTissueMass,
                    DifferentialDiagnosis = DifferentialDiagnosisType.Neurofibroma,
                    MarginType = MarginType.Sharp,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Pronounced,
                    CMHomogeneityType = HomogeneityType.Heterogeneous
                },
                new SoftTissueFindingPreset
                {
                    FindingType = SoftTissueFindingType.SoftTissueMass,
                    DifferentialDiagnosis = DifferentialDiagnosisType.EpidermalCyst,
                    MarginType = MarginType.Sharp,
                    T1wSignal = SignalType.Hyper,
                    T2wSignal = SignalType.Hypo,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Low,
                    CMHomogeneityType = HomogeneityType.Heterogeneous,
                    ContrastEnhancementDistributionType = ContrastEnhancementDistributionType.Peripheral
                },
                new SoftTissueFindingPreset
                {
                    FindingType = SoftTissueFindingType.SoftTissueMass,
                    DifferentialDiagnosis = DifferentialDiagnosisType.TendonSheathFibroma,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    T1wSignal = SignalType.Hypo,
                    T2wSignal = SignalType.Hypo
                },
                new SoftTissueFindingPreset
                {
                    FindingType = SoftTissueFindingType.SoftTissueMass,
                    DifferentialDiagnosis = DifferentialDiagnosisType.TenosynovialGiantCellTumor,
                    IsBoneErosion = true,
                    T1wSignal = SignalType.Hypo,
                    T2wSignal = SignalType.Hypo
                },
                new SoftTissueFindingPreset
                {
                    FindingType = SoftTissueFindingType.SoftTissueMass,
                    DifferentialDiagnosis = DifferentialDiagnosisType.Pilomatrixoma,
                    IsCalcification = true,
                    IsCapsule = true
                },
                new SoftTissueFindingPreset
                {
                    FindingType = SoftTissueFindingType.SoftTissueMass,
                    DifferentialDiagnosis = DifferentialDiagnosisType.SoftTissueSarcoma,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Pronounced,
                    CMHomogeneityType = HomogeneityType.Heterogeneous
                },
                new SoftTissueFindingPreset
                {
                    FindingType = SoftTissueFindingType.SoftTissueMass,
                    DifferentialDiagnosis = DifferentialDiagnosisType.SquamousCellCarcinoma,
                    HomogeneityType = HomogeneityType.Heterogeneous
                },
                new SoftTissueFindingPreset
                {
                    FindingType = SoftTissueFindingType.SoftTissueMass,
                    DifferentialDiagnosis = DifferentialDiagnosisType.MalignantPeripheralNerveSheathTumorMpnst,
                    HomogeneityType = HomogeneityType.Heterogeneous
                },
                new SoftTissueFindingPreset
                {
                    FindingType = SoftTissueFindingType.SoftTissueMass,
                    DifferentialDiagnosis = DifferentialDiagnosisType.MalignantMelanoma,
                    HomogeneityType = HomogeneityType.Heterogeneous
                }
            };
        }
    }
}
