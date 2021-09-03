using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.HeadMRT.Domain.Enums;
using RadioReport.HeadMRT.Domain.Enums.CerebrospinalFluidSpace;
using RadioReport.HeadMRT.Domain.Models;
using System.Collections.Generic;

namespace RadioReport.HeadMRT.Repo.Seeds
{
    internal static class CerebrospinalFluidSpaceFindingPresetSeed
    {
        internal static List<CerebrospinalFluidSpaceFindingPreset> GetPreconfiguredPresets()
        {
            return new List<CerebrospinalFluidSpaceFindingPreset>
            {
                new CerebrospinalFluidSpaceFindingPreset
                {
                    FindingType = CerebrospinalFluidSpaceFindingType.Mass,
                    MassDifferentialDiagnosisIKnow1Type = CerebrospinalMassDiagnosisType.ColloidCyst,
                    IsLateralVentricle = true,
                    MarginType = MarginType.Circumscribed,
                    ShapeType = ShapeType.Round,
                    T1WSignal = SignalTypeExtended.Hyper,
                    T2WSignal = SignalTypeExtended.Iso,
                    ContrastEnhancementQuantitativeType = ContrastQuantitativeType.No
                },
                new CerebrospinalFluidSpaceFindingPreset
                {
                    FindingType = CerebrospinalFluidSpaceFindingType.Mass,
                    MassDifferentialDiagnosisIKnow1Type = CerebrospinalMassDiagnosisType.Craniopharyngioma,
                    MarginType = MarginType.Circumscribed,
                    ShapeType = ShapeType.Lobulated,
                    T1WSignal = SignalTypeExtended.Hyper,
                    T2WSignal = SignalTypeExtended.Hyper,
                    IsCysts = true,
                    IsCalcification = true,
                    ContrastEnhancementQuantitativeType = ContrastQuantitativeType.Significant,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Heterogeneous
                },
                new CerebrospinalFluidSpaceFindingPreset
                {
                    FindingType = CerebrospinalFluidSpaceFindingType.Mass,
                    MassDifferentialDiagnosisIKnow1Type = CerebrospinalMassDiagnosisType.PrimaryCNSLymphomaPCNSL,
                    HomogeneityType = HomogeneityType.Homogeneous,
                    T1WSignal = SignalTypeExtended.LowHypo,
                    T2WSignal = SignalTypeExtended.LowHypo,
                    FlairSignal = SignalTypeExtended.LowHypo,
                    IsSignalVoid = true,
                    SignalVoidType = SignalVoidType.Blood,
                    ContrastEnhancementQuantitativeType = ContrastQuantitativeType.Significant
                },
                new CerebrospinalFluidSpaceFindingPreset
                {
                    FindingType = CerebrospinalFluidSpaceFindingType.Mass,
                    MassDifferentialDiagnosisIKnow1Type = CerebrospinalMassDiagnosisType.ChoroidPlexusCarcinoma,
                    IsLateralVentricle = true,
                    MarginType = MarginType.NonCircumscribed,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    ShapeType = ShapeType.Lobulated,
                    IsDisplacement = true,
                    IsInfiltration = true,
                    IsSignalVoid = true,
                    IsDiffusionRestriction = true,
                    IsCysts = true,
                    IsCalcification = true,
                    IsNecrosis = true,
                    IsSignalVoids = true,
                    IsHemorrhage = true,
                    ContrastEnhancementQuantitativeType = ContrastQuantitativeType.Significant,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Heterogeneous
                },
                new CerebrospinalFluidSpaceFindingPreset
                {
                    FindingType = CerebrospinalFluidSpaceFindingType.Mass,
                    MassDifferentialDiagnosisIKnow1Type = CerebrospinalMassDiagnosisType.Ventriculitis,
                    T1WSignal = SignalTypeExtended.LowHypo,
                    T2WSignal = SignalTypeExtended.Hyper,
                    FlairSignal = SignalTypeExtended.Hyper,
                    IsFluidLevel = true,
                    IsHypertrophyChoroidPlexus = true,
                    IsPerifocalEdema = true,
                    ContrastEnhancementQuantitativeType = ContrastQuantitativeType.Weak,
                    ContrastEnhancementDistributionType = ContrastDistributionType.Peripheral
                },
                new CerebrospinalFluidSpaceFindingPreset
                {
                    FindingType = CerebrospinalFluidSpaceFindingType.Mass,
                    MassDifferentialDiagnosisIKnow1Type = CerebrospinalMassDiagnosisType.Neurofibromatosis,
                    MarginType = MarginType.NonCircumscribed,
                    T2WSignal = SignalTypeExtended.Hyper,
                    FlairSignal = SignalTypeExtended.Hyper,
                    ContrastEnhancementQuantitativeType = ContrastQuantitativeType.No
                }
            };
        }
    }
}
