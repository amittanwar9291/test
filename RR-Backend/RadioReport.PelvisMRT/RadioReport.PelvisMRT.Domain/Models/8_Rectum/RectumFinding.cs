using RadioReport.Common.Logic.Models;
using RadioReport.PelvisMRT.Domain.Enums.Rectum;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;

namespace RadioReport.PelvisMRT.Domain.Models
{
    public class RectumFinding : FindingBase, IRadioReportIdConditionEvaluator
    {
		public override string InstanceName => FindingType.ToString();

        [RadioReportId("pel_m_080107")]
		public RectumFindingType FindingType { get; set; }

        #region Common 

		[RadioReportId("pel_m_080315", InstanceName = nameof(RectumFindingType.RectalCarcinoma))]
        [RadioReportId("pel_m_080545", InstanceName = nameof(RectumFindingType.SigmaMass))]
        public bool IsUterus { get; set; }

		[RadioReportId("pel_m_080317", InstanceName = nameof(RectumFindingType.RectalCarcinoma))]
        [RadioReportId("pel_m_080546", InstanceName = nameof(RectumFindingType.SigmaMass))]
        [RadioReportId("pel_m_0802121", InstanceName = nameof(RectumFindingType.Fistula))]
        public bool IsVagina { get; set; }

		[RadioReportId("pel_m_080318", InstanceName = nameof(RectumFindingType.RectalCarcinoma))]
        [RadioReportId("pel_m_0802126", InstanceName = nameof(RectumFindingType.Fistula))]
        public bool IsSacrum { get; set; }

		[RadioReportId("pel_m_080319", InstanceName = nameof(RectumFindingType.RectalCarcinoma))]
        [RadioReportId("pel_m_0802127", InstanceName = nameof(RectumFindingType.Fistula))]
        public bool IsCoccygis { get; set; }

		[RadioReportId("pel_m_080320", InstanceName = nameof(RectumFindingType.RectalCarcinoma))]
        [RadioReportId("pel_m_0804102", InstanceName = nameof(RectumFindingType.Fistula))]
        public bool IsLevatorAniMuscle { get; set; }

