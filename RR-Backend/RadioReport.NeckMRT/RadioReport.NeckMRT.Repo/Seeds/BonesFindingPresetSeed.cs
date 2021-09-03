using System.Collections.Generic;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.NeckMRT.Domain.Enums.Bones;
using RadioReport.NeckMRT.Domain.Models;

namespace RadioReport.NeckMRT.Repo.Seeds
{
    internal static class BonesFindingPresetSeed
    {
        internal static List<BonesFindingPreset> GetPreconfiguredPresets()
        {
            return new List<BonesFindingPreset>
            {
                new BonesFindingPreset {
                    FindingType = BonesFindingType.SpatialNeoplasm,
                    MainSpatialNeoplasmDifferentialDiagnosisType1 = SpatialNeoplasmDifferentialDiagnosisType.Osteosarcoma,
                    IsFluidLevel = true,
                    IsCalcification = true,
                    IsPeriostealReaction = true,
                    IsOsteolytic = true,
                    IsOsteoblastic  = true,
                    IsInfiltrationSoftTissues = true
                },
                new BonesFindingPreset {
                    FindingType = BonesFindingType.SpatialNeoplasm,
                    MainSpatialNeoplasmDifferentialDiagnosisType1 = SpatialNeoplasmDifferentialDiagnosisType.Chondrosarcoma,
                    T1w = SignalTypeExtended.Hypo,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Weak,
                    IsInfiltrationSoftTissues = true
                },
                new BonesFindingPreset {
                    FindingType = BonesFindingType.SpatialNeoplasm,
                    MainSpatialNeoplasmDifferentialDiagnosisType1 = SpatialNeoplasmDifferentialDiagnosisType.Metastasis,
                    CorticalBoneType = CorticalBoneType.Destruction
                },
                new BonesFindingPreset {
                    FindingType = BonesFindingType.SpatialNeoplasm,
                    MainSpatialNeoplasmDifferentialDiagnosisType1 = SpatialNeoplasmDifferentialDiagnosisType.Lymphoma,
                    MarginType = MarginType.Circumscribed,
                    T1w = SignalTypeExtended.Hypo,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Strong,
                    SubHomogeneityType = HomogeneityType.Homogeneous,
                    IsOsteolytic = true
                },
                new BonesFindingPreset {
                    FindingType = BonesFindingType.SpatialNeoplasm,
                    MainSpatialNeoplasmDifferentialDiagnosisType1 = SpatialNeoplasmDifferentialDiagnosisType.MultipleMyeloma,
                    T1w = SignalTypeExtended.Hypo,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Strong,
                    SubHomogeneityType = HomogeneityType.Homogeneous
                },
                new BonesFindingPreset {
                    FindingType = BonesFindingType.SpatialNeoplasm,
                    MainSpatialNeoplasmDifferentialDiagnosisType1 = SpatialNeoplasmDifferentialDiagnosisType.AneurysmalBoneCyst,
                    MainHomogeneityType = HomogeneityType.Heterogeneous,
                    CorticalBoneType = CorticalBoneType.Thinningscalopping,
                    T1w = SignalTypeExtended.Hyper,
                    IsSeptatedChambered = true,
                    IsFluidLevel = true,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Strong,
                    SubHomogeneityType = HomogeneityType.Heterogeneous,
                    ContrastEnhancementDistributionType = ContrastEnhancementDistributionType.Septal,
                    IsExpansive = true
                },
                new BonesFindingPreset {
                    FindingType = BonesFindingType.SpatialNeoplasm,
                    MainSpatialNeoplasmDifferentialDiagnosisType1 = SpatialNeoplasmDifferentialDiagnosisType.OsteoidOsteoma,
                    IsNidus = true,
                    IsT2wHyperintense = true,
                    IsCalcification = true,
                    IsCentral = true,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Strong,
                    SubHomogeneityType = HomogeneityType.Heterogeneous,
                    ContrastEnhancementDistributionType = ContrastEnhancementDistributionType.Nidus,
                    IsSclerosisEdge = true,
                    IsSoftTissueEdema = true,
                    IsBoneMarrowEdema = true
                },
                new BonesFindingPreset {
                    FindingType = BonesFindingType.SpatialNeoplasm,
                    MainSpatialNeoplasmDifferentialDiagnosisType1 = SpatialNeoplasmDifferentialDiagnosisType.Osteoblastoma,
                    MainHomogeneityType = HomogeneityType.Heterogeneous,
                    IsCalcification = true,
                    IsNidus = true,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Strong,
                    SubHomogeneityType = HomogeneityType.Heterogeneous,
                    IsSclerosisEdge = true,
                    IsExpansive = true,
                    IsSoftTissueEdema = true,
                    IsBoneMarrowEdema = true
                },
                new BonesFindingPreset {
                    FindingType = BonesFindingType.SpatialNeoplasm,
                    MainSpatialNeoplasmDifferentialDiagnosisType1 = SpatialNeoplasmDifferentialDiagnosisType.Osteochondroma,
                    ShapeType = ShapeType.Broadbased,
                    IsOverOneLesion = true
                },
                new BonesFindingPreset {
                    FindingType = BonesFindingType.SpatialNeoplasm,
                    MainSpatialNeoplasmDifferentialDiagnosisType1 = SpatialNeoplasmDifferentialDiagnosisType.Chondroblastoma,
                    T1w = SignalTypeExtended.Hypo,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Strong,
                    SubHomogeneityType = HomogeneityType.Heterogeneous,
                    IsExpansive = true,
                    IsInfiltrationSoftTissues = true,
                    IsSoftTissueEdema = true,
                    IsBoneMarrowEdema = true
                },
                new BonesFindingPreset {
                    FindingType = BonesFindingType.SpatialNeoplasm,
                    MainSpatialNeoplasmDifferentialDiagnosisType1 = SpatialNeoplasmDifferentialDiagnosisType.FibrousDysplasia,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Strong,
                    IsSclerosisEdge = true,
                    IsOsteolytic = true,
                    IsExpansive = true
                },
                new BonesFindingPreset {
                    FindingType = BonesFindingType.SpatialNeoplasm,
                    MainSpatialNeoplasmDifferentialDiagnosisType1 = SpatialNeoplasmDifferentialDiagnosisType.Enchondroma,
                    MarginType = MarginType.Circumscribed,
                    MainHomogeneityType = HomogeneityType.Heterogeneous,
                    ShapeType = ShapeType.Lobulated,
                    CorticalBoneType = CorticalBoneType.Intact,
                    IsCalcification = true,
                    IsOsteolytic = true,
                    IsExpansive = true
                },
                new BonesFindingPreset {
                    FindingType = BonesFindingType.SpatialNeoplasm,
                    MainSpatialNeoplasmDifferentialDiagnosisType1 = SpatialNeoplasmDifferentialDiagnosisType.Hemangioma,
                    MarginType = MarginType.Circumscribed,
                    ShapeType = ShapeType.Round,
                    CorticalBoneType = CorticalBoneType.Intact,
                    T1w = SignalTypeExtended.Hyper,
                    T2w = SignalTypeExtended.Hyper,
                    IsFatSignal = true,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Strong,
                    SubHomogeneityType = HomogeneityType.Heterogeneous
                },
                new BonesFindingPreset {
                    FindingType = BonesFindingType.SpatialNeoplasm,
                    MainSpatialNeoplasmDifferentialDiagnosisType1 = SpatialNeoplasmDifferentialDiagnosisType.BoneIslandOrEnostosis,
                    ShapeType = ShapeType.Round,
                    T1w = SignalTypeExtended.Hypo,
                    T2w = SignalTypeExtended.Hypo
                },
                new BonesFindingPreset {
                    FindingType = BonesFindingType.SpatialNeoplasm,
                    MainSpatialNeoplasmDifferentialDiagnosisType1 = SpatialNeoplasmDifferentialDiagnosisType.IntraosseousLipoma,
                    MarginType = MarginType.Circumscribed,
                    IsFatSignal = true,
                    IsCalcification = true,
                    IsCentral = true
                },
                new BonesFindingPreset {
                    FindingType = BonesFindingType.SpatialNeoplasm,
                    MainSpatialNeoplasmDifferentialDiagnosisType1 = SpatialNeoplasmDifferentialDiagnosisType.IntraosseousCyst,
                    MarginType = MarginType.Circumscribed,
                    MainHomogeneityType = HomogeneityType.Homogeneous,
                    CorticalBoneType = CorticalBoneType.Intact,
                    T2w = SignalTypeExtended.Hyper
                },
                new BonesFindingPreset {
                    FindingType = BonesFindingType.SpatialNeoplasm,
                    MainSpatialNeoplasmDifferentialDiagnosisType1 = SpatialNeoplasmDifferentialDiagnosisType.BoneInfarction,
                    ShapeType = ShapeType.Geographic,
                    IsFatSignal = true,
                    IsSclerosisEdge = true
                },
            };
        }
    }
}
