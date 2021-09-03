using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.HeadMRT.Domain.Enums;
using RadioReport.HeadMRT.Domain.Enums.BasalNuclei;
using RadioReport.HeadMRT.Domain.Models;
using System.Collections.Generic;

namespace RadioReport.HeadMRT.Repo.Seeds
{
    internal static class BasalNucleiFindingPresetSeed
    {
        internal static List<BasalNucleiFindingPreset> GetPreconfiguredPresets()
        {
            return new List<BasalNucleiFindingPreset>
            {
                new BasalNucleiFindingPreset
                {
                    FindingType = BasalNucleiFindingType.Pathology,
                    DifferentialDiagnosisLocalizationType = BasalNucleiDiagnosisType.AcuteStroke,
                    T1wSignalType = SignalTypeExtended.Hypo,
                    T2wSignalType = SignalTypeExtended.Hyper,
                    FlairSignalType = SignalTypeExtended.Hyper,
                    IsSignalVoid = true,
                    DwiSignalType = SignalType.Hyper,
                    AdcSignalType = SignalType.Hypo,
                    IsDiffusionRestriction = true
                },
                new BasalNucleiFindingPreset
                {
                    FindingType = BasalNucleiFindingType.Pathology,
                    DifferentialDiagnosisLocalizationType = BasalNucleiDiagnosisType.AcuteHypertensiveEncephalopathyPres,
                    T1wSignalType = SignalTypeExtended.Hypo,
                    T2wSignalType = SignalTypeExtended.Hyper,
                    FlairSignalType = SignalTypeExtended.LowHyper,
                    IsSignalVoid = true,
                    SignalVoidType = SignalVoidType.Blood,
                    ContrastEnhancementType = ContrastEnhancementType.Low,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Heterogeneous
                },
                new BasalNucleiFindingPreset
                {
                    FindingType = BasalNucleiFindingType.Pathology,
                    DifferentialDiagnosisLocalizationType = BasalNucleiDiagnosisType.Cadasil,
                    T2wSignalType = SignalTypeExtended.Hyper,
                    FlairSignalType = SignalTypeExtended.Hyper,
                    IsSignalVoid = true,
                    SignalVoidType = SignalVoidType.Blood,
                    IsDiffusionRestriction = true
                },
                new BasalNucleiFindingPreset
                {
                    FindingType = BasalNucleiFindingType.Pathology,
                    DifferentialDiagnosisLocalizationType = BasalNucleiDiagnosisType.MoyaMoya,
                    T2wSignalType = SignalTypeExtended.Hyper,
                    FlairSignalType = SignalTypeExtended.Hyper,
                    IsSignalVoids = true
                },
                new BasalNucleiFindingPreset
                {
                    FindingType = BasalNucleiFindingType.Pathology,
                    DifferentialDiagnosisLocalizationType = BasalNucleiDiagnosisType.WernickeEncephalopathy,
                    T1wSignalType = SignalTypeExtended.Hypo,
                    T2wSignalType = SignalTypeExtended.Hyper,
                    FlairSignalType = SignalTypeExtended.Hyper,
                    IsDiffusionRestriction = true,
                    ContrastEnhancementType = ContrastEnhancementType.Strong
                },
                new BasalNucleiFindingPreset
                {
                    FindingType = BasalNucleiFindingType.Pathology,
                    DifferentialDiagnosisLocalizationType = BasalNucleiDiagnosisType.DiffuseAstrocytoma,
                    MarginType = MarginType.Circumscribed,
                    HomogeneityType = HomogeneityType.Homogeneous,
                    T1wSignalType = SignalTypeExtended.Hypo,
                    T2wSignalType = SignalTypeExtended.Hyper,
                    FlairSignalType = SignalTypeExtended.Hyper,
                    ContrastEnhancementType = ContrastEnhancementType.No
                }
            };
        }
    }
}