        [RadioReportId("pel_m_080206", InstanceName = nameof(RectumFindingType.RectalCarcinoma))]
        [RadioReportId("pel_m_0802420", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
        [RadioReportId("pel_m_080253", InstanceName = nameof(RectumFindingType.SigmaMass))]
        public bool IsUpperThird { get; set; }

        [RadioReportId("pel_m_080207", InstanceName = nameof(RectumFindingType.RectalCarcinoma))]
        [RadioReportId("pel_m_0802430", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
        [RadioReportId("pel_m_080254", InstanceName = nameof(RectumFindingType.SigmaMass))]
        public bool IsMiddleThird { get; set; }

        [RadioReportId("pel_m_080208", InstanceName = nameof(RectumFindingType.RectalCarcinoma))]
        [RadioReportId("pel_m_0802440", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
        [RadioReportId("pel_m_080255", InstanceName = nameof(RectumFindingType.SigmaMass))]
        public bool IsLowerThird { get; set; }

		[RadioReportId("pel_m_0803204", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
        public bool IsMesentericFatObliteration { get; set; }

		[RadioReportId("pel_m_080421", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
        [RadioReportId("pel_m_080359", InstanceName = nameof(RectumFindingType.SigmaMass))]
        [RadioReportId("pel_m_080383", InstanceName = nameof(RectumFindingType.ChronicInflammatoryBowelDisease))]
        [RadioReportId("pel_m_0804103", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Rectovaginal))]
        [RadioReportId("pel_m_0804103", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Colovaginal))]
        [RadioReportId("pel_m_0804103", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Colovesical))]
        [RadioReportId("pel_m_0804103", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Vesicovaginal))]
        [RadioReportId("pel_m_0804103", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Vesicocervical))]
        [RadioReportId("pel_m_0804103", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Complex))]
        [RadioReportId("pel_m_080591", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.PilonidalSinus))]
        public bool IsAbscess { get; set; }

		[RadioReportId("pel_m_080526", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
        [RadioReportId("pel_m_080354", InstanceName = nameof(RectumFindingType.SigmaMass))]
        public bool IsStenosis { get; set; }

        [RadioReportId("pel_m_080387", InstanceName = nameof(RectumFindingType.ChronicInflammatoryBowelDisease))]
        [RadioReportId("pel_m_080561", InstanceName = nameof(RectumFindingType.Appendicitis))]
        public bool IsPerforation { get; set; }

        [RadioReportId("pel_m_080532", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
		[RadioReportId("pel_m_080270", InstanceName = nameof(RectumFindingType.SigmaMass))]
        [RadioReportId("pel_m_080466", InstanceName = nameof(RectumFindingType.ChronicInflammatoryBowelDisease))]
        [RadioReportId("pel_m_080466", InstanceName = nameof(RectumFindingType.Appendicitis))]
        [RadioReportId("pel_m_080476", InstanceName = nameof(RectumFindingType.AcuteEpiploicAppendagitis))]
        public bool IsSubordinated { get; set; }

		[RadioReportId("pel_m_080446", InstanceName = nameof(RectumFindingType.SigmaMass))]
        [RadioReportId("pel_m_0803159", InstanceName = nameof(RectumFindingType.Fistula))]
        public bool IsFocalWallThickening { get; set; }

        [RadioReportId("pel_m_080314", InstanceName = nameof(RectumFindingType.RectalCarcinoma))]
        [RadioReportId("pel_m_080542", InstanceName = nameof(RectumFindingType.SigmaMass))]
        [RadioReportId("pel_m_0802119", InstanceName = nameof(RectumFindingType.Fistula))]
        public bool IsUrinaryBladder { get; set; }

        [RadioReportId("pel_m_080272", InstanceName = nameof(RectumFindingType.ChronicInflammatoryBowelDisease))]
        [RadioReportId("pel_m_0802125", InstanceName = nameof(RectumFindingType.Fistula))]
        public bool IsColon { get; set; }

		[RadioReportId("pel_m_080274", InstanceName = nameof(RectumFindingType.ChronicInflammatoryBowelDisease))]
        [RadioReportId("pel_m_0802124", InstanceName = nameof(RectumFindingType.Fistula))]
        public bool IsRectum { get; set; }

		[RadioReportId("pel_m_080559", InstanceName = nameof(RectumFindingType.ChronicInflammatoryBowelDisease))]
        [RadioReportId("pel_m_0802112", InstanceName = nameof(RectumFindingType.SigmoidVolvulus))]
        public bool IsAccompanyingAscites { get; set; }

        [RadioReportId("pel_m_080385", InstanceName = nameof(RectumFindingType.ChronicInflammatoryBowelDisease))]
        [RadioReportId("pel_m_080564", InstanceName = nameof(RectumFindingType.Appendicitis))]
        [RadioReportId("pel_m_0804105", InstanceName = nameof(RectumFindingType.Fistula))]
        public int? MaximumDiameterInMm { get; set; }

        [RadioReportId("pel_m_080521", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
        [RadioReportId("pel_m_080382", InstanceName = nameof(RectumFindingType.ChronicInflammatoryBowelDisease))]
        public bool IsFistula { get; set; }

        [RadioReportId("pel_m_080543", InstanceName = nameof(RectumFindingType.SigmaMass))]
        [RadioReportId("pel_m_080322", InstanceName = nameof(RectumFindingType.RectalCarcinoma))]
        public bool IsProstate { get; set; }

        [RadioReportId("pel_m_0805101", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
        [RadioReportId("pel_m_080569", InstanceName = nameof(RectumFindingType.Appendicitis))]
        public bool IsIleus { get; set; }

        [RadioReportId("pel_m_080527", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
        [RadioReportId("pel_m_080568", InstanceName = nameof(RectumFindingType.Appendicitis))]
        public bool IsPeritonitis { get; set; }

        [RadioReportId("pel_m_080266", InstanceName = nameof(RectumFindingType.SigmaMass))]
        [RadioReportId("pel_m_080463", InstanceName = nameof(RectumFindingType.ChronicInflammatoryBowelDisease))]
        [RadioReportId("pel_m_0804117", InstanceName = nameof(RectumFindingType.Fistula))]
        public bool IsSuspicionOf { get; set; }

        [RadioReportId("pel_m_080316", InstanceName = nameof(RectumFindingType.RectalCarcinoma))]
        [RadioReportId("pel_m_080544", InstanceName = nameof(RectumFindingType.SigmaMass))]
        public bool IsSeminalVesicles { get; set; }

        [RadioReportId("pel_m_080286", InstanceName = nameof(RectumFindingType.ChronicInflammatoryBowelDisease))]
        [RadioReportId("pel_m_0802105", InstanceName = nameof(RectumFindingType.Appendicitis))]
        public bool IsTargetSign { get; set; }

        [RadioReportId("pel_m_080263", InstanceName = nameof(RectumFindingType.SigmaMass))]
        [RadioReportId("pel_m_0804128", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
        public bool IsFreeAir { get; set; }

        #endregion

        #region RectalCarcinoma

        [RadioReportId("pel_m_080209", InstanceName = nameof(RectumFindingType.RectalCarcinoma))]
        public bool IsDistanceToPectinateLine { get; set; }

        [RadioReportId("pel_m_080210", InstanceName = nameof(RectumFindingType.RectalCarcinoma))]
        public int? DistanceToPectinateLine { get; set; }

        [RadioReportId("pel_m_080216", InstanceName = nameof(RectumFindingType.RectalCarcinoma))]
        public bool IsUpperPeritonealFoldInfiltration { get; set; }

        [RadioReportId("pel_m_080213", InstanceName = nameof(RectumFindingType.RectalCarcinoma))]
        public bool IsMiddlePeritonealFoldInfiltration { get; set; }

        public RelationToPuborectalisMuscleType RelationToPuborectalisMuscleType { get; set; }

        [RadioReportId("pel_m_080304", InstanceName = nameof(RectumFindingType.RectalCarcinoma))]
        public int? PuborectalisMuscleDistance { get; set; }

        [RadioReportId("pel_m_0803126", InstanceName = nameof(RectumFindingType.RectalCarcinoma))]
        public bool IsInfiltrationOfInternalSphicter { get; set; }

        [RadioReportId("pel_m_0803127", InstanceName = nameof(RectumFindingType.RectalCarcinoma))]
        public bool IsInfiltrationOfExternalSphicter { get; set; }

        [RadioReportId("pel_m_0803128", InstanceName = nameof(RectumFindingType.RectalCarcinoma))]
        public bool IsInfiltrationOfLevatorMuscle { get; set; }

        public LocalizationAxialType LocalizationAxialType { get; set; }

        [RadioReportId("pel_m_080405", InstanceName = nameof(RectumFindingType.RectalCarcinoma))]
        public LocalizationSSLType LocationAccordingToSslType { get; set; }

        [RadioReportId("pel_m_080503", InstanceName = nameof(RectumFindingType.RectalCarcinoma))]
        public int? MaximumTumourDiameter { get; set; }

        [RadioReportId("pel_m_080506", InstanceName = nameof(RectumFindingType.RectalCarcinoma))]
        public int? MaximumCcExpansion { get; set; }

        public RectalCarcinomaMorphologyType RectalCarcinomaMorphologyType { get; set; }

        [RadioReportId("pel_m_080512", InstanceName = nameof(RectumFindingType.RectalCarcinoma))]
        public bool HighT2wSignalIntensityMucinous { get; set; }

        [RadioReportId("pel_m_080219-l", InstanceName = nameof(RectalCancerCraniallyToPuborectalisType), IsExportable = false)]
        public RectalCancerCraniallyToPuborectalisType RectalCancerCraniallyToPuborectalisType { get; set; }

        public TumorGrowthOverMuscularisType TumorGrowthOverMuscularisType { get; set; }

        public InfiltrationType InfiltrationType { get; set; }

        [RadioReportId("pel_m_080321", InstanceName = nameof(RectumFindingType.RectalCarcinoma))]
        public bool IsMSphincterAni { get; set; }

        [RadioReportId("pel_m_080225-l", InstanceName = nameof(LowRectalCancerType), IsExportable = false)]
        public RectalCancerCraniallyToPuborectalisType LowRectalCancerType { get; set; }

        public MinimumDistanceToMesorectalFasciaType MinimumDistanceToMesorectalFasciaType { get; set; }

        [RadioReportId("pel_m_080417", InstanceName = nameof(RectumFindingType.RectalCarcinoma))]
        public LocalizationSSLType RectumCircumferencialTumorLocationType { get; set; }

        [RadioReportId("pel_m_080419", InstanceName = nameof(RectumFindingType.RectalCarcinoma))]
        public int? MaximumExtramuralTumorExtension { get; set; }

        [RadioReportId("pel_m_080513", InstanceName = nameof(RectumFindingType.RectalCarcinoma))]
        public bool IsExtramuralVenousInfiltration { get; set; }

        public DiameterInfiltratedVeinType DiameterInfiltratedVeinType { get; set; }

        #endregion

        #region SigmoidDiverticularDisease

        public PathologyType PathologyType { get; set; }

        public NumberOfDiverticulaType NumberOfDiverticulaType { get; set; }

        [RadioReportId("pel_m_080239", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
        public int? SingularDiverticulaDiameter { get; set; }

        [RadioReportId("pel_m_080324", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
        public bool IsIntestinalWallThickening { get; set; }

        public IntestinalWallThickeningType IntestinalWallThickeningType { get; set; }

        [RadioReportId("pel_m_080328", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
        public int? MaximumWallThickness { get; set; }

        [RadioReportId("pel_m_0803202", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
        public int? LongitudinalExpansion { get; set; }
        
        [RadioReportId("pel_m_0803205", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
        public bool IsIncreasedEnhancementOfIntestinalWall { get; set; }

        [RadioReportId("pel_m_0804101-l", InstanceName = nameof(SigmoidDiverticularDiseasePerforationType), IsExportable = false)]
        public PerforationType SigmoidDiverticularDiseasePerforationType { get; set; }

        [RadioReportId("pel_m_080423", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
        public int? AbscessMaximumDiameter { get; set; }

        public AbscessMaximumDiameterType AbscessMaximumDiameterType { get; set; }

        [RadioReportId("pel_m_080427", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
        public bool IsPossibleCtGuidedDrainage { get; set; }

        [RadioReportId("pel_m_080428", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
        public bool IsMoreThanOneLesion { get; set; }

        [RadioReportId("pel_m_080519", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
        public bool IsFreeFluid { get; set; }

        [RadioReportId("pel_m_080520", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
        public bool IsHemorrhagic { get; set; }

        public ComplicationsFistulaType ComplicationsFistulaType { get; set; }

        [RadioReportId("pel_m_080525", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
        public bool IsPhlegmons { get; set; }

        [RadioReportId("pel_m_080243", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
        public bool IsHansenAndStock { get; set; }

        public HansenAndStockType HansenAndStockType { get; set; }

        [RadioReportId("pel_m_080332", InstanceName = nameof(RectumFindingType.SigmoidDiverticularDisease))]
        public bool IsClassificationOfDiverticularDisease { get; set; }

        public ClassificationOfDiverticularDiseaseType ClassificationOfDiverticularDiseaseType { get; set; }

        public ClassificationOfDiverticularDiseaseSubType ClassificationOfDiverticularDiseaseSubType { get; set; }

        public SigmoidDiverticularDiseaseDifferentialDiagnosisType SigmoidDiverticularDiseaseDifferentialDiagnosisType { get; set; }

        #endregion

        #region SigmaMass

        [RadioReportId("pel_m_080339", InstanceName = nameof(RectumFindingType.SigmaMass))]
        public int? ExpansionSize { get; set; }

        [RadioReportId("pel_m_080341", InstanceName = nameof(RectumFindingType.SigmaMass))]
        public int? Expansion2ndPlane { get; set; }

        [RadioReportId("pel_m_080344", InstanceName = nameof(RectumFindingType.SigmaMass))]
        public int? Expansion3rdPlane { get; set; }

        public MarginType MarginType { get; set; }

        public FormType FormType { get; set; }

        [RadioReportId("pel_m_080442-l", InstanceName = nameof(InternalChangeType), IsExportable = false)]
        public InternalChangeType InternalChangeType { get; set; }

        [RadioReportId("pel_m_080447", InstanceName = nameof(RectumFindingType.SigmaMass))]
        public bool IsConglomerate { get; set; }

        [RadioReportId("pel_m_080448", InstanceName = nameof(RectumFindingType.SigmaMass))]
        public bool IsTumorNecrosis { get; set; }

        [RadioReportId("pel_m_080449", InstanceName = nameof(RectumFindingType.SigmaMass))]
        public bool IsMesentericFatStranding { get; set; }

        [RadioReportId("pel_m_080533-l", InstanceName = nameof(SigmaMassKmEnhancementType), IsExportable = false)]
        public KMEnhancementType SigmaMassKmEnhancementType { get; set; }

        [RadioReportId("pel_m_080533-l", InstanceName = nameof(CmEnhancementInternalChangeType), IsExportable = false)]
        public InternalChangeType CmEnhancementInternalChangeType { get; set; }

        [RadioReportId("pel_m_080539", InstanceName = nameof(RectumFindingType.SigmaMass))]
        public bool IsDiffusionRestriction { get; set; }

        public GrowthPatternType GrowthPatternType { get; set; }

        [RadioReportId("pel_m_080259", InstanceName = nameof(RectumFindingType.SigmaMass))]
        public bool IsOcclusive { get; set; }

        [RadioReportId("pel_m_080260-l", InstanceName = nameof(SigmaMassPerforationType), IsExportable = false)]
        public PerforationType SigmaMassPerforationType { get; set; }

        [RadioReportId("pel_m_080350", InstanceName = nameof(RectumFindingType.SigmaMass))]
        public bool IsInvagination { get; set; }

        [RadioReportId("pel_m_080351", InstanceName = nameof(RectumFindingType.SigmaMass))]
        public bool IsInvaginationPrestenoticDilatation { get; set; }

        [RadioReportId("pel_m_080352", InstanceName = nameof(RectumFindingType.SigmaMass))]
        public bool IsInvaginationPoststenoticCollapse { get; set; }

        [RadioReportId("pel_m_080353", InstanceName = nameof(RectumFindingType.SigmaMass))]
        public bool IsInvaginationIleus { get; set; }

        [RadioReportId("pel_m_080355", InstanceName = nameof(RectumFindingType.SigmaMass))]
        public bool IsStenosisPrestenoticDilatation { get; set; }

        [RadioReportId("pel_m_080356", InstanceName = nameof(RectumFindingType.SigmaMass))]
        public bool IsStenosisPoststenoticCollapse { get; set; }

        [RadioReportId("pel_m_080357", InstanceName = nameof(RectumFindingType.SigmaMass))]
        public bool IsStenosisIleus { get; set; }

        [RadioReportId("pel_m_080358", InstanceName = nameof(RectumFindingType.SigmaMass))]
        public bool IsIntestinalWallNecroses { get; set; }

        [RadioReportId("pel_m_080361", InstanceName = nameof(RectumFindingType.SigmaMass))]
        public int? SigmaMassDiameter { get; set; }

        [RadioReportId("pel_m_080265", InstanceName = nameof(RectumFindingType.SigmaMass))]
        public RectumDiagnosisType SigmaMassDifferentialDiagnosisType { get; set; }

        [RadioReportId("pel_m_080269", InstanceName = nameof(RectumFindingType.SigmaMass))]
        public RectumDiagnosisType SigmaMassDifferentialDiagnosis02Type { get; set; }

        public DifferentialDiagnosisTStadiumType DifferentialDiagnosisTStadiumType { get; set; }

        public TstadiumInfiltrationType TstadiumInfiltrationType { get; set; }

        [RadioReportId("pel_m_080547", InstanceName = nameof(RectumFindingType.SigmaMass))]
        public bool IsPeritoneum { get; set; }

        [RadioReportId("pel_m_080548", InstanceName = nameof(RectumFindingType.SigmaMass))]
        public bool IsAbdomenPelvicWall { get; set; }

        [RadioReportId("pel_m_080549", InstanceName = nameof(RectumFindingType.SigmaMass))]
        public bool IsSmallIntestine { get; set; }

        [RadioReportId("pel_m_080550", InstanceName = nameof(RectumFindingType.SigmaMass))]
        public bool IsLeftExternalIliacVessels { get; set; }

        #endregion

        #region ChronicInflammatoryBowelDisease

        [RadioReportId("pel_m_080271", InstanceName = nameof(RectumFindingType.ChronicInflammatoryBowelDisease))]
        public bool IsIleum { get; set; }
        
        [RadioReportId("pel_m_080273", InstanceName = nameof(RectumFindingType.ChronicInflammatoryBowelDisease))]
        public bool IsSigmoidColon { get; set; }

        public PatternsOfInflammationType PatternsOfInflammationType { get; set; }

        [RadioReportId("pel_m_080371", InstanceName = nameof(RectumFindingType.ChronicInflammatoryBowelDisease))]
        public bool IsThickening { get; set; }
        
        [RadioReportId("pel_m_080372", InstanceName = nameof(RectumFindingType.ChronicInflammatoryBowelDisease))]
        public int? ThickeningSize { get; set; }
        
        [RadioReportId("pel_m_080375", InstanceName = nameof(RectumFindingType.ChronicInflammatoryBowelDisease))]
        public int? MaxLongitudinalExpansion { get; set; }

        [RadioReportId("pel_m_080377", InstanceName = nameof(RectumFindingType.ChronicInflammatoryBowelDisease))]
        public bool IsStratification { get; set; }
        
        [RadioReportId("pel_m_080378", InstanceName = nameof(RectumFindingType.ChronicInflammatoryBowelDisease))]
        public bool IsLossHaustration { get; set; }
        
        public WallAlterationType WallAlterationType { get; set; }
        
        [RadioReportId("pel_m_080552", InstanceName = nameof(RectumFindingType.ChronicInflammatoryBowelDisease))]
        public bool IsLymphadenopathy { get; set; }
        
        [RadioReportId("pel_m_080553", InstanceName = nameof(RectumFindingType.ChronicInflammatoryBowelDisease))]
        public bool IsFatTissueStranding { get; set; }
        
        [RadioReportId("pel_m_080554", InstanceName = nameof(RectumFindingType.ChronicInflammatoryBowelDisease))]
        public bool IsFatTissueProliferation { get; set; }
        
        [RadioReportId("pel_m_080556", InstanceName = nameof(RectumFindingType.ChronicInflammatoryBowelDisease))]
        public bool IsMarkedVasaRecta { get; set; }
        
        [RadioReportId("pel_m_080557", InstanceName = nameof(RectumFindingType.ChronicInflammatoryBowelDisease))]
        public bool IsCombSign { get; set; }

        [RadioReportId("pel_m_080279-l", InstanceName = nameof(ChronicBowelDiseaseKMEnhancementType), IsExportable = false)]
        public KMEnhancementType ChronicBowelDiseaseKMEnhancementType { get; set; }

        public ChronicBowelKmEnhancementFormType ChronicBowelKmEnhancementFormType { get; set; }
        
        [RadioReportId("pel_m_080287", InstanceName = nameof(RectumFindingType.ChronicInflammatoryBowelDisease))]
        public bool IsSubmucosalStripe { get; set; }
        
        [RadioReportId("pel_m_080288", InstanceName = nameof(RectumFindingType.ChronicInflammatoryBowelDisease))]
        public bool IsPerifocal { get; set; }
  
        [RadioReportId("pel_m_080379", InstanceName = nameof(RectumFindingType.ChronicInflammatoryBowelDisease))]
        public bool IsStricture { get; set; }
        
        [RadioReportId("pel_m_080380", InstanceName = nameof(RectumFindingType.ChronicInflammatoryBowelDisease))]
        public bool IsDilatation { get; set; }
        
        [RadioReportId("pel_m_080381", InstanceName = nameof(RectumFindingType.ChronicInflammatoryBowelDisease))]
        public bool IsPseudotumor { get; set; }

        [RadioReportId("pel_m_080388", InstanceName = nameof(RectumFindingType.ChronicInflammatoryBowelDisease))]
        public bool IsToxicMegacolon { get; set; }

        public ActivityType ActivityType { get; set; }

        [RadioReportId("pel_m_080462", InstanceName = nameof(RectumFindingType.ChronicInflammatoryBowelDisease))]
        public RectumDiagnosisType ChronicBowelDiseaseDifferentialDiagnosisType01 { get; set; }
        
        [RadioReportId("pel_m_080465", InstanceName = nameof(RectumFindingType.ChronicInflammatoryBowelDisease))]
        public RectumDiagnosisType ChronicBowelDiseaseDifferentialDiagnosisType02 { get; set; }

        [RadioReportId("pel_m_080558", InstanceName = nameof(RectumFindingType.ChronicInflammatoryBowelDisease))]
        public bool IsT2wSignalBoostInPerifocal { get; set; }

        #endregion

        #region Appendicitis

        [RadioReportId("pel_m_080291", InstanceName = nameof(RectumFindingType.Appendicitis))]
        public int? DiameterOfTheAppendix { get; set; }
        
        [RadioReportId("pel_m_080294", InstanceName = nameof(RectumFindingType.Appendicitis))]
        public int? LengthOfTheAppendix { get; set; }
        
        [RadioReportId("pel_m_080297", InstanceName = nameof(RectumFindingType.Appendicitis))]
        public int? WallThickening { get; set; }

        [RadioReportId("pel_m_080392", InstanceName = nameof(RectumFindingType.Appendicitis))]
        public bool IsT2wSignalBoostOfIntestinalWall { get; set; }
        
        [RadioReportId("pel_m_080393", InstanceName = nameof(RectumFindingType.Appendicitis))]
        public bool IsIntraluminalFluid { get; set; }
        
        [RadioReportId("pel_m_080394", InstanceName = nameof(RectumFindingType.Appendicitis))]
        public bool IsCecalWallThickening { get; set; }
        
        [RadioReportId("pel_m_080395", InstanceName = nameof(RectumFindingType.Appendicitis))]
        public bool IsArrowheadSign { get; set; }
        
        [RadioReportId("pel_m_080396", InstanceName = nameof(RectumFindingType.Appendicitis))]
        public bool IsCecalBarSign { get; set; }
        
        [RadioReportId("pel_m_080397", InstanceName = nameof(RectumFindingType.Appendicitis))]
        public bool IsWallEdemaOfIntestinalSegments { get; set; }
        
        [RadioReportId("pel_m_080398", InstanceName = nameof(RectumFindingType.Appendicitis))]
        public bool IsAppendicolith { get; set; }
        
        [RadioReportId("pel_m_080468", InstanceName = nameof(RectumFindingType.Appendicitis))]
        public bool IsObliterationOfSurroundingTissue { get; set; }
        
        [RadioReportId("pel_m_080469", InstanceName = nameof(RectumFindingType.Appendicitis))]
        public bool IsThickenedMesoappendix { get; set; }
        
        [RadioReportId("pel_m_080470", InstanceName = nameof(RectumFindingType.Appendicitis))]
        public bool IsEdema { get; set; }
        
        [RadioReportId("pel_m_080562", InstanceName = nameof(RectumFindingType.Appendicitis))]
        public bool IsPerityphliticAbscess { get; set; }
        
        [RadioReportId("pel_m_080566", InstanceName = nameof(RectumFindingType.Appendicitis))]
        public bool IsPeritonealInvolvement { get; set; }
        
        [RadioReportId("pel_m_080567", InstanceName = nameof(RectumFindingType.Appendicitis))]
        public bool IsAdhesions { get; set; }
        
        [RadioReportId("pel_m_080570", InstanceName = nameof(RectumFindingType.Appendicitis))]
        public bool IsAccompanyingInflammatoryPsoas { get; set; }

        [RadioReportId("pel_m_080299-l", InstanceName = nameof(AppendicitisKMEnhancementType), IsExportable = false)]
        public KMEnhancementType AppendicitisKMEnhancementType { get; set; }
        
        [RadioReportId("pel_m_080299-l", InstanceName = nameof(AppendicitisInternalChangeType), IsExportable = false)]
        public InternalChangeType AppendicitisInternalChangeType {get; set;}

        public InternalChangeSubType AppendicitisInternalChangeSubType { get; set; }

        [RadioReportId("pel_m_0802106", InstanceName = nameof(RectumFindingType.Appendicitis))]
        public bool IsKMEnhancementInTheEnvironment { get; set; }

        public AppendicitisInflammationStageType AppendicitisInflammationStageType { get; set; }

        [RadioReportId("pel_m_080471", InstanceName = nameof(RectumFindingType.Appendicitis))]
        public RectumDiagnosisType AppendictisDifferentialDiagnosisType { get; set; }

        #endregion

        #region AcuteEpiploicAppendagitis

        public EpiploicAppendagitisLocalizationType EpiploicAppendagitisLocalizationType { get; set; }

        [RadioReportId("pel_m_0803133", InstanceName = nameof(RectumFindingType.AcuteEpiploicAppendagitis))]
        public bool IsFatEquivalentMass { get; set; }

        [RadioReportId("pel_m_0803135", InstanceName = nameof(RectumFindingType.AcuteEpiploicAppendagitis))]
        public int? EpiploicAppendagitisDiameterInMm { get; set; }

        [RadioReportId("pel_m_0803137", InstanceName = nameof(RectumFindingType.AcuteEpiploicAppendagitis))]
        public bool IsThickeningAdjacentToPeritoneum { get; set; }

        [RadioReportId("pel_m_0803139", InstanceName = nameof(RectumFindingType.AcuteEpiploicAppendagitis))]
        public bool IsAdjacentSoftTissueEdema { get; set; }

        [RadioReportId("pel_m_0803140", InstanceName = nameof(RectumFindingType.AcuteEpiploicAppendagitis))]
        public bool IsThickeningAdjacentToWall { get; set; }

        public EpiploicAppendagitisDifferentialDiagnosisType EpiploicAppendagitisDifferentialDiagnosisType { get; set; }

        #endregion

        #region SigmaVolvolus

        [RadioReportId("pel_m_0802109", InstanceName = nameof(RectumFindingType.SigmoidVolvulus))]
        public bool IsCoffeeBeanSign { get; set; }

        [RadioReportId("pel_m_0802110", InstanceName = nameof(RectumFindingType.SigmoidVolvulus))]
        public bool IsWhirlSign { get; set; }

        [RadioReportId("pel_m_0802111", InstanceName = nameof(RectumFindingType.SigmoidVolvulus))]
        public bool IsFreePerforation {get; set;}

        [RadioReportId("pel_m_0802114", InstanceName = nameof(RectumFindingType.SigmoidVolvulus))]
		public int? MaximumDilatation { get; set; }

        #endregion

        #region Fistula

        [RadioReportId("pel_m_0802117", InstanceName = nameof(RectumFindingType.Fistula))]
        public FistulaType FistulaType { get; set; }

        [RadioReportId("pel_m_0803142", InstanceName = nameof(RectumFindingType.Fistula))]
        public LocalizationSSLType FistulaLocalizationSSLType {get; set;}

        [RadioReportId("pel_m_0803145", InstanceName = nameof(RectumFindingType.Fistula))]
        public FistulaLocalizer FistulaLocalizer { get; set; }

        public FistulaEndType FistulaEndType { get; set; }

        [RadioReportId("pel_m_080479", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Perianal))]
        [RadioReportId("pel_m_0804107", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Rectovaginal))]
        [RadioReportId("pel_m_0804107", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Colovaginal))]
        [RadioReportId("pel_m_0804107", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Colovesical))]
        [RadioReportId("pel_m_0804107", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Vesicovaginal))]
        [RadioReportId("pel_m_0804107", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Vesicocervical))]
        [RadioReportId("pel_m_0804107", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Complex))]
        public bool IsAdditionalFistulaBranches { get; set; }

        [RadioReportId("pel_m_080480", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Perianal))]
        [RadioReportId("pel_m_0804108", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Rectovaginal))]
        [RadioReportId("pel_m_0804108", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Colovaginal))]
        [RadioReportId("pel_m_0804108", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Colovesical))]
        [RadioReportId("pel_m_0804108", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Vesicovaginal))]
        [RadioReportId("pel_m_0804108", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Vesicocervical))]
        [RadioReportId("pel_m_0804108", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Complex))]
        public bool IsBlindEnding { get; set; }

        public StJamesClassificationType StJamesClassificationType { get; set; }

        [RadioReportId("pel_m_080492", InstanceName = nameof(RectumFindingType.Fistula))]
        public int? MaxAbscessDiameter { get; set; }

        [RadioReportId("pel_m_080572", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Perianal))]
        [RadioReportId("pel_m_0803152", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Rectovaginal))]
        [RadioReportId("pel_m_0803152", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Colovaginal))]
        [RadioReportId("pel_m_0803152", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Colovesical))]
        [RadioReportId("pel_m_0803152", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Vesicovaginal))]
        [RadioReportId("pel_m_0803152", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Vesicocervical))]
        public int? LengthOfTheFistula { get; set; }

        [RadioReportId("pel_m_080574-l", InstanceName = nameof(FistulaKMEnhancementType), IsExportable = false)]
        public KMEnhancementType FistulaKMEnhancementType { get; set; }

        [RadioReportId("pel_m_080579", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Perianal))]
        [RadioReportId("pel_m_080497", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Rectovaginal))]
        [RadioReportId("pel_m_080497", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.PilonidalSinus))]
        [RadioReportId("pel_m_0803157", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Colovaginal))]
        [RadioReportId("pel_m_0803157", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Colovesical))]
        [RadioReportId("pel_m_0803157", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Vesicocervical))]
        [RadioReportId("pel_m_0803157", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Vesicovaginal))]
        [RadioReportId("pel_m_0803157", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Complex))]
        public bool IsT2wSignalElevation { get; set; }

        public LocationCraniocaudalType LocationCraniocaudalType { get; set; }

        [RadioReportId("pel_m_080495", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Rectovaginal))]
        [RadioReportId("pel_m_0803155", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Colovaginal))]
        [RadioReportId("pel_m_0803155", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Colovesical))]
        [RadioReportId("pel_m_0803155", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Vesicovaginal))]
        [RadioReportId("pel_m_0803155", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Vesicocervical))]
        [RadioReportId("pel_m_0803155", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Complex))]
        public bool IsFocalPerifocalFibrosis { get; set; }

        [RadioReportId("pel_m_080496", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Rectovaginal))]
        [RadioReportId("pel_m_0803156", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Colovaginal))]
        [RadioReportId("pel_m_0803156", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Colovesical))]
        [RadioReportId("pel_m_0803156", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Vesicovaginal))]
        [RadioReportId("pel_m_0803156", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Vesicocervical))]
        [RadioReportId("pel_m_0803156", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Complex))]
        public bool IsFocalPerifocalAdhesions { get; set; }

