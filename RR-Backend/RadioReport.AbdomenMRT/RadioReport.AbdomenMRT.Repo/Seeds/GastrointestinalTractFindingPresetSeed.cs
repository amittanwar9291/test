using System.Collections.Generic;
using RadioReport.AbdomenMRT.Domain.Enums;
using RadioReport.AbdomenMRT.Domain.Enums.GastrointestinalTract;
using RadioReport.AbdomenMRT.Domain.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;

namespace RadioReport.AbdomenMRT.Repo.Seeds
{
    internal static class GastrointestinalTractFindingPresetSeed
    {
        internal static List<GastrointestinalTractFindingPreset> GetPreconfiguredPresets()
        {
            return new List<GastrointestinalTractFindingPreset>
            {
                new GastrointestinalTractFindingPreset
                {
                    FindingType = GastrointestinalTractFindingType.GastricMass,
                    DifferentialDiagnosisType = GastrointestinalDifferentialDiagnosisType.GastricCarcinoma,
                    FormType = FormType.Irregular,
                    IsInvasive = true,
                    IsTransmuralSpread = true,
                    IsUlceratingFinding = true,
                    IsLocoregionalLymphadenopathy = true
                },
                new GastrointestinalTractFindingPreset
                {
                    FindingType = GastrointestinalTractFindingType.GastricMass,
                    DifferentialDiagnosisType = GastrointestinalDifferentialDiagnosisType.Lymphoma,
                    IsLocoregionalLymphadenopathy = true
                },
                new GastrointestinalTractFindingPreset
                {
                    FindingType = GastrointestinalTractFindingType.IntestinalMass,
                    DifferentialDiagnosisType = GastrointestinalDifferentialDiagnosisType.ColorectalCarcinoma,
                    IntestinalMassExtensionType = IntestinalMassExtensionType.Focal,
                    IsInvasive = true,
                    IsOcclusive = true,
                    IsTransmuralSpread = true,
                    IsAdjacentFatTissue = true,
                    IsLymphadenopathy = true
                },
                new GastrointestinalTractFindingPreset
                {
                    FindingType = GastrointestinalTractFindingType.IntestinalMass,
                    DifferentialDiagnosisType = GastrointestinalDifferentialDiagnosisType.Lipoma,
                    MarginType = MarginType.Circumscribed,
                    HomogeneityType = GastrointestinalHomogeneityType.Homogeneous,
                    T1WSignalType = SignalTypeExtended.Hyper,
                    T2WSignalType = SignalTypeExtended.Hyper,
                    IsDisplacing = true,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.No
                }
            };
        }
    }
}
