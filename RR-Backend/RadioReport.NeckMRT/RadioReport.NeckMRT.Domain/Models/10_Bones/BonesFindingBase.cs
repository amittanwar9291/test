using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.NeckMRT.Domain.Enums;
using RadioReport.NeckMRT.Domain.Enums.Bones;

namespace RadioReport.NeckMRT.Domain.Models
{
    public class BonesFindingBase : FindingBase, IRadioReportIdConditionEvaluator
    {
        public override string InstanceName => FindingType.ToString();

        public MyelonPathologyType MyelonPathologyType { get; set; }

        [RadioReportId("nec_m_100115l", InstanceName = nameof(BonesFindingType.SpatialNeoplasm), IsExportable = false)]
        public DescriptionType DescriptionType { get; set; }

        [RadioReportId("nec_m_100106")]
        public BonesFindingType FindingType { get; set; }

        [RadioReportId("nec_m_100258", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public SpatialNeoplasmDifferentialDiagnosisType MainSpatialNeoplasmDifferentialDiagnosisType1 { get; set; }

        public MarginType MarginType { get; set; }

        [RadioReportId("nec_m_100280l", InstanceName = nameof(MainHomogeneityType), IsExportable = false)]
        public HomogeneityType MainHomogeneityType { get; set; }

        public ShapeType ShapeType { get; set; }

        public CorticalBoneType CorticalBoneType { get; set; }

        [RadioReportId("nec_m_100458", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public SignalTypeExtended T1w { get; set; }

        [RadioReportId("nec_m_100461", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public SignalTypeExtended T2w { get; set; }

        [RadioReportId("nec_m_100529", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsSeptatedChambered { get; set; }

        [RadioReportId("nec_m_100530", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsFluidLevel { get; set; }

        [RadioReportId("nec_m_100531", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsCalcification { get; set; }

        [RadioReportId("nec_m_100532", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsCentral { get; set; }

        [RadioReportId("nec_m_100533", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsDiffuseDistribution { get; set; }

        [RadioReportId("nec_m_100534", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsNidus { get; set; }

        [RadioReportId("nec_m_100535", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsT2wHyperintense { get; set; }

        [RadioReportId("nec_m_100536", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsFatSignal { get; set; }

        public ContrastEnhancementQuantitativeType ContrastEnhancementQuantitativeType { get; set; }

		[RadioReportId("nec_m_100280l", InstanceName = nameof(SubHomogeneityType), IsExportable = false)]
        public HomogeneityType SubHomogeneityType { get; set; }

        public ContrastEnhancementDistributionType ContrastEnhancementDistributionType { get; set; }

        [RadioReportId("nec_m_100367", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsPeriostealReaction { get; set; }

        [RadioReportId("nec_m_100368", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsSclerosisEdge { get; set; }

        [RadioReportId("nec_m_100370", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsExpansive { get; set; }

        [RadioReportId("nec_m_100371", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsOsteolytic { get; set; }

        [RadioReportId("nec_m_100372", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsOsteoblastic { get; set; }

        [RadioReportId("nec_m_100373", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsSclerotic { get; set; }

        [RadioReportId("nec_m_100374", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsInfiltrationSoftTissues { get; set; }

        [RadioReportId("nec_m_100375", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsInfiltrationOfAdjacentbone { get; set; }

        [RadioReportId("nec_m_100417", InstanceName = nameof(BonesFindingType.Spondylodiscitis))]
        [RadioReportId("nec_m_100512", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        [RadioReportId("nec_m_100463", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsSoftTissueEdema { get; set; }

        [RadioReportId("nec_m_100425", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        [RadioReportId("nec_m_100464", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsBoneMarrowEdema { get; set; }

        [RadioReportId("nec_m_100537", InstanceName = nameof(BonesFindingType.SpatialNeoplasm))]
        public bool IsOverOneLesion { get; set; }

        public bool CheckCondition(string customConditionId) =>
            customConditionId switch
            {
                nameof(MyelonPathologyType.Myelopathy) => customConditionId == MyelonPathologyType.ToString(),
                nameof(MyelonPathologyType.Syringohydromyelia) => customConditionId == MyelonPathologyType.ToString(),
                nameof(MyelonPathologyType.SpinalCanalMass) => customConditionId == MyelonPathologyType.ToString(),
                _ => false
            };
    }
}
