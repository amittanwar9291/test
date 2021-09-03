using RadioReport.Common.Logic.Attributes;
using RadioReport.PelvisMRT.Domain.Enums.Bladder;
using RadioReport.Common.Logic.Interfaces;

namespace RadioReport.PelvisMRT.Domain.Models
{
    public class BladderFinding : BladderFindingBase, IRadioReportIdConditionEvaluator
    {
        #region Common

        [RadioReportId("pel_m_0903205", InstanceName = nameof(BladderFindingType.VesselsUreter), CustomConditionName = nameof(AffectedVesselUreterType.AbdominalAorta))]
        [RadioReportId("pel_m_0903214", InstanceName = nameof(BladderFindingType.VesselsUreter), CustomConditionName = nameof(AffectedVesselUreterType.CommonIliacArtery))]
        [RadioReportId("pel_m_0903214", InstanceName = nameof(BladderFindingType.VesselsUreter), CustomConditionName = nameof(AffectedVesselUreterType.ExternalIliacArtery))]
        [RadioReportId("pel_m_0903214", InstanceName = nameof(BladderFindingType.VesselsUreter), CustomConditionName = nameof(AffectedVesselUreterType.InternalIliacArtery))]
        [RadioReportId("pel_m_090241", InstanceName = nameof(BladderFindingType.UrinaryBladderDiverticulum))]
        [RadioReportId("pel_m_090258", InstanceName = nameof(BladderFindingType.UrinaryBladderTrauma))]
        [RadioReportId("pel_m_090439", InstanceName = nameof(BladderFindingType.PeripheralNerveSheathTumor))]
        public int? MaxDiameterInMm { get; set; }

        public SideType SideType { get; set; }

        [RadioReportId("pel_m_0903100", InstanceName = nameof(BladderFindingType.UrinaryBladderWallThickening))]
        [RadioReportId("pel_m_0902167", InstanceName = nameof(BladderFindingType.SoftTissueMass))]
        public int? MaxExpansionInMm { get; set; }

        [RadioReportId("pel_m_0903102", InstanceName = nameof(BladderFindingType.UrinaryBladderWallThickening))]
        [RadioReportId("pel_m_0902169", InstanceName = nameof(BladderFindingType.SoftTissueMass))]
        public int? SecondPlaneInMm { get; set; }

        [RadioReportId("pel_m_0903104", InstanceName = nameof(BladderFindingType.UrinaryBladderWallThickening))]
        [RadioReportId("pel_m_0902171", InstanceName = nameof(BladderFindingType.SoftTissueMass))]
        public int? ThirdPlaneInMm { get; set; }

        [RadioReportId("pel_m_0902154", InstanceName = nameof(BladderFindingType.UrinaryBladderWallThickening))]
        [RadioReportId("pel_m_090522", InstanceName = nameof(BladderFindingType.SoftTissueMass))]
        public bool IsCalcification { get; set; }

        [RadioReportId("pel_m_0904117", InstanceName = nameof(BladderFindingType.UrinaryBladderWallThickening))]
        [RadioReportId("pel_m_0904128", InstanceName = nameof(BladderFindingType.SoftTissueMass))]
        public BladderDiagnosisType DifferentialDiagnosis1 { get; set; }

        [RadioReportId("pel_m_0904119", InstanceName = nameof(BladderFindingType.UrinaryBladderWallThickening))]
        [RadioReportId("pel_m_0904130", InstanceName = nameof(BladderFindingType.SoftTissueMass))]
        public BladderDiagnosisType DifferentialDiagnosis2 { get; set; }

        [RadioReportId("pel_m_0904120", InstanceName = nameof(BladderFindingType.UrinaryBladderWallThickening))]
        [RadioReportId("pel_m_0904131", InstanceName = nameof(BladderFindingType.SoftTissueMass))]
        public bool IsSubordinate { get; set; }

        [RadioReportId("pel_m_0904121", InstanceName = nameof(BladderFindingType.UrinaryBladderWallThickening))]
        [RadioReportId("pel_m_090243", InstanceName = nameof(BladderFindingType.UrinaryBladderDiverticulum))]
        [RadioReportId("pel_m_0904132", InstanceName = nameof(BladderFindingType.SoftTissueMass))]
        public bool IsMoreThan1Lesion { get; set; }

        [RadioReportId("pel_m_090513")]
        public bool IsArtifacts { get; set; }

