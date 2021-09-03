using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.HeadMRT.Domain.Enums;
using RadioReport.HeadMRT.Domain.Enums.Meninges;
using RadioReport.HeadMRT.Domain.Models;
using System.Collections.Generic;

namespace RadioReport.HeadMRT.Repo.Seeds
{
    internal static class MeningesFindingPresetSeed
    {
        internal static List<MeningesFindingPreset> GetPreconfiguredPresets()
        {
            return new List<MeningesFindingPreset>
            {
                new MeningesFindingPreset
                {
                    FindingType = MeningesFindingType.Mass,
                    MassDifferentialDiagnosisLocalization = MeningesMassDiagnosisType.Meningioma,
                    MarginType = MarginType.Circumscribed,
                    IsCysts = true,
                    IsNecrosis = true,
                    IsPerifocalEdema = true,
                    IsDuraTailSign = true,
                    IsLocalHyperostosisOfTheBone = true,
                    T1WSignal = SignalTypeExtended.LowHypo,
                    IsSignalVoid = true,
                    SignalVoidType = SignalVoidType.Calcification,
                    ContrastEnhancementQuantitativeType = ContrastQuantitativeType.Significant,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Homogeneous
                },
                new MeningesFindingPreset
                {
                    FindingType = MeningesFindingType.Mass,
                    MassDifferentialDiagnosisLocalization = MeningesMassDiagnosisType.Schwannoma,
                    MarginType = MarginType.Circumscribed,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    ShapeType = ShapeType.Lobulated,
                    T2WSignal = SignalTypeExtended.Hyper,
                    FlairSignal = SignalTypeExtended.Hyper,
                    ContrastEnhancementQuantitativeType = ContrastQuantitativeType.Significant,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Heterogeneous
                },
                new MeningesFindingPreset
                {
                    FindingType = MeningesFindingType.Mass,
                    MassDifferentialDiagnosisLocalization = MeningesMassDiagnosisType.ChordomaBenignLesion,
                    IsNecrosis = true,
                    T2WSignal = SignalTypeExtended.Hyper,
                    IsSignalVoid = true,
                    SignalVoidType = SignalVoidType.Blood,
                    ContrastEnhancementQuantitativeType = ContrastQuantitativeType.Weak
                },
                new MeningesFindingPreset
                {
                    FindingType = MeningesFindingType.Mass,
                    MassDifferentialDiagnosisLocalization = MeningesMassDiagnosisType.Craniopharyngioma,
                    MarginType = MarginType.Circumscribed,
                    ShapeType = ShapeType.Lobulated,
                    IsCysts = true,
                    IsNecrosis = true,
                    T1WSignal = SignalTypeExtended.Hyper,
                    T2WSignal = SignalTypeExtended.Hyper,
                    FlairSignal = SignalTypeExtended.Hyper,
                    IsSignalVoid = true,
                    SignalVoidType = SignalVoidType.Calcification,
                    ContrastEnhancementQuantitativeType = ContrastQuantitativeType.Significant,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Heterogeneous,
                    ContrastEnhancementDistributionType = ContrastDistributionType.Peripheral
                },
                new MeningesFindingPreset
                {
                    FindingType = MeningesFindingType.Mass,
                    MassDifferentialDiagnosisLocalization = MeningesMassDiagnosisType.ChordomaMalignantLesion,
                    IsNecrosis = true,
                    T2WSignal = SignalTypeExtended.Hyper,
                    IsSignalVoid = true,
                    SignalVoidType = SignalVoidType.Blood,
                    ContrastEnhancementQuantitativeType = ContrastQuantitativeType.Weak
                }
            };
        }
    }
}
