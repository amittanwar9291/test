using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.HipMRT.Domain.Enums;
using RadioReport.HipMRT.Domain.Enums.CapsuleAndLigaments;
using RadioReport.HipMRT.Domain.Models.CapsuleAndLigaments;
using System;
using System.Collections.Generic;


namespace RadioReport.HipMRT.Repo.Seeds
{
    internal static class CapsuleAndLigamentsFindingPresetSeed
    {
        internal static List<CapsuleAndLigamentsFindingPreset> GetPreconfiguredPresets()
        {
            return new List<CapsuleAndLigamentsFindingPreset>
            {
                new CapsuleAndLigamentsFindingPreset
                {
                    SynoviaDifferentialDiagnosis = SynoviaDifferentialDiagnosis.SynovialChondromatosis,
                    T2wSignal = SignalTypeExtended.Hyper,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.No,
                    IsSynovialnodulus = true

                },
                new CapsuleAndLigamentsFindingPreset
                {
                    SynoviaDifferentialDiagnosis = SynoviaDifferentialDiagnosis.VillonodularSynovitis,
                    T1wSignal = SignalTypeExtended.Hypo,
                    T2wSignal = SignalTypeExtended.Hypo,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Low,
                    IsSusceptibilityArtifacts = true,
                    IsBloomingArtifact = true,
                    IsSynovialnodulus = true,
                    IsHaemarthrosis = true,
                    IsBonyErosionsSynovialInsertion = true
                },
                new CapsuleAndLigamentsFindingPreset
                {
                    SynoviaDifferentialDiagnosis = SynoviaDifferentialDiagnosis.HaemochromatosisArthropathy,
                    T1wSignal = SignalTypeExtended.Hypo,
                    T2wSignal = SignalTypeExtended.Hypo,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Low,
                    IsSynovialProliferations = true,
                    IsHaemarthrosis = true,
                    IsArticularEffusion = true
                },
                new CapsuleAndLigamentsFindingPreset
                {
                    SynoviaDifferentialDiagnosis = SynoviaDifferentialDiagnosis.CrystalArthropathyGout,
                    T1wSignal = SignalTypeExtended.Iso,
                    T2wSignal = SignalTypeExtended.Hyper,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Pronounced,
                    IsArticularEffusion = true
                },
                new CapsuleAndLigamentsFindingPreset
                {
                    Id = Guid.NewGuid(),
                    SynoviaDifferentialDiagnosis = SynoviaDifferentialDiagnosis.CrystalArthropathyHydroxyapatite,
                    IsPerifocalSoftTissueEdema = true,
                    IsPeriarticularCalcification = true
                },
                new CapsuleAndLigamentsFindingPreset
                {
                    SynoviaDifferentialDiagnosis = SynoviaDifferentialDiagnosis.SynovialHemangioma,
                    T1wSignal = SignalTypeExtended.Hypo,
                    T2wSignal = SignalTypeExtended.Hyper,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Pronounced,
                    ShapeType = ShapeType.Multilobulated,
                    IsHaemarthrosis = true
                },
                new CapsuleAndLigamentsFindingPreset
                {
                    SynoviaDifferentialDiagnosis = SynoviaDifferentialDiagnosis.SynovialSarcoma,
                    T1wSignal = SignalTypeExtended.Iso,
                    T2wSignal = SignalTypeExtended.Hyper,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Pronounced,
                    ShapeType = ShapeType.Multilobulated,
                    IsNecrosis = true
                }
            };
        }
    }
}
