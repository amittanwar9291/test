using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.ShoulderMRT.Domain.Enums;

namespace RadioReport.ShoulderMRT.Domain.Models
{
    public class LabrumAndRibbonsFindingBase : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("sho_m_060106")]
        public LabrumAndRibbonsFindingType FindingType { get; set; }

        [RadioReportId("sho_m_060302", InstanceName = nameof(LabrumAndRibbonsFindingType.Labrum))]
        public DiagnosisType ExtensionLabrumPathologyDiagnosis1 { get; set; }

        public LabrumMorphologyResultType LabrumMorphologyResultType { get; set; }

        [RadioReportId("sho_m_060412", InstanceName = nameof(LabrumAndRibbonsFindingType.Labrum))]
        public bool IsExtensionToLongBicepsTendon { get; set; }

        // Intraarticular dislocation
        [RadioReportId("sho_m_060433", InstanceName = nameof(LabrumAndRibbonsFindingType.Labrum))]
        public bool IsDislocationIntoJointSpace { get; set; }

        [RadioReportId("sho_m_060434", InstanceName = nameof(LabrumAndRibbonsFindingType.Labrum))]
        public bool IsLongitudinalSplitting { get; set; }

        public DetailsType DetailsType { get; set; }

        // Middle glenohumeral ligament (MGHL)
        [RadioReportId("sho_m_060305", InstanceName = nameof(LabrumAndRibbonsFindingType.Ligaments))]
        public bool IsLigGlenohumeraleMedium { get; set; }

        // Inferior glenohumeral ligament (IGHL)
        [RadioReportId("sho_m_060308", InstanceName = nameof(LabrumAndRibbonsFindingType.Ligaments))]
        public bool IsLigGlenohumeraleInferior { get; set; }

        // Glenohumeral ligament (GHL)
        [RadioReportId("sho_m_060215", InstanceName = nameof(LabrumAndRibbonsFindingType.Ligaments))]
        public bool IsLigGlenohumerale { get; set; }

        // Middle (MGHL)
        [RadioReportId("sho_m_060218", InstanceName = nameof(LabrumAndRibbonsFindingType.Ligaments))]
        public bool IsMGHL { get; set; }
    }
}
