using RadioReport.MammaMX.Domain.Enums.UltrasoundFinding;
using RadioReport.MammaMX.Domain.Models;
using System.Collections.Generic;

namespace RadioReport.MammaMX.Repo.Seeds
{
    internal static class UltrasoundFindingPresetSeed
    {
        internal static List<UltrasoundFindingPreset> GetPreconfiguredPreset()
        {
            return new List<UltrasoundFindingPreset>()
            {
                new UltrasoundFindingPreset {
                    FindingType = UltrasoundFindingType.Mass,
                    DifferentialDiagnosis = MassDiagnosisType.IntramammaryLymphNode,
                    FormType = FormType.Oval,
                    MarginEchodelimitationType = MarginEchodelimitationType.Circumscribed
                },
                new UltrasoundFindingPreset {
                    FindingType = UltrasoundFindingType.Mass,
                    DifferentialDiagnosis = MassDiagnosisType.SimpleCyst,
                    FormType = FormType.Round,
                    MarginEchodelimitationType = MarginEchodelimitationType.Circumscribed,
                    EchoContentType = EchoContentType.Anechoic,
                    ExitEchodorsalSoundPatternsType = ExitEchodorsalSoundPatternsType.SoundEnhancement
                },                
                new UltrasoundFindingPreset {
                    FindingType = UltrasoundFindingType.Mass,
                    DifferentialDiagnosis = MassDiagnosisType.ClusteredMicrocysts,
                    MarginEchodelimitationType = MarginEchodelimitationType.Circumscribed,
                },    
                new UltrasoundFindingPreset {
                    FindingType = UltrasoundFindingType.Mass,
                    DifferentialDiagnosis = MassDiagnosisType.FocalLesionInOrOnTheSkin,
                    IsPartiallyWithinTheSkin = true
                },
                new UltrasoundFindingPreset {
                    FindingType = UltrasoundFindingType.Mass,
                    DifferentialDiagnosis = MassDiagnosisType.MondorsDisease,
                    EnvironmentalReactionType = EnvironmentalReactionType.ThrombosedVein
                },
                new UltrasoundFindingPreset {
                    FindingType = UltrasoundFindingType.Mass,
                    DifferentialDiagnosis = MassDiagnosisType.PostoperativeFluidCollection,
                    FormType = FormType.Irregular,
                    MarginEchodelimitationType = MarginEchodelimitationType.Circumscribed
                },
                new UltrasoundFindingPreset {
                    FindingType = UltrasoundFindingType.Mass,
                    DifferentialDiagnosis = MassDiagnosisType.AVM,
                    VascularDrawingLesionType = VascularDrawingLesionType.VesselsInsideTheLesion
                },
                new UltrasoundFindingPreset {
                    FindingType = UltrasoundFindingType.Mass,
                    DifferentialDiagnosis = MassDiagnosisType.ComplicatedCyst,
                    FormType = FormType.Round,
                    MarginEchodelimitationType = MarginEchodelimitationType.Circumscribed,
                    EchoContentType = EchoContentType.Hypoechoic,
                    ExitEchodorsalSoundPatternsType = ExitEchodorsalSoundPatternsType.SoundEnhancement
                }
            };
        }
    }
}
