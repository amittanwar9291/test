using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.ElbowMRT.Domain.Enums;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.ElbowMRT.Domain.Enums.TendonsAndMuscles;

namespace RadioReport.ElbowMRT.Domain.Models
{
    public class TendonsAndMusclesFinding : FindingBase, IRadioReportIdConditionEvaluator
    {
        public override string InstanceName => FindingType.ToString();

        #region Common

        [RadioReportId("elb_m_060106")]
        public TendonsAndMusclesFindingType FindingType { get; set; }

        public PathologyType PathologyType { get; set; }

        [RadioReportId("elb_m_060213", InstanceName = nameof(TendonsAndMusclesFindingType.LesionOfTheDistalBicepsTendon))]
        [RadioReportId("elb_m_060223", InstanceName = nameof(TendonsAndMusclesFindingType.Musculature))]
        public bool IsHematoma { get; set; }

        public ScopeType ScopeType { get; set; }

        [RadioReportId("elb_m_060327", InstanceName = nameof(TendonsAndMusclesFindingType.LesionOfTheDistalBicepsTendon))]
        [RadioReportId("elb_m_060327", InstanceName = nameof(TendonsAndMusclesFindingType.LesionOfTheTricepsTendon))]
        [RadioReportId("elb_m_060421", InstanceName = nameof(TendonsAndMusclesFindingType.Musculature))]
        public bool IsBonyAvulsion { get; set; }

        [RadioReportId("elb_m_060309", InstanceName = nameof(TendonsAndMusclesFindingType.Epicondylitis))]
        [RadioReportId("elb_m_060328", InstanceName = nameof(TendonsAndMusclesFindingType.LesionOfTheDistalBicepsTendon))]
        [RadioReportId("elb_m_060328", InstanceName = nameof(TendonsAndMusclesFindingType.LesionOfTheTricepsTendon))]
        public bool IsRetraction { get; set; }

        [RadioReportId("elb_m_060329", InstanceName = nameof(TendonsAndMusclesFindingType.LesionOfTheDistalBicepsTendon))]
        [RadioReportId("elb_m_060329", InstanceName = nameof(TendonsAndMusclesFindingType.LesionOfTheTricepsTendon))]
        [RadioReportId("elb_m_060418", InstanceName = nameof(TendonsAndMusclesFindingType.Musculature))]
        public int? RetractionInMm { get; set; }
        #endregion

        #region Epicondylitis

        public TendonsAndMusclesLocalizationType LocalizationType { get; set; }

        [RadioReportId("elb_m_060502")]
        public bool IsFocalBoneMarrowEdema { get; set; }

        [RadioReportId("elb_m_060503")]
        public bool IsBonyErosion { get; set; }

        [RadioReportId("elb_m_060504")]
        public bool IsEnthesiophytes { get; set; }

        [RadioReportId("elb_m_060505")]
        public bool IsPeritendinousEdema { get; set; }

        [RadioReportId("elb_m_060506")]
        public bool IsVascularization { get; set; }

        [RadioReportId("elb_m_060507")]
        public bool IsArticularEffusion { get; set; }

        [RadioReportId("elb_m_060508")]
        public bool IsBursitis { get; set; }

        [RadioReportId("elb_m_060509")]
        public bool IsNecrosisSign { get; set; }

        [RadioReportId("elb_m_0603100")]
        public bool IsLateralJointCapsuleThickening { get; set; }

        [RadioReportId("elb_m_060302")]
        public bool IsEnthesiopathyDeepExtensorTendons { get; set; }

        [RadioReportId("elb_m_060303", CustomConditionName = nameof(TendonsAndMusclesLocalizationType.LateralEpicondylitis))]
        [RadioReportId("elb_m_060313", CustomConditionName = nameof(TendonsAndMusclesLocalizationType.MedialEpicondylitis))]
        public bool IsT2wHyperintensity { get; set; }

        [RadioReportId("elb_m_060304", CustomConditionName = nameof(TendonsAndMusclesLocalizationType.LateralEpicondylitis))]
        [RadioReportId("elb_m_060314", CustomConditionName = nameof(TendonsAndMusclesLocalizationType.MedialEpicondylitis))]
        public bool IsDetailsThickening { get; set; }

        [RadioReportId("elb_m_060305")]
        public bool IsEnthesiopathyRestrictedTendonExtensorCarpiRadialisBrevisMuscle { get; set; }

        [RadioReportId("elb_m_060306")]
        public bool IsRuptureDeepExtensorTendons { get; set; }

        [RadioReportId("elb_m_060306-1", IsExportable = false, InstanceName = nameof(TearOfDeepExtensorType))]
        public TearType TearOfDeepExtensorType { get; set; }

        [RadioReportId("elb_m_060310")]
        public bool IsRuptureRestrictedTendonExtensorCarpiRadialisBrevisMuscle { get; set; }

        [RadioReportId("elb_m_060402")]
        public bool IsLigamentThickening { get; set; }

