using RadioReport.ShoulderMRT.Domain.Enums;
using RadioReport.ShoulderMRT.Domain.Models;
using System;
using System.Collections.Generic;

namespace RadioReport.ShoulderMRT.Repo.Seeds
{
    internal static class LabrumAndRibbonsFindingPresetSeed
    {
        internal static List<LabrumAndRibbonsFindingPreset> GetPreconfiguredPresets()
        {
            return new List<LabrumAndRibbonsFindingPreset>()
            {
                new LabrumAndRibbonsFindingPreset
                {
                    Id = Guid.NewGuid(),
                    ExtensionLabrumPathologyDiagnosis1 = DiagnosisType.SLAPLesionTypeI,
                    LabrumMorphologyResultType = LabrumMorphologyResultType.Fraying
                },
                new LabrumAndRibbonsFindingPreset
                {
                    Id = Guid.NewGuid(),
                    ExtensionLabrumPathologyDiagnosis1 = DiagnosisType.SLAPLesionTypeII,
                    LabrumMorphologyResultType = LabrumMorphologyResultType.Detachment
                },
                new LabrumAndRibbonsFindingPreset
                {
                    Id = Guid.NewGuid(),
                    ExtensionLabrumPathologyDiagnosis1 = DiagnosisType.SLAPLesionTypeIII,
                    LabrumMorphologyResultType = LabrumMorphologyResultType.BucketHandleTear
                },
                new LabrumAndRibbonsFindingPreset
                {
                    Id = Guid.NewGuid(),
                    ExtensionLabrumPathologyDiagnosis1 = DiagnosisType.SLAPLesionTypeIV,
                    LabrumMorphologyResultType = LabrumMorphologyResultType.BucketHandleTear,
                    IsExtensionToLongBicepsTendon = true,
                    IsDislocationIntoJointSpace = true,
                    IsLongitudinalSplitting = true
                },
                new LabrumAndRibbonsFindingPreset
                {
                    Id = Guid.NewGuid(),
                    ExtensionLabrumPathologyDiagnosis1 = DiagnosisType.SLAPLesionTypeV,
                    LabrumMorphologyResultType = LabrumMorphologyResultType.Detachment,
                    DetailsType = DetailsType.BonyAvulsionWithCapsularLigamentLesion
                },
                new LabrumAndRibbonsFindingPreset
                {
                    Id = Guid.NewGuid(),
                    ExtensionLabrumPathologyDiagnosis1 = DiagnosisType.SLAPLesionTypeVI,
                    LabrumMorphologyResultType = LabrumMorphologyResultType.DetachmentWithFlap
                },
                new LabrumAndRibbonsFindingPreset
                {
                    Id = Guid.NewGuid(),
                    ExtensionLabrumPathologyDiagnosis1 = DiagnosisType.SLAPLesionTypeX,
                    LabrumMorphologyResultType = LabrumMorphologyResultType.Detachment,
                    DetailsType = DetailsType.BonyAvulsionWithCapsularLigamentLesion
                },
                new LabrumAndRibbonsFindingPreset
                {
                    Id = Guid.NewGuid(),
                    ExtensionLabrumPathologyDiagnosis1 = DiagnosisType.SublabralRecess,
                    LabrumMorphologyResultType = LabrumMorphologyResultType.Recessus
                },
                new LabrumAndRibbonsFindingPreset
                {
                    Id = Guid.NewGuid(),
                    ExtensionLabrumPathologyDiagnosis1 = DiagnosisType.SublabralForamen,
                    LabrumMorphologyResultType = LabrumMorphologyResultType.Foramen
                },
                new LabrumAndRibbonsFindingPreset
                {
                    Id = Guid.NewGuid(),
                    ExtensionLabrumPathologyDiagnosis1 = DiagnosisType.BufordComplex,
                    LabrumMorphologyResultType = LabrumMorphologyResultType.Absent
                },
                new LabrumAndRibbonsFindingPreset
                {
                    Id = Guid.NewGuid(),
                    ExtensionLabrumPathologyDiagnosis1 = DiagnosisType.BankartLesion,
                    LabrumMorphologyResultType = LabrumMorphologyResultType.Detachment,
                    DetailsType = DetailsType.BonyAvulsionWithCapsularLigamentLesion
                },
                new LabrumAndRibbonsFindingPreset
                {
                    Id = Guid.NewGuid(),
                    ExtensionLabrumPathologyDiagnosis1 = DiagnosisType.PerthesLesion,
                    LabrumMorphologyResultType = LabrumMorphologyResultType.Detachment,
                    DetailsType = DetailsType.PeriostalDetachment
                },
                new LabrumAndRibbonsFindingPreset
                {
                    Id = Guid.NewGuid(),
                    ExtensionLabrumPathologyDiagnosis1 = DiagnosisType.ALPSALesion,
                    LabrumMorphologyResultType = LabrumMorphologyResultType.DetachmentWithRotation,
                    DetailsType = DetailsType.PeriostalDetachment
                },
                new LabrumAndRibbonsFindingPreset
                {
                    Id = Guid.NewGuid(),
                    ExtensionLabrumPathologyDiagnosis1 = DiagnosisType.GLADLesion,
                    LabrumMorphologyResultType = LabrumMorphologyResultType.Detachment,
                    DetailsType = DetailsType.TearingShearingOfCartilage,
                },
                new LabrumAndRibbonsFindingPreset
                {
                    Id = Guid.NewGuid(),
                    ExtensionLabrumPathologyDiagnosis1 = DiagnosisType.ReverseBankartLesion,
                    LabrumMorphologyResultType = LabrumMorphologyResultType.Detachment,
                    DetailsType = DetailsType.BonyAvulsionWithCapsularLigamentLesion
                },
                new LabrumAndRibbonsFindingPreset
                {
                    Id = Guid.NewGuid(),
                    ExtensionLabrumPathologyDiagnosis1 = DiagnosisType.ReverseParthesLesion,
                    LabrumMorphologyResultType = LabrumMorphologyResultType.Detachment,
                    DetailsType = DetailsType.PeriostalDetachment
                },
                new LabrumAndRibbonsFindingPreset
                {
                    Id = Guid.NewGuid(),
                    ExtensionLabrumPathologyDiagnosis1 = DiagnosisType.POLPSALesion,
                    LabrumMorphologyResultType = LabrumMorphologyResultType.DetachmentWithRotation,
                    DetailsType = DetailsType.PeriostalDetachment
                },
                new LabrumAndRibbonsFindingPreset
                {
                    Id = Guid.NewGuid(),
                    ExtensionLabrumPathologyDiagnosis1 = DiagnosisType.PosteriorGLADLesion,
                    LabrumMorphologyResultType = LabrumMorphologyResultType.Detachment,
                    DetailsType = DetailsType.TearingShearingOfCartilage
                }
            };
        }
    }
}
