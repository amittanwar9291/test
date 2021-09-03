using System.Collections.Generic;
using RadioReport.AbdomenMRT.Domain.Enums.Pancreas;
using RadioReport.AbdomenMRT.Domain.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;

namespace RadioReport.AbdomenMRT.Repo.Seeds
{
    internal static class PancreasFindingPresetSeed
    {
        internal static List<PancreasFindingPreset> GetPreconfiguredPresets()
        {
            return new List<PancreasFindingPreset>
            {
                new PancreasFindingPreset
                {
                    FindingType = PancreasFindingType.Mass,
                    MainMassDifferentialDiagnosisType1 = MassDifferentialDiagnosisType.Pseudocyst,
                    SignalT1wType = SignalTypeExtended.Hypo,
                    SignalT2wType = SignalTypeExtended.Hyper,
                    IsCapsule = true,
                    IsHemorrhage = true,
                    IsHemosiderin = true,
                    PancreaticDuctPathologyType = PancreaticDuctPathologyType.Dilatation,
                    GrowthPatternsType = GrowthPatternsType.Displacement,
                    ContrastEnhancementQuantitative = ContrastEnhancementQuantitative.Low,
                    ContrastEnhancementDistribution = ContrastEnhancementDistribution.Capsular
                },
                new PancreasFindingPreset
                {
                    FindingType = PancreasFindingType.Mass,
                    MainMassDifferentialDiagnosisType1 = MassDifferentialDiagnosisType.SerousCysticNeoplasia,
                    MarginType = MarginType.Circumscribed,
                    FormType = FormType.Lobulated,
                    SignalT1wType = SignalTypeExtended.Hypo,
                    SignalT2wType = SignalTypeExtended.Hyper,
                    IsCalcification = true,
                    ContrastEnhancementQuantitative = ContrastEnhancementQuantitative.Low,
                    ContrastEnhancementDistribution = ContrastEnhancementDistribution.Septal
                }
            };
        }
    }
}