        [RadioReportId("pel_m_080499", InstanceName = nameof(RectumFindingType.Fistula))]
        public bool IsAnalSphincterInvolvement { get; set; }
        
        [RadioReportId("pel_m_0804100", InstanceName = nameof(RectumFindingType.Fistula))]
        public bool IsMAniInternus { get; set; }
        
        [RadioReportId("pel_m_0804101", InstanceName = nameof(RectumFindingType.Fistula))]
        public bool IsMAniExternus { get; set; }

        [RadioReportId("pel_m_080581", InstanceName = nameof(RectumFindingType.Fistula))]
        public bool IsFistulaInMalignantTumor {get; set; }

        [RadioReportId("pel_m_080582", InstanceName = nameof(RectumFindingType.Fistula))]
        public bool IsFistulaInMalignantSuspicionOf { get; set; }

        [RadioReportId("pel_m_080583", InstanceName = nameof(RectumFindingType.Fistula))]
        public bool IsTumourRecurrence { get; set; }

        [RadioReportId("pel_m_080585", InstanceName = nameof(RectumFindingType.Fistula))]
        public int? AxialExpansion { get; set; }

        [RadioReportId("pel_m_080587", InstanceName = nameof(RectumFindingType.Fistula))]
        public bool IsFistulaAfterRadiotherapyChemotherapy { get; set; }

