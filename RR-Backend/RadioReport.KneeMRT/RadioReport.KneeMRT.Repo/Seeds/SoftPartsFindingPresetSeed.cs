using System;
using System.Collections.Generic;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.KneeMRT.Domain.Enums;
using RadioReport.KneeMRT.Domain.Models;
using RadioReport.KneeMRT.SoftParts.Domain.Enums;

namespace RadioReport.KneeMRT.Repo.Seeds
{
    internal static class SoftPartsFindingPresetSeed
    {
        internal static List<SoftPartsFindingPreset> GetPreconfiguredPresets()
        {
            return new List<SoftPartsFindingPreset>
            {
                new SoftPartsFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SoftPartsFindingType.SynoviaFocal,
                    DifferentialDiagnosis = SoftPartsDiagnosisType.SynovialHaemangioma,
                    T1w = SignalType.Hypo,
                    T2w = SignalType.Hyper,
                    SynoviaCMEnhancementType = SynoviaCMEnhancementType.Weak,
                    SynoviaShapeType = SynoviaShapeType.Multilobulated,
                    IsHaemarthros = true
                },
                new SoftPartsFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SoftPartsFindingType.SynoviaFocal,
                    DifferentialDiagnosis = SoftPartsDiagnosisType.SynovialChondromatosis,
                    T2w = SignalType.Hyper,
                    SynoviaCMEnhancementType = SynoviaCMEnhancementType.No,
                    SynoviaShapeType = SynoviaShapeType.SynovialNodulus,
                    IsSynovialNodulusGreaterThan1Lesions = true,
                    IsLooseBody = true,
                    IsLooseBodyGreaterThan1Lesions = true
                },
                new SoftPartsFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SoftPartsFindingType.SynoviaFocal,
                    DifferentialDiagnosis = SoftPartsDiagnosisType.VillonodularSynovitis,
                    T1w = SignalType.Hypo,
                    T2w = SignalType.Hypo,
                    IsBloomingArtifact = true,
                    IsHaemarthros = true,
                    IsBonyErosions = true,
                    SynoviaCMEnhancementType = SynoviaCMEnhancementType.Weak,
                    SynoviaShapeType = SynoviaShapeType.SynovialNodulus,
                    IsSynovialNodulusGreaterThan1Lesions = true
                },
                new SoftPartsFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SoftPartsFindingType.SynoviaFocal,
                    DifferentialDiagnosis = SoftPartsDiagnosisType.SynovialSarcoma,
                    T1w = SignalType.Iso,
                    T2w = SignalType.Hyper,
                    SynoviaCMEnhancementType = SynoviaCMEnhancementType.Strong,
                    SynoviaShapeType = SynoviaShapeType.Multilobulated,
                    IsNecrosis = true
                },
                new SoftPartsFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SoftPartsFindingType.SynoviaFocal,
                    DifferentialDiagnosis = SoftPartsDiagnosisType.HemochromatoticArthropathy,
                    T1w = SignalType.Hypo,
                    T2w = SignalType.Hypo,
                    SynoviaCMEnhancementType = SynoviaCMEnhancementType.Weak,
                    SynoviaShapeType = SynoviaShapeType.SynovialProliferations,
                    IsBloomingArtifact = true,
                    IsHaemarthros = true,
                    IsArticularEffusion = true
                },
                new SoftPartsFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SoftPartsFindingType.SynoviaFocal,
                    DifferentialDiagnosis = SoftPartsDiagnosisType.TophoseGout,
                    T1w = SignalType.Iso,
                    T2w = SignalType.Hyper,
                    SynoviaCMEnhancementType = SynoviaCMEnhancementType.Strong,
                    IsArticularEffusion = true
                },
                new SoftPartsFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SoftPartsFindingType.SoftTissueTumor,
                    DifferentialDiagnosis = SoftPartsDiagnosisType.GanglionCyst,
                    T1w = SignalType.Hypo,
                    T2w = SignalType.Hyper
                },
                new SoftPartsFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SoftPartsFindingType.SoftTissueTumor,
                    DifferentialDiagnosis = SoftPartsDiagnosisType.Lipoma,
                    DemarcationType = DemarcationType.Sharp,
                    TissueTumorHomogeneityType = HomogeneityType.Homogeneous,
                    IsGrease = true,
                    T2w = SignalType.Hyper,
                    TissueTumorCMEnhancementType = CMEnchancementType.Powerful,
                    QuantitativeType = HomogeneityType.Homogeneous
                },
                new SoftPartsFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SoftPartsFindingType.SoftTissueTumor,
                    DifferentialDiagnosis = SoftPartsDiagnosisType.Hemangioma,
                    IsCalcification = true
                },
                new SoftPartsFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SoftPartsFindingType.SoftTissueTumor,
                    DifferentialDiagnosis = SoftPartsDiagnosisType.VascularMalformation,
                    T2w = SignalType.Hyper,
                    IsSignalVoids = true
                },
                new SoftPartsFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SoftPartsFindingType.SoftTissueTumor,
                    DifferentialDiagnosis = SoftPartsDiagnosisType.Neurom,
                    T2w = SignalType.Hyper
                },
                new SoftPartsFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SoftPartsFindingType.SoftTissueTumor,
                    DifferentialDiagnosis = SoftPartsDiagnosisType.Schwannoma,
                    DemarcationType = DemarcationType.Sharp,
                    IsCysts = true,
                    TissueTumorCMEnhancementType = CMEnchancementType.Powerful
                },
                new SoftPartsFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SoftPartsFindingType.SoftTissueTumor,
                    DifferentialDiagnosis = SoftPartsDiagnosisType.Neurofibroma,
                    DemarcationType = DemarcationType.Sharp,
                    TissueTumorCMEnhancementType = CMEnchancementType.Powerful,
                    QuantitativeType = HomogeneityType.Heterogeneous
                },
                new SoftPartsFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SoftPartsFindingType.SoftTissueTumor,
                    DifferentialDiagnosis = SoftPartsDiagnosisType.EpidermalCyst,
                    DemarcationType = DemarcationType.Sharp,
                    T1w = SignalType.Hyper,
                    T2w = SignalType.Hypo,
                    TissueTumorCMEnhancementType = CMEnchancementType.Low,
                    QuantitativeType = HomogeneityType.Heterogeneous,
                    IsPeripheral = true
                },
                new SoftPartsFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SoftPartsFindingType.SoftTissueTumor,
                    DifferentialDiagnosis = SoftPartsDiagnosisType.TendonSheathFibroma,
                    TissueTumorHomogeneityType = HomogeneityType.Heterogeneous,
                    T1w = SignalType.Hypo,
                    T2w = SignalType.Hypo
                },
                new SoftPartsFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SoftPartsFindingType.SoftTissueTumor,
                    DifferentialDiagnosis = SoftPartsDiagnosisType.TenosynovialGiantCellTumor,
                    IsPressureCorrosionerosionBone = true,
                    T1w = SignalType.Hypo,
                    T2w = SignalType.Hypo
                },
                new SoftPartsFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SoftPartsFindingType.SoftTissueTumor,
                    DifferentialDiagnosis = SoftPartsDiagnosisType.Pilomatrixoma,
                    IsCalcification = true,
                    IsCapsule = true,
                    IsSubcutaneous = true
                },
                new SoftPartsFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SoftPartsFindingType.SoftTissueTumor,
                    DifferentialDiagnosis = SoftPartsDiagnosisType.SoftTissueSarcoma,
                    TissueTumorHomogeneityType = HomogeneityType.Heterogeneous,
                    TissueTumorCMEnhancementType = CMEnchancementType.Powerful,
                    QuantitativeType = HomogeneityType.Heterogeneous
                },
                new SoftPartsFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SoftPartsFindingType.SoftTissueTumor,
                    DifferentialDiagnosis = SoftPartsDiagnosisType.SquamousCellCarcinoma,
                    TissueTumorHomogeneityType = HomogeneityType.Heterogeneous
                },
                new SoftPartsFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SoftPartsFindingType.SoftTissueTumor,
                    DifferentialDiagnosis = SoftPartsDiagnosisType.MalignantPeripheralNerve,
                    TissueTumorHomogeneityType = HomogeneityType.Heterogeneous
                },
                new SoftPartsFindingPreset
                {
                    Id = Guid.NewGuid(),                    
                    FindingType = SoftPartsFindingType.SoftTissueTumor,
                    DifferentialDiagnosis = SoftPartsDiagnosisType.MalignantMelanoma,
                    TissueTumorHomogeneityType = HomogeneityType.Heterogeneous
                }
            };
        }
    }
}