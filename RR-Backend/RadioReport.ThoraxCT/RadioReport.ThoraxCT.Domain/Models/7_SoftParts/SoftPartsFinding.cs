using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.ThoraxCT.Domain.Enums;

namespace RadioReport.ThoraxCT.Domain.Models
{
    public class SoftPartsFinding : SoftPartsFindingBase, IRadioReportIdConditionEvaluator
	{
		#region Common

		public DescriptionType DescriptionType { get; set; }

		[RadioReportId("tho_c_070202-l", InstanceName = nameof(SiteType), IsExportable = false)]
		public SoftPartsSiteType SiteType { get; set; }

		public SoftPartsFormType FormType { get; set; }

		public SoftPartsLocalizationCraniocaudalType LocalizationCraniocaudalType { get; set; }

		[RadioReportId("tho_c_070218", InstanceName = nameof(SoftPartsFindingType.PleuralMass))]
		[RadioReportId("tho_c_070343", InstanceName = nameof(SoftPartsFindingType.PleuralThickening))]
		public bool IsAnterior { get; set; }

		[RadioReportId("tho_c_070219", InstanceName = nameof(SoftPartsFindingType.PleuralMass))]
		[RadioReportId("tho_c_070344", InstanceName = nameof(SoftPartsFindingType.PleuralThickening))]
		public bool IsLateral { get; set; }

		[RadioReportId("tho_c_070220", InstanceName = nameof(SoftPartsFindingType.PleuralMass))]
		[RadioReportId("tho_c_070345", InstanceName = nameof(SoftPartsFindingType.PleuralThickening))]
		public bool IsPosterior { get; set; }

		[RadioReportId("tho_c_070221", InstanceName = nameof(SoftPartsFindingType.PleuralMass))]
		[RadioReportId("tho_c_070346", InstanceName = nameof(SoftPartsFindingType.PleuralThickening))]
		public bool IsFissural { get; set; }

		[RadioReportId("tho_c_070222", InstanceName = nameof(SoftPartsFindingType.PleuralMass))]
		[RadioReportId("tho_c_070347", InstanceName = nameof(SoftPartsFindingType.PleuralThickening))]
		public bool IsMediastinal { get; set; }

