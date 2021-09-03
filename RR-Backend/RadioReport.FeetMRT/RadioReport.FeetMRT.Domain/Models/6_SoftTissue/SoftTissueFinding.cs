using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.FeetMRT.Domain.Enums;
using RadioReport.FeetMRT.Domain.Enums.SoftTissue;

namespace RadioReport.FeetMRT.Domain.Models
{
    public class SoftTissueFinding : SoftTissueFindingBase
    {
        

        #region Common

        [RadioReportId("anc_m_060204", InstanceName = nameof(SoftTissueFindingType.Effusion))]
        [RadioReportId("anc_m_060207", InstanceName = nameof(SoftTissueFindingType.Hematoma))]
        [RadioReportId("anc_m_060228", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        [RadioReportId("anc_m_0603128", InstanceName = nameof(SoftTissueFindingType.DiseaseOfTheSynoviaSynovitis))]
        [RadioReportId("anc_m_0603128", InstanceName = nameof(SoftTissueFindingType.DiseaseOfTheSynoviaFocalMass))]
        [RadioReportId("anc_m_060228", InstanceName = nameof(SoftTissueFindingType.Abscess))]
        public ThreeDimensionalLocalizations ThreeDimensionalLocalization { get; set; }

        [RadioReportId("anc_m_060357")]
        public TendonsLocalizations TendonsLocalization { get; set; }

        [RadioReportId("anc_m_060504", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease))]
        [RadioReportId("anc_m_060507", InstanceName = nameof(SoftTissueFindingType.DiseasesOfTheMTP))]
        [RadioReportId("anc_m_0604122", InstanceName = nameof(SoftTissueFindingType.DiseaseOfTheSynoviaFocalMass))]
        [RadioReportId("anc_m_060524", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        [RadioReportId("anc_m_0603142", InstanceName = nameof(SoftTissueFindingType.CharcotFoot))]
        public bool IsSubordinated { get; set; }

        [RadioReportId("anc_m_060410", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease))]
        [RadioReportId("anc_m_060480", InstanceName = nameof(SoftTissueFindingType.DiseasesOfTheMTP))]
        public bool IsRetraction { get; set; }

        public DetailType DetailType { get; set; }

        [RadioReportId("anc_m_060309", InstanceName = nameof(SoftTissueFindingType.Hematoma))]
        [RadioReportId("anc_m_060436", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease))]
        [RadioReportId("anc_m_0603112", InstanceName = nameof(SoftTissueFindingType.Abscess))]
        public int? DetailMaxDiameterInMm { get; set; }

        [RadioReportId("anc_m_060520", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        [RadioReportId("anc_m_0604119", InstanceName = nameof(SoftTissueFindingType.DiseaseOfTheSynoviaFocalMass))]
        public DifferentialDiagnosisType DifferentialDiagnosis1 { get; set; }

        [RadioReportId("anc_m_060523", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        [RadioReportId("anc_m_0604121", InstanceName = nameof(SoftTissueFindingType.DiseaseOfTheSynoviaFocalMass))]
        public DifferentialDiagnosisType DifferentialDiagnosis2 { get; set; }

        [RadioReportId("anc_m_060526", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        public DifferentialDiagnosisType DifferentialDiagnosis3 { get; set; }

        public CmEnhancementType CmEnhancementType { get; set; }

        [RadioReportId("anc_m_060434", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease), CustomConditionName = nameof(PlantarFasciaDiseaseType.PlantarFibromatosisLedderhoseDisease))]
        [RadioReportId("anc_m_060438", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease), CustomConditionName = nameof(PlantarFasciaDiseaseType.ForeignBodyGranulomatousReaction))]
        [RadioReportId("anc_m_0602105", InstanceName = nameof(SoftTissueFindingType.CharcotFoot))]
        public bool IsMoreThanOneLesion { get; set; }

        [RadioReportId("anc_m_060405", InstanceName = nameof(SoftTissueFindingType.Effusion))]
        [RadioReportId("anc_m_060297", InstanceName = nameof(SoftTissueFindingType.DiseaseOfTheSynoviaFocalMass))]
        [RadioReportId("anc_m_060535", InstanceName = nameof(SoftTissueFindingType.CharcotFoot))]
        public bool IsFreeJointBody { get; set; }

        [RadioReportId("anc_m_060333", InstanceName = nameof(SoftTissueFindingType.DiseasesOfTheMTP))]
        [RadioReportId("anc_m_0604131", InstanceName = nameof(SoftTissueFindingType.MuscleLesion))]
        public bool IsBonyAvulsion { get; set; }

        [RadioReportId("anc_m_060453", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease))]
        [RadioReportId("anc_m_060277", InstanceName = nameof(SoftTissueFindingType.CharcotFoot))]
        public bool IsBoneMarrowEdema { get; set; }

        [RadioReportId("anc_m_060296", InstanceName = nameof(SoftTissueFindingType.DiseaseOfTheSynoviaFocalMass))]
        [RadioReportId("anc_m_060391", InstanceName = nameof(SoftTissueFindingType.CharcotFoot))]
        public bool IsArticularEffusion { get; set; }

        [RadioReportId("anc_m_060561", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        [RadioReportId("anc_m_0604164", InstanceName = nameof(SoftTissueFindingType.DiseaseOfTheSynoviaFocalMass))]
        [RadioReportId("anc_m_0602107", InstanceName = nameof(SoftTissueFindingType.CharcotFoot))]
        public bool IsSuspicionOf { get; set; }

        public DiseaseOfTheSynoviaType LocalizationOfTheSynoviaSynovitisType { get; set; }

        [RadioReportId("anc_m_0603138", InstanceName = nameof(SoftTissueFindingType.DiseaseOfTheSynoviaFocalMass))]
        [RadioReportId("anc_m_0603138", InstanceName = nameof(SoftTissueFindingType.DiseaseOfTheSynoviaSynovitis))]
        public bool IsIntraarticular { get; set; }

        [RadioReportId("anc_m_0603139", InstanceName = nameof(SoftTissueFindingType.DiseaseOfTheSynoviaFocalMass))]
        [RadioReportId("anc_m_0603139", InstanceName = nameof(SoftTissueFindingType.DiseaseOfTheSynoviaSynovitis))]
        public bool IsExtraarticular { get; set; }

        [RadioReportId("anc_m_060558", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        [RadioReportId("anc_m_0604156", InstanceName = nameof(SoftTissueFindingType.DiseaseOfTheSynoviaFocalMass))]
        public bool IsHistologyKnown { get; set; }

        public HistologyKnownType HistologyKnownType { get; set; }


        #endregion

        #region Effusion

        public DimensionType DimensionType { get; set; }

        public QualityType QualityType { get; set; }

        [RadioReportId("anc_m_060404", InstanceName = nameof(SoftTissueFindingType.Effusion))]
        public bool IsExtravasationArticularEffusion { get; set; }
        
        [RadioReportId("anc_m_060406", InstanceName = nameof(SoftTissueFindingType.Effusion))]
        public int? FreeJointBodyDiameterInMm { get; set; }

        #endregion

        #region PlantarFasciaDisease

        [RadioReportId("anc_m_060210", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease))]
        public bool IsCentral { get; set; }

        [RadioReportId("anc_m_060211", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease))]
        public bool IsMedial { get; set; }

        [RadioReportId("anc_m_060212", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease))]
        public bool IsLateral { get; set; }

        public PlantarFasciaDiseaseType PlantarFasciaDiseaseType { get; set; }

        public RuptureType RuptureType { get; set; }

        [RadioReportId("anc_m_060411", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease))]
        public int? RetractionDimensionInMm { get; set; }

        [RadioReportId("anc_m_060413", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease))]
        public bool IsPlantarHeelSpur { get; set; }

        [RadioReportId("anc_m_060414", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease))]
        public bool IsBoneMarrowEdemaOfTheCalcaneus { get; set; }

        [RadioReportId("anc_m_060415", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease))]
        public bool IsThickeningOfTheFascia { get; set; }

        [RadioReportId("anc_m_060417", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease))]
        public bool IsSpindleShaped { get; set; }

