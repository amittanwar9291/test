using RadioReport.ShoulderMRT.Domain.Enums;
using RadioReport.ShoulderMRT.Domain.Models;
using System;
using System.Collections.Generic;

namespace RadioReport.ShoulderMRT.Repo.Seeds
{
    internal static class BonesFindingPresetSeed
    {
        internal static List<BonesFindingPreset> GetPreconfiguredPresets()
        {
            return new List<BonesFindingPreset>()
            {
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    TumorDifferentialDiagnosis = TumorDifferentialDiagnosis.Enchondrome,
                    SecondLocalizationType = SecondLocalizationType.Metaphyseal,
                    LimitationType = LimitationType.Sharp,
                    HomogeneityType = HomogeneityType.Inhomogeneous,
                    CortexType = CortexType.Normal,
                    IsLobulated = true,
                    IsCalcification = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    TumorDifferentialDiagnosis = TumorDifferentialDiagnosis.Hemangioma,
                    LimitationType = LimitationType.Sharp,
                    CortexType = CortexType.Normal,
                    SignalT2w = SignalType.Hyper,
                    CMenhancementQuantitativeType = CMEnhancementQuantitativeType.Strong,
                    IsRound = true,
                    IsFatSignal = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    TumorDifferentialDiagnosis = TumorDifferentialDiagnosis.SclerosisIslandOrEnostosis,
                    LimitationType = LimitationType.BrushShaped,
                    SignalT1w = SignalType.Hypo,
                    SignalT2w = SignalType.Hypo,
                    CMenhancementQuantitativeType = CMEnhancementQuantitativeType.No,
                    IsRound = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    TumorDifferentialDiagnosis = TumorDifferentialDiagnosis.IntraosseousLipoma,
                    LimitationType = LimitationType.Sharp,
                    CortexType = CortexType.Normal,
                    SignalT1w = SignalType.Hyper,
                    SignalT2w = SignalType.Hyper,
                    IsFatSignal = true,
                    IsCalcification = true,
                    IsCentrally = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    TumorDifferentialDiagnosis = TumorDifferentialDiagnosis.IntraosseousCyst,
                    LimitationType = LimitationType.Sharp,
                    HomogeneityType = HomogeneityType.Homogeneous,
                    CortexType = CortexType.Normal,
                    SignalT2w = SignalType.Hyper
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    TumorDifferentialDiagnosis = TumorDifferentialDiagnosis.BoneInfarction,
                    IsGeographicConfiguration = true,
                    IsFatSignal = true,
                    IsScleroticMargin = true,
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    TumorDifferentialDiagnosis = TumorDifferentialDiagnosis.FibrousDysplasia,
                    LimitationType = LimitationType.Sharp,
                    SignalT2w = SignalType.LowHyper,
                    IsScleroticMargin = true,
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    TumorDifferentialDiagnosis = TumorDifferentialDiagnosis.AneurysmaticBoneCyst,
                    HomogeneityType = HomogeneityType.Inhomogeneous,
                    SignalT2w = SignalType.Hyper,
                    CMenhancementQuantitativeType = CMEnhancementQuantitativeType.Strong,
                    NoCMEnhancementHomogeneityType = HomogeneityType.Inhomogeneous,
                    CMEnhancementDistributionType = CMEnhancementDistributionType.Septal,
                    IsSeptated = true,
                    IsFluidLevel = true,
                    IsExpansive = true,
                    CortexType = CortexType.Thinningscalopping
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    TumorDifferentialDiagnosis = TumorDifferentialDiagnosis.OsteoidOsteoma,
                    CMenhancementQuantitativeType = CMEnhancementQuantitativeType.Strong,
                    NoCMEnhancementHomogeneityType = HomogeneityType.Inhomogeneous,
                    CMEnhancementDistributionType = CMEnhancementDistributionType.Nidus,
                    IsNidus = true,
                    IsCalcification = true,
                    IsT2wHyperIntense = true,
                    IsCentrally = true,
                    IsScleroticMargin = true,
                    IsEnvironmentalReactionSoftTissueEdema = true,
                    IsBoneMarrowEdema = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    TumorDifferentialDiagnosis = TumorDifferentialDiagnosis.Osteoblastoma,
                    HomogeneityType = HomogeneityType.Inhomogeneous,
                    CMenhancementQuantitativeType = CMEnhancementQuantitativeType.Strong,
                    NoCMEnhancementHomogeneityType = HomogeneityType.Inhomogeneous,
                    IsCalcification = true,
                    IsExpansive = true,
                    IsEnvironmentalReactionSoftTissueEdema = true,
                    IsBoneMarrowEdema = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    TumorDifferentialDiagnosis = TumorDifferentialDiagnosis.Osteochondrome,
                    IsBroadBased = true,
                    IsStalked = true,
                    IsOrientationFromTheEpiphysisTowardsTheDiaphysis = true,
                    IsMarginWithLowSignalPerichondriumAboveCartilageCap = true,
                    IsCartilageCap = true,
                    IsCapT2wHyperintense = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    TumorDifferentialDiagnosis = TumorDifferentialDiagnosis.Chondroblastoma,
                    SecondLocalizationType = SecondLocalizationType.Epiphyseal,
                    SignalT1w = SignalType.Hypo,
                    CMenhancementQuantitativeType = CMEnhancementQuantitativeType.Strong,
                    NoCMEnhancementHomogeneityType = HomogeneityType.Inhomogeneous,
                    IsOsteoidMatrix = true,
                    IsExpansive = true,
                    IsInfiltrationOfSoftTissue = true,
                    IsEnvironmentalReactionSoftTissueEdema = true,
                    IsBoneMarrowEdema = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    TumorDifferentialDiagnosis = TumorDifferentialDiagnosis.EwingSarcoma,
                    CortexType = CortexType.Destruction,
                    IsPeriostealSpurCodmanSpur = true,
                    IsOsteolytic = true,
                    IsInfiltrationOfSoftTissue = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    TumorDifferentialDiagnosis = TumorDifferentialDiagnosis.Osteosarcoma,
                    SecondLocalizationType = SecondLocalizationType.Metaphyseal,
                    IsCalcification = true,
                    IsFluidLevel = true,
                    IsDiffuselyDistributed = true,
                    IsPeriostealReactionSunburst = true,
                    IsInfiltrationOfSoftTissue = true,
                    IsOsteolytic = true,
                    IsOsteoblastic = true,
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    TumorDifferentialDiagnosis = TumorDifferentialDiagnosis.GiantCellTumor,
                    SecondLocalizationType = SecondLocalizationType.Metaphyseal,
                    LimitationType = LimitationType.Sharp,
                    HomogeneityType = HomogeneityType.Inhomogeneous,
                    CortexType = CortexType.Destruction,
                    SignalT1w = SignalType.Hypo,
                    CMenhancementQuantitativeType = CMEnhancementQuantitativeType.Strong,
                    NoCMEnhancementHomogeneityType = HomogeneityType.Inhomogeneous,
                    IsFluidLevel = true,
                    IsOsteolytic = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    TumorDifferentialDiagnosis = TumorDifferentialDiagnosis.Chondrosarcoma,
                    HomogeneityType = HomogeneityType.Inhomogeneous,
                    SignalT1w = SignalType.Hypo,
                    SignalT2w = SignalType.Hyper,
                    IsPeriostealReactionSunburst = true,
                    IsCalcification = true,
                    IsInfiltrationOfSoftTissue = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    TumorDifferentialDiagnosis = TumorDifferentialDiagnosis.Metastasis,
                    CortexType = CortexType.Destruction,
                    SignalT1w = SignalType.Hypo,
                    IsOsteolytic = true,
                    IsOsteoblastic = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    TumorDifferentialDiagnosis = TumorDifferentialDiagnosis.Lymphoma,
                    LimitationType = LimitationType.Sharp,
                    SignalT1w = SignalType.Hypo,
                    CMenhancementQuantitativeType = CMEnhancementQuantitativeType.Strong,
                    IsOsteolytic = true,
                    IsOsteoblastic = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    TumorDifferentialDiagnosis = TumorDifferentialDiagnosis.MultipleMyeloma,
                    SignalT1w = SignalType.Hypo,
                    CMenhancementQuantitativeType = CMEnhancementQuantitativeType.Strong,
                    NoCMEnhancementHomogeneityType = HomogeneityType.Homogeneous
                }
            };
        }
    }
}