        [RadioReportId("pel_m_080588", InstanceName = nameof(RectumFindingType.Fistula))]
        public bool IsFistulaAfterSurgery { get; set; }

        [RadioReportId("pel_m_080589", InstanceName = nameof(RectumFindingType.Fistula))]
        public bool IsPostinflammatoryFistulaTract { get; set; }

        [RadioReportId("pel_m_0803158", InstanceName = nameof(RectumFindingType.Fistula))]
        public bool IsInflamedDiverticulum { get; set; }

        [RadioReportId("pel_m_0803162", InstanceName = nameof(RectumFindingType.Fistula))]
        public bool IsAbsenceOfASeparatingFatLamellaBetweenBladderAndColon { get; set; }

        [RadioReportId("pel_m_0804114", InstanceName = nameof(RectumFindingType.Fistula))]
        public bool IsAirInTheUrinaryBladder {get; set;}

        [RadioReportId("pel_m_0804109", InstanceName = nameof(RectumFindingType.Fistula))]
        public bool IsFluidAndAirInVaginalFornix {get; set;}

        [RadioReportId("pel_m_0802120", InstanceName = nameof(RectumFindingType.Fistula))]
        public bool IsUterineCervix {get; set;}

        [RadioReportId("pel_m_0802122", InstanceName = nameof(RectumFindingType.Fistula))]
        public bool IsSphincter {get; set;}

