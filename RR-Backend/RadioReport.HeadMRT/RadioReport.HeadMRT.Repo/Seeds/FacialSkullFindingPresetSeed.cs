using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.HeadMRT.Domain.Enums;
using RadioReport.HeadMRT.Domain.Enums.FacialSkull;
using RadioReport.HeadMRT.Domain.Models;
using System.Collections.Generic;

namespace RadioReport.HeadMRT.Repo.Seeds
{
    internal static class FacialSkullFindingPresetSeed
    {
        internal static List<FacialSkullFindingPreset> GetPreconfiguredPresets()
        {
            return new List<FacialSkullFindingPreset>
            {
                // SkullBase
                new FacialSkullFindingPreset
                {
                    FindingType = FacialSkullFindingType.SkullBase,
                    DifferentialDiagnosis1LocalizationType = FacialSkullDiagnosisType.Meningioma,
                    DifferentialDiagnosis = FacialSkullDiagnosisType.Meningioma.ToString(),
                    MarginType = MarginType.Circumscribed,
                    T1wSignalType = SignalTypeExtended.LowHypo,
                    IsSignalVoid = true,
                    SignalVoidType = SignalVoidType.Calcification,
                    IsCysts = true,
                    IsNecroses = true,
                    ContrastEnhancementType = ContrastQuantitativeType.Significant,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Homogeneous
                },
                new FacialSkullFindingPreset
                {
                    FindingType = FacialSkullFindingType.SkullBase,
                    DifferentialDiagnosis1LocalizationType = FacialSkullDiagnosisType.Schwannoma,
                    DifferentialDiagnosis = FacialSkullDiagnosisType.Schwannoma.ToString(),
                    MarginType = MarginType.Circumscribed,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    ShapeType = ShapeType.Lobulated,
                    T2wSignalType = SignalTypeExtended.Hyper,
                    FlairSignalType = SignalTypeExtended.Hyper,
                    ContrastEnhancementType = ContrastQuantitativeType.Significant,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Heterogeneous
                },
                new FacialSkullFindingPreset
                {
                    FindingType = FacialSkullFindingType.SkullBase,
                    DifferentialDiagnosis1LocalizationType = FacialSkullDiagnosisType.Plasmocytoma,
                    DifferentialDiagnosis = FacialSkullDiagnosisType.Plasmocytoma.ToString(),
                    T1wSignalType = SignalTypeExtended.LowHypo,
                    T2wSignalType = SignalTypeExtended.Iso,
                    FlairSignalType = SignalTypeExtended.LowHyper,
                    IsLocalOsteodestruction = true,
                    ContrastEnhancementType = ContrastQuantitativeType.Weak,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Homogeneous
                },
                new FacialSkullFindingPreset
                {
                    FindingType = FacialSkullFindingType.SkullBase,
                    DifferentialDiagnosis1LocalizationType = FacialSkullDiagnosisType.ClivalChordoma,
                    DifferentialDiagnosis = FacialSkullDiagnosisType.ClivalChordoma.ToString(),
                    IsMiddleCranialFossa = true,
                    IsSphenoidBoneMiddle = true,
                    IsPosteriorFossa = true,
                    IsTemporalBonePosterior = true,
                    T2wSignalType = SignalTypeExtended.Hyper,
                    IsSignalVoid = true,
                    SignalVoidType = SignalVoidType.Blood,
                    IsCompressionBrainstem = true,
                    ContrastEnhancementType = ContrastQuantitativeType.Weak
                },
                new FacialSkullFindingPreset
                {
                    FindingType = FacialSkullFindingType.SkullBase,
                    DifferentialDiagnosis1LocalizationType = FacialSkullDiagnosisType.GlomusJugulareMalignat,
                    DifferentialDiagnosis = FacialSkullDiagnosisType.GlomusJugulareMalignat.ToString(),
                    IsPosteriorFossa = true,
                    IsForamenMagnum = true,
                    T2wSignalType = SignalTypeExtended.Hyper,
                    IsPepperAndSaltSign = true,
                    ContrastEnhancementType = ContrastQuantitativeType.Significant
                },
                
                // TemporalBone
                new FacialSkullFindingPreset
                {
                    FindingType = FacialSkullFindingType.TemporalBone,
                    DifferentialDiagnosis1LocalizationType = FacialSkullDiagnosisType.AcousticNeuroma,
                    DifferentialDiagnosis = FacialSkullDiagnosisType.AcousticNeuroma.ToString(),
                    MarginType = MarginType.Circumscribed,
                    T1wSignalType = SignalTypeExtended.Iso,
                    IsSignalVoid = true,
                    SignalVoidType = SignalVoidType.Blood,
                    ContrastEnhancementType = ContrastQuantitativeType.Significant
                },
                new FacialSkullFindingPreset
                {
                    FindingType = FacialSkullFindingType.TemporalBone,
                    DifferentialDiagnosis1LocalizationType = FacialSkullDiagnosisType.GlomusTympanicum,
                    DifferentialDiagnosis = FacialSkullDiagnosisType.GlomusTympanicum.ToString(),
                    IsMiddleEarTympanum = true,
                    IsEpitympanon = true,
                    IsMesotympanum = true,
                    IsHypotympanon =true,
                    T2wSignalType = SignalTypeExtended.Hypo,
                    ContrastEnhancementType = ContrastQuantitativeType.Significant
                },
                new FacialSkullFindingPreset
                {
                    FindingType = FacialSkullFindingType.TemporalBone,
                    DifferentialDiagnosis1LocalizationType = FacialSkullDiagnosisType.Epidermoid,
                    DifferentialDiagnosis = FacialSkullDiagnosisType.Epidermoid.ToString(),
                    T1wSignalType = SignalTypeExtended.Iso,
                    T2wSignalType = SignalTypeExtended.Hyper,                    
                    IsDiffusionRestriction = true,
                    IsLocalOsteodestruction = true
                },
                new FacialSkullFindingPreset
                {
                    FindingType = FacialSkullFindingType.TemporalBone,
                    DifferentialDiagnosis1LocalizationType = FacialSkullDiagnosisType.OtitisMedia, 
                    DifferentialDiagnosis = FacialSkullDiagnosisType.OtitisMedia.ToString(),
                    IsMiddleEarTympanum = true,
                    IsEpitympanon = true,
                    IsMesotympanum = true,
                    IsHypotympanon = true,
                    T2wSignalType =SignalTypeExtended.Hyper,
                    IsAbscess = true,  
                },
                new FacialSkullFindingPreset
                {
                    FindingType = FacialSkullFindingType.TemporalBone,
                    DifferentialDiagnosis1LocalizationType = FacialSkullDiagnosisType.Labyrinthitis,
                    DifferentialDiagnosis = FacialSkullDiagnosisType.Labyrinthitis.ToString(),
                    ContrastEnhancementType = ContrastQuantitativeType.Weak,                   
                },
                new FacialSkullFindingPreset
                {
                    FindingType = FacialSkullFindingType.TemporalBone,
                    DifferentialDiagnosis1LocalizationType = FacialSkullDiagnosisType.Otosclerosis,
                    DifferentialDiagnosis = FacialSkullDiagnosisType.Otosclerosis.ToString(),
                    IsInnerEarLabyrinth = true,
                    T2wSignalType = SignalTypeExtended.LowHyper,
                    ContrastEnhancementType = ContrastQuantitativeType.Weak,
                },
                new FacialSkullFindingPreset
                {
                    FindingType = FacialSkullFindingType.TemporalBone,
                    DifferentialDiagnosis1LocalizationType = FacialSkullDiagnosisType.Cholesteatoma,
                    DifferentialDiagnosis = FacialSkullDiagnosisType.Cholesteatoma.ToString(),
                    IsMiddleEarTympanum = true,
                    IsEpitympanon = true,
                    IsMesotympanum = true,
                    IsHypotympanon = true,
                    IsMastoid = true,
                    IsAntrum = true,
                    IsLocalOsteodestruction = true,
                    ContrastEnhancementType = ContrastQuantitativeType.Significant,
                    ContrastDistributionType = ContrastDistributionType.Peripheral

                },
                
                // Orbita
                new FacialSkullFindingPreset
                {
                    FindingType = FacialSkullFindingType.Orbita,
                    OrbitaDiagnosis1LocalizationType = OrbitaDiagnosisType.OpticNerveMeningioma,
                    DifferentialDiagnosis = OrbitaDiagnosisType.OpticNerveMeningioma.ToString(),
                    T1wSignalType = SignalTypeExtended.Iso,
                    IsCysts = true,
                    IsTubular = true,
                    ContrastEnhancementType = ContrastQuantitativeType.Significant
                },
                new FacialSkullFindingPreset
                {
                    FindingType = FacialSkullFindingType.Orbita,
                    OrbitaDiagnosis1LocalizationType = OrbitaDiagnosisType.OpticNerveGlioma,
                    DifferentialDiagnosis = OrbitaDiagnosisType.OpticNerveGlioma.ToString(),
                    IsOpticNerveIICompartment = true,
                    T1wSignalType = SignalTypeExtended.Iso,
                    T2wSignalType = SignalTypeExtended.LowHyper,
                    IsCysts = true,
                    ContrastEnhancementType = ContrastQuantitativeType.Weak
                },
                new FacialSkullFindingPreset
                {
                    FindingType = FacialSkullFindingType.Orbita,
                    OrbitaDiagnosis1LocalizationType = OrbitaDiagnosisType.MelanomaOfTheChoroid,
                    DifferentialDiagnosis = OrbitaDiagnosisType.MelanomaOfTheChoroid.ToString(),
                    T1wSignalType = SignalTypeExtended.Hyper,
                    T2wSignalType = SignalTypeExtended.Hypo,
                    ContrastEnhancementType = ContrastQuantitativeType.Weak
                },
                new FacialSkullFindingPreset
                {
                    FindingType = FacialSkullFindingType.Orbita,
                    OrbitaDiagnosis1LocalizationType = OrbitaDiagnosisType.Retinoblastoma,
                    DifferentialDiagnosis = OrbitaDiagnosisType.Retinoblastoma.ToString(),
                    T1wSignalType = SignalTypeExtended.LowHyper,
                    T2wSignalType = SignalTypeExtended.Hypo,
                    IsSignalVoid = true,
                    SignalVoidType = SignalVoidType.Calcification,
                    ContrastEnhancementType = ContrastQuantitativeType.Weak
                },
                new FacialSkullFindingPreset
                {
                    FindingType = FacialSkullFindingType.Orbita,
                    OrbitaDiagnosis1LocalizationType = OrbitaDiagnosisType.EndocrineOrbitopathy,
                    DifferentialDiagnosis = OrbitaDiagnosisType.EndocrineOrbitopathy.ToString(),
                    IsRectusSuperiorMuscle = true,
                    IsRectusInferiorMuscle = true,
                    IsRectusLateralisMuscle = true,
                    IsRectusMedialisMuscle = true,
                    IsObliquusSuperiorMuscle = true,
                    T1wSignalType = SignalTypeExtended.Iso,
                    IsMuscleBellyThickening = true,
                    IsPerifocalEdema = true,
                },
                new FacialSkullFindingPreset
                {
                    FindingType = FacialSkullFindingType.Orbita,
                    OrbitaDiagnosis1LocalizationType = OrbitaDiagnosisType.SubperiostealAbscess,
                    DifferentialDiagnosis = OrbitaDiagnosisType.SubperiostealAbscess.ToString(),
                    T1wSignalType = SignalTypeExtended.Hypo,
                    T2wSignalType = SignalTypeExtended.Hyper,
                    IsDiffusionRestriction = true,
                    ContrastEnhancementType = ContrastQuantitativeType.Significant,
                    ContrastDistributionType = ContrastDistributionType.Peripheral
                },
                new FacialSkullFindingPreset
                {
                    FindingType = FacialSkullFindingType.Orbita,
                    OrbitaDiagnosis1LocalizationType = OrbitaDiagnosisType.OrbitalPseudotumor,
                    DifferentialDiagnosis = OrbitaDiagnosisType.OrbitalPseudotumor.ToString(),
                    MarginType = MarginType.NonCircumscribed,
                    T1wSignalType = SignalTypeExtended.Hypo,
                    T2wSignalType = SignalTypeExtended.LowHyper,
                    ContrastEnhancementType = ContrastQuantitativeType.Significant,
                },
                new FacialSkullFindingPreset
                {
                    FindingType = FacialSkullFindingType.Orbita,
                    OrbitaDiagnosis1LocalizationType = OrbitaDiagnosisType.OpticNeuritis,
                    DifferentialDiagnosis = OrbitaDiagnosisType.OpticNeuritis.ToString(),
                    IsOpticNerveIICompartment = true,
                    T2wSignalType = SignalTypeExtended.Hyper,
                    ContrastEnhancementType = ContrastQuantitativeType.Significant,
                },
                new FacialSkullFindingPreset
                {
                    FindingType = FacialSkullFindingType.Orbita,
                    OrbitaDiagnosis1LocalizationType = OrbitaDiagnosisType.OrbitalHemangioma,
                    DifferentialDiagnosis = OrbitaDiagnosisType.OrbitalHemangioma.ToString(),
                    T1wSignalType = SignalTypeExtended.Hyper,
                    T2wSignalType = SignalTypeExtended.Hyper,
                    IsDisplacement = true,
                    ContrastEnhancementType = ContrastQuantitativeType.Significant,
                },

                // ParanasalSinuses
                new FacialSkullFindingPreset
                {
                    FindingType = FacialSkullFindingType.ParanasalSinuses,
                    ParanasalSinusesDiagnosis1LocalizationType = ParanasalSinusesDiagnosisType.InvertedPapilloma,
                    DifferentialDiagnosis = ParanasalSinusesDiagnosisType.InvertedPapilloma.ToString(),
                    T1wSignalType = SignalTypeExtended.LowHyper,
                    T2wSignalType = SignalTypeExtended.Hyper,
                    IsNecroses = true,
                    ContrastEnhancementType = ContrastQuantitativeType.Weak
                },
                new FacialSkullFindingPreset
                {
                    FindingType = FacialSkullFindingType.ParanasalSinuses,
                    ParanasalSinusesDiagnosis1LocalizationType = ParanasalSinusesDiagnosisType.Osteoma,
                    DifferentialDiagnosis = ParanasalSinusesDiagnosisType.Osteoma.ToString(),
                    T1wSignalType = SignalTypeExtended.Hypo,
                    T2wSignalType = SignalTypeExtended.Hypo,
                    ContrastEnhancementType = ContrastQuantitativeType.No
                },
                new FacialSkullFindingPreset
                {
                    FindingType = FacialSkullFindingType.ParanasalSinuses,
                    ParanasalSinusesDiagnosis1LocalizationType = ParanasalSinusesDiagnosisType.JuvenileNasopharyngealAngiofibroma,
                    DifferentialDiagnosis = ParanasalSinusesDiagnosisType.JuvenileNasopharyngealAngiofibroma.ToString(),
                    IsEethmoidAirCells = true,
                    IsMaxillarySinus = true,
                    IsSphenoidSinus = true,
                    IsFossaPterygopalatina = true,
                    IsInfratemporalFossa = true,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    T1wSignalType = SignalTypeExtended.Iso,
                    T2wSignalType = SignalTypeExtended.LowHyper,
                    IsSignalVoids = true,
                    IsInfiltration = true,
                    IsLocalOsteodestruction = true,
                    ContrastEnhancementType = ContrastQuantitativeType.Significant,
                },
                new FacialSkullFindingPreset
                {
                    FindingType = FacialSkullFindingType.ParanasalSinuses,
                    ParanasalSinusesDiagnosis1LocalizationType = ParanasalSinusesDiagnosisType.SquamousCellCarcinoma,
                    DifferentialDiagnosis = ParanasalSinusesDiagnosisType.SquamousCellCarcinoma.ToString(),
                    T1wSignalType = SignalTypeExtended.Iso,
                    T2wSignalType = SignalTypeExtended.LowHyper,
                    IsDiffusionRestriction = true,
                    IsNecroses = true,
                    IsLocalOsteodestruction = true,
                    ContrastEnhancementType = ContrastQuantitativeType.Weak,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Heterogeneous
                },
                new FacialSkullFindingPreset
                {
                    FindingType = FacialSkullFindingType.ParanasalSinuses,
                    ParanasalSinusesDiagnosis1LocalizationType = ParanasalSinusesDiagnosisType.Lymphoma,
                    DifferentialDiagnosis = ParanasalSinusesDiagnosisType.Lymphoma.ToString(),
                    T1wSignalType = SignalTypeExtended.Iso,
                    T2wSignalType = SignalTypeExtended.LowHyper,
                    IsDiffusionRestriction = true,
                    IsLocalOsteodestruction = true,
                    ContrastEnhancementType = ContrastQuantitativeType.Weak,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Homogeneous,
                    HomogeneityType = HomogeneityType.Homogeneous
                },
                new FacialSkullFindingPreset
                {
                    FindingType = FacialSkullFindingType.ParanasalSinuses,
                    ParanasalSinusesDiagnosis1LocalizationType = ParanasalSinusesDiagnosisType.AcuteSinusitis,
                    DifferentialDiagnosis = ParanasalSinusesDiagnosisType.AcuteSinusitis.ToString(),
                    IsMirrorFormation = true,
                    IsDiffuseWideningOfTheMucosa = true,
                    IsRetentionCysts = true,
                    IsMucosalPolyps = true,
                    ContrastEnhancementType = ContrastQuantitativeType.Significant
                },
                new FacialSkullFindingPreset
                {
                    FindingType = FacialSkullFindingType.ParanasalSinuses,
                    ParanasalSinusesDiagnosis1LocalizationType = ParanasalSinusesDiagnosisType.Mucocele,
                    DifferentialDiagnosis = ParanasalSinusesDiagnosisType.Mucocele.ToString(),
                    IsEethmoidAirCells = true,
                    IsFrontalSinus = true,
                    T1wSignalType = SignalTypeExtended.Hypo,
                    T2wSignalType = SignalTypeExtended.Hyper,
                    IsAdjacentStructuralChangesDueToPressure = true,
                    IsThinningOfTheBonyBoundary = true,
                    ContrastEnhancementType = ContrastQuantitativeType.Weak,
                    ContrastDistributionType = ContrastDistributionType.Peripheral
                },

                // OralCavity
                new FacialSkullFindingPreset
                {
                    FindingType = FacialSkullFindingType.OralCavity,
                    OralCavityDiagnosis1LocalizationType = OralCavityDiagnosisType.CarcinomaOfTheTongue,
                    DifferentialDiagnosis = OralCavityDiagnosisType.CarcinomaOfTheTongue.ToString(),
                    T1wSignalType = SignalTypeExtended.Hypo,
                    T2wSignalType = SignalTypeExtended.Hyper,
                    ContrastEnhancementType = ContrastQuantitativeType.Weak
                },
                new FacialSkullFindingPreset
                {
                    FindingType = FacialSkullFindingType.OralCavity,
                    OralCavityDiagnosis1LocalizationType = OralCavityDiagnosisType.CarcinomaOfTheFloorOfTheMouth,
                    DifferentialDiagnosis = OralCavityDiagnosisType.CarcinomaOfTheFloorOfTheMouth.ToString(),
                    T1wSignalType = SignalTypeExtended.Iso,
                    T2wSignalType = SignalTypeExtended.Hyper,
                    IsNecroses = true,
                    IsInfiltration = true,
                    ContrastEnhancementType = ContrastQuantitativeType.Weak,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Homogeneous,
                },
                new FacialSkullFindingPreset
                {
                    FindingType = FacialSkullFindingType.OralCavity,
                    OralCavityDiagnosis1LocalizationType = OralCavityDiagnosisType.OralCavityAbscess,
                    DifferentialDiagnosis = OralCavityDiagnosisType.OralCavityAbscess.ToString(),
                    IsOralMucosalSpaceOms = true,
                    IsSublingualSpaceSls = true,
                    IsSubmandibularSpaceSms = true,
                    IsRootOfTheTongueRot = true,
                    T1wSignalType = SignalTypeExtended.Hypo,
                    T2wSignalType = SignalTypeExtended.Hyper,
                    IsDiffusionRestriction = true,
                    IsDiffuseWideningOfTheMucosa = true,
                    IsAbscess = true,
                    IsOsteomyelitis = true,
                    IsOsteomyelitisMandible = true,
                    ContrastEnhancementType = ContrastQuantitativeType.Weak,
                    ContrastDistributionType = ContrastDistributionType.Peripheral
                },
                new FacialSkullFindingPreset
                {
                    FindingType = FacialSkullFindingType.OralCavity,
                    OralCavityDiagnosis1LocalizationType = OralCavityDiagnosisType.ThyroglossalDuctCyst,
                    DifferentialDiagnosis = OralCavityDiagnosisType.ThyroglossalDuctCyst.ToString(),
                    HomogeneityType = HomogeneityType.Homogeneous,
                    T1wSignalType = SignalTypeExtended.Hypo,
                    T2wSignalType = SignalTypeExtended.Hyper,
                    ContrastEnhancementType = ContrastQuantitativeType.No
                },
                new FacialSkullFindingPreset
                {
                    FindingType = FacialSkullFindingType.OralCavity,
                    OralCavityDiagnosis1LocalizationType = OralCavityDiagnosisType.FibrousDysplasia,
                    DifferentialDiagnosis = OralCavityDiagnosisType.FibrousDysplasia.ToString(),
                    MarginType = MarginType.Circumscribed,                   
                    T1wSignalType = SignalTypeExtended.LowHypo,
                    T2wSignalType = SignalTypeExtended.LowHyper,
                    ContrastEnhancementType = ContrastQuantitativeType.Significant
                },

                // SalivaryGlands
                new FacialSkullFindingPreset
                {
                    FindingType = FacialSkullFindingType.SalivaryGlands,
                    SalivaryGlandsDiagnosis1LocalizationType = SalivaryGlandsDiagnosisType.WarthinTumour,
                    DifferentialDiagnosis = SalivaryGlandsDiagnosisType.WarthinTumour.ToString(),
                    IsParotidGland = true,
                    MarginType = MarginType.Circumscribed,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    ShapeType = ShapeType.Round,
                    T1wSignalType = SignalTypeExtended.Hypo,
                    T2wSignalType = SignalTypeExtended.LowHyper,
                    ContrastEnhancementType = ContrastQuantitativeType.Weak,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Heterogeneous
                },
                new FacialSkullFindingPreset
                {
                    FindingType = FacialSkullFindingType.SalivaryGlands,
                    SalivaryGlandsDiagnosis1LocalizationType = SalivaryGlandsDiagnosisType.Ranula,
                    DifferentialDiagnosis = SalivaryGlandsDiagnosisType.Ranula.ToString(),
                    MarginType = MarginType.Circumscribed,
                    T1wSignalType = SignalTypeExtended.Hypo,
                    T2wSignalType = SignalTypeExtended.Hyper,
                    ContrastEnhancementType = ContrastQuantitativeType.Weak,
                    ContrastDistributionType = ContrastDistributionType.Peripheral
                },
                new FacialSkullFindingPreset
                {
                    FindingType = FacialSkullFindingType.SalivaryGlands,
                    SalivaryGlandsDiagnosis1LocalizationType = SalivaryGlandsDiagnosisType.SjorgensSyndrome,
                    DifferentialDiagnosis = SalivaryGlandsDiagnosisType.SjorgensSyndrome.ToString(),
                    T1wSignalType = SignalTypeExtended.Hypo,
                    T2wSignalType = SignalTypeExtended.Hyper,
                    IsCysts = true,
                    IsCalcification = true,
                    ContrastEnhancementType = ContrastQuantitativeType.Weak,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Heterogeneous
                },
                new FacialSkullFindingPreset
                {
                    FindingType = FacialSkullFindingType.SalivaryGlands,
                    SalivaryGlandsDiagnosis1LocalizationType = SalivaryGlandsDiagnosisType.PleomorphicAdenoma,
                    DifferentialDiagnosis = SalivaryGlandsDiagnosisType.PleomorphicAdenoma.ToString(),
                    IsParotidGland = true,
                    IsSuperficialLobe = true,
                    ShapeType = ShapeType.Round,
                    T1wSignalType = SignalTypeExtended.Hypo,
                    T2wSignalType = SignalTypeExtended.Hyper,
                    IsNecroses = true,
                    IsCalcification = true,
                    IsHemorrhage = true,
                    ContrastEnhancementType = ContrastQuantitativeType.Weak,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Heterogeneous
                },
                new FacialSkullFindingPreset
                {
                    FindingType = FacialSkullFindingType.SalivaryGlands,
                    SalivaryGlandsDiagnosis1LocalizationType = SalivaryGlandsDiagnosisType.SalivaryGlandAbscess,
                    DifferentialDiagnosis = SalivaryGlandsDiagnosisType.SalivaryGlandAbscess.ToString(),
                    T1wSignalType = SignalTypeExtended.Hypo,
                    T2wSignalType = SignalTypeExtended.Hyper,
                    IsDiffusionRestriction = true,
                    IsCapsule = true,
                    ContrastEnhancementType = ContrastQuantitativeType.Significant,
                    ContrastDistributionType = ContrastDistributionType.Peripheral
                },
                new FacialSkullFindingPreset
                {
                    FindingType = FacialSkullFindingType.SalivaryGlands,
                    SalivaryGlandsDiagnosis1LocalizationType = SalivaryGlandsDiagnosisType.LymphomaOfTheSalivaryGlands,
                    DifferentialDiagnosis = SalivaryGlandsDiagnosisType.LymphomaOfTheSalivaryGlands.ToString(),
                    HomogeneityType = HomogeneityType.Homogeneous,
                    T1wSignalType = SignalTypeExtended.Iso,
                    T2wSignalType = SignalTypeExtended.LowHyper,
                    ContrastEnhancementType = ContrastQuantitativeType.Significant,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Homogeneous
                },
                new FacialSkullFindingPreset
                {
                    FindingType = FacialSkullFindingType.SalivaryGlands,
                    SalivaryGlandsDiagnosis1LocalizationType = SalivaryGlandsDiagnosisType.SalivaryGlandCarcinoma,
                    DifferentialDiagnosis = SalivaryGlandsDiagnosisType.SalivaryGlandCarcinoma.ToString(),
                    HomogeneityType = HomogeneityType.Homogeneous,
                    T1wSignalType = SignalTypeExtended.Iso,
                    T2wSignalType = SignalTypeExtended.LowHyper,
                    IsPerineuralSpread = true,
                    ContrastEnhancementType = ContrastQuantitativeType.Significant,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Homogeneous
                },

                // Skull
                new FacialSkullFindingPreset
                {
                    FindingType = FacialSkullFindingType.Skull,
                    DifferentialDiagnosis1LocalizationType = FacialSkullDiagnosisType.GiantCellTumourBenign,
                    DifferentialDiagnosis = FacialSkullDiagnosisType.GiantCellTumourBenign.ToString(),
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    T1wSignalType = SignalTypeExtended.LowHypo,
                    T2wSignalType = SignalTypeExtended.Hyper,
                    ContrastEnhancementType = ContrastQuantitativeType.Significant,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Heterogeneous
                },
                new FacialSkullFindingPreset
                {
                    FindingType = FacialSkullFindingType.Skull,
                    DifferentialDiagnosis1LocalizationType = FacialSkullDiagnosisType.FibrousDysplasia,
                    DifferentialDiagnosis = FacialSkullDiagnosisType.FibrousDysplasia.ToString(),
                    MarginType = MarginType.Circumscribed,
                    T1wSignalType = SignalTypeExtended.LowHypo,
                    T2wSignalType = SignalTypeExtended.LowHyper,
                    ContrastEnhancementType = ContrastQuantitativeType.Significant
                },
                new FacialSkullFindingPreset
                {
                    FindingType = FacialSkullFindingType.Skull,
                    DifferentialDiagnosis1LocalizationType = FacialSkullDiagnosisType.Meningioma,
                    DifferentialDiagnosis = FacialSkullDiagnosisType.Meningioma.ToString(),
                    MarginType = MarginType.Circumscribed,
                    T1wSignalType = SignalTypeExtended.LowHypo,
                    IsSignalVoid = true,
                    SignalVoidType = SignalVoidType.Calcification,
                    IsCysts = true,
                    IsNecroses = true,
                    ContrastEnhancementType = ContrastQuantitativeType.Significant,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Homogeneous
                },
                new FacialSkullFindingPreset
                {
                    FindingType = FacialSkullFindingType.Skull,
                    DifferentialDiagnosis1LocalizationType = FacialSkullDiagnosisType.Plasmocytoma,
                    DifferentialDiagnosis = FacialSkullDiagnosisType.Plasmocytoma.ToString(),
                    T1wSignalType = SignalTypeExtended.LowHypo,
                    T2wSignalType = SignalTypeExtended.Iso,
                    FlairSignalType = SignalTypeExtended.LowHyper,
                    IsLocalOsteodestruction = true,
                    ContrastEnhancementType = ContrastQuantitativeType.Weak,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Homogeneous
                },
                new FacialSkullFindingPreset
                {
                    FindingType = FacialSkullFindingType.Skull,
                    DifferentialDiagnosis1LocalizationType = FacialSkullDiagnosisType.EosinophilicGranuloma,
                    DifferentialDiagnosis = FacialSkullDiagnosisType.EosinophilicGranuloma.ToString(),
                    T1wSignalType = SignalTypeExtended.Hypo,
                    T2wSignalType = SignalTypeExtended.Hyper,
                    IsPerifocalEdema = true,
                    IsLocalOsteodestruction = true,
                    ContrastEnhancementType = ContrastQuantitativeType.Significant
                }
            };
        }
    }
}
