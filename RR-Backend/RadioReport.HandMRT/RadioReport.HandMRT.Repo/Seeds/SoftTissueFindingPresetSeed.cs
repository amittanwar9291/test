using System.Collections.Generic;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.HandMRT.Domain.Enums;
using RadioReport.HandMRT.Domain.Enums.SoftTissue;
using RadioReport.HandMRT.Domain.Models;

namespace RadioReport.HandMRT.Repo.Seeds
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
                    SignalTypeT1w = SignalType.Hypo,
                    SignalTypeT2w = SignalType.Hyper
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
                    SignalTypeT2w = SignalType.Hyper,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
                    CMHomogeneityType = HomogeneityType.Homogeneous
                },
                new SoftTissueFindingPreset
                {
                    FindingType = SoftTissueFindingType.SoftTissueMass,
                    DifferentialDiagnosis = DifferentialDiagnosisType.GlomusTumor,
                    LocalizationType = LocalizationType.Dorsal,
                    IsPressureCorrosionBone = true,
                    SignalTypeT1w = SignalType.Hypo,
                    SignalTypeT2w = SignalType.Hyper,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
                    CMHomogeneityType = HomogeneityType.Homogeneous
                },
                new SoftTissueFindingPreset
                {
                    FindingType = SoftTissueFindingType.SoftTissueMass,
                    DifferentialDiagnosis = DifferentialDiagnosisType.Neuroma,
                    SignalTypeT2w = SignalType.Hyper
                },
                new SoftTissueFindingPreset
                {
                    FindingType = SoftTissueFindingType.SoftTissueMass,
                    DifferentialDiagnosis = DifferentialDiagnosisType.SchwannomaNeurinoma,
                    MarginType = MarginType.Sharp,
                    IsCysts = true,
                    ContrastEnhancementType = ContrastEnhancementType.Strong
                },
                new SoftTissueFindingPreset
                {
                    FindingType = SoftTissueFindingType.SoftTissueMass,
                    DifferentialDiagnosis = DifferentialDiagnosisType.Neurofibroma,
                    MarginType = MarginType.Sharp,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
                    CMHomogeneityType = HomogeneityType.Homogeneous
                },
                new SoftTissueFindingPreset
                {
                    FindingType = SoftTissueFindingType.SoftTissueMass,
                    DifferentialDiagnosis = DifferentialDiagnosisType.EpidermalCyst,
                    MarginType = MarginType.Sharp,
                    SignalTypeT1w = SignalType.Hyper,
                    SignalTypeT2w = SignalType.Hypo,
                    ContrastEnhancementType = ContrastEnhancementType.Weak,
                    CMHomogeneityType = HomogeneityType.Heterogeneous,
                    ContrastEnhancementDistributionType = ContrastEnhancementDistributionType.Peripheral
                },
                new SoftTissueFindingPreset
                {
                    FindingType = SoftTissueFindingType.SoftTissueMass,
                    DifferentialDiagnosis = DifferentialDiagnosisType.CarpalTunnelFibroma,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    SignalTypeT1w = SignalType.Hypo,
                    SignalTypeT2w = SignalType.Hypo
                },
                new SoftTissueFindingPreset
                {
                    FindingType = SoftTissueFindingType.SoftTissueMass,
                    DifferentialDiagnosis = DifferentialDiagnosisType.TenosynovialGiantCellTumor,
                    IsPressureCorrosionBone = true,
                    SignalTypeT1w = SignalType.Hypo,
                    SignalTypeT2w = SignalType.Hypo
                },
                new SoftTissueFindingPreset
                {
                    FindingType = SoftTissueFindingType.SoftTissueMass,
                    DifferentialDiagnosis = DifferentialDiagnosisType.Pilomatrixoma,
                    IsCalcification = true,
                    IsCapsule = true,
                    IsSubcutaneous = true
                },
                new SoftTissueFindingPreset
                {
                    FindingType = SoftTissueFindingType.SoftTissueMass,
                    DifferentialDiagnosis = DifferentialDiagnosisType.FibrolipomatousHamartoma,
                    IsFat = true,
                    IsSpaghettiLikeAppearanceOfTheNerve = true,
                    IsDisplacedNerveFasciclesAxialPomegranateSign = true,
                    IsAlongMedianNerve = true,
                    IsMacrodactyly = true
                },
                new SoftTissueFindingPreset
                {
                    FindingType = SoftTissueFindingType.SoftTissueMass,
                    DifferentialDiagnosis = DifferentialDiagnosisType.SoftTissueSarcoma,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
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
                },
            };
        }
    }
}
