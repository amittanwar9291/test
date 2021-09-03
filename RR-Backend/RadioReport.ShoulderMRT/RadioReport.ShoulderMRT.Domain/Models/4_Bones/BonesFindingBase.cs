using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.ShoulderMRT.Domain.Enums;

namespace RadioReport.ShoulderMRT.Domain.Models
{
    public class BonesFindingBase : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("sho_m_040106")]
        public BonesFindingType FindingType { get; set; }

        [RadioReportId("sho_m_0402218", InstanceName = nameof(BonesFindingType.BoneTumor))]
        public TumorDifferentialDiagnosis TumorDifferentialDiagnosis { get; set; }

        public SecondLocalizationType SecondLocalizationType { get; set; }

        public LimitationType LimitationType { get; set; }

        [RadioReportId("sho_m_0402227-l", InstanceName = nameof(HomogeneityType), IsExportable = false)]
        public HomogeneityType HomogeneityType { get; set; }

        public CortexType CortexType { get; set; }

        [RadioReportId("sho_m_0403226", InstanceName = nameof(BonesFindingType.BoneTumor))]
        public SignalType SignalT1w { get; set; }

        [RadioReportId("sho_m_0403228", InstanceName = nameof(BonesFindingType.BoneTumor))]
        public SignalType SignalT2w { get; set; }

        public CMEnhancementQuantitativeType CMenhancementQuantitativeType { get; set; }

        [RadioReportId("sho_m_0404222-l", InstanceName = nameof(NoCMEnhancementHomogeneityType), IsExportable = false)]
        public HomogeneityType NoCMEnhancementHomogeneityType { get; set; }

        public CMEnhancementDistributionType CMEnhancementDistributionType { get; set; }

        [RadioReportId("sho_m_0405217", InstanceName = nameof(BonesFindingType.BoneTumor))]
        public bool IsLobulated { get; set; }

        [RadioReportId("sho_m_0405218", InstanceName = nameof(BonesFindingType.BoneTumor))]
        public bool IsRound { get; set; }

        [RadioReportId("sho_m_0405219", InstanceName = nameof(BonesFindingType.BoneTumor))]
        public bool IsGeographicConfiguration { get; set; }

        [RadioReportId("sho_m_0405220", InstanceName = nameof(BonesFindingType.BoneTumor))]
        public bool IsBroadBased { get; set; }

        [RadioReportId("sho_m_0405221", InstanceName = nameof(BonesFindingType.BoneTumor))]
        public bool IsStalked { get; set; }

        [RadioReportId("sho_m_0405222", InstanceName = nameof(BonesFindingType.BoneTumor))]
        public bool IsOrientationFromTheEpiphysisTowardsTheDiaphysis { get; set; }


        [RadioReportId("sho_m_0402231", InstanceName = nameof(BonesFindingType.BoneTumor))]
        public bool IsSeptated { get; set; }

        [RadioReportId("sho_m_0402232", InstanceName = nameof(BonesFindingType.BoneTumor))]
        public bool IsFluidLevel { get; set; }

        [RadioReportId("sho_m_0402233", InstanceName = nameof(BonesFindingType.BoneTumor))]
        public bool IsCalcification { get; set; }

        [RadioReportId("sho_m_0402234", InstanceName = nameof(BonesFindingType.BoneTumor))]
        public bool IsCentrally { get; set; }

        [RadioReportId("sho_m_0402235", InstanceName = nameof(BonesFindingType.BoneTumor))]
        public bool IsDiffuselyDistributed { get; set; }

        [RadioReportId("sho_m_0402236", InstanceName = nameof(BonesFindingType.BoneTumor))]
        public bool IsNidus { get; set; }

        [RadioReportId("sho_m_0402237", InstanceName = nameof(BonesFindingType.BoneTumor))]
        public bool IsOsteoidMatrix { get; set; }

        [RadioReportId("sho_m_0402238", InstanceName = nameof(BonesFindingType.BoneTumor))]
        public bool IsFatSignal { get; set; }

        [RadioReportId("sho_m_0402239", InstanceName = nameof(BonesFindingType.BoneTumor))]
        public bool IsT2wHyperIntense { get; set; }

        [RadioReportId("sho_m_0405224", InstanceName = nameof(BonesFindingType.BoneTumor))]
        public bool IsPeriostealReactionSunburst { get; set; }

        [RadioReportId("sho_m_0405225", InstanceName = nameof(BonesFindingType.BoneTumor))]
        public bool IsPeriostealSpurCodmanSpur { get; set; }

        [RadioReportId("sho_m_0405226", InstanceName = nameof(BonesFindingType.BoneTumor))]
        public bool IsCartilageCap { get; set; }

        [RadioReportId("sho_m_0405227", InstanceName = nameof(BonesFindingType.BoneTumor))]
        public bool IsScleroticMargin { get; set; }

        [RadioReportId("sho_m_0405228", InstanceName = nameof(BonesFindingType.BoneTumor))]
        public bool IsMarginWithLowSignalPerichondriumAboveCartilageCap { get; set; }

        [RadioReportId("sho_m_0402240", InstanceName = nameof(BonesFindingType.BoneTumor))]
        public bool IsCapT2wHyperintense { get; set; }

        [RadioReportId("sho_m_0403230", InstanceName = nameof(BonesFindingType.BoneTumor))]
        public bool IsExpansive { get; set; }

        [RadioReportId("sho_m_0403231", InstanceName = nameof(BonesFindingType.BoneTumor))]
        public bool IsOsteolytic { get; set; }

        [RadioReportId("sho_m_0403232", InstanceName = nameof(BonesFindingType.BoneTumor))]
        public bool IsOsteoblastic { get; set; }

        [RadioReportId("sho_m_0403233", InstanceName = nameof(BonesFindingType.BoneTumor))]
        public bool IsSclerotic { get; set; }

        [RadioReportId("sho_m_0403234", InstanceName = nameof(BonesFindingType.BoneTumor))]
        public bool IsInfiltrationOfSoftTissue { get; set; }

        [RadioReportId("sho_m_0403238", InstanceName = nameof(BonesFindingType.BoneTumor))]
        public bool IsEnvironmentalReactionSoftTissueEdema { get; set; }

        [RadioReportId("sho_m_0403239", InstanceName = nameof(BonesFindingType.BoneTumor))]
        public bool IsBoneMarrowEdema { get; set; }
    }
}