        [RadioReportId("elb_m_060403")]
        public bool IsRupture { get; set; }

        [RadioReportId("elb_m_060405")]
        public bool IsRadialCollateralLigamentThickening { get; set; }

        [RadioReportId("elb_m_060406")]
        public bool IsRadialCollateralLigamentRupture { get; set; }

        [RadioReportId("elb_m_0603103")]
        public bool IsThickeningJointCapsuleMedial { get; set; }

        [RadioReportId("elb_m_0603104")]
        public bool IsUlnarNerveNeuritis { get; set; }

        [RadioReportId("elb_m_060312")]
        public bool IsEnthesiopathyFlexorOrPronatorTendons { get; set; }

        public TendinopathyPronatorThickeningType TendinopathyPronatorThickeningType { get; set; }

        [RadioReportId("elb_m_0604100")]
        public bool IsTendonTear { get; set; }

        [RadioReportId("elb_m_0604100-1", IsExportable = false, InstanceName = nameof(TendonTearType))]
        public TearType TendonTearType { get; set; }

        [RadioReportId("elb_m_0604103")]
        public bool IsCompleteRuptureRetraction { get; set; }

        public CompleteRuptureRetractionType CompleteRuptureRetractionType { get; set; }

        [RadioReportId("elb_m_060409")]
        public bool IsThickening { get; set; }

        [RadioReportId("elb_m_060410")]
        public bool IsMCLRupture { get; set; }

        #endregion

        #region LesionOfTheDistalBicepsTendon

        [RadioReportId("elb_m_060212")]
        public bool IsSoftTissueEdema { get; set; }

        [RadioReportId("elb_m_060325")]
        public bool IsPartialRuptureMoreThan50Percent { get; set; }

        public BicipitalAponeurosisType BicipitalAponeurosisType { get; set; }

        [RadioReportId("elb_m_060335")]
        public bool IsBursitisBicipitoradialis { get; set; }

        [RadioReportId("elb_m_060336")]
        public bool IsBoneMarrowEdema { get; set; }

        #endregion

        #region LesionOfTheTricepsTendon

        [RadioReportId("elb_m_060338")]
        public bool IsSuperficial { get; set; }

        [RadioReportId("elb_m_060339")]
        public bool IsDeep { get; set; }

        [RadioReportId("elb_m_060340")]
        public bool IsBursitisOlecranii { get; set; }

        #endregion

        #region Musculature

        [RadioReportId("elb_m_060216")]
        public LocalizationMuscleCompartmentsType LocalizationMuscleCompartmentsType { get; set; }

        public LocalizationWithinTheMuscleType LocalizationWithinMuscleType { get; set; }

        [RadioReportId("elb_m_060342")]
        public bool IsMuscleLesion { get; set; }

        public ClassificationMunichConsensusType ClassificationMunichConsensusType { get; set; }

        [RadioReportId("elb_m_060414")]
        public bool IsRuptureDiameterBelow5Mm { get; set; }

        [RadioReportId("elb_m_060416")]
        public bool IsCrossDiameterRuptureOverOrEqual5Mm { get; set; }

        [RadioReportId("elb_m_060420")]
        public bool IsWavyAppearanceOfTheFibers { get; set; }

        [RadioReportId("elb_m_060427")]
        public bool IsIntracorticalEdema { get; set; }

        [RadioReportId("elb_m_060511")]
        public bool IsFattyInfiltration { get; set; }

        [RadioReportId("elb_m_060512")]
        public bool IsMuscularAtrophy { get; set; }

        public MuscularAtrophyType MuscularAtrophyType { get; set; }

        [RadioReportId("elb_m_060515")]
        public bool IsApophysitis { get; set; }

        [RadioReportId("elb_m_060516")]
        public bool IsFascialLaceration { get; set; }

        [RadioReportId("elb_m_060517")]
        public bool IsMuscleHerniation { get; set; }

        [RadioReportId("elb_m_060225")]
        public bool IsIntramuscular { get; set; }

        [RadioReportId("elb_m_060226")]
        public bool IsInterfascial { get; set; }

        [RadioReportId("elb_m_060227")]
        public bool IsIntermuscular { get; set; }

        [RadioReportId("elb_m_060230")]
        public SignalType SignalT1w { get; set; }

        [RadioReportId("elb_m_060233")]
        public SignalType SignalT2w { get; set; }

        public HematomaCharacterizationType HematomaCharacterizationType { get; set; }

        public bool CheckCondition(string customConditionId) =>
         customConditionId switch
         {
             nameof(TendonsAndMusclesLocalizationType.LateralEpicondylitis) => LocalizationType == TendonsAndMusclesLocalizationType.LateralEpicondylitis,
             nameof(TendonsAndMusclesLocalizationType.MedialEpicondylitis) => LocalizationType == TendonsAndMusclesLocalizationType.MedialEpicondylitis,
             _ => false
         };

        #endregion
    }
}