        [RadioReportId("pel_m_0802123", InstanceName = nameof(RectumFindingType.Fistula))]
        public bool IsAnalChannel {get; set;}

        public QuantityType QuantityType { get; set; }

        [RadioReportId("pel_m_0803167", InstanceName = nameof(RectumFindingType.Fistula))]
        public int? MaximumLength { get; set; }

        [RadioReportId("pel_m_0803161", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Colovesical))]
        [RadioReportId("pel_m_0803161", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Vesicovaginal))]
        [RadioReportId("pel_m_0803161", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Vesicocervical))]
        [RadioReportId("pel_m_0803179", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Complex))]
        public bool IsFocalWallThickeningUrinaryBladder { get; set; }

        [RadioReportId("pel_m_0803160", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Colovesical))]
        [RadioReportId("pel_m_0803178", InstanceName = nameof(RectumFindingType.Fistula), CustomConditionName = nameof(FistulaType.Complex))]
        public bool IsFocalWallThickeningColon { get; set; }

        [RadioReportId("pel_m_0804116", InstanceName = nameof(RectumFindingType.Fistula))]
        public bool IsOsteomyelitis { get; set; }

        [RadioReportId("pel_m_0803170", InstanceName = nameof(RectumFindingType.Fistula))]
        public bool IsSubcutaneousFatTissueSacrococcygeal { get; set; }

        [RadioReportId("pel_m_0803171", InstanceName = nameof(RectumFindingType.Fistula))]
        public bool MoreThan2CmPosteriorToTheAnus { get; set; }

        public FistulaMorphologyType FistulaMorphologyType { get; set; }

        [RadioReportId("pel_m_0804118", InstanceName = nameof(RectumFindingType.Fistula))]
        public bool IsCmEnhancementOfThePerifocalSoftTissue { get; set; }

        [RadioReportId("pel_m_0804119", InstanceName = nameof(RectumFindingType.Fistula))]
        public bool IsInvolvementMLevatorAnMuscle { get; set; }

        [RadioReportId("pel_m_0804120", InstanceName = nameof(RectumFindingType.Fistula))]
        public bool IsInvolvementOfAnalSphincters { get; set; }

        [RadioReportId("pel_m_0804121", InstanceName = nameof(RectumFindingType.Fistula))]
        public bool IsInvolvementOfTheIschioanalFossa { get; set; }

        [RadioReportId("pel_m_0804110-l", InstanceName = nameof(FistulaInternalChangeType), IsExportable = false)]
        public InternalChangeType FistulaInternalChangeType { get; set; }

        [RadioReportId("pel_m_080593", InstanceName = nameof(RectumFindingType.Fistula))]
        public int? ExpansionInMm { get; set; }

        #endregion

        public bool CheckCondition(string customConditionId) =>
            customConditionId switch
            {
                nameof(RectumFindingType.ChronicInflammatoryBowelDisease) => FindingType.ToString() == customConditionId,
                nameof(RectumFindingType.Appendicitis) => FindingType.ToString() == customConditionId,
                nameof(FistulaType.Rectovaginal) => FistulaType.ToString() == customConditionId,
                nameof(FistulaType.Colovaginal) => FistulaType.ToString() == customConditionId,
                nameof(FistulaType.Colovesical) => FistulaType.ToString() == customConditionId,
                nameof(FistulaType.Vesicovaginal) => FistulaType.ToString() == customConditionId,
                nameof(FistulaType.Vesicocervical) => FistulaType.ToString() == customConditionId,
                nameof(FistulaType.Complex) => FistulaType.ToString() == customConditionId,
                nameof(FistulaType.PilonidalSinus) => FistulaType.ToString() == customConditionId,
                nameof(FistulaType.Perianal) => FistulaType.ToString() == customConditionId,
                _ => false,
            };
    }
}
