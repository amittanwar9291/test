using System;
using System.Collections.Generic;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.SpineMRT.Domain.Enums;
using RadioReport.SpineMRT.Domain.Enums.Bones;
using RadioReport.SpineMRT.Domain.Models;

namespace RadioReport.SpineMRT.Repo.Seeds
{
    internal static class BonesFindingPresetSeed
    {
        internal static List<BonesFindingPreset> GetPreconfiguredPresets()
        {
            return new List<BonesFindingPreset>
            {
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = BonesFindingType.FocalTumor,
                    MainCharacteristicsDifferentialDiagnosis01 = BonesDiagnosisType.EwingsSarcoma,
                    TraumaLocation = TraumaLocations.Dorsal,
                    CorticalisType = CorticalisType.Destruction,
                    IsPeriostealSpur = true,
                    IsOsteolytic = true,
                    IsInfiltrationOfSoftTissue = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = BonesFindingType.FocalTumor,
                    MainCharacteristicsDifferentialDiagnosis01 = BonesDiagnosisType.Osteosarcoma,
                    TraumaLocation = TraumaLocations.Dorsal,
                    IsFluidLevel = true,
                    IsCalcification = true,
                    IsPeriostealReaction = true,
                    IsOsteolytic = true,
                    IsOsteoblastic = true,
                    IsInfiltrationOfSoftTissue = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = BonesFindingType.FocalTumor,
                    MainCharacteristicsDifferentialDiagnosis01 = BonesDiagnosisType.GiantCellTumor,
                    TraumaLocation = TraumaLocations.Ventral,
                    T1wSignal = SignalTypeExtended.Hypo,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Strong,
                    IsFluidLevel = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = BonesFindingType.FocalTumor,
                    MainCharacteristicsDifferentialDiagnosis01 = BonesDiagnosisType.Chondrosarcoma,
                    TraumaLocation = TraumaLocations.Dorsal,
                    T1wSignal = SignalTypeExtended.Hypo,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Weak,
                    IsInfiltrationOfSoftTissue = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = BonesFindingType.FocalTumor,
                    MainCharacteristicsDifferentialDiagnosis01 = BonesDiagnosisType.Metastasis,
                    TraumaLocation = TraumaLocations.Ventral,
                    CorticalisType = CorticalisType.Destruction
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = BonesFindingType.FocalTumor,
                    MainCharacteristicsDifferentialDiagnosis01 = BonesDiagnosisType.Lymphoma,
                    LimitationType = LimitationType.Sharp,
                    T1wSignal = SignalTypeExtended.Hypo,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Strong,
                    CMEnhancementHomogeneityType = HomogeneityType.Homogeneous,
                    IsOsteolytic = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = BonesFindingType.FocalTumor,
                    MainCharacteristicsDifferentialDiagnosis01 = BonesDiagnosisType.MultipleMyeloma,
                    TraumaLocation = TraumaLocations.Ventral,
                    T1wSignal = SignalTypeExtended.Hypo,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Strong,
                    CMEnhancementHomogeneityType = HomogeneityType.Homogeneous
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = BonesFindingType.FocalTumor,
                    MainCharacteristicsDifferentialDiagnosis01 = BonesDiagnosisType.AneurysmaticBoneCyst,
                    TraumaLocation = TraumaLocations.Dorsal,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    CorticalisType = CorticalisType.Thinning,
                    T1wSignal = SignalTypeExtended.Hyper,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Strong,
                    CMEnhancementHomogeneityType = HomogeneityType.Heterogeneous,
                    CMEnhancementForm = CMEnhancementForm.Septa,
                    IsSeptaChambered = true,
                    IsFluidLevel = true,
                    IsExpansive = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = BonesFindingType.FocalTumor,
                    MainCharacteristicsDifferentialDiagnosis01 = BonesDiagnosisType.OsteoidOsteoma,
                    TraumaLocation = TraumaLocations.Dorsal,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Strong,
                    CMEnhancementHomogeneityType = HomogeneityType.Heterogeneous,
                    CMEnhancementForm = CMEnhancementForm.InTheNidus,
                    IsNidus = true,
                    IsCalcification = true,
                    IsT2wHyperintense = true,
                    IsCentral = true,
                    IsScleroticMargin = true,
                    IsBoneMarrowEdema = true,
                    IsSoftTissueEdema = true,
                    IsPerifocalSclerosis = true,
                    IsSurroundingInflammatoryReaction = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = BonesFindingType.FocalTumor,
                    MainCharacteristicsDifferentialDiagnosis01 = BonesDiagnosisType.Osteoblastoma,
                    TraumaLocation = TraumaLocations.Dorsal,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Strong,
                    CMEnhancementHomogeneityType = HomogeneityType.Heterogeneous,
                    IsCalcification = true,
                    IsNidus = true,
                    IsScleroticMargin = true,
                    IsBoneMarrowEdema = true,
                    IsExpansive = true,
                    IsSoftTissueEdema = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = BonesFindingType.FocalTumor,
                    MainCharacteristicsDifferentialDiagnosis01 = BonesDiagnosisType.Osteochondroma,
                    TraumaLocation = TraumaLocations.Dorsal,
                    IsCartilagecap = true,
                    IsCartilagecapT2wHyperintense = true,
                    IsMoreThanOneLesion = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = BonesFindingType.FocalTumor,
                    MainCharacteristicsDifferentialDiagnosis01 = BonesDiagnosisType.Chondroblastoma,
                    T1wSignal = SignalTypeExtended.Hypo,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Strong,
                    CMEnhancementHomogeneityType = HomogeneityType.Heterogeneous,
                    IsOsteoidMatrix = true,
                    IsBoneMarrowEdema = true,
                    IsExpansive = true,
                    IsInfiltrationOfSoftTissue = true,
                    IsSoftTissueEdema = true,
                    IsSurroundingInflammatoryReaction = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = BonesFindingType.FocalTumor,
                    MainCharacteristicsDifferentialDiagnosis01 = BonesDiagnosisType.FibrousDysplasia,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Strong,
                    IsGroundGlassMatrix = true,
                    IsScleroticMargin = true,
                    IsOsteolytic = true,
                    IsExpansive = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = BonesFindingType.FocalTumor,
                    MainCharacteristicsDifferentialDiagnosis01 = BonesDiagnosisType.Enchondroma,
                    TraumaLocation = TraumaLocations.Dorsal,
                    LimitationType = LimitationType.Sharp,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    CorticalisType = CorticalisType.Intact,
                    ShapeType = ShapeType.Lobulated,
                    IsCalcification = true,
                    IsOsteolytic = true,
                    IsExpansive = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = BonesFindingType.FocalTumor,
                    MainCharacteristicsDifferentialDiagnosis01 = BonesDiagnosisType.VertebralHemangioma,
                    LimitationType = LimitationType.Sharp,
                    CorticalisType = CorticalisType.Intact,
                    T1wSignal = SignalTypeExtended.Hyper,
                    T2wSignal = SignalTypeExtended.Hyper,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Strong,
                    CMEnhancementHomogeneityType = HomogeneityType.Heterogeneous,
                    ShapeType = ShapeType.Round,
                    IsFatSignal = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = BonesFindingType.FocalTumor,
                    MainCharacteristicsDifferentialDiagnosis01 = BonesDiagnosisType.BoneIslandEnostosis,
                    LimitationType = LimitationType.PaintBrushBorders,
                    T1wSignal = SignalTypeExtended.Hypo,
                    T2wSignal = SignalTypeExtended.Hypo,
                    ShapeType = ShapeType.Round
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = BonesFindingType.FocalTumor,
                    MainCharacteristicsDifferentialDiagnosis01 = BonesDiagnosisType.SchmorlNodes,
                    LimitationType = LimitationType.Sharp,
                    T1wSignal = SignalTypeExtended.Iso,
                    T2wSignal = SignalTypeExtended.Iso,
                    IsScleroticMargin = true,
                    IsInterruptionEndPlate = true,
                    IsInvolvementAdjacentEndplate = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = BonesFindingType.FocalTumor,
                    MainCharacteristicsDifferentialDiagnosis01 = BonesDiagnosisType.IntraosseousLipoma,
                    LimitationType = LimitationType.Sharp,
                    IsFatSignal = true,
                    IsCalcification = true,
                    IsCentral = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = BonesFindingType.FocalTumor,
                    MainCharacteristicsDifferentialDiagnosis01 = BonesDiagnosisType.IntraosseousCyst,
                    LimitationType = LimitationType.Sharp,
                    HomogeneityType = HomogeneityType.Homogeneous,
                    CorticalisType = CorticalisType.Intact,
                    T2wSignal = SignalTypeExtended.Hyper
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = BonesFindingType.FocalTumor,
                    MainCharacteristicsDifferentialDiagnosis01 = BonesDiagnosisType.BoneInfarction,
                    ShapeType = ShapeType.Geographic,
                    IsFatSignal = true,
                    IsScleroticMargin = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = BonesFindingType.FocalTumor,
                    MainCharacteristicsDifferentialDiagnosis01 = BonesDiagnosisType.Chordoma,
                    TraumaLocation = TraumaLocations.Ventral,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    T1wSignal = SignalTypeExtended.Hypo,
                    T2wSignal = SignalTypeExtended.Hyper,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Strong,
                    CMEnhancementHomogeneityType = HomogeneityType.Heterogeneous,
                    ShapeType = ShapeType.Lobulated,
                    IsSeptaChambered = true,
                    IsOsteolytic = true,
                    IsOriginFromMidline = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = BonesFindingType.DiffuseTumor,
                    MainCharacteristicsDifferentialDiagnosis01 = BonesDiagnosisType.MultipleMyeloma,
                    T1wSignal = SignalTypeExtended.Hypo,
                    T2wSignal = SignalTypeExtended.Hypo,
                    InfiltrationPatternType = InfiltrationPatternType.Diffuse
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = BonesFindingType.DiffuseTumor,
                    MainCharacteristicsDifferentialDiagnosis01 = BonesDiagnosisType.Leukaemia,
                    T1wSignal = SignalTypeExtended.Hypo,
                    T2wSignal = SignalTypeExtended.Hypo
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = BonesFindingType.DiffuseTumor,
                    MainCharacteristicsDifferentialDiagnosis01 = BonesDiagnosisType.MyelodysplasticSyndrome,
                    T1wSignal = SignalTypeExtended.Hypo,
                    SignalSTIR = SignalTypeExtended.Hyper,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Strong,
                    CMEnhancementHomogeneityType = HomogeneityType.Homogeneous
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = BonesFindingType.DiffuseTumor,
                    MainCharacteristicsDifferentialDiagnosis01 = BonesDiagnosisType.Myelofibrosis,
                    T1wSignal = SignalTypeExtended.Hypo,
                    T2wSignal = SignalTypeExtended.Hypo
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = BonesFindingType.DiffuseTumor,
                    MainCharacteristicsDifferentialDiagnosis01 = BonesDiagnosisType.FatMarkConversion,
                    T1wSignal = SignalTypeExtended.Hyper,
                    T2wSignal = SignalTypeExtended.Hyper,
                    SignalSTIR = SignalTypeExtended.Hypo
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = BonesFindingType.DiffuseTumor,
                    MainCharacteristicsDifferentialDiagnosis01 = BonesDiagnosisType.Mastocytosis,
                    T1wSignal = SignalTypeExtended.Hypo,
                    SignalSTIR = SignalTypeExtended.Hyper,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Strong,
                    CMEnhancementHomogeneityType = HomogeneityType.Homogeneous
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = BonesFindingType.DiffuseTumor,
                    MainCharacteristicsDifferentialDiagnosis01 = BonesDiagnosisType.MGaucher,
                    T1wSignal = SignalTypeExtended.Hypo,
                    T2wSignal = SignalTypeExtended.Hypo
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = BonesFindingType.DiffuseTumor,
                    MainCharacteristicsDifferentialDiagnosis01 = BonesDiagnosisType.BoneMarrowConversion,
                    T1wSignal = SignalTypeExtended.Hypo,
                    SignalSTIR = SignalTypeExtended.Iso,
                    HomogeneityType = HomogeneityType.Homogeneous
                }
            };
        }
    }
}
