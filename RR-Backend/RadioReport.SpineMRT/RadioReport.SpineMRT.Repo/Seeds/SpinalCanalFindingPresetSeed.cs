using System;
using System.Collections.Generic;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.SpineMRT.Domain.Enums.SpinalCanal;
using RadioReport.SpineMRT.Domain.Models;

namespace RadioReport.SpineMRT.Repo.Seeds
{
    internal static class SpinalCanalFindingPresetSeed
    {
        internal static List<SpinalCanalFindingPreset> GetPreconfiguredPresets()
        {
            return new List<SpinalCanalFindingPreset>
            {
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.MassEffect,
                    SpinalCanalLocation = SpinalCanalLocations.Intramedullary,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.Ependymoma,
                    LocalizationInTheSpinalCordType = LocalizationInTheSpinalCordType.Central,
                    MarginType = MarginType.Sharp,
                    T1wSignal = SignalType.Iso,
                    IsHemorrhage = true,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Homogeneous,
                    IsSwelling = true,
                    IsCystSyrinx = true,
                    IsUsuringOrRemodellingSpinalCanal = true
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.MassEffect,
                    SpinalCanalLocation = SpinalCanalLocations.Intramedullary,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.Astrocytoma,
                    LocalizationInTheSpinalCordType = LocalizationInTheSpinalCordType.Eccentric,
                    MarginType = MarginType.Unsharp,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Heterogeneous,
                    IsSwelling = true
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.MassEffect,
                    SpinalCanalLocation = SpinalCanalLocations.Intramedullary,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.Ganglioglioma,
                    LocalizationInTheSpinalCordType = LocalizationInTheSpinalCordType.Eccentric,
                    IsT1wHeterogeneousSignalIntensity = true,
                    IsCalcification = true,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Heterogeneous,
                    IsUsuringOrRemodellingSpinalCanal = true
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.MassEffect,
                    SpinalCanalLocation = SpinalCanalLocations.Intramedullary,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.Metastasis,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
                    IsSwelling = true,
                    IsEdema = true
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.MassEffect,
                    SpinalCanalLocation = SpinalCanalLocations.Intramedullary,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.Lymphoma,
                    T2wSignal = SignalType.Hyper,
                    ContrastEnhancementType = ContrastEnhancementType.Strong
                },
                new SpinalCanalFindingPreset
                {   Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.MassEffect,
                    SpinalCanalLocation = SpinalCanalLocations.Intramedullary,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.Syringohydromyelia,
                    ContrastEnhancementType = ContrastEnhancementType.No,
                    IsCentralCavityFormation = true,
                    IsFlowVoids = true
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.MassEffect,
                    SpinalCanalLocation = SpinalCanalLocations.Intramedullary,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.Hemangioblastoma,
                    LocalizationInTheSpinalCordType = LocalizationInTheSpinalCordType.Dorsal,
                    T2wSignal = SignalType.Hyper,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Homogeneous,
                    IsCystSyrinx = true,
                    IsFlowVoids = true,
                    IsNumerousVessels = true
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.MassEffect,
                    SpinalCanalLocation = SpinalCanalLocations.Intramedullary,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.Lipoma,
                    MarginType = MarginType.Sharp,
                    T1wSignal = SignalType.Hyper,
                    T2wSignal = SignalType.Hyper
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.MassEffect,
                    SpinalCanalLocation = SpinalCanalLocations.Intramedullary,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.Paraganglioma,
                    MarginType = MarginType.Sharp,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Heterogeneous,
                    IsFlowVoids = true
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.MassEffect,
                    SpinalCanalLocation = SpinalCanalLocations.Intramedullary,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.EpidermoidCyst,
                    MarginType = MarginType.Sharp,
                    T1wSignal = SignalType.Hypo,
                    T2wSignal = SignalType.Hyper
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.MassEffect,
                    SpinalCanalLocation = SpinalCanalLocations.Intramedullary,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.Cavernoma,
                    MarginType = MarginType.Sharp,
                    IsT2wHypointenseRim = true,
                    IsHemorrhage = true,
                    IsT1wHeterogeneousSignalIntensity = true
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.MassEffect,
                    SpinalCanalLocation = SpinalCanalLocations.Intramedullary,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.AVMalformation,
                    T2wSignal = SignalType.Hyper,
                    IsSwelling = true,
                    IsSerpiginousVascularStructures = true,
                    IsFlowVoids = true
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.MassEffect,
                    SpinalCanalLocation = SpinalCanalLocations.Intramedullary,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.HaematomyeliaChronic,
                    T1wSignal = SignalType.Hypo,
                    T2wSignal = SignalType.Hypo,
                    IsHypointenseAfterFatSaturation = true
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.MassEffect,
                    SpinalCanalLocation = SpinalCanalLocations.Intramedullary,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.HematomyeliaSubacute,
                    T1wSignal = SignalType.Hyper,
                    T2wSignal = SignalType.Hypo,
                    IsHypointenseAfterFatSaturation = true
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.MassEffect,
                    SpinalCanalLocation = SpinalCanalLocations.Intramedullary,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.AcuteHematomyelitis,
                    T1wSignal = SignalType.Iso,
                    T2wSignal = SignalType.Hyper,
                    IsHypointenseAfterFatSaturation = true
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.MassEffect,
                    SpinalCanalLocation = SpinalCanalLocations.Intramedullary,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.Abscess,
                    MarginType = MarginType.Sharp,
                    T1wSignal = SignalType.Hypo,
                    T2wSignal = SignalType.Hyper,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
                    ContrastEnhancementHomogeneityType = HomogeneityType.RimEnhancement
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.MassEffect,
                    SpinalCanalLocation = SpinalCanalLocations.Extramedullary,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.Metastasis,
                    T1wSignal = SignalType.Iso,
                    T2wSignal = SignalType.Iso,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Homogeneous,
                    IsLeptomeningealSpread = true
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.MassEffect,
                    SpinalCanalLocation = SpinalCanalLocations.Extramedullary,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.SchwanomaOrNeurinoma,
                    IsIntraAndExtradural = true,
                    MarginType = MarginType.Sharp,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Homogeneous,
                    IsDisplacement = true,
                    IsCompression = true,
                    IsScaloppingOrThinnedPedicle = true,
                    IsExtendedNeuralForamen = true
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.MassEffect,
                    SpinalCanalLocation = SpinalCanalLocations.Extramedullary,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.Neurofibroma,
                    T1wSignal = SignalType.Iso,
                    IsSTIROrTIRMHyperintense = true,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Heterogeneous,
                    IsMoreThanOneLesion = true
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.MassEffect,
                    SpinalCanalLocation = SpinalCanalLocations.Extramedullary,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.Meningioma,
                    MarginType = MarginType.Sharp,
                    T1wSignal = SignalType.Iso,
                    T2wSignal = SignalType.Iso,
                    IsCalcification = true,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Homogeneous
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.MassEffect,
                    SpinalCanalLocation = SpinalCanalLocations.Extramedullary,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.Paraganglioma,
                    MarginType = MarginType.Sharp,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Heterogeneous,
                    IsFlowVoids = true
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.MassEffect,
                    SpinalCanalLocation = SpinalCanalLocations.Extramedullary,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.ArachnoidCyst,
                    T1wSignal = SignalType.Hypo,
                    T2wSignal = SignalType.Hyper,
                    IsLiquorisointense = true,
                    IsDisplacement = true
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.MassEffect,
                    SpinalCanalLocation = SpinalCanalLocations.Extramedullary,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.EpidermoidCyst,
                    MarginType = MarginType.Sharp,
                    T1wSignal = SignalType.Hypo,
                    T2wSignal = SignalType.Hyper
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.MassEffect,
                    SpinalCanalLocation = SpinalCanalLocations.Extramedullary,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.Cavernoma,
                    MarginType = MarginType.Sharp,
                    IsT2wHypointenseRim = true,
                    IsT1wHeterogeneousSignalIntensity = true,
                    IsHemorrhage = true
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.MassEffect,
                    SpinalCanalLocation = SpinalCanalLocations.Extramedullary,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.AVMalformation,
                    T2wSignal = SignalType.Hyper,
                    IsSwelling = true,
                    IsSerpiginousVascularStructures = true,
                    IsFlowVoids = true
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.MassEffect,
                    SpinalCanalLocation = SpinalCanalLocations.Extramedullary,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.SpinalSubarachnoidHemorrhageChronicBloodDegradationProducts,
                    T1wSignal = SignalType.Hypo,
                    T2wSignal = SignalType.Hypo,
                    IsHypointenseAfterFatSaturation = true
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.MassEffect,
                    SpinalCanalLocation = SpinalCanalLocations.Extramedullary,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.SpinalSubarachnoidHemorrhageSubacuteMethemoglobin,
                    T1wSignal = SignalType.Hyper,
                    T2wSignal = SignalType.Hypo,
                    IsHypointenseAfterFatSaturation = true
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.MassEffect,
                    SpinalCanalLocation = SpinalCanalLocations.Extramedullary,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.SpinalSubarachnoidHemorrhageAcute,
                    T1wSignal = SignalType.Iso,
                    T2wSignal = SignalType.Hyper,
                    IsHypointenseAfterFatSaturation = true
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.MassEffect,
                    SpinalCanalLocation = SpinalCanalLocations.Extramedullary,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.Abscess,
                    MarginType = MarginType.Sharp,
                    T1wSignal = SignalType.Hypo,
                    T2wSignal = SignalType.Hyper,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
                    ContrastEnhancementHomogeneityType = HomogeneityType.RimEnhancement
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.MassEffect,
                    SpinalCanalLocation = SpinalCanalLocations.Extramedullary,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.SpinalArachnoiditis,
                    IsClottedNerveRoots = true,
                    IsEmptyDuralSac = true,
                    IsSeptationInTheSubarachnoidSpace = true
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.MassEffect,
                    SpinalCanalLocation = SpinalCanalLocations.Epidural,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.EpiduralLipomatosis,
                    IsHypointenseAfterFatSaturation = true,
                    ContrastEnhancementType = ContrastEnhancementType.No,
                    IsWideningEpiduralFatTissueMoreThan7Mm = true,
                    IsDeformationOfTheDuralSac = true
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.MassEffect,
                    SpinalCanalLocation = SpinalCanalLocations.Epidural,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.EpiduralHematomaChronicBloodDegradationProducts,
                    T1wSignal = SignalType.Hypo,
                    T2wSignal = SignalType.Hypo,
                    IsHypointenseAfterFatSaturation = true
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.MassEffect,
                    SpinalCanalLocation = SpinalCanalLocations.Epidural,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.EpiduralHematomaSubacuteMethemoglobin,
                    T1wSignal = SignalType.Hyper,
                    T2wSignal = SignalType.Hypo,
                    IsHypointenseAfterFatSaturation = true
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.MassEffect,
                    SpinalCanalLocation = SpinalCanalLocations.Epidural,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.EpiduralHematomaAcute,
                    T1wSignal = SignalType.Iso,
                    T2wSignal = SignalType.Hyper,
                    IsHypointenseAfterFatSaturation = true
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.MassEffect,
                    SpinalCanalLocation = SpinalCanalLocations.Epidural,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.AVMalformation,
                    T2wSignal = SignalType.Hyper,
                    IsSwelling = true,
                    IsSerpiginousVascularStructures = true,
                    IsFlowVoids = true
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.MassEffect,
                    SpinalCanalLocation = SpinalCanalLocations.Epidural,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.Abscess,
                    MarginType = MarginType.Sharp,
                    T1wSignal = SignalType.Hypo,
                    T2wSignal = SignalType.Hyper,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
                    ContrastEnhancementHomogeneityType = HomogeneityType.RimEnhancement
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.MassEffect,
                    SpinalCanalLocation = SpinalCanalLocations.Epidural,
                    SpinalCanalDifferentialDiagnosisType =SpinalCanalDifferentialDiagnosisType.Spondylodiscitis,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Epidural,
                    IsEpiduralReaction = true
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.MassEffect,
                    SpinalCanalLocation = SpinalCanalLocations.Extradural,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.Metastasis,
                    T1wSignal = SignalType.Iso,
                    T2wSignal = SignalType.Iso,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Homogeneous,
                    IsDeformationOfTheDuralSac = true
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.MassEffect,
                    SpinalCanalLocation = SpinalCanalLocations.Extradural,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.SchwanomaOrNeurinoma,
                    IsIntraAndExtradural = true,
                    MarginType = MarginType.Sharp,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Homogeneous,
                    IsDisplacement = true,
                    IsDeformationOfTheDuralSac = true,
                    IsScaloppingOrThinnedPedicle = true,
                    IsExtendedNeuralForamen = true
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.MassEffect,
                    SpinalCanalLocation = SpinalCanalLocations.Extradural,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.Neurofibroma,
                    T1wSignal = SignalType.Iso,
                    IsSTIROrTIRMHyperintense = true,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Homogeneous,
                    IsMoreThanOneLesion = true
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.MassEffect,
                    SpinalCanalLocation = SpinalCanalLocations.Extradural,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.Meningioma,
                    MarginType = MarginType.Sharp,
                    T1wSignal = SignalType.Iso,
                    T2wSignal = SignalType.Iso,
                    IsCalcification = true,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Homogeneous
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.MassEffect,
                    SpinalCanalLocation = SpinalCanalLocations.Extradural,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.PerineuralCystOrSacralMeningoceleOrTarlovCyst,
                    MarginType = MarginType.Sharp,
                    T1wSignal = SignalType.Hypo,
                    T2wSignal = SignalType.Hyper,
                    IsLiquorisointense = true,
                    IsMoreThanOneLesion = true
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.MassEffect,
                    SpinalCanalLocation = SpinalCanalLocations.Extradural,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.Abscess,
                    MarginType = MarginType.Sharp,
                    T1wSignal = SignalType.Hypo,
                    T2wSignal = SignalType.Hyper,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
                    ContrastEnhancementHomogeneityType = HomogeneityType.RimEnhancement
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.MassEffect,
                    SpinalCanalLocation = SpinalCanalLocations.Extradural,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.Spondylodiscitis,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
                    ContrastEnhancementHomogeneityType = HomogeneityType.Heterogeneous
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.NoMassEffect,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.MultipleSclerosis,
                    T2wSignal = SignalType.Hyper,
                    QuantityTransverseType = QuantityTransverseType.LessThan50PercentOfTheCrossSection
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.NoMassEffect,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.AcuteTransverseMyelitis,
                    T2wSignal = SignalType.Hyper,
                    QuantityTransverseType = QuantityTransverseType.MoreThan50PercentOfTheCrossSection,
                    IsSwelling = true
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.NoMassEffect,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.GuillainBarreSyndrome,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
                    IsAnteriorRadix = true,
                    IsPial = true,
                    PialType = PialType.NonNodular
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.NoMassEffect,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.Meningitis,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
                    IsPial = true,
                    IsSubarachnoid = true,
                    IsEpidural = true,
                    PialType = PialType.Nodular
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.NoMassEffect,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.MyelitisNonAutoimmune,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
                    IsIntramedullaryFocal = true
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.NoMassEffect,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.SpinalArachnoiditis,
                    IsClottedNerveRoots = true,
                    IsEmptyDuralSac = true,
                    IsSeptationInTheSubarachnoidSpace = true
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.NoMassEffect,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.Infarction,
                    LocalizationInTheSpinalCordType = LocalizationInTheSpinalCordType.Anterior
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.NoMassEffect,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.AVMalformation,
                    IsSwelling = true,
                    IsSerpiginousVascularStructures = true,
                    IsFlowVoids = true
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.NoMassEffect,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.WallersDegeneration,
                    T2wSignal = SignalType.Hyper,
                    LocalizationInTheSpinalCordType = LocalizationInTheSpinalCordType.Lateral,
                    IsAberrantCourse = true
                },
                new SpinalCanalFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SpinalCanalFindingType.NoMassEffect,
                    SpinalCanalDifferentialDiagnosisType = SpinalCanalDifferentialDiagnosisType.MetastasisLeptomeningeal,
                    ContrastEnhancementType = ContrastEnhancementType.Strong,
                    IsPial = true,
                    IsEpidural = true,
                    PialType = PialType.Nodular
                }
            };
        }
    }
}