        [RadioReportId("pel_m_090514")]
        public bool IsNotSufficientBladderFilling { get; set; }

        [RadioReportId("pel_m_090516")]
        public bool IsInsertedBladderCatheter { get; set; }

        [RadioReportId("pel_m_090517")]
        public bool IsDoubleJCatheterRight { get; set; }

        [RadioReportId("pel_m_090518")]
        public bool IsDoubleJCatheterLeft { get; set; }

        [RadioReportId("pel_m_090250", InstanceName = nameof(BladderFindingType.UrinaryBladderStandardVariationAnomalies))]
        [RadioReportId("pel_m_0902186", InstanceName = nameof(BladderFindingType.SoftTissueMass))]
        public bool IsSmallIntestine { get; set; }

        [RadioReportId("pel_m_090xxx-l", InstanceName = nameof(HomogeneityType), IsExportable = false)]
        public HomogeneityType HomogeneityType { get; set; }

        [RadioReportId("pel_m_0904210", InstanceName = nameof(BladderFindingType.Muscles))]
        [RadioReportId("pel_m_090535", InstanceName = nameof(BladderFindingType.Tendons))]
        public bool IsMuscleAtrophy { get; set; }

        #endregion

        #region Ascites

        public AscitesCharacterizationType AscitesCharacterizationType { get; set; }

        [RadioReportId("pel_m_090205", InstanceName = nameof(BladderFindingType.Ascites))]
        public bool IsDetectionOfHemosiderin { get; set; }

        #endregion

        #region PeritonealNodules

        public PeritonealNodulesCharacterizationType PeritonealNodulesCharacterizationType { get; set; }

        [RadioReportId("pel_m_090209", InstanceName = nameof(BladderFindingType.PeritonealNodules))]
        public bool IsRectoUterinePouch { get; set; }

        #endregion

        #region VesselsUreter

        public AffectedVesselUreterType AffectedVesselUreterType { get; set; }

        public ArteriopathyType ArteriopathyType { get; set; }

        public PathologyAnatomicVariantsType PathologyAnatomicVariantsType { get; set; }

        public VesselsUreterPathologyType VesselsUreterPathologyType { get; set; }

        #endregion

        #region UrinaryBladderWallThickening

        public ThickeningLocalizationType ThickeningLocalizationType { get; set; }

        [RadioReportId("pel_m_0902146", InstanceName = nameof(BladderFindingType.UrinaryBladderWallThickening))]
        public bool IsBaseOfTheBladder { get; set; }

        [RadioReportId("pel_m_0902147", InstanceName = nameof(BladderFindingType.UrinaryBladderWallThickening))]
        public bool IsRightLateralWall { get; set; }

        [RadioReportId("pel_m_0902148", InstanceName = nameof(BladderFindingType.UrinaryBladderWallThickening))]
        public bool IsLeftLateralWall { get; set; }

        [RadioReportId("pel_m_0902149", InstanceName = nameof(BladderFindingType.UrinaryBladderWallThickening))]
        public bool IsBladderNeck { get; set; }

        [RadioReportId("pel_m_0902150", InstanceName = nameof(BladderFindingType.UrinaryBladderWallThickening))]
        public bool IsTrigonum { get; set; }

        [RadioReportId("pel_m_0902151", InstanceName = nameof(BladderFindingType.UrinaryBladderWallThickening))]
        public bool IsRoofOfBladder { get; set; }

        [RadioReportId("pel_m_0902152", InstanceName = nameof(BladderFindingType.UrinaryBladderWallThickening))]
        public bool IsAnteriorWall { get; set; }

        [RadioReportId("pel_m_0902153", InstanceName = nameof(BladderFindingType.UrinaryBladderWallThickening))]
        public bool IsPosteriorWall { get; set; }

        public HeterogeneousType HeterogeneousType { get; set; }

        public GrowthPatternsType GrowthPatternsType { get; set; }

        public InfiltrativeGrowthType InfiltrativeGrowthType { get; set; }

        public SecondaryWallThickeningType SecondaryWallThickeningType { get; set; }

        #endregion

        #region UrinaryBladderStandardVariationAnomalies

        [RadioReportId("pel_m_090245", InstanceName = nameof(BladderFindingType.UrinaryBladderStandardVariationAnomalies))]
        public bool IsPatentUrachus { get; set; }

