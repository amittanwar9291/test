using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.KneeMRT.Domain.Enums;

namespace RadioReport.KneeMRT.Domain.Models
{
    public class OsteoInterfaceFinding : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("kne_m_060106")]
        public OsteoInterfaceFindingType FindingType { get; set; }

        [RadioReportId("kne_m_060203")]
        public OsteoKneeLocations Location { get; set; }

        [RadioReportId("kne_m_060301", InstanceName = nameof(OsteoInterfaceFindingType.Osteoarthrosis))]
        public bool IsOsteophytes { get; set; }

        [RadioReportId("kne_m_060302", InstanceName = nameof(OsteoInterfaceFindingType.Osteoarthrosis))]
        public bool IsChondropathy { get; set; }

        public OuterbridgeClassificationType OuterbridgeClassificationType { get; set; }

        [RadioReportId("kne_m_060401", InstanceName = nameof(OsteoInterfaceFindingType.Osteoarthrosis))]
        public bool IsExpansiveness { get; set; }

        [RadioReportId("kne_m_060402", InstanceName = nameof(OsteoInterfaceFindingType.Osteoarthrosis))]
        public int? ExpansivenessMaxDiameterInMm { get; set; }

        [RadioReportId("kne_m_060404", InstanceName = nameof(OsteoInterfaceFindingType.Osteoarthrosis))]
        public bool IsJointSurfaces { get; set; }

        public JointSurfaceType JointSurfaceType { get; set; }

        public UnipolarJointSurfaceType UnipolarJointSurfaceType { get; set; }

        [RadioReportId("kne_m_060409", InstanceName = nameof(OsteoInterfaceFindingType.Osteoarthrosis))]
        public bool IsChondrocalcinosis { get; set; }

        [RadioReportId("kne_m_060501", InstanceName = nameof(OsteoInterfaceFindingType.Osteoarthrosis))]
        public bool IsSubchondralCysts { get; set; }

        [RadioReportId("kne_m_060502", InstanceName = nameof(OsteoInterfaceFindingType.Osteoarthrosis))]
        public bool IsSubchondralEdema { get; set; }

        [RadioReportId("kne_m_060503", InstanceName = nameof(OsteoInterfaceFindingType.Osteoarthrosis))]
        public bool IsSubchondralSclerosis { get; set; }

        [RadioReportId("kne_m_060504", InstanceName = nameof(OsteoInterfaceFindingType.Osteoarthrosis))]
        public bool IsSynovialCyst { get; set; }

        [RadioReportId("kne_m_060505", InstanceName = nameof(OsteoInterfaceFindingType.Osteoarthrosis))]
        public bool IsBoneMarrowEdema { get; set; }

        [RadioReportId("kne_m_060506", InstanceName = nameof(OsteoInterfaceFindingType.Osteoarthrosis))]
        public bool IsFormOfArthrosis { get; set; }

        public FormOfArthrosisType FormOfArthrosisType { get; set; }

        public ChondralLesionType ChondralLesionType { get; set; }

        [RadioReportId("kne_m_060319", InstanceName = nameof(OsteoInterfaceFindingType.TraumaSubchondralFracture))]
        public bool IsHypointenseLineParallelToCortex { get; set; }

        [RadioReportId("kne_m_060320", InstanceName = nameof(OsteoInterfaceFindingType.TraumaSubchondralFracture))]
        public bool IsNoContourIrregularity { get; set; }

        [RadioReportId("kne_m_060321", InstanceName = nameof(OsteoInterfaceFindingType.TraumaSubchondralFracture))]
        public bool IsNoArticularSurfaceInvolvement { get; set; }

        [RadioReportId("kne_m_060323", InstanceName = nameof(OsteoInterfaceFindingType.TraumaSubchondralInsufficiencyFracture))]
        public bool IsHypointenseLineIrregular { get; set; }

        [RadioReportId("kne_m_060324", InstanceName = nameof(OsteoInterfaceFindingType.TraumaSubchondralInsufficiencyFracture))]
        public bool IsHypointenseAreaBetweenCortexAndLine { get; set; }

        [RadioReportId("kne_m_060325", InstanceName = nameof(OsteoInterfaceFindingType.TraumaSubchondralInsufficiencyFracture))]
        public bool IsArticularSurfaceImpression { get; set; }

        [RadioReportId("kne_m_060326", InstanceName = nameof(OsteoInterfaceFindingType.TraumaSubchondralInsufficiencyFracture))]
        public bool IsCorticalisImpression { get; set; }

        [RadioReportId("kne_m_060327", InstanceName = nameof(OsteoInterfaceFindingType.TraumaSubchondralInsufficiencyFracture))]
        public bool IsDetectionOfFluidInTheSubchondralSpace { get; set; }

        [RadioReportId("kne_m_060328", InstanceName = nameof(OsteoInterfaceFindingType.TraumaSubchondralInsufficiencyFracture))]
        public bool IsOsteochondralFragment { get; set; }

        [RadioReportId("kne_m_060329", InstanceName = nameof(OsteoInterfaceFindingType.TraumaSubchondralInsufficiencyFracture))]
        public int? SubchondralTraumaMaxDiameterInMm { get; set; }

        [RadioReportId("kne_m_060421", InstanceName = nameof(OsteoInterfaceFindingType.TraumaSubchondralInsufficiencyFracture))]
        public bool IsBoneMarrowEdemaExtended { get; set; }

        [RadioReportId("kne_m_060422", InstanceName = nameof(OsteoInterfaceFindingType.TraumaSubchondralInsufficiencyFracture))]
        public bool IsAssociatedMeniscusLesion { get; set; }

        [RadioReportId("kne_m_060423", InstanceName = nameof(OsteoInterfaceFindingType.TraumaSubchondralInsufficiencyFracture))]
        public bool IsLocationCentralInMainLoadZone { get; set; }

        [RadioReportId("kne_m_060332", InstanceName = nameof(OsteoInterfaceFindingType.TraumaOsteochondralFracture))]
        public bool IsHypointenseLineInterruptionCorticalis { get; set; }

        [RadioReportId("kne_m_060333", InstanceName = nameof(OsteoInterfaceFindingType.TraumaOsteochondralFracture))]
        public bool IsCurvedLine { get; set; }

        [RadioReportId("kne_m_060334", InstanceName = nameof(OsteoInterfaceFindingType.TraumaOsteochondralFracture))]
        public bool IsOsteochondralCorticalImpression { get; set; }

        [RadioReportId("kne_m_060335", InstanceName = nameof(OsteoInterfaceFindingType.TraumaOsteochondralFracture))]
        public bool IsArticularSurfaceInvolvement { get; set; }

        [RadioReportId("kne_m_060336", InstanceName = nameof(OsteoInterfaceFindingType.TraumaOsteochondralFracture))]
        public bool IsFragmentationArticularSurface { get; set; }

        [RadioReportId("kne_m_060337", InstanceName = nameof(OsteoInterfaceFindingType.TraumaOsteochondralFracture))]
        public bool IsOsteochondraFragment { get; set; }

        [RadioReportId("kne_m_060338", InstanceName = nameof(OsteoInterfaceFindingType.TraumaOsteochondralFracture))]
        public int? OsteochondralTraumaMaxDiameterInMm { get; set; }

        public OsteoInterfaceStageType StageType { get; set; }

        [RadioReportId("kne_m_060431", InstanceName = nameof(OsteoInterfaceFindingType.TraumaOsteochondralFracture))]
        public bool IsDetectionLooseBody { get; set; }

        public DetectionJointMouseLocalizationType DetectionJointMouseLocalizationType { get; set; }

        public AssociatedFindingType AssociatedFindingType { get; set; }

        public OsteoInterfaceClassificationType ClassificationType { get; set; }

        [RadioReportId("kne_m_060341", InstanceName = nameof(OsteoInterfaceFindingType.OsteochondrosisDissecans))]
        public bool IsBoneMarrowOedema { get; set; }

        [RadioReportId("kne_m_060343", InstanceName = nameof(OsteoInterfaceFindingType.OsteochondrosisDissecans))]
        public bool IsDetectionOsteochondralFragment { get; set; }

        public OsteoInterfaceDetectionDissekatType DetectionDissekatType { get; set; }

        [RadioReportId("kne_m_060346", InstanceName = nameof(OsteoInterfaceFindingType.OsteochondrosisDissecans))]
        public bool IsIntraosseousCysts { get; set; }

        [RadioReportId("kne_m_060347", InstanceName = nameof(OsteoInterfaceFindingType.OsteochondrosisDissecans))]
        public bool IsFluidEquivalentHem { get; set; }

        [RadioReportId("kne_m_060348", InstanceName = nameof(OsteoInterfaceFindingType.OsteochondrosisDissecans))]
        public bool IsIsointensToSynovia { get; set; }

        [RadioReportId("kne_m_060349", InstanceName = nameof(OsteoInterfaceFindingType.OsteochondrosisDissecans))]
        public bool IsExpiringDefect { get; set; }

        public OsteoInterfaceEpiphysealJointType EpiphysealJointType { get; set; }
        
        [RadioReportId("kne_m_060438", InstanceName = nameof(OsteoInterfaceFindingType.OsteochondrosisDissecans))]
        public int? LesionDiameter { get; set; }

        [RadioReportId("kne_m_060351", InstanceName = nameof(OsteoInterfaceFindingType.AvascularNecrosis))]
        public bool IsUninterruptedMarginalSclerosis { get; set; }

        [RadioReportId("kne_m_060352", InstanceName = nameof(OsteoInterfaceFindingType.AvascularNecrosis))]
        public bool IsWavyAppearance { get; set; }

        [RadioReportId("kne_m_060353", InstanceName = nameof(OsteoInterfaceFindingType.AvascularNecrosis))]
        public bool IsDoubleLineSign { get; set; }

        [RadioReportId("kne_m_060355", InstanceName = nameof(OsteoInterfaceFindingType.AvascularNecrosis))]
        public int? DiameterInfarction { get; set; }

        [RadioReportId("kne_m_060441", InstanceName = nameof(OsteoInterfaceFindingType.AvascularNecrosis))]
        public bool IsSurroundingBoneMarrowEdema { get; set; }

        [RadioReportId("kne_m_060442", InstanceName = nameof(OsteoInterfaceFindingType.AvascularNecrosis))]
        public bool IsBurglaryOfTheJointSurface { get; set; }

        [RadioReportId("kne_m_060443", InstanceName = nameof(OsteoInterfaceFindingType.AvascularNecrosis))]
        public int? BurglaryOfTheJointSurfaceDiameterInMm { get; set; }

        [RadioReportId("kne_m_060445", InstanceName = nameof(OsteoInterfaceFindingType.AvascularNecrosis))]
        public bool IsSubchondralFatSignalIntensityLoss { get; set; }
    }
}
