using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.ElbowMRT.Domain.Enums.Bones;

namespace RadioReport.ElbowMRT.Domain.Models
{
    public class BonesFindingBase : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("elb_m_040106")]
        public BonesFindingType FindingType { get; set; }

        [RadioReportId("elb_m_040255", InstanceName = nameof(BonesFindingType.Mass))]

        public DiagnosisType DifferentialDiagnosis { get; set; }

        public BonesLimitationType LimitationType { get; set; }

        [RadioReportId("elb_m_0404184", InstanceName = nameof(BonesFindingType.Mass))]
        public bool IsEpiphyseal { get; set; }

        [RadioReportId("elb_m_0404185", InstanceName = nameof(BonesFindingType.Mass))]
        public bool IsMetaphyseal { get; set; }

        [RadioReportId("elb_m_0403195", InstanceName = nameof(BonesFindingType.Mass))]
        public SignalTypeExtended SignalT1w { get; set; }

        [RadioReportId("elb_m_0403198", InstanceName = nameof(BonesFindingType.Mass))]
        public SignalTypeExtended SignalT2w { get; set; }

        [RadioReportId("elb_m_0402161-l", InstanceName = nameof(HomogeneityType), IsExportable = false)]
        public BonesHomogeneityType HomogeneityType { get; set; }

        public CorticalisType CorticalisType { get; set; }

        public ContrastEnhancementQuantitativeType ContrastEnhancementQuantitativeType { get; set; }

        [RadioReportId("elb_m_040442-l", InstanceName = nameof(ContrastEnhancementHomogeneityType), IsExportable = false)]
        public BonesHomogeneityType ContrastEnhancementHomogeneityType { get; set; }

        public ContrastEnhancementDistributionType ContrastEnhancementDistributionType { get; set; }

        [RadioReportId("elb_m_0405154", InstanceName = nameof(BonesFindingType.Mass))]
        public bool IsRound { get; set; }

        [RadioReportId("elb_m_0405155", InstanceName = nameof(BonesFindingType.Mass))]
        public bool IsLobulated { get; set; }

        [RadioReportId("elb_m_0405156", InstanceName = nameof(BonesFindingType.Mass))]
        public bool IsGeographic { get; set; }

        [RadioReportId("elb_m_0405157", InstanceName = nameof(BonesFindingType.Mass))]
        public bool IsSessile { get; set; }

        [RadioReportId("elb_m_0405158", InstanceName = nameof(BonesFindingType.Mass))]
        public bool IsPedunculated { get; set; }

        [RadioReportId("elb_m_0405159", InstanceName = nameof(BonesFindingType.Mass))]
        public bool IsOrientation { get; set; }

        [RadioReportId("elb_m_0402133", InstanceName = nameof(BonesFindingType.Mass))]
        public bool IsSeptatedChambered { get; set; }

        [RadioReportId("elb_m_0402134", InstanceName = nameof(BonesFindingType.Mass))]
        public bool IsFluidLevel { get; set; }

        [RadioReportId("elb_m_0402135", InstanceName = nameof(BonesFindingType.Mass))]
        public bool IsCalcification { get; set; }

        [RadioReportId("elb_m_0402136", InstanceName = nameof(BonesFindingType.Mass))]
        public bool IsCentral { get; set; }

        [RadioReportId("elb_m_0402137", InstanceName = nameof(BonesFindingType.Mass))]
        public bool IsDiffuselyDistributed { get; set; }

        [RadioReportId("elb_m_0402138", InstanceName = nameof(BonesFindingType.Mass))]
        public bool IsNidus { get; set; }

        [RadioReportId("elb_m_0402141", InstanceName = nameof(BonesFindingType.Mass))]
        public bool IsNidusT2wHyperintense { get; set; }

        [RadioReportId("elb_m_0402139", InstanceName = nameof(BonesFindingType.Mass))]
        public bool IsOsteoidMatrix { get; set; }

        [RadioReportId("elb_m_0402140", InstanceName = nameof(BonesFindingType.Mass))]
        public bool IsFatSignal { get; set; }

        [RadioReportId("elb_m_0404175", InstanceName = nameof(BonesFindingType.Mass))]
        public bool IsExpansile { get; set; }

        [RadioReportId("elb_m_0404176", InstanceName = nameof(BonesFindingType.Mass))]
        public bool IsOsteolytic { get; set; }

        [RadioReportId("elb_m_0404177", InstanceName = nameof(BonesFindingType.Mass))]
        public bool IsOsteoblastic { get; set; }

        [RadioReportId("elb_m_0404178", InstanceName = nameof(BonesFindingType.Mass))]
        public bool IsSclerotic { get; set; }

        [RadioReportId("elb_m_0404179", InstanceName = nameof(BonesFindingType.Mass))]
        public bool IsInfiltrationOfSoftTissue { get; set; }

        [RadioReportId("elb_m_0402113", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        [RadioReportId("elb_m_0405173", InstanceName = nameof(BonesFindingType.Mass))]
        public bool IsBoneMarrowEdema { get; set; }

        [RadioReportId("elb_m_0404165", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        [RadioReportId("elb_m_0405172", InstanceName = nameof(BonesFindingType.Mass))]
        public bool IsSoftTissueEdema { get; set; }

        [RadioReportId("elb_m_0403163", InstanceName = nameof(BonesFindingType.Mass))]
        public bool IsPeriostealReactionSunBurst { get; set; }

        [RadioReportId("elb_m_0403164", InstanceName = nameof(BonesFindingType.Mass))]
        public bool IsCodmanTriangle { get; set; }

        [RadioReportId("elb_m_0403165", InstanceName = nameof(BonesFindingType.Mass))]
        public bool IsCartilageCap { get; set; }

        [RadioReportId("elb_m_0403166", InstanceName = nameof(BonesFindingType.Mass))]
        public bool IsScleroticMargin { get; set; }

        [RadioReportId("elb_m_0403167", InstanceName = nameof(BonesFindingType.Mass))]
        public bool IsRimWithLowSignal { get; set; }

        [RadioReportId("elb_m_0403203", InstanceName = nameof(BonesFindingType.Mass))]
        public bool IsCapT2wHyperintense { get; set; }

        [RadioReportId("elb_m_0403204", InstanceName = nameof(BonesFindingType.Mass))]
        public bool IsMoreThanOneLesionSameEntity { get; set; }
    }
}