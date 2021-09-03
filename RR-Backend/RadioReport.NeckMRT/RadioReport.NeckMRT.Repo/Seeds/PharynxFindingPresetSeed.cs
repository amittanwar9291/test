using System.Collections.Generic;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.NeckMRT.Domain.Enums.Pharynx;
using RadioReport.NeckMRT.Domain.Models;

namespace RadioReport.NeckMRT.Repo.Seeds
{
    internal static class PharynxFindingPresetSeed
    {
        internal static List<PharynxFindingPreset> GetPreconfiguredPresets() => new List<PharynxFindingPreset>
            {
                new PharynxFindingPreset {
                    FindingType = PharynxFindingType.Mass,
                    DifferentialDiagnosis = DifferentialDiagnosisType.RathkeSCyst,
                    SignalT2wType = SignalTypeExtended.Hyper,
                    IsDisplacing = true,
                    CmEnhancementQuantitativeType = CmEnhancementQuantitativeType.No
                },
                new PharynxFindingPreset {
                    FindingType = PharynxFindingType.Mass,
                    DifferentialDiagnosis = DifferentialDiagnosisType.ChoanalPolyp,
                    IsNasopharynx = true,
                    SignalT1wType = SignalTypeExtended.Hypo,
                    SignalT2wType = SignalTypeExtended.Hyper,
                    CmEnhancementQuantitativeType = CmEnhancementQuantitativeType.Weak
                },
                new PharynxFindingPreset {
                    FindingType = PharynxFindingType.Mass,
                    DifferentialDiagnosis = DifferentialDiagnosisType.RetentionCyst,
                    MarginType = MarginType.Circumscribed,
                    MassHomogeneityType = HomogeneityType.Homogeneous,
                    SignalT1wType = SignalTypeExtended.Hypo,
                    SignalT2wType = SignalTypeExtended.Hyper
                },
                new PharynxFindingPreset {
                    FindingType = PharynxFindingType.Mass,
                    DifferentialDiagnosis = DifferentialDiagnosisType.NasopharyngealCarcinoma,
                    IsNasopharynx = true,
                    SignalT1wType = SignalTypeExtended.Iso,
                    SignalT2wType = SignalTypeExtended.LowHyper,
                    IsNecrosis = true,
                    IsInvasive = true,
                    CmEnhancementQuantitativeType = CmEnhancementQuantitativeType.Significant,
                    HomogeneityType = HomogeneityType.Heterogeneous
                },
                new PharynxFindingPreset {
                    FindingType = PharynxFindingType.Mass,
                    DifferentialDiagnosis = DifferentialDiagnosisType.OropharyngealCarcinoma,
                    IsOropharynx = true,
                    SignalT1wType = SignalTypeExtended.Iso,
                    SignalT2wType = SignalTypeExtended.LowHyper,
                    IsNecrosis = true,
                    IsInvasive = true,
                    CmEnhancementQuantitativeType = CmEnhancementQuantitativeType.Significant,
                    HomogeneityType = HomogeneityType.Heterogeneous
                },
                new PharynxFindingPreset {
                    FindingType = PharynxFindingType.Mass,
                    DifferentialDiagnosis = DifferentialDiagnosisType.HypopharyngealCarcinoma,
                    IsHypopharynx = true,
                    SignalT1wType = SignalTypeExtended.Iso,
                    SignalT2wType = SignalTypeExtended.LowHyper,
                    IsNecrosis = true,
                    IsInvasive = true,
                    CmEnhancementQuantitativeType = CmEnhancementQuantitativeType.Significant,
                    HomogeneityType = HomogeneityType.Heterogeneous
                },
                new PharynxFindingPreset {
                    FindingType = PharynxFindingType.Mass,
                    DifferentialDiagnosis = DifferentialDiagnosisType.Lymphoma,
                    SignalT1wType = SignalTypeExtended.Iso,
                    SignalT2wType = SignalTypeExtended.LowHyper,
                    IsInvasive = true,
                    CmEnhancementQuantitativeType = CmEnhancementQuantitativeType.Weak,
                    HomogeneityType = HomogeneityType.Homogeneous
                }
            };
    }
}
