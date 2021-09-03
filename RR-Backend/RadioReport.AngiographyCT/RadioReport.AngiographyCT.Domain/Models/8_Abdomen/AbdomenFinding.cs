using RadioReport.AngiographyCT.Domain.Enums;
using RadioReport.AngiographyCT.Domain.Enums.Abdomen;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Interfaces;

namespace RadioReport.AngiographyCT.Domain.Models
{
    public class AbdomenFinding : FindingBase, IRadioReportIdConditionEvaluator
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("ang_c_080106")]
        public AbdomenFindingType FindingType { get; set; }

        #region Common

        public SideType SideType { get; set; }

        public AnatomicVariantsOrPathologyType AnatomicVariantsOrPathologyType { get; set; }

        public SeverityType SeverityType { get; set; }

        [RadioReportId("ang_c_080406", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        [RadioReportId("ang_c_080406", InstanceName = nameof(AbdomenFindingType.MesentericVessels), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.MesentericArteryStenosis))]
        [RadioReportId("ang_c_0803137", InstanceName = nameof(AbdomenFindingType.MesentericVessels), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.StatusPostLiverTransplantation))]
        public bool IsHemodynamicallyRelevant { get; set; }

        [RadioReportId("ang_c_080408", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        [RadioReportId("ang_c_080408", InstanceName = nameof(AbdomenFindingType.MesentericVessels), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.MesentericArteryStenosis))]
        [RadioReportId("ang_c_0803139", InstanceName = nameof(AbdomenFindingType.MesentericVessels), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.StatusPostLiverTransplantation))]
        public int? DiameterStenosisInMm { get; set; }

        [RadioReportId("ang_c_080411", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        [RadioReportId("ang_c_080411", InstanceName = nameof(AbdomenFindingType.MesentericVessels), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.MesentericArteryStenosis))]
        [RadioReportId("ang_c_0803142", InstanceName = nameof(AbdomenFindingType.MesentericVessels), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.StatusPostLiverTransplantation))]
        public int? DiameterNormalPoststenoticSegmentInMm { get; set; }

        [RadioReportId("ang_c_080461", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        [RadioReportId("ang_c_080461", InstanceName = nameof(AbdomenFindingType.MesentericVessels), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.MesentericArteryStenosis))]
        [RadioReportId("ang_c_0803145", InstanceName = nameof(AbdomenFindingType.MesentericVessels), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.StatusPostLiverTransplantation))]
        public decimal? DegreeOfStenosisAccordingToNASCETInPercentage { get; set; }

        public FormType FormType { get; set; }

        [RadioReportId("ang_c_080520", InstanceName = nameof(AbdomenFindingType.RenalArtery), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.RenalArteryStenosis))]
        [RadioReportId("ang_c_080363", InstanceName = nameof(AbdomenFindingType.RenalArtery), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.Aneurysm))]
        [RadioReportId("ang_c_080510", InstanceName = nameof(AbdomenFindingType.MesentericVessels), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.MesentericArteryStenosis))]
        [RadioReportId("ang_c_0803154", InstanceName = nameof(AbdomenFindingType.MesentericVessels), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.Aneurysm))]
        [RadioReportId("ang_c_080464", InstanceName = nameof(AbdomenFindingType.MesentericVessels), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.StatusPostLiverTransplantation))]
        public int? LengthInMm { get; set; }

        [RadioReportId("ang_c_080522", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        [RadioReportId("ang_c_080512", InstanceName = nameof(AbdomenFindingType.MesentericVessels), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.MesentericArteryStenosis))]
        [RadioReportId("ang_c_080466", InstanceName = nameof(AbdomenFindingType.MesentericVessels), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.StatusPostLiverTransplantation))]
        public bool IsShortLengthStenosis { get; set; }

        [RadioReportId("ang_c_080338", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        [RadioReportId("ang_c_080445", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        public bool IsSuspicionOf { get; set; }

        public ShapeType ShapeType { get; set; }

        [RadioReportId("ang_c_080346", InstanceName = nameof(AbdomenFindingType.RenalArtery), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.FibromuscularDysplasia))]
        [RadioReportId("ang_c_080359", InstanceName = nameof(AbdomenFindingType.RenalArtery), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.Aneurysm))]
        [RadioReportId("ang_c_0803128", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        public int? MaxDiameterInMm { get; set; }

        public CharacterizationType CharacterizationType { get; set; }

        [RadioReportId("ang_c_080374", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        [RadioReportId("ang_c_080382", InstanceName = nameof(AbdomenFindingType.RenalVein))]
        public bool IsRenalVeinThrombosis { get; set; }

        #endregion

        #region RenalArtery

        public DetailsType DetailsType { get; set; }

        [RadioReportId("ang_c_080306", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsCranial { get; set; }

        [RadioReportId("ang_c_080307", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsCaudal { get; set; }

        [RadioReportId("ang_c_080310", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsOrthotopicRenalVascularizarion { get; set; }

        public RenalArteryLocalizationType RenalArteryLocalizationType { get; set; }

        [RadioReportId("ang_c_080524", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsPrestenoticDilatation { get; set; }

        [RadioReportId("ang_c_080525", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsTandemStenosis { get; set; }

        [RadioReportId("ang_c_080526", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsDissection { get; set; }

        [RadioReportId("ang_c_080333", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public int? StentLengthInMm { get; set; }

        public StatusType StatusType { get; set; }

        [RadioReportId("ang_c_080341", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsSubtleChanges { get; set; }

        [RadioReportId("ang_c_080342", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsPearlLikeChanges { get; set; }

        public PearlLikeChangesType PearlLikeChangesType { get; set; }

        [RadioReportId("ang_c_080345", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsAneurysmaticChanges { get; set; }

        [RadioReportId("ang_c_080348", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsInvolvementOfTheVisceralArteries { get; set; }

        [RadioReportId("ang_c_080349", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsSplenicArtery { get; set; }

        [RadioReportId("ang_c_080350", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsSuperiorMesenteryArtery { get; set; }

        [RadioReportId("ang_c_080351", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsInferiorMesenteryArtery { get; set; }

        [RadioReportId("ang_c_080414", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsThrombolization { get; set; }

        [RadioReportId("ang_c_080450", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsEccentricPartialThrombosis { get; set; }

        [RadioReportId("ang_c_080415", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsMarginalCalcifications { get; set; }

        [RadioReportId("ang_c_080416", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsMoreThanOneLesion { get; set; }

        [RadioReportId("ang_c_080368", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsTransplantRenalArteryStenosis { get; set; }

        [RadioReportId("ang_c_080369", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsTransplantRenalArteryStenosisAanular { get; set; }

        [RadioReportId("ang_c_0803166", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsClipArtifacts { get; set; }

        [RadioReportId("ang_c_080371", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsTransplantRenalArteryKinking { get; set; }

        [RadioReportId("ang_c_080372", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsTransplantRenalArteryTorsion { get; set; }

        [RadioReportId("ang_c_080373", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsClampingDamageWithAfferentArteryStenosis { get; set; }

        [RadioReportId("ang_c_080375", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsVenousInfarction { get; set; }

        [RadioReportId("ang_c_080377", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsLimitedContrastOfTheRenalParenchyma { get; set; }

        [RadioReportId("ang_c_080378", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsResidualContrast { get; set; }

        [RadioReportId("ang_c_080528", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsQualityCalcification { get; set; }

        [RadioReportId("ang_c_080529", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsQualitySoftPlaque { get; set; }

        #endregion

        #region RenalVein

        [RadioReportId("ang_c_080380", InstanceName = nameof(AbdomenFindingType.RenalVein), CustomConditionName = nameof(SideType.Right))]
        [RadioReportId("ang_c_080388", InstanceName = nameof(AbdomenFindingType.RenalVein), CustomConditionName = nameof(SideType.Left))]
        public bool IsAnatomicVariants { get; set; }

        [RadioReportId("ang_c_080381", InstanceName = nameof(AbdomenFindingType.RenalVein), CustomConditionName = nameof(SideType.Right))]
        [RadioReportId("ang_c_080391", InstanceName = nameof(AbdomenFindingType.RenalVein), CustomConditionName = nameof(SideType.Left))]
        public bool IsMultipleRenalVeins { get; set; }

        [RadioReportId("ang_c_080383", InstanceName = nameof(AbdomenFindingType.RenalVein))]
        public bool IsDecreasedPerfusion { get; set; }

        [RadioReportId("ang_c_080384", InstanceName = nameof(AbdomenFindingType.RenalVein))]
        public bool IsCorticalHemorrhages { get; set; }

        public OrganSizeType OrganSizeType { get; set; }

        [RadioReportId("ang_c_080390", InstanceName = nameof(AbdomenFindingType.RenalVein))]
        public bool IsRetroaortalCourseLeftRenalVein { get; set; }

        [RadioReportId("ang_c_080392", InstanceName = nameof(AbdomenFindingType.RenalVein))]
        public bool IsBifurcatedPreAndRetroarticLeftRenalVein { get; set; }

        #endregion

        #region MesentericVessels

        public DirectOriginFromTheAbdominalAortaType DirectOriginFromTheAbdominalAortaType { get; set; }

        [RadioReportId("ang_c_080399", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        public bool IsHepatomesentericTrunk { get; set; }

        public HepatomesentericTrunkType HepatomesentericTrunkType { get; set; }

        public IncompleteHepatomesentericTrunkType IncompleteHepatomesentericTrunkType { get; set; }

        public ArisesFromCeliacTrunkType ArisesFromCeliacTrunkType { get; set; }

        [RadioReportId("ang_c_080463", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        public bool IsLeftHepaticArteryArisesFromLeftGastricArtery { get; set; }

        public FurtherVariantsType FurtherVariantsType { get; set; }

        public MesentericVesselsLocalizationType MesentericVesselsLocalizationType { get; set; }

        [RadioReportId("ang_c_080425", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        public bool IsStenosisOrOcclusion { get; set; }

        [RadioReportId("ang_c_080514", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        public bool IsRiolanAnastomosis { get; set; }

        [RadioReportId("ang_c_080515", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        public bool IsCollateralFlowViaPancreaticoduodenalArcades { get; set; }

        [RadioReportId("ang_c_080455", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        public bool IsMultifocalChanges { get; set; }

        public MesentericVesselsDifferentialDiagnosisType MesentericVesselsDifferentialDiagnosisType { get;set; }

        [RadioReportId("ang_c_080427", InstanceName = nameof(AbdomenFindingType.MesentericVessels), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.MesentericArteryStenosis))]
        public SeverityType StenosisSeverityType { get; set; }

        [RadioReportId("ang_c_0803170", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        public bool IsIschemicBowelWall { get; set; }

        [RadioReportId("ang_c_0803171", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        public bool IsFreeGas { get; set; }

        [RadioReportId("ang_c_0803172", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        public bool IsAscites { get; set; }

        [RadioReportId("ang_c_0803173", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        public bool IsHemorrhagic { get; set; }

        [RadioReportId("ang_c_0803174", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        public bool IsActiveBleeding { get; set; }

        [RadioReportId("ang_c_080469", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        public bool IsDuodenum { get; set; }

        [RadioReportId("ang_c_080470", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        public bool IsJejunum { get; set; }

        [RadioReportId("ang_c_080471", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        public bool IsIleum { get; set; }

        [RadioReportId("ang_c_080472", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        public bool IsCecum { get; set; }

        [RadioReportId("ang_c_080473", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        public bool IsAscendingColon { get; set; }

        [RadioReportId("ang_c_080474", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        public bool IsRightColonicFlexure { get; set; }

        [RadioReportId("ang_c_080475", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        public bool IsTransverseColon { get; set; }

        [RadioReportId("ang_c_080476", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        public bool IsLeftColonicFlexure { get; set; }

        [RadioReportId("ang_c_080477", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        public bool IsDescendingColon { get; set; }

        [RadioReportId("ang_c_080478", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        public bool IsSigmoidColon { get; set; }

        #endregion

        #region LiverVeins

        [RadioReportId("ang_c_080217", InstanceName = nameof(AbdomenFindingType.LiverVeins))]
        public bool IsSignsOfPortalHypertension { get; set; }

        [RadioReportId("ang_c_080218", InstanceName = nameof(AbdomenFindingType.LiverVeins))]
        public int? MaxPortalVeinDiameterInMm { get; set; }

        [RadioReportId("ang_c_080220", InstanceName = nameof(AbdomenFindingType.LiverVeins))]
        public bool IsPortalVeinThrombosis { get; set; }

        public PortalVeinThrombosisType PortalVeinThrombosisType { get; set; }

        [RadioReportId("ang_c_080223", InstanceName = nameof(AbdomenFindingType.LiverVeins))]
        public int? MinVesselDiameterInMm { get; set; }

        [RadioReportId("ang_c_0803147", InstanceName = nameof(AbdomenFindingType.LiverVeins))]
        public bool IsObstructionHepatovenousOutflow { get; set; }

        public LevelOfTheObstructionType LevelOfTheObstructionType { get; set; }

        [RadioReportId("ang_c_0803164", InstanceName = nameof(AbdomenFindingType.LiverVeins))]
        public bool IsPersistentDottedHyperContrastEnhancement { get; set; }

        [RadioReportId("ang_c_0803165", InstanceName = nameof(AbdomenFindingType.LiverVeins))]
        public bool IsDecreasedPerfusionOfTheLiverPeriphery { get; set; }

        [RadioReportId("ang_c_080456", InstanceName = nameof(AbdomenFindingType.LiverVeins))]
        public bool IsCollaterals { get; set; }

        [RadioReportId("ang_c_080457", InstanceName = nameof(AbdomenFindingType.LiverVeins))]
        public bool IsPortoportalCollaterals { get; set; }

        [RadioReportId("ang_c_080458", InstanceName = nameof(AbdomenFindingType.LiverVeins))]
        public bool IsPortosystemicCollateralPathways { get; set; }

        [RadioReportId("ang_c_080459", InstanceName = nameof(AbdomenFindingType.LiverVeins))]
        public bool IsProminentPeriportalCollaterals { get; set; }

        #endregion

        public bool CheckCondition(string customConditionId) =>
            customConditionId switch
            {
                nameof(AnatomicVariantsOrPathologyType.RenalArteryStenosis) => AnatomicVariantsOrPathologyType.ToString() == customConditionId,
                nameof(AnatomicVariantsOrPathologyType.FibromuscularDysplasia) => AnatomicVariantsOrPathologyType.ToString() == customConditionId,
                nameof(AnatomicVariantsOrPathologyType.Aneurysm) => AnatomicVariantsOrPathologyType.ToString() == customConditionId,
                nameof(AnatomicVariantsOrPathologyType.MesentericArteryStenosis) => AnatomicVariantsOrPathologyType.ToString() == customConditionId,
                nameof(AnatomicVariantsOrPathologyType.StatusPostLiverTransplantation) => AnatomicVariantsOrPathologyType.ToString() == customConditionId,
                nameof(SideType.Right) => SideType.ToString() == customConditionId,
                nameof(SideType.Left) => SideType.ToString() == customConditionId,
                _ => false
            };
    }
}
