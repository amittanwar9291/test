using System.Collections.Generic;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.HandMRT.Domain.Enums;
using RadioReport.HandMRT.Domain.Models;

namespace RadioReport.HandMRT.Repo.Seeds
{
    internal static class BonesFindingPresetSeed
    {
        internal static List<BonesFindingPreset> GetPreconfiguredPresets()
        {
            return new List<BonesFindingPreset>
            {
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassOsteolysis,
                    TumorDifferentialDiagnosisType = TumorDifferentialDiagnosisType.Enchondroma,
                    MarginType = MarginType.Sharp,
                    IsMetaphyseal = true,
                    SignalT2w = SignalTypeExtended.Hyper,
                    HomogenityType = HomogeneityType.Heterogeneous,
                    CortexType = CortexType.Intact,
                    IsLobulated = true,
                    IsCalcification = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassOsteolysis,
                    TumorDifferentialDiagnosisType = TumorDifferentialDiagnosisType.Hemangioma,
                    MarginType = MarginType.Sharp,
                    SignalT2w = SignalTypeExtended.Hyper,
                    CortexType = CortexType.Intact,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
                    IsRound = true,
                    IsFatSignal = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassOsteolysis,
                    TumorDifferentialDiagnosisType = TumorDifferentialDiagnosisType.BoneIsland,
                    MarginType = MarginType.MixedForm,
                    SignalT1w = SignalTypeExtended.Hypo,
                    SignalT2w = SignalTypeExtended.Hypo,
                    ContrastEnhancementType = ContrastEnhancementType.No,
                    IsRound = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassOsteolysis,
                    TumorDifferentialDiagnosisType = TumorDifferentialDiagnosisType.IntraosseousLipoma,
                    MarginType = MarginType.Sharp,
                    IsFatSignal = true,
                    IsCalcification = true,
                    IsCentral = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassOsteolysis,
                    TumorDifferentialDiagnosisType = TumorDifferentialDiagnosisType.IntraosseeousCyst,
                    MarginType = MarginType.Sharp,
                    SignalT2w = SignalTypeExtended.Hyper,
                    HomogenityType = HomogeneityType.Homogeneous,
                    CortexType = CortexType.Intact
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassOsteolysis,
                    TumorDifferentialDiagnosisType = TumorDifferentialDiagnosisType.BoneInfarction,
                    IsFatSignal = true,
                    IsScleroticMargin = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassOsteolysis,
                    TumorDifferentialDiagnosisType = TumorDifferentialDiagnosisType.FibrousDysplasia,
                    MarginType = MarginType.Sharp,
                    SignalT2w = SignalTypeExtended.LowHyper,
                    IsScleroticMargin = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassOsteolysis,
                    TumorDifferentialDiagnosisType = TumorDifferentialDiagnosisType.AneurysmalBoneCyst,
                    SignalT2w = SignalTypeExtended.Hyper,
                    HomogenityType = HomogeneityType.Heterogeneous,
                    CortexType = CortexType.Thinning,
                    ContrastHomogenityType = HomogeneityType.Heterogeneous,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
                    ContrastDistributionType = ContrastDistributionType.Septal,
                    IsSeptated = true,
                    IsFluidLevel = true,
                    IsExpansile = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassOsteolysis,
                    TumorDifferentialDiagnosisType = TumorDifferentialDiagnosisType.OsteoidOsteoma,
                    ContrastHomogenityType = HomogeneityType.Heterogeneous,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
                    ContrastDistributionType = ContrastDistributionType.InNidus,
                    IsNidus = true,
                    IsT2wHyperintense = true,
                    IsCalcification = true,
                    IsCentral = true,
                    IsBoneMarrowEdema = true,
                    IsSoftTissueEdema = true,
                    IsScleroticMargin = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassOsteolysis,
                    TumorDifferentialDiagnosisType = TumorDifferentialDiagnosisType.Osteoblastoma,
                    HomogenityType = HomogeneityType.Heterogeneous,
                    ContrastHomogenityType = HomogeneityType.Heterogeneous,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
                    IsCalcification = true,
                    IsExpansile = true,
                    IsBoneMarrowEdema = true,
                    IsSoftTissueEdema = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassOsteolysis,
                    TumorDifferentialDiagnosisType = TumorDifferentialDiagnosisType.Osteochondroma,
                    IsBroadBased = true,
                    IsPedunculated = true,
                    IsProjectingAway = true,
                    IsMarginWithLowSignal = true,
                    IsCartilageCap = true,
                    IsCapT2wHyperintense = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassOsteolysis,
                    TumorDifferentialDiagnosisType = TumorDifferentialDiagnosisType.Chondroblastoma,
                    IsEpiphyseal = true,
                    SignalT1w = SignalTypeExtended.Hypo,
                    ContrastHomogenityType = HomogeneityType.Heterogeneous,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
                    IsOsteoidMatrix = true,
                    IsExpansile = true,
                    IsSoftTissueInfiltration = true,
                    IsBoneMarrowEdema = true,
                    IsSoftTissueEdema = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassOsteolysis,
                    TumorDifferentialDiagnosisType = TumorDifferentialDiagnosisType.EwingSarcoma,
                    CortexType = CortexType.Destruction,
                    IsOsteolytic = true,
                    IsSoftTissueInfiltration = true,
                    IsCodmanSpur = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassOsteolysis,
                    TumorDifferentialDiagnosisType = TumorDifferentialDiagnosisType.Osteosarcoma,
                    IsMetaphyseal = true,
                    IsCalcification = true,
                    IsDiffuse = true,
                    IsFluidLevel = true,
                    IsSoftTissueInfiltration = true,
                    IsOsteolytic = true,
                    IsOsteoblastic = true,
                    IsSunBurst = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassOsteolysis,
                    TumorDifferentialDiagnosisType = TumorDifferentialDiagnosisType.BeningGiantCellTumor,
                    MarginType = MarginType.Sharp,
                    IsMetaphyseal = true,
                    SignalT1w = SignalTypeExtended.Hypo,
                    HomogenityType = HomogeneityType.Heterogeneous,
                    CortexType = CortexType.Destruction,
                    ContrastHomogenityType = HomogeneityType.Heterogeneous,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
                    IsFluidLevel = true,
                    IsOsteolytic = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassOsteolysis,
                    TumorDifferentialDiagnosisType = TumorDifferentialDiagnosisType.Chondrosarcoma,
                    SignalT1w = SignalTypeExtended.Hypo,
                    SignalT2w = SignalTypeExtended.Hyper,
                    HomogenityType = HomogeneityType.Heterogeneous,
                    ContrastDistributionType = ContrastDistributionType.Peripheral,
                    IsCalcification = true,
                    IsDiffuse = true,
                    IsSoftTissueInfiltration = true,
                    IsSunBurst = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassOsteolysis,
                    TumorDifferentialDiagnosisType = TumorDifferentialDiagnosisType.Metastasis,
                    SignalT1w = SignalTypeExtended.Hypo,
                    IsOsteolytic = true,
                    IsOsteoblastic = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassOsteolysis,
                    TumorDifferentialDiagnosisType = TumorDifferentialDiagnosisType.Lymphoma,
                    MarginType = MarginType.Sharp,
                    SignalT1w = SignalTypeExtended.Hypo,
                    IsSclerotic = true,
                    IsOsteolytic = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassOsteolysis,
                    TumorDifferentialDiagnosisType = TumorDifferentialDiagnosisType.MultipleMyeloma,
                    SignalT1w = SignalTypeExtended.Hypo,
                    ContrastHomogenityType = HomogeneityType.Homogeneous,
                    ContrastEnhancementType = ContrastEnhancementType.Strong
                },
            };
        }
    }
}
