using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.ThoraxMRT.Domain.Enums;
using RadioReport.ThoraxMRT.Domain.Enums.Mediastinum;

namespace RadioReport.ThoraxMRT.Domain.Models
{
	public class MediastinumFinding : FindingBase, IRadioReportIdConditionEvaluator
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("tho_m_040106")]
        public MediastinumFindingType FindingType { get; set; }

        #region Common

        [RadioReportId("tho_m_040307", InstanceName = nameof(MediastinumFindingType.LymphNodes), CustomConditionName = nameof(LymphNodesType.MultiplePathologicallyEnlargedLymphNodes))]
        [RadioReportId("tho_m_040509", InstanceName = nameof(MediastinumFindingType.LymphNodes), CustomConditionName = nameof(LymphNodesType.LocalizationAccToIASCL))]
        [RadioReportId("tho_m_040217", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        public bool IsCalcification { get; set; }

        [RadioReportId("tho_m_040208", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        public bool IsThrombus { get; set; }

        [RadioReportId("tho_m_040515", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        [RadioReportId("tho_m_040533", InstanceName = nameof(MediastinumFindingType.CardiovascularThoracicAorta))]
        [RadioReportId("tho_m_040263", InstanceName = nameof(MediastinumFindingType.Mass))]
        [RadioReportId("tho_m_040397", InstanceName = nameof(MediastinumFindingType.Trachea), CustomConditionName = nameof(TracheaType.Tracheomalacia))]
        [RadioReportId("tho_m_0403104", InstanceName = nameof(MediastinumFindingType.Trachea), CustomConditionName = nameof(TracheaType) + nameof(TracheaType.Mass))]
        public bool IsSuspected { get; set; }

        [RadioReportId("tho_m_040326", InstanceName = nameof(MediastinumFindingType.CardiovascularHeart))]
        [RadioReportId("tho_m_040479", InstanceName = nameof(MediastinumFindingType.Mass))]
        public bool IsPericardium { get; set; }

        [RadioReportId("tho_m_040514", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        [RadioReportId("tho_m_040532", InstanceName = nameof(MediastinumFindingType.CardiovascularThoracicAorta))]
        [RadioReportId("tho_m_040234", InstanceName = nameof(MediastinumFindingType.Mass))]
        [RadioReportId("tho_m_0403103", InstanceName = nameof(MediastinumFindingType.Trachea))]
        public MediastinumDiagnosisType DiagnosisType1 { get; set; } 

        [RadioReportId("tho_m_040517", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        [RadioReportId("tho_m_040262", InstanceName = nameof(MediastinumFindingType.Mass))]
        public MediastinumDiagnosisType DiagnosisType2 { get; set; }

        [RadioReportId("tho_m_040265", InstanceName = nameof(MediastinumFindingType.Mass))]
        public MediastinumDiagnosisType DiagnosisType3 { get; set; }

        [RadioReportId("tho_m_040268", InstanceName = nameof(MediastinumFindingType.Mass))]
        public MediastinumDiagnosisType DiagnosisType4 { get; set; } 

        [RadioReportId("tho_m_040430", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        [RadioReportId("tho_m_040435", InstanceName = nameof(MediastinumFindingType.CardiovascularThoracicAorta))]
        public bool IsPoststenoticDilatation { get; set; }

        public ShapeType ShapeType { get; set; }

        [RadioReportId("tho_m_040518", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        [RadioReportId("tho_m_040266", InstanceName = nameof(MediastinumFindingType.Mass))]
        public bool IsSubordinated { get; set; }

        [RadioReportId("tho_m_040335", InstanceName = nameof(MediastinumFindingType.CardiovascularHeart))]
        [RadioReportId("tho_m_040252", InstanceName = nameof(MediastinumFindingType.Mass))]
        public bool IsFocalSignalVoids { get; set; }

        public FocalSignalVoidsType FocalSignalVoidsType { get; set; }

        #endregion

        #region Mediastinum

        public MediastinumType MediastinumType { get; set; }

        [RadioReportId("tho_c_040301-l", InstanceName = nameof(DirectionType), IsExportable = false)]
        public ShiftType DirectionType { get; set; }

        #endregion

        #region LymphNodes

        public LymphNodesType LymphNodesType { get; set; } 

		[RadioReportId("tho_m_040305", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
		public int? DiameterOfTheLargestLnSadInMm { get; set; }

        public LymphNodeStationsType LymphNodeStationsType { get; set; }

        [RadioReportId("tho_m_040401-l", InstanceName = nameof(SupraclavicularLowCervicalAndJugular), IsExportable = false)]
		public ShiftType SupraclavicularLowCervicalAndJugular { get; set; }

		public ParatrachealNodesType ParatrachealNodesType { get; set; }

		public AorticNodesType AorticNodesType { get; set; }

		public InferiorMediastinalNodesType InferiorMediastinalNodesType { get; set; }

		public HilarLobarNodesType HilarLobarNodesType { get; set; }

        [RadioReportId("tho_m_040421-l", InstanceName = nameof(LymphNodesLocalizationType), IsExportable = false)]
        public ShiftType LymphNodesLocalizationType { get; set; }

		[RadioReportId("tho_m_040503", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
		public int? SadInMm { get; set; }

        [RadioReportId("tho_m_040505", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
		public bool IsSuspicious { get; set; }

        [RadioReportId("tho_m_040506", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
		public bool IsPreservedFattyHilum { get; set; }

        [RadioReportId("tho_m_040507", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
		public bool IsReferenceLesionAccToRECIST { get; set; }

        [RadioReportId("tho_m_040508", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
		public bool IsConfluent { get; set; }

        public MediastinumCalcificationType CalcificationType { get; set; }

        #endregion

        #region CardiovascularPulmonaryArteries

        [RadioReportId("tho_m_040210", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        public LungsLocations LungsLocation { get; set; }

        public LocalizationWithinVesselType LocalizationWithinVesselType { get; set; }

        [RadioReportId("tho_m_040213", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        public bool IsPoloMintSign { get; set; }

        [RadioReportId("tho_m_040214", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        public bool IsSaddlePulmonaryEmbolism { get; set; }

        [RadioReportId("tho_m_040315", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        public int? QuantitativeWideCentralPulmonaryArteryInMm { get; set; }

        [RadioReportId("tho_m_040317", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        public float? QuantitativeRVLVDiameterQuotient { get; set; }

        [RadioReportId("tho_m_040319", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        public float? QuantitativeRVLVVolumeQuotient { get; set; }

        [RadioReportId("tho_m_040321", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        public float? QuantitativePAAADiameterQuotient { get; set; }

        public CurvatureOfInterventricularSeptumType CurvatureOfInterventricularSeptumType { get; set; }

        [RadioReportId("tho_m_040425", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        public bool IsRemodeling { get; set; }

        [RadioReportId("tho_m_040426", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        public bool IsIntravascularBandsAndNets { get; set; }

        [RadioReportId("tho_m_040427", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        public bool IsPouchDefect { get; set; }

        [RadioReportId("tho_m_040428", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        public bool IsAbruptCaliberChange { get; set; }

        [RadioReportId("tho_m_040429", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        public bool IsStrictures { get; set; }

        [RadioReportId("tho_m_040431", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        public bool IsCollateralSupply { get; set; }

        [RadioReportId("tho_m_040432", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        public bool IsMosaicPerfusion { get; set; }

        public ChronicThromboembolicType ChronicThromboembolicType { get; set; }

        #endregion

        #region CardiovascularHeart

        [RadioReportId("tho_m_040219", InstanceName = nameof(MediastinumFindingType.CardiovascularHeart))]
        public bool IsRight { get; set; }

        [RadioReportId("tho_m_040220", InstanceName = nameof(MediastinumFindingType.CardiovascularHeart))]
        public bool IsRightAtriumEnlargement { get; set; }

        [RadioReportId("tho_m_040221", InstanceName = nameof(MediastinumFindingType.CardiovascularHeart))]
        public bool IsRightEnlargementOfTheVentricle { get; set; }

        [RadioReportId("tho_m_040222", InstanceName = nameof(MediastinumFindingType.CardiovascularHeart))]
        public bool IsRightMyocardialThickening { get; set; }

        [RadioReportId("tho_m_040223", InstanceName = nameof(MediastinumFindingType.CardiovascularHeart))]
        public bool IsVenousContrastAgentReflux { get; set; }

        [RadioReportId("tho_m_040224", InstanceName = nameof(MediastinumFindingType.CardiovascularHeart))]
        public bool IsRightThrombus { get; set; }

        [RadioReportId("tho_m_040225", InstanceName = nameof(MediastinumFindingType.CardiovascularHeart))]
        public bool IsLeft { get; set; }

        [RadioReportId("tho_m_040226", InstanceName = nameof(MediastinumFindingType.CardiovascularHeart))]
        public bool IsLeftAtriumEnlargement { get; set; }

        [RadioReportId("tho_m_040227", InstanceName = nameof(MediastinumFindingType.CardiovascularHeart))]
        public bool IsLeftEnlargementOfTheVentricle { get; set; }

        [RadioReportId("tho_m_040228", InstanceName = nameof(MediastinumFindingType.CardiovascularHeart))]
        public bool IsLeftMyocardialThickening { get; set; }

        [RadioReportId("tho_m_040229", InstanceName = nameof(MediastinumFindingType.CardiovascularHeart))]
        public bool IsLeftThrombus { get; set; }

        [RadioReportId("tho_m_040327", InstanceName = nameof(MediastinumFindingType.CardiovascularHeart))]
        public bool IsEffusion { get; set; }

        [RadioReportId("tho_m_040328", InstanceName = nameof(MediastinumFindingType.CardiovascularHeart))]
        public int? EffusionWidthMaxInMm { get; set; }

        [RadioReportId("tho_m_040330", InstanceName = nameof(MediastinumFindingType.CardiovascularHeart))]
        public bool IsMass { get; set; }

        [RadioReportId("tho_m_040331", InstanceName = nameof(MediastinumFindingType.CardiovascularHeart))]
        public int? MassDiameterMaxInMm { get; set; }

        [RadioReportId("tho_m_040333", InstanceName = nameof(MediastinumFindingType.CardiovascularHeart))]
        public bool IsPneumopericardium { get; set; }

        
        public bool IsFocalSignalVoid { get; set; }

        [RadioReportId("tho_m_040340", InstanceName = nameof(MediastinumFindingType.CardiovascularHeart))]
        public bool IsPericarditisConstrictiva { get; set; }

        #endregion

        #region CardiovascularThoracicAorta

        [RadioReportId("tho_m_040346", InstanceName = nameof(MediastinumFindingType.CardiovascularThoracicAorta))]
        public LocalizationType LocalizationType { get; set; }

        public PathologyType PathologyType { get; set; }

        public AnomaliesType AnomaliesType { get; set; }

        [RadioReportId("tho_m_040434", InstanceName = nameof(MediastinumFindingType.CardiovascularThoracicAorta))]
        public bool IsHypoplasticAorticArch { get; set; }

        [RadioReportId("tho_m_040436", InstanceName = nameof(MediastinumFindingType.CardiovascularThoracicAorta))]
        public bool IsPostoperativeResidualStenosis { get; set; }

        public DetailsKinkingType DetailsKinkingType { get; set; }

        public DetailsCongenitalVascularRingsType DetailsCongenitalVascularRingsType { get; set; }

        [RadioReportId("tho_m_040447", InstanceName = nameof(MediastinumFindingType.CardiovascularThoracicAorta))]
        public bool IsWithKommerellSDiverticulum { get; set; }

        [RadioReportId("tho_m_040347", InstanceName = nameof(MediastinumFindingType.CardiovascularThoracicAorta))]
        public bool IsAorticEctasia { get; set; }

        [RadioReportId("tho_m_040450", InstanceName = nameof(MediastinumFindingType.CardiovascularThoracicAorta))]
        public int? ExpansionMaxAxialDiameter { get; set; }

        [RadioReportId("tho_m_040453", InstanceName = nameof(MediastinumFindingType.CardiovascularThoracicAorta))]
        public int? ExpansionCraniocaudalInMm { get; set; }

        [RadioReportId("tho_m_040456", InstanceName = nameof(MediastinumFindingType.CardiovascularThoracicAorta))]
        public int? VesselDiameterProximalOfTheAneurysmInMm { get; set; }

        public ProgressMonitoringType ProgressMonitoringType { get; set; }

        [RadioReportId("tho_m_040459", InstanceName = nameof(MediastinumFindingType.CardiovascularThoracicAorta))]
        public bool IsEccentricPartialThrombosis { get; set; }

        [RadioReportId("tho_m_040529", InstanceName = nameof(MediastinumFindingType.CardiovascularThoracicAorta))]
        public int? MaxAxialDiameterPreliminaryExaminationInMm { get; set; }

        #endregion

        #region Mass

        public DescriptionType DescriptionType { get; set; }

        [RadioReportId("tho_m_040235", InstanceName = nameof(MediastinumFindingType.Mass))]
        public bool IsHistologyKnown { get; set; }

        public HistologyKnownType HistologyKnownType { get; set; }

        [RadioReportId("tho_m_040239", InstanceName = nameof(MediastinumFindingType.Mass))]
        public bool IsUpperMediastinum { get; set; }

        [RadioReportId("tho_m_040240", InstanceName = nameof(MediastinumFindingType.Mass))]
        public bool IsLowerMediastinum { get; set; }

        [RadioReportId("tho_m_040242", InstanceName = nameof(MediastinumFindingType.Mass))]
        public bool IsAnteriorMediastinum { get; set; }

        [RadioReportId("tho_m_040243", InstanceName = nameof(MediastinumFindingType.Mass))]
        public bool IsMiddleMediastinum { get; set; }

        [RadioReportId("tho_m_040244", InstanceName = nameof(MediastinumFindingType.Mass))]
        public bool IsPosteriorMediastinum { get; set; }

        public MediastinumLimitationType LimitationType { get; set; }

        [RadioReportId("tho_m_040464-l", InstanceName = nameof(HomogeneityType), IsExportable = false)]
        public HomogeneityType HomogeneityType { get; set; }

        [RadioReportId("tho_m_040536", InstanceName = nameof(MediastinumFindingType.Mass))]
        public SignalTypeExtended T1wSignalType { get; set; }

        [RadioReportId("tho_m_040539", InstanceName = nameof(MediastinumFindingType.Mass))]
        public SignalTypeExtended T2wSignalType { get; set; }

        [RadioReportId("tho_m_040541", InstanceName = nameof(MediastinumFindingType.Mass))]
        public bool IsDiffusionRestriction { get; set; }

        [RadioReportId("tho_m_040543", InstanceName = nameof(MediastinumFindingType.Mass))]
        public bool IsFatIsointens { get; set; }

        [RadioReportId("tho_m_040544", InstanceName = nameof(MediastinumFindingType.Mass))]
        public bool IsLiquidIsointens { get; set; }

        [RadioReportId("tho_m_040354", InstanceName = nameof(MediastinumFindingType.Mass))]
        public int? ExpansionSizeInMm { get; set; }

        [RadioReportId("tho_m_040357", InstanceName = nameof(MediastinumFindingType.Mass))]
        public int? ExpansionSecondPlaneInMm { get; set; }

        [RadioReportId("tho_m_040360", InstanceName = nameof(MediastinumFindingType.Mass))]
        public int? ExpansionThirdPlaneInMm { get; set; }

        [RadioReportId("tho_m_040246", InstanceName = nameof(MediastinumFindingType.Mass))]
        public bool IsFat { get; set; }

        [RadioReportId("tho_m_040247", InstanceName = nameof(MediastinumFindingType.Mass))]
        public bool IsMicroscopic { get; set; }

        [RadioReportId("tho_m_040248", InstanceName = nameof(MediastinumFindingType.Mass))]
        public bool IsMacroscopic { get; set; }

        [RadioReportId("tho_m_040249", InstanceName = nameof(MediastinumFindingType.Mass))]
        public bool IsCysts { get; set; }

        [RadioReportId("tho_m_040257", InstanceName = nameof(MediastinumFindingType.Mass))]
        public bool IsCapsule { get; set; }

        [RadioReportId("tho_m_040258", InstanceName = nameof(MediastinumFindingType.Mass))]
        public bool IsFibrousSepta { get; set; }

        [RadioReportId("tho_m_040259", InstanceName = nameof(MediastinumFindingType.Mass))]
        public bool IsLiquidFatLevel { get; set; }

        [RadioReportId("tho_m_040362", InstanceName = nameof(MediastinumFindingType.Mass))]
        public bool IsToothBone { get; set; }

        [RadioReportId("tho_m_040363", InstanceName = nameof(MediastinumFindingType.Mass))]
        public bool IsNecrosis { get; set; }

        [RadioReportId("tho_m_040364", InstanceName = nameof(MediastinumFindingType.Mass))]
        public bool IsHemorrhageBloodDegradation { get; set; }

        public CystsType CystsType { get; set; }

        public MediastinumGrowthPatternsType MediastinumGrowthPatternsType { get; set; }

        [RadioReportId("tho_m_040478", InstanceName = nameof(MediastinumFindingType.Mass))]
        public bool IsPleura { get; set; }

        [RadioReportId("tho_m_040480", InstanceName = nameof(MediastinumFindingType.Mass))]
        public bool IsBone { get; set; }

        [RadioReportId("tho_m_040482", InstanceName = nameof(MediastinumFindingType.Mass))]
        public bool IsScaloppedThinnedPedicle { get; set; }

        [RadioReportId("tho_m_040483", InstanceName = nameof(MediastinumFindingType.Mass))]
        public bool IsNeuroforaminalWidening { get; set; }

        [RadioReportId("tho_m_040484", InstanceName = nameof(MediastinumFindingType.Mass))]
        public bool IsPressureErosionRib { get; set; }

        [RadioReportId("tho_m_040485", InstanceName = nameof(MediastinumFindingType.Mass))]
        public bool IsLocoregionalOsteolysis { get; set; }

        public ContrastEnhancementType ContrastEnhancementType { get; set; }

        [RadioReportId("tho_m_040548-l", InstanceName = nameof(NoCMEnhancementHomogeneityType), IsExportable = false)]
        public HomogeneityType NoCMEnhancementHomogeneityType { get; set; }

        public ContrastEnhancementPatternType ContrastEnhancementPatternType { get; set; }

        [RadioReportId("tho_m_040367", InstanceName = nameof(MediastinumFindingType.Mass))]
        public int? CaudalExtensionInMmDiagnosis01 { get; set; }

        [RadioReportId("tho_m_040489", InstanceName = nameof(MediastinumFindingType.Mass))]
        public int? CaudalExtensionInMmDiagnosis02 { get; set; }

        [RadioReportId("tho_m_040560", InstanceName = nameof(MediastinumFindingType.Mass))]
        public int? CaudalExtensionInMmDiagnosis03 { get; set; }

        #endregion

        #region Esuphagus

        public EsuphagusType EsuphagusType { get; set; }

        public EsuphagusLocalizationType EsuphagusLocalizationType { get; set; }

        [RadioReportId("tho_m_040375", InstanceName = nameof(MediastinumFindingType.Esuphagus))]
        public int? MaxWallDiameterInMm { get; set; }

        [RadioReportId("tho_m_040378", InstanceName = nameof(MediastinumFindingType.Esuphagus))]
        public int? MaxExpansionCraniocaudalInMm { get; set; }

        [RadioReportId("tho_m_040381", InstanceName = nameof(MediastinumFindingType.Esuphagus))]
        public bool IsUpsideDownStomach { get; set; }

        #endregion

        #region Trachea

        public TracheaType TracheaType { get; set; }

        [RadioReportId("tho_m_040383-l", InstanceName = nameof(TracheaShiftType), IsExportable = false)]
        public ShiftType TracheaShiftType { get; set; }

        [RadioReportId("tho_m_040388", InstanceName = nameof(MediastinumFindingType.Trachea))]
        public HeightInRelationType HeightInRelationType { get; set; }

        [RadioReportId("tho_m_040390", InstanceName = nameof(MediastinumFindingType.Trachea))]
        public int? MinDiameterAxial { get; set; }

        [RadioReportId("tho_m_040393", InstanceName = nameof(MediastinumFindingType.Trachea))]
        public int? MinDiameterCraniocaudal { get; set; }

        [RadioReportId("tho_m_040396", InstanceName = nameof(MediastinumFindingType.Trachea))]
        public bool IsTracheomalaciaCollapseInExpiration { get; set; }

        [RadioReportId("tho_m_0403100", InstanceName = nameof(MediastinumFindingType.Trachea))]
        public int? MassDetailsMaxDiameterInMm { get; set; }

        #endregion

        public bool CheckCondition(string customConditionId) =>
            customConditionId switch
            {
                nameof(LymphNodesType.MultiplePathologicallyEnlargedLymphNodes) => LymphNodesType.ToString() == customConditionId,
                nameof(LymphNodesType.LocalizationAccToIASCL) => LymphNodesType.ToString() == customConditionId,
                nameof(TracheaType.Tracheomalacia) => TracheaType.ToString() == customConditionId,
                nameof(TracheaType) + nameof(TracheaType.Mass) => TracheaType == TracheaType.Mass,
                nameof(MediastinumFindingType.Trachea) => FindingType.ToString() == customConditionId,
                nameof(MediastinumFindingType.Mass) => FindingType.ToString() == customConditionId,
                _ => false
            };
    }
}
