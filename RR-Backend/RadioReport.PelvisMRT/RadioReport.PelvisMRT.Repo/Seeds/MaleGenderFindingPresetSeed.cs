using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.PelvisMRT.Domain.Enums.MaleGender;
using RadioReport.PelvisMRT.Domain.Models;
using System.Collections.Generic;

namespace RadioReport.PelvisMRT.Repo.Seeds
{
    internal static class MaleGenderFindingPresetSeed
    {
        internal static List<MaleGenderFindingPreset> GetPreconfiguredPresets()
        {
            return new List<MaleGenderFindingPreset>
            {
                new MaleGenderFindingPreset
                {
                    FindingType = MaleGenderFindingType.PenisMass,
                    DifferentialDiagnosisType = MaleGenderDiagnosisType.PeyroniesDiseaseUnspecific,
                    SignalT1wSliderType = SignalType.Hypo,
                    SignalT2wSliderType = SignalType.Hypo
                },
                new MaleGenderFindingPreset
                {
                    FindingType = MaleGenderFindingType.PenisMass,
                    DifferentialDiagnosisType = MaleGenderDiagnosisType.PeyroniesDiseaseAcute,
                    SignalT1wSliderType = SignalType.Hypo,
                    SignalT2wSliderType = SignalType.Hypo,
                    PenisMassCMEnhancementType = CMEnhancementType.Strong
                },
                new MaleGenderFindingPreset
                {
                    FindingType = MaleGenderFindingType.PenisMass,
                    DifferentialDiagnosisType = MaleGenderDiagnosisType.PeyroniesDiseaseChronic,
                    SignalT1wSliderType = SignalType.Hypo,
                    SignalT2wSliderType = SignalType.Hypo,
                    PenisMassCMEnhancementType = CMEnhancementType.No
                },
                new MaleGenderFindingPreset
                {
                    FindingType = MaleGenderFindingType.PenisMass,
                    DifferentialDiagnosisType = MaleGenderDiagnosisType.SquamousCellCarcinoma,
                    MainFeaturesLocalizationType = MainFeaturesLocalizationType.GlansPenis,
                    SignalT1wSliderType = SignalType.Hypo,
                    SignalT2wSliderType = SignalType.Hypo,
                    PenisMassCMEnhancementType = CMEnhancementType.Strong
                },
                new MaleGenderFindingPreset
                {
                    FindingType = MaleGenderFindingType.PenisMass,
                    DifferentialDiagnosisType = MaleGenderDiagnosisType.Urethracarcinoma,
                    MainFeaturesLocalizationType = MainFeaturesLocalizationType.Urethra,
                    UrethraType = UrethraType.MembranousUrethra,
                    SignalT2wSliderType = SignalType.Hypo,
                    PenisMassCMEnhancementType = CMEnhancementType.Strong,
                    IsDiffusionRestriction = true
                },
                new MaleGenderFindingPreset
                {
                    FindingType = MaleGenderFindingType.PenisMass,
                    DifferentialDiagnosisType = MaleGenderDiagnosisType.Sarcoma,
                    SignalT1wSliderType = SignalType.Hypo,
                    SignalT2wSliderType = SignalType.Hyper
                },
                new MaleGenderFindingPreset
                {
                    FindingType = MaleGenderFindingType.PenisMass,
                    DifferentialDiagnosisType = MaleGenderDiagnosisType.Metastases,
                    SignalT2wSliderType = SignalType.Hypo,
                    IsDiffusionRestriction = true
                },
                new MaleGenderFindingPreset
                {
                    FindingType = MaleGenderFindingType.ScrotumMass,
                    DifferentialDiagnosisType = MaleGenderDiagnosisType.AdenomatoidTumor,
                    ScrotumMassLocalizationType = ScrotumMassLocalizationType.Extratesticular,
                    ScrotumMassSignalT2wSliderType = SignalType.Hypo,
                    ScrotumMassCMEnhancementType = CMEnhancementType.Low,
                    ScrotumMassHomogeneity02Type = HomogeneityType.Homogeneous
                },
                new MaleGenderFindingPreset
                {
                    FindingType = MaleGenderFindingType.ScrotumMass,
                    DifferentialDiagnosisType = MaleGenderDiagnosisType.Lipoma,
                    ScrotumMassLocalizationType = ScrotumMassLocalizationType.Extratesticular,
                    ScrotumMassSignalT1wSliderType = SignalType.Hyper,
                    ScrotumMassSignalT2wSliderType = SignalType.Hyper
                },
                new MaleGenderFindingPreset
                {
                    FindingType = MaleGenderFindingType.ScrotumMass,
                    DifferentialDiagnosisType = MaleGenderDiagnosisType.Lymphangioma,
                    ScrotumMassLocalizationType = ScrotumMassLocalizationType.Extratesticular,
                    ScrotumMassSignalT1wSliderType = SignalType.Hypo,
                    ScrotumMassSignalT2wSliderType = SignalType.Hyper,
                    IsCysticChanges = true,
                    IsSeptations = true,
                    SeptationsType = SeptationsType.Thin,
                    IsLiquidLevel = true
                },
                new MaleGenderFindingPreset
                {
                    FindingType = MaleGenderFindingType.ScrotumMass,
                    DifferentialDiagnosisType = MaleGenderDiagnosisType.Varicocele,
                    ScrotumMassLocalizationType = ScrotumMassLocalizationType.Extratesticular,
                    ScrotumMassSignalT2wSliderType = SignalType.Hyper,
                    IsVascularAccumulation = true
                },
                new MaleGenderFindingPreset
                {
                    FindingType = MaleGenderFindingType.ScrotumMass,
                    DifferentialDiagnosisType = MaleGenderDiagnosisType.Liposarcoma,
                    ScrotumMassLocalizationType = ScrotumMassLocalizationType.Intratesticular,
                    ScrotumMassSignalT1wSliderType = SignalType.Hyper,
                    ScrotumMassSignalT2wSliderType = SignalType.Hyper,
                    IsSignalLossFlowVoid = true,
                    SignalLossFlowVoidType = SignalLossFlowVoidType.Focal,
                    IsSeptations = true,
                    ScrotumMassCMEnhancementType = CMEnhancementType.Strong,
                    ScrotumMassHomogeneity02Type = HomogeneityType.Heterogeneous
                },
                new MaleGenderFindingPreset
                {
                    FindingType = MaleGenderFindingType.ScrotumMass,
                    DifferentialDiagnosisType = MaleGenderDiagnosisType.Metastases,
                    ScrotumMassLocalizationType = ScrotumMassLocalizationType.Extratesticular,
                    ScrotumMassSignalT2wSliderType = SignalType.Hypo,
                    ScrotumMassCMEnhancementType = CMEnhancementType.Strong
                },
                new MaleGenderFindingPreset
                {
                    FindingType = MaleGenderFindingType.ScrotumMass,
                    DifferentialDiagnosisType = MaleGenderDiagnosisType.LymphomaManifestation,
                    ScrotumMassLocalizationType = ScrotumMassLocalizationType.Intratesticular,
                    ScrotumMassSignalT1wSliderType = SignalType.Hypo,
                    ScrotumMassSignalT2wSliderType = SignalType.Hypo,
                    ScrotumMassCMEnhancementType = CMEnhancementType.Low,
                    IsEpididymis = true
                },

                new MaleGenderFindingPreset
                {
                    FindingType = MaleGenderFindingType.ScrotumMass,
                    DifferentialDiagnosisType = MaleGenderDiagnosisType.SpermaticCordSarcomasLiposarcoma,
                    ScrotumMassLocalizationType = ScrotumMassLocalizationType.Extratesticular,
                    ScrotumMassSignalT1wSliderType = SignalType.Hyper,
                    ScrotumMassSignalT2wSliderType = SignalType.Hyper,
                    IsSignalLossFlowVoid = true,
                    SignalLossFlowVoidType = SignalLossFlowVoidType.Focal,
                    IsSeptations = true,
                    ScrotumMassCMEnhancementType = CMEnhancementType.Strong,
                    ScrotumMassHomogeneity02Type = HomogeneityType.Heterogeneous
                },
                new MaleGenderFindingPreset
                {
                    FindingType = MaleGenderFindingType.ScrotumMass,
                    DifferentialDiagnosisType = MaleGenderDiagnosisType.SpermaticCordSarcomasRhabdmomyosarcoma,
                    ScrotumMassLocalizationType = ScrotumMassLocalizationType.Extratesticular,
                    ScrotumMassCMEnhancementType = CMEnhancementType.Strong,
                    ScrotumMassHomogeneity02Type = HomogeneityType.Homogeneous
                },
                new MaleGenderFindingPreset
                {
                    FindingType = MaleGenderFindingType.ScrotumMass,
                    DifferentialDiagnosisType = MaleGenderDiagnosisType.GermCellTumorSeminoma,
                    ScrotumMassLocalizationType = ScrotumMassLocalizationType.Intratesticular,
                    ScrotumMassSignalT2wSliderType = SignalType.Hypo,
                    ScrotumMassHomogeneity01Type = HomogeneityType.Homogeneous,
                    IsSeptations = true
                },
                new MaleGenderFindingPreset
                {
                    FindingType = MaleGenderFindingType.ScrotumMass,
                    DifferentialDiagnosisType = MaleGenderDiagnosisType.GermCellTumorNonSeminoma,
                    ScrotumMassLocalizationType = ScrotumMassLocalizationType.Intratesticular,
                    IsNecrosis = true
                },

                new MaleGenderFindingPreset
                {
                    FindingType = MaleGenderFindingType.ScrotumMass,
                    DifferentialDiagnosisType = MaleGenderDiagnosisType.LeydigCellTumor,
                    ScrotumMassLocalizationType = ScrotumMassLocalizationType.Intratesticular,
                    ScrotumMassSignalT2wSliderType = SignalType.Hypo,
                    ScrotumMassCMEnhancementType = CMEnhancementType.Strong,
                    ScrotumMassHomogeneity02Type = HomogeneityType.Homogeneous
                },
                new MaleGenderFindingPreset
                {
                    FindingType = MaleGenderFindingType.ScrotumMass,
                    DifferentialDiagnosisType = MaleGenderDiagnosisType.FibrousPseudotumour,
                    ScrotumMassLocalizationType = ScrotumMassLocalizationType.Extratesticular,
                    ScrotumMassSignalT1wSliderType = SignalType.Hypo,
                    ScrotumMassSignalT2wSliderType = SignalType.Hypo
                },
                new MaleGenderFindingPreset
                {
                    FindingType = MaleGenderFindingType.ScrotumMass,
                    DifferentialDiagnosisType = MaleGenderDiagnosisType.Polyorchidism,
                    ScrotumMassLocalizationType = ScrotumMassLocalizationType.Extratesticular,
                    ScrotumMassSignalT2wSliderType = SignalType.Hyper,
                    ScrotumMassCMEnhancementType = CMEnhancementType.Low
                },
                new MaleGenderFindingPreset
                {
                    FindingType = MaleGenderFindingType.ScrotumMass,
                    DifferentialDiagnosisType = MaleGenderDiagnosisType.SpermGranuloma,
                    ScrotumMassLocalizationType = ScrotumMassLocalizationType.Extratesticular,
                    ScrotumMassSignalT1wSliderType = SignalType.Hypo,
                    ScrotumMassSignalT2wSliderType = SignalType.Hypo,
                    ScrotumMassCMEnhancementType = CMEnhancementType.Low
                },
                new MaleGenderFindingPreset
                {
                    FindingType = MaleGenderFindingType.ScrotumMass,
                    DifferentialDiagnosisType = MaleGenderDiagnosisType.ScrotalPearl,
                    ScrotumMassLocalizationType = ScrotumMassLocalizationType.Extratesticular,
                    ScrotumMassSignalT2wSliderType = SignalType.Hypo,
                    IsSignalLossFlowVoid = true,
                    IsCentralNidus = true,
                    ScrotumMassCMEnhancementType = CMEnhancementType.No
                },
                new MaleGenderFindingPreset
                {
                    FindingType = MaleGenderFindingType.ScrotumMass,
                    DifferentialDiagnosisType = MaleGenderDiagnosisType.SpermaticCordHematoma,
                    ScrotumMassLocalizationType = ScrotumMassLocalizationType.Extratesticular,
                    ScrotumMassSignalT1wSliderType = SignalType.Hyper,
                    ScrotumMassCMEnhancementType = CMEnhancementType.No
                },
                new MaleGenderFindingPreset
                {
                    FindingType = MaleGenderFindingType.ScrotumMass,
                    DifferentialDiagnosisType = MaleGenderDiagnosisType.Hydrocele,
                    ScrotumMassLocalizationType = ScrotumMassLocalizationType.Extratesticular,
                    ScrotumMassSignalT1wSliderType = SignalType.Hypo,
                    ScrotumMassSignalT2wSliderType = SignalType.Hyper,
                    ScrotumMassCMEnhancementType = CMEnhancementType.No
                },
                new MaleGenderFindingPreset
                {
                    FindingType = MaleGenderFindingType.ScrotumMass,
                    DifferentialDiagnosisType = MaleGenderDiagnosisType.InguinalHernia,
                    ScrotumMassLocalizationType = ScrotumMassLocalizationType.Extratesticular
                },
                new MaleGenderFindingPreset
                {
                    FindingType = MaleGenderFindingType.ScrotumMass,
                    DifferentialDiagnosisType = MaleGenderDiagnosisType.Abscess,
                    ScrotumMassLocalizationType = ScrotumMassLocalizationType.Intratesticular,
                    ScrotumMassSignalT1wSliderType = SignalType.Hypo,
                    ScrotumMassSignalT2wSliderType = SignalType.Hyper,
                    ScrotumMassCMEnhancementType = CMEnhancementType.Strong,
                    IsMarginalCMEnhancement = true
                },
                new MaleGenderFindingPreset
                {
                    FindingType = MaleGenderFindingType.ScrotumMass,
                    DifferentialDiagnosisType = MaleGenderDiagnosisType.IntratesticularHematoma,
                    ScrotumMassLocalizationType = ScrotumMassLocalizationType.Intratesticular,
                    ScrotumMassSignalT1wSliderType = SignalType.Hyper,
                    ScrotumMassCMEnhancementType = CMEnhancementType.No
                }
            };
        }
    }
}
