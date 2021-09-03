using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.PelvisMRT.Domain.Enums.Bones;

namespace RadioReport.PelvisMRT.Domain.Models
{
    public class BonesFindingBase : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("pel_m_100106")]
        public BonesFindingType FindingType { get; set; }

        [RadioReportId("pel_m_100466", InstanceName = nameof(BonesFindingType.StressFracture))]
        [RadioReportId("pel_m_100496", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
        [RadioReportId("pel_m_100437", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        [RadioReportId("pel_m_1003107", InstanceName = nameof(BonesFindingType.Tumor))]
        [RadioReportId("pel_m_1003200", InstanceName = nameof(BonesFindingType.SubchondralInsufficiencyFracture))]
        public bool IsBoneMarrowEdema { get; set; }

        [RadioReportId("pel_m_1003106", InstanceName = nameof(BonesFindingType.Tumor))]
        [RadioReportId("pel_m_1004116", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsSoftTissueEdema { get; set; }

        [RadioReportId("pel_m_100570", InstanceName = nameof(BonesFindingType.Tumor))]
        [RadioReportId("pel_m_1003126", InstanceName = nameof(BonesFindingType.Bursitis))]
        public bool IsCalcification { get; set; }

        public ContrastEnhancementType ContrastEnhancementType { get; set; }

        [RadioReportId("pel_m_100243", InstanceName = nameof(BonesFindingType.Tumor))]
        public BonesDiagnosisType DifferentialDiagnosis { get; set; }

        [RadioReportId("pel_m_100245", InstanceName = nameof(BonesFindingType.Tumor))]
        public bool IsEpiphyseal { get; set; }

        [RadioReportId("pel_m_100246", InstanceName = nameof(BonesFindingType.Tumor))]
        public bool IsMetaphyseal { get; set; }

        [RadioReportId("pel_m_100247", InstanceName = nameof(BonesFindingType.Tumor))]
        public bool IsDiaphyseal { get; set; }

        public LimitationType LimitationType { get; set; }

        [RadioReportId("pel_m_100252-l", InstanceName = nameof(HomogeneityType), IsExportable = false, CustomConditionName = nameof(BonesFindingType.Tumor))]
        public HomogeneityType HomogeneityType { get; set; }

        public CorticalisType CorticalisType { get; set; }

        [RadioReportId("pel_m_100394", InstanceName = nameof(BonesFindingType.Tumor))]
        public SignalTypeExtended SignalT1w { get; set; }

        [RadioReportId("pel_m_100396", InstanceName = nameof(BonesFindingType.Tumor))]
        public SignalTypeExtended SignalT2w { get; set; }

        [RadioReportId("pel_m_100471-l", InstanceName = nameof(ContrastHomogeneityType), IsExportable = false, CustomConditionName = nameof(BonesFindingType.Tumor))]
        public HomogeneityType ContrastHomogeneityType { get; set; }

        public ContrastEnhancementDistributionType ContrastEnhancementDistributionType { get; set; }

        [RadioReportId("pel_m_100568", InstanceName = nameof(BonesFindingType.Tumor))]
        public bool IsSeptetedOrChambered { get; set; }

        [RadioReportId("pel_m_100569", InstanceName = nameof(BonesFindingType.Tumor))]
        public bool IsLiquidLevel { get; set; }

        [RadioReportId("pel_m_100571", InstanceName = nameof(BonesFindingType.Tumor))]
        public bool IsCalcificationCentral { get; set; }

        [RadioReportId("pel_m_100574", InstanceName = nameof(BonesFindingType.Tumor))]
        public bool IsOsteoidMatrix { get; set; }

        [RadioReportId("pel_m_100575", InstanceName = nameof(BonesFindingType.Tumor))]
        public bool IsGreaseSignal { get; set; }

        [RadioReportId("pel_m_100576", InstanceName = nameof(BonesFindingType.Tumor))]
        public bool IsNidusT2wHyperintensity { get; set; }

        [RadioReportId("pel_m_100257", InstanceName = nameof(BonesFindingType.Tumor))]
        public bool IsPeriostalReaction { get; set; }

        [RadioReportId("pel_m_100278", InstanceName = nameof(BonesFindingType.Tumor))]
        public bool IsPeriostealSpur { get; set; }

        [RadioReportId("pel_m_100258", InstanceName = nameof(BonesFindingType.Tumor))]
        public bool IsCartilageCap { get; set; }

        [RadioReportId("pel_m_100259", InstanceName = nameof(BonesFindingType.Tumor))]
        public bool IsSclerosingRim { get; set; }

        [RadioReportId("pel_m_100262", InstanceName = nameof(BonesFindingType.Tumor))]
        public bool IsRimLowSignal { get; set; }

        [RadioReportId("pel_m_100272", InstanceName = nameof(BonesFindingType.Tumor))]
        public bool IsFormLobbied { get; set; }

        [RadioReportId("pel_m_100273", InstanceName = nameof(BonesFindingType.Tumor))]
        public bool IsFormRoundly { get; set; }

        [RadioReportId("pel_m_100274", InstanceName = nameof(BonesFindingType.Tumor))]
        public bool IsFormMaplikeConfiguration { get; set; }

        [RadioReportId("pel_m_100275", InstanceName = nameof(BonesFindingType.Tumor))]
        public bool IsFormBroadBased { get; set; }

        [RadioReportId("pel_m_100276", InstanceName = nameof(BonesFindingType.Tumor))]
        public bool IsFormStored { get; set; }

        [RadioReportId("pel_m_100277", InstanceName = nameof(BonesFindingType.Tumor))]
        public bool IsFormOrientation { get; set; }

        [RadioReportId("pel_m_100398", InstanceName = nameof(BonesFindingType.Tumor))]
        public bool IsOsteolytic { get; set; }

        [RadioReportId("pel_m_100399", InstanceName = nameof(BonesFindingType.Tumor))]
        public bool IsOsteoblastic { get; set; }

        [RadioReportId("pel_m_1003100", InstanceName = nameof(BonesFindingType.Tumor))]
        public bool IsExpansive { get; set; }

        [RadioReportId("pel_m_1003101", InstanceName = nameof(BonesFindingType.Tumor))]
        public bool IsSclerotic { get; set; }

        [RadioReportId("pel_m_1003102", InstanceName = nameof(BonesFindingType.Tumor))]
        public bool IsInfiltrationSoftTissue { get; set; }

        [RadioReportId("pel_m_1004140", InstanceName = nameof(BonesFindingType.Tumor))]
        public bool IsAnotherLesion { get; set; }
    }
}