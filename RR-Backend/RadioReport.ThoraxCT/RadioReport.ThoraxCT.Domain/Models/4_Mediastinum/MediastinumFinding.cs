using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.ThoraxCT.Domain.Enums;
using RadioReport.ThoraxCT.Domain.Enums.Mediastinum;

namespace RadioReport.ThoraxCT.Domain.Models
{
    public class MediastinumFinding : MediastinumFindingBase, IRadioReportIdConditionEvaluator
    {
        #region Common

        [RadioReportId("tho_c_040212", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        [RadioReportId("tho_c_040241", InstanceName = nameof(MediastinumFindingType.CardiovascularHeart))]
        public bool IsThrombus { get; set; }

        [RadioReportId("tho_c_040230", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        [RadioReportId("tho_c_040277", InstanceName = nameof(MediastinumFindingType.Mass))]
        [RadioReportId("tho_c_040397", InstanceName = nameof(MediastinumFindingType.Trachea), CustomConditionName = nameof(TracheaType.Tracheomalacia))]
        [RadioReportId("tho_c_0403108", InstanceName = nameof(MediastinumFindingType.Trachea), CustomConditionName = nameof(TracheaType) + nameof(TracheaType.Mass))]
        public bool IsSuspected { get; set; }

        [RadioReportId("tho_c_040340", InstanceName = nameof(MediastinumFindingType.CardiovascularHeart))]
        [RadioReportId("tho_c_040272", InstanceName = nameof(MediastinumFindingType.Mass))]
        public bool IsPericardium { get; set; }

        #endregion

        #region Mediastinum

        public MediastinumType MediastinumType { get; set; }

        [RadioReportId("tho_c_040301-l", InstanceName = nameof(DirectionType), IsExportable = false)]
        public ShiftType DirectionType { get; set; }

        #endregion

        #region LymphNodes

        public LymphNodesType LymphNodesType { get; set; }

		[RadioReportId("tho_c_040308", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
		public int? EnlargedLymphNodesMaxDiameterSADInMm { get; set; }

        public LymphNodeStationsType LymphNodeStationsType { get; set; }

        [RadioReportId("tho_c_040401-l", InstanceName = nameof(TopMediastinalNodesType), IsExportable = false)]
		public ShiftType TopMediastinalNodesType { get; set; }

		public ParatrachealNodesType ParatrachealNodesType { get; set; }

		public AorticNodesType AorticNodesType { get; set; }

		public InferiorMediastinalNodesType InferiorMediastinalNodesType { get; set; }

		public HilarLobarNodesType HilarLobarNodesType { get; set; }

        [RadioReportId("tho_c_040422-l", InstanceName = nameof(LymphNodesLocalizationType), IsExportable = false)]
        public ShiftType LymphNodesLocalizationType { get; set; }

		[RadioReportId("tho_c_040503", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
		public int? EnlargedLymphNodesCalcificationMaxDiameterSADInMm { get; set; }

		[RadioReportId("tho_c_040505", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
		public bool IsSuspect { get; set; }

		[RadioReportId("tho_c_040506", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
		public bool IsPreservedFattyHilum { get; set; }

		[RadioReportId("tho_c_040507", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
		public bool IsReferenceLesionAccToRECIST { get; set; }

		[RadioReportId("tho_c_040508", InstanceName = nameof(MediastinumFindingType.LymphNodes))]
		public bool IsContinuous { get; set; }

        #endregion

        #region CardiovascularPulmonaryArteries

        [RadioReportId("tho_c_040214", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        public LungsLocations LungsLocation { get; set; }

        public LocalizationWithinVesselType LocalizationWithinVesselType { get; set; }

        [RadioReportId("tho_c_040217", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        public bool IsPoloMintSign { get; set; }

        [RadioReportId("tho_c_040219", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        public bool IsCrumbsBiscuitSign { get; set; }

        [RadioReportId("tho_c_040319", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        public int? QuantitativeWideCentralPulmonaryArteryInMm { get; set; }

        [RadioReportId("tho_c_040321", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        public float? QuantitativeRVLVDiameterQuotient { get; set; }

        [RadioReportId("tho_c_040323", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        public float? QuantitativeRVLVVolumeQuotient { get; set; }

        [RadioReportId("tho_c_040325", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        public float? QuantitativePAAADiameterQuotient { get; set; }

        public CurvatureOfInterventricularSeptumType CurvatureOfInterventricularSeptumType { get; set; }

        [RadioReportId("tho_c_040426", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        public bool IsRemodeling { get; set; }

        [RadioReportId("tho_c_040427", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        public bool IsIntravascularLigamentsAndNets { get; set; }

        [RadioReportId("tho_c_040428", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        public bool IsPouchDefect { get; set; }

        [RadioReportId("tho_c_040429", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        public bool IsSuddenChangeOfDiameter { get; set; }

        [RadioReportId("tho_c_040430", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        public bool IsStrictures { get; set; }

        [RadioReportId("tho_c_040431", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        public bool IsPoststenoticDilatation { get; set; }

        [RadioReportId("tho_c_040432", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        public bool IsCollateralFlow { get; set; }

        [RadioReportId("tho_c_040433", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        public bool IsMosaicPerfusion { get; set; }

        [RadioReportId("tho_c_040513", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        public bool IsUpperLobeRight { get; set; }

        [RadioReportId("tho_c_040514", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        public bool IsMiddleLobe { get; set; }

        [RadioReportId("tho_c_040515", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        public bool IsLowerLobeRight { get; set; }

        [RadioReportId("tho_c_040516", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        public bool IsUpperLobeLeft { get; set; }

        [RadioReportId("tho_c_040517", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        public bool IsLingula { get; set; }

        [RadioReportId("tho_c_040518", InstanceName = nameof(MediastinumFindingType.CardiovascularPulmonaryArteries))]
        public bool IsLowerLobeLeft { get; set; }
        
        public CardiovascularPulmonaryDiagnosisType DiagnosisType { get; set; }

        public RightHeartStrainType RightHeartStrainType { get; set; }

        public DetailsPulmonaryHypertensionType DetailsPulmonaryHypertensionType { get; set; }

        public ChronicThromboembolicType ChronicThromboembolicType { get; set; }

        #endregion

        #region CardiovascularHeart

        [RadioReportId("tho_c_040232", InstanceName = nameof(MediastinumFindingType.CardiovascularHeart))]
        public bool IsRight { get; set; }

        [RadioReportId("tho_c_040233", InstanceName = nameof(MediastinumFindingType.CardiovascularHeart))]
        public bool IsRightAtriumEnlargement { get; set; }

        [RadioReportId("tho_c_040234", InstanceName = nameof(MediastinumFindingType.CardiovascularHeart))]
        public bool IsRightEnlargementOfTheVentricle { get; set; }

        [RadioReportId("tho_c_040235", InstanceName = nameof(MediastinumFindingType.CardiovascularHeart))]
        public bool IsRightMyocardialThickening { get; set; }

        [RadioReportId("tho_c_040236", InstanceName = nameof(MediastinumFindingType.CardiovascularHeart))]
        public bool IsVenousContrastAgentReflux { get; set; }

        [RadioReportId("tho_c_040237", InstanceName = nameof(MediastinumFindingType.CardiovascularHeart))]
        public bool IsLeft { get; set; }

        [RadioReportId("tho_c_040238", InstanceName = nameof(MediastinumFindingType.CardiovascularHeart))]
        public bool IsLeftAtriumEnlargement { get; set; }

        [RadioReportId("tho_c_040239", InstanceName = nameof(MediastinumFindingType.CardiovascularHeart))]
        public bool IsLeftEnlargementOfTheVentricle { get; set; }

        [RadioReportId("tho_c_040240", InstanceName = nameof(MediastinumFindingType.CardiovascularHeart))]
        public bool IsLeftMyocardialThickening { get; set; }

        [RadioReportId("tho_c_040335", InstanceName = nameof(MediastinumFindingType.CardiovascularHeart))]
        public bool IsCoronarySclerosis { get; set; }

        [RadioReportId("tho_c_040336", InstanceName = nameof(MediastinumFindingType.CardiovascularHeart))]
        public bool IsRCA { get; set; }

        [RadioReportId("tho_c_040337", InstanceName = nameof(MediastinumFindingType.CardiovascularHeart))]
        public bool IsLMA { get; set; }

        [RadioReportId("tho_c_040338", InstanceName = nameof(MediastinumFindingType.CardiovascularHeart))]
        public bool IsLCX { get; set; }

        [RadioReportId("tho_c_040339", InstanceName = nameof(MediastinumFindingType.CardiovascularHeart))]
        public bool IsLAD { get; set; }

        [RadioReportId("tho_c_040341", InstanceName = nameof(MediastinumFindingType.CardiovascularHeart))]
        public bool IsEffusion { get; set; }

        [RadioReportId("tho_c_040342", InstanceName = nameof(MediastinumFindingType.CardiovascularHeart))]
        public int? EffusionWidthMaxInMm { get; set; }

        [RadioReportId("tho_c_040344", InstanceName = nameof(MediastinumFindingType.CardiovascularHeart))]
        public bool IsMass { get; set; }

        [RadioReportId("tho_c_040345", InstanceName = nameof(MediastinumFindingType.CardiovascularHeart))]
        public int? MassDiameterMaxInMm { get; set; }

        [RadioReportId("tho_c_040347", InstanceName = nameof(MediastinumFindingType.CardiovascularHeart))]
        public bool IsPneumopericardium { get; set; }

        [RadioReportId("tho_c_040349", InstanceName = nameof(MediastinumFindingType.CardiovascularHeart))]
        public bool IsPericarditisConstrictiva { get; set; }

        #endregion

        #region CardiovascularThoracicAorta


        [RadioReportId("tho_c_040243", InstanceName = nameof(MediastinumFindingType.CardiovascularThoracicAorta))]
        public bool IsVasosclerosis { get; set; }

        [RadioReportId("tho_c_040244", InstanceName = nameof(MediastinumFindingType.CardiovascularThoracicAorta))]
        public bool IsVascularDilatation { get; set; }

        public VascularExtentType VascularExtentType { get; set; }

        [RadioReportId("tho_c_040249", InstanceName = nameof(MediastinumFindingType.CardiovascularThoracicAorta))]
        public bool IsAorticRoot { get; set; }

        [RadioReportId("tho_c_040250", InstanceName = nameof(MediastinumFindingType.CardiovascularThoracicAorta))]
        public bool IsAortaAscendens { get; set; }

        [RadioReportId("tho_c_040251", InstanceName = nameof(MediastinumFindingType.CardiovascularThoracicAorta))]
        public bool IsAorticArch { get; set; }

        [RadioReportId("tho_c_040252", InstanceName = nameof(MediastinumFindingType.CardiovascularThoracicAorta))]
        public bool IsAortaDescendens { get; set; }

        [RadioReportId("tho_c_040254", InstanceName = nameof(MediastinumFindingType.CardiovascularThoracicAorta))]
        public int? SizeDiameterMaxInMm { get; set; }

        #endregion

        #region Mass
        [RadioReportId("tho_c_040111-l", InstanceName = nameof(MediastinumFinding) + nameof(MediastinumFindingType.Mass), IsExportable = false)]
        public DescriptionType DescriptionType { get; set; }

        [RadioReportId("tho_c_040353", InstanceName = nameof(MediastinumFindingType.Mass))]
        public int? ExtentSizeInMm { get; set; }

        [RadioReportId("tho_c_040356", InstanceName = nameof(MediastinumFindingType.Mass))]
        public int? ExtentSecondPlaneInMm { get; set; }

        [RadioReportId("tho_c_040359", InstanceName = nameof(MediastinumFindingType.Mass))]
        public int? ExtentThirdPlaneInMm { get; set; }

        [RadioReportId("tho_c_040271", InstanceName = nameof(MediastinumFindingType.Mass))]
        public bool IsPleura { get; set; }

        [RadioReportId("tho_c_040273", InstanceName = nameof(MediastinumFindingType.Mass))]
        public bool IsBones { get; set; }

        [RadioReportId("tho_c_040362", InstanceName = nameof(MediastinumFindingType.Mass))]
        public bool IsScaloppingDilutedPedicle { get; set; }

        [RadioReportId("tho_c_040363", InstanceName = nameof(MediastinumFindingType.Mass))]
        public bool IsWidenedNeuroforamen { get; set; }

        [RadioReportId("tho_c_040364", InstanceName = nameof(MediastinumFindingType.Mass))]
        public bool IsPressureErosionRib { get; set; }

        [RadioReportId("tho_c_040365", InstanceName = nameof(MediastinumFindingType.Mass))]
        public bool IsLocoregionalOsteolysis { get; set; }

        [RadioReportId("tho_c_040276", InstanceName = nameof(MediastinumFindingType.Mass))]
        public MediastinumDiagnosisType DifferentialDiagnosis01 { get; set; }

        [RadioReportId("tho_c_040279", InstanceName = nameof(MediastinumFindingType.Mass))]
        public MediastinumDiagnosisType DifferentialDiagnosis02 { get; set; }

        [RadioReportId("tho_c_040280", InstanceName = nameof(MediastinumFindingType.Mass))]
        public bool IsSubordinated { get; set; }

        [RadioReportId("tho_c_040282", InstanceName = nameof(MediastinumFindingType.Mass))]
        public MediastinumDiagnosisType DifferentialDiagnosis03 { get; set; }

        [RadioReportId("tho_c_040368", InstanceName = nameof(MediastinumFindingType.Mass))]
        public int? CaudalExtensionInMmDiagnosis01 { get; set; }

        [RadioReportId("tho_c_040458", InstanceName = nameof(MediastinumFindingType.Mass))]
        public int? CaudalExtensionInMmDiagnosis02 { get; set; }

        [RadioReportId("tho_c_040534", InstanceName = nameof(MediastinumFindingType.Mass))]
        public int? CaudalExtensionInMmDiagnosis03 { get; set; }

        #endregion

        #region Esuphagus

        public EsuphagusType EsuphagusType { get; set; }

        public MediastinumLocalizationType LocalizationType { get; set; }

        [RadioReportId("tho_c_040375", InstanceName = nameof(MediastinumFindingType.Esuphagus))]
        public int? SpaceClaimMaxWallThicknessInMm { get; set; }

        [RadioReportId("tho_c_040378", InstanceName = nameof(MediastinumFindingType.Esuphagus))]
        public int? MaximumCraniocaudalExtensionInMm { get; set; }

        [RadioReportId("tho_c_040381", InstanceName = nameof(MediastinumFindingType.Esuphagus))]
        public bool IsUpsideDownStomach { get; set; }

        #endregion

        #region Trachea

        public TracheaType TracheaType { get; set; }

        [RadioReportId("tho_c_040383-l", InstanceName = nameof(TracheaShiftType), IsExportable = false)]
        public ShiftType TracheaShiftType { get; set; }

        [RadioReportId("tho_c_040388", InstanceName = nameof(MediastinumFindingType.Trachea))]
        public HeightInRelationType HeightInRelationType { get; set; }

        [RadioReportId("tho_c_040390", InstanceName = nameof(MediastinumFindingType.Trachea))]
        public int? MinDiameterAxial { get; set; }

        [RadioReportId("tho_c_040393", InstanceName = nameof(MediastinumFindingType.Trachea))]
        public int? MinDiameterCraniocaudal { get; set; }

        [RadioReportId("tho_c_040396", InstanceName = nameof(MediastinumFindingType.Trachea))]
        public bool IsTracheomalaciaCollapseInExpiration { get; set; }

        [RadioReportId("tho_c_0403100", InstanceName = nameof(MediastinumFindingType.Trachea))]
        public int? MassDetailsMaxDiameterInMm { get; set; }

        public MassDetailsDiagnosisType MassDetailsDiagnosisType { get; set; }

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
