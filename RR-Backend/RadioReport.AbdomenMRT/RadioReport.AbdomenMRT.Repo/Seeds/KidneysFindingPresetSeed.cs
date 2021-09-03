using System.Collections.Generic;
using RadioReport.AbdomenMRT.Domain.Enums;
using RadioReport.AbdomenMRT.Domain.Enums.Kidneys;
using RadioReport.AbdomenMRT.Domain.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;

namespace RadioReport.AbdomenMRT.Repo.Seeds
{
    internal static class KidneysFindingPresetSeed
    {
        internal static List<KidneysFindingPreset> GetPreconfiguredPresets()
        {
            return new List<KidneysFindingPreset>
            {
                new KidneysFindingPreset
                {
                    FindingType = KidneysFindingType.Mass,
                    KidneysDifferentialDiagnosisType = KidneysDifferentialDiagnosisType.Lipoma,
                    HomogeneityType = HomogeneityType.Homogeneous,
                    MarginType = MarginType.Circumscribed,
                    T1wSignal = SignalTypeExtended.Hyper,
                    T2wSignal = SignalTypeExtended.Hyper,
                    IsDisplacing = true,
                    CorticomedullaryPhase = SignalTypeExtended.Hypo,
                    NephrographicPhase = SignalTypeExtended.Hypo
                },
                new KidneysFindingPreset
                {
                    FindingType = KidneysFindingType.Mass,
                    KidneysDifferentialDiagnosisType = KidneysDifferentialDiagnosisType.RenalCellCarcinomaRcc,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    T1wSignal = SignalTypeExtended.Iso,
                    T2wSignal = SignalTypeExtended.Hyper,
                    IsDeformationOuterRenalContour = true,
                    CorticomedullaryPhase = SignalTypeExtended.LowHypo,
                    NephrographicPhase = SignalTypeExtended.LowHypo
                }
            };
        }
    }
}
