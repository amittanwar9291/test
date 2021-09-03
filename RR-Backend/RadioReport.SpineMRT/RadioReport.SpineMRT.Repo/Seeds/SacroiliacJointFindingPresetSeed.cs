using System;
using System.Collections.Generic;
using RadioReport.SpineMRT.Domain.Enums;
using RadioReport.SpineMRT.Domain.Models;

namespace RadioReport.SpineMRT.Repo.Seeds
{
    internal static class SacroiliacJointFindingPresetSeed
    {
        internal static List<SacroiliacJointFindingPreset> GetPreconfiguredPresets()
        {
            return new List<SacroiliacJointFindingPreset>
            {
                new SacroiliacJointFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SacroiliacJointFindingType.Degeneration,
                    IKnowDifferentialDiagnosis01 = SacroiliacJointDiagnosisType.InactiveSpondyloarthritisWithStructuralChanges,
                    IsBoneBridges = true,
                    IsAnkylosis = true,
                    IsErosions = true,
                    IsSubchondralCysts = true,
                    IsSubchondralSclerosis = true,
                    IsFatDeposition = true,
                    SclerosisType = SclerosisType.MoreThan5mm
                },
                new SacroiliacJointFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SacroiliacJointFindingType.Degeneration,
                    IKnowDifferentialDiagnosis01 = SacroiliacJointDiagnosisType.NonspecificDegenerativeChanges,
                    IsOsteophytes = true,
                    IsAnkylosis = true,
                    JointSurfaceSubType = JointSurfaceSubType.Periarticular,
                    IsSurfaceNarrowing = true,
                    IsVacuumPhenomenon = true,
                    IsSubchondralSclerosis = true,
                    SclerosisType = SclerosisType.CloseToJoint
                },
                new SacroiliacJointFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SacroiliacJointFindingType.Degeneration,
                    IKnowDifferentialDiagnosis01 = SacroiliacJointDiagnosisType.OsteitisCondensans,
                    IsSubchondralSclerosis = true,
                    SclerosisType = SclerosisType.MoreThan5mm
                },
                new SacroiliacJointFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SacroiliacJointFindingType.Degeneration,
                    IKnowDifferentialDiagnosis01 = SacroiliacJointDiagnosisType.Osteoarthritis,
                    IsOsteophytes = true
                },
                new SacroiliacJointFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SacroiliacJointFindingType.Inflammation,
                    IKnowDifferentialDiagnosis01 = SacroiliacJointDiagnosisType.SepticArthritis,
                    IsCmEnhancement = true,
                    IsJointSpaceWidening = true,
                    IsSoftTissue = true,
                    IsAbscess = true
                },
                new SacroiliacJointFindingPreset
                {
                    Id = Guid.NewGuid(),
                    FindingType = SacroiliacJointFindingType.Inflammation,
                    IKnowDifferentialDiagnosis01 = SacroiliacJointDiagnosisType.ActiveSpondyloarthritis,
                    IsEnthesitis = true,
                    IsSynovitis = true,
                    IsCmEnhancement = true,
                    IsJointEffusion = true,
                    EntheitisType = SacroiliacJointEntheitisType.Symetric,
                    IsBoneMarrow = true
                }
            };
        }
    }
}
