using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.HeadMRT.Domain.Enums;
using RadioReport.HeadMRT.Domain.Enums.Cortex;
using RadioReport.HeadMRT.Domain.Models;
using System.Collections.Generic;

namespace RadioReport.HeadMRT.Repo.Seeds
{
    internal static class CortexFindingPresetSeed
    {
        internal static List<CortexFindingPreset> GetPreconfiguredPresets()
        {
            return new List<CortexFindingPreset>
            {
                // FOCAL
                new CortexFindingPreset
                {
                    FindingType = CortexFindingType.Focal,
                    DifferentialDiagnosisType = CortexDifferentialDiagnosisType.Glioblastoma,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    IsNecrosis = true,
                    IsCysts = true,
                    IsHemorrhage = true,
                    IsInternalStructureSignalVoids = true,
                    IsFluidLevel = true,
                    T2WSignal = SignalTypeExtended.Hyper,
                    FlairWSignal = SignalTypeExtended.Hyper,
                    IsT2SignalVoid = true,
                    SignalVoidType = SignalVoidType.Blood,
                    ContrastEnhancementQuantitativeType = ContrastQuantitativeType.Significant,
                    ContrastEnhancementDistributionType = ContrastDistributionType.Peripheral
                },
                new CortexFindingPreset
                {
                    FindingType = CortexFindingType.Focal,
                    DifferentialDiagnosisType = CortexDifferentialDiagnosisType.Dermoid,
                    T1WSignal = SignalTypeExtended.Hyper,
                    ContrastEnhancementQuantitativeType = ContrastQuantitativeType.Weak,
                    ContrastEnhancementDistributionType = ContrastDistributionType.Peripheral
                },
                new CortexFindingPreset
                {
                    FindingType = CortexFindingType.Focal,
                    DifferentialDiagnosisType = CortexDifferentialDiagnosisType.PrimaryCNSLymphoma,
                    MarginType = MarginType.Circumscribed,
                    HomogeneityType = HomogeneityType.Homogeneous,
                    IsMassEffect = true,
                    IsPerifocalEdema = true,
                    T1WSignal = SignalTypeExtended.LowHypo,
                    T2WSignal = SignalTypeExtended.LowHypo,
                    IsT2SignalVoid = true,
                    SignalVoidType = SignalVoidType.Blood,
                    DwiSignal = SignalType.Hyper,
                    AdcSignal = SignalType.Hypo,
                    IsDiffusionRestriction = true,
                    ContrastEnhancementQuantitativeType = ContrastQuantitativeType.Significant,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Homogeneous,
                    ContrastEnhancementDistributionType = ContrastDistributionType.EntireLesion
                },
                new CortexFindingPreset
                {
                    FindingType = CortexFindingType.Focal,
                    DifferentialDiagnosisType = CortexDifferentialDiagnosisType.ADEM,
                    T2WSignal = SignalTypeExtended.Hyper,
                    FlairWSignal = SignalTypeExtended.Hyper,
                    ContrastEnhancementQuantitativeType = ContrastQuantitativeType.Significant,
                    ContrastEnhancementDistributionType = ContrastDistributionType.RimEnhancement
                },
                new CortexFindingPreset
                {
                    FindingType = CortexFindingType.Focal,
                    DifferentialDiagnosisType = CortexDifferentialDiagnosisType.StatusEpilepticus,
                    IsMassEffect = true,
                    IsNarrowedSulci = true,
                    IsBlurringOfWhiteGreyJunction = true,
                    T1WSignal = SignalTypeExtended.Hypo,
                    T2WSignal = SignalTypeExtended.Hyper,
                    FlairWSignal = SignalTypeExtended.Hyper,
                    AdcSignal = SignalType.Hypo,
                    IsDiffusionRestriction = true
                },

                // DIFFUSE
                new CortexFindingPreset
                {
                    FindingType = CortexFindingType.Diffuse,
                    DifferentialDiagnosisType = CortexDifferentialDiagnosisType.CerebralEdemaFocal,
                    IsHemorrhage = true,
                    IsNarrowedSulci = true,
                    T1WSignal = SignalTypeExtended.Hypo,
                    T2WSignal = SignalTypeExtended.Hyper,
                    FlairWSignal = SignalTypeExtended.Hyper,
                    IsT2SignalVoid = true,
                    SignalVoidType = SignalVoidType.Blood,
                    ContrastEnhancementQuantitativeType = ContrastQuantitativeType.Weak,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Heterogeneous
                },
                new CortexFindingPreset
                {
                    FindingType = CortexFindingType.Diffuse,
                    DifferentialDiagnosisType = CortexDifferentialDiagnosisType.CerebralEdemaGeneralized,
                    IsHemorrhage = true,
                    IsNarrowedSulci = true,
                    T1WSignal = SignalTypeExtended.Hypo,
                    T2WSignal = SignalTypeExtended.Hyper,
                    FlairWSignal = SignalTypeExtended.Hyper,
                    IsT2SignalVoid = true,
                    SignalVoidType = SignalVoidType.Blood,
                    ContrastEnhancementQuantitativeType = ContrastQuantitativeType.Weak,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Heterogeneous
                },
                new CortexFindingPreset
                {
                    FindingType = CortexFindingType.Diffuse,
                    DifferentialDiagnosisType = CortexDifferentialDiagnosisType.CerebralEdemaTransependymal,
                    IsHemorrhage = true,
                    IsNarrowedSulci = true,
                    T1WSignal = SignalTypeExtended.Hypo,
                    T2WSignal = SignalTypeExtended.Hyper,
                    FlairWSignal = SignalTypeExtended.Hyper,
                    IsT2SignalVoid = true,
                    SignalVoidType = SignalVoidType.Blood,
                    ContrastEnhancementQuantitativeType = ContrastQuantitativeType.Weak,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Heterogeneous
                },
                new CortexFindingPreset
                {
                    FindingType = CortexFindingType.Diffuse,
                    DifferentialDiagnosisType = CortexDifferentialDiagnosisType.PRES,
                    T1WSignal = SignalTypeExtended.Hyper,
                    T2WSignal = SignalTypeExtended.Hyper,
                    FlairWSignal = SignalTypeExtended.Hyper,
                    IsT2SignalVoid = true,
                    SignalVoidType = SignalVoidType.Blood,
                    ContrastEnhancementQuantitativeType = ContrastQuantitativeType.Weak,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Heterogeneous
                },
                new CortexFindingPreset
                {
                    FindingType = CortexFindingType.Diffuse,
                    DifferentialDiagnosisType = CortexDifferentialDiagnosisType.Toxoplasmosis,
                    MarginType = MarginType.NonCircumscribed,
                    T1WSignal = SignalTypeExtended.Hypo,
                    IsT2SignalVoid = true,
                    ContrastEnhancementQuantitativeType = ContrastQuantitativeType.Weak,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Heterogeneous,
                    ContrastEnhancementDistributionType = ContrastDistributionType.Peripheral,
                    IsLesionOfTheSameEntity = true
                },
                new CortexFindingPreset
                {
                    FindingType = CortexFindingType.Diffuse,
                    DifferentialDiagnosisType = CortexDifferentialDiagnosisType.StatusEpilepticus,
                    IsMassEffect = true,
                    IsBlurringOfWhiteGreyJunction = true,
                    T1WSignal = SignalTypeExtended.Hypo,
                    T2WSignal = SignalTypeExtended.Hyper,
                    FlairWSignal = SignalTypeExtended.Hyper,
                    IsDiffusionRestriction = true
                }
            };
        }
    }
}