        [RadioReportId("pel_m_090246", InstanceName = nameof(BladderFindingType.UrinaryBladderStandardVariationAnomalies))]
        public bool IsInfection { get; set; }

        [RadioReportId("pel_m_090266", InstanceName = nameof(BladderFindingType.UrinaryBladderStandardVariationAnomalies))]
        public bool IsMass { get; set; }

        [RadioReportId("pel_m_090247", InstanceName = nameof(BladderFindingType.UrinaryBladderStandardVariationAnomalies))]
        public bool IsCongenitalBladderFistula { get; set; }

        [RadioReportId("pel_m_090248", InstanceName = nameof(BladderFindingType.UrinaryBladderStandardVariationAnomalies))]
        public bool IsRectumSigma { get; set; }

        [RadioReportId("pel_m_090249", InstanceName = nameof(BladderFindingType.UrinaryBladderStandardVariationAnomalies))]
        public bool IsUterusVagina { get; set; }

        [RadioReportId("pel_m_090251", InstanceName = nameof(BladderFindingType.UrinaryBladderStandardVariationAnomalies))]
        public bool IsCutan { get; set; }

        #endregion

        #region UrinaryBladderTrauma

        [RadioReportId("pel_m_090253", InstanceName = nameof(BladderFindingType.UrinaryBladderTrauma))]
        public bool IsBladderrupture { get; set; }

        [RadioReportId("pel_m_090254", InstanceName = nameof(BladderFindingType.UrinaryBladderTrauma))]
        public bool IsIntraperitoneal { get; set; }

        [RadioReportId("pel_m_090255", InstanceName = nameof(BladderFindingType.UrinaryBladderTrauma))]
        public bool IsExtraperitoneal { get; set; }

        [RadioReportId("pel_m_090256", InstanceName = nameof(BladderFindingType.UrinaryBladderTrauma))]
        public bool IsBladderTamponade { get; set; }

        [RadioReportId("pel_m_090257", InstanceName = nameof(BladderFindingType.UrinaryBladderTrauma))]
        public bool IsBloodClot { get; set; }

        #endregion

        #region PeripheralNerveSheathTumor

        public TumorLocalizationType TumorLocalizationType { get; set; }

        public IntrapelvicLocalizationType IntrapelvicLocalizationType { get; set; }

        public ExtrapelvicLocalizationType ExtrapelvicLocalizationType { get; set; }

        public AffectedNerveType AffectedNerveType { get; set; }

        [RadioReportId("pel_m_0903129", InstanceName = nameof(BladderFindingType.PeripheralNerveSheathTumor))]
        public bool IsSuspicionOfMalignancy { get; set; }

        [RadioReportId("pel_m_090435", InstanceName = nameof(BladderFindingType.PeripheralNerveSheathTumor))]
        public bool IsSmoothMargins { get; set; }

        [RadioReportId("pel_m_090436", InstanceName = nameof(BladderFindingType.PeripheralNerveSheathTumor))]
        public bool IsFusiformShape { get; set; }

        [RadioReportId("pel_m_090437", InstanceName = nameof(BladderFindingType.PeripheralNerveSheathTumor))]
        public bool IsMarginSplitFatSign { get; set; }

        [RadioReportId("pel_m_090438", InstanceName = nameof(BladderFindingType.PeripheralNerveSheathTumor))]
        public bool IsT1wIsointensToMuscleSignal { get; set; }

        [RadioReportId("pel_m_090441", InstanceName = nameof(BladderFindingType.PeripheralNerveSheathTumor))]
        public bool IsContrastEnhancement { get; set; }

        #endregion

        #region SoftTissueMass

        public DescriptionType DescriptionType { get; set; }

        [RadioReportId("pel_m_0902165", InstanceName = nameof(BladderFindingType.SoftTissueMass))]
        public SoftTissueMassLocalizationType SoftTissueMassLocalizationType { get; set; }

        public MarginType MarginType { get; set; }

        [RadioReportId("pel_m_090520", InstanceName = nameof(BladderFindingType.SoftTissueMass))]
        public bool IsFat { get; set; }

        [RadioReportId("pel_m_090521", InstanceName = nameof(BladderFindingType.SoftTissueMass))]
        public bool IsNecrosis { get; set; }

        [RadioReportId("pel_m_090525", InstanceName = nameof(BladderFindingType.SoftTissueMass))]
        public bool IsCysts { get; set; }

