using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.ElbowMRT.Domain.Enums.Cartilage;

namespace RadioReport.ElbowMRT.Domain.Models
{
    public class CartilageFinding : FindingBase, IRadioReportIdConditionEvaluator
	{
		public override string InstanceName => FindingType.ToString();

		[RadioReportId("elb_m_050106")]
		public CartilageFindingType FindingType { get; set; }

		#region Common

		public CartilageLocations CartilageLocation { get; set; }

		[RadioReportId("elb_m_050306", InstanceName = nameof(CartilageFindingType.OsteochondralLesion))]
		[RadioReportId("elb_m_050425", InstanceName = nameof(CartilageFindingType.ChondralLesion))]
		public int? SizeInMm { get; set; }

		[RadioReportId("elb_m_050308", InstanceName = nameof(CartilageFindingType.OsteochondralLesion))]
		[RadioReportId("elb_m_0504111", InstanceName = nameof(CartilageFindingType.ChondralLesion))]
		public int? SecondPlaneInMm { get; set; }

		[RadioReportId("elb_m_0503100", InstanceName = nameof(CartilageFindingType.OsteochondralLesion))]
		[RadioReportId("elb_m_0504114", InstanceName = nameof(CartilageFindingType.ChondralLesion))]
		public int? ThirdPlaneInMm { get; set; }

		[RadioReportId("elb_m_050401", InstanceName = nameof(CartilageFindingType.OsteochondralLesion))]
		[RadioReportId("elb_m_050353", InstanceName = nameof(CartilageFindingType.Capsule))]
		public bool IsBoneMarrowEdema { get; set; }

		[RadioReportId("elb_m_050508", InstanceName = nameof(CartilageFindingType.OsteochondralLesion))]
		[RadioReportId("elb_m_050424", InstanceName = nameof(CartilageFindingType.Capsule), CustomConditionName = nameof(CapsuleType.PlicaSyndrome))]
		[RadioReportId("elb_m_050355", InstanceName = nameof(CartilageFindingType.Capsule), CustomConditionName = nameof(CapsuleType.Arthritis))]
		public bool IsJointEffusion { get; set; }

		[RadioReportId("elb_m_050524", InstanceName = nameof(CartilageFindingType.Ligaments), CustomConditionName = nameof(LigamentsLocalizationType.MedialCollateralLigamentTear))]
		[RadioReportId("elb_m_050538", InstanceName = nameof(CartilageFindingType.Ligaments), CustomConditionName = nameof(LigamentsLocalizationType.LateralCollateralLigamentTear))]
		[RadioReportId("elb_m_050339", InstanceName = nameof(CartilageFindingType.Capsule))]
		public bool IsThickening { get; set; }
		#endregion

		#region OsteochondralLesion

		public CharacterizationType CharacterizationType { get; set; }

		[RadioReportId("elb_m_0503105", InstanceName = nameof(CartilageFindingType.OsteochondralLesion))]
		public bool IsGeneral { get; set; }

		public GeneralCharacterizationType GeneralCharacterizationType { get; set; }

		[RadioReportId("elb_m_050402", InstanceName = nameof(CartilageFindingType.OsteochondralLesion))]
		public bool IsDetailsOsteochondralDefectLooseBody { get; set; }

		public DetectionFragmentationType DetectionFragmentationType { get; set; }

		[RadioReportId("elb_m_050405", InstanceName = nameof(CartilageFindingType.OsteochondralLesion))]
		public bool IsIntraosseousCystsAdjacentToLesion { get; set; }

		[RadioReportId("elb_m_050406", InstanceName = nameof(CartilageFindingType.OsteochondralLesion))]
		public bool IsLesionOutlinedByHighSignalFluid { get; set; }

		public StagingType StagingType { get; set; }

		public EpiphysealJointsClassificationType EpiphysealJointsClassificationType { get; set; }

        public ClassificationSubType ClassificationSubType { get; set; }

        [RadioReportId("elb_m_050509", InstanceName = nameof(CartilageFindingType.OsteochondralLesion))]
		public bool IsHemarthros { get; set; }

		#endregion

		#region ChondralLesion

		public EtiologyType EtiologyType { get; set; }

		public DetailsType DetailsType { get; set; }

		public OuterbridgeClassificationType OuterbridgeClassificationType { get; set; }

		[RadioReportId("elb_m_050511", InstanceName = nameof(CartilageFindingType.ChondralLesion))]
		public bool IsSubchondralCysts { get; set; }

