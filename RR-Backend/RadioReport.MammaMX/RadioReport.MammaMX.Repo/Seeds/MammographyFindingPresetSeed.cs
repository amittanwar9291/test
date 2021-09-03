using RadioReport.MammaMX.Domain.Enums.MammographyFinding;
using RadioReport.MammaMX.Domain.Models;
using System.Collections.Generic;

namespace RadioReport.MammaMX.Repo.Seeds
{
    internal static class MammographyFindingPresetSeed
    {
        internal static List<MammographyFindingPreset> GetPreconfiguredPreset()
        {
            return new List<MammographyFindingPreset>()
            {
                new MammographyFindingPreset {
                    FindingType = MammographyFindingType.Mass,
                    MassKnownDiagnosisType = DiagnosisType.Fibroadenoma,
                    FormType = FormType.Oval,
                    MarginType = MarginType.Circumscribed
                },
                new MammographyFindingPreset {
                    FindingType = MammographyFindingType.Mass,
                    MassKnownDiagnosisType = DiagnosisType.IntramammaryLymphNode,
                    FormType = FormType.Oval,
                    MarginType = MarginType.Circumscribed
                },
                new MammographyFindingPreset {
                    FindingType = MammographyFindingType.Mass,
                    MassKnownDiagnosisType = DiagnosisType.BenignCyst,
                    FormType = FormType.Round,
                    MarginType = MarginType.Circumscribed
                },
                new MammographyFindingPreset {
                    FindingType = MammographyFindingType.Mass,
                    MassKnownDiagnosisType = DiagnosisType.RadialScar,
                    FormType = FormType.Irregular,
                    MarginType = MarginType.Spiculated
                },
                new MammographyFindingPreset {
                    FindingType = MammographyFindingType.Mass,
                    MassKnownDiagnosisType = DiagnosisType.BenignPhyllodesTumor,
                    MarginType = MarginType.Circumscribed
                },
                new MammographyFindingPreset {
                    FindingType = MammographyFindingType.Mass,
                    MassKnownDiagnosisType = DiagnosisType.Lipoma,
                    MarginType = MarginType.Circumscribed,
                    DensityType = DensityType.FatEquivalent
                },
                new MammographyFindingPreset {
                    FindingType = MammographyFindingType.Mass,
                    MassKnownDiagnosisType = DiagnosisType.Hemangioma,
                    MarginType = MarginType.Microlobulated,
                    DensityType = DensityType.HigherThanSurroundingParenchyma
                },
                new MammographyFindingPreset {
                    FindingType = MammographyFindingType.Mass,
                    MassKnownDiagnosisType = DiagnosisType.Hamartoma,
                    MarginType = MarginType.Circumscribed,
                    DensityType = DensityType.FatEquivalent
                },
                new MammographyFindingPreset {
                    FindingType = MammographyFindingType.Mass,
                    MassKnownDiagnosisType = DiagnosisType.OilCyst,
                    FormType = FormType.Oval,
                    MarginType = MarginType.Circumscribed
                }
            };
        }
    }
}
