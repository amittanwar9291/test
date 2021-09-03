using RadioReport.AngiographyMRT.Domain.Enums;
using RadioReport.AngiographyMRT.Domain.Enums.Aorta;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;

namespace RadioReport.AngiographyMRT.Domain.Models
{
    public class AortaFinding : FindingBase, IRadioReportIdConditionEvaluator
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("ang_m_060106")]
        public AortaFindingType FindingType { get; set; }

        #region Common

        [RadioReportId("ang_m_060207", InstanceName = nameof(AortaFindingType.ArterioscleroticChanges))]
        [RadioReportId("ang_m_060207", InstanceName = nameof(AortaFindingType.AcuteAortalSyndrome))]
        [RadioReportId("ang_m_060228", InstanceName = nameof(AortaFindingType.AorticAneurysm))]
        [RadioReportId("ang_m_060228", InstanceName = nameof(AortaFindingType.Aortitis))]
        public AortaLocations AortaLocation { get; set; }

        [RadioReportId("ang_m_060323", InstanceName = nameof(AortaFindingType.AorticAneurysm))]
        [RadioReportId("ang_m_060414", InstanceName = nameof(AortaFindingType.ArterioscleroticChanges))]
        [RadioReportId("ang_m_060423", InstanceName = nameof(AortaFindingType.AcuteAortalSyndrome), CustomConditionName = nameof(PathologyType.AorticDissection))]
        [RadioReportId("ang_m_060429", InstanceName = nameof(AortaFindingType.AcuteAortalSyndrome), CustomConditionName = nameof(PathologyType.IntramuralAorticHematomaIMH))]
        [RadioReportId("ang_m_060444", InstanceName = nameof(AortaFindingType.Aortitis))]
        public int? LengthInMm { get; set; }

        [RadioReportId("ang_m_060503", InstanceName = nameof(AortaFindingType.AorticAneurysm))]
        [RadioReportId("ang_m_060546", InstanceName = nameof(AortaFindingType.Aortitis))]
        public bool IsSuspiciousOf { get; set; }

        [RadioReportId("ang_m_060330", InstanceName = nameof(AortaFindingType.ArterioscleroticChanges))]
        [RadioReportId("ang_m_060364", InstanceName = nameof(AortaFindingType.Aortitis))]
        public bool IsStenosis { get; set; }

        public SeverityType SeverityType { get; set; }

        [RadioReportId("ang_m_060336", InstanceName = nameof(AortaFindingType.ArterioscleroticChanges))]
        [RadioReportId("ang_m_060370", InstanceName = nameof(AortaFindingType.Aortitis))]
        public bool IsHemodynamicallyRelevant { get; set; }

        [RadioReportId("ang_m_060339", InstanceName = nameof(AortaFindingType.ArterioscleroticChanges))]
        [RadioReportId("ang_m_060373", InstanceName = nameof(AortaFindingType.Aortitis))]
        public int? DiameterStenosisInMm { get; set; }

        [RadioReportId("ang_m_060342", InstanceName = nameof(AortaFindingType.ArterioscleroticChanges))]
        [RadioReportId("ang_m_060376", InstanceName = nameof(AortaFindingType.Aortitis))]
        public int? DiameterNormalPoststenoticSegmentInMm { get; set; }

        [RadioReportId("ang_m_060345", InstanceName = nameof(AortaFindingType.ArterioscleroticChanges))]
        [RadioReportId("ang_m_060379", InstanceName = nameof(AortaFindingType.Aortitis))]
        public decimal? DegreeOfStenosisAccordingToNASCETInPercentage { get; set; }

        public FormType FormType { get; set; }

        [RadioReportId("ang_m_060415", InstanceName = nameof(AortaFindingType.ArterioscleroticChanges))]
        [RadioReportId("ang_m_060445", InstanceName = nameof(AortaFindingType.Aortitis))]
        public bool IsShortLengthStenosis { get; set; }

        [RadioReportId("ang_m_060505", InstanceName = nameof(AortaFindingType.ArterioscleroticChanges))]
        [RadioReportId("ang_m_060221", InstanceName = nameof(AortaFindingType.Aortitis))]
        public bool IsThrombus { get; set; }

        [RadioReportId("ang_m_060506", InstanceName = nameof(AortaFindingType.ArterioscleroticChanges))]
        [RadioReportId("ang_m_060222", InstanceName = nameof(AortaFindingType.Aortitis))]
        public bool IsFreeFloating { get; set; }

        [RadioReportId("ang_m_060507", InstanceName = nameof(AortaFindingType.ArterioscleroticChanges))]
        [RadioReportId("ang_m_060223", InstanceName = nameof(AortaFindingType.Aortitis))]
        public bool IsWallAdherent { get; set; }

        [RadioReportId("ang_m_060508", InstanceName = nameof(AortaFindingType.ArterioscleroticChanges))]
        [RadioReportId("ang_m_060224", InstanceName = nameof(AortaFindingType.Aortitis))]
        public bool IsIrregularContour { get; set; }

        [RadioReportId("ang_m_060511", InstanceName = nameof(AortaFindingType.ArterioscleroticChanges))]
        [RadioReportId("ang_m_060227", InstanceName = nameof(AortaFindingType.Aortitis))]
        public int? MaxWidthInMm { get; set; }

        [RadioReportId("ang_m_060526", InstanceName = nameof(AortaFindingType.AcuteAortalSyndrome))]
        [RadioReportId("ang_m_060356", InstanceName = nameof(AortaFindingType.Aortitis))]
        public bool IsWallThickening { get; set; }

        [RadioReportId("ang_m_060530", InstanceName = nameof(AortaFindingType.AcuteAortalSyndrome))]
        [RadioReportId("ang_m_060360", InstanceName = nameof(AortaFindingType.Aortitis))]
        public int? WallThicknessInMm { get; set; }

        #endregion

        #region AorticAbnormalities

        public AnomaliesType AnomaliesType { get; set; }

        [RadioReportId("ang_m_060302", InstanceName = nameof(AortaFindingType.AorticAbnormalities))]
        public bool IsHypoplasticAorticArch { get; set; }

        [RadioReportId("ang_m_060303", InstanceName = nameof(AortaFindingType.AorticAbnormalities))]
        public bool IsPoststenoticDilatation { get; set; }

        [RadioReportId("ang_m_060304", InstanceName = nameof(AortaFindingType.AorticAbnormalities))]
        public bool IsPostoperativeResidualStenosis { get; set; }

        public DetailsAorticArchKinkingType DetailsAorticArchKinkingType { get; set; }

        public DetailsCongenitalVascularRingsType DetailsCongenitalVascularRingsType { get; set; }

        [RadioReportId("ang_m_060313", InstanceName = nameof(AortaFindingType.AorticAbnormalities))]
        public bool IsAberrantArteriaWithKommerellDiverticulum { get; set; }

        [RadioReportId("ang_m_060315", InstanceName = nameof(AortaFindingType.AorticAbnormalities))]
        public bool IsRightAorticWithKommerellDiverticulum { get; set; }

        #endregion

        #region AorticAneurysm

        [RadioReportId("ang_m_060208", InstanceName = nameof(AortaFindingType.AorticAneurysm))]
        public bool IsAorticEctasia { get; set; }

        public ShapeType ShapeType { get; set; }

        [RadioReportId("ang_m_060320", InstanceName = nameof(AortaFindingType.AorticAneurysm))]
        public int? MaxAxialDiameterInMm { get; set; }

        [RadioReportId("ang_m_060326", InstanceName = nameof(AortaFindingType.AorticAneurysm))]
        public int? ProximalAneuysmaticNeckDiameterInMm { get; set; }

        [RadioReportId("ang_m_060329", InstanceName = nameof(AortaFindingType.AorticAneurysm))]
        public int? ProximalNeckLengthInMm { get; set; }

        [RadioReportId("ang_m_060401", InstanceName = nameof(AortaFindingType.AorticAneurysm))]
        public bool IsEccentricPartialThrombus { get; set; }

        public FollowUpType FollowUpType { get; set; }

        [RadioReportId("ang_m_060408", InstanceName = nameof(AortaFindingType.AorticAneurysm))]
        public int? MaxAxialDiameterPreviousExaminationInMm { get; set; }

        public AorticAneurysmDifferentialDiagnosisType AorticAneurysmDifferentialDiagnosisType { get; set; }

        #endregion

        #region AcuteAortalSyndrome

        [RadioReportId("ang_m_060215", InstanceName = nameof(AortaFindingType.AcuteAortalSyndrome))]
        public bool IsAcuteExtravasalHematoma { get; set; }

        [RadioReportId("ang_m_060218", InstanceName = nameof(AortaFindingType.AcuteAortalSyndrome))]
        public int? MaxAorticDiameterInMm { get; set; }

        public PathologyType PathologyType { get; set; }

        [RadioReportId("ang_m_060350", InstanceName = nameof(AortaFindingType.AcuteAortalSyndrome))]
        public bool IsSvenssonClassificationOfAorticDissection { get; set; }

        [RadioReportId("ang_m_060351", InstanceName = nameof(AortaFindingType.AcuteAortalSyndrome))]
        public SvenssonClassificationType SvenssonClassificationType { get; set; }

        [RadioReportId("ang_m_060353", InstanceName = nameof(AortaFindingType.AcuteAortalSyndrome))]
        public bool IsThrombosisFalseLumen { get; set; }

        public StanfordClassificationType StanfordClassificationType { get; set; }

        [RadioReportId("ang_m_060420", InstanceName = nameof(AortaFindingType.AcuteAortalSyndrome))]
        public AortaLocations AortaLocationReentry { get; set; }

        [RadioReportId("ang_m_060513", InstanceName = nameof(AortaFindingType.AcuteAortalSyndrome))]
        public bool IsRightCoronaryArtery { get; set; }

        [RadioReportId("ang_m_060514", InstanceName = nameof(AortaFindingType.AcuteAortalSyndrome))]
        public bool IsLeftCoronaryArtery { get; set; }

        [RadioReportId("ang_m_060515", InstanceName = nameof(AortaFindingType.AcuteAortalSyndrome))]
        public bool IsBrachiocephalicTrunk { get; set; }

        [RadioReportId("ang_m_060516", InstanceName = nameof(AortaFindingType.AcuteAortalSyndrome))]
        public bool IsLeftCarotidArtery { get; set; }

        [RadioReportId("ang_m_060517", InstanceName = nameof(AortaFindingType.AcuteAortalSyndrome))]
        public bool IsLeftSubclavianArtery { get; set; }

        [RadioReportId("ang_m_060518", InstanceName = nameof(AortaFindingType.AcuteAortalSyndrome))]
        public bool IsCoeliacTrunk { get; set; }

        [RadioReportId("ang_m_060519", InstanceName = nameof(AortaFindingType.AcuteAortalSyndrome))]
        public bool IsSuperiorMesentericArterySMA { get; set; }

        [RadioReportId("ang_m_060520", InstanceName = nameof(AortaFindingType.AcuteAortalSyndrome))]
        public bool IsInferiorMesentericArteryIMA { get; set; }

        [RadioReportId("ang_m_060521", InstanceName = nameof(AortaFindingType.AcuteAortalSyndrome))]
        public bool IsRightRenalArtery { get; set; }

        [RadioReportId("ang_m_060522", InstanceName = nameof(AortaFindingType.AcuteAortalSyndrome))]
        public bool IsLeftRenalArtery { get; set; }

        [RadioReportId("ang_m_060523", InstanceName = nameof(AortaFindingType.AcuteAortalSyndrome))]
        public bool IsRightCommonIliacArtery { get; set; }

        [RadioReportId("ang_m_060524", InstanceName = nameof(AortaFindingType.AcuteAortalSyndrome))]
        public bool IsLeftCommonIliacArtery { get; set; }

        public BeginningType BeginningType { get; set; }

        [RadioReportId("ang_m_060527", InstanceName = nameof(AortaFindingType.AcuteAortalSyndrome))]
        public bool IsEccentric { get; set; }

        [RadioReportId("ang_m_060531", InstanceName = nameof(AortaFindingType.AcuteAortalSyndrome))]
        public bool IsWallHematomaHyperintenseInUnenhancedT1w { get; set; }

        [RadioReportId("ang_m_060533", InstanceName = nameof(AortaFindingType.AcuteAortalSyndrome), CustomConditionName = nameof(PathologyType.IntramuralAorticHematomaIMH))]
        [RadioReportId("ang_m_060538", InstanceName = nameof(AortaFindingType.AcuteAortalSyndrome), CustomConditionName = nameof(PathologyType.PenetratingArterioscleroticAorticUlcerPAU))]
        public bool IsAortitis { get; set; }

        [RadioReportId("ang_m_060432", InstanceName = nameof(AortaFindingType.AcuteAortalSyndrome))]
        public int? CraniocaudalLengthInMm { get; set; }

        [RadioReportId("ang_m_060435", InstanceName = nameof(AortaFindingType.AcuteAortalSyndrome))]
        public int? DeepInMm { get; set; }

        [RadioReportId("ang_m_060535", InstanceName = nameof(AortaFindingType.AcuteAortalSyndrome))]
        public bool IsMushroomShaped { get; set; }

        [RadioReportId("ang_m_060536", InstanceName = nameof(AortaFindingType.AcuteAortalSyndrome))]
        public bool IsPseudoaneurysm { get; set; }

        #endregion

        #region Aortitis

        [RadioReportId("ang_m_060357", InstanceName = nameof(AortaFindingType.Aortitis))]
        public bool IsConcentric { get; set; }

        [RadioReportId("ang_m_060361", InstanceName = nameof(AortaFindingType.Aortitis))]
        public bool IsContrastEnhancementOfTheArterialWall { get; set; }

        [RadioReportId("ang_m_060362", InstanceName = nameof(AortaFindingType.Aortitis))]
        public bool IsT2wHyperintensityOfArterialWallEdema { get; set; }

        [RadioReportId("ang_m_060363", InstanceName = nameof(AortaFindingType.Aortitis))]
        public bool IsPeriaortitis { get; set; }

        public QuantificationAortitisType QuantificationAortitisType { get; set; }

        [RadioReportId("ang_m_060539", InstanceName = nameof(AortaFindingType.Aortitis))]
        public bool IsVascularDilatation { get; set; }

        public VascularDilatationType VascularDilatationType { get; set; }

        [RadioReportId("ang_m_060543", InstanceName = nameof(AortaFindingType.Aortitis))]
        public bool IsAnnuloaorticEctasia { get; set; }

        [RadioReportId("ang_m_060545", InstanceName = nameof(AortaFindingType.Aortitis))]
        public AortitisDifferentialDiagnosisType AortitisDifferentialDiagnosisType { get; set; }

        #endregion

        public bool CheckCondition(string customConditionId) =>
            customConditionId switch
            {
                nameof(PathologyType.AorticDissection) => PathologyType.ToString() == customConditionId,
                nameof(PathologyType.IntramuralAorticHematomaIMH) => PathologyType.ToString() == customConditionId,
                nameof(PathologyType.PenetratingArterioscleroticAorticUlcerPAU) => PathologyType.ToString() == customConditionId,
                _ => false
            };

    }
}
