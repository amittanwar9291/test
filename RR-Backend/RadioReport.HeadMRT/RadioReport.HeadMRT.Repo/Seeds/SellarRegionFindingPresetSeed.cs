using System.Collections.Generic;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.HeadMRT.Domain.Enums;
using RadioReport.HeadMRT.Domain.Enums.SellarRegion;
using RadioReport.HeadMRT.Domain.Models;

namespace RadioReport.HeadMRT.Repo.Seeds
{
    internal static class SellarRegionFindingPresetSeed
    {
        internal static List<SellarRegionFindingPreset> GetPreconfiguredPresets()
        {
            return new List<SellarRegionFindingPreset>
            {
                new SellarRegionFindingPreset
                {
                    FindingType = SellarRegionFindingType.Pathology,
                    SellarRegionDiagnosisLocalizationType = SellarRegionDiagnosisType.PituitaryMacroadenoma,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    T1wSignalType = SignalTypeExtended.Iso,
                    T2wSignalType = SignalTypeExtended.Iso,
                    FlairSignalType = SignalTypeExtended.Hyper,
                    IsFluidLevel = true,
                    ContrastQuantitativeType = ContrastQuantitativeType.Significant,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Heterogeneous
                },
                new SellarRegionFindingPreset
                {
                    FindingType = SellarRegionFindingType.Pathology,
                    SellarRegionDiagnosisLocalizationType = SellarRegionDiagnosisType.Meningioma,
                    MarginType = MarginType.Circumscribed,
                    T1wSignalType = SignalTypeExtended.LowHypo,
                    IsSignalVoid = true,
                    SignalVoidType = SignalVoidType.Calcification,
                    IsCysts = true,
                    IsNecrosis = true,
                    IsPerifocalEdema = true,
                    IsDuraTailSign = true,
                    ContrastQuantitativeType = ContrastQuantitativeType.Significant,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Homogeneous
                },
                new SellarRegionFindingPreset
                {
                    FindingType = SellarRegionFindingType.Pathology,
                    SellarRegionDiagnosisLocalizationType = SellarRegionDiagnosisType.Craniopharyngioma,
                    MarginType = MarginType.Circumscribed,
                    ShapeType = ShapeType.Lobulated,
                    T1wSignalType = SignalTypeExtended.Hyper,
                    T2wSignalType = SignalTypeExtended.Hyper,
                    FlairSignalType = SignalTypeExtended.Hyper,
                    IsSignalVoid = true,
                    SignalVoidType = SignalVoidType.Calcification,
                    IsCysts = true,
                    ContrastQuantitativeType = ContrastQuantitativeType.Significant,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Heterogeneous,
                    ContrastDistributionType = ContrastDistributionType.Peripheral
                },
                new SellarRegionFindingPreset
                {
                    FindingType = SellarRegionFindingType.Pathology,
                    SellarRegionDiagnosisLocalizationType = SellarRegionDiagnosisType.Chordoma,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    T1wSignalType = SignalTypeExtended.LowHypo,
                    T2wSignalType = SignalTypeExtended.Hyper,
                    IsSepta = true
                },
                new SellarRegionFindingPreset
                {
                    FindingType = SellarRegionFindingType.Pathology,
                    SellarRegionDiagnosisLocalizationType = SellarRegionDiagnosisType.RathkeCleftCyst,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    FlairSignalType = SignalTypeExtended.Hyper,
                    ContrastQuantitativeType = ContrastQuantitativeType.No
                }
            };
        }
    }
}