		[RadioReportId("elb_m_050512", InstanceName = nameof(CartilageFindingType.ChondralLesion))]
		public bool IsLooseBody { get; set; }

		[RadioReportId("elb_m_050513", InstanceName = nameof(CartilageFindingType.ChondralLesion))]
		public bool IsChondrocalcinosis { get; set; }

		#endregion

		#region Ligaments

		public LigamentsLocalizationType LigamentsLocalizationType { get; set; }

		[RadioReportId("elb_m_050315", InstanceName = nameof(CartilageFindingType.Ligaments))]
		public bool IsAnteriorBundle { get; set; }

		[RadioReportId("elb_m_050316", InstanceName = nameof(CartilageFindingType.Ligaments))]
		public bool IsPosteriorBundle { get; set; }

		[RadioReportId("elb_m_050317", InstanceName = nameof(CartilageFindingType.Ligaments))]
		public bool IsTransversalBundle { get; set; }

		[RadioReportId("elb_m_050318", InstanceName = nameof(CartilageFindingType.Ligaments))]
		public bool IsLesionOfThePronatorFlexorTendonComplex { get; set; }

		public ExtentOfTearType ExtentOfTearType { get; set; }

		[RadioReportId("elb_m_050515", InstanceName = nameof(CartilageFindingType.Ligaments), CustomConditionName = nameof(LigamentsLocalizationType.MedialCollateralLigamentTear))]
		[RadioReportId("elb_m_050529", InstanceName = nameof(CartilageFindingType.Ligaments), CustomConditionName = nameof(LigamentsLocalizationType.LateralCollateralLigamentTear))]
		public bool IsLocalization { get; set; }

        public CompleteRuptureLocalizationType CompleteRuptureLocalizationType { get; set; }

		[RadioReportId("elb_m_050518", InstanceName = nameof(CartilageFindingType.Ligaments), CustomConditionName = nameof(LigamentsLocalizationType.MedialCollateralLigamentTear))]
		[RadioReportId("elb_m_050532", InstanceName = nameof(CartilageFindingType.Ligaments), CustomConditionName = nameof(LigamentsLocalizationType.LateralCollateralLigamentTear))]
		public bool IsRetraction { get; set; }

		[RadioReportId("elb_m_050519", InstanceName = nameof(CartilageFindingType.Ligaments), CustomConditionName = nameof(LigamentsLocalizationType.MedialCollateralLigamentTear))]
		[RadioReportId("elb_m_050533", InstanceName = nameof(CartilageFindingType.Ligaments), CustomConditionName = nameof(LigamentsLocalizationType.LateralCollateralLigamentTear))]
		public bool IsAdjacentSoftTissueEdema { get; set; }

		[RadioReportId("elb_m_050520", InstanceName = nameof(CartilageFindingType.Ligaments), CustomConditionName = nameof(LigamentsLocalizationType.MedialCollateralLigamentTear))]
		[RadioReportId("elb_m_050534", InstanceName = nameof(CartilageFindingType.Ligaments), CustomConditionName = nameof(LigamentsLocalizationType.LateralCollateralLigamentTear))]
		public bool IsConcomitantInjuriesOfTheAdjacentMuscleEnthesis { get; set; }

		[RadioReportId("elb_m_050522", InstanceName = nameof(CartilageFindingType.Ligaments), CustomConditionName = nameof(LigamentsLocalizationType.MedialCollateralLigamentTear))]
		[RadioReportId("elb_m_050536", InstanceName = nameof(CartilageFindingType.Ligaments), CustomConditionName = nameof(LigamentsLocalizationType.LateralCollateralLigamentTear))]
		public bool IsIllDefinedMargin { get; set; }

		[RadioReportId("elb_m_050523", InstanceName = nameof(CartilageFindingType.Ligaments), CustomConditionName = nameof(LigamentsLocalizationType.MedialCollateralLigamentTear))]
		[RadioReportId("elb_m_050537", InstanceName = nameof(CartilageFindingType.Ligaments), CustomConditionName = nameof(LigamentsLocalizationType.LateralCollateralLigamentTear))]
		public bool IsIncreasedSignal { get; set; }

		[RadioReportId("elb_m_050525", InstanceName = nameof(CartilageFindingType.Ligaments), CustomConditionName = nameof(LigamentsLocalizationType.MedialCollateralLigamentTear))]
		[RadioReportId("elb_m_050539", InstanceName = nameof(CartilageFindingType.Ligaments), CustomConditionName = nameof(LigamentsLocalizationType.LateralCollateralLigamentTear))]
		public bool IsMoreThan4MmDiameter { get; set; }

