using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.KneeMRT.Domain.Enums.Bones;

namespace RadioReport.KneeMRT.Domain.Models
{
    public class BonesFindingBase : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("kne_m_040106")]
        public BonesFindingType FindingType { get; set; }

        [RadioReportId("kne_m_040243", InstanceName = nameof(BonesFindingType.BonesTumor))]
        public BonesDiagnosisType DifferentialDiagnosis { get; set; }

        #region BonesTumor

        public BonesLocalizationType LocalizationType { get; set; }

        public LimitationType LimitationType { get; set; }

        [RadioReportId("kne_m_040252-l", InstanceName = nameof(HomogeneityType), IsExportable = false)]
        public HomogeneityType HomogeneityType { get; set; }

        public CorticalisType CorticalisType { get; set; }

        [RadioReportId("kne_m_040379", InstanceName = nameof(BonesFindingType.BonesTumor))]
        public SignalTypeExtended SignalT1w { get; set; }

        [RadioReportId("kne_m_040380", InstanceName = nameof(BonesFindingType.BonesTumor))]
        public SignalTypeExtended SignalT2w { get; set; }

        public ContrastEnhancementType ContrastEnhancementType { get; set; }

        [RadioReportId("kne_m_040471-l", InstanceName = nameof(ContrastHomogeneityType), IsExportable = false)]
        public HomogeneityType ContrastHomogeneityType { get; set; }

        public ContrastEnhancementDistributionType ContrastEnhancementDistributionType { get; set; }

        [RadioReportId("kne_m_040543", InstanceName = nameof(BonesFindingType.BonesTumor))]
        public bool IsSeptetedOrChambered { get; set; }

        [RadioReportId("kne_m_040519", InstanceName = nameof(BonesFindingType.BonesTumor))]
        public bool IsLiquidLevel { get; set; }

        [RadioReportId("kne_m_040520", InstanceName = nameof(BonesFindingType.BonesTumor))]
        public bool IsCalcification { get; set; }

        [RadioReportId("kne_m_040521", InstanceName = nameof(BonesFindingType.BonesTumor))]
        public bool IsCalcificationCentral { get; set; }

        [RadioReportId("kne_m_040522")]
        public bool IsCalcificationDiffuselyDistributed { get; set; }

        [RadioReportId("kne_m_040523", InstanceName = nameof(BonesFindingType.BonesTumor))]
        public bool IsNidus { get; set; }

        [RadioReportId("kne_m_040524", InstanceName = nameof(BonesFindingType.BonesTumor))]
        public bool IsOsteoidMatrix { get; set; }

        [RadioReportId("kne_m_040525", InstanceName = nameof(BonesFindingType.BonesTumor))]
        public bool IsGreaseSignal { get; set; }

        [RadioReportId("kne_m_040257", InstanceName = nameof(BonesFindingType.BonesTumor))]
        public bool IsPeriostalReaction { get; set; }

        [RadioReportId("kne_m_040278", InstanceName = nameof(BonesFindingType.BonesTumor))]
        public bool IsPeriostealSpur { get; set; }

        [RadioReportId("kne_m_040258", InstanceName = nameof(BonesFindingType.BonesTumor))]
        public bool IsCartilageCap { get; set; }

        [RadioReportId("kne_m_040259", InstanceName = nameof(BonesFindingType.BonesTumor))]
        public bool IsSclerosingRim { get; set; }

        [RadioReportId("kne_m_040262", InstanceName = nameof(BonesFindingType.BonesTumor))]
        public bool IsRimLowSignal { get; set; }

        [RadioReportId("kne_m_040272", InstanceName = nameof(BonesFindingType.BonesTumor))]
        public bool IsFormLobbied { get; set; }

        [RadioReportId("kne_m_040273", InstanceName = nameof(BonesFindingType.BonesTumor))]
        public bool IsFormRoundly { get; set; }

        [RadioReportId("kne_m_040274", InstanceName = nameof(BonesFindingType.BonesTumor))]
        public bool IsFormMaplikeConfiguration { get; set; }

        [RadioReportId("kne_m_040275", InstanceName = nameof(BonesFindingType.BonesTumor))]
        public bool IsFormBroadBased { get; set; }

        [RadioReportId("kne_m_040276", InstanceName = nameof(BonesFindingType.BonesTumor))]
        public bool IsFormStored { get; set; }

        [RadioReportId("kne_m_040277", InstanceName = nameof(BonesFindingType.BonesTumor))]
        public bool IsFormOrientation { get; set; }

        [RadioReportId("kne_m_040384", InstanceName = nameof(BonesFindingType.BonesTumor))]
        public bool IsOsteolytic { get; set; }

        [RadioReportId("kne_m_040385", InstanceName = nameof(BonesFindingType.BonesTumor))]
        public bool IsOsteoblastic { get; set; }

        [RadioReportId("kne_m_040382", InstanceName = nameof(BonesFindingType.BonesTumor))]
        public bool IsExpansive { get; set; }

        [RadioReportId("kne_m_040387", InstanceName = nameof(BonesFindingType.BonesTumor))]
        public bool IsSclerotic { get; set; }

        [RadioReportId("kne_m_040383", InstanceName = nameof(BonesFindingType.BonesTumor))]
        public bool IsInfiltrationSoftTissue { get; set; }

        [RadioReportId("kne_m_040390", InstanceName = nameof(BonesFindingType.BonesTumor))]
        public bool IsReactionBoneMarrowEdema { get; set; }

        [RadioReportId("kne_m_040488", InstanceName = nameof(BonesFindingType.BonesTumor))]
        public bool IsAnotherLesion { get; set; }

        [RadioReportId("kne_m_040389", InstanceName = nameof(BonesFindingType.BonesTumor))]
        public bool IsReactionSoftTissueEdema { get; set; }

        #endregion
    }
}
