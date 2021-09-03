using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.Common.Logic.Models;
using RadioReport.SpineMRT.Domain.Enums;
using RadioReport.SpineMRT.Domain.Enums.Bones;

namespace RadioReport.SpineMRT.Domain.Models
{
    public class BonesFindingBase : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("spi_m_060106")]
        public BonesFindingType FindingType { get; set; }

        [RadioReportId("spi_m_060331", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        [RadioReportId("spi_m_060213", InstanceName = nameof(BonesFindingType.FocalTumor))]
        public TraumaLocations TraumaLocation { get; set; }

        [RadioReportId("spi_m_060344", InstanceName = nameof(BonesFindingType.FocalTumor))]
        [RadioReportId("spi_m_060233", InstanceName = nameof(BonesFindingType.DiffuseTumor))]
        public BonesDiagnosisType MainCharacteristicsDifferentialDiagnosis01 { get; set; }

        public CorticalisType CorticalisType { get; set; }

        [RadioReportId("spi_m_060358", InstanceName = nameof(BonesFindingType.FocalTumor))]
        public bool IsFluidLevel { get; set; }

        [RadioReportId("spi_m_060359", InstanceName = nameof(BonesFindingType.FocalTumor))]
        public bool IsCalcification { get; set; }

        [RadioReportId("spi_m_060481", InstanceName = nameof(BonesFindingType.FocalTumor))]
        public bool IsPeriostealReaction { get; set; }

        [RadioReportId("spi_m_060551", InstanceName = nameof(BonesFindingType.FocalTumor))]
        public bool IsOsteolytic { get; set; }

        [RadioReportId("spi_m_060552", InstanceName = nameof(BonesFindingType.FocalTumor))]
        public bool IsOsteoblastic { get; set; }

        [RadioReportId("spi_m_060556", InstanceName = nameof(BonesFindingType.FocalTumor))]
        public bool IsInfiltrationOfSoftTissue { get; set; }

        [RadioReportId("spi_m_0604202", InstanceName = nameof(BonesFindingType.FocalTumor))]
        [RadioReportId("spi_m_060377", InstanceName = nameof(BonesFindingType.DiffuseTumor))]
        public SignalTypeExtended T1wSignal { get; set; }

        [RadioReportId("spi_m_0604203", InstanceName = nameof(BonesFindingType.FocalTumor))]
        [RadioReportId("spi_m_060378", InstanceName = nameof(BonesFindingType.DiffuseTumor))]
        public SignalTypeExtended T2wSignal { get; set; }

        [RadioReportId("spi_m_060352-l", InstanceName = nameof(HomogeneityType), IsExportable = false)]
        public HomogeneityType HomogeneityType { get; set; }

        public ContrastEnhancementQuantitativeType ContrastEnhancementQuantitativeType { get; set; }

        [RadioReportId("spi_m_060536-l", InstanceName = nameof(CMEnhancementHomogeneityType), IsExportable = false)]
        public HomogeneityType CMEnhancementHomogeneityType { get; set; }

        public LimitationType LimitationType { get; set; }

        public CMEnhancementForm CMEnhancementForm { get; set; }

        public ShapeType ShapeType { get; set; }

        [RadioReportId("spi_m_060357", InstanceName = nameof(BonesFindingType.FocalTumor))]
        public bool IsSeptaChambered { get; set; }

        [RadioReportId("spi_m_060550", InstanceName = nameof(BonesFindingType.FocalTumor))]
        public bool IsExpansive { get; set; }

        [RadioReportId("spi_m_060362", InstanceName = nameof(BonesFindingType.FocalTumor))]
        public bool IsNidus { get; set; }

        [RadioReportId("spi_m_060363", InstanceName = nameof(BonesFindingType.FocalTumor))]
        public bool IsT2wHyperintense { get; set; }

        [RadioReportId("spi_m_060360", InstanceName = nameof(BonesFindingType.FocalTumor))]
        public bool IsCentral { get; set; }

        [RadioReportId("spi_m_060488", InstanceName = nameof(BonesFindingType.FocalTumor))]
        public bool IsScleroticMargin { get; set; }

        [RadioReportId("spi_m_060489", InstanceName = nameof(BonesFindingType.FocalTumor))]
        public bool IsBoneMarrowEdema { get; set; }

        [RadioReportId("spi_m_060221", InstanceName = nameof(BonesFindingType.FocalTumor))]
        public bool IsSoftTissueEdema { get; set; }

        [RadioReportId("spi_m_060222", InstanceName = nameof(BonesFindingType.FocalTumor))]
        public bool IsPerifocalSclerosis { get; set; }

        [RadioReportId("spi_m_060223", InstanceName = nameof(BonesFindingType.FocalTumor))]
        public bool IsSurroundingInflammatoryReaction { get; set; }

        [RadioReportId("spi_m_060366", InstanceName = nameof(BonesFindingType.FocalTumor))]
        public bool IsMoreThanOneLesion { get; set; }

        [RadioReportId("spi_m_060483", InstanceName = nameof(BonesFindingType.FocalTumor))]
        public bool IsCartilagecap { get; set; }

        [RadioReportId("spi_m_060356", InstanceName = nameof(BonesFindingType.FocalTumor))]
        public bool IsGroundGlassMatrix { get; set; }

        [RadioReportId("spi_m_060364", InstanceName = nameof(BonesFindingType.FocalTumor))]
        public bool IsOsteoidMatrix { get; set; }

        [RadioReportId("spi_m_060365", InstanceName = nameof(BonesFindingType.FocalTumor))]
        public bool IsFatSignal { get; set; }

        [RadioReportId("spi_m_060561", InstanceName = nameof(BonesFindingType.FocalTumor))]
        public bool IsInvolvementAdjacentEndplate { get; set; }

        [RadioReportId("spi_m_060559", InstanceName = nameof(BonesFindingType.FocalTumor))]
        public bool IsOriginFromMidline { get; set; }

        public InfiltrationPatternType InfiltrationPatternType { get; set; }

        [RadioReportId("spi_m_060379", InstanceName = nameof(BonesFindingType.DiffuseTumor))]
        public SignalTypeExtended SignalSTIR { get; set; }

        [RadioReportId("spi_m_060486", InstanceName = nameof(BonesFindingType.FocalTumor))]
        public bool IsCartilagecapT2wHyperintense { get; set; }

        [RadioReportId("spi_m_060560", InstanceName = nameof(BonesFindingType.FocalTumor))]
        public bool IsInterruptionEndPlate { get; set; }

        [RadioReportId("spi_m_060482", InstanceName = nameof(BonesFindingType.FocalTumor))]
        public bool IsPeriostealSpur { get; set; }
    }
}