		[RadioReportId("elb_m_050526", InstanceName = nameof(CartilageFindingType.Ligaments))]
		public bool IsTSign { get; set; }

		[RadioReportId("elb_m_050527", InstanceName = nameof(CartilageFindingType.Ligaments), CustomConditionName = nameof(LigamentsLocalizationType.MedialCollateralLigamentTear))]
		[RadioReportId("elb_m_050540", InstanceName = nameof(CartilageFindingType.Ligaments), CustomConditionName = nameof(LigamentsLocalizationType.LateralCollateralLigamentTear))]
		public bool IsWavyAppearance { get; set; }

		[RadioReportId("elb_m_050324", InstanceName = nameof(CartilageFindingType.Ligaments))]
		public bool IsRadialCollateralLigament { get; set; }

		[RadioReportId("elb_m_050325", InstanceName = nameof(CartilageFindingType.Ligaments))]
		public bool IsLateralUlnarCollateralLigament { get; set; }

		[RadioReportId("elb_m_050326", InstanceName = nameof(CartilageFindingType.Ligaments))]
		public bool IsAnnularLigament { get; set; }

		[RadioReportId("elb_m_050327", InstanceName = nameof(CartilageFindingType.Ligaments))]
		public bool IsAccessoryLateralCollateralLigament { get; set; }

		[RadioReportId("elb_m_050328", InstanceName = nameof(CartilageFindingType.Ligaments))]
		public bool IsAnconeusMuscleLesionExtensorTendonComplex { get; set; }

		public InstabilityRingTheoryType InstabilityRingTheoryType { get; set; }

		#endregion

		#region Capsule

		public CapsuleType CapsuleType { get; set; }

		[RadioReportId("elb_m_050336", InstanceName = nameof(CartilageFindingType.Capsule))]
		public bool IsExtraarticularJointEffusion { get; set; }

		[RadioReportId("elb_m_050338", InstanceName = nameof(CartilageFindingType.Capsule))]
		public bool IsProminentPlicaHumeroradialis { get; set; }

		[RadioReportId("elb_m_050340", InstanceName = nameof(CartilageFindingType.Capsule))]
		public bool IsMoreThan3MmMaximumExtension { get; set; }

		[RadioReportId("elb_m_050341", InstanceName = nameof(CartilageFindingType.Capsule))]
		public bool IsIllDefined { get; set; }

		[RadioReportId("elb_m_050343", InstanceName = nameof(CartilageFindingType.Capsule))]
		public bool IsPosterolateral { get; set; }

		[RadioReportId("elb_m_050344", InstanceName = nameof(CartilageFindingType.Capsule))]
		public bool IsLateral { get; set; }

		[RadioReportId("elb_m_050345", InstanceName = nameof(CartilageFindingType.Capsule))]
		public bool IsAnterior { get; set; }

		[RadioReportId("elb_m_050427", InstanceName = nameof(CartilageFindingType.Capsule))]
		public bool IsLocalChondropathy { get; set; }

		[RadioReportId("elb_m_050426", InstanceName = nameof(CartilageFindingType.Capsule))]
		public bool IsLocalSynovialInflammation { get; set; }

		[RadioReportId("elb_m_050351", InstanceName = nameof(CartilageFindingType.Capsule))]
		public bool IsSynovitisWithPannusFormation { get; set; }

		[RadioReportId("elb_m_050352", InstanceName = nameof(CartilageFindingType.Capsule))]
		public bool IsSynovialCMEnhancement { get; set; }

		[RadioReportId("elb_m_050354", InstanceName = nameof(CartilageFindingType.Capsule))]
		public bool IsCartilageDestruction { get; set; }

		#endregion

		public bool CheckCondition(string customConditionId) => 
			customConditionId switch
			{
				nameof(LigamentsLocalizationType.MedialCollateralLigamentTear) => LigamentsLocalizationType.ToString() == customConditionId,
				nameof(LigamentsLocalizationType.LateralCollateralLigamentTear) => LigamentsLocalizationType.ToString() == customConditionId,
				nameof(CapsuleType.PlicaSyndrome) => CapsuleType.ToString() == customConditionId,
				nameof(CapsuleType.Arthritis) => CapsuleType.ToString() == customConditionId,
				_ => false
			};
	}
}