		[RadioReportId("tho_c_070312", InstanceName = nameof(SoftPartsFindingType.PleuralMass))]
		[RadioReportId("tho_c_070244", InstanceName = nameof(SoftPartsFindingType.PleuralThickening))]
		[RadioReportId("tho_c_070356", InstanceName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
		public int? SizeMaxWidthInMm { get; set; }

		[RadioReportId("tho_c_070314", InstanceName = nameof(SoftPartsFindingType.PleuralMass))]
		[RadioReportId("tho_c_070246", InstanceName = nameof(SoftPartsFindingType.PleuralThickening))]
		[RadioReportId("tho_c_070358", InstanceName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
		public int? SecondPlaneInMm { get; set; }

		[RadioReportId("tho_c_0703123", InstanceName = nameof(SoftPartsFindingType.PleuralMass))]
		[RadioReportId("tho_c_070248", InstanceName = nameof(SoftPartsFindingType.PleuralThickening))]
		[RadioReportId("tho_c_070360", InstanceName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
		public int? ThirdPlaneInMm { get; set; }

		[RadioReportId("tho_c_070233", InstanceName = nameof(SoftPartsFindingType.PleuralMass))]
		[RadioReportId("tho_c_0702137", InstanceName = nameof(SoftPartsFindingType.PleuralThickening))]
		[RadioReportId("tho_c_0702145", InstanceName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
		public SoftPartsDiagnosisType DifferentialDiagnosis01 { get; set; }

		[RadioReportId("tho_c_0702132", InstanceName = nameof(SoftPartsFindingType.PleuralMass))]
		[RadioReportId("tho_c_0702138", InstanceName = nameof(SoftPartsFindingType.PleuralThickening))]
		[RadioReportId("tho_c_0702146", InstanceName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
		[RadioReportId("tho_c_070394", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenLiverGallBladder))]
		public bool IsSuspected { get; set; }

		[RadioReportId("tho_c_070235", InstanceName = nameof(SoftPartsFindingType.PleuralMass))]
		[RadioReportId("tho_c_0702139", InstanceName = nameof(SoftPartsFindingType.PleuralThickening))]
		[RadioReportId("tho_c_0702147", InstanceName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
		public SoftPartsDiagnosisType DifferentialDiagnosis02 { get; set; }

		[RadioReportId("tho_c_070236", InstanceName = nameof(SoftPartsFindingType.PleuralMass))]
		[RadioReportId("tho_c_070236", InstanceName = nameof(SoftPartsFindingType.PleuralThickening))]
		[RadioReportId("tho_c_070236", InstanceName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
		public bool IsSubordinated { get; set; }

		[RadioReportId("tho_c_070238", InstanceName = nameof(SoftPartsFindingType.PleuralMass))]
		[RadioReportId("tho_c_0702148", InstanceName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
		public SoftPartsDiagnosisType DifferentialDiagnosis03 { get; set; }

		[RadioReportId("tho_c_070239", InstanceName = nameof(SoftPartsFindingType.PleuralMass))]
		[RadioReportId("tho_c_0702117", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenLiverGallBladder))]
		[RadioReportId("tho_c_0702172", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenKidneyAdrenalGland))]
		[RadioReportId("tho_c_0702190", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenPancreas))]
		public bool IsMoreThanOneLesion { get; set; }

		public AbdomenLocalizationType AbdomenLocalizationType { get; set; }

		[RadioReportId("tho_c_0702110", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenLiverGallBladder))]
		[RadioReportId("tho_c_0702159", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenPancreas))]
		[RadioReportId("tho_c_0702171", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenKidneyAdrenalGland))]
		public AbdomenClassificationType AbdomenClassificationType { get; set; }

		#endregion

		#region PleuralEffusion

		[RadioReportId("tho_c_070205", InstanceName = nameof(SoftPartsFindingType.PleuralEffusion))]
		public int? SiteMaxWidthInMm { get; set; }

		[RadioReportId("tho_c_070207", InstanceName = nameof(SoftPartsFindingType.PleuralEffusion))]
		public int? AverageDensityInHU { get; set; }

		public DistributionType DistributionType { get; set; }

		public QualityType QualityType { get; set; }

		[RadioReportId("tho_c_070405", InstanceName = nameof(SoftPartsFindingType.PleuralEffusion))]
		public bool IsCoagulum { get; set; }

		[RadioReportId("tho_c_070408", InstanceName = nameof(SoftPartsFindingType.PleuralEffusion))]
		public bool IsGasInclusions { get; set; }

		[RadioReportId("tho_c_070409", InstanceName = nameof(SoftPartsFindingType.PleuralEffusion))]
		public bool IsCMEnrichingCapsule { get; set; }

		[RadioReportId("tho_c_070502", InstanceName = nameof(SoftPartsFindingType.PleuralEffusion))]
		public bool IsSedimentation { get; set; }

		[RadioReportId("tho_c_070503", InstanceName = nameof(SoftPartsFindingType.PleuralEffusion))]
		public bool IsSplitPleuraSign { get; set; }

		#endregion

		#region PleuralMass

		public ChestWallAngleType ChestWallAngleType { get; set; }

    public PleuralMassType PleuralMassType { get; set; }

		[RadioReportId("tho_c_070318", InstanceName = nameof(SoftPartsFindingType.PleuralMass))]
		public bool IsCircumferentialSoftTissueAugmentation { get; set; }

		[RadioReportId("tho_c_070319", InstanceName = nameof(SoftPartsFindingType.PleuralMass))]
		public bool IsCircumferentialSoftTissueAugmentationRight { get; set; }

		[RadioReportId("tho_c_070320", InstanceName = nameof(SoftPartsFindingType.PleuralMass))]
		public bool IsCircumferentialSoftTissueAugmentationLeft { get; set; }

		[RadioReportId("tho_c_070332", InstanceName = nameof(SoftPartsFindingType.PleuralMass), CustomConditionName = nameof(DifferentialDiagnosis01) + nameof(SoftPartsDiagnosisType.PleuralEffusionTrapped))]
		[RadioReportId("tho_c_0704123", InstanceName = nameof(SoftPartsFindingType.PleuralMass), CustomConditionName = nameof(DifferentialDiagnosis02) + nameof(SoftPartsDiagnosisType.PleuralEffusionTrapped))]
		[RadioReportId("tho_c_070586", InstanceName = nameof(SoftPartsFindingType.PleuralMass), CustomConditionName = nameof(DifferentialDiagnosis03) + nameof(SoftPartsDiagnosisType.PleuralEffusionTrapped))]
		public bool IsCloakPleuralEffusion { get; set; }

		#endregion

		#region PleuralThickening

		public PleuralThickeningLocalizationType PleuralThickeningLocalizationType { get; set; }

		[RadioReportId("tho_c_0704107", InstanceName = nameof(SoftPartsFindingType.PleuralThickening))]
		public bool IsObtusedAngulationOfCostophrenicAngle { get; set; }

		[RadioReportId("tho_c_0704108", InstanceName = nameof(SoftPartsFindingType.PleuralThickening))]
		public bool IsNodularConfiguration { get; set; }

		[RadioReportId("tho_c_0704109", InstanceName = nameof(SoftPartsFindingType.PleuralThickening))]
		public bool IsLocoregionalOsteolysis { get; set; }

		#endregion

		#region Pneumothorax

		public PneumothoraxType PneumothoraxType { get; set; }

		public ExtensionType ExtensionType { get; set; }

		[RadioReportId("tho_c_070265", InstanceName = nameof(SoftPartsFindingType.Pneumothorax))]
		public int? ExpansionMaxWidthInMm { get; set; }

		[RadioReportId("tho_c_0703127", InstanceName = nameof(SoftPartsFindingType.Pneumothorax))]
		public bool IsMediastinalshift { get; set; }

		[RadioReportId("tho_c_0703128-l", InstanceName = nameof(MediastinalshiftType), IsExportable = false)]
		public SoftPartsSiteType MediastinalshiftType { get; set; }

		[RadioReportId("tho_c_0703132", InstanceName = nameof(SoftPartsFindingType.Pneumothorax))]
		public bool IsAtelectasis { get; set; }

		#endregion

		#region ChestWallSoftTissue

		[RadioReportId("tho_c_0702181", InstanceName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
		public SpineLocations SpineLocation { get; set; }

		[RadioReportId("tho_c_070544", InstanceName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
		public bool IsNecroses { get; set; }

		[RadioReportId("tho_c_070284", InstanceName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
		public bool IsPleura { get; set; }

		[RadioReportId("tho_c_070285", InstanceName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
		public bool IsPericardium { get; set; }

		[RadioReportId("tho_c_070286", InstanceName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
		public bool IsBones { get; set; }

		[RadioReportId("tho_c_070287", InstanceName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
		public bool IsLungs { get; set; }

		[RadioReportId("tho_c_070288", InstanceName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
		public bool IsMediastinum { get; set; }

		[RadioReportId("tho_c_070290", InstanceName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
		public bool IsCutisThickening { get; set; }

		[RadioReportId("tho_c_070291", InstanceName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
		public bool IsPressureErosionRib { get; set; }

		#endregion

		#region Mamma

		public VolumeType VolumeType { get; set; }

		[RadioReportId("tho_c_070294-l", InstanceName = nameof(LossOfVolumeSiteType), IsExportable = false)]
		public SoftPartsSiteType LossOfVolumeSiteType { get; set; }

		[RadioReportId("tho_c_070298", InstanceName = nameof(SoftPartsFindingType.Mamma))]
		public bool IsAblatioRight { get; set; }

		[RadioReportId("tho_c_070299", InstanceName = nameof(SoftPartsFindingType.Mamma))]
		public bool IsAblatioLeft { get; set; }

		[RadioReportId("tho_c_0702152", InstanceName = nameof(SoftPartsFindingType.Mamma))]
		public bool IsBreastAugmentationRight { get; set; }

		[RadioReportId("tho_c_0702153", InstanceName = nameof(SoftPartsFindingType.Mamma))]
		public bool IsBreastAugmentationLeft { get; set; }

		[RadioReportId("tho_c_070377", InstanceName = nameof(SoftPartsFindingType.Mamma))]
		public bool IsThickened { get; set; }

		[RadioReportId("tho_c_070378", InstanceName = nameof(SoftPartsFindingType.Mamma))]
		public BreastLocations ThickenedCutisBreastLocation { get; set; }

		[RadioReportId("tho_c_070380", InstanceName = nameof(SoftPartsFindingType.Mamma))]
		public bool IsBlurred { get; set; }

		[RadioReportId("tho_c_070380-l", InstanceName = nameof(BlurredSiteType), IsExportable = false)]
		public SoftPartsSiteType BlurredSiteType { get; set; }

		[RadioReportId("tho_c_070461", InstanceName = nameof(SoftPartsFindingType.Mamma))]
		public bool IsStove { get; set; }

		[RadioReportId("tho_c_070463", InstanceName = nameof(SoftPartsFindingType.Mamma))]
		public BreastLocations StoveBreastLocation { get; set; }

		[RadioReportId("tho_c_070464", InstanceName = nameof(SoftPartsFindingType.Mamma))]
		public int? StoveMaxDiameterAxialInMm { get; set; }

		[RadioReportId("tho_c_070553", InstanceName = nameof(SoftPartsFindingType.Mamma))]
		public SoftPartsLimitationType LimitationType { get; set; }

		#endregion

		#region LymphNodesAxillary

		public LymphNodesAxillaryType LymphNodesAxillaryType { get; set; }

		[RadioReportId("tho_c_070384", InstanceName = nameof(SoftPartsFindingType.LymphNodesAxilla))]
		public bool IsLymphNodeRight { get; set; }

		[RadioReportId("tho_c_070385", InstanceName = nameof(SoftPartsFindingType.LymphNodesAxilla))]
		public int? RightMarginalShortAxisDiameter { get; set; }

		[RadioReportId("tho_c_070387", InstanceName = nameof(SoftPartsFindingType.LymphNodesAxilla), CustomConditionName = nameof(LymphNodesAxillaryType.BorderlineCentralFatHilusPreserved))]
		[RadioReportId("tho_c_070479", InstanceName = nameof(SoftPartsFindingType.LymphNodesAxilla), CustomConditionName = nameof(LymphNodesAxillaryType.Pathological))]
		public bool IsLymphNodeLeft { get; set; }

		[RadioReportId("tho_c_070388", InstanceName = nameof(SoftPartsFindingType.LymphNodesAxilla), CustomConditionName = nameof(LymphNodesAxillaryType.BorderlineCentralFatHilusPreserved))]
		[RadioReportId("tho_c_070480", InstanceName = nameof(SoftPartsFindingType.LymphNodesAxilla), CustomConditionName = nameof(LymphNodesAxillaryType.Pathological))]
		public int? LeftMarginalShortAxisDiameter { get; set; }

		[RadioReportId("tho_c_0703136", InstanceName = nameof(SoftPartsFindingType.LymphNodesAxilla))]
		public bool IsRightLevel1 { get; set; }

		[RadioReportId("tho_c_0703137", InstanceName = nameof(SoftPartsFindingType.LymphNodesAxilla))]
		public bool IsRightLevel2 { get; set; }

		[RadioReportId("tho_c_0703138", InstanceName = nameof(SoftPartsFindingType.LymphNodesAxilla))]
		public bool IsRightLevel3 { get; set; }

		[RadioReportId("tho_c_070484", InstanceName = nameof(SoftPartsFindingType.LymphNodesAxilla))]
		public bool IsLeftLevel1 { get; set; }

		[RadioReportId("tho_c_070485", InstanceName = nameof(SoftPartsFindingType.LymphNodesAxilla))]
		public bool IsLeftLevel2 { get; set; }

		[RadioReportId("tho_c_070486", InstanceName = nameof(SoftPartsFindingType.LymphNodesAxilla))]
		public bool IsLeftLevel3 { get; set; }

		#endregion

		#region UpperAbdomenLiverGallBladder

		[RadioReportId("tho_c_0702103", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenLiverGallBladder))]
		public bool IsFocalLiverLesion { get; set; }

		[RadioReportId("tho_c_0702107", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenLiverGallBladder))]
		public int? FocalLiverLesionMaxDiameterAxialInMm { get; set; }

		[RadioReportId("tho_c_070391", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenLiverGallBladder))]
		public bool IsDiffuseLiverLesion { get; set; }

		public DiffuseLesionType DiffuseLesionType { get; set; }

		[RadioReportId("tho_c_070396", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenLiverGallBladder))]
		public bool IsCholecystolithiasis { get; set; }

		[RadioReportId("tho_c_070397", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenLiverGallBladder))]
		public bool IsWallThickeningOfTheGallBladder { get; set; }

		#endregion

		#region UpperAbdomenPancreas

		[RadioReportId("tho_c_0702191", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenPancreas))]
		public bool IsFocalPancreaticLesion { get; set; }

		[RadioReportId("tho_c_0702187", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenPancreas))]
		public int? FocalPancreaticLesionMaxDiameterAxialInMm { get; set; }

		[RadioReportId("tho_c_070323", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenPancreas))]
		public bool IsDiffusePancreaticLesion { get; set; }

		[RadioReportId("tho_c_070324", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenPancreas))]
		public bool IsFattyAtrophy { get; set; }

		[RadioReportId("tho_c_070325", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenPancreas))]
		public bool IsAccumulationDuctusWirsungianus { get; set; }

		#endregion

		#region UpperAbdomenKidneyAdrenalGland

		[RadioReportId("tho_c_0702161", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenKidneyAdrenalGland))]
		public bool IsKidney { get; set; }

		[RadioReportId("tho_c_0702163", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenKidneyAdrenalGland))]
		public bool IsKidneyFocalLesion { get; set; }

		[RadioReportId("tho_c_0702168", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenKidneyAdrenalGland))]
		public int? KidneyFocalLesionMaxDiameterInMm { get; set; }

		[RadioReportId("tho_c_0703139", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenKidneyAdrenalGland))]
		public bool IsUrinaryRetention { get; set; }

		[RadioReportId("tho_c_0703141", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenKidneyAdrenalGland))]
		public bool IsUrinaryRetentionRight { get; set; }

		[RadioReportId("tho_c_0703142", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenKidneyAdrenalGland))]
		public bool IsUrinaryRetentionLeft { get; set; }

		public GradingType GradingType { get; set; }

		[RadioReportId("tho_c_0704112", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenKidneyAdrenalGland))]
		public bool IsMassAdrenalGland { get; set; }

		[RadioReportId("tho_c_0704114", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenKidneyAdrenalGland))]
		public bool IsMassAdrenalGlandRight { get; set; }

		[RadioReportId("tho_c_0704115", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenKidneyAdrenalGland))]
		public bool IsMassAdrenalGlandLeft { get; set; }

		[RadioReportId("tho_c_0704117", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenKidneyAdrenalGland))]
		public int? MassAdrenalGlandMaxDiameterInMm { get; set; }

		[RadioReportId("tho_c_0704120", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenKidneyAdrenalGland))]
		public AbdomenClassificationType MassAdrenalGlandClassificationType { get; set; }

		#endregion

		#region UpperAbdomenSpleenLymphNodesHiatusHernia

		[RadioReportId("tho_c_0702192", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenSpleenLymphNodesHiatusHernia))]
		public bool IsSplenomegaly { get; set; }

		[RadioReportId("tho_c_0702174", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenSpleenLymphNodesHiatusHernia))]
		public bool IsEnlargedAbdominalLymphNodes { get; set; }

		[RadioReportId("tho_c_0702175", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenSpleenLymphNodesHiatusHernia))]
		public int? DiameterSADInMm { get; set; }

		[RadioReportId("tho_c_0702177", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenSpleenLymphNodesHiatusHernia))]
		public bool IsPathological { get; set; }

		[RadioReportId("tho_c_0702178", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenSpleenLymphNodesHiatusHernia))]
		public bool IsPathologicalMultiple { get; set; }

		[RadioReportId("tho_c_0702179", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenSpleenLymphNodesHiatusHernia))]
		public bool IsPathologicalConglomerate { get; set; }

		[RadioReportId("tho_c_0702180", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenSpleenLymphNodesHiatusHernia))]
		public bool IsPathologicalHiatusHernia { get; set; }

		#endregion


		public bool CheckCondition(string customConditionId) =>
			customConditionId switch
			{
				nameof(DifferentialDiagnosis01) + nameof(SoftPartsDiagnosisType.PleuralEffusionTrapped) =>
				DifferentialDiagnosis01 == SoftPartsDiagnosisType.PleuralEffusionTrapped,
				nameof(DifferentialDiagnosis02) + nameof(SoftPartsDiagnosisType.PleuralEffusionTrapped) =>
				DifferentialDiagnosis02 == SoftPartsDiagnosisType.PleuralEffusionTrapped,
				nameof(DifferentialDiagnosis03) + nameof(SoftPartsDiagnosisType.PleuralEffusionTrapped) =>
				DifferentialDiagnosis03 == SoftPartsDiagnosisType.PleuralEffusionTrapped,
				nameof(SoftPartsFindingType.Mamma) => FindingType.ToString() == customConditionId,
				nameof(SoftPartsFindingType.PleuralEffusion) => FindingType.ToString() == customConditionId,
				nameof(SoftPartsFindingType.PleuralMass) => FindingType.ToString() == customConditionId,
				nameof(SoftPartsFindingType.PleuralThickening) => FindingType.ToString() == customConditionId,
				nameof(SoftPartsFindingType.Pneumothorax) => FindingType.ToString() == customConditionId,
				nameof(SoftPartsFindingType.ChestWallSoftTissueMass) => FindingType.ToString() == customConditionId,
				nameof(LymphNodesAxillaryType.BorderlineCentralFatHilusPreserved) => LymphNodesAxillaryType.ToString() == customConditionId,
				nameof(LymphNodesAxillaryType.Pathological) => LymphNodesAxillaryType.ToString() == customConditionId,
				_ => false
			};

	}
}
