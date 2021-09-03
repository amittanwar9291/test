using System.Collections.Generic;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.PelvisMRT.Domain.Enums.Bladder;
using RadioReport.PelvisMRT.Domain.Models;

namespace RadioReport.PelvisMRT.Repo.Seeds
{
    internal static class BladderFindingPresetSeed
    {
        internal static List<BladderFindingPreset> GetPreconfiguredPresets()
        {
            return new List<BladderFindingPreset>
            {
                new BladderFindingPreset
                {
                    FindingType = BladderFindingType.SoftTissueMass,
                    DifferentialDiagnosis = BladderDiagnosisType.HematomaChronic,
                    T1wSignal = SignalType.Hypo,
                    T2wSignal = SignalType.Hypo
                },
                new BladderFindingPreset
                {
                    FindingType = BladderFindingType.SoftTissueMass,
                    DifferentialDiagnosis = BladderDiagnosisType.HematomaSubacute,
                    T1wSignal = SignalType.Hyper,
                    T2wSignal = SignalType.Hypo
                },
                new BladderFindingPreset
                {
                    FindingType = BladderFindingType.SoftTissueMass,
                    DifferentialDiagnosis = BladderDiagnosisType.HematomaAcute,
                    T1wSignal = SignalType.Iso,
                    T2wSignal = SignalType.Hyper
                },
                new BladderFindingPreset
                {
                    FindingType = BladderFindingType.SoftTissueMass,
                    DifferentialDiagnosis = BladderDiagnosisType.Abscess,
                    T1wSignal = SignalType.Hypo,
                    T2wSignal = SignalType.Hyper,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Marginal,
                    IsCapsuleMembrane = true,
                    IsInflammatoryReaction = true
                },
                new BladderFindingPreset
                {
                    FindingType = BladderFindingType.SoftTissueMass,
                    DifferentialDiagnosis = BladderDiagnosisType.Seroma,
                    T1wSignal = SignalType.Hypo,
                    T2wSignal = SignalType.Hyper,
                    ContrastEnhancementType = ContrastEnhancementType.Low,
                    IsCapsuleMembrane = true,
                    IsFluidLevel = true
                }
            };
        }
    }
}