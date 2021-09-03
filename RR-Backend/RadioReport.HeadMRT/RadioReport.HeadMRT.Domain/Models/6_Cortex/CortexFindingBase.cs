using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.HeadMRT.Domain.Enums;
using RadioReport.HeadMRT.Domain.Enums.Cortex;

namespace RadioReport.HeadMRT.Domain.Models
{
    public class CortexFindingBase : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("hea_m_060106")]
        public CortexFindingType FindingType { get; set; }

        [RadioReportId("hea_m_060204", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_060254", InstanceName = nameof(CortexFindingType.Diffuse))]
        public CortexDifferentialDiagnosisType DifferentialDiagnosisType { get; set; }

        public MarginType MarginType { get; set; }

        [RadioReportId("hea_m_060314-l", InstanceName = nameof(CortexFinding) + nameof(HomogeneityType), IsExportable = false)]
        public HomogeneityType HomogeneityType { get; set; }

        [RadioReportId("hea_m_060234", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_060549", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsNecrosis { get; set; }

        [RadioReportId("hea_m_060237", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_060547", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsCysts { get; set; }

        [RadioReportId("hea_m_060233", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_060551", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsHemorrhage { get; set; }

        [RadioReportId("hea_m_060240", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_060550", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsInternalStructureSignalVoids { get; set; }

        [RadioReportId("hea_m_060241", InstanceName = nameof(CortexFindingType.Focal))]
        public bool IsFluidLevel { get; set; }

        [RadioReportId("hea_m_060244", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_060556", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsMassEffect { get; set; }

        [RadioReportId("hea_m_060328", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_060274", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsPerifocalEdema { get; set; }

        [RadioReportId("hea_m_060326", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_060272", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsNarrowedSulci { get; set; }

        [RadioReportId("hea_m_060327", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_060273", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsBlurringOfWhiteGreyJunction { get; set; }

        [RadioReportId("hea_m_060421", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_060359", InstanceName = nameof(CortexFindingType.Diffuse))]
        public SignalTypeExtended T1WSignal { get; set; }

        [RadioReportId("hea_m_060423", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_060361", InstanceName = nameof(CortexFindingType.Diffuse))]
        public SignalTypeExtended T2WSignal { get; set; }

        [RadioReportId("hea_m_060425", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_060363", InstanceName = nameof(CortexFindingType.Diffuse))]
        public SignalTypeExtended FlairWSignal { get; set; }

        [RadioReportId("hea_m_060506", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_060453", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsT2SignalVoid { get; set; }

        public SignalVoidType SignalVoidType { get; set; }

        [RadioReportId("hea_m_060510", InstanceName = nameof(CortexFindingType.Focal))]
        public SignalType DwiSignal { get; set; }

        [RadioReportId("hea_m_060512", InstanceName = nameof(CortexFindingType.Focal))]
        public SignalType AdcSignal { get; set; }

        [RadioReportId("hea_m_060514", InstanceName = nameof(CortexFindingType.Focal))]
        [RadioReportId("hea_m_060461", InstanceName = nameof(CortexFindingType.Diffuse))]
        public bool IsDiffusionRestriction { get; set; }

        public ContrastQuantitativeType ContrastEnhancementQuantitativeType { get; set; }

        [RadioReportId("hea_m_060518-l", InstanceName = nameof(CortexFinding) + nameof(ContrastEnhancementHomogeneityType), IsExportable = false)]
        public HomogeneityType ContrastEnhancementHomogeneityType { get; set; }

        public ContrastDistributionType ContrastEnhancementDistributionType { get; set; }

        [RadioReportId("hea_m_060528")]
        public bool IsLesionOfTheSameEntity { get; set; }
    }
}
