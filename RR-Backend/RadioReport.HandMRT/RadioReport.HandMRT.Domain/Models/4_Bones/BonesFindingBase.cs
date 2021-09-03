using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.HandMRT.Domain.Enums;

namespace RadioReport.HandMRT.Domain.Models
{
    public class BonesFindingBase : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("han_m_040106")]
        public BonesFindingType FindingType { get; set; }

        [RadioReportId("han_m_0403110", InstanceName = nameof(BonesFindingType.ImpactionAndImpingementSyndrome))]
        [RadioReportId("han_m_0403250", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        [RadioReportId("han_m_0405129", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsBoneMarrowEdema { get; set; }

        [RadioReportId("han_m_0405119", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        [RadioReportId("han_m_0404131", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        [RadioReportId("han_m_0405128", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsSoftTissueEdema { get; set; }

        [RadioReportId("han_m_0402111", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public TumorDifferentialDiagnosisType TumorDifferentialDiagnosisType { get; set; }

        [RadioReportId("han_m_0403174", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsEpiphyseal { get; set; }

        [RadioReportId("han_m_0403175", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsMetaphyseal { get; set; }

        public MarginType MarginType { get; set; }

        [RadioReportId("han_m_040270-l", InstanceName = nameof(HomogenityType), IsExportable = false)]
        public HomogeneityType HomogenityType { get; set; }

        public CortexType CortexType { get; set; }

        [RadioReportId("han_m_0403157", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public SignalTypeExtended SignalT1w { get; set; }

        [RadioReportId("han_m_0403160", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public SignalTypeExtended SignalT2w { get; set; }

        public ContrastEnhancementType ContrastEnhancementType { get; set; }

        [RadioReportId("han_m_040489-l", InstanceName = nameof(ContrastHomogenityType), IsExportable = false)]
        public HomogeneityType ContrastHomogenityType { get; set; }

        public ContrastDistributionType ContrastDistributionType { get; set; }

        [RadioReportId("han_m_040593", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsRound { get; set; }

        [RadioReportId("han_m_040594", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsLobulated { get; set; }

        [RadioReportId("han_m_040596", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsBroadBased { get; set; }

        [RadioReportId("han_m_040597", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsPedunculated { get; set; }

        [RadioReportId("han_m_040598", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsProjectingAway { get; set; }

        [RadioReportId("han_m_040278", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsSeptated { get; set; }

        [RadioReportId("han_m_040279", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsFluidLevel { get; set; }

        [RadioReportId("han_m_040280", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsCalcification { get; set; }

        [RadioReportId("han_m_040281", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsCentral { get; set; }

        [RadioReportId("han_m_040282", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsDiffuse { get; set; }

        [RadioReportId("han_m_040283", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsNidus { get; set; }

        [RadioReportId("han_m_040284", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsT2wHyperintense { get; set; }

        [RadioReportId("han_m_040285", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsOsteoidMatrix { get; set; }

        [RadioReportId("han_m_040286", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsFatSignal { get; set; }

        [RadioReportId("han_m_0403162", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsSunBurst { get; set; }

        [RadioReportId("han_m_0403163", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsCodmanSpur { get; set; }

        [RadioReportId("han_m_0403164", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsCartilageCap { get; set; }

        [RadioReportId("han_m_0403168", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsCapT2wHyperintense { get; set; }

        [RadioReportId("han_m_0403169", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsScleroticMargin { get; set; }

        [RadioReportId("han_m_0403170")]
        public bool IsMarginWithLowSignal { get; set; }

        [RadioReportId("han_m_0404136", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsExpansile { get; set; }

        [RadioReportId("han_m_0404137", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsOsteolytic { get; set; }

        [RadioReportId("han_m_0404138", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsOsteoblastic { get; set; }

        [RadioReportId("han_m_0404139", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsSclerotic { get; set; }

        [RadioReportId("han_m_0404140", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsSoftTissueInfiltration { get; set; }
    }
}
