using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.MammaMRT.Domain.Enums;

namespace RadioReport.MammaMRT.Domain.Models
{
    /// <summary>
    /// Class which contains all properties that are used for template mechanism.
    /// </summary>
    public class DiagnosisFindingTemplate : FindingBase
    {
        [RadioReportId("mam_m_060106")]
        public DiagnosisFindingType FindingType { get; set; }

        [RadioReportId("mam_m_060204", InstanceName = nameof(DiagnosisFindingType.FocalPoint))]
        public DiagnosisType DiagnosisType { get; set; }

        [RadioReportId("mam_m_060504")]
        public DiagnosisType AdditionalDiagnosis1Type { get; set; }

        public FormType FormType { get; set; }

        public DemarcationType DemarcationType { get; set; }

        [RadioReportId("mam_m_060310", InstanceName = nameof(DiagnosisFindingType.FocalPoint))]
        public SignalTypeExtended SignalT1w { get; set; }

        [RadioReportId("mam_m_060312", InstanceName = nameof(DiagnosisFindingType.FocalPoint))]
        public SignalTypeExtended SignalT2w { get; set; }

        [RadioReportId("mam_m_060402", InstanceName = nameof(DiagnosisFindingType.FocalPoint))]
        public EnhancementType EnhancementType { get; set; }

        public KMDynamicsInitialType KMDynamicInitialType { get; set; }

        public KMDynamicsDelayedType KMDynamicDelayedType { get; set; }

        public override string InstanceName => FindingType.ToString();
    }
}
