using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.FeetMRT.Domain.Enums.Bones;
using System;
using System.Collections.Generic;
using System.Text;

namespace RadioReport.FeetMRT.Domain.Models
{
    public class BonesFindingBase : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("anc_m_040106")]
        public BonesFindingType FindingType { get; set; }

        [RadioReportId("anc_m_0402201", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public DifferentialDiagnosisType SpaceRequirementDifferentialDiagnosis { get; set; }

        public BonesLimitationType LimitationType { get; set; }

        [RadioReportId("anc_m_0403234", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsEpiphyseal { get; set; }

        [RadioReportId("anc_m_0403235", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsMetaphyseal { get; set; }

        [RadioReportId("anc_m_0402161-l", InstanceName = nameof(HomogeneityType), IsExportable = false)]
        public BonesHomogeneityType HomogeneityType { get; set; }

        public CortexType CortexType { get; set; }

        [RadioReportId("anc_m_0403239", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public SignalTypeExtended SignalT1w { get; set; }

        [RadioReportId("anc_m_0403242", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public SignalTypeExtended SignalT2w { get; set; }

        public ContrastAgentEnhancementType ContrastAgentEnhancementType { get; set; }

        public ContrastAgentEnhancementFormType ContrastAgentEnhancementFormType { get; set; }

        [RadioReportId("anc_m_0405202", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsRound { get; set; }

        [RadioReportId("anc_m_0405203", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsLobulated { get; set; }

        [RadioReportId("anc_m_0405205", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsSessile { get; set; }

        [RadioReportId("anc_m_0405206", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsPedunculated { get; set; }

        [RadioReportId("anc_m_0405207", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsOrientationFromTheEpiphysisTowardTheDiaphysis { get; set; }

        [RadioReportId("anc_m_0402219", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsSeptatedChambered { get; set; }

        [RadioReportId("anc_m_0402220", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsLiquidLevel { get; set; }

        [RadioReportId("anc_m_0402221", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsCalcification { get; set; }

        [RadioReportId("anc_m_0402222", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsCentral { get; set; }

        [RadioReportId("anc_m_0402223", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsDiffuse { get; set; }

        [RadioReportId("anc_m_0402224", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsNidus { get; set; }

        [RadioReportId("anc_m_0402225", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsNidusT2wHyperintense { get; set; }

        [RadioReportId("anc_m_0402226", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsOsteoidMatrix { get; set; }

        [RadioReportId("anc_m_0402227", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsFatSignal { get; set; }

        [RadioReportId("anc_m_0403246", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsCartilageCap { get; set; }

        [RadioReportId("anc_m_0404229", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsExpanding { get; set; }

        [RadioReportId("anc_m_0404230", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsOsteolytic { get; set; }

        [RadioReportId("anc_m_0404231", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsOsteoblastic { get; set; }

        [RadioReportId("anc_m_0404232", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsSclerotic { get; set; }

        [RadioReportId("anc_m_0404233", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsInfiltrationOfSoftTissue { get; set; }

        [RadioReportId("anc_m_0405209", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsEnvironmentalReactionSoftTissueEdema { get; set; }

        [RadioReportId("anc_m_0405210", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsEnvironmentalReactionBoneMarrowEdema { get; set; }

        [RadioReportId("anc_m_0403244", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsPeriostealReaction { get; set; }

        [RadioReportId("anc_m_0403245", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsPeriostealSpur { get; set; }

        [RadioReportId("anc_m_0403250", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsScleroticMargin { get; set; }

        [RadioReportId("anc_m_0403251", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsEdgeWithLowSignal { get; set; }

        [RadioReportId("anc_m_0404219-l", InstanceName = nameof(NoCaEnhancementHomogeneityType), IsExportable = false)]
        public BonesHomogeneityType NoCaEnhancementHomogeneityType { get; set; }

        [RadioReportId("anc_m_0403249", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsCapT2wHyperintense { get; set; }
    }
}