        [RadioReportId("pel_m_090526", InstanceName = nameof(BladderFindingType.SoftTissueMass))]
        public bool IsSepta { get; set; }

        [RadioReportId("pel_m_090527", InstanceName = nameof(BladderFindingType.SoftTissueMass))]
        public bool IsSignalVoids { get; set; }

        [RadioReportId("pel_m_090528", InstanceName = nameof(BladderFindingType.SoftTissueMass))]
        public bool IsHemorrhage { get; set; }

        [RadioReportId("pel_m_0902178", InstanceName = nameof(BladderFindingType.SoftTissueMass))]
        public bool IsBone { get; set; }

        [RadioReportId("pel_m_0902179", InstanceName = nameof(BladderFindingType.SoftTissueMass))]
        public bool IsUrinaryBladder { get; set; }

        [RadioReportId("pel_m_0902180", InstanceName = nameof(BladderFindingType.SoftTissueMass))]
        public bool IsUterus { get; set; }

        [RadioReportId("pel_m_0902181", InstanceName = nameof(BladderFindingType.SoftTissueMass))]
        public bool IsVagina { get; set; }

        [RadioReportId("pel_m_0902182", InstanceName = nameof(BladderFindingType.SoftTissueMass))]
        public bool IsProstate { get; set; }

        [RadioReportId("pel_m_0902183", InstanceName = nameof(BladderFindingType.SoftTissueMass))]
        public bool IsSeminalVesicles { get; set; }

        [RadioReportId("pel_m_0902184", InstanceName = nameof(BladderFindingType.SoftTissueMass))]
        public bool IsRectum { get; set; }

        [RadioReportId("pel_m_0902185", InstanceName = nameof(BladderFindingType.SoftTissueMass))]
        public bool IsSigma { get; set; }

        [RadioReportId("pel_m_0902187", InstanceName = nameof(BladderFindingType.SoftTissueMass))]
        public bool IsVascular { get; set; }

        [RadioReportId("pel_m_0902188", InstanceName = nameof(BladderFindingType.SoftTissueMass))]
        public bool IsSkinExulceration { get; set; }

        #endregion

        #region Muscles

        [RadioReportId("pel_m_0902215", InstanceName = nameof(BladderFindingType.Muscles))]
        public MusclesLocalizationType MusclesLocalizationType { get; set; }

        public LocalizationWithinMuscleType LocalizationWithinMuscleType { get; set; }

        [RadioReportId("pel_m_0904200", InstanceName = nameof(BladderFindingType.Muscles))]
        public bool IsMuscleLesion { get; set; }

        public ClassificationMunichConsensusType ClassificationMunichConsensusType { get; set; }

        [RadioReportId("pel_m_0905200", InstanceName = nameof(BladderFindingType.Muscles))]
        public bool IsCrossDiameterOfRuptureLessThan5Mm { get; set; }

        [RadioReportId("pel_m_0905201", InstanceName = nameof(BladderFindingType.Muscles))]
        public bool IsCrossDiameterOfRupture5OrMoreMm { get; set; }

        [RadioReportId("pel_m_090537", InstanceName = nameof(BladderFindingType.Muscles))]
        public int? RetractionInMm { get; set; }

        [RadioReportId("pel_m_090539", InstanceName = nameof(BladderFindingType.Muscles))]
        public bool IsWavyCourseOfTheFibres { get; set; }

        [RadioReportId("pel_m_090540", InstanceName = nameof(BladderFindingType.Muscles))]
        public bool IsOsseousAvulsion { get; set; }

        [RadioReportId("pel_m_090542", InstanceName = nameof(BladderFindingType.Muscles))]
        public OsseousAvulsionLocalizationType OsseousAvulsionLocalizationType { get; set; }

        [RadioReportId("pel_m_090543", InstanceName = nameof(BladderFindingType.Muscles))]
        public bool IsIntracorticalEdema { get; set; }

        [RadioReportId("pel_m_0902224", InstanceName = nameof(BladderFindingType.Muscles))]
        public bool IsHematoma { get; set; }

        [RadioReportId("pel_m_0902226", InstanceName = nameof(BladderFindingType.Muscles))]
        public bool IsIntramuscular { get; set; }

        [RadioReportId("pel_m_0902227", InstanceName = nameof(BladderFindingType.Muscles))]
        public bool IsInterfacial { get; set; }

