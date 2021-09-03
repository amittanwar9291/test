using RadioReport.AngiographyMRT.Domain.Enums;
using RadioReport.AngiographyMRT.Domain.Enums.Abdomen;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Logic.Interfaces;

namespace RadioReport.AngiographyMRT.Domain.Models
{
    public class AbdomenFinding : FindingBase, IRadioReportIdConditionEvaluator
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("ang_m_070106")]
        public AbdomenFindingType FindingType { get; set; }

        #region Common

        public SideType SideType { get; set; }

        public AnatomicVariantsOrPathologyType AnatomicVariantsOrPathologyType { get; set; }

        public SeverityType SeverityType { get; set; }

        [RadioReportId("ang_m_070406", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        [RadioReportId("ang_m_070406", InstanceName = nameof(AbdomenFindingType.MesentericVessels), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.MesentericArteryStenosis))]
        [RadioReportId("ang_m_0703137", InstanceName = nameof(AbdomenFindingType.MesentericVessels), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.StatusPostLiverTransplantation))]
        public bool IsHemodynamicallyRelevant { get; set; }

        [RadioReportId("ang_m_070408", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        [RadioReportId("ang_m_070408", InstanceName = nameof(AbdomenFindingType.MesentericVessels), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.MesentericArteryStenosis))]
        [RadioReportId("ang_m_0703139", InstanceName = nameof(AbdomenFindingType.MesentericVessels), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.StatusPostLiverTransplantation))]
        public int? DiameterStenosisInMm { get; set; }

        [RadioReportId("ang_m_070411", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        [RadioReportId("ang_m_070411", InstanceName = nameof(AbdomenFindingType.MesentericVessels), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.MesentericArteryStenosis))]
        [RadioReportId("ang_m_0703142", InstanceName = nameof(AbdomenFindingType.MesentericVessels), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.StatusPostLiverTransplantation))]
        public int? DiameterNormalPoststenoticSegmentInMm { get; set; }

        [RadioReportId("ang_m_070461", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        [RadioReportId("ang_m_070461", InstanceName = nameof(AbdomenFindingType.MesentericVessels), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.MesentericArteryStenosis))]
        [RadioReportId("ang_m_0703145", InstanceName = nameof(AbdomenFindingType.MesentericVessels), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.StatusPostLiverTransplantation))]
        public decimal? DegreeOfStenosisAccordingToNASCETInPercentage { get; set; }

        public FormType FormType { get; set; }

        [RadioReportId("ang_m_070520", InstanceName = nameof(AbdomenFindingType.RenalArtery), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.RenalArteryStenosis))]
        [RadioReportId("ang_m_070363", InstanceName = nameof(AbdomenFindingType.RenalArtery), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.Aneurysm))]
        [RadioReportId("ang_m_070510", InstanceName = nameof(AbdomenFindingType.MesentericVessels), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.MesentericArteryStenosis))]
        [RadioReportId("ang_m_0703154", InstanceName = nameof(AbdomenFindingType.MesentericVessels), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.Aneurysm))]
        [RadioReportId("ang_m_070464", InstanceName = nameof(AbdomenFindingType.MesentericVessels), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.StatusPostLiverTransplantation))]
        public int? LengthInMm { get; set; }

        [RadioReportId("ang_m_070522", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        [RadioReportId("ang_m_070512", InstanceName = nameof(AbdomenFindingType.MesentericVessels), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.MesentericArteryStenosis))]
        [RadioReportId("ang_m_070466", InstanceName = nameof(AbdomenFindingType.MesentericVessels), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.StatusPostLiverTransplantation))]
        public bool IsShortLengthStenosis { get; set; }

        [RadioReportId("ang_m_070338", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        [RadioReportId("ang_m_070445", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        public bool IsSuspicionOf { get; set; }

        public ShapeType ShapeType { get; set; }

        [RadioReportId("ang_m_070346", InstanceName = nameof(AbdomenFindingType.RenalArtery), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.FibromuscularDysplasia))]
        [RadioReportId("ang_m_070359", InstanceName = nameof(AbdomenFindingType.RenalArtery), CustomConditionName = nameof(AnatomicVariantsOrPathologyType.Aneurysm))]
        [RadioReportId("ang_m_0703128", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        public int? MaxDiameterInMm { get; set; }

        public CharacterizationType CharacterizationType { get; set; }

        [RadioReportId("ang_m_070374", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        [RadioReportId("ang_m_070382", InstanceName = nameof(AbdomenFindingType.RenalVein))]
        public bool IsRenalVeinThrombosis { get; set; }

        #endregion

        #region RenalArtery

        public DetailsType DetailsType { get; set; }

        [RadioReportId("ang_m_070306", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsCranial { get; set; }

        [RadioReportId("ang_m_070307", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsCaudal { get; set; }

        [RadioReportId("ang_m_070310", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsOrthotopicRenalVascularizarion { get; set; }

        public RenalArteryLocalizationType RenalArteryLocalizationType { get; set; }

        [RadioReportId("ang_m_070524", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsPrestenoticDilatation { get; set; }

        [RadioReportId("ang_m_070525", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsTandemStenosis { get; set; }

        [RadioReportId("ang_m_070526", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsDissection { get; set; }

        [RadioReportId("ang_m_070335", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsStent { get; set; }

        [RadioReportId("ang_m_070333", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public int? StentLengthInMm { get; set; }

        public StatusType StatusType { get; set; }

        [RadioReportId("ang_m_070341", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsSubtleChanges { get; set; }

        [RadioReportId("ang_m_070342", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsPearlLikeChanges { get; set; }

        public PearlLikeChangesType PearlLikeChangesType { get; set; }

        [RadioReportId("ang_m_070345", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsAneurysmaticChanges { get; set; }

        [RadioReportId("ang_m_070348", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsInvolvementOfTheVisceralArteries { get; set; }

        [RadioReportId("ang_m_070349", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsSplenicArtery { get; set; }

        [RadioReportId("ang_m_070350", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsSuperiorMesenteryArtery { get; set; }

        [RadioReportId("ang_m_070351", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsInferiorMesenteryArtery { get; set; }

        [RadioReportId("ang_m_070414", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsThrombolization { get; set; }

        [RadioReportId("ang_m_070450", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsEccentricPartialThrombosis { get; set; }

        [RadioReportId("ang_m_070415", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsMarginalCalcifications { get; set; }

        [RadioReportId("ang_m_070416", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsMoreThanOneLesion { get; set; }

        [RadioReportId("ang_m_070368", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsTransplantRenalArteryStenosis { get; set; }

        [RadioReportId("ang_m_070369", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsTransplantRenalArteryStenosisAanular { get; set; }

        [RadioReportId("ang_m_070371", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsTransplantRenalArteryKinking { get; set; }

        [RadioReportId("ang_m_070372", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsTransplantRenalArteryTorsion { get; set; }

        [RadioReportId("ang_m_070373", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsClampingDamageWithAfferentArteryStenosis { get; set; }

        [RadioReportId("ang_m_070375", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsVenousInfarction { get; set; }

        [RadioReportId("ang_m_070377", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsLimitedContrastOfTheRenalParenchyma { get; set; }

        [RadioReportId("ang_m_070378", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
        public bool IsResidualContrast { get; set; }

        #endregion

        #region RenalVein

        [RadioReportId("ang_m_070380", InstanceName = nameof(AbdomenFindingType.RenalVein))]
        public bool IsAnatomicVariants { get; set; }

        [RadioReportId("ang_m_070381", InstanceName = nameof(AbdomenFindingType.RenalVein), CustomConditionName = nameof(SideType.Right))]
        [RadioReportId("ang_m_070391", InstanceName = nameof(AbdomenFindingType.RenalVein), CustomConditionName = nameof(SideType.Left))]
        public bool IsMultipleRenalVeins { get; set; }

        [RadioReportId("ang_m_070383", InstanceName = nameof(AbdomenFindingType.RenalVein))]
        public bool IsDecreasedPerfusion { get; set; }

        [RadioReportId("ang_m_070384", InstanceName = nameof(AbdomenFindingType.RenalVein))]
        public bool IsT1wHyperintenseCorticalHaemorrhages { get; set; }

        public OrganSizeType OrganSizeType { get; set; }

        [RadioReportId("ang_m_070390", InstanceName = nameof(AbdomenFindingType.RenalVein))]
        public bool IsRetroaortalCourseLeftRenalVein { get; set; }

        [RadioReportId("ang_m_070392", InstanceName = nameof(AbdomenFindingType.RenalVein))]
        public bool IsBifurcatedPreAndRetroarticLeftRenalVein { get; set; }

        #endregion

        #region MesentericVessels

        public DirectOriginFromTheAbdominalAortaType DirectOriginFromTheAbdominalAortaType { get; set; }

        [RadioReportId("ang_m_070399", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        public bool IsHepatomesentericTrunk { get; set; }

        public HepatomesentericTrunkType HepatomesentericTrunkType { get; set; }

        public IncompleteHepatomesentericTrunkType IncompleteHepatomesentericTrunkType { get; set; }

        public ArisesFromCeliacTrunkType ArisesFromCeliacTrunkType { get; set; }

        [RadioReportId("ang_m_070463", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        public bool IsLeftHepaticArteryArisesFromLeftGastricArtery { get; set; }

        public FurtherVariantsType FurtherVariantsType { get; set; }

        public MesentericVesselsLocalizationType MesentericVesselsLocalizationType { get; set; }

        [RadioReportId("ang_m_070425", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        public bool IsStenosisOrOcclusion { get; set; }

        [RadioReportId("ang_m_070514", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        public bool IsRiolanAnastomosis { get; set; }

        [RadioReportId("ang_m_070515", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        public bool IsCollateralFlowViaPancreaticoduodenalArcades { get; set; }

        [RadioReportId("ang_m_070455", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        public bool IsMultifocalChanges { get; set; }

        [RadioReportId("ang_m_070444", InstanceName = nameof(AbdomenFindingType.MesentericVessels))]
        public bool IsFibromuscularDysplasia { get; set; }

        #endregion

        #region LiverVeins

        [RadioReportId("ang_m_070217", InstanceName = nameof(AbdomenFindingType.LiverVeins))]
        public bool IsSignsOfPortalHypertension { get; set; }

        [RadioReportId("ang_m_070218", InstanceName = nameof(AbdomenFindingType.LiverVeins))]
        public int? MaxPortalVeinDiameterInMm { get; set; }

        [RadioReportId("ang_m_070220", InstanceName = nameof(AbdomenFindingType.LiverVeins))]
        public bool IsPortalVeinThrombosis { get; set; }

        public PortalVeinThrombosisType PortalVeinThrombosisType { get; set; }

        [RadioReportId("ang_m_070223", InstanceName = nameof(AbdomenFindingType.LiverVeins))]
        public int? MinVesselDiameterInMm { get; set; }

        [RadioReportId("ang_m_0703147", InstanceName = nameof(AbdomenFindingType.LiverVeins))]
        public bool IsObstructionHepatovenousOutflow { get; set; }

        public LevelOfTheObstructionType LevelOfTheObstructionType { get; set; }

        [RadioReportId("ang_m_0703164", InstanceName = nameof(AbdomenFindingType.LiverVeins))]
        public bool IsPersistentDottedHyperContrastEnhancement { get; set; }

        [RadioReportId("ang_m_0703165", InstanceName = nameof(AbdomenFindingType.LiverVeins))]
        public bool IsDecreasedPerfusionOfTheLiverPeriphery { get; set; }

        [RadioReportId("ang_m_070456", InstanceName = nameof(AbdomenFindingType.LiverVeins))]
        public bool IsCollaterals { get; set; }

        [RadioReportId("ang_m_070457", InstanceName = nameof(AbdomenFindingType.LiverVeins))]
        public bool IsPortoportalCollaterals { get; set; }

        [RadioReportId("ang_m_070458", InstanceName = nameof(AbdomenFindingType.LiverVeins))]
        public bool IsPortosystemicCollateralPathways { get; set; }

        [RadioReportId("ang_m_070459", InstanceName = nameof(AbdomenFindingType.LiverVeins))]
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
