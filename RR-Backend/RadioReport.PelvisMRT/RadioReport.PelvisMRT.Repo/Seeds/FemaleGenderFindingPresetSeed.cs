using System.Collections.Generic;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.PelvisMRT.Domain.Enums.FemaleGender;
using RadioReport.PelvisMRT.Domain.Models;

namespace RadioReport.PelvisMRT.Repo.Seeds
{
    internal static class FemaleGenderFindingPresetSeed
    {
        internal static List<FemaleGenderFindingPreset> GetPreconfiguredPresets()
        {
            return new List<FemaleGenderFindingPreset>
            {
                new FemaleGenderFindingPreset
                {
                    FindingType = FemaleGenderFindingType.OvaryMass,
                    DifferentialDiagnosis = FemaleGenderDiagnosisType.CystadenomaSerous,
                    T1wSignal = SignalType.Hypo,
                    T2wSignal = SignalType.Hyper,
                    IsComplexCystic = true,
                    IsSepta = true,
                    ContrastEnhancementType1 = ContrastEnhancementType.Low,
                    ContrastEnhancementHomogenityType1 = HomogenityType.Heterogeneous,
                    HeterogeneousType = HeterogeneousType.Septal
                },
                new FemaleGenderFindingPreset
                {
                    FindingType = FemaleGenderFindingType.OvaryMass,
                    DifferentialDiagnosis = FemaleGenderDiagnosisType.CystadenomaMucinous,
                    T1wSignal = SignalType.Iso,
                    T2wSignal = SignalType.Iso,
                    IsComplexCystic = true,
                    IsSepta = true,
                    IsFocalSignalVoids = true
                },
                new FemaleGenderFindingPreset
                {
                    FindingType = FemaleGenderFindingType.OvaryMass,
                    DifferentialDiagnosis = FemaleGenderDiagnosisType.MatureCysticTeratoma,
                    T1wSignal = SignalType.Hyper,
                    AdditionalT1wSignal = SignalType.Hyper,
                    IsFocalSignalVoids = true, 
                    HomogenityType = HomogenityType.Heterogeneous
                },
                new FemaleGenderFindingPreset
                {
                    FindingType = FemaleGenderFindingType.OvaryMass,
                    DifferentialDiagnosis = FemaleGenderDiagnosisType.Endometrioma,
                    MarginType = MarginType.Circumscribed,
                    AdditionalT1wSignal = SignalType.Hyper,
                    T2wSignal = SignalType.Iso
                },
                new FemaleGenderFindingPreset
                {
                    FindingType = FemaleGenderFindingType.OvaryMass,
                    DifferentialDiagnosis = FemaleGenderDiagnosisType.Fibroma,
                    MarginType = MarginType.Circumscribed,
                    T1wSignal = SignalType.Hypo,
                    T2wSignal = SignalType.Hypo,
                    ContrastEnhancementType1 = ContrastEnhancementType.Low,
                    ContrastEnhancementHomogenityType1 = HomogenityType.Heterogeneous
                },
                new FemaleGenderFindingPreset
                {
                    FindingType = FemaleGenderFindingType.OvaryMass,
                    DifferentialDiagnosis = FemaleGenderDiagnosisType.CystadenocarcinomaSerous,
                    T1wSignal = SignalType.Hypo,
                    T2wSignal = SignalType.Hyper,
                    IsComplexCystic = true,
                    IsSeptaNodularParts = true,
                    IsSepta = true,
                    IsFocalThickening = true,
                    ContrastEnhancementType1 = ContrastEnhancementType.Strong,
                    ContrastEnhancementHomogenityType1 = HomogenityType.Heterogeneous,
                    HeterogeneousType = HeterogeneousType.NodularParts
                },
                new FemaleGenderFindingPreset
                {
                    FindingType = FemaleGenderFindingType.OvaryMass,
                    DifferentialDiagnosis = FemaleGenderDiagnosisType.CystadenocarcinomaMucinous,
                    IsComplexCystic = true,
                    IsSeptaNodularParts = true,
                    IsSepta = true,
                    IsFocalThickening = true,
                    ContrastEnhancementType1 = ContrastEnhancementType.Strong,
                    ContrastEnhancementHomogenityType1 = HomogenityType.Heterogeneous,
                    HeterogeneousType = HeterogeneousType.NodularParts
                },
                new FemaleGenderFindingPreset
                {
                    FindingType = FemaleGenderFindingType.OvaryMass,
                    DifferentialDiagnosis = FemaleGenderDiagnosisType.BorderlineCystadenomaSerous,
                    T1wSignal = SignalType.Hypo,
                    T2wSignal = SignalType.Hyper,
                    IsComplexCystic = true,
                    IsSepta = true,
                    ContrastEnhancementType1 = ContrastEnhancementType.Low,
                    ContrastEnhancementHomogenityType1 = HomogenityType.Heterogeneous,
                    HeterogeneousType = HeterogeneousType.Septal
                },
                new FemaleGenderFindingPreset
                {
                    FindingType = FemaleGenderFindingType.OvaryMass,
                    DifferentialDiagnosis = FemaleGenderDiagnosisType.BorderlineCystadenomaMucinous,
                    T1wSignal = SignalType.Iso,
                    T2wSignal = SignalType.Iso,
                    IsComplexCystic = true,
                    IsSepta = true,
                    IsFocalSignalVoids = true
                },
                new FemaleGenderFindingPreset
                {
                    FindingType = FemaleGenderFindingType.UterineTubeMass,
                    DifferentialDiagnosis = FemaleGenderDiagnosisType.Leiomyoma,
                    MarginType = MarginType.Circumscribed,
                    T2wSignal = SignalType.Hypo
                },
                new FemaleGenderFindingPreset
                {
                    FindingType = FemaleGenderFindingType.UterineTubeMass,
                    DifferentialDiagnosis = FemaleGenderDiagnosisType.HydatidsOfMorgagni,
                    HomogenityType = HomogenityType.Homogeneous,
                    T1wSignal = SignalType.Hypo,
                    T2wSignal = SignalType.Hyper
                },
                new FemaleGenderFindingPreset
                {
                    FindingType = FemaleGenderFindingType.UterineTubeMass,
                    DifferentialDiagnosis = FemaleGenderDiagnosisType.Adenocarcinoma,
                    T1wSignal = SignalType.Hypo,
                    T2wSignal = SignalType.Hypo,
                    ContrastEnhancementType1 = ContrastEnhancementType.Strong,
                    IsHydrosalpinx = true
                },
                new FemaleGenderFindingPreset
                {
                    FindingType = FemaleGenderFindingType.CorpusUteriMass,
                    DifferentialDiagnosis = FemaleGenderDiagnosisType.Leiomyoma,
                    MarginType = MarginType.Circumscribed,
                    T2wSignal = SignalType.Hypo,
                    DetailsT2wSignalHomogenityType = HomogenityType.Homogeneous,
                    IsCapsuleOrPseudoCapsule = true,
                    IsT2wIncrease = true,
                    IsClawSign = true,
                    IsBridgingVesselSign = true
                },
                new FemaleGenderFindingPreset
                {
                    FindingType = FemaleGenderFindingType.CorpusUteriMass,
                    DifferentialDiagnosis = FemaleGenderDiagnosisType.Leiomyoma,
                    DegenerationType1 = DegenerationType.Cystic,
                    MarginType = MarginType.Circumscribed,
                    T2wSignal = SignalType.Hyper,
                    DetailsT2wSignalHomogenityType = HomogenityType.Heterogeneous,
                    IsCapsuleOrPseudoCapsule = true,
                    IsT2wIncrease = true,
                    HomogenityType = HomogenityType.Heterogeneous,
                    ContrastEnhancementType1 = ContrastEnhancementType.Strong,
                    ContrastEnhancementHomogenityType1 = HomogenityType.Heterogeneous,
                    IsClawSign = true,
                    IsBridgingVesselSign = true
                },
                new FemaleGenderFindingPreset
                {
                    FindingType = FemaleGenderFindingType.CorpusUteriMass,
                    DifferentialDiagnosis = FemaleGenderDiagnosisType.Leiomyoma,
                    DegenerationType1 = DegenerationType.Myxoid,
                    MarginType = MarginType.Circumscribed,
                    T2wSignal = SignalType.Hyper,
                    DetailsT2wSignalHomogenityType = HomogenityType.Heterogeneous,
                    IsCapsuleOrPseudoCapsule = true,
                    IsT2wIncrease = true,
                    HomogenityType = HomogenityType.Heterogeneous,
                    ContrastEnhancementType1 = ContrastEnhancementType.Low,
                    ContrastEnhancementHomogenityType1 = HomogenityType.Heterogeneous,
                    IsClawSign = true,
                    IsBridgingVesselSign = true
                },
                new FemaleGenderFindingPreset
                {
                    FindingType = FemaleGenderFindingType.CorpusUteriMass,
                    DifferentialDiagnosis = FemaleGenderDiagnosisType.Leiomyoma,
                    DegenerationType1 = DegenerationType.Hyaline,
                    MarginType = MarginType.Circumscribed,
                    T2wSignal = SignalType.Hypo,
                    DetailsT2wSignalHomogenityType = HomogenityType.Homogeneous,
                    IsCalcification = true,
                    IsCapsuleOrPseudoCapsule = true,
                    IsT2wIncrease = true,
                    IsClawSign = true,
                    IsBridgingVesselSign = true
                },
                new FemaleGenderFindingPreset
                {
                    FindingType = FemaleGenderFindingType.CorpusUteriMass,
                    DifferentialDiagnosis = FemaleGenderDiagnosisType.Leiomyoma,
                    DegenerationType1 = DegenerationType.Necrotic,
                    MarginType = MarginType.Circumscribed,
                    T2wSignal = SignalType.Hypo,
                    DetailsT2wSignalHomogenityType = HomogenityType.Homogeneous,
                    IsCapsuleOrPseudoCapsule = true,
                    IsT2wIncrease = true,
                    IsClawSign = true,
                    IsBridgingVesselSign = true
                },
                new FemaleGenderFindingPreset
                {
                    FindingType = FemaleGenderFindingType.CorpusUteriMass,
                    DifferentialDiagnosis = FemaleGenderDiagnosisType.Leiomyoma,
                    DegenerationType1 = DegenerationType.RedNecrosis,
                    MarginType = MarginType.Circumscribed,
                    T2wSignal = SignalType.Hypo,
                    DetailsT2wSignalHomogenityType = HomogenityType.Homogeneous,
                    IsCapsuleOrPseudoCapsule = true,
                    IsT2wIncrease = true,
                    IsClawSign = true,
                    IsBridgingVesselSign = true
                },
                new FemaleGenderFindingPreset
                {
                    FindingType = FemaleGenderFindingType.CorpusUteriMass,
                    DifferentialDiagnosis = FemaleGenderDiagnosisType.AdenomyosisFocal,
                    MarginType = MarginType.Circumscribed,
                    T2wSignal = SignalType.Hypo,
                    DetailsT2wSignalHomogenityType = HomogenityType.Homogeneous
                },
                new FemaleGenderFindingPreset
                {
                    FindingType = FemaleGenderFindingType.CorpusUteriMass,
                    DifferentialDiagnosis = FemaleGenderDiagnosisType.AdenomyosisDiffuse,
                    T2wSignal = SignalType.Hypo,
                    TransitionZoneType = TransitionZoneType.Thickening
                },
                new FemaleGenderFindingPreset
                {
                    FindingType = FemaleGenderFindingType.CorpusUteriMass,
                    DifferentialDiagnosis = FemaleGenderDiagnosisType.EndometrialCarcinoma,
                    T2wSignal = SignalType.Hyper,
                    DetailsT2wSignalHomogenityType = HomogenityType.Heterogeneous,
                    ContrastEnhancementType1 = ContrastEnhancementType.Low,
                    IsDiffusionRestriction = true
                },
                new FemaleGenderFindingPreset
                {
                    FindingType = FemaleGenderFindingType.CervixUteriMass,
                    DifferentialDiagnosis = FemaleGenderDiagnosisType.Cervicitis,
                    T2wSignal = SignalType.Hyper,
                    DetailsT2wSignalHomogenityType = HomogenityType.Heterogeneous,
                    IsFocalSignalVoids = true,
                    ContrastEnhancementType1 = ContrastEnhancementType.Strong,
                    ContrastEnhancementHomogenityType1 = HomogenityType.Heterogeneous
                },
                new FemaleGenderFindingPreset
                {
                    FindingType = FemaleGenderFindingType.CervixUteriMass,
                    DifferentialDiagnosis = FemaleGenderDiagnosisType.ZervoxPolyp,
                    T2wSignal = SignalType.Hypo
                },
                new FemaleGenderFindingPreset
                {
                    FindingType = FemaleGenderFindingType.CervixUteriMass,
                    DifferentialDiagnosis = FemaleGenderDiagnosisType.Leiomyoma,
                    MarginType = MarginType.Circumscribed,
                    T2wSignal = SignalType.Hypo,
                    DetailsT2wSignalHomogenityType = HomogenityType.Homogeneous
                },
                new FemaleGenderFindingPreset
                {
                    FindingType = FemaleGenderFindingType.CervixUteriMass,
                    DifferentialDiagnosis = FemaleGenderDiagnosisType.CervicalCarcinoma,
                    T2wSignal = SignalType.Hyper,
                    DetailsT2wSignalHomogenityType = HomogenityType.Heterogeneous,
                    ContrastEnhancementType1 = ContrastEnhancementType.Strong,
                    IsDiffusionRestriction = true
                },
                new FemaleGenderFindingPreset
                {
                    FindingType = FemaleGenderFindingType.CervixUteriMass,
                    DifferentialDiagnosis = FemaleGenderDiagnosisType.EndometrialCarcinoma,
                    T2wSignal = SignalType.Hypo,
                    DetailsT2wSignalHomogenityType = HomogenityType.Heterogeneous,
                    ContrastEnhancementType1 = ContrastEnhancementType.Low,
                    IsDiffusionRestriction = true
                },
                new FemaleGenderFindingPreset
                {
                    FindingType = FemaleGenderFindingType.VaginaMass,
                    DifferentialDiagnosis = FemaleGenderDiagnosisType.Endometriosis,
                    MarginType = MarginType.NonCircumscribed,
                    T2wSignal = SignalType.Iso,
                    DetailsT2wSignalHomogenityType = HomogenityType.Heterogeneous,
                    IsHemorrhage = true
                },
                new FemaleGenderFindingPreset
                {
                    FindingType = FemaleGenderFindingType.VaginaMass,
                    DifferentialDiagnosis = FemaleGenderDiagnosisType.Leiomyoma,
                    MarginType = MarginType.Circumscribed,
                    T2wSignal = SignalType.Hypo,
                    DetailsT2wSignalHomogenityType = HomogenityType.Homogeneous
                },
                new FemaleGenderFindingPreset
                {
                    FindingType = FemaleGenderFindingType.VaginaMass,
                    DifferentialDiagnosis = FemaleGenderDiagnosisType.Metastasis,
                    MarginType = MarginType.NonCircumscribed,
                    T2wSignal = SignalType.Hyper,
                    DetailsT2wSignalHomogenityType = HomogenityType.Homogeneous
                },
                new FemaleGenderFindingPreset
                {
                    FindingType = FemaleGenderFindingType.VaginaMass,
                    DifferentialDiagnosis = FemaleGenderDiagnosisType.SquamousCellCarcinoma,
                    MarginType = MarginType.NonCircumscribed,
                    T2wSignal = SignalType.Hyper,
                    DetailsT2wSignalHomogenityType = HomogenityType.Homogeneous,
                    IsNecrosis = true
                },
                new FemaleGenderFindingPreset
                {
                    FindingType = FemaleGenderFindingType.VaginaMass,
                    DifferentialDiagnosis = FemaleGenderDiagnosisType.Adenocarcinoma,
                    FormType = FormType.Lobulated,
                    T2wSignal = SignalType.Hyper,
                    DetailsT2wSignalHomogenityType = HomogenityType.Homogeneous
                },
                new FemaleGenderFindingPreset
                {
                    FindingType = FemaleGenderFindingType.VaginaMass,
                    DifferentialDiagnosis = FemaleGenderDiagnosisType.Melanoma,
                    T2wSignal = SignalType.Hypo,
                    IsNecrosis = true
                },
                new FemaleGenderFindingPreset
                {
                    FindingType = FemaleGenderFindingType.VaginaMass,
                    DifferentialDiagnosis = FemaleGenderDiagnosisType.Leiomyosarcoma,
                    T2wSignal = SignalType.Hyper,
                    DetailsT2wSignalHomogenityType = HomogenityType.Heterogeneous,
                    IsNecrosis = true,
                    IsHemorrhage = true,
                    HomogenityType = HomogenityType.Heterogeneous
                }
            };
        }
    }
}