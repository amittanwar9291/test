using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.HipMRT.Domain.Enums.SoftTissue;

namespace RadioReport.HipMRT.Domain.Models
{
    public class SoftTissueFindingBase : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("hip_m_080106")]
        public SoftTissueFindingType FindingType { get; set; }

        [RadioReportId("hip_m_080427", InstanceName = nameof(SoftTissueFindingType.Hematoma))]
        [RadioReportId("hip_m_080454", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public SignalType T1wSignal { get; set; }

        [RadioReportId("hip_m_080430", InstanceName = nameof(SoftTissueFindingType.Hematoma))]
        [RadioReportId("hip_m_080457", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public SignalType T2wSignal { get; set; }

        [RadioReportId("hip_m_080402", InstanceName = nameof(SoftTissueFindingType.ArticularEffusion))]
        [RadioReportId("hip_m_080502", InstanceName = nameof(SoftTissueFindingType.MorelLavalleeLesion))]
        [RadioReportId("hip_m_080510", InstanceName = nameof(SoftTissueFindingType.Hematoma))]
        [RadioReportId("hip_m_080513", InstanceName = nameof(SoftTissueFindingType.Abscess))]
        [RadioReportId("hip_m_080215", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public DifferentialDiagnosisType DifferentialDiagnosis { get; set; }

        public MarginType MarginType { get; set; }

        [RadioReportId("hip_m_080518", InstanceName = nameof(HomogeneityType), IsExportable = false)]
        public HomogeneityType HomogeneityType { get; set; }

        [RadioReportId("hip_m_080220", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsFat { get; set; }

        [RadioReportId("hip_m_080221", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsCysts { get; set; }

        [RadioReportId("hip_m_080222", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsCalcification { get; set; }

        [RadioReportId("hip_m_080223", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsCapsule { get; set; }

        [RadioReportId("hip_m_080356", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsBoneErosion { get; set; }

        public ContrastEnhancementQuantitativeType ContrastEnhancementQuantitativeType { get; set; }

        [RadioReportId("hip_m_080524", InstanceName = nameof(CMHomogeneityType), IsExportable = false)]
        public HomogeneityType CMHomogeneityType { get; set; }

        public ContrastEnhancementDistributionType ContrastEnhancementDistributionType { get; set; }
    }
}
