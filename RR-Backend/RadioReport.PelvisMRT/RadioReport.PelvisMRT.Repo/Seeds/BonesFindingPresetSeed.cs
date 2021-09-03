using System.Collections.Generic;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.PelvisMRT.Domain.Enums.Bones;
using RadioReport.PelvisMRT.Domain.Models;
namespace RadioReport.PelvisMRT.Repo.Seeds
{
    internal static class BonesFindingPresetSeed
    {
        internal static List<BonesFindingPreset> GetPreconfiguredPresets()
        {
            return new List<BonesFindingPreset>
            {
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.Tumor,
                    DifferentialDiagnosis = BonesDiagnosisType.Enchondrome,
                    IsMetaphyseal = true,
                    LimitationType =  LimitationType.Sharply,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    CorticalisType = CorticalisType.Intact,
                    SignalT2w = SignalTypeExtended.Hyper,
                    IsFormLobbied = true,
                    IsCalcification = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.Tumor,
                    DifferentialDiagnosis = BonesDiagnosisType.Hemangioma,
                    LimitationType =  LimitationType.Sharply,
                    CorticalisType = CorticalisType.Intact,
                    SignalT2w = SignalTypeExtended.Hyper,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
                    IsFormRoundly = true,
                    IsGreaseSignal = true,
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.Tumor,
                    DifferentialDiagnosis = BonesDiagnosisType.SclerosisIslandOrEnostosis,
                    LimitationType =  LimitationType.BrushLike,
                    SignalT1w = SignalTypeExtended.Hypo,
                    SignalT2w = SignalTypeExtended.Hypo,
                    ContrastEnhancementType = ContrastEnhancementType.No,
                    IsFormRoundly = true,

                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.Tumor,
                    DifferentialDiagnosis = BonesDiagnosisType.IntraossalLipoma,
                    LimitationType =  LimitationType.Sharply,
                    CorticalisType = CorticalisType.Intact,
                    SignalT1w = SignalTypeExtended.Hyper,
                    SignalT2w = SignalTypeExtended.Hyper,
                    IsCalcification = true,
                    IsGreaseSignal = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.Tumor,
                    DifferentialDiagnosis = BonesDiagnosisType.IntraosseousCyst,
                    LimitationType =  LimitationType.Sharply,
                    HomogeneityType = HomogeneityType.Homogeneous,
                    CorticalisType = CorticalisType.Intact,
                    SignalT2w = SignalTypeExtended.Hyper
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.Tumor,
                    DifferentialDiagnosis = BonesDiagnosisType.BoneInfarct,
                    IsMetaphyseal = true,
                    IsDiaphyseal = true,
                    IsFormMaplikeConfiguration = true,
                    IsGreaseSignal = true,
                    IsSclerosingRim = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.Tumor,
                    DifferentialDiagnosis = BonesDiagnosisType.FibrousDysplasia,
                    LimitationType =  LimitationType.Sharply,
                    SignalT2w = SignalTypeExtended.LowHyper,
                    IsSclerosingRim = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.Tumor,
                    DifferentialDiagnosis = BonesDiagnosisType.AneurysmaticBoneCyst,
                    HomogeneityType = HomogeneityType.Heterogeneous,
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
                    FindingType = BonesFindingType.Tumor,
                    DifferentialDiagnosis = BonesDiagnosisType.Osteoidosteom,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
                    ContrastHomogeneityType = HomogeneityType.Heterogeneous,
                    ContrastEnhancementDistributionType = ContrastEnhancementDistributionType.Nidus,
                    IsNidusT2wHyperintensity = true,
                    IsCalcification = true,
                    IsCalcificationCentral = true,
                    IsSclerosingRim = true,
                    IsSoftTissueEdema = true,
                    IsBoneMarrowEdema = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.Tumor,
                    DifferentialDiagnosis = BonesDiagnosisType.Osteoblastoma,
                    IsMetaphyseal = true,
                    IsDiaphyseal = true,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
                    ContrastHomogeneityType = HomogeneityType.Heterogeneous,
                    IsCalcification = true,
                    IsExpansive = true,
                    IsSoftTissueEdema = true,
                    IsBoneMarrowEdema = true,
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.Tumor,
                    DifferentialDiagnosis = BonesDiagnosisType.Osteochondrome,
                    IsMetaphyseal = true,
                    IsDiaphyseal = true,
                    IsFormBroadBased = true,
                    IsFormStored = true,
                    IsFormOrientation = true,
                    IsRimLowSignal = true,
                    IsCartilageCap = true,
                    IsAnotherLesion = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.Tumor,
                    DifferentialDiagnosis = BonesDiagnosisType.Chondroblastoma,
                    IsEpiphyseal = true,
                    SignalT1w = SignalTypeExtended.Hypo,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
                    ContrastHomogeneityType = HomogeneityType.Heterogeneous,
                    IsOsteoidMatrix = true,
                    IsExpansive = true,
                    IsInfiltrationSoftTissue = true,
                    IsSoftTissueEdema = true,
                    IsBoneMarrowEdema = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.Tumor,
                    DifferentialDiagnosis = BonesDiagnosisType.EwingSarcoma,
                    CorticalisType = CorticalisType.Destruction,
                    IsPeriostealSpur = true,
                    IsOsteolytic = true,
                    IsInfiltrationSoftTissue = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.Tumor,
                    DifferentialDiagnosis = BonesDiagnosisType.Osteosarcoma,
                    IsMetaphyseal = true,
                    IsCalcification = true,
                    IsLiquidLevel = true,
                    IsPeriostalReaction = true,
                    IsOsteolytic = true,
                    IsOsteoblastic = true,
                    IsInfiltrationSoftTissue = true,
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.Tumor,
                    DifferentialDiagnosis = BonesDiagnosisType.GiantCellTumor,
                    IsMetaphyseal = true,
                    LimitationType =  LimitationType.Sharply,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    CorticalisType = CorticalisType.Destruction,
                    SignalT1w = SignalTypeExtended.Hypo,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
                    ContrastHomogeneityType = HomogeneityType.Heterogeneous,
                    IsLiquidLevel = true,
                    IsOsteolytic = true,
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.Tumor,
                    DifferentialDiagnosis = BonesDiagnosisType.Chondrosarcoma,             
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    SignalT1w = SignalTypeExtended.Hypo,
                    SignalT2w = SignalTypeExtended.Hyper,
                    ContrastEnhancementDistributionType = ContrastEnhancementDistributionType.Peripheral,
                    IsCalcification = true,
                    IsPeriostalReaction = true,
                    IsInfiltrationSoftTissue = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.Tumor,
                    DifferentialDiagnosis = BonesDiagnosisType.Metastasis,
                    SignalT1w = SignalTypeExtended.Hypo,
                    IsOsteolytic = true,
                    IsOsteoblastic = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.Tumor,
                    DifferentialDiagnosis = BonesDiagnosisType.Lymphoma,
                    LimitationType =  LimitationType.Sharply,
                    SignalT1w = SignalTypeExtended.Hypo,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
                    IsOsteolytic = true,
                    IsSclerotic = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.Tumor,
                    DifferentialDiagnosis = BonesDiagnosisType.MultipleMyeloma,
                    SignalT1w = SignalTypeExtended.Hypo,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
                    ContrastHomogeneityType = HomogeneityType.Homogeneous,
                },
            };
        }
    }
}
           
