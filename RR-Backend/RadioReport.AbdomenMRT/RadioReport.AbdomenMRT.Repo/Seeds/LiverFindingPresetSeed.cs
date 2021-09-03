using System.Collections.Generic;
using RadioReport.AbdomenMRT.Domain.Enums;
using RadioReport.AbdomenMRT.Domain.Enums.Liver;
using RadioReport.AbdomenMRT.Domain.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;

namespace RadioReport.AbdomenMRT.Repo.Seeds
{
    internal static class LiverFindingPresetSeed
    {
        internal static List<LiverFindingPreset> GetPreconfiguredPresets()
        {
            return new List<LiverFindingPreset>
            {
                new LiverFindingPreset
                {
                    FindingType = LiverFindingType.FocalLiverLesion,
                    DifferentialDiagnosis = LiverDifferentialDiagnosisType.FocalNodularHyperplasiaFnh,
                    T1WSignalType = SignalTypeExtended.LowHypo,
                    T2WSignalType = SignalTypeExtended.LowHyper,
                    EarlyArterial = SignalTypeExtended.Hyper,
                    LateArterial = SignalTypeExtended.Hyper,
                    PortalVenous = SignalTypeExtended.Iso,
                    Venous = SignalTypeExtended.Iso,
                    LiverSpecificContrastEnhancement = SignalTypeExtended.Hyper,
                    QualityOfEnhancement = LiverHomogeneityType.Homogeneous,
                    IsCentralScar = true,
                    IsWashInArterialPhase = true,
                    WashInArterialPhaseType = WashInArterialPhaseType.Homogeneous,
                    IsMaskingVenousPhase = true,
                    IsLateVenousPooling = true,
                    GrowthPatternsType = GrowthPatternsType.Subcapsular
                },
                new LiverFindingPreset
                {
                    FindingType = LiverFindingType.FocalLiverLesion,
                    DifferentialDiagnosis = LiverDifferentialDiagnosisType.HepatocellularAdenoma,
                    FocalLocalizationType = FocalLocalizationType.Lobe,
                    IsRightLobeOfLiver = true,
                    HomogeneityType = LiverHomogeneityType.Heterogeneous,
                    EarlyArterial = SignalTypeExtended.Hyper,
                    LateArterial = SignalTypeExtended.Hyper,
                    LiverSpecificContrastEnhancement = SignalTypeExtended.Hypo,
                    IsWashInArterialPhase = true,
                    IsMaskingVenousPhase = true,
                    IsFat = true,
                    IsCalcification = true,
                    IsCapsule = true,
                    IsNecrosis = true,
                    IsHemorrhageProducts = true,
                    GrowthPatternsType = GrowthPatternsType.Subcapsular
                }
            };
        }
    }
}
