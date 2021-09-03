using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.FeetMRT.Domain.Enums;
using RadioReport.FeetMRT.Domain.Enums.SoftTissue;

namespace RadioReport.FeetMRT.Domain.Models
{
    public class SoftTissueFindingBase : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("anc_m_060106")]
        public SoftTissueFindingType FindingType { get; set; }

        [RadioReportId("anc_m_060503", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease))]
        [RadioReportId("anc_m_060506", InstanceName = nameof(SoftTissueFindingType.DiseasesOfTheMTP))]
        [RadioReportId("anc_m_060509", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        [RadioReportId("anc_m_0604113", InstanceName = nameof(SoftTissueFindingType.DiseaseOfTheSynoviaFocalMass))]
        public DifferentialDiagnosisType DifferentialDiagnosis { get; set; }

        public DemarcationType DemarcationType { get; set; }

        [RadioReportId("anc_m_060232-l", InstanceName = nameof(HomogeneityType), IsExportable = false)]
        public HomogeneityType HomogeneityType { get; set; }

        public FormType FormType { get; set; }

        public QuantitativeType QuantitativeType { get; set; }

        [RadioReportId("anc_m_060348", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        [RadioReportId("anc_m_0604115", InstanceName = nameof(SoftTissueFindingType.DiseaseOfTheSynoviaFocalMass))]
        [RadioReportId("anc_m_060266", InstanceName = nameof(SoftTissueFindingType.MuscleLesion))]
        public SignalType SignalT1w { get; set; }

        [RadioReportId("anc_m_060350", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        [RadioReportId("anc_m_0604117", InstanceName = nameof(SoftTissueFindingType.DiseaseOfTheSynoviaFocalMass))]
        [RadioReportId("anc_m_060268", InstanceName = nameof(SoftTissueFindingType.MuscleLesion))]
        public SignalType SignalT2w { get; set; }

        [RadioReportId("anc_m_060468", InstanceName = nameof(SoftTissueFindingType.DiseasesOfTheMTP))]
        [RadioReportId("anc_m_060238", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        public bool IsAccompanyingBursitis { get; set; }

        [RadioReportId("anc_m_060494", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        public bool IsBold { get; set; }

        [RadioReportId("anc_m_060495", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        public bool IsCysts { get; set; }

        [RadioReportId("anc_m_060496", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        public bool IsCalcification { get; set; }

        [RadioReportId("anc_m_060497", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        public bool IsCapsule { get; set; }

        [RadioReportId("anc_m_060498", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        public bool IsSepts { get; set; }

        [RadioReportId("anc_m_0604100", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        public bool IsSignalVoids { get; set; }

        public GrowthPatternsType GrowthPatternsType { get; set; }

        [RadioReportId("anc_m_060517", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        public bool IsTumorCenterLiesPlantarOfTheLigMetatarsalTransversumProfundum { get; set; }

        [RadioReportId("anc_m_0604104-l", InstanceName = nameof(QuantitativeHomogeneityType), IsExportable = false)]
        public HomogeneityType QuantitativeHomogeneityType { get; set; }

        [RadioReportId("anc_m_060499", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        public bool IsNecroses { get; set; }
    }
}
