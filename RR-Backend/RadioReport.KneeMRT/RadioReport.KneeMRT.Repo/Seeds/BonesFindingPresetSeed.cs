using System;
using System.Collections.Generic;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.KneeMRT.Domain.Enums.Bones;
using RadioReport.KneeMRT.Domain.Models;

namespace RadioReport.KneeMRT.Repo.Seeds
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
                    DifferentialDiagnosis = BonesDiagnosisType.Enchondrome,
                    LocalizationType = BonesLocalizationType.Metaphyseal,
                    LimitationType = LimitationType.Sharply,
                    HomogeneityType = HomogeneityType.Inhomogeneous,
                    CorticalisType = CorticalisType.Intact,
                    SignalT2w = SignalTypeExtended.Hyper,
                    IsFormLobbied = true,
                    IsCalcification = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    DifferentialDiagnosis = BonesDiagnosisType.Hemangioma,
                    LimitationType = LimitationType.Sharply,
                    CorticalisType = CorticalisType.Intact,
                    SignalT2w = SignalTypeExtended.Hyper,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
                    IsFormRoundly = true,
                    IsGreaseSignal = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    DifferentialDiagnosis = BonesDiagnosisType.SclerosisIslandOrEnostosis,
                    LimitationType = LimitationType.BrushLike,
                    SignalT1w = SignalTypeExtended.Hypo,
                    SignalT2w = SignalTypeExtended.Hypo,
                    ContrastEnhancementType = ContrastEnhancementType.No,
                    IsFormRoundly = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    DifferentialDiagnosis = BonesDiagnosisType.IntraossalLipoma,
                    LimitationType = LimitationType.Sharply,
                    IsCalcification = true,
                    IsCalcificationCentral = true,
                    IsGreaseSignal = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    DifferentialDiagnosis = BonesDiagnosisType.IntraosseousCyst,
                    LimitationType = LimitationType.Sharply,
                    HomogeneityType = HomogeneityType.Homogeneous,
                    CorticalisType = CorticalisType.Intact,
                    SignalT2w = SignalTypeExtended.Hyper
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    DifferentialDiagnosis = BonesDiagnosisType.BoneInfarct,
                    IsFormMaplikeConfiguration = true,
                    IsGreaseSignal = true,
                    IsSclerosingRim = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    DifferentialDiagnosis = BonesDiagnosisType.FibrousDysplasia,
                    LimitationType = LimitationType.Sharply,
                    SignalT2w = SignalTypeExtended.LowHyper,
                    IsSclerosingRim = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    DifferentialDiagnosis = BonesDiagnosisType.AneurysmaticBoneCyst,
                    HomogeneityType = HomogeneityType.Inhomogeneous,
                    CorticalisType = CorticalisType.Thinning,
                    SignalT2w = SignalTypeExtended.Hyper,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
                    ContrastHomogeneityType = HomogeneityType.Heterogeneous,
                    ContrastEnhancementDistributionType = ContrastEnhancementDistributionType.Septal,
                    IsSeptetedOrChambered = true,
                    IsLiquidLevel = true,
                    IsExpansive = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    DifferentialDiagnosis = BonesDiagnosisType.Osteoidosteom,
                    SignalT2w = SignalTypeExtended.Hyper,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
                    ContrastHomogeneityType = HomogeneityType.Heterogeneous,
                    ContrastEnhancementDistributionType = ContrastEnhancementDistributionType.Nidus,
                    IsCalcification = true,
                    IsCalcificationCentral = true,
                    IsNidus = true,
                    IsReactionBoneMarrowEdema = true,
                    IsSclerosingRim = true,
                    IsReactionSoftTissueEdema = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    DifferentialDiagnosis = BonesDiagnosisType.Osteoblastoma,
                    HomogeneityType = HomogeneityType.Inhomogeneous,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
                    ContrastHomogeneityType = HomogeneityType.Heterogeneous,
                    IsCalcification = true,
                    IsReactionBoneMarrowEdema = true,
                    IsExpansive = true,
                    IsReactionSoftTissueEdema = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    DifferentialDiagnosis = BonesDiagnosisType.Osteochondrome,
                    IsFormOrientation = true,
                    IsFormStored = true,
                    IsFormBroadBased = true,
                    IsRimLowSignal = true,
                    IsCartilageCap = true,
                    IsAnotherLesion = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    DifferentialDiagnosis = BonesDiagnosisType.Chondroblastoma,
                    LocalizationType = BonesLocalizationType.Epiphyseal,
                    SignalT1w = SignalTypeExtended.Hypo,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
                    ContrastHomogeneityType = HomogeneityType.Heterogeneous,
                    IsOsteoidMatrix = true,
                    IsReactionBoneMarrowEdema = true,
                    IsExpansive = true,
                    IsReactionSoftTissueEdema = true,
                    IsInfiltrationSoftTissue = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    DifferentialDiagnosis = BonesDiagnosisType.EwingSarcoma,
                    CorticalisType = CorticalisType.Destruction,
                    IsPeriostealSpur = true,
                    IsOsteolytic = true,
                    IsInfiltrationSoftTissue = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    DifferentialDiagnosis = BonesDiagnosisType.Osteosarcoma,
                    LocalizationType = BonesLocalizationType.Metaphyseal, 
                    IsCalcification = true,
                    IsCalcificationDiffuselyDistributed = true,
                    IsLiquidLevel = true,
                    IsPeriostalReaction = true,
                    IsOsteoblastic = true,
                    IsOsteolytic = true,
                    IsInfiltrationSoftTissue = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    DifferentialDiagnosis = BonesDiagnosisType.GiantCellTumor,
                    LocalizationType = BonesLocalizationType.Metaphyseal,
                    LimitationType = LimitationType.Sharply,
                    HomogeneityType = HomogeneityType.Inhomogeneous,
                    CorticalisType = CorticalisType.Destruction,
                    SignalT1w = SignalTypeExtended.Hypo,
                    SignalT2w = SignalTypeExtended.Hyper,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
                    ContrastHomogeneityType = HomogeneityType.Heterogeneous,
                    IsLiquidLevel = true,
                    IsOsteolytic = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    DifferentialDiagnosis = BonesDiagnosisType.Chondrosarcoma,
                    HomogeneityType = HomogeneityType.Inhomogeneous,
                    SignalT1w = SignalTypeExtended.Hypo,
                    SignalT2w = SignalTypeExtended.Hyper,
                    ContrastEnhancementDistributionType = ContrastEnhancementDistributionType.Peripheral,
                    IsCalcification = true,
                    IsPeriostalReaction = true,
                    IsInfiltrationSoftTissue = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    DifferentialDiagnosis = BonesDiagnosisType.Metastasis,
                    CorticalisType = CorticalisType.Destruction,
                    SignalT1w = SignalTypeExtended.Hypo,
                    IsOsteoblastic = true,
                    IsOsteolytic = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    DifferentialDiagnosis = BonesDiagnosisType.Lymphoma,
                    LimitationType = LimitationType.Sharply,
                    SignalT1w = SignalTypeExtended.Hypo,
                    SignalT2w = SignalTypeExtended.Hyper,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
                    ContrastHomogeneityType = HomogeneityType.Homogeneous,
                    ContrastEnhancementDistributionType = ContrastEnhancementDistributionType.EntireLesion,
                    IsOsteolytic = true,
                    IsSclerotic = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    DifferentialDiagnosis = BonesDiagnosisType.MultipleMyeloma,
                    SignalT1w = SignalTypeExtended.Hypo,
                    SignalT2w = SignalTypeExtended.Hyper,
                    ContrastEnhancementDistributionType = ContrastEnhancementDistributionType.EntireLesion
                }
            };
        }
    }
}