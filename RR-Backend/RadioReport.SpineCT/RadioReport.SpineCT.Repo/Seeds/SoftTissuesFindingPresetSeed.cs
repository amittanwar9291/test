using RadioReport.SpineCT.Domain.Enums.SoftTissues;
using RadioReport.SpineCT.Domain.Models;
using System.Collections.Generic;

namespace RadioReport.SpineCT.Repo.Seeds
{
    internal static class SoftTissuesFindingPresetSeed
    {
        internal static List<SoftTissuesFindingPreset> GetPreconfiguredPresets()
        {
            return new List<SoftTissuesFindingPreset>
            {
                new SoftTissuesFindingPreset
                {
                    FindingType = SoftTissuesFindingType.ParaspinalMass,
                    DifferentialDiagnosis = SoftTissuesDiagnosisType.Abscess,
                    MarginType = MarginType.Circumscribed,
                    IsCapsuleOrMembrane = true,
                    IsSurroundinginflammatoryReaction = true,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Significant,
                    ContrastEnhancementDistributionType = ContrastEnhancementDistributionType.Peripheral
                },
                new SoftTissuesFindingPreset
                {
                    FindingType = SoftTissuesFindingType.ParaspinalMass,
                    DifferentialDiagnosis = SoftTissuesDiagnosisType.Seroma,
                    MarginType = MarginType.Circumscribed,
                    IsCapsuleOrMembrane = true,
                    IsFluidLevel = true,
                    ContrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeType.Weak,
                    ContrastEnhancementDistributionType = ContrastEnhancementDistributionType.Peripheral
                },
                new SoftTissuesFindingPreset
                {
                    FindingType = SoftTissuesFindingType.ParaspinalMass,
                    DifferentialDiagnosis = SoftTissuesDiagnosisType.Pseudomeningocele,
                    MarginType = MarginType.Circumscribed,
                    IsCalcification = true,
                    IsCommunicationWithTheIntraduralSpace = true
                }
            };
        }
    }
}
