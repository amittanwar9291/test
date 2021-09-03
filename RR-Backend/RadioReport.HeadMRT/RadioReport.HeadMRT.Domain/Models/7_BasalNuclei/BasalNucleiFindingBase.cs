using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.HeadMRT.Domain.Constants;
using RadioReport.HeadMRT.Domain.Enums;
using RadioReport.HeadMRT.Domain.Enums.BasalNuclei;

namespace RadioReport.HeadMRT.Domain.Models
{
    public class BasalNucleiFindingBase : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("hea_m_070106")]
        public BasalNucleiFindingType FindingType { get; set; }

        [RadioReportId("hea_m_070204", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public BasalNucleiDiagnosisType DifferentialDiagnosisLocalizationType { get; set; }

        #region Pathology

        [RadioReportId("hea_m_070313-l", InstanceName = InstanceNames.BasalNuclei, IsExportable = false)]
        public MarginType MarginType { get; set; }

        [RadioReportId("hea_m_070316-l", InstanceName = nameof(BasalNucleiFinding) + nameof(HomogeneityType), IsExportable = false)]
        public HomogeneityType HomogeneityType { get; set; }

        [RadioReportId("hea_m_070409", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public SignalTypeExtended T1wSignalType { get; set; }

        [RadioReportId("hea_m_070411", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public SignalTypeExtended T2wSignalType { get; set; }

        [RadioReportId("hea_m_070413", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public SignalTypeExtended FlairSignalType { get; set; }

        [RadioReportId("hea_m_070415", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool IsSignalVoid { get; set; }

        [RadioReportId("hea_m_070415-l", InstanceName = InstanceNames.BasalNuclei, IsExportable = false)]
        public SignalVoidType SignalVoidType { get; set; }

        [RadioReportId("hea_m_070514", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public SignalType DwiSignalType { get; set; }

        [RadioReportId("hea_m_070516", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public SignalType AdcSignalType { get; set; }

        [RadioReportId("hea_m_070518", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool IsDiffusionRestriction { get; set; }

        [RadioReportId("hea_m_070231", InstanceName = nameof(BasalNucleiFindingType.Pathology))]
        public bool IsSignalVoids { get; set; }

        [RadioReportId("hea_m_070523-l", InstanceName = InstanceNames.BasalNuclei, IsExportable = false)]
        public ContrastEnhancementType ContrastEnhancementType { get; set; }

        [RadioReportId("hea_m_070523-l", InstanceName = nameof(BasalNucleiFinding) + nameof(ContrastEnhancementHomogeneityType), IsExportable = false)]
        public HomogeneityType ContrastEnhancementHomogeneityType { get; set; }

        #endregion
    }
}
