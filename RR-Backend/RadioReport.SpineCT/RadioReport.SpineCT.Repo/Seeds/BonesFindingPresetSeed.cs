using RadioReport.SpineCT.Domain.Enums.Bones;
using RadioReport.SpineCT.Domain.Models;
using System.Collections.Generic;

namespace RadioReport.SpineCT.Repo.Seeds
{
    internal static class BonesFindingPresetSeed
    {
        internal static List<BonesFindingPreset> GetPreconfiguredPresets()
        {
            return new List<BonesFindingPreset>
            {
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSpine,
                    BonesDiagnosis1 = BonesDiagnosisType.EwingsSarcoma,
                    MarginType = MarginType.NonCircumscribed,
                    CortexType = CortexType.Destruction,
                    IsInfiltrationOfAdjacentSoftTissues = true,
                    IsPeriostealReaction = true,
                    IsSunburst = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSpine,
                    BonesDiagnosis1 = BonesDiagnosisType.AneurysmaticBoneCyst,
                    MarginType = MarginType.Circumscribed,
                    IsSepta = true,
                    IsLiquidLevel = true,
                    IsOsteolytic = true,
                    IsMarginalSclerosis = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSpine,
                    BonesDiagnosis1 = BonesDiagnosisType.Hemangioma,
                    MarginType = MarginType.Circumscribed,
                    CortexType = CortexType.Intact,
                    FormType = FormType.Round,
                    IsPolkaDotSign = true,
                    IsExtensiveVertebralHemangioma = true
                },
                new BonesFindingPreset
                {
                    FindingType = BonesFindingType.MassSpine,
                    BonesDiagnosis1 = BonesDiagnosisType.BoneIslandOrEnostosis,
                    FormType = FormType.Oval,
                    IsSclerosis = true
                }
            };
        }
    }
}
