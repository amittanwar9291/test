using RadioReport.Common.Logic.Attributes;
using RadioReport.ElbowMRT.Domain.Enums;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;

namespace RadioReport.ElbowMRT.Domain.Models
{
    public class SoftTissueFindingBase : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        #region Common
        [RadioReportId("elb_m_070106")]
        public SoftTissueFindingType FindingType { get; set; }

        [RadioReportId("elb_m_0703214", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        [RadioReportId("elb_m_0703205", InstanceName = nameof(SoftTissueFindingType.Hematoma))]
        public SignalType T1w { get; set; }

        [RadioReportId("elb_m_0703217", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        [RadioReportId("elb_m_0703208", InstanceName = nameof(SoftTissueFindingType.Hematoma))]
        public SignalType T2w { get; set; }
        #endregion

        #region SoftTissueTumor
        [RadioReportId("elb_m_0702201", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        public SoftTissueDifferentialDiagnosisType MainFeaturesDifferentialDiagnosisType { get; set; }

        public DemarcationType DemarcationType { get; set; }

        [RadioReportId("elb_m_070406-l", IsExportable = false, InstanceName = nameof(MainHomogeneityType))]
        public HomogeneityType MainHomogeneityType { get; set; }

        [RadioReportId("elb_m_070502", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        public bool IsFat { get; set; }

        [RadioReportId("elb_m_070503", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        public bool IsCysts { get; set; }

        [RadioReportId("elb_m_070504", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        public bool IsCalcification { get; set; }

        [RadioReportId("elb_m_070505", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        public bool IsCapsule { get; set; }

        [RadioReportId("elb_m_070509", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        public bool IsSpaghettiLikeAppearanceOfTheNerve { get; set; }

        [RadioReportId("elb_m_070510", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        public bool IsDistractedNerveFasciclesAxialPomegranateSign { get; set; }

        [RadioReportId("elb_m_070250", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        public bool IsSubcutaneous { get; set; }

        [RadioReportId("elb_m_070253", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        public bool IsAlongMedianNerve { get; set; }

        [RadioReportId("elb_m_070257", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        public bool IsPressureErosionBonyErosion { get; set; }

        [RadioReportId("elb_m_070258", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        public bool IsMacrodactyly { get; set; }

        public ContrastEnhancementQuantitativeType ContrastEnhancementQuantitativeType { get; set; }

        [RadioReportId("elb_m_070412-l", IsExportable = false, InstanceName = nameof(CAEnhancementHomogeneityType))]
        public HomogeneityType CAEnhancementHomogeneityType { get; set; }

        public HeterogenousType HeterogenousType { get; set; }
        #endregion
    }
}