        [RadioReportId("anc_m_060418", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease))]
        public bool IsCloseToTheCalcaneus { get; set; }

        [RadioReportId("anc_m_060419", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease))]
        public bool IsT1wIncreasedSignalIntensityTheFascia { get; set; }

        [RadioReportId("anc_m_060420", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease))]
        public bool IsT2wIncreasedSignalIntensityTheFascia { get; set; }

        [RadioReportId("anc_m_060422", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease))]
        public bool IsSurroundingEdemaOrPerifasciitis { get; set; }

        [RadioReportId("anc_m_060423", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease))]
        public bool IsSignalIncreaseOfTheAdjacentMusculature { get; set; }

        [RadioReportId("anc_m_060424", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease))]
        public bool IsHypervascularization { get; set; }

        [RadioReportId("anc_m_060426", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease))]
        public bool IsDistalLocalization { get; set; }

        [RadioReportId("anc_m_060427", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease))]
        public bool IsProximalLocalization { get; set; }

        [RadioReportId("anc_m_060428", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease))]
        public bool IsNode { get; set; }

        public NodeType NodeType { get; set; }

        [RadioReportId("anc_m_060431", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease))]
        public bool IsFibroma { get; set; }

        [RadioReportId("anc_m_060432", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease))]
        public int? FibromaMaxDiameterInMm { get; set; }
        
        [RadioReportId("anc_m_060435", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease))]
        public bool IsHeterogeneousSignalIntensityInT1wOrT2w { get; set; }

        [RadioReportId("anc_m_060439", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease))]
        public bool IsSurroundingInflammatoryReaction { get; set; }

        [RadioReportId("anc_m_060440", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease))]
        public bool IsLowSignalThrombusInDeepPlantarVein { get; set; }

        [RadioReportId("anc_m_060441", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease))]
        public bool IsDilatedVein { get; set; } 

        [RadioReportId("anc_m_060442", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease))]
        public bool IsLowSignalThrombusWithFillingDefect { get; set; } 

        [RadioReportId("anc_m_060443", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease))]
        public bool IsPerivascularEdema { get; set; }

        [RadioReportId("anc_m_060445", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease))]
        public bool IsMAbductorDigitiMinimi { get; set; }

        [RadioReportId("anc_m_060446", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease))]
        public bool IsMFlexorDigitorumBrevis { get; set; }

        [RadioReportId("anc_m_060447", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease))]
        public bool IsMQuadratusPlantae { get; set; }

        public MuscleChangeType MuscleChangeType { get; set; }

        [RadioReportId("anc_m_060452", InstanceName = nameof(SoftTissueFindingType.PlantarFasciaDisease))]
        public bool IsLinearIntramedullaryT1wHypointensity { get; set; }

        #endregion

        #region DiseasesOfTheMTP

        public DiseasesOfTheMTPType DiseasesOfTheMtpType { get; set; }

        public D1Type D1Type { get; set; }

        [RadioReportId("anc_m_060456", InstanceName = nameof(SoftTissueFindingType.DiseasesOfTheMTP))]
        public int? HalluxValgusAngleInDegrees { get; set; }

        [RadioReportId("anc_m_060460", InstanceName = nameof(SoftTissueFindingType.DiseasesOfTheMTP))]
        public int? IntermetatarsalAngleInDegrees { get; set; }

        [RadioReportId("anc_m_060462", InstanceName = nameof(SoftTissueFindingType.DiseasesOfTheMTP))]
        public bool IsLateralDeviation { get; set; }

        [RadioReportId("anc_m_060463", InstanceName = nameof(SoftTissueFindingType.DiseasesOfTheMTP))]
        public bool IsLateralDislocationTheSesamoidBones { get; set; }

        [RadioReportId("anc_m_060464", InstanceName = nameof(SoftTissueFindingType.DiseasesOfTheMTP))]
        public bool IsLateralProliferationSesamoidBones { get; set; }

        [RadioReportId("anc_m_060465", InstanceName = nameof(SoftTissueFindingType.DiseasesOfTheMTP))]
        public bool IsSubluxationInBigToeMetatarsophalangealJoint { get; set; }

        [RadioReportId("anc_m_060466", InstanceName = nameof(SoftTissueFindingType.DiseasesOfTheMTP))]
        public bool IsSynovialEnhancement { get; set; }

        [RadioReportId("anc_m_060469", InstanceName = nameof(SoftTissueFindingType.DiseasesOfTheMTP))]
        public bool IsPseudoexostosisMedial { get; set; }

        public DiseasesOfTheMTPLocalizationType DiseasesOfTheMTPLocalizationType { get; set; }

        public PathologyType PathologyType { get; set; }

        [RadioReportId("anc_m_060325", InstanceName = nameof(SoftTissueFindingType.DiseasesOfTheMTP))]
        public bool IsD1 { get; set; }

        [RadioReportId("anc_m_060326", InstanceName = nameof(SoftTissueFindingType.DiseasesOfTheMTP))]
        public bool IsD2 { get; set; }

        [RadioReportId("anc_m_060327", InstanceName = nameof(SoftTissueFindingType.DiseasesOfTheMTP))]
        public bool IsD3 { get; set; }

        [RadioReportId("anc_m_060328", InstanceName = nameof(SoftTissueFindingType.DiseasesOfTheMTP))]
        public bool IsD4 { get; set; }

        [RadioReportId("anc_m_060329", InstanceName = nameof(SoftTissueFindingType.DiseasesOfTheMTP))]
        public bool IsD5 { get; set; }

        [RadioReportId("anc_m_060477", InstanceName = nameof(SoftTissueFindingType.DiseasesOfTheMTP))]
        public bool IsExpansionUpToCollateralLigaments { get; set; }

        [RadioReportId("anc_m_060478", InstanceName = nameof(SoftTissueFindingType.DiseasesOfTheMTP))]
        public bool IsPericapsularFibrosis { get; set; }

        [RadioReportId("anc_m_060479", InstanceName = nameof(SoftTissueFindingType.DiseasesOfTheMTP))]
        public bool IsSynovitis { get; set; }

        [RadioReportId("anc_m_060481", InstanceName = nameof(SoftTissueFindingType.DiseasesOfTheMTP))]
        public bool IsLuxationMTP { get; set; }

        [RadioReportId("anc_m_060482", InstanceName = nameof(SoftTissueFindingType.DiseasesOfTheMTP))]
        public bool IsAdjacentGanglion { get; set; }

        [RadioReportId("anc_m_060483", InstanceName = nameof(SoftTissueFindingType.DiseasesOfTheMTP))]
        public int? AdjacentGanglionMaxDiameterInMm { get; set; }

        #endregion

        #region Burisitis

        [RadioReportId("anc_m_060219", InstanceName = nameof(SoftTissueFindingType.Burisitis))]
        public bool IsBursaMetatarsophalangealis { get; set; }

        [RadioReportId("anc_m_060220", InstanceName = nameof(SoftTissueFindingType.Burisitis))]
        public bool IsMetatarsalBursa { get; set; }

        [RadioReportId("anc_m_060221", InstanceName = nameof(SoftTissueFindingType.Burisitis))]
        public bool IsBursaIntermetatarsale { get; set; }

        [RadioReportId("anc_m_060222", InstanceName = nameof(SoftTissueFindingType.Burisitis))]
        public bool IsBursaSubcutaneaCalcanea { get; set; }

        [RadioReportId("anc_m_060223", InstanceName = nameof(SoftTissueFindingType.Burisitis))]
        public bool IsBursaRetrocalcaneal { get; set; }

        [RadioReportId("anc_m_060224", InstanceName = nameof(SoftTissueFindingType.Burisitis))]
        public bool IsBursaSubcutaneaMedialMalleolus { get; set; }

        [RadioReportId("anc_m_060225", InstanceName = nameof(SoftTissueFindingType.Burisitis))]
        public bool IsBursaSubcutaneaLateralMalleolus { get; set; }

        [RadioReportId("anc_m_0603116", InstanceName = nameof(SoftTissueFindingType.Burisitis))]
        public int? MaxDiameterBursa { get; set; }

        public LimitationType LimitationType { get; set; }

        [RadioReportId("anc_m_0603122", InstanceName = nameof(SoftTissueFindingType.Burisitis))]
        public bool IsBleedingIn { get; set; }

        [RadioReportId("anc_m_0603124", InstanceName = nameof(SoftTissueFindingType.Burisitis))]
        public bool IsMortonNovelty { get; set; } 

        #endregion

        #region SoftTissueTumor

        public DescriptionType DescriptionType { get; set; }

        [RadioReportId("anc_m_060487", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        public int? ExpansionSizeMaxInMm { get; set; }

        [RadioReportId("anc_m_060489", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        public int? Expansion2ndStageInMm { get; set; }

        [RadioReportId("anc_m_060491", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        public int? Expansion3rdStageInMm { get; set; }

        public InterdigitalSpaceType InterdigitalSpaceType { get; set; }

        [RadioReportId("anc_m_060236", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        public bool IsCutisThickening { get; set; }

        [RadioReportId("anc_m_060237", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        public bool IsPressureCorrosionBone { get; set; }

        [RadioReportId("anc_m_060351", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        public bool IsDiffusionRestriction { get; set; }

        [RadioReportId("anc_m_0604107", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        public bool IsInTheSepta { get; set; }

        #endregion

        #region DiseaseOfTheSynoviaSynovitis

        [RadioReportId("anc_m_0604109", InstanceName = nameof(SoftTissueFindingType.DiseaseOfTheSynoviaSynovitis))]
        public bool IsHyperplasia { get; set; }

        [RadioReportId("anc_m_0604110", InstanceName = nameof(SoftTissueFindingType.DiseaseOfTheSynoviaSynovitis))]
        public bool IsHigherT2wOrPDSignal { get; set; }

        [RadioReportId("anc_m_0604111", InstanceName = nameof(SoftTissueFindingType.DiseaseOfTheSynoviaSynovitis))]
        public bool IsIncreasedCMEnhancement { get; set; }

        #endregion

        #region DiseaseOfTheSynoviaFocalMass

        [RadioReportId("anc_m_0604115", InstanceName = nameof(SoftTissueFindingType.DiseaseOfTheSynoviaFocalMass))]
        public SignalType SignalBehaviorT1wType { get; set; }

        [RadioReportId("anc_m_0604117", InstanceName = nameof(SoftTissueFindingType.DiseaseOfTheSynoviaFocalMass))]
        public SignalType SignalBehaviorT2wType { get; set; }

        public SynoviaFormType SynoviaFormType { get; set; }

        [RadioReportId("anc_m_060532", InstanceName = nameof(SoftTissueFindingType.DiseaseOfTheSynoviaFocalMass))]
        public bool IsSynovialNodulusMoreThanOneLesion { get; set; }

        [RadioReportId("anc_m_060528", InstanceName = nameof(SoftTissueFindingType.DiseaseOfTheSynoviaFocalMass))]
        public bool IsBloomingArtifact { get; set; }

        [RadioReportId("anc_m_060549", InstanceName = nameof(SoftTissueFindingType.DiseaseOfTheSynoviaFocalMass))]
        public bool IsNecrosis { get; set; }

        [RadioReportId("anc_m_060527", InstanceName = nameof(SoftTissueFindingType.DiseaseOfTheSynoviaFocalMass))]
        public bool IsSusceptibilityArtifact { get; set; }

        [RadioReportId("anc_m_060298", InstanceName = nameof(SoftTissueFindingType.DiseaseOfTheSynoviaFocalMass))]
        public bool IsFreeJointBodyMoreThanOneLesion { get; set; }

        [RadioReportId("anc_m_060299", InstanceName = nameof(SoftTissueFindingType.DiseaseOfTheSynoviaFocalMass))]
        public bool IsHaemarthros { get; set; }

        [RadioReportId("anc_m_0602100", InstanceName = nameof(SoftTissueFindingType.DiseaseOfTheSynoviaFocalMass))]
        public bool IsBonyErosionsInsertionSynovialMembrane { get; set; }

        [RadioReportId("anc_m_0603129-l", InstanceName = nameof(PowerfulHomogeneityType), IsExportable = false)]
        public HomogeneityType PowerfulHomogeneityType { get; set; }

        #endregion

        #region MuscleLesion
        [RadioReportId("anc_m_060250", InstanceName = nameof(SoftTissueFindingType.MuscleLesion))]
        public MuscleLesionLocalizationType MuscleLesionLocalizationType { get; set; }
        
        public LocalizationWithinOfTheMuscleType LocalizationWithinOfTheMuscleType { get; set; }

        [RadioReportId("anc_m_0603136", InstanceName = nameof(SoftTissueFindingType.MuscleLesion))]
        public bool IsMuscleLesion { get; set; }

        public ClassificationType ClassificationType { get; set; }

        [RadioReportId("anc_m_0604124", InstanceName = nameof(SoftTissueFindingType.MuscleLesion))]
        public bool IsCrossDiameterOfTheRuptureLessThan5Mm { get; set; }

        [RadioReportId("anc_m_0604126", InstanceName = nameof(SoftTissueFindingType.MuscleLesion))]
        public bool IsCrossDiameterOfTheRuptureMoreThan5Mm { get; set; }

        [RadioReportId("anc_m_0604128", InstanceName = nameof(SoftTissueFindingType.MuscleLesion))]
        public int? RetractionInMm { get; set; }

        [RadioReportId("anc_m_0604130", InstanceName = nameof(SoftTissueFindingType.MuscleLesion))]
        public bool IsWavyCourseOfTheFibers { get; set; }

        [RadioReportId("anc_m_0604137", InstanceName = nameof(SoftTissueFindingType.MuscleLesion))]
        public bool IsIntracorticalEdema { get; set; }

        [RadioReportId("anc_m_060551", InstanceName = nameof(SoftTissueFindingType.MuscleLesion))]
        public bool IsFattyDegeneration { get; set; }

        [RadioReportId("anc_m_060552", InstanceName = nameof(SoftTissueFindingType.MuscleLesion))]
        public bool IsMuscularAtrophy { get; set; }

        public MuscularAtrophyType MuscularAtrophyType { get; set; }

        [RadioReportId("anc_m_060555", InstanceName = nameof(SoftTissueFindingType.MuscleLesion))]
        public bool IsApophysitis { get; set; }

        [RadioReportId("anc_m_060556", InstanceName = nameof(SoftTissueFindingType.MuscleLesion))]
        public bool IsFasciaTear { get; set; }

        [RadioReportId("anc_m_060557", InstanceName = nameof(SoftTissueFindingType.MuscleLesion))]
        public bool IsMuscleHerniation { get; set; }

        [RadioReportId("anc_m_060260", InstanceName = nameof(SoftTissueFindingType.MuscleLesion))]
        public bool IsHematoma { get; set; }

        [RadioReportId("anc_m_060262", InstanceName = nameof(SoftTissueFindingType.MuscleLesion))]
        public bool IsIntramuscular { get; set; }

        [RadioReportId("anc_m_060263", InstanceName = nameof(SoftTissueFindingType.MuscleLesion))]
        public bool IsInterfacial { get; set; }

        [RadioReportId("anc_m_060264", InstanceName = nameof(SoftTissueFindingType.MuscleLesion))]
        public bool IsIntermuscular { get; set; }
        
        public AgeType AgeType { get; set; }

        #endregion

        #region TibialStressSyndromeTSS

        [RadioReportId("anc_m_0602670", InstanceName = nameof(SoftTissueFindingType.TibialStressSyndromeTSS))]
        public int? DistanceOfTheOSGInMm { get; set; }

        [RadioReportId("anc_m_0602672", InstanceName = nameof(SoftTissueFindingType.TibialStressSyndromeTSS))]
        public int? CcExpansionInMm { get; set; }

        [RadioReportId("anc_m_0602674", InstanceName = nameof(SoftTissueFindingType.TibialStressSyndromeTSS))]
        public int? MaxAxialExpansionInMm { get; set; }

        public FredericsonStadiumType FredericsonStadiumType { get; set; }

        #endregion

        #region CharcotFoot

        [RadioReportId("anc_m_060278", InstanceName = nameof(SoftTissueFindingType.CharcotFoot))]
        public bool IsPeriarticularlyAccentuated { get; set; }

        [RadioReportId("anc_m_060279", InstanceName = nameof(SoftTissueFindingType.CharcotFoot))]
        public bool InTheMetatarsotarsalJoints { get; set; }

        [RadioReportId("anc_m_060280", InstanceName = nameof(SoftTissueFindingType.CharcotFoot))]
        public bool IsInTheMetatarsophalangealJoints { get; set; }

        [RadioReportId("anc_m_060283", InstanceName = nameof(SoftTissueFindingType.CharcotFoot))]
        public bool IsBoneMarrowEdemaZone1 { get; set; }

        [RadioReportId("anc_m_060284", InstanceName = nameof(SoftTissueFindingType.CharcotFoot))]
        public bool IsBoneMarrowEdemaZone2 { get; set; }

        [RadioReportId("anc_m_060285", InstanceName = nameof(SoftTissueFindingType.CharcotFoot))]
        public bool IsBoneMarrowEdemaZone3 { get; set; }

        [RadioReportId("anc_m_060286", InstanceName = nameof(SoftTissueFindingType.CharcotFoot))]
        public bool IsBoneMarrowEdemaZone4 { get; set; }

        [RadioReportId("anc_m_060287", InstanceName = nameof(SoftTissueFindingType.CharcotFoot))]
        public bool IsBoneMarrowEdemaZone5 { get; set; }

        [RadioReportId("anc_m_060393", InstanceName = nameof(SoftTissueFindingType.CharcotFoot))]
        public bool IsJointDestruction { get; set; }

        [RadioReportId("anc_m_060396", InstanceName = nameof(SoftTissueFindingType.CharcotFoot))]
        public bool IsJointDestructionZone1 { get; set; }

        [RadioReportId("anc_m_060397", InstanceName = nameof(SoftTissueFindingType.CharcotFoot))]
        public bool IsJointDestructionZone2 { get; set; }

        [RadioReportId("anc_m_060398", InstanceName = nameof(SoftTissueFindingType.CharcotFoot))]
        public bool IsJointDestructionZone3 { get; set; }

        [RadioReportId("anc_m_060399", InstanceName = nameof(SoftTissueFindingType.CharcotFoot))]
        public bool IsJointDestructionZone4 { get; set; }

        [RadioReportId("anc_m_0603100", InstanceName = nameof(SoftTissueFindingType.CharcotFoot))]
        public bool IsJointDestructionZone5 { get; set; }

        [RadioReportId("anc_m_060392", InstanceName = nameof(SoftTissueFindingType.CharcotFoot))]
        public bool IsMicrofracture { get; set; }

        [RadioReportId("anc_m_0603101", InstanceName = nameof(SoftTissueFindingType.CharcotFoot))]
        public bool IsFracture { get; set; }

        [RadioReportId("anc_m_0603102", InstanceName = nameof(SoftTissueFindingType.CharcotFoot))]
        public bool IsOsNavicular { get; set; }

        [RadioReportId("anc_m_0603103", InstanceName = nameof(SoftTissueFindingType.CharcotFoot))]
        public bool IsFragmentation { get; set; }

        [RadioReportId("anc_m_0604140", InstanceName = nameof(SoftTissueFindingType.CharcotFoot))]
        public bool IsLuxation { get; set; }

        [RadioReportId("anc_m_0604141", InstanceName = nameof(SoftTissueFindingType.CharcotFoot))]
        public bool IsOssaMetatarsaliaCranialAndLateral { get; set; }

        [RadioReportId("anc_m_0604142", InstanceName = nameof(SoftTissueFindingType.CharcotFoot))]
        public bool IsBreakInLongitudinalVault { get; set; }

        [RadioReportId("anc_m_0604143", InstanceName = nameof(SoftTissueFindingType.CharcotFoot))]
        public bool IsRockerbottomDeformity { get; set; }

        [RadioReportId("anc_m_0604145", InstanceName = nameof(SoftTissueFindingType.CharcotFoot))]
        public bool IsTalusHeadLowering { get; set; }

        [RadioReportId("anc_m_0604146", InstanceName = nameof(SoftTissueFindingType.CharcotFoot))]
        public bool IsOsNaviculareAfterCranialMedial { get; set; }

        [RadioReportId("anc_m_060533", InstanceName = nameof(SoftTissueFindingType.CharcotFoot))]
        public bool IsSubchondralCysts { get; set; }

        [RadioReportId("anc_m_060534", InstanceName = nameof(SoftTissueFindingType.CharcotFoot))]
        public bool IsLisfrancJoint { get; set; }

        [RadioReportId("anc_m_060542", InstanceName = nameof(SoftTissueFindingType.CharcotFoot))]
        public bool IsOsteomyelitis { get; set; }

        [RadioReportId("anc_m_060543", InstanceName = nameof(SoftTissueFindingType.CharcotFoot))]
        public bool IsGhostCharacterInT1w { get; set; }

        [RadioReportId("anc_m_060544", InstanceName = nameof(SoftTissueFindingType.CharcotFoot))]
        public bool IsOsCuboideum { get; set; }

        [RadioReportId("anc_m_060545", InstanceName = nameof(SoftTissueFindingType.CharcotFoot))]
        public bool IsOssaCuneiforme { get; set; }

        [RadioReportId("anc_m_060546", InstanceName = nameof(SoftTissueFindingType.CharcotFoot))]
        public bool IsOssaMetatarsalia { get; set; }

        [RadioReportId("anc_m_060289", InstanceName = nameof(SoftTissueFindingType.CharcotFoot))]
        public bool IsSoftTissueEdema { get; set; }

        [RadioReportId("anc_m_060290", InstanceName = nameof(SoftTissueFindingType.CharcotFoot))]
        public bool IsSoftTissueInfection { get; set; }

        [RadioReportId("anc_m_060291", InstanceName = nameof(SoftTissueFindingType.CharcotFoot))]
        public bool IsAbscess { get; set; }

        [RadioReportId("anc_m_060292", InstanceName = nameof(SoftTissueFindingType.CharcotFoot))]
        public int? AbscessMaxDiameterInMm { get; set; }

        [RadioReportId("anc_m_0602106", InstanceName = nameof(SoftTissueFindingType.CharcotFoot))]
        public bool IsPhlegmone { get; set; }

        [RadioReportId("anc_m_0602108", InstanceName = nameof(SoftTissueFindingType.CharcotFoot))]
        public bool IsUlcerationOfTheSoleOfTheFoot { get; set; }

        [RadioReportId("anc_m_0603105", InstanceName = nameof(SoftTissueFindingType.CharcotFoot))]
        public bool IsDifferentialDiagnosisOsteomyelitis { get; set; }
        
        [RadioReportId("anc_m_0603106", InstanceName = nameof(SoftTissueFindingType.CharcotFoot))]
        public bool IsDifferentialDiagnosisArthrosis { get; set; }

        #endregion
    }
}
