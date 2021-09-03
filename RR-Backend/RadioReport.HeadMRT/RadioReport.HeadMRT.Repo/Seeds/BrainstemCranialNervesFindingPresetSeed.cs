using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.HeadMRT.Domain.Enums;
using RadioReport.HeadMRT.Domain.Enums.BrainstemCranialNerves;
using RadioReport.HeadMRT.Domain.Models;
using System.Collections.Generic;

namespace RadioReport.HeadMRT.Repo.Seeds
{
    internal static class BrainstemCranialNervesFindingPresetSeed
    {
        internal static List<BrainstemCranialNervesFindingPreset> GetPreconfiguredPresets()
        {
            return new List<BrainstemCranialNervesFindingPreset>
            {
                new BrainstemCranialNervesFindingPreset
                {
                    FindingType = BrainstemCranialNervesFindingType.Brainstem,
                    DifferentialDiagnosis = BrainstemCranialNervesDiagnosisType.AcousticNeuroma,
                    T1WSignalType = SignalTypeExtended.Iso,
                    T2WSignalType = SignalTypeExtended.Hypo,
                    IsSignalVoid = true,
                    SignalVoidType = SignalVoidType.Blood,
                    ContrastEnhancementQuantitativeType = ContrastQuantitativeType.Significant
                },
                new BrainstemCranialNervesFindingPreset
                {
                    FindingType = BrainstemCranialNervesFindingType.Brainstem,
                    DifferentialDiagnosis = BrainstemCranialNervesDiagnosisType.Schwannoma,
                    T1WSignalType = SignalTypeExtended.Iso,
                    T2WSignalType = SignalTypeExtended.Hyper,
                    IsSignalVoid = true,
                    SignalVoidType = SignalVoidType.Blood,
                    IsCysts = true,
                    ContrastEnhancementQuantitativeType = ContrastQuantitativeType.Significant,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Heterogeneous
                },
                new BrainstemCranialNervesFindingPreset
                {
                    FindingType = BrainstemCranialNervesFindingType.Brainstem,
                    DifferentialDiagnosis = BrainstemCranialNervesDiagnosisType.PinealCyst,
                    T1WSignalType = SignalTypeExtended.Hyper,
                    T2WSignalType = SignalTypeExtended.LowHyper,
                    FlairSignalType = SignalTypeExtended.LowHyper,
                    ContrastEnhancementQuantitativeType = ContrastQuantitativeType.Significant,
                    ContrastEnhancementDistributionType = ContrastDistributionType.Peripheral
                },
                new BrainstemCranialNervesFindingPreset
                {
                    FindingType = BrainstemCranialNervesFindingType.Brainstem,
                    DifferentialDiagnosis = BrainstemCranialNervesDiagnosisType.ADEM,
                    T2WSignalType = SignalTypeExtended.Hyper,
                    FlairSignalType = SignalTypeExtended.Hyper,
                    DwiSignalType = SignalType.Hyper,
                    ContrastEnhancementQuantitativeType = ContrastQuantitativeType.Weak,
                    ContrastEnhancementDistributionType = ContrastDistributionType.Peripheral
                },
                new BrainstemCranialNervesFindingPreset
                {
                    FindingType = BrainstemCranialNervesFindingType.Brainstem,
                    DifferentialDiagnosis = BrainstemCranialNervesDiagnosisType.AcuteHypertensiveEncephalopathyPRES,
                    IsPons = true,
                    T1WSignalType = SignalTypeExtended.Hypo,
                    T2WSignalType = SignalTypeExtended.Hyper,
                    FlairSignalType = SignalTypeExtended.Hyper,
                    IsSignalVoid = true,
                    SignalVoidType = SignalVoidType.Blood,
                    ContrastEnhancementQuantitativeType = ContrastQuantitativeType.Weak,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Heterogeneous
                },

                new BrainstemCranialNervesFindingPreset
                {
                    FindingType = BrainstemCranialNervesFindingType.CranialNerves,
                    DifferentialDiagnosis = BrainstemCranialNervesDiagnosisType.AcousticNeuroma,
                    T1WSignalType = SignalTypeExtended.Iso,
                    T2WSignalType = SignalTypeExtended.Hypo,
                    IsSignalVoid = true,
                    SignalVoidType = SignalVoidType.Blood,
                    ContrastEnhancementQuantitativeType = ContrastQuantitativeType.Significant
                },
                new BrainstemCranialNervesFindingPreset
                {
                    FindingType = BrainstemCranialNervesFindingType.CranialNerves,
                    DifferentialDiagnosis = BrainstemCranialNervesDiagnosisType.Schwannoma,
                    T1WSignalType = SignalTypeExtended.Iso,
                    T2WSignalType = SignalTypeExtended.Hyper,
                    IsSignalVoid = true,
                    SignalVoidType = SignalVoidType.Blood,
                    IsCysts = true,
                    ContrastEnhancementQuantitativeType = ContrastQuantitativeType.Significant,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Heterogeneous
                },
                new BrainstemCranialNervesFindingPreset
                {
                    FindingType = BrainstemCranialNervesFindingType.CranialNerves,
                    DifferentialDiagnosis = BrainstemCranialNervesDiagnosisType.PinealCyst,
                    T1WSignalType = SignalTypeExtended.Hyper,
                    T2WSignalType = SignalTypeExtended.LowHyper,
                    FlairSignalType = SignalTypeExtended.LowHyper,
                    ContrastEnhancementQuantitativeType = ContrastQuantitativeType.Significant,
                    ContrastEnhancementDistributionType = ContrastDistributionType.Peripheral
                },
                new BrainstemCranialNervesFindingPreset
                {
                    FindingType = BrainstemCranialNervesFindingType.CranialNerves,
                    DifferentialDiagnosis = BrainstemCranialNervesDiagnosisType.ADEM,
                    T2WSignalType = SignalTypeExtended.Hyper,
                    FlairSignalType = SignalTypeExtended.Hyper,
                    DwiSignalType = SignalType.Hyper,
                    ContrastEnhancementQuantitativeType = ContrastQuantitativeType.Weak,
                    ContrastEnhancementDistributionType = ContrastDistributionType.Peripheral
                },
                new BrainstemCranialNervesFindingPreset
                {
                    FindingType = BrainstemCranialNervesFindingType.CranialNerves,
                    DifferentialDiagnosis = BrainstemCranialNervesDiagnosisType.AcuteHypertensiveEncephalopathyPRES,
                    T1WSignalType = SignalTypeExtended.Hypo,
                    T2WSignalType = SignalTypeExtended.Hyper,
                    FlairSignalType = SignalTypeExtended.Hyper,
                    IsSignalVoid = true,
                    SignalVoidType = SignalVoidType.Blood,
                    ContrastEnhancementQuantitativeType = ContrastQuantitativeType.Weak,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Heterogeneous
                }
            };
        }
    }
}
