using System.Collections.Generic;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.FeetMRT.Domain.Enums.SoftTissue;
using RadioReport.FeetMRT.Domain.Models;

namespace RadioReport.FeetMRT.Repo.Seeds
{
    internal static class SoftTissueFindingPresetSeed
    {
        internal static List<SoftTissueFindingPreset> GetPreconfiguredPresets()
        {
            return new List<SoftTissueFindingPreset>
            {
                new SoftTissueFindingPreset()
                {
                    FindingType = SoftTissueFindingType.SoftTissueTumor,
                    DifferentialDiagnosis = DifferentialDiagnosisType.Hemangioma,
                    SignalT1w = SignalType.Hyper,
                    QuantitativeType = QuantitativeType.Strong,
                    QuantitativeHomogeneityType = HomogeneityType.Homogeneous,
                    IsCalcification = true,
                },
                new SoftTissueFindingPreset()
                {
                    FindingType = SoftTissueFindingType.SoftTissueTumor,
                    DifferentialDiagnosis = DifferentialDiagnosisType.Angiomyoma,
                    DemarcationType = DemarcationType.Sharp,
                    SignalT1w = SignalType.Hyper,
                    QuantitativeType = QuantitativeType.Strong,
                    QuantitativeHomogeneityType = HomogeneityType.Homogeneous,
                    FormType = FormType.Oval,
                    IsCapsule = true,
                },
                new SoftTissueFindingPreset()
                {
                    FindingType = SoftTissueFindingType.SoftTissueTumor,
                    DifferentialDiagnosis = DifferentialDiagnosisType.Lipoma,
                    DemarcationType = DemarcationType.Sharp,
                    SignalT1w = SignalType.Hyper,
                    SignalT2w = SignalType.Hyper,
                    HomogeneityType = HomogeneityType.Homogeneous,
                    IsCapsule = true,
                    IsBold = true,
                },
                new SoftTissueFindingPreset()
                {
                    FindingType = SoftTissueFindingType.SoftTissueTumor,
                    DifferentialDiagnosis = DifferentialDiagnosisType.MortonNeurom,
                    SignalT1w = SignalType.Hypo,
                    SignalT2w = SignalType.Iso,
                    QuantitativeType = QuantitativeType.Strong,
                    QuantitativeHomogeneityType = HomogeneityType.Homogeneous,
                    IsAccompanyingBursitis = true,
                    FormType = FormType.DumbbellShaped,
                    GrowthPatternsType = GrowthPatternsType.InTheInterdigitalSpace,
                    IsTumorCenterLiesPlantarOfTheLigMetatarsalTransversumProfundum = true,
                },
                new SoftTissueFindingPreset()
                {
                    FindingType = SoftTissueFindingType.SoftTissueTumor,
                    DifferentialDiagnosis = DifferentialDiagnosisType.Schwannoma,
                    DemarcationType = DemarcationType.Sharp,
                    SignalT1w = SignalType.Iso,
                    SignalT2w = SignalType.Hyper,
                    QuantitativeType = QuantitativeType.Strong,
                    FormType = FormType.Oval,
                    IsCysts = true,
                },
                new SoftTissueFindingPreset()
                {
                    FindingType = SoftTissueFindingType.SoftTissueTumor,
                    DifferentialDiagnosis = DifferentialDiagnosisType.Neurofibrom,
                    DemarcationType = DemarcationType.Sharp,
                    SignalT1w = SignalType.Iso,
                    SignalT2w = SignalType.Hyper,
                    QuantitativeType = QuantitativeType.Strong,
                    QuantitativeHomogeneityType = HomogeneityType.Heterogeneous,
                    FormType = FormType.Oval,
                },
                new SoftTissueFindingPreset()
                {
                    FindingType = SoftTissueFindingType.SoftTissueTumor,
                    DifferentialDiagnosis = DifferentialDiagnosisType.Xanthom,
                    DemarcationType = DemarcationType.Sharp,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    FormType = FormType.SpindleShaped,
                },
                new SoftTissueFindingPreset()
                {
                    FindingType = SoftTissueFindingType.SoftTissueTumor,
                    DifferentialDiagnosis = DifferentialDiagnosisType.EpidermalInclusionCyst,
                    DemarcationType = DemarcationType.Sharp,
                    SignalT2w = SignalType.Hyper,
                    QuantitativeType = QuantitativeType.No,
                    GrowthPatternsType = GrowthPatternsType.Subcutaneous,
                },
                new SoftTissueFindingPreset()
                {
                    FindingType = SoftTissueFindingType.SoftTissueTumor,
                    DifferentialDiagnosis = DifferentialDiagnosisType.GanglionCyst,
                    DemarcationType = DemarcationType.Sharp,
                    SignalT1w = SignalType.Hypo,
                    SignalT2w = SignalType.Hyper,
                    FormType = FormType.Round,
                },
                new SoftTissueFindingPreset()
                {
                    FindingType = SoftTissueFindingType.SoftTissueTumor,
                    DifferentialDiagnosis = DifferentialDiagnosisType.DermatofibrosarcomaProtuberans,
                    SignalT1w = SignalType.Hypo,
                    SignalT2w = SignalType.Hyper,
                    QuantitativeType = QuantitativeType.Strong,
                    QuantitativeHomogeneityType = HomogeneityType.Heterogeneous,
                    IsCysts = true,
                    IsNecroses = true,
                    GrowthPatternsType = GrowthPatternsType.Subcutaneous,
                },
                new SoftTissueFindingPreset()
                {
                    FindingType = SoftTissueFindingType.SoftTissueTumor,
                    DifferentialDiagnosis = DifferentialDiagnosisType.Liposarcoma,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    IsNecroses = true,
                    IsCalcification = true,
                    IsBold = true,
                    GrowthPatternsType = GrowthPatternsType.Infiltration,
                },
                new SoftTissueFindingPreset()
                {
                    FindingType = SoftTissueFindingType.SoftTissueTumor,
                    DifferentialDiagnosis = DifferentialDiagnosisType.Angiosarcoma,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    QuantitativeType = QuantitativeType.Strong,
                    QuantitativeHomogeneityType = HomogeneityType.Heterogeneous,
                    IsSignalVoids = true,
                },
                new SoftTissueFindingPreset()
                {
                    FindingType = SoftTissueFindingType.SoftTissueTumor,
                    DifferentialDiagnosis = DifferentialDiagnosisType.MalignantPeripheralNerve,
                    SignalT1w = SignalType.Iso,
                    GrowthPatternsType = GrowthPatternsType.Infiltration,
                },
                new SoftTissueFindingPreset()
                {
                    FindingType = SoftTissueFindingType.SoftTissueTumor,
                    DifferentialDiagnosis = DifferentialDiagnosisType.Rhabdomyosarcoma,
                    SignalT2w = SignalType.Hyper,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    QuantitativeType = QuantitativeType.Strong,
                    QuantitativeHomogeneityType = HomogeneityType.Heterogeneous,
                    IsSignalVoids = true,
                },
                new SoftTissueFindingPreset()
                {
                    FindingType = SoftTissueFindingType.SoftTissueTumor,
                    DifferentialDiagnosis = DifferentialDiagnosisType.SynovialSarcoma,
                    SignalT2w = SignalType.Hyper,
                    HomogeneityType = HomogeneityType.Heterogeneous,
                    QuantitativeType = QuantitativeType.Strong,
                },
                new SoftTissueFindingPreset()
                {
                    FindingType = SoftTissueFindingType.SoftTissueTumor,
                    DifferentialDiagnosis = DifferentialDiagnosisType.Leiomyosarcoma,
                    SignalT1w = SignalType.Iso,
                    IsCysts = true,
                    IsNecroses = true,
                },
            };
        }
    }
}
