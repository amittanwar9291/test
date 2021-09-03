using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.MammaMRT.Domain.Enums;
using RadioReport.MammaMRT.Domain.Models;
using System.Collections.Generic;

namespace RadioReport.MammaMRT.Repo.Seeds
{
    internal static class FindingTemplateSeed
    {
        internal static List<DiagnosisFindingTemplate> GetPreconfiguredFindingTemplates()
        {
            return new List<DiagnosisFindingTemplate>
            {
                new DiagnosisFindingTemplate
                {
                    DiagnosisType = DiagnosisType.FibrocysticChanges,
                    FormType = FormType.Round,
                    DemarcationType = DemarcationType.Circumscribed,
                    SignalT1w = SignalTypeExtended.LowHypo,
                    SignalT2w = SignalTypeExtended.LowHyper,
                    EnhancementType = EnhancementType.No,
                    KMDynamicInitialType = KMDynamicsInitialType.NotIncluded,
                    KMDynamicDelayedType = KMDynamicsDelayedType.NotIncluded
                },
                new DiagnosisFindingTemplate
                {
                    DiagnosisType = DiagnosisType.SimpleCyst,
                    FormType = FormType.Round,
                    DemarcationType = DemarcationType.Circumscribed,
                    SignalT1w = SignalTypeExtended.Hypo,
                    SignalT2w = SignalTypeExtended.Hyper,
                    EnhancementType = EnhancementType.No,
                    KMDynamicInitialType = KMDynamicsInitialType.NotIncluded,
                    KMDynamicDelayedType = KMDynamicsDelayedType.NotIncluded
                },
                new DiagnosisFindingTemplate
                {
                    DiagnosisType = DiagnosisType.Fibroadenoma,
                    FormType = FormType.Oval,
                    DemarcationType = DemarcationType.Circumscribed,
                    SignalT1w = SignalTypeExtended.Iso,
                    SignalT2w = SignalTypeExtended.LowHyper,
                    EnhancementType = EnhancementType.Homogeneous,
                    KMDynamicInitialType = KMDynamicsInitialType.Slowly,
                    KMDynamicDelayedType = KMDynamicsDelayedType.Progressive
                },
                new DiagnosisFindingTemplate
                {
                    DiagnosisType = DiagnosisType.LipoidNecrosis,
                    SignalT1w = SignalTypeExtended.Iso,
                    SignalT2w = SignalTypeExtended.LowHyper,
                    KMDynamicInitialType = KMDynamicsInitialType.Medium,
                    KMDynamicDelayedType = KMDynamicsDelayedType.Plateau
                },
                new DiagnosisFindingTemplate
                {
                    DiagnosisType = DiagnosisType.OilCyst,
                    FormType = FormType.Round,
                    DemarcationType = DemarcationType.Circumscribed,
                    SignalT1w = SignalTypeExtended.LowHyper,
                    EnhancementType = EnhancementType.No,
                    KMDynamicInitialType = KMDynamicsInitialType.NotIncluded,
                    KMDynamicDelayedType = KMDynamicsDelayedType.NotIncluded
                },
                new DiagnosisFindingTemplate
                {
                    DiagnosisType = DiagnosisType.BreastParenchymaNonSpecific,
                    SignalT1w = SignalTypeExtended.Iso,
                    SignalT2w = SignalTypeExtended.Iso,
                    EnhancementType = EnhancementType.Homogeneous,
                    KMDynamicInitialType = KMDynamicsInitialType.Slowly,
                    KMDynamicDelayedType = KMDynamicsDelayedType.Progressive
                },
                new DiagnosisFindingTemplate
                {
                    DiagnosisType = DiagnosisType.IntramammaryLymphNodes,
                    FormType = FormType.Oval,
                    DemarcationType = DemarcationType.Circumscribed,
                    SignalT1w = SignalTypeExtended.Iso,
                    SignalT2w = SignalTypeExtended.LowHyper,
                    EnhancementType = EnhancementType.Homogeneous,
                    KMDynamicInitialType = KMDynamicsInitialType.Slowly,
                    KMDynamicDelayedType = KMDynamicsDelayedType.Progressive
                },
                new DiagnosisFindingTemplate
                {
                    DiagnosisType = DiagnosisType.InSituCarcinomaDCIS,
                    FormType = FormType.Irregular,
                    DemarcationType = DemarcationType.Irregular,
                    SignalT1w = SignalTypeExtended.Iso,
                    SignalT2w = SignalTypeExtended.Iso,
                    EnhancementType = EnhancementType.Heterogeneous,
                    KMDynamicInitialType = KMDynamicsInitialType.Medium,
                    KMDynamicDelayedType = KMDynamicsDelayedType.Plateau
                },
                new DiagnosisFindingTemplate
                {
                    DiagnosisType = DiagnosisType.InSituCarcinomaLCIS,
                    KMDynamicInitialType = KMDynamicsInitialType.Fast,
                    KMDynamicDelayedType = KMDynamicsDelayedType.NotIncluded
                },
                new DiagnosisFindingTemplate
                {
                    DiagnosisType = DiagnosisType.RadialScar,
                    FormType = FormType.Irregular,
                    DemarcationType = DemarcationType.Irregular,
                    SignalT1w = SignalTypeExtended.Hypo,
                    SignalT2w = SignalTypeExtended.Iso,
                    EnhancementType = EnhancementType.No,
                    KMDynamicInitialType = KMDynamicsInitialType.NotIncluded,
                    KMDynamicDelayedType = KMDynamicsDelayedType.NotIncluded
                },
                new DiagnosisFindingTemplate
                {
                    DiagnosisType = DiagnosisType.BreastCarcinomaNotFurtherSpecified,
                    FormType = FormType.Irregular,
                    DemarcationType = DemarcationType.Irregular,
                    SignalT1w = SignalTypeExtended.LowHypo,
                    SignalT2w = SignalTypeExtended.LowHypo,
                    EnhancementType = EnhancementType.Heterogeneous,
                    KMDynamicInitialType = KMDynamicsInitialType.Fast,
                    KMDynamicDelayedType = KMDynamicsDelayedType.WashOut
                },
                new DiagnosisFindingTemplate
                {
                    DiagnosisType = DiagnosisType.InvasiveDuctalBreastCarcinoma,
                    FormType = FormType.Irregular,
                    DemarcationType = DemarcationType.Spiculated,
                    SignalT1w = SignalTypeExtended.Iso,
                    SignalT2w = SignalTypeExtended.LowHypo,
                    EnhancementType = EnhancementType.Heterogeneous,
                    KMDynamicInitialType = KMDynamicsInitialType.Fast,
                    KMDynamicDelayedType = KMDynamicsDelayedType.WashOut
                },
                new DiagnosisFindingTemplate
                {
                    DiagnosisType = DiagnosisType.Mastitis,
                    KMDynamicInitialType = KMDynamicsInitialType.Fast,
                    KMDynamicDelayedType = KMDynamicsDelayedType.Plateau,
                    SignalT2w = SignalTypeExtended.LowHyper
                },
                new DiagnosisFindingTemplate
                {
                    DiagnosisType = DiagnosisType.Abscess,
                    FormType = FormType.Oval,
                    DemarcationType = DemarcationType.Circumscribed,
                    SignalT1w = SignalTypeExtended.LowHypo,
                    SignalT2w = SignalTypeExtended.Hyper,
                    EnhancementType = EnhancementType.Heterogeneous,
                    KMDynamicInitialType = KMDynamicsInitialType.Fast,
                    KMDynamicDelayedType = KMDynamicsDelayedType.Plateau
                },
                new DiagnosisFindingTemplate
                {
                    DiagnosisType = DiagnosisType.Adenoma,
                    FormType = FormType.Oval,
                    DemarcationType = DemarcationType.Circumscribed,
                    SignalT1w = SignalTypeExtended.LowHypo,
                    SignalT2w = SignalTypeExtended.LowHyper,
                    EnhancementType = EnhancementType.Homogeneous,
                    KMDynamicInitialType = KMDynamicsInitialType.Fast,
                    KMDynamicDelayedType = KMDynamicsDelayedType.Plateau
                },
                new DiagnosisFindingTemplate
                {
                    DiagnosisType = DiagnosisType.BenignPhylloidTumor,
                    FormType = FormType.Oval,
                    DemarcationType = DemarcationType.Circumscribed,
                    SignalT1w = SignalTypeExtended.Iso,
                    SignalT2w = SignalTypeExtended.LowHyper,
                    EnhancementType = EnhancementType.Heterogeneous,
                    KMDynamicInitialType = KMDynamicsInitialType.Medium,
                    KMDynamicDelayedType = KMDynamicsDelayedType.Progressive
                },
                new DiagnosisFindingTemplate
                {
                    DiagnosisType = DiagnosisType.Hamartoma,
                    FormType = FormType.Round,
                    DemarcationType = DemarcationType.Circumscribed,
                    SignalT1w = SignalTypeExtended.Iso,
                    SignalT2w = SignalTypeExtended.Iso,
                    EnhancementType = EnhancementType.Heterogeneous,
                    KMDynamicInitialType = KMDynamicsInitialType.Slowly,
                    KMDynamicDelayedType = KMDynamicsDelayedType.Progressive
                },
                new DiagnosisFindingTemplate
                {
                    DiagnosisType = DiagnosisType.Hemangioma,
                    FormType = FormType.Round,
                    DemarcationType = DemarcationType.Irregular,
                    SignalT1w = SignalTypeExtended.Iso,
                    SignalT2w = SignalTypeExtended.LowHyper,
                    EnhancementType = EnhancementType.Heterogeneous,
                    KMDynamicInitialType = KMDynamicsInitialType.Medium,
                    KMDynamicDelayedType = KMDynamicsDelayedType.Plateau
                },
                new DiagnosisFindingTemplate
                {
                    DiagnosisType = DiagnosisType.Haematoma,
                    FormType = FormType.Oval,
                    DemarcationType = DemarcationType.Circumscribed,
                    SignalT1w = SignalTypeExtended.LowHyper,
                    SignalT2w = SignalTypeExtended.LowHyper,
                    EnhancementType = EnhancementType.No,
                    KMDynamicInitialType = KMDynamicsInitialType.NotIncluded,
                    KMDynamicDelayedType = KMDynamicsDelayedType.NotIncluded
                },
                new DiagnosisFindingTemplate
                {
                    DiagnosisType = DiagnosisType.PASH,
                    FormType = FormType.Irregular,
                    DemarcationType = DemarcationType.Irregular,
                    SignalT1w = SignalTypeExtended.Iso,
                    SignalT2w = SignalTypeExtended.Iso,
                    EnhancementType = EnhancementType.Heterogeneous,
                    KMDynamicInitialType = KMDynamicsInitialType.Medium,
                    KMDynamicDelayedType = KMDynamicsDelayedType.Progressive
                },
                new DiagnosisFindingTemplate
                {
                    DiagnosisType = DiagnosisType.Lipoma,
                    FormType = FormType.Round,
                    DemarcationType = DemarcationType.Circumscribed,
                    SignalT1w = SignalTypeExtended.LowHyper,
                    SignalT2w = SignalTypeExtended.Iso,
                    EnhancementType = EnhancementType.No,
                    KMDynamicInitialType =  KMDynamicsInitialType.NotIncluded,
                    KMDynamicDelayedType = KMDynamicsDelayedType.NotIncluded
                },
                new DiagnosisFindingTemplate
                {
                    DiagnosisType = DiagnosisType.Scar,
                    FormType = FormType.Irregular,
                    DemarcationType = DemarcationType.Irregular,
                    SignalT1w = SignalTypeExtended.Iso,
                    SignalT2w = SignalTypeExtended.Iso,
                    EnhancementType = EnhancementType.No,
                    KMDynamicInitialType = KMDynamicsInitialType.NotIncluded,
                    KMDynamicDelayedType = KMDynamicsDelayedType.NotIncluded
                },
                new DiagnosisFindingTemplate
                {
                    DiagnosisType = DiagnosisType.Seroma,
                    FormType = FormType.Oval,
                    DemarcationType = DemarcationType.Circumscribed,
                    SignalT1w = SignalTypeExtended.LowHypo,
                    SignalT2w = SignalTypeExtended.LowHyper,
                    EnhancementType = EnhancementType.No,
                    KMDynamicInitialType = KMDynamicsInitialType.NotIncluded,
                    KMDynamicDelayedType = KMDynamicsDelayedType.NotIncluded
                },
                new DiagnosisFindingTemplate
                {
                    DiagnosisType = DiagnosisType.ADH,
                    SignalT1w = SignalTypeExtended.Iso,
                    SignalT2w = SignalTypeExtended.Iso,
                    EnhancementType = EnhancementType.Homogeneous,
                    KMDynamicInitialType = KMDynamicsInitialType.Medium,
                    KMDynamicDelayedType = KMDynamicsDelayedType.Plateau
                },
                new DiagnosisFindingTemplate
                {
                    DiagnosisType = DiagnosisType.Papilloma,
                    FormType = FormType.Oval,
                    DemarcationType = DemarcationType.Circumscribed,
                    SignalT1w = SignalTypeExtended.Iso,
                    SignalT2w = SignalTypeExtended.LowHyper,
                    EnhancementType = EnhancementType.Homogeneous,
                    KMDynamicInitialType = KMDynamicsInitialType.Medium,
                    KMDynamicDelayedType = KMDynamicsDelayedType.Plateau
                },
                new DiagnosisFindingTemplate
                {
                    DiagnosisType = DiagnosisType.CystWithSolidComponents,
                    FormType = FormType.Round,
                    DemarcationType = DemarcationType.Circumscribed,
                    SignalT1w = SignalTypeExtended.Iso,
                    SignalT2w = SignalTypeExtended.LowHyper,
                    EnhancementType = EnhancementType.Heterogeneous,
                    KMDynamicInitialType = KMDynamicsInitialType.Medium,
                    KMDynamicDelayedType = KMDynamicsDelayedType.Plateau
                },
                new DiagnosisFindingTemplate
                {
                    DiagnosisType = DiagnosisType.InvasiveLobularBreastCarcinoma,
                    FormType = FormType.Irregular,
                    DemarcationType = DemarcationType.Spiculated,
                    SignalT1w = SignalTypeExtended.Iso,
                    SignalT2w = SignalTypeExtended.LowHypo,
                    EnhancementType = EnhancementType.Heterogeneous,
                    KMDynamicInitialType = KMDynamicsInitialType.Fast,
                    KMDynamicDelayedType = KMDynamicsDelayedType.WashOut
                },
                new DiagnosisFindingTemplate
                {
                    DiagnosisType = DiagnosisType.IntracycticPapillaryCarcinoma,
                    FormType = FormType.Round,
                    DemarcationType = DemarcationType.Circumscribed,
                    SignalT1w = SignalTypeExtended.LowHyper,
                    SignalT2w = SignalTypeExtended.LowHyper,
                    EnhancementType = EnhancementType.Heterogeneous,
                    KMDynamicInitialType = KMDynamicsInitialType.Fast,
                    KMDynamicDelayedType = KMDynamicsDelayedType.WashOut
                },
                new DiagnosisFindingTemplate
                {
                    DiagnosisType = DiagnosisType.InflammatoryCarcinoma,
                    FormType = FormType.Irregular,
                    DemarcationType = DemarcationType.Irregular,
                    SignalT1w = SignalTypeExtended.LowHypo,
                    SignalT2w = SignalTypeExtended.LowHyper,
                    EnhancementType = EnhancementType.Heterogeneous,
                    KMDynamicInitialType = KMDynamicsInitialType.Fast,
                    KMDynamicDelayedType = KMDynamicsDelayedType.WashOut
                },
                new DiagnosisFindingTemplate
                {
                    DiagnosisType = DiagnosisType.InvasivePapillaryCarcinoma,
                    FormType = FormType.Oval,
                    DemarcationType = DemarcationType.Irregular,
                    SignalT1w = SignalTypeExtended.LowHyper,
                    SignalT2w = SignalTypeExtended.LowHyper,
                    EnhancementType = EnhancementType.Heterogeneous,
                    KMDynamicInitialType = KMDynamicsInitialType.Fast,
                    KMDynamicDelayedType = KMDynamicsDelayedType.WashOut
                },
                new DiagnosisFindingTemplate
                {
                    DiagnosisType = DiagnosisType.MedullaryCarcinoma,
                    FormType = FormType.Oval,
                    DemarcationType = DemarcationType.Circumscribed,
                    EnhancementType = EnhancementType.Heterogeneous,
                    KMDynamicInitialType = KMDynamicsInitialType.Fast,
                    KMDynamicDelayedType = KMDynamicsDelayedType.Plateau
                },
                new DiagnosisFindingTemplate
                {
                    DiagnosisType = DiagnosisType.MucinousCarcinoma,
                    FormType = FormType.Irregular,
                    DemarcationType = DemarcationType.Circumscribed,
                    SignalT1w = SignalTypeExtended.LowHyper,
                    SignalT2w = SignalTypeExtended.Hyper,
                    EnhancementType = EnhancementType.Heterogeneous,
                    KMDynamicInitialType = KMDynamicsInitialType.Fast,
                    KMDynamicDelayedType = KMDynamicsDelayedType.Plateau
                },
                new DiagnosisFindingTemplate
                {
                    DiagnosisType = DiagnosisType.MetaplasticCarcinoma,
                    FormType = FormType.Irregular,
                    DemarcationType = DemarcationType.Spiculated,
                    SignalT2w = SignalTypeExtended.LowHyper,
                    EnhancementType = EnhancementType.Heterogeneous,
                    KMDynamicInitialType = KMDynamicsInitialType.Fast,
                    KMDynamicDelayedType = KMDynamicsDelayedType.WashOut
                },
                new DiagnosisFindingTemplate
                {
                    DiagnosisType = DiagnosisType.MalignantPhylloidTumor,
                    FormType = FormType.Round,
                    DemarcationType = DemarcationType.Circumscribed,
                    SignalT1w = SignalTypeExtended.Iso,
                    SignalT2w = SignalTypeExtended.Iso,
                    EnhancementType = EnhancementType.Heterogeneous,
                    KMDynamicInitialType = KMDynamicsInitialType.Fast,
                    KMDynamicDelayedType = KMDynamicsDelayedType.Plateau
                },
                new DiagnosisFindingTemplate
                {
                    DiagnosisType = DiagnosisType.Sarcoma,
                    FormType = FormType.Irregular,
                    DemarcationType = DemarcationType.Circumscribed,
                    SignalT1w = SignalTypeExtended.LowHypo,
                    SignalT2w = SignalTypeExtended.LowHyper,
                    EnhancementType = EnhancementType.Heterogeneous,
                    KMDynamicInitialType = KMDynamicsInitialType.Fast,
                    KMDynamicDelayedType = KMDynamicsDelayedType.WashOut
                },
                new DiagnosisFindingTemplate
                {
                    DiagnosisType = DiagnosisType.Lymphoma,
                    EnhancementType = EnhancementType.Heterogeneous,
                    KMDynamicInitialType = KMDynamicsInitialType.Fast,
                    KMDynamicDelayedType = KMDynamicsDelayedType.Plateau
                },
            };
        }
    }
}
