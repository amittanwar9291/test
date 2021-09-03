using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.PelvisMRT.Domain.Enums.Bones;

namespace RadioReport.PelvisMRT.Domain.Models
{
    public class BonesFinding : BonesFindingBase, IRadioReportIdConditionEvaluator
    {
        #region Common

        [RadioReportId("pel_m_100203")]
		public HipLocalizers HipLocalizer { get; set; }

		[RadioReportId("pel_m_100472", InstanceName = nameof(BonesFindingType.SubchondralInsufficiencyFracture))]
		[RadioReportId("pel_m_100472", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
		[RadioReportId("pel_m_100477", InstanceName = nameof(BonesFindingType.TransientBoneMarrowEdema))]
		[RadioReportId("pel_m_100557", InstanceName = nameof(BonesFindingType.AvascularNecrosisOfTheFemoralHead))]
		[RadioReportId("pel_m_100568", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
		[RadioReportId("pel_m_100584", InstanceName = nameof(BonesFindingType.Tumor))]
		public bool IsSubordinated { get; set; }

		[RadioReportId("pel_m_100471", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
		[RadioReportId("pel_m_100471", InstanceName = nameof(BonesFindingType.SubchondralInsufficiencyFracture))]
		public bool IsTransientBoneMarrowEdema { get; set; }

		[RadioReportId("pel_m_100349", InstanceName = nameof(BonesFindingType.TransientBoneMarrowEdema))]
		[RadioReportId("pel_m_100489", InstanceName = nameof(BonesFindingType.AvascularNecrosisOfTheFemoralHead))]
		[RadioReportId("pel_m_1004100", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
		public bool IsArticularEffusion { get; set; }

		[RadioReportId("pel_m_100339", InstanceName = nameof(BonesFindingType.SubchondralInsufficiencyFracture))]
		[RadioReportId("pel_m_100490", InstanceName = nameof(BonesFindingType.AvascularNecrosisOfTheFemoralHead))]
		public bool IsOsteochondralFragment { get; set; }

		[RadioReportId("pel_m_100414", InstanceName = nameof(BonesFindingType.FracturePelvis))]
		[RadioReportId("pel_m_100414", InstanceName = nameof(BonesFindingType.FractureProximalFemur))]
		[RadioReportId("pel_m_100414", InstanceName = nameof(BonesFindingType.FractureAcetabulum))]
		[RadioReportId("pel_m_100537", InstanceName = nameof(BonesFindingType.FractureFemoralShaft))]
		public bool IsPseudarthrosis { get; set; }

		#endregion

		#region Fracture Proximal Femur

		public FpfClassificationType FpfClassificationType { get; set; }

		[RadioReportId("pel_m_100301l", InstanceName = nameof(FpfNotFurtherSpecifiedType), IsExportable = false, CustomConditionName = nameof(BonesFindingType.FractureProximalFemur))]
		public NotFurtherSpecifiedType FpfNotFurtherSpecifiedType { get; set; }

		public TrochantericRegionFractureFormType TrochantericRegionFractureFormType { get; set; }

		public SimplePertrochantericType SimplePertrochantericType { get; set; }

		public TrochantericRuptureType TrochantericRuptureType { get; set; }

		public MultiFragmentalPertrochantericType MultiFragmentalPertrochantericType { get; set; }

		public IntertrochantericType IntertrochantericType { get; set; }

		public FemoralNeckFractureFormType FemoralNeckFractureFormType { get; set; }

		public SubcapitalType SubcapitalType { get; set; }

		public TranscervicalType TranscervicalType { get; set; }

		public ShearFractureAngleType ShearFractureAngleType { get; set; }

		public FemoralHeadFractureFormType FemoralHeadFractureFormType { get; set; }

		public ShearFractureType ShearFractureType { get; set; }

		public DepressionFractureType ImpressionFractureType { get; set; }

		#endregion

		#region Fracture Femoral Shaft
		
		public FfsLocalizationType FfsLocalizationType { get; set; }

		public FfsFractureFormType FfsFractureFormType { get; set; }

		public SimpleFractureType SimpleFractureType { get; set; }

		public WedgeFractureType WedgeFractureType { get; set; }

		public MultiFragmentaryFractureType MultiFragmentaryFractureType { get; set; }

		[RadioReportId("pel_m_100534l", InstanceName = nameof(FsfNotFurtherSpecifiedType), IsExportable = false, CustomConditionName = nameof(BonesFindingType.FractureFemoralShaft))]
		public NotFurtherSpecifiedType FsfNotFurtherSpecifiedType { get; set; }

		#endregion

		#region Fracture Acetabulum
		public FaClassificationType FaClassificationType { get; set; }

		public FractureWallPartialJointInvolvement FractureWallAbutmentPartialJointInvolvementType { get; set; }

		public TransverseFracturePartialJointInvolvementType TransverseFracturePartialJointInvolvementType { get; set; }

		public FractureBothColumnsCompleteJointInvolvementType FractureBothAbutmentsCompleteJointInvolvementType { get; set; }

		[RadioReportId("pel_m_100318l", InstanceName = nameof(AcetabularFractureNotFurtherSpecifiedType), IsExportable = false, CustomConditionName = nameof(BonesFindingType.FractureAcetabulum))]
		public NotFurtherSpecifiedType AcetabularFractureNotFurtherSpecifiedType { get; set; }

        #endregion

        #region Fracture Pelvis

        public FbClassificationType FbClassificationType { get; set; }

		public FbFractureFormAType FbFractureFormAType { get; set; }

		public FbFractureFormA1SubType FbFractureFormA1SubType { get; set; }

		public FbFractureFormA2SubType FbFractureFormA2SubType { get; set; }

		public FbFractureFormA3SubType FbFractureFormA3SubType { get; set; }

		public FbFractureFormBType FbFractureFormBType { get; set; }

		public FbFractureFormB1SubType FbFractureFormB1SubType { get; set; }

		public FbFractureFormB2SubType FbFractureFormB2SubType { get; set; }

		public FbFractureFormB3SubType FbFractureFormB3SubType { get; set; }

		public FbFractureFormCType FbFractureFormCType { get; set; }

		public FbFractureFormC1SubType FbFractureFormC1SubType { get; set; }

		public FbFractureFormC2SubType FbFractureFormC2SubType { get; set; }

		public FbFractureFormC3SubType FbFractureFormC3SubType { get; set; }

		[RadioReportId("pel_m_100411", InstanceName = nameof(PelvicFractureNotFurtherSpecifiedType), IsExportable = false, CustomConditionName = nameof(BonesFindingType.FracturePelvis))]
		public NotFurtherSpecifiedType PelvicFractureNotFurtherSpecifiedType { get; set; }

        #endregion

        #region Stress Fracture
        public LocalizationFemoralNeckType LocalizationFemoralNeckType { get; set; }

		[RadioReportId("pel_m_100329", InstanceName = nameof(BonesFindingType.StressFracture))]
		public bool IsHypointenseLine { get; set; }

		public BoneWidthType BoneWidthType { get; set; }

		public WideEdemaMeasurementCoronaryType WideEdemaMeasurementCoronaryType { get; set; }
		
		[RadioReportId("pel_m_1004200", InstanceName = nameof(BonesFindingType.StressFracture))]
		public bool IsCorrespondingHypointensityT1w { get; set; }

		[RadioReportId("pel_m_100465", InstanceName = nameof(BonesFindingType.StressFracture))]
		public bool IsPeriostealOedema { get; set; }

		#endregion

		#region Subchondral Insufficiency Fracture

		[RadioReportId("pel_m_100335", InstanceName = nameof(BonesFindingType.SubchondralInsufficiencyFracture))]
		public bool IsLowSignalLine { get; set; }

		[RadioReportId("pel_m_100336", InstanceName = nameof(BonesFindingType.SubchondralInsufficiencyFracture))]
		public bool IsLowSignalArea { get; set; }

		[RadioReportId("pel_m_100337", InstanceName = nameof(BonesFindingType.SubchondralInsufficiencyFracture))]
		public bool IsArticularSurfaceCollapseCortical { get; set; }

		[RadioReportId("pel_m_100338", InstanceName = nameof(BonesFindingType.SubchondralInsufficiencyFracture))]
		public bool IsLiquidFilledSubchondralGap { get; set; }

		[RadioReportId("pel_m_100340", InstanceName = nameof(BonesFindingType.SubchondralInsufficiencyFracture))]
		public int? OsteochondralFragmentInMm { get; set; }

		[RadioReportId("pel_m_100342", InstanceName = nameof(BonesFindingType.SubchondralInsufficiencyFracture))]
		public bool IsCMEnhancementPerifocal { get; set; }

		#endregion

		#region Bone Marrow Edema

		[RadioReportId("pel_m_100348", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
		public bool IsSubchondralFracture { get; set; }

		public DistributionType DistributionType { get; set; }

		[RadioReportId("pel_m_100205", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
		public HipLocalizers ExpansionHipLocalizer { get; set; }

		[RadioReportId("pel_m_100208", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
		public bool IsOsSacrum { get; set; }

		[RadioReportId("pel_m_100280", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
		public bool IsOsSacrumRight { get; set; }

		[RadioReportId("pel_m_100281", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
		public bool IsOsSacrumLeft { get; set; }

		#endregion

		#region Transient Bone Marrow Edema

		public TbmeDifferentialDiagnosisType TbmeDifferentialDiagnosisType { get; set; }

		[RadioReportId("pel_m_100350", InstanceName = nameof(BonesFindingType.TransientBoneMarrowEdema))]
		public bool IsTbmeBoneMarrowEdema { get => true; }

		[RadioReportId("pel_m_100351", InstanceName = nameof(BonesFindingType.TransientBoneMarrowEdema))]
		public bool IsAbsentSubchondralLesion { get => true; }

		#endregion

		#region Avascular Necrosis Of The Femoral Head

		[RadioReportId("pel_m_100362", InstanceName = nameof(BonesFindingType.AvascularNecrosisOfTheFemoralHead))]
		public bool IsSubchondralgeographicalDemarcationLine { get => true; }

		[RadioReportId("pel_m_100319", InstanceName = nameof(BonesFindingType.AvascularNecrosisOfTheFemoralHead))]
		public bool IsDoubleLineCharacterT2w { get; set; }

		[RadioReportId("pel_m_100320", InstanceName = nameof(BonesFindingType.AvascularNecrosisOfTheFemoralHead))]
		public bool IsInverselyRelatedToThe { get; set; }

		[RadioReportId("pel_m_100352", InstanceName = nameof(BonesFindingType.AvascularNecrosisOfTheFemoralHead))]
		public bool IsAnterosuperior { get; set; }

		[RadioReportId("pel_m_100353", InstanceName = nameof(BonesFindingType.AvascularNecrosisOfTheFemoralHead))]
		public bool IsAdjacentBoneMarrowEdema { get; set; }

		[RadioReportId("pel_m_100479", InstanceName = nameof(BonesFindingType.AvascularNecrosisOfTheFemoralHead))]
		public int? MeasurementCoronaryInDegrees { get; set; }

		[RadioReportId("pel_m_100481", InstanceName = nameof(BonesFindingType.AvascularNecrosisOfTheFemoralHead))]
		public int? MeasurementSagittalinDegrees { get; set; }

		[RadioReportId("pel_m_100488", InstanceName = nameof(BonesFindingType.AvascularNecrosisOfTheFemoralHead))]
		public bool IsCoexistenceCoaxarthosis { get; set; }

		[RadioReportId("pel_m_100491", InstanceName = nameof(BonesFindingType.AvascularNecrosisOfTheFemoralHead))]
		public bool IsBilateralDiagnosis { get; set; }

		[RadioReportId("pel_m_100544", InstanceName = nameof(BonesFindingType.AvascularNecrosisOfTheFemoralHead))]
		public bool IsClassificationAccordingToARCO { get; set; }

		public AnfhCortexType AnfhCortexType { get; set; }

		public ClassificationAccordingToARCOType ClassificationAccordingToARCOType { get; set; }

        [RadioReportId("pel_m_100550", InstanceName = nameof(BonesFindingType.AvascularNecrosisOfTheFemoralHead))]
		public AnfhDifferentialDiagnosisType AnfhDifferentialDiagnosisType { get; set; }

		#endregion

		#region Coxarthrosis

		[RadioReportId("pel_m_100354", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
		public bool IsChondropathy { get; set; }

		[RadioReportId("pel_m_100493", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
		public bool IsSubchondralCystsGeodes { get; set; }

		[RadioReportId("pel_m_100494", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
		public bool IsSubchondralOedema { get; set; }

		[RadioReportId("pel_m_100495", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
		public bool IsSubchondralSclerosis { get; set; }

		[RadioReportId("pel_m_100497", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
		public bool IsOsteophytes { get; set; }

		[RadioReportId("pel_m_100498", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
		public bool IsSynovialCyst { get; set; }

		[RadioReportId("pel_m_100499", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
		public bool IsSynovitis { get; set; }

		[RadioReportId("pel_m_1004101", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
		public bool IsFreeJointBody { get; set; }

		[RadioReportId("pel_m_1004102", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
		public bool IsQuantity { get; set; }

		[RadioReportId("pel_m_1004103", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
		public bool IsLabrumLesion { get; set; }

		[RadioReportId("pel_m_1004104", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
		public bool IsLabrumHypertrophy { get; set; }

		[RadioReportId("pel_m_1004105", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
		public bool IsParalabralCysts { get; set; }

		public ChondropathyIntensityType ChondropathyIntensityType { get; set; }

		public ExpansionType ExpansionType { get; set; }

		public IntensityType IntensityType { get; set; }

		#endregion

		#region Osteomyelitis

		[RadioReportId("pel_m_100361", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
		public bool IsIntrabonyAbscess { get; set; }

		[RadioReportId("pel_m_1003201", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
		public int? IntrabonyAbscessDiameterInMm { get; set; }

		[RadioReportId("pel_m_100363", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
		public int? IntrabonyAbscessSecondLayerInMm { get; set; }

		[RadioReportId("pel_m_1003203", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
		public bool IsPenumbraSign { get; set; }

		[RadioReportId("pel_m_100366", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
		public bool IsPeripheralCMEnhancement { get; set; }

		[RadioReportId("pel_m_100365", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
		public bool IsMoreThanOneLesion { get; set; }

		[RadioReportId("pel_m_100370", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
		public bool IsSequester { get; set; }

		[RadioReportId("pel_m_100371", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
		public int? SequesterDiameterInMm { get; set; }

		[RadioReportId("pel_m_100373", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
		public bool IsSequesterMoreThanLesion { get; set; }

		[RadioReportId("pel_m_100374", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
		public bool IsNoKMEnhancement { get; set; }

		[RadioReportId("pel_m_100438", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
		public bool IsOsteolysis { get; set; }

		[RadioReportId("pel_m_1004117", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
		public bool PeriostealBoneApposition { get; set; }

		[RadioReportId("pel_m_1004107", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
		public bool IsDestruction { get; set; }

		[RadioReportId("pel_m_1004108", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
		public bool IsThinningScalopping { get; set; }

		[RadioReportId("pel_m_1004110", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
		public bool IsPeriostealThickening { get; set; }

		[RadioReportId("pel_m_1004111", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
		public bool IsSubperiostealAbscess { get; set; }

		[RadioReportId("pel_m_1004113", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
		public int? SubperiostealAbscessLargestLesionAxialInMm { get; set; }

		[RadioReportId("pel_m_1004115", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
		public bool IsPeriostrupture { get; set; }

		public StadiumType StadiumType { get; set; }

		public ODifferentialDiagnosisType ODifferentialDiagnosisType { get; set; }

		#endregion

		#region Osteitis Pubis

		[RadioReportId("pel_m_100375", InstanceName = nameof(BonesFindingType.OsteitisPubis))]
		public bool IsBoneMarrowEdemaOs { get; set; }

		[RadioReportId("pel_m_100376", InstanceName = nameof(BonesFindingType.OsteitisPubis))]
		public bool IsBoneMarrowEdemaOsRight { get; set; }

		[RadioReportId("pel_m_100377", InstanceName = nameof(BonesFindingType.OsteitisPubis))]
		public bool IsBoneMarrowEdemaOsLeft { get; set; }

		[RadioReportId("pel_m_100378", InstanceName = nameof(BonesFindingType.OsteitisPubis))]
		public bool IsMuscleEdemaAdductors { get; set; }

		[RadioReportId("pel_m_100379", InstanceName = nameof(BonesFindingType.OsteitisPubis))]
		public bool IsIrregularityJoint { get; set; }

		[RadioReportId("pel_m_100380", InstanceName = nameof(BonesFindingType.OsteitisPubis))]
		public bool IsSecondaryCleftSign { get; set; }

		[RadioReportId("pel_m_100381", InstanceName = nameof(BonesFindingType.OsteitisPubis))]
		public bool IsSecondaryCleftSignRight { get; set; }

		[RadioReportId("pel_m_100382", InstanceName = nameof(BonesFindingType.OsteitisPubis))]
		public bool IsSecondaryCleftSignLeft { get; set; }

		[RadioReportId("pel_m_100383", InstanceName = nameof(BonesFindingType.OsteitisPubis))]
		public bool IsSubchondralCysts { get; set; }

		[RadioReportId("pel_m_100384", InstanceName = nameof(BonesFindingType.OsteitisPubis))]
		public bool IsRectusAbdominisTendinopathy { get; set; }

		[RadioReportId("pel_m_100385", InstanceName = nameof(BonesFindingType.OsteitisPubis))]
		public bool IsRectusAbdominisTendinopathyRight { get; set; }

		[RadioReportId("pel_m_100386", InstanceName = nameof(BonesFindingType.OsteitisPubis))]
		public bool IsRectusAbdominisTendinopathyLeft { get; set; }

		#endregion

		#region JointEffusion

		[RadioReportId("pel_m_100209", InstanceName = nameof(BonesFindingType.JointEffusion))]
		public bool IsJointEffusionRight { get; set; }

		[RadioReportId("pel_m_100210", InstanceName = nameof(BonesFindingType.JointEffusion))]
		public bool IsJointEffusionLeft { get; set; }

		public QuantityType QuantityType { get; set; }

		[RadioReportId("pel_m_1003115", InstanceName = nameof(BonesFindingType.JointEffusion))]
		public bool IsHemorrhagic { get; set; }

		[RadioReportId("pel_m_1003116", InstanceName = nameof(BonesFindingType.JointEffusion))]
		public bool IsSedimentation { get; set; }

        #endregion

        #region Bursitis

        public SideType SideType{ get; set; }

        public BursitisLocalizationType BursitisLocalizationType { get; set; }

        public BursitisLimitationType BursitisLimitationType { get; set; }

        [RadioReportId("pel_m_1003122", InstanceName = nameof(BonesFindingType.Bursitis))]
		public int? MaxDiameterInMm { get; set; }

		public BursitisHomogeneityType BursitisHomogeneityType { get; set; }

		[RadioReportId("pel_m_1003125", InstanceName = nameof(BonesFindingType.Bursitis))]
		public bool IsHemorrhage { get; set; }

		#endregion

		#region Tumor

		[RadioReportId("pel_m_100207")]
		public HipLocalizers SingleSelectionTumorHipLocalizer { get; set; }

		public DescriptionType DescriptionType { get; set; }

		[RadioReportId("pel_m_1004120", InstanceName = nameof(BonesFindingType.Tumor))]
		public int? ExpansionSizeInMm { get; set; }

		[RadioReportId("pel_m_1004122", InstanceName = nameof(BonesFindingType.Tumor))]
		public int? Expansion2ndLayerSizeInMm { get; set; }

		[RadioReportId("pel_m_1004124", InstanceName = nameof(BonesFindingType.Tumor))]
		public int? Expansion3rdLayerSizeInMm { get; set; }

		[RadioReportId("pel_m_1004130", InstanceName = nameof(BonesFindingType.Tumor))]
		public bool IsContrastInSepta { get; set; }

		[RadioReportId("pel_m_100572", InstanceName = nameof(BonesFindingType.Tumor))]
		public bool IsCalcificationDiffuselyDistributed { get; set; }

		[RadioReportId("pel_m_100573", InstanceName = nameof(BonesFindingType.Tumor))]
		public bool IsNidus { get; set; }

		[RadioReportId("pel_m_100577", InstanceName = nameof(BonesFindingType.Tumor))]
		public bool IsCapT2wHyperintensity { get; set; }

		[RadioReportId("pel_m_1003103", InstanceName = nameof(BonesFindingType.Tumor))]
		public bool IsInfiltrationBoundary { get; set; }

		[RadioReportId("pel_m_1003108", InstanceName = nameof(BonesFindingType.Tumor))]
		public bool IsPerifocalSclerosis { get; set; }

		[RadioReportId("pel_m_1003109", InstanceName = nameof(BonesFindingType.Tumor))]
		public bool IsSurroundingInflammatoryReaction { get; set; }

		[RadioReportId("pel_m_1004143")]
		public bool IsPathologicalFracture { get; set; }

		[RadioReportId("pel_m_1004141", InstanceName = nameof(BonesFindingType.Tumor))]
		public bool IsWithinThePrimarilyAffectedBone { get; set; }

		public LocalSpreadType LocalSpreadType { get; set; }

		public TClassificationType ClassificationType { get; set; }

		[RadioReportId("pel_m_100589", InstanceName = nameof(BonesFindingType.Tumor))]
		public bool IsHistologicallySecured { get; set; }

		public HistologicallySecuredType HistologicallySecuredType { get; set; }

		[RadioReportId("pel_m_100581", InstanceName = nameof(BonesFindingType.Tumor))]
		public BonesDiagnosisType DifferentialDiagnosis1 { get; set; }

		[RadioReportId("pel_m_100583", InstanceName = nameof(BonesFindingType.Tumor))]
		public BonesDiagnosisType DifferentialDiagnosis2 { get; set; }

		[RadioReportId("pel_m_100586", InstanceName = nameof(BonesFindingType.Tumor))]
		public BonesDiagnosisType DifferentialDiagnosis3 { get; set; }

		#endregion

		public bool CheckCondition(string customConditionId) =>
			customConditionId switch
			{
				nameof(BonesFindingType.FractureProximalFemur) => FindingType == BonesFindingType.FractureProximalFemur,
				nameof(BonesFindingType.FractureFemoralShaft) => FindingType == BonesFindingType.FractureFemoralShaft,
				nameof(BonesFindingType.FracturePelvis) => FindingType == BonesFindingType.FracturePelvis,
				nameof(BonesFindingType.FractureAcetabulum) => FindingType == BonesFindingType.FractureAcetabulum,
				nameof(BonesFindingType.Tumor) => FindingType == BonesFindingType.Tumor,
				_ => false
			};
	}
}
