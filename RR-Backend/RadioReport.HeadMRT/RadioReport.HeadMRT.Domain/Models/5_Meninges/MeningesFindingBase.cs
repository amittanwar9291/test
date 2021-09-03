using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.HeadMRT.Domain.Constants;
using RadioReport.HeadMRT.Domain.Enums;
using RadioReport.HeadMRT.Domain.Enums.Meninges;

namespace RadioReport.HeadMRT.Domain.Models
{
    public class MeningesFindingBase : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("hea_m_050106")]
        public MeningesFindingType FindingType { get; set; }

        #region Mass

        [RadioReportId("hea_m_050204", InstanceName = nameof(MeningesFindingType.Mass))]
        public MeningesMassDiagnosisType MassDifferentialDiagnosisLocalization { get; set; }

        [RadioReportId("hea_m_050222-l", InstanceName = nameof(InstanceNames.Meninges), IsExportable = false)]
        public MarginType MarginType { get; set; }

        [RadioReportId("hea_m_050308-l", InstanceName = nameof(MeningesFinding) + nameof(HomogeneityType), IsExportable = false)]
        public HomogeneityType HomogeneityType { get; set; }

        [RadioReportId("hea_m_050311-l", InstanceName = nameof(InstanceNames.Meninges), IsExportable = false)]
        public ShapeType ShapeType { get; set; }

        [RadioReportId("hea_m_0502204", InstanceName = nameof(MeningesFindingType.Mass))]
        public bool IsCysts { get; set; }

        [RadioReportId("hea_m_0502210", InstanceName = nameof(MeningesFindingType.Mass))]
        public bool IsNecrosis { get; set; }

        [RadioReportId("hea_m_0503206", InstanceName = nameof(MeningesFindingType.Mass))]
        public bool IsPerifocalEdema { get; set; }

        [RadioReportId("hea_m_0503207", InstanceName = nameof(MeningesFindingType.Mass))]
        public bool IsDuraTailSign { get; set; }

        [RadioReportId("hea_m_0503210", InstanceName = nameof(MeningesFindingType.Mass))]
        public bool IsLocalHyperostosisOfTheBone { get; set; }

        [RadioReportId("hea_m_0504201", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_050452", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        public SignalTypeExtended T1WSignal { get; set; }

        [RadioReportId("hea_m_0504203", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_050455", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        public SignalTypeExtended T2WSignal { get; set; }

        [RadioReportId("hea_m_0504205", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_050457", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        public SignalTypeExtended FlairSignal { get; set; }

        [RadioReportId("hea_m_0505201", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_m_050521", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        public bool IsSignalVoid { get; set; }

        [RadioReportId("hea_m_0505201-l", InstanceName = nameof(InstanceNames.Meninges), IsExportable = false)]
        public SignalVoidType SignalVoidType { get; set; }

        [RadioReportId("hea_m_050428-l", InstanceName = nameof(InstanceNames.Meninges), IsExportable = false)]
        public ContrastQuantitativeType ContrastEnhancementQuantitativeType { get; set; }

        [RadioReportId("hea_m_050428-l", InstanceName = nameof(MeningesFinding) + nameof(ContrastEnhancementHomogeneityType), IsExportable = false)]
        public HomogeneityType ContrastEnhancementHomogeneityType { get; set; }

        [RadioReportId("hea_m_050434-l", InstanceName = nameof(InstanceNames.Meninges), IsExportable = false)]
        public ContrastDistributionType ContrastEnhancementDistributionType { get; set; }

        #endregion
    }
}
