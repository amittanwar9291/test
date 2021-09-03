using System.Collections.Generic;
using RadioReport.CardioMRT.Domain.Enums.SpatialRequirement;
using RadioReport.CardioMRT.Domain.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;

namespace RadioReport.CardioMRT.Repo.Seeds
{
    internal static class SpatialRequirementFindingPresetSeed
    {
        internal static List<SpatialRequirementFindingPreset> GetPreconfiguredPresets()
        {
            return new List<SpatialRequirementFindingPreset>
            {
                new SpatialRequirementFindingPreset
                {
                    DifferentialDiagnosis01 = SpatialRequirementDiagnosisType.Thrombus,
                    SignalT1wCharacteristics = SignalType.Hypo,
                    SignalT2wCharacteristics = SignalType.Hypo,
                    ContrastEnhancementPerfusionType = EnhancementType.No
                },
                new SpatialRequirementFindingPreset
                {
                    DifferentialDiagnosis01 = SpatialRequirementDiagnosisType.PericardialCyst,
                    SignalT1wCharacteristics = SignalType.Hypo,
                    SignalT2wCharacteristics = SignalType.Hyper,
                    ContrastEnhancementPerfusionType = EnhancementType.No
                },
                new SpatialRequirementFindingPreset
                {
                    DifferentialDiagnosis01 = SpatialRequirementDiagnosisType.Myxoma,
                    SignalT2wCharacteristics = SignalType.Hyper,
                    MarginType = MarginType.WellDefined,
                    ContrastEnhancementPerfusionType = EnhancementType.Yes,
                    IsBleeding = true,
                    IsNecrosis = true,
                    IsCalcification = true,
                    IsFatSignal = true,
                    IsHyperIntensitySTIR = true
                },
                new SpatialRequirementFindingPreset
                {
                    DifferentialDiagnosis01 = SpatialRequirementDiagnosisType.Lipoma,
                    SignalT1wCharacteristics = SignalType.Hyper,
                    SignalT2wCharacteristics = SignalType.Hyper,
                    MarginType = MarginType.WellDefined,
                    HomogeneityType = HomogeneityType.Homogeneous,
                    ContrastEnhancementPerfusionType = EnhancementType.No,
                    IsFatSignal = true,
                },
                new SpatialRequirementFindingPreset
                {
                    DifferentialDiagnosis01 = SpatialRequirementDiagnosisType.PapilaryFibroelastoma,
                    SignalT1wCharacteristics = SignalType.Iso,
                    SignalT2wCharacteristics = SignalType.Hyper,
                    ContrastEnhancementPerfusionType = EnhancementType.Yes,
                    IsValveAssociated = true
                },
                new SpatialRequirementFindingPreset
                {
                    DifferentialDiagnosis01 = SpatialRequirementDiagnosisType.Rhabdomyoma
                },
                new SpatialRequirementFindingPreset
                {
                    DifferentialDiagnosis01 = SpatialRequirementDiagnosisType.Fibroma,
                    ContrastEnhancementPerfusionType = EnhancementType.Yes,
                    ContrastEnhancementIntensityPerfusionType = EnhancementIntensityType.Mild
                },
                new SpatialRequirementFindingPreset
                {
                    DifferentialDiagnosis01 = SpatialRequirementDiagnosisType.Hemangioma,
                    SignalT1wCharacteristics = SignalType.Iso,
                    SignalT2wCharacteristics = SignalType.Hyper,
                    GdEnhancementEGEType = EnhancementType.Yes,
                    GdEnhancementQualityEGEType = HomogeneityType.Inhomogeneous
                },
                new SpatialRequirementFindingPreset
                {
                    DifferentialDiagnosis01 = SpatialRequirementDiagnosisType.Metastasis,
                    ContrastEnhancementPerfusionType = EnhancementType.Yes,
                    ContrastEnhancementQualityPerfusionType = HomogeneityType.Inhomogeneous

                },
                new SpatialRequirementFindingPreset
                {
                    DifferentialDiagnosis01 = SpatialRequirementDiagnosisType.Angiosarcoma,
                    ContrastEnhancementPerfusionType = EnhancementType.Yes,
                    IsBleeding = true,
                    IsNecrosis = true
                },
                new SpatialRequirementFindingPreset
                {
                    DifferentialDiagnosis01 = SpatialRequirementDiagnosisType.Lymphoma,
                    SignalT1wCharacteristics = SignalType.Iso,
                    SignalT2wCharacteristics = SignalType.Iso,
                    ContrastEnhancementPerfusionType = EnhancementType.Yes,
                    ContrastEnhancementQualityPerfusionType = HomogeneityType.Inhomogeneous
                }
            };
        }
    }
}