        [RadioReportId("pel_m_0902228", InstanceName = nameof(BladderFindingType.Muscles))]
        public bool IsIntermuscular { get; set; }

        public HematomaCharacterizationType HematomaCharacterizationType { get; set; }

        [RadioReportId("pel_m_0904208", InstanceName = nameof(BladderFindingType.Muscles))]
        public bool IsFattyDegeneration { get; set; }

        [RadioReportId("pel_m_0904209", InstanceName = nameof(BladderFindingType.Muscles))]
        public bool IsMuscularHypotrophy { get; set; }

        public MuscleAtrophyType MuscleAtrophyType { get; set; }

        [RadioReportId("pel_m_0904213", InstanceName = nameof(BladderFindingType.Muscles))]
        public bool IsApophysitis { get; set; }

        [RadioReportId("pel_m_0904214", InstanceName = nameof(BladderFindingType.Muscles))]
        public bool IsFascialLaceration { get; set; }

        [RadioReportId("pel_m_0904215", InstanceName = nameof(BladderFindingType.Muscles))]
        public bool IsMuscleHerniation { get; set; }

        [RadioReportId("pel_m_0904216", InstanceName = nameof(BladderFindingType.Muscles))]
        public bool IsReducedIschiofemoralSpace { get; set; }

        [RadioReportId("pel_m_0904218", InstanceName = nameof(BladderFindingType.Muscles))]
        public int? ShortestDistanceInMm { get; set; }

        #endregion

        #region Tendons

        public TendonsLocalizationType TendonsLocalizationType { get; set; }

        public TendonsPathologyType TendonsPathologyType { get; set; }

        public DetailsRuptureLocalizationType DetailsRuptureLocalizationType { get; set; }

        [RadioReportId("pel_m_0904103", InstanceName = nameof(BladderFindingType.Tendons))]
        public bool IsRetraction { get; set; }

        [RadioReportId("pel_m_0904104", InstanceName = nameof(BladderFindingType.Tendons))]
        public int? ExtensionInMm { get; set; }

        [RadioReportId("pel_m_090530", InstanceName = nameof(BladderFindingType.Tendons))]
        public bool IsSurroundingHematoma { get; set; }

        [RadioReportId("pel_m_090531", InstanceName = nameof(BladderFindingType.Tendons))]
        public bool IsBoneBruise { get; set; }

        [RadioReportId("pel_m_090532", InstanceName = nameof(BladderFindingType.Tendons))]
        public bool IsAvulsionTuberosityTibiae { get; set; }

        public MorphologyTendinopathyType MorphologyTendinopathyType { get; set; }

        [RadioReportId("pel_m_090534", InstanceName = nameof(BladderFindingType.Tendons))]
        public bool IsSignalIncreaseInPDAndT1w { get; set; }

        [RadioReportId("pel_m_090536", InstanceName = nameof(BladderFindingType.Tendons))]
        public bool IsGanglion { get; set; }

        #endregion

        public bool CheckCondition(string customConditionId) =>
            customConditionId switch
            {
                nameof(BladderFindingType.UrinaryBladderWallThickening) => FindingType.ToString() == customConditionId,
                nameof(BladderFindingType.PeripheralNerveSheathTumor) => FindingType.ToString() == customConditionId,
                nameof(BladderFindingType.SoftTissueMass) => FindingType.ToString() == customConditionId,
                nameof(AffectedVesselUreterType.AbdominalAorta) => AffectedVesselUreterType.ToString() == customConditionId,
                nameof(AffectedVesselUreterType.CommonIliacArtery) => AffectedVesselUreterType.ToString() == customConditionId,
                nameof(AffectedVesselUreterType.ExternalIliacArtery) => AffectedVesselUreterType.ToString() == customConditionId,
                nameof(AffectedVesselUreterType.InternalIliacArtery) => AffectedVesselUreterType.ToString() == customConditionId,
                nameof(AffectedVesselUreterType.CommonIliacVein) => AffectedVesselUreterType.ToString() == customConditionId,
                nameof(AffectedVesselUreterType.ExternalIliacVein) => AffectedVesselUreterType.ToString() == customConditionId,
                nameof(AffectedVesselUreterType.Ureter) => AffectedVesselUreterType.ToString() == customConditionId,
                _ => false
            };
    }
}
