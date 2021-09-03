using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.HeadMRT.Domain.Constants;
using RadioReport.HeadMRT.Domain.Enums;
using RadioReport.HeadMRT.Domain.Enums.CerebrospinalFluidSpace;

namespace RadioReport.HeadMRT.Domain.Models
{
    public class CerebrospinalFluidSpaceFindingBase : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("hea_m_090106")]
        public CerebrospinalFluidSpaceFindingType FindingType { get; set; }

        [RadioReportId("hea_m_090239", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public CerebrospinalMassDiagnosisType MassDifferentialDiagnosisIKnow1Type { get; set; }

        [RadioReportId("hea_m_090209", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.VentricleConfiguration))]
        [RadioReportId("hea_m_090323", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsLateralVentricle { get; set; }

        [RadioReportId("hea_m_090336-l", InstanceName = nameof(InstanceNames.CerebrospinalFluidSpace), IsExportable = false)]
        public MarginType MarginType { get; set; }

        [RadioReportId("hea_m_090339-l", InstanceName = nameof(CerebrospinalFluidSpaceFinding) + nameof(HomogeneityType), IsExportable = false)]
        public HomogeneityType HomogeneityType { get; set; }

        [RadioReportId("hea_m_090342-l", InstanceName = nameof(InstanceNames.CerebrospinalFluidSpace), IsExportable = false)]
        public ShapeType ShapeType { get; set; }

        [RadioReportId("hea_m_090349", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsDisplacement { get; set; }

        [RadioReportId("hea_m_090350", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsInfiltration { get; set; }

        [RadioReportId("hea_m_090433", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_m_090390", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public SignalTypeExtended T1WSignal { get; set; }

        [RadioReportId("hea_m_090435", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_m_090392", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public SignalTypeExtended T2WSignal { get; set; }

        [RadioReportId("hea_m_090437", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_m_090394", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public SignalTypeExtended FlairSignal { get; set; }

        [RadioReportId("hea_m_090531", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        [RadioReportId("hea_m_090479", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.SubarachnoidHemorrhage))]
        public bool IsSignalVoid { get; set; }

        [RadioReportId("hea_m_090531-l", InstanceName = nameof(InstanceNames.CerebrospinalFluidSpace), IsExportable = false)]
        public SignalVoidType SignalVoidType { get; set; }

        [RadioReportId("hea_m_090254", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsHemorrhage { get; set; }

        [RadioReportId("hea_m_090535", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsDiffusionRestriction { get; set; }

        [RadioReportId("hea_m_090255", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsNecrosis { get; set; }

        [RadioReportId("hea_m_090256", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsCalcification { get; set; }

        [RadioReportId("hea_m_090258", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsCysts { get; set; }

        [RadioReportId("hea_m_090261", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsSignalVoids { get; set; }

        [RadioReportId("hea_m_090262", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsFluidLevel { get; set; }

        [RadioReportId("hea_m_090354", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsHypertrophyChoroidPlexus { get; set; }

        [RadioReportId("hea_m_090355", InstanceName = nameof(CerebrospinalFluidSpaceFindingType.Mass))]
        public bool IsPerifocalEdema { get; set; }

        [RadioReportId("hea_m_090438-l", InstanceName = nameof(InstanceNames.CerebrospinalFluidSpace), IsExportable = false)]
        public ContrastQuantitativeType ContrastEnhancementQuantitativeType { get; set; }

        [RadioReportId("hea_m_090441-l", InstanceName = nameof(CerebrospinalFluidSpaceFinding) + nameof(ContrastEnhancementHomogeneityType), IsExportable = false)]
        public HomogeneityType ContrastEnhancementHomogeneityType { get; set; }

        [RadioReportId("hea_m_090537-l", InstanceName = nameof(InstanceNames.CerebrospinalFluidSpace), IsExportable = false)]
        public ContrastDistributionType ContrastEnhancementDistributionType { get; set; }
    }
}
