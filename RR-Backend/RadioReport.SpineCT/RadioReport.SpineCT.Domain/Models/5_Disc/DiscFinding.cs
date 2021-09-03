using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.SpineCT.Domain.Constants;
using RadioReport.SpineCT.Domain.Enums;
using RadioReport.SpineCT.Domain.Enums.Disc;

namespace RadioReport.SpineCT.Domain.Models
{
    public class DiscFinding : FindingBase, IRadioReportIdConditionEvaluator
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("spi_c_050106")]
        public DiscFindingType FindingType { get; set; }

        #region Common

        [RadioReportId("spi_c_050203", InstanceName = nameof(DiscFindingType.BulgingDegeneration))]
        [RadioReportId("spi_c_050203", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_c_050203", InstanceName = nameof(DiscFindingType.Extrusion))]
        [RadioReportId("spi_c_050203", InstanceName = nameof(DiscFindingType.Migration))]
        [RadioReportId("spi_c_050205", InstanceName = nameof(DiscFindingType.FacetJoints))]
        [RadioReportId("spi_c_050205", InstanceName = nameof(DiscFindingType.Spondylodiscitis))]
        [RadioReportId("spi_c_050205", InstanceName = nameof(DiscFindingType.Trauma))]
        [RadioReportId("spi_c_050205", InstanceName = nameof(DiscFindingType.RheumatoidDiseases))]
        public SpineLocations SpineLocation { get; set; }

        [RadioReportId("spi_c_0503200", InstanceName = nameof(DiscFindingType.BulgingDegeneration))]
        [RadioReportId("spi_c_0503202", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_c_0503202", InstanceName = nameof(DiscFindingType.Extrusion))]
        public bool IsDiscCalcification { get; set; }

        [RadioReportId("spi_c_0503201", InstanceName = nameof(DiscFindingType.BulgingDegeneration))]
        [RadioReportId("spi_c_0503203", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_c_0503203", InstanceName = nameof(DiscFindingType.Extrusion))]
        public bool IsVacuumPhenomenon { get; set; }

        public NerveRootAffectionType NerveRootAffectionType { get; set; }

        [RadioReportId("spi_c_0504212", InstanceName = nameof(DiscFindingType.BulgingDegeneration))]
        [RadioReportId("spi_c_050514", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_c_050514", InstanceName = nameof(DiscFindingType.Extrusion))]
        public bool IsNerveRootAffectionRight { get; set; }

        [RadioReportId("spi_c_0504213", InstanceName = nameof(DiscFindingType.BulgingDegeneration))]
        [RadioReportId("spi_c_050515", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_c_050515", InstanceName = nameof(DiscFindingType.Extrusion))]
        public bool IsNerveRootAffectionLeft { get; set; }

        public StenosisType StenosisType { get; set; }

        [RadioReportId("spi_c_0505205", InstanceName = nameof(DiscFindingType.BulgingDegeneration))]
        [RadioReportId("spi_c_050517", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_c_050517", InstanceName = nameof(DiscFindingType.Extrusion))]
        public bool IsStenosisRight { get; set; }

        [RadioReportId("spi_c_0505206", InstanceName = nameof(DiscFindingType.BulgingDegeneration))]
        [RadioReportId("spi_c_050518", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_c_050518", InstanceName = nameof(DiscFindingType.Extrusion))]
        public bool IsStenosisLeft { get; set; }

        public ProtrusionExtrusionDetailsType ProtrusionExtrusionDetailsType { get; set; }

        [RadioReportId("spi_c_050311", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_c_050311", InstanceName = nameof(DiscFindingType.Extrusion))]
        [RadioReportId("spi_c_050311", InstanceName = nameof(DiscFindingType.Migration))]
        public DiscLocations DiscLocation { get; set; }

        public ExpansionIntoSpinalCanalType ExpansionIntoSpinalCanalType { get; set; }

        [RadioReportId("spi_c_050505", InstanceName = nameof(DiscFindingType.Protrusion), CustomConditionName = nameof(ProtrusionExtrusionDetailsType.LocalizationAxial))]
        [RadioReportId("spi_c_050407", InstanceName = nameof(DiscFindingType.Protrusion), CustomConditionName = nameof(ProtrusionExtrusionDetailsType.BroadBased))]
        [RadioReportId("spi_c_050505", InstanceName = nameof(DiscFindingType.Extrusion), CustomConditionName = nameof(ProtrusionExtrusionDetailsType.LocalizationAxial))]
        [RadioReportId("spi_c_050407", InstanceName = nameof(DiscFindingType.Extrusion), CustomConditionName = nameof(ProtrusionExtrusionDetailsType.BroadBased))]
        [RadioReportId("spi_c_050505", InstanceName = nameof(DiscFindingType.Migration))]
        [RadioReportId("spi_c_0504228", InstanceName = nameof(DiscFindingType.FacetJoints))]
        public bool IsSpinalCanalStenosis { get; set; }

        [RadioReportId("spi_c_0505208", InstanceName = nameof(DiscFindingType.Protrusion), CustomConditionName = nameof(ProtrusionExtrusionDetailsType.LocalizationAxial))]
        [RadioReportId("spi_c_0504215", InstanceName = nameof(DiscFindingType.Protrusion), CustomConditionName = nameof(ProtrusionExtrusionDetailsType.BroadBased))]
        [RadioReportId("spi_c_0505208", InstanceName = nameof(DiscFindingType.Extrusion), CustomConditionName = nameof(ProtrusionExtrusionDetailsType.LocalizationAxial))]
        [RadioReportId("spi_c_0504215", InstanceName = nameof(DiscFindingType.Extrusion), CustomConditionName = nameof(ProtrusionExtrusionDetailsType.BroadBased))]
        [RadioReportId("spi_c_0505208", InstanceName = nameof(DiscFindingType.Migration))]
        [RadioReportId("spi_c_0504230", InstanceName = nameof(DiscFindingType.FacetJoints))]
        public GradeType GradeType { get; set; }

        [RadioReportId("spi_c_0505210", InstanceName = nameof(DiscFindingType.Protrusion), CustomConditionName = nameof(ProtrusionExtrusionDetailsType.LocalizationAxial))]
        [RadioReportId("spi_c_0504217", InstanceName = nameof(DiscFindingType.Protrusion), CustomConditionName = nameof(ProtrusionExtrusionDetailsType.BroadBased))]
        [RadioReportId("spi_c_0505210", InstanceName = nameof(DiscFindingType.Extrusion), CustomConditionName = nameof(ProtrusionExtrusionDetailsType.LocalizationAxial))]
        [RadioReportId("spi_c_0504217", InstanceName = nameof(DiscFindingType.Extrusion), CustomConditionName = nameof(ProtrusionExtrusionDetailsType.BroadBased))]
        [RadioReportId("spi_c_0505210", InstanceName = nameof(DiscFindingType.Migration))]
        [RadioReportId("spi_c_0504232", InstanceName = nameof(DiscFindingType.FacetJoints))]
        public int? SagittalDiameterInMm { get; set; }

        [RadioReportId("spi_c_0505213", InstanceName = nameof(DiscFindingType.Protrusion), CustomConditionName = nameof(ProtrusionExtrusionDetailsType.LocalizationAxial))]
        [RadioReportId("spi_c_0504220", InstanceName = nameof(DiscFindingType.Protrusion), CustomConditionName = nameof(ProtrusionExtrusionDetailsType.BroadBased))]
        [RadioReportId("spi_c_0505213", InstanceName = nameof(DiscFindingType.Extrusion), CustomConditionName = nameof(ProtrusionExtrusionDetailsType.LocalizationAxial))]
        [RadioReportId("spi_c_0504220", InstanceName = nameof(DiscFindingType.Extrusion), CustomConditionName = nameof(ProtrusionExtrusionDetailsType.BroadBased))]
        [RadioReportId("spi_c_0505213", InstanceName = nameof(DiscFindingType.Migration))]
        [RadioReportId("spi_c_0504235", InstanceName = nameof(DiscFindingType.FacetJoints))]
        public int? TransverseDiameterSpinalCanalWidthInMm { get; set; }

        [RadioReportId("spi_c_050313", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_c_050313", InstanceName = nameof(DiscFindingType.Extrusion))]
        [RadioReportId("spi_c_0504225", InstanceName = nameof(DiscFindingType.Migration))]
        public bool IsOsteochondrosis { get; set; }

        [RadioReportId("spi_c_050312", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_c_050312", InstanceName = nameof(DiscFindingType.Extrusion))]
        public bool IsOsteophyteFormation { get; set; }

        [RadioReportId("spi_c_050411", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_c_050411", InstanceName = nameof(DiscFindingType.Extrusion))]
        [RadioReportId("spi_c_050411", InstanceName = nameof(DiscFindingType.Migration))]
        public bool IsFacetJointArthropathy { get; set; }

        [RadioReportId("spi_c_050413", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_c_050413", InstanceName = nameof(DiscFindingType.Extrusion))]
        [RadioReportId("spi_c_0505216", InstanceName = nameof(DiscFindingType.Migration))]
        public bool IsFacetJointArthropathyRight { get; set; }

        [RadioReportId("spi_c_050414", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_c_050414", InstanceName = nameof(DiscFindingType.Extrusion))]
        [RadioReportId("spi_c_0505217", InstanceName = nameof(DiscFindingType.Migration))]
        public bool IsFacetJointArthropathyLeft { get; set; }

        [RadioReportId("spi_c_0504500", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_c_0504500", InstanceName = nameof(DiscFindingType.Extrusion))]
        [RadioReportId("spi_c_0505219", InstanceName = nameof(DiscFindingType.Migration))]
        [RadioReportId("spi_c_0503211", InstanceName = nameof(DiscFindingType.FacetJoints))]
        public bool IsHypertrophy { get; set; }

        [RadioReportId("spi_c_0504503", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_c_0504503", InstanceName = nameof(DiscFindingType.Extrusion))]
        [RadioReportId("spi_c_0505220", InstanceName = nameof(DiscFindingType.Migration))]
        public bool IsSynovialCyst { get; set; }

        [RadioReportId("spi_c_0504505", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_c_0504505", InstanceName = nameof(DiscFindingType.Extrusion))]
        [RadioReportId("spi_c_0505222", InstanceName = nameof(DiscFindingType.Migration))]
        public bool IsSynovialCystRight { get; set; }

        [RadioReportId("spi_c_0504506", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_c_0504506", InstanceName = nameof(DiscFindingType.Extrusion))]
        [RadioReportId("spi_c_0505223", InstanceName = nameof(DiscFindingType.Migration))]
        public bool IsSynovialCystLeft { get; set; }

        [RadioReportId("spi_c_0504507", InstanceName = nameof(DiscFindingType.Protrusion))]
        [RadioReportId("spi_c_0504507", InstanceName = nameof(DiscFindingType.Extrusion))]
        [RadioReportId("spi_c_0505225", InstanceName = nameof(DiscFindingType.Migration))]
        [RadioReportId("spi_c_0503215", InstanceName = nameof(DiscFindingType.FacetJoints))]
        public int? MaxDiameterInMm { get; set; }

        [RadioReportId("spi_c_0503224", InstanceName = nameof(DiscFindingType.Trauma))]
        [RadioReportId("spi_c_0505250", InstanceName = nameof(DiscFindingType.RheumatoidDiseases))]
        public bool IsSubordinate { get; set; }

        #endregion

        #region BulgingDegeneration

        [RadioReportId("spi_c_0503306", InstanceName = nameof(DiscFindingType.BulgingDegeneration))]
        public bool IsNarrowingOfTheIntervertebralDisc { get; set; }

        [RadioReportId("spi_c_050303", InstanceName = nameof(DiscFindingType.BulgingDegeneration))]
        public bool IsBulging { get; set; }

        public BulgingDetailsType BulgingDetailsType { get; set; }

        [RadioReportId("spi_c_0504204-l", InstanceName = InstanceNames.Disc, IsExportable = false)]
        public SideType SideType { get; set; }

        #endregion

        #region Migration

        public DirectionOfMigrationType DirectionOfMigrationType { get; set; }

        [RadioReportId("spi_c_050318", InstanceName = nameof(DiscFindingType.Migration))]
        public int? CraniocaudalExtensionInMm { get; set; }

        public LevelCraniocaudalType LevelCraniocaudalType { get; set; }

        [RadioReportId("spi_c_0504226", InstanceName = nameof(DiscFindingType.Migration))]
        public bool IsRetrospondylophyte { get; set; }

        #endregion

        #region FacetJoints

        [RadioReportId("spi_c_0502205", InstanceName = nameof(DiscFindingType.FacetJoints))]
        public bool IsOsteoarthritis { get; set; }

        [RadioReportId("spi_c_0502206", InstanceName = nameof(DiscFindingType.FacetJoints))]
        public bool IsUncovertebralArthrosis { get; set; }

        [RadioReportId("spi_c_0502207", InstanceName = nameof(DiscFindingType.FacetJoints))]
        public bool IsSpondylolysis { get; set; }

        [RadioReportId("spi_c_0502208", InstanceName = nameof(DiscFindingType.FacetJoints))]
        public bool IsLuxation { get; set; }

        [RadioReportId("spi_c_050328", InstanceName = nameof(DiscFindingType.FacetJoints))]
        public bool IsFacetJointArthrosisRight { get; set; }

        [RadioReportId("spi_c_050329", InstanceName = nameof(DiscFindingType.FacetJoints))]
        public bool IsFacetJointArthrosisLeft { get; set; }

        public PathriaClassificationType PathriaClassificationType { get; set; }

        [RadioReportId("spi_c_0503212", InstanceName = nameof(DiscFindingType.FacetJoints))]
        public bool IsCyst { get; set; }

        [RadioReportId("spi_c_0503213", InstanceName = nameof(DiscFindingType.FacetJoints))]
        public bool IsMultiple { get; set; }

        [RadioReportId("spi_c_0505228", InstanceName = nameof(DiscFindingType.FacetJoints))]
        public bool IsFacetJointArthrosisForaminalStenosis { get; set; }

        [RadioReportId("spi_c_0505228-l", InstanceName = nameof(FacetJointArthrosisForaminalStenosisType), IsExportable = false)]
        public ForaminalStenosisType FacetJointArthrosisForaminalStenosisType { get; set; }

        [RadioReportId("spi_c_0505232", InstanceName = nameof(DiscFindingType.FacetJoints))]
        public bool IsForaminalStenosisRight { get; set; }

        [RadioReportId("spi_c_0505233", InstanceName = nameof(DiscFindingType.FacetJoints))]
        public bool IsForaminalStenosisLeft { get; set; }

        [RadioReportId("spi_c_0503218", InstanceName = nameof(DiscFindingType.FacetJoints))]
        public bool IsUncovertebralArthrosisForaminalStenosis { get; set; }

        [RadioReportId("spi_c_0503218-l", InstanceName = nameof(UncovertebralArthrosisForaminalStenosisType), IsExportable = false)]
        public ForaminalStenosisType UncovertebralArthrosisForaminalStenosisType { get; set; }

        [RadioReportId("spi_c_0503222", InstanceName = nameof(DiscFindingType.FacetJoints))]
        public bool IsUncovertebralArthrosisRight { get; set; }

        [RadioReportId("spi_c_0503223", InstanceName = nameof(DiscFindingType.FacetJoints))]
        public bool IsUncovertebralArthrosisLeft { get; set; }

        [RadioReportId("spi_c_0504239", InstanceName = nameof(DiscFindingType.FacetJoints))]
        public bool IsSpondylolysisRight { get; set; }

        [RadioReportId("spi_c_0504240", InstanceName = nameof(DiscFindingType.FacetJoints))]
        public bool IsSpondylolysisLeft { get; set; }

        [RadioReportId("spi_c_0505236", InstanceName = nameof(DiscFindingType.FacetJoints))]
        public bool IsLuxationRight { get; set; }

        [RadioReportId("spi_c_0505237", InstanceName = nameof(DiscFindingType.FacetJoints))]
        public bool IsLuxationLeft { get; set; }

        #endregion

        #region Spondylodiscitis

        [RadioReportId("spi_c_050332", InstanceName = nameof(DiscFindingType.Spondylodiscitis))]
        public bool IsIncreasedSizeOfTheDisc { get; set; }

        [RadioReportId("spi_c_050333", InstanceName = nameof(DiscFindingType.Spondylodiscitis))]
        public bool IsContrastEnhancementOfTheDisc { get; set; }

        [RadioReportId("spi_c_050334", InstanceName = nameof(DiscFindingType.Spondylodiscitis))]
        public bool IsIrregularityOfAdjacentVertebralEndplates { get; set; }

        [RadioReportId("spi_c_0504304", InstanceName = nameof(DiscFindingType.Spondylodiscitis))]
        public SpineAxialLocations SpineAxialLocation { get; set; }

        [RadioReportId("spi_c_0504305", InstanceName = nameof(DiscFindingType.Spondylodiscitis))]
        public bool IsParavertebralInflammatoryResponse { get; set; }

        [RadioReportId("spi_c_0504306", InstanceName = nameof(DiscFindingType.Spondylodiscitis))]
        public bool IsSoftTissueEdema { get; set; }

        [RadioReportId("spi_c_0505306", InstanceName = nameof(DiscFindingType.Spondylodiscitis))]
        public bool IsAbscess { get; set; }

        [RadioReportId("spi_c_0505310", InstanceName = nameof(DiscFindingType.Spondylodiscitis))]
        public bool IsIntraspinal { get; set; }

        [RadioReportId("spi_c_0505311", InstanceName = nameof(DiscFindingType.Spondylodiscitis))]
        public int? IntraspinalLargestDiameterInMm { get; set; }

        [RadioReportId("spi_c_0505307", InstanceName = nameof(DiscFindingType.Spondylodiscitis))]
        public bool IsParavertebral { get; set; }

        [RadioReportId("spi_c_0505308", InstanceName = nameof(DiscFindingType.Spondylodiscitis))]
        public int? ParavertebralLargestDiameterInMm { get; set; }

        [RadioReportId("spi_c_0505253", InstanceName = nameof(DiscFindingType.Spondylodiscitis))]
        public bool IsLocatedAtPsoasMuscle { get; set; }

        [RadioReportId("spi_c_0505314", InstanceName = nameof(DiscFindingType.Spondylodiscitis))]
        public bool IsActiveDiscitis { get; set; }

        [RadioReportId("spi_c_0505315", InstanceName = nameof(DiscFindingType.Spondylodiscitis))]
        public bool IsSecondary { get; set; }

        #endregion

        #region Trauma

        [RadioReportId("spi_c_0503308", InstanceName = nameof(DiscFindingType.Trauma))]
        public bool IsRuptureOfPosteriorLongitudinalLigament { get; set; }

        [RadioReportId("spi_c_0503304", InstanceName = nameof(DiscFindingType.Trauma))]
        public bool IsRuptureOfAnteriorLongitudinalLigament { get; set; }

        [RadioReportId("spi_c_0503305", InstanceName = nameof(DiscFindingType.Trauma))]
        public bool IsIntervertebralDiscRupture { get; set; }

        [RadioReportId("spi_c_0503226", InstanceName = nameof(DiscFindingType.Trauma))]
        public bool IsAnteriorColumn { get; set; }

        [RadioReportId("spi_c_0503227", InstanceName = nameof(DiscFindingType.Trauma))]
        public bool IsMiddleColumn { get; set; }

        [RadioReportId("spi_c_0503228", InstanceName = nameof(DiscFindingType.Trauma))]
        public bool IsPosteriorColumn { get; set; }

        #endregion

        #region RheumatoidDiseases

        [RadioReportId("spi_c_0503230", InstanceName = nameof(DiscFindingType.RheumatoidDiseases))]
        public bool IsEnthesitisChronic { get; set; }

        [RadioReportId("spi_c_0503231", InstanceName = nameof(DiscFindingType.RheumatoidDiseases))]
        public bool IsOsteoproliferativeReaction { get; set; }

        [RadioReportId("spi_c_0503232", InstanceName = nameof(DiscFindingType.RheumatoidDiseases))]
        public bool IsOsteophyte { get; set; }

        [RadioReportId("spi_c_0503233", InstanceName = nameof(DiscFindingType.RheumatoidDiseases))]
        public bool IsSyndesmophyte { get; set; }

        [RadioReportId("spi_c_0503234", InstanceName = nameof(DiscFindingType.RheumatoidDiseases))]
        public bool IsParasyndesmophyte { get; set; }

        [RadioReportId("spi_c_0503235", InstanceName = nameof(DiscFindingType.RheumatoidDiseases))]
        public bool IsMixtaosteophyte { get; set; }

        [RadioReportId("spi_c_0503236", InstanceName = nameof(DiscFindingType.RheumatoidDiseases))]
        public bool IsHyperostoticSpondylophyte { get; set; }

        public OsteoproliferativeReactionType OsteoproliferativeReactionType { get; set; }

        [RadioReportId("spi_c_0503240", InstanceName = nameof(DiscFindingType.RheumatoidDiseases))]
        public bool IsRomanusLesion { get; set; }

        [RadioReportId("spi_c_0503241", InstanceName = nameof(DiscFindingType.RheumatoidDiseases))]
        public bool IsSclerosis { get; set; }

        [RadioReportId("spi_c_0503242", InstanceName = nameof(DiscFindingType.RheumatoidDiseases))]
        public bool IsErosion { get; set; }

        [RadioReportId("spi_c_0504242", InstanceName = nameof(DiscFindingType.RheumatoidDiseases))]
        public bool IsAnderssonLesion { get; set; }

        public ComplicationType ComplicationType { get; set; }

        [RadioReportId("spi_c_0504246", InstanceName = nameof(DiscFindingType.RheumatoidDiseases))]
        public bool IsConsolidated { get; set; }

        [RadioReportId("spi_c_0504247", InstanceName = nameof(DiscFindingType.RheumatoidDiseases))]
        public bool IsOssificationOfTheIntervertebralSpace { get; set; }

        [RadioReportId("spi_c_0505239", InstanceName = nameof(DiscFindingType.RheumatoidDiseases))]
        public bool IsAnteriorLongitudinalLigament { get; set; }

        [RadioReportId("spi_c_0505240", InstanceName = nameof(DiscFindingType.RheumatoidDiseases))]
        public bool IsPosteriorLongitudinalLigament { get; set; }

        [RadioReportId("spi_c_0505241", InstanceName = nameof(DiscFindingType.RheumatoidDiseases))]
        public bool IsLiggFlava { get; set; }

        [RadioReportId("spi_c_0505242", InstanceName = nameof(DiscFindingType.RheumatoidDiseases))]
        public bool IsLiggInterspinosa { get; set; }

        [RadioReportId("spi_c_0505243", InstanceName = nameof(DiscFindingType.RheumatoidDiseases))]
        public bool IsLiggSupraspinosa { get; set; }

        [RadioReportId("spi_c_0505244", InstanceName = nameof(DiscFindingType.RheumatoidDiseases))]
        public bool IsLigNuchae { get; set; }

        [RadioReportId("spi_c_0505246", InstanceName = nameof(DiscFindingType.RheumatoidDiseases))]
        public bool IsCalcification { get; set; }

        [RadioReportId("spi_c_0505247", InstanceName = nameof(DiscFindingType.RheumatoidDiseases))]
        public bool IsOssification { get; set; }

        [RadioReportId("spi_c_0503244", InstanceName = nameof(DiscFindingType.RheumatoidDiseases))]
        public bool IsArthrosis { get; set; }

        [RadioReportId("spi_c_0503245", InstanceName = nameof(DiscFindingType.RheumatoidDiseases))]
        public bool IsArthritis { get; set; }

        [RadioReportId("spi_c_0503247", InstanceName = nameof(DiscFindingType.RheumatoidDiseases))]
        public int? AtlantodentalDistanceInMm { get; set; }

        [RadioReportId("spi_c_0503250", InstanceName = nameof(DiscFindingType.RheumatoidDiseases))]
        public bool IsAtlantoaxialJointErosions { get; set; }

        [RadioReportId("spi_c_0503251", InstanceName = nameof(DiscFindingType.RheumatoidDiseases))]
        public bool IsDensErosion { get; set; }

        [RadioReportId("spi_c_0503252", InstanceName = nameof(DiscFindingType.RheumatoidDiseases))]
        public bool IsDensProtrusion { get; set; }

        [RadioReportId("spi_c_0503254", InstanceName = nameof(DiscFindingType.RheumatoidDiseases))]
        public int? ReferenceChamberlainLineInMm { get; set; }

        [RadioReportId("spi_c_0503256", InstanceName = nameof(DiscFindingType.RheumatoidDiseases))]
        public bool IsBasilarImpression { get; set; }

        [RadioReportId("spi_c_0503258", InstanceName = nameof(DiscFindingType.RheumatoidDiseases))]
        public bool IsSubluxation { get; set; }

        [RadioReportId("spi_c_0504249", InstanceName = nameof(DiscFindingType.RheumatoidDiseases))]
        public bool IsAnkylosis { get; set; }

        [RadioReportId("spi_c_0504250", InstanceName = nameof(DiscFindingType.RheumatoidDiseases))]
        public bool IsFacetJointsErosions { get; set; }

        [RadioReportId("spi_c_0505249", InstanceName = nameof(DiscFindingType.RheumatoidDiseases))]
        public DiscDiagnosisType DifferentialDiagnosis { get; set; }

        #endregion

        public bool CheckCondition(string customConditionId) =>
            customConditionId switch
            {
                nameof(ProtrusionExtrusionDetailsType.LocalizationAxial) => ProtrusionExtrusionDetailsType.ToString() == customConditionId,
                nameof(ProtrusionExtrusionDetailsType.BroadBased) => ProtrusionExtrusionDetailsType.ToString() == customConditionId,
                _ => false
            };
    }
}
