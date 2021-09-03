using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.HandMRT.Domain.Enums;
using RadioReport.HandMRT.Domain.Enums.SoftTissue;

namespace RadioReport.HandMRT.Domain.Models
{
    public class SoftTissueFindingBase : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        public SoftTissueFindingType FindingType { get; set; }

        public LocalizationType LocalizationType { get; set; }

        [RadioReportId("han_m_080209", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public DifferentialDiagnosisType DifferentialDiagnosis { get; set; }

        public MarginType MarginType { get; set; }

        [RadioReportId("han_m_0800504-l", InstanceName = nameof(HomogeneityType), IsExportable = false)]
        public HomogeneityType HomogeneityType { get; set; }

        [RadioReportId("han_m_080213", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsFat { get; set; }

        [RadioReportId("han_m_080214", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsCysts { get; set; }

        [RadioReportId("han_m_080215", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsCalcification { get; set; }

        [RadioReportId("han_m_080216", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsCapsule { get; set; }

        [RadioReportId("han_m_080220", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsSpaghettiLikeAppearanceOfTheNerve { get; set; }

        [RadioReportId("han_m_080221", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsDisplacedNerveFasciclesAxialPomegranateSign { get; set; }

        [RadioReportId("han_m_080326", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsSubcutaneous { get; set; }

        [RadioReportId("han_m_080329", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsAlongMedianNerve { get; set; }

        [RadioReportId("han_m_0800414", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsPressureCorrosionBone { get; set; }

        [RadioReportId("han_m_0800415", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public bool IsMacrodactyly { get; set; }

        [RadioReportId("han_m_0800419", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public SignalType SignalTypeT1w { get; set; }

        [RadioReportId("han_m_0800422", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        public SignalType SignalTypeT2w { get; set; }

        public ContrastEnhancementType ContrastEnhancementType { get; set; }

        [RadioReportId("han_m_0800519-l", InstanceName = nameof(CMHomogeneityType), IsExportable = false)]
        public HomogeneityType CMHomogeneityType { get; set; }

        public ContrastEnhancementDistributionType ContrastEnhancementDistributionType { get; set; }
    }
}
