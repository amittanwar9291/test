using System.Collections.Generic;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.FeetMRT.Domain.Enums.Bones;
using RadioReport.FeetMRT.Domain.Models;

namespace RadioReport.FeetMRT.Repo.Seeds
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
                    SpaceRequirementDifferentialDiagnosis = DifferentialDiagnosisType.Enchondrome,
                    LimitationType = BonesLimitationType.Circumscribed,
                    IsMetaphyseal = true,
                    SignalT2w = SignalTypeExtended.Hyper,
                    HomogeneityType = BonesHomogeneityType.Heterogeneous,
                    CortexType = CortexType.Intact,
                    IsLobulated = true,
                    IsCalcification = true,
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassOsteolysis,
                    SpaceRequirementDifferentialDiagnosis = DifferentialDiagnosisType.Hemangioma,
                    LimitationType = BonesLimitationType.Circumscribed,
                    SignalT2w = SignalTypeExtended.Hyper,
                    ContrastAgentEnhancementType = ContrastAgentEnhancementType.Marked,
                    IsRound = true,
                    IsFatSignal = true,
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassOsteolysis,
                    SpaceRequirementDifferentialDiagnosis = DifferentialDiagnosisType.BoneIslandOrOsteosis,
                    SignalT1w = SignalTypeExtended.Hypo,
                    SignalT2w = SignalTypeExtended.Hypo,
                    ContrastAgentEnhancementType = ContrastAgentEnhancementType.No,
                    IsRound = true,
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassOsteolysis,
                    SpaceRequirementDifferentialDiagnosis = DifferentialDiagnosisType.OsseousLipoma,
                    LimitationType = BonesLimitationType.Circumscribed,
                    IsFatSignal = true,
                    IsCalcification = true,
                    IsCentral = true,
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassOsteolysis,
                    SpaceRequirementDifferentialDiagnosis = DifferentialDiagnosisType.OsseousCyst,
                    SignalT2w = SignalTypeExtended.Hypo,
                    HomogeneityType = BonesHomogeneityType.Homogeneous,
                    CortexType = CortexType.Intact,
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassOsteolysis,
                    SpaceRequirementDifferentialDiagnosis = DifferentialDiagnosisType.BoneInfarction,
                    IsFatSignal = true,
                    IsScleroticMargin = true,
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassOsteolysis,
                    SpaceRequirementDifferentialDiagnosis = DifferentialDiagnosisType.FibrousDysplasia,
                    LimitationType = BonesLimitationType.Circumscribed,
                    SignalT2w = SignalTypeExtended.LowHyper,
                    IsScleroticMargin = true,
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassOsteolysis,
                    SpaceRequirementDifferentialDiagnosis = DifferentialDiagnosisType.AneurysmaticBoneCyst,
                    SignalT2w = SignalTypeExtended.Hyper,
                    HomogeneityType = BonesHomogeneityType.Heterogeneous,
                    CortexType = CortexType.ThinningScalopping,
                    ContrastAgentEnhancementType = ContrastAgentEnhancementType.Marked,
                    NoCaEnhancementHomogeneityType = BonesHomogeneityType.Heterogeneous,
                    ContrastAgentEnhancementFormType = ContrastAgentEnhancementFormType.Septal,
                    IsSeptatedChambered = true,
                    IsLiquidLevel = true,
                    IsExpanding = true,
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassOsteolysis,
                    SpaceRequirementDifferentialDiagnosis = DifferentialDiagnosisType.OsteoidOsteoma,
                    ContrastAgentEnhancementType = ContrastAgentEnhancementType.Marked,
                    NoCaEnhancementHomogeneityType = BonesHomogeneityType.Heterogeneous,
                    ContrastAgentEnhancementFormType = ContrastAgentEnhancementFormType.WithinTheNidus,
                    IsNidus = true,
                    IsNidusT2wHyperintense = true,
                    IsCalcification = true,
                    IsCentral = true,
                    IsEnvironmentalReactionBoneMarrowEdema = true,
                    IsEnvironmentalReactionSoftTissueEdema = true,
                    IsScleroticMargin = true,
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassOsteolysis,
                    SpaceRequirementDifferentialDiagnosis = DifferentialDiagnosisType.Osteoblastoma,
                    HomogeneityType = BonesHomogeneityType.Heterogeneous,
                    ContrastAgentEnhancementType = ContrastAgentEnhancementType.Marked,
                    NoCaEnhancementHomogeneityType = BonesHomogeneityType.Heterogeneous,
                    IsCalcification = true,
                    IsExpanding = true,
                    IsEnvironmentalReactionBoneMarrowEdema = true,
                    IsEnvironmentalReactionSoftTissueEdema = true,
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassOsteolysis,
                    SpaceRequirementDifferentialDiagnosis = DifferentialDiagnosisType.Osteochondrome,
                    IsSessile = true,
                    IsPedunculated = true,
                    IsOrientationFromTheEpiphysisTowardTheDiaphysis = true,
                    IsCartilageCap = true,
                    IsCapT2wHyperintense = true,
                    IsEdgeWithLowSignal = true,
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassOsteolysis,
                    SpaceRequirementDifferentialDiagnosis = DifferentialDiagnosisType.Chondroblastoma,
                    IsEpiphyseal = true,
                    SignalT1w = SignalTypeExtended.Hypo,
                    ContrastAgentEnhancementType = ContrastAgentEnhancementType.Marked,
                    NoCaEnhancementHomogeneityType = BonesHomogeneityType.Heterogeneous,
                    IsOsteoidMatrix = true,
                    IsExpanding = true,
                    IsInfiltrationOfSoftTissue = true,
                    IsEnvironmentalReactionBoneMarrowEdema = true,
                    IsEnvironmentalReactionSoftTissueEdema = true,
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassOsteolysis,
                    SpaceRequirementDifferentialDiagnosis = DifferentialDiagnosisType.EwingSarcoma,
                    CortexType = CortexType.Destruction,
                    IsOsteolytic = true,
                    IsInfiltrationOfSoftTissue = true,
                    IsPeriostealSpur = true,
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassOsteolysis,
                    SpaceRequirementDifferentialDiagnosis = DifferentialDiagnosisType.Osteosarcoma,
                    IsMetaphyseal = true,
                    IsCalcification = true,
                    IsDiffuse = true,
                    IsLiquidLevel = true,
                    IsInfiltrationOfSoftTissue = true,
                    IsOsteolytic = true,
                    IsOsteoblastic = true,
                    IsPeriostealReaction = true,
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassOsteolysis,
                    SpaceRequirementDifferentialDiagnosis = DifferentialDiagnosisType.GiantCellTumor,
                    LimitationType = BonesLimitationType.Circumscribed,
                    IsMetaphyseal = true,
                    SignalT1w = SignalTypeExtended.Hypo,
                    HomogeneityType = BonesHomogeneityType.Heterogeneous,
                    CortexType = CortexType.Destruction,
                    ContrastAgentEnhancementType = ContrastAgentEnhancementType.Marked,
                    NoCaEnhancementHomogeneityType = BonesHomogeneityType.Heterogeneous,
                    IsLiquidLevel = true,
                    IsOsteolytic = true,
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassOsteolysis,
                    SpaceRequirementDifferentialDiagnosis = DifferentialDiagnosisType.Chondrosarcoma,
                    SignalT1w = SignalTypeExtended.Hypo,
                    SignalT2w = SignalTypeExtended.Hyper,
                    HomogeneityType = BonesHomogeneityType.Heterogeneous,
                    ContrastAgentEnhancementFormType = ContrastAgentEnhancementFormType.Peripheral,
                    IsCalcification = true,
                    IsDiffuse = true,
                    IsInfiltrationOfSoftTissue = true,
                    IsPeriostealReaction = true,
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassOsteolysis,
                    SpaceRequirementDifferentialDiagnosis = DifferentialDiagnosisType.Metastasis,
                    SignalT1w = SignalTypeExtended.Hypo,
                    IsOsteolytic = true,
                    IsOsteoblastic = true,
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassOsteolysis,
                    SpaceRequirementDifferentialDiagnosis = DifferentialDiagnosisType.Lymphoma,
                    LimitationType = BonesLimitationType.Circumscribed,
                    SignalT1w = SignalTypeExtended.Hypo,
                    IsSclerotic = true,
                    IsOsteolytic = true,
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassOsteolysis,
                    SpaceRequirementDifferentialDiagnosis = DifferentialDiagnosisType.MultipleMyeloma,
                    SignalT1w = SignalTypeExtended.Hypo,
                    ContrastAgentEnhancementType = ContrastAgentEnhancementType.Mild,
                    NoCaEnhancementHomogeneityType = BonesHomogeneityType.Homogeneous
                }
            };
        }
    }
}
