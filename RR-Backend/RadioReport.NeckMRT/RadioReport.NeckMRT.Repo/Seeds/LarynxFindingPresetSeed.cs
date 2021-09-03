using System.Collections.Generic;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.NeckMRT.Domain.Enums.Larynx;
using RadioReport.NeckMRT.Domain.Models;

internal static class LarynxFindingPresetSeed
    {
        internal static List<LarynxFindingPreset> GetPreconfiguredPresets()
        {
            return new List<LarynxFindingPreset>
            {
                new LarynxFindingPreset {
                    FindingType = LarynxFindingType.Mass,
                    DifferentialDiagnosis = DifferentialDiagnosisType.Laryngocele,
                    IsGlottis = true,
                    IsSinusOfMorgagni = true,
                    MarginType = MarginType.WellDefined,
                    T1wSignal = SignalType.Hypo,
                    T2wSignal = SignalType.Hyper
                },
                new LarynxFindingPreset {
                    FindingType = LarynxFindingType.Mass,
                    DifferentialDiagnosis = DifferentialDiagnosisType.SupraglotticCarcinoma,
                    IsSupraglotticSpace = true,
                    MarginType = MarginType.IllDefined,
                    T1wSignal = SignalType.Hypo,
                    T2wSignal = SignalType.Hyper,
                    IsInvasive = true,
                    CmQuantitativeType = CmQuantitativeType.Pronounced,
                    CmHomogeneityType = HomogeneityType.Heterogeneous
                }
            };
        }
    }