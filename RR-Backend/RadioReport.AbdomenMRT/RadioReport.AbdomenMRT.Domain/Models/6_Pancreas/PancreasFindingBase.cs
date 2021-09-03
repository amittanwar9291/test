using RadioReport.AbdomenMRT.Domain.Enums;
using RadioReport.AbdomenMRT.Domain.Enums.Pancreas;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;

namespace RadioReport.AbdomenMRT.Domain.Models
{
    public class PancreasFindingBase : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("abd_m_060106")]
        public PancreasFindingType FindingType { get; set; }

        [RadioReportId("abd_m_060253", InstanceName = nameof(PancreasFindingType.Mass))]
        public MassDifferentialDiagnosisType MainMassDifferentialDiagnosisType1 { get; set; }

        [RadioReportId("abd_m_060356", InstanceName = nameof(PancreasFindingType.Mass))]
        public MarginType MarginType { get; set; }

        [RadioReportId("abd_m_060358", InstanceName = nameof(PancreasFindingType.Mass))]
        public HomogeneityType HomogeneityType { get; set; }

        [RadioReportId("abd_m_060360", InstanceName = nameof(PancreasFindingType.Mass))]
        public FormType FormType { get; set; }

        [RadioReportId("abd_m_060437", InstanceName = nameof(PancreasFindingType.Mass))]
        [RadioReportId("abd_m_060392", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public SignalTypeExtended SignalT1wType { get; set; }

        [RadioReportId("abd_m_060441", InstanceName = nameof(PancreasFindingType.Mass))]
        [RadioReportId("abd_m_060395", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public SignalTypeExtended SignalT2wType { get; set; }

        [RadioReportId("abd_m_060516", InstanceName = nameof(PancreasFindingType.Mass))]
        [RadioReportId("abd_m_060468", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public bool IsCapsule { get; set; }

        [RadioReportId("abd_m_060520", InstanceName = nameof(PancreasFindingType.Mass))]
        [RadioReportId("abd_m_060472", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public bool IsHemorrhage { get; set; }

        [RadioReportId("abd_m_060521", InstanceName = nameof(PancreasFindingType.Mass))]
        [RadioReportId("abd_m_060473", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public bool IsHemosiderin { get; set; }

        [RadioReportId("abd_m_060515", InstanceName = nameof(PancreasFindingType.Mass))]
        [RadioReportId("abd_m_060467", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public bool IsCalcification { get; set; }

        public PancreaticDuctPathologyType PancreaticDuctPathologyType { get; set; }

        public GrowthPatternsType GrowthPatternsType { get; set; }

        public ContrastEnhancementQuantitative ContrastEnhancementQuantitative { get; set; }

        [RadioReportId("abd_m_060527-l", InstanceName = nameof(ContrastEnhancementHomogeneityType), IsExportable = false)]
        public HomogeneityType ContrastEnhancementHomogeneityType { get; set; }

        [RadioReportId("abd_m_060534", InstanceName = nameof(PancreasFindingType.Mass))]
        [RadioReportId("abd_m_0602110", InstanceName = nameof(PancreasFindingType.DiffuseParenchymalChanges))]
        public ContrastEnhancementDistribution ContrastEnhancementDistribution { get; set; }
    }
}
