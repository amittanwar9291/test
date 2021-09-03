using System;
using System.Collections.Generic;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.SpineMRT.Domain.Enums;
using RadioReport.SpineMRT.Domain.Enums.SoftTissues;
using RadioReport.SpineMRT.Domain.Models;

namespace RadioReport.SpineMRT.Repo.Seeds
{
    internal static class SoftTissuesFindingPresetSeed
    {
        internal static List<SoftTissuesFindingPreset> GetPreconfiguredPresets()
        {
            return new List<SoftTissuesFindingPreset>
            {
                new SoftTissuesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SoftTissuesFindingType.ParaspinalMass,
                    DifferentialDiagnosis = SoftTissuesDiagnosisType.SoftTissueHematoma,
                    IsMoreThanOneLesion = true
                },
                new SoftTissuesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SoftTissuesFindingType.ParaspinalMass,
                    DifferentialDiagnosis = SoftTissuesDiagnosisType.SoftTissueHematomaChronic,
                    SignalT1w = SignalType.Hypo,
                    SignalT2w = SignalType.Hypo,
                    IsMoreThanOneLesion = true
                },
                new SoftTissuesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SoftTissuesFindingType.ParaspinalMass,
                    DifferentialDiagnosis = SoftTissuesDiagnosisType.SoftTissueHematomaSubacute,
                    SignalT1w = SignalType.Hyper,
                    SignalT2w = SignalType.Hypo
                },
                new SoftTissuesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SoftTissuesFindingType.ParaspinalMass,
                    DifferentialDiagnosis = SoftTissuesDiagnosisType.SoftTissueHematomaAcute,
                    SignalT1w = SignalType.Iso,
                    SignalT2w = SignalType.Hyper
                },
                new SoftTissuesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SoftTissuesFindingType.ParaspinalMass,
                    DifferentialDiagnosis = SoftTissuesDiagnosisType.Abscess,
                    SignalT1w = SignalType.Hypo,
                    SignalT2w = SignalType.Hyper,
                    ContrastEnhancementType = ContrastEnhancementType.Powerful,
                    CMEnhancementHomogeneityType = HomogeneityType.RimEnhancement,
                    IsCapsule = true,
                    IsSurroundingInflammatoryReaction = true,
                    IsMoreThanOneLesion = true
                },
                new SoftTissuesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SoftTissuesFindingType.ParaspinalMass,
                    DifferentialDiagnosis = SoftTissuesDiagnosisType.Seroma,
                    SignalT1w = SignalType.Hypo,
                    SignalT2w = SignalType.Hyper,
                    ContrastEnhancementType = ContrastEnhancementType.Weak,
                    CMEnhancementHomogeneityType = HomogeneityType.RimEnhancement,
                    IsCapsule = true,
                    IsMirrorFormation = true,
                    IsMoreThanOneLesion = true
                },
                new SoftTissuesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SoftTissuesFindingType.ParaspinalMass,
                    DifferentialDiagnosis = SoftTissuesDiagnosisType.Pseudomeningocele,
                    IsIsointenseToCerebrospinalFluid = true,
                    IsCalcification = true,
                    IsCommunicationWithIntraduralSpace = true, 
                    IsMoreThanOneLesion = true
                },
                new SoftTissuesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SoftTissuesFindingType.IntraduralExtramedullaryMass,
                    DifferentialDiagnosis = SoftTissuesDiagnosisType.Schwannoma,
                    SignalT1w = SignalType.Iso,
                    SignalT2w = SignalType.Hyper,
                    IsHourglassShape = true,
                    ContrastEnhancementType = ContrastEnhancementType.Powerful,
                    CMEnhancementHomogeneityType = HomogeneityType.Inhomogeneous,
                    IsMoreThanOneLesion = true
                },
                new SoftTissuesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SoftTissuesFindingType.IntraduralExtramedullaryMass,
                    DifferentialDiagnosis = SoftTissuesDiagnosisType.Neurofibroma,
                    SignalT1w = SignalType.Iso,
                    SignalT2w = SignalType.Hyper,
                    ContrastEnhancementType = ContrastEnhancementType.Weak,
                    CMEnhancementHomogeneityType = HomogeneityType.Inhomogeneous,
                    IsSepta = true,
                    IsTargetSign = true,
                    IsMoreThanOneLesion = true,
                    NeurofibromatosisType =  NeurofibromatosisType.Type1,
                    IsSuspicionOf = true
                },
                new SoftTissuesFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SoftTissuesFindingType.IntraduralExtramedullaryMass,
                    DifferentialDiagnosis = SoftTissuesDiagnosisType.MalignantPeripheralNerveSheathTumor,
                    SignalT1w = SignalType.Iso,
                    SignalT2w = SignalType.Hyper,
                    ContrastEnhancementType = ContrastEnhancementType.Powerful,
                    IsSpindleShaped = true,
                    IsThickeningOfTheNerve = true,
                    IsNecrosis = true,
                    IsHemorrhage = true,
                    HomogeneityType = HomogeneityType.Inhomogeneous
                }
            };
        }
    }
}
