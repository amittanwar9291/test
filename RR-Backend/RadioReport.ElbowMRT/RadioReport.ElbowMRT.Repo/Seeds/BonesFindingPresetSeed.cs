using System;
using System.Collections.Generic;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.ElbowMRT.Domain.Enums.Bones;
using RadioReport.ElbowMRT.Domain.Models;


namespace RadioReport.ElbowMRT.Repo.Seeds
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
                    FindingType = BonesFindingType.Mass,
                    DifferentialDiagnosis = DiagnosisType.Enchondroma,
                    LimitationType = BonesLimitationType.WellDefined,
                    IsMetaphyseal = true,
                    SignalT2w = SignalTypeExtended.Hyper,
                    HomogeneityType = BonesHomogeneityType.Heterogeneous,
                    CorticalisType = CorticalisType.Intact,
                    IsLobulated = true,
                    IsCalcification = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = BonesFindingType.Mass,
                    DifferentialDiagnosis = DiagnosisType.Hemangioma,
                    LimitationType = BonesLimitationType.WellDefined,
                    SignalT2w = SignalTypeExtended.Hyper,
                    CorticalisType = CorticalisType.Intact,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Powerful,
                    IsRound = true,
                    IsCalcification = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = BonesFindingType.Mass,
                    DifferentialDiagnosis = DiagnosisType.BoneIslandOrEnostoses,
                    LimitationType = BonesLimitationType.Mixed,
                    SignalT1w = SignalTypeExtended.Hypo,
                    SignalT2w = SignalTypeExtended.Hypo,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.No,
                    IsRound = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = BonesFindingType.Mass,
                    DifferentialDiagnosis = DiagnosisType.IntraosseousLipoma,
                    LimitationType = BonesLimitationType.WellDefined,
                    IsFatSignal = true,
                    IsCalcification = true,
                    IsCentral = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = BonesFindingType.Mass,
                    DifferentialDiagnosis = DiagnosisType.IntraosseousCyst,
                    LimitationType = BonesLimitationType.WellDefined,
                    SignalT2w = SignalTypeExtended.Hyper,
                    HomogeneityType = BonesHomogeneityType.Homogeneous,
                    CorticalisType = CorticalisType.Intact
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = BonesFindingType.Mass,
                    DifferentialDiagnosis = DiagnosisType.BoneInfarction,
                    IsGeographic = true,
                    IsFatSignal = true,
                    IsScleroticMargin = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = BonesFindingType.Mass,
                    DifferentialDiagnosis = DiagnosisType.FibrousDysplasia,
                    LimitationType = BonesLimitationType.WellDefined,
                    SignalT2w = SignalTypeExtended.LowHyper,
                    IsScleroticMargin = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = BonesFindingType.Mass,
                    DifferentialDiagnosis = DiagnosisType.AneurysmaticBoneCyst,
                    SignalT2w = SignalTypeExtended.Hyper,
                    HomogeneityType = BonesHomogeneityType.Heterogeneous,
                    CorticalisType = CorticalisType.ThinningScalopping,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Powerful,
                    ContrastEnhancementHomogeneityType = BonesHomogeneityType.Heterogeneous,
                    ContrastEnhancementDistributionType = ContrastEnhancementDistributionType.Septal,
                    IsFluidLevel = true,
                    IsSeptatedChambered = true,
                    IsExpansile = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = BonesFindingType.Mass,
                    DifferentialDiagnosis = DiagnosisType.OsteoidOsteoma,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Powerful,
                    ContrastEnhancementHomogeneityType = BonesHomogeneityType.Heterogeneous,
                    ContrastEnhancementDistributionType = ContrastEnhancementDistributionType.Nidus,
                    IsNidus = true,
                    IsNidusT2wHyperintense = true,
                    IsCalcification = true,
                    IsCentral = true,
                    IsBoneMarrowEdema = true,
                    IsSoftTissueEdema = true,
                    IsScleroticMargin = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = BonesFindingType.Mass,
                    DifferentialDiagnosis = DiagnosisType.Osteoblastoma,
                    HomogeneityType = BonesHomogeneityType.Heterogeneous,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Powerful,
                    ContrastEnhancementHomogeneityType = BonesHomogeneityType.Heterogeneous,
                    IsCalcification = true,
                    IsExpansile = true,
                    IsSoftTissueEdema = true,
                    IsBoneMarrowEdema = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = BonesFindingType.Mass,
                    DifferentialDiagnosis = DiagnosisType.Osteochondroma,
                    IsSessile = true,
                    IsPedunculated = true,
                    IsOrientation = true,
                    IsRimWithLowSignal = true,
                    IsCartilageCap = true,
                    IsCapT2wHyperintense = true,
                    IsMoreThanOneLesionSameEntity = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = BonesFindingType.Mass,
                    DifferentialDiagnosis = DiagnosisType.Chondroblastoma,
                    IsEpiphyseal = true,
                    SignalT1w = SignalTypeExtended.Hypo,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Powerful,
                    ContrastEnhancementHomogeneityType = BonesHomogeneityType.Heterogeneous,
                    IsOsteoidMatrix = true,
                    IsExpansile = true,
                    IsInfiltrationOfSoftTissue = true,
                    IsBoneMarrowEdema = true,
                    IsSoftTissueEdema = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = BonesFindingType.Mass,
                    DifferentialDiagnosis = DiagnosisType.EwingSarcoma,
                    CorticalisType = CorticalisType.Destruction,
                    IsOsteolytic = true,
                    IsInfiltrationOfSoftTissue = true,
                    IsCodmanTriangle = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = BonesFindingType.Mass,
                    DifferentialDiagnosis = DiagnosisType.Osteosarcoma,
                    IsMetaphyseal = true,
                    IsCalcification = true,
                    IsDiffuselyDistributed = true,
                    IsFluidLevel = true,
                    IsInfiltrationOfSoftTissue = true,
                    IsOsteoblastic = true,
                    IsOsteolytic = true,
                    IsPeriostealReactionSunBurst = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = BonesFindingType.Mass,
                    DifferentialDiagnosis = DiagnosisType.GiantCellTumor,
                    LimitationType = BonesLimitationType.WellDefined,
                    IsMetaphyseal = true,
                    HomogeneityType = BonesHomogeneityType.Heterogeneous,
                    CorticalisType = CorticalisType.Destruction,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Powerful,
                    ContrastEnhancementHomogeneityType = BonesHomogeneityType.Heterogeneous,
                    IsFluidLevel = true,
                    IsOsteolytic = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = BonesFindingType.Mass,
                    DifferentialDiagnosis = DiagnosisType.Chondrosarcoma,
                    SignalT1w = SignalTypeExtended.Hypo,
                    SignalT2w = SignalTypeExtended.Hyper,
                    HomogeneityType = BonesHomogeneityType.Heterogeneous,
                    IsCalcification = true,
                    IsInfiltrationOfSoftTissue = true,
                    IsPeriostealReactionSunBurst = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = BonesFindingType.Mass,
                    DifferentialDiagnosis = DiagnosisType.Metastasis,
                    SignalT1w = SignalTypeExtended.Hypo,
                    CorticalisType = CorticalisType.Destruction,
                    IsOsteolytic = true,
                    IsOsteoblastic = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = BonesFindingType.Mass,
                    DifferentialDiagnosis = DiagnosisType.Lymphoma,
                    LimitationType = BonesLimitationType.WellDefined,
                    SignalT1w = SignalTypeExtended.Hypo,
                    IsSclerotic = true,
                    IsOsteolytic = true
                },
                new BonesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = BonesFindingType.Mass,
                    DifferentialDiagnosis = DiagnosisType.MultipleMyeloma,
                    SignalT1w = SignalTypeExtended.Hypo
                }
            };
        }
    }
}
