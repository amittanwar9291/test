using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.HipMRT.Bones.Domain.Enums;
using RadioReport.HipMRT.Domain.Models.Bones;
using System.Collections.Generic;

namespace RadioReport.HipMRT.Repo.Seeds
{
    internal static class BonesFindingPresetSeed
    {
        internal static List<BonesFindingPreset> GetPreconfiguredPresets()
        {
            return new List<BonesFindingPreset>
            {
                new BonesFindingPreset 
                {
                    MainDiagnosisType = MassOsteolysisDifferentialDiagnosisType.Enchondroma,
                    IsMetaphysis = true,
                    MarginType = MarginType.Sharp,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    MassOrOsteolysisCorticalBoneType = MassOrOsteolysisCorticalBoneType.Intact,
                    T2w = SignalTypeExtended.Hyper,
                    IsLobulated = true,
                    IsCalcification = true
                },
                new BonesFindingPreset
                {
                    MainDiagnosisType = MassOsteolysisDifferentialDiagnosisType.Haemangioma,
                    MarginType = MarginType.Sharp,
                    MassOrOsteolysisCorticalBoneType = MassOrOsteolysisCorticalBoneType.Intact,
                    T2w = SignalTypeExtended.Hyper,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Pronounced,
                    IsRound = true,
                    IsFatSignal = true
                },
                new BonesFindingPreset
                {
                    MainDiagnosisType = MassOsteolysisDifferentialDiagnosisType.BoneIslandOrEnostosis,
                    T1w = SignalTypeExtended.Hypo,
                    T2w = SignalTypeExtended.Hypo,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.No,
                    IsRound = true
                },
                new BonesFindingPreset
                {
                    MainDiagnosisType = MassOsteolysisDifferentialDiagnosisType.IntraosseousLipoma,
                    MarginType = MarginType.Sharp,
                    MassOrOsteolysisCorticalBoneType = MassOrOsteolysisCorticalBoneType.Intact,
                    T1w = SignalTypeExtended.Hyper,
                    T2w = SignalTypeExtended.Hyper,
                    IsCalcification = true,
                    IsCentral = true,
                    IsFatSignal = true
                },
                new BonesFindingPreset
                {
                    MainDiagnosisType = MassOsteolysisDifferentialDiagnosisType.IntraosseousCyst,
                    MarginType = MarginType.Sharp,
                    HomogeneityType = HomogeneityType.Homogeneous,
                    MassOrOsteolysisCorticalBoneType = MassOrOsteolysisCorticalBoneType.Intact,
                    T2w = SignalTypeExtended.Hyper
                },
                new BonesFindingPreset
                {
                    MainDiagnosisType = MassOsteolysisDifferentialDiagnosisType.BoneInfarction,
                    IsMetaphysis = true,
                    IsDiaphysis = true,
                    IsGeographic = true,
                    IsFatSignal = true,
                    IsScleroticMargin = true
                },
                new BonesFindingPreset
                {
                    MainDiagnosisType = MassOsteolysisDifferentialDiagnosisType.FibrousDysplasia,
                    MarginType = MarginType.Sharp,
                    T2w = SignalTypeExtended.LowHyper,
                    IsScleroticMargin = true
                },
                new BonesFindingPreset
                {
                    MainDiagnosisType = MassOsteolysisDifferentialDiagnosisType.AneurysmaticBoneCyst,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    MassOrOsteolysisCorticalBoneType = MassOrOsteolysisCorticalBoneType.Thinningscalopping,
                    T2w = SignalTypeExtended.Hyper,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Pronounced,
                    PronouncedHomogeneityType = HomogeneityType.Heterogeneous,
                    ContrastEnhancementDistributionType = ContrastEnhancementDistributionType.Septal,
                    IsSeptated = true,
                    IsFluidLevel = true,
                    IsExpansile = true
                },
                new BonesFindingPreset
                {
                    MainDiagnosisType = MassOsteolysisDifferentialDiagnosisType.OsteoidOsteoma,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Pronounced,
                    PronouncedHomogeneityType = HomogeneityType.Heterogeneous,
                    ContrastEnhancementDistributionType = ContrastEnhancementDistributionType.InNidus,
                    IsNidus = true,
                    IsT2wHyperintense = true,
                    IsCalcification = true,
                    IsCentral = true,
                    IsScleroticMargin = true,
                    IsSoftTissueEdema = true,
                    IsBoneMarrowEdema = true
                },
                new BonesFindingPreset
                {
                    MainDiagnosisType = MassOsteolysisDifferentialDiagnosisType.Osteoblastoma,
                    IsMetaphysis = true,
                    IsDiaphysis = true,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Pronounced,
                    PronouncedHomogeneityType = HomogeneityType.Heterogeneous,
                    IsCalcification = true,
                    IsExpansile = true,
                    IsSoftTissueEdema = true,
                    IsBoneMarrowEdema = true
                },
                new BonesFindingPreset
                {
                    MainDiagnosisType = MassOsteolysisDifferentialDiagnosisType.Osteochondroma,
                    IsMetaphysis = true,
                    IsDiaphysis = true,
                    IsSessile = true,
                    IsPedunculated = true,
                    IsOrientationFacingAwayFrom = true,
                    IsCartilageCap = true,
                    IsCapT2wHyperintense = true,
                    IsLowSignalPerichondriumOver = true
                },
                new BonesFindingPreset
                {
                    MainDiagnosisType = MassOsteolysisDifferentialDiagnosisType.Chondroblastoma,
                    IsEpiphysis = true,
                    T1w = SignalTypeExtended.Hypo,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Pronounced,
                    PronouncedHomogeneityType = HomogeneityType.Heterogeneous,
                    IsOsteoidMatrix = true,
                    IsExpansile = true,
                    IsSoftTissueInfiltration = true,
                    IsSoftTissueEdema = true,
                    IsBoneMarrowEdema = true
                },
                new BonesFindingPreset
                {
                    MainDiagnosisType = MassOsteolysisDifferentialDiagnosisType.EwingSarcoma,
                    MassOrOsteolysisCorticalBoneType = MassOrOsteolysisCorticalBoneType.Destruction,
                    IsPeriostealSpurCodmanSpur = true,
                    IsOsteolytic = true,
                    IsSoftTissueInfiltration = true
                },
                new BonesFindingPreset
                {
                    MainDiagnosisType = MassOsteolysisDifferentialDiagnosisType.Osteosarcoma,
                    IsMetaphysis = true,
                    IsFluidLevel  = true,
                    IsCalcification = true,
                    IsDiffuse = true,
                    IsPeriostealReactionsunBurst = true,
                    IsOsteolytic = true,
                    IsOsteoblastic = true,
                    IsSoftTissueInfiltration = true
                },
                new BonesFindingPreset
                {
                    MainDiagnosisType = MassOsteolysisDifferentialDiagnosisType.MalignantGiantCellTumor,
                    IsMetaphysis = true,
                    MarginType = MarginType.Sharp,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    MassOrOsteolysisCorticalBoneType = MassOrOsteolysisCorticalBoneType.Destruction,
                    T1w = SignalTypeExtended.Hypo,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Pronounced,
                    PronouncedHomogeneityType = HomogeneityType.Heterogeneous,
                    IsFluidLevel = true,
                    IsOsteolytic = true
                },
                new BonesFindingPreset
                {
                    MainDiagnosisType = MassOsteolysisDifferentialDiagnosisType.Chondrosarcoma,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    T1w = SignalTypeExtended.Hypo,
                    T2w = SignalTypeExtended.Hyper,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Pronounced,
                    ContrastEnhancementDistributionType = ContrastEnhancementDistributionType.Peripheral,
                    IsCalcification = true,
                    IsPeriostealReactionsunBurst = true,
                    IsSoftTissueInfiltration = true
                },
                new BonesFindingPreset
                {
                    MainDiagnosisType = MassOsteolysisDifferentialDiagnosisType.Metastasis,
                    MassOrOsteolysisCorticalBoneType = MassOrOsteolysisCorticalBoneType.Destruction,
                    T1w = SignalTypeExtended.Hypo,
                    IsOsteolytic = true,
                    IsOsteoblastic = true
                },
                new BonesFindingPreset
                {
                    MainDiagnosisType = MassOsteolysisDifferentialDiagnosisType.Lymphoma,
                    MarginType = MarginType.Sharp,
                    T1w = SignalTypeExtended.Hypo,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Pronounced,
                    IsOsteolytic = true,
                    IsSclerotic = true
                },
                new BonesFindingPreset
                {
                    MainDiagnosisType = MassOsteolysisDifferentialDiagnosisType.MultipleMyeloma,
                    T1w = SignalTypeExtended.Hypo,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Pronounced
                }
            };
        }
    }
}
