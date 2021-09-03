using System.Collections.Generic;
using RadioReport.AbdomenMRT.Domain.Enums;
using RadioReport.AbdomenMRT.Domain.Enums.Spleen;
using RadioReport.AbdomenMRT.Domain.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;

namespace RadioReport.AbdomenMRT.Repo.Seeds
{
    internal static class SpleenFindingPresetSeed
    {
        internal static List<SpleenFindingPreset> GetPreconfiguredPresets()
        {
            return new List<SpleenFindingPreset>
            {
                new SpleenFindingPreset
                {
                    FindingType = SpleenFindingType.Mass,
                    DifferentialDiagnosis = SpleenDiagnosisType.Hemangioma,
                    T2w = SignalType.Hyper,
                    CMEnhancementQuantitativeType = CMEnhancementQuantitativeType.Strong,
                    CMEnhancementDistributionType = CMEnhancementDistributionType.Peripheral
                },
                new SpleenFindingPreset
                {
                    FindingType = SpleenFindingType.Mass,
                    DifferentialDiagnosis = SpleenDiagnosisType.Cyst,
                    DelimitationType = DelimitationType.NonCircumscribed,
                    HomogeneityType = HomogeneityType.Homogeneous,
                    FormType = FormType.Round,
                    T1w = SignalType.Hypo,
                    T2w = SignalType.Hyper,
                    CMEnhancementQuantitativeType = CMEnhancementQuantitativeType.No
                }
            };
        }
    }
}
