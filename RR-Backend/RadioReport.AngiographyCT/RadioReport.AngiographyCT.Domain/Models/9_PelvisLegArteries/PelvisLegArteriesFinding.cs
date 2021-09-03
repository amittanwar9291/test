using RadioReport.AngiographyCT.Domain.Constants;
using RadioReport.AngiographyCT.Domain.Enums;
using RadioReport.AngiographyCT.Domain.Enums.PelvisLegArteries;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;

namespace RadioReport.AngiographyCT.Domain.Models
{
    public class PelvisLegArteriesFinding : FindingBase, IRadioReportIdConditionEvaluator
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("ang_c_090106")]
        public PelvisLegArteriesFindingType FindingType { get; set; }

        #region Common

        [RadioReportId("ang_c_090320-l", InstanceName = InstanceNames.PelvisLegArteries, IsExportable = false)]
        public SideType SideType { get; set; }

        [RadioReportId("ang_c_0903102", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        [RadioReportId("ang_c_0902102", InstanceName = nameof(PelvisLegArteriesFindingType.VascularDilatation))]
        [RadioReportId("ang_c_0904125", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        [RadioReportId("ang_c_0903120", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        public bool IsSuprarenal { get; set; }

        [RadioReportId("ang_c_0903103", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        [RadioReportId("ang_c_0902103", InstanceName = nameof(PelvisLegArteriesFindingType.VascularDilatation))]
        [RadioReportId("ang_c_0904126", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        [RadioReportId("ang_c_0903121", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        public bool IsInfrarenal { get; set; }

        [RadioReportId("ang_c_090506", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK),
            CustomConditionName =
                nameof(ArterioscleroticPAVKPathologyType.VascularStenosis))]
        [RadioReportId("ang_c_090444", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK),
            CustomConditionName =
                nameof(ChronicLesionsType.TypeA))]
        [RadioReportId("ang_c_090528", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK),
            CustomConditionName =
                nameof(ChronicLesionsType.TypeB))]
        [RadioReportId("ang_c_090531", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK),
            CustomConditionName =
                nameof(ChronicLesionsType.TypeD))]
        [RadioReportId("ang_c_090344", InstanceName = nameof(PelvisLegArteriesFindingType.VascularDilatation))]
        [RadioReportId("ang_c_0905121", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        public int? Length { get; set; }

        [RadioReportId("ang_c_0903113", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        [RadioReportId("ang_c_0902104", InstanceName = nameof(PelvisLegArteriesFindingType.VascularDilatation))]
        public bool IsP1Segment { get; set; }

        [RadioReportId("ang_c_0903114", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        [RadioReportId("ang_c_0902105", InstanceName = nameof(PelvisLegArteriesFindingType.VascularDilatation))]
        public bool IsP2Segment { get; set; }

        [RadioReportId("ang_c_0903115", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        [RadioReportId("ang_c_0902106", InstanceName = nameof(PelvisLegArteriesFindingType.VascularDilatation))]
        public bool IsP3Segment { get; set; }

        #endregion

        #region Anatomic variants

        [RadioReportId("ang_c_090302", InstanceName = nameof(PelvisLegArteriesFindingType.AnatomicVariants))]
        public bool IsPersistentIschiadicArtery { get; set; }

        [RadioReportId("ang_c_090303", InstanceName = nameof(PelvisLegArteriesFindingType.AnatomicVariants))]
        public bool IsHighOriginAnteriorTibialArtery { get; set; }

        [RadioReportId("ang_c_090304", InstanceName = nameof(PelvisLegArteriesFindingType.AnatomicVariants))]
        public bool IsHighOriginPosteriorTibialArtery { get; set; }

        [RadioReportId("ang_c_090305", InstanceName = nameof(PelvisLegArteriesFindingType.AnatomicVariants))]
        public bool IsHighOriginPeronealArtery { get; set; }

        [RadioReportId("ang_c_090402", InstanceName = nameof(PelvisLegArteriesFindingType.AnatomicVariants))]
        public bool IsTypeADorsalisPedisArtery { get; set; }

        [RadioReportId("ang_c_090403", InstanceName = nameof(PelvisLegArteriesFindingType.AnatomicVariants))]
        public bool IsTypeBDorsalisPedisArtery { get; set; }

        [RadioReportId("ang_c_090404", InstanceName = nameof(PelvisLegArteriesFindingType.AnatomicVariants))]
        public bool IsTypeCDorsalisPedisArtery { get; set; }

        [RadioReportId("ang_c_090405", InstanceName = nameof(PelvisLegArteriesFindingType.AnatomicVariants))]
        public bool IsTypeDLackOfDorsalisPedisArtery { get; set; }

        #endregion

        #region Arteriosclerotic PAVK

        public ArterioscleroticPAVKPathologyType ArterioscleroticPAVKPathologyType { get; set; }

        [RadioReportId("ang_c_0902113", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        public bool Normal { get; set; }

        [RadioReportId("ang_c_090310", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        public LocalizationType LocalizationType { get; set; }

        [RadioReportId("ang_c_0903132", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        public bool IsRight { get; set; }

        [RadioReportId("ang_c_0903133", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        public bool IsLeft { get; set; } 

        public SegmentType SegmentType { get; set; }

        [RadioReportId("ang_c_090407", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        public SeverityType ArterioscleroticPAVKSeverityType { get; set; }

        [RadioReportId("ang_c_090411", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK),
            CustomConditionName =
                nameof(ArterioscleroticPAVKPathologyType.VascularStenosis))]
        [RadioReportId("ang_c_090516", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK),
            CustomConditionName =
                nameof(ChronicLesionsType.TypeA))]
        public bool IsHemodynamicallyRelevant { get; set; }

        [RadioReportId("ang_c_090414", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK),
            CustomConditionName =
                nameof(ArterioscleroticPAVKPathologyType.VascularStenosis))]
        [RadioReportId("ang_c_090519", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK),
            CustomConditionName =
                nameof(ChronicLesionsType.TypeA))]
        public int? DiameterStenosis { get; set; }

        [RadioReportId("ang_c_090417", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK),
            CustomConditionName =
                nameof(ArterioscleroticPAVKPathologyType.VascularStenosis))]
        [RadioReportId("ang_c_090522", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK),
            CustomConditionName =
                nameof(ChronicLesionsType.TypeA))]
        public int? DiameterDiseaseFreePoststenoticSegment { get; set; }

        [RadioReportId("ang_c_090420", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK),
            CustomConditionName =
                nameof(ArterioscleroticPAVKPathologyType.VascularStenosis))]
        [RadioReportId("ang_c_090525", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK),
            CustomConditionName =
                nameof(ChronicLesionsType.TypeA))]
        public int? DegreeOfStenosisAccordingToNASCET { get; set; }

        [RadioReportId("ang_c_0905101", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        public bool IsCalciumPlaque { get; set; }

        [RadioReportId("ang_c_0905102", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        public bool IsSoftPlaque { get; set; }

        public FormType FormType { get; set; }

        public LengthType LengthType { get; set; }

        [RadioReportId("ang_c_0905104", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        public bool IsIntermittent { get; set; }

        [RadioReportId("ang_c_0903109", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        public LocalizationType DistalRefillingLocalizationType { get; set; }

        [RadioReportId("ang_c_0903111", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        public bool IsDistalRefillingSuprarenal { get; set; }

        [RadioReportId("ang_c_0903112", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        public bool IsDistalRefillingInfrarenal { get; set; }

        [RadioReportId("ang_c_0904102", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        public bool IsCollateralsFromAdjacentVessels { get; set; }

        [RadioReportId("ang_c_0904104", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        public bool IsProfundaFemoralArtery { get; set; }

        [RadioReportId("ang_c_0904105", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        public bool IsSuperficialFemoralArteryDistalSegment { get; set; }

        [RadioReportId("ang_c_0904106", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        public bool IsInsufficientCollateralization { get; set; }

        public ClassificationAccordingToTASCIIType ClassificationAccordingToTASCIIType { get; set; }

        public ChronicLesionsType ChronicLesionsType { get; set; }

        public TypeADetailsType TypeADetailsType { get; set; }

        public TypeBDetailsType TypeBDetailsType { get; set; }

        public TypeCDetailsType TypeCDetailsType { get; set; }

        public TypeDDetailsType TypeDDetailsType { get; set; }

        public FemoropoplitealLocalizationType FemoropoplitealLocalizationType { get; set; }

        public FemoropoplitealExtentType FemoropoplitealExtentType { get; set; }

        [RadioReportId("ang_c_090445", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        public bool IsShortLengthStenosis { get; set; }

        [RadioReportId("ang_c_090459", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        public bool SingularStenosis =>
            ClassificationAccordingToTASCIIType == ClassificationAccordingToTASCIIType.ChronicCruropedalLesions &&
            ChronicLesionsType == ChronicLesionsType.TypeA;  

        #endregion

        #region Vascular dilatation

        [RadioReportId("ang_c_090216", InstanceName = nameof(PelvisLegArteriesFindingType.VascularDilatation))]
        public LocalizationType VascularDilatationLocalizationType { get; set; }

        public ShapeType VascularDilatationShapeType { get; set; }

        [RadioReportId("ang_c_090341", InstanceName = nameof(PelvisLegArteriesFindingType.VascularDilatation))]
        public int? MaxDiameter { get; set; }

        [RadioReportId("ang_c_0903118", InstanceName = nameof(PelvisLegArteriesFindingType.VascularDilatation))]
        public int? VesselDiameterProximalOfTheDilatation { get; set; }

        public VascularDilatationCharacterizationType VascularDilatationCharacterizationType { get; set; }

        [RadioReportId("ang_c_090473", InstanceName = nameof(PelvisLegArteriesFindingType.VascularDilatation))]
        public bool IsPartiallyThrombosed { get; set; }

        [RadioReportId("ang_c_090474", InstanceName = nameof(PelvisLegArteriesFindingType.VascularDilatation))]
        public bool IsEccentric { get; set; }

        [RadioReportId("ang_c_0904107", InstanceName = nameof(PelvisLegArteriesFindingType.VascularDilatation))]
        public bool IsPeripheralEmbolisms { get; set; }

        [RadioReportId("ang_c_0904108", InstanceName = nameof(PelvisLegArteriesFindingType.VascularDilatation))]
        public bool IsDistalVascularOcclusion { get; set; }

        [RadioReportId("ang_c_0904109", InstanceName = nameof(PelvisLegArteriesFindingType.VascularDilatation))]
        public bool IsWandverkalkungen { get; set; }

        public VascularDilatationType VascularDilatationType { get; set; }

        [RadioReportId("ang_c_0905110", InstanceName = nameof(PelvisLegArteriesFindingType.VascularDilatation))]
        public bool IsActiveBleedingFreshHematoma { get; set; }

        public FollowUpType FollowUpType { get; set; }

        [RadioReportId("ang_c_0905116", InstanceName = nameof(PelvisLegArteriesFindingType.VascularDilatation))]
        public int? MaxDiameterInPreviousExamination { get; set; }

        #endregion

        #region Non-arteriosclerotic PAVK

        public NonArterioscleroticPAVKPathologyType NonArterioscleroticPAVKPathologyType { get; set; }

        [RadioReportId("ang_c_090346", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        public LocalizationType EmbolismLocalizationType { get; set; }

        [RadioReportId("ang_c_090349", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        public int? MaxDiameterEmbolus { get; set; }

        public EntrapmentSyndromeType EntrapmentSyndromeType { get; set; }

        [RadioReportId("ang_c_090475", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        public bool IsEntrapmentSyndromeTypeV { get; set; }

        [RadioReportId("ang_c_090355", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        public bool IsDetectionOfCystsWithinTheVesselWall { get; set; }

        [RadioReportId("ang_c_090356", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        public bool IsStenosis { get; set; }

        public PathologyStenosisType PathologyStenosisType { get; set; }

        [RadioReportId("ang_c_090359", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        public bool IsPeripheralOcclusionsStenoses { get; set; }

        [RadioReportId("ang_c_090360", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        public bool IsSeveralShortStretchStenoses { get; set; }

        [RadioReportId("ang_c_090361", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        public bool IsConcentricFilumTerminaleSign { get; set; }

        [RadioReportId("ang_c_090362", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        public bool IsSegmentalOcclusions { get; set; }

        [RadioReportId("ang_c_090363", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        public bool IsSuddenChangeInDiameter { get; set; }

        [RadioReportId("ang_c_090364", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        public bool IsWallThickening { get; set; }

        [RadioReportId("ang_c_090365", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        public bool IsEdematousChangesOfTheVascularWallPerivascular { get; set; }

        [RadioReportId("ang_c_090366", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        public bool IsArterialWallEnhancement { get; set; }

        [RadioReportId("ang_c_090367", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        public bool IsMicroaneurysm { get; set; }

        [RadioReportId("ang_c_090476", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        public bool IsTortuousCourseOfTheSuperficialFemoralArtery { get; set; }

        [RadioReportId("ang_c_090477", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        public bool IsCorkscrewCollaterals { get; set; }

        #endregion

        #region After therapy

        public AfterTherapyType AfterTherapyType { get; set; }

        [RadioReportId("ang_c_0902110", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        public bool IsMultiplePTA { get; set; }

        [RadioReportId("ang_c_0902111", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        public bool IsMultipleStent { get; set; }

        public BypassType BypassType { get; set; }

        [RadioReportId("ang_c_090372", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        public LocalizationType AfterTherapyLocalizationType { get; set; }

        [RadioReportId("ang_c_0903123", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        public DistalBypassPortType DistalBypassPortType { get; set; }

        [RadioReportId("ang_c_0903125", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        public bool IsCrossover { get; set; }

        public NoStenosisType NoStenosisType { get; set; }

        public CourseType CourseType { get; set; }

        [RadioReportId("ang_c_0904115", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        public bool IsAnastomoticAneurysm { get; set; }

        public AnastomoticAneurysmType AnastomoticAneurysmType { get; set; }

        [RadioReportId("ang_c_0904118", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        public bool IsPeriprostheticFluidCollection { get; set; }

        public PeriprostheticFluidCollectionType PeriprostheticFluidCollectionType { get; set; }

        [RadioReportId("ang_c_0904120", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        public bool IsEspeciallyPeriprostheticInfection { get; set; }

        public WithoutContrastEnhancementType WithoutContrastEnhancementType { get; set; }

        [RadioReportId("ang_c_0905118", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        public bool IsPostoperativeScarringTissueChanges { get; set; }

        [RadioReportId("ang_c_0905119", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        public bool IsDissection { get; set; }

        public DissectionType DissectionType { get; set; }

        #endregion

        public bool CheckCondition(string customConditionId) =>
            customConditionId switch
            {
                nameof(PelvisLegArteriesFindingType.AnatomicVariants) =>
                    FindingType == PelvisLegArteriesFindingType.AnatomicVariants,

                nameof(PelvisLegArteriesFindingType.AfterTherapy) =>
                    FindingType == PelvisLegArteriesFindingType.AfterTherapy,

                nameof(PelvisLegArteriesFindingType.VascularDilatation) =>
                    FindingType == PelvisLegArteriesFindingType.VascularDilatation,

                nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK) =>
                    FindingType == PelvisLegArteriesFindingType.NonArterioscleroticPAVK,

                nameof(ArterioscleroticPAVKPathologyType.VascularStenosis) =>
                    FindingType == PelvisLegArteriesFindingType.ArterioscleroticPAVK &&
                    ArterioscleroticPAVKPathologyType == ArterioscleroticPAVKPathologyType.VascularStenosis,

                nameof(ClassificationAccordingToTASCIIType.ChronicAortoiliacLesions) =>
                    FindingType == PelvisLegArteriesFindingType.ArterioscleroticPAVK &&
                    ClassificationAccordingToTASCIIType == ClassificationAccordingToTASCIIType.ChronicAortoiliacLesions,

                nameof(ClassificationAccordingToTASCIIType.ChronicFemoropoplitealLesions) =>
                    FindingType == PelvisLegArteriesFindingType.ArterioscleroticPAVK &&
                    ClassificationAccordingToTASCIIType == ClassificationAccordingToTASCIIType.ChronicFemoropoplitealLesions,

                nameof(ClassificationAccordingToTASCIIType.ChronicCruropedalLesions) =>
                    FindingType == PelvisLegArteriesFindingType.ArterioscleroticPAVK &&
                    ClassificationAccordingToTASCIIType == ClassificationAccordingToTASCIIType.ChronicCruropedalLesions,

                nameof(ChronicLesionsType.TypeA) =>
                    FindingType == PelvisLegArteriesFindingType.ArterioscleroticPAVK &&
                    ChronicLesionsType == ChronicLesionsType.TypeA,

                nameof(ChronicLesionsType.TypeB) =>
                    FindingType == PelvisLegArteriesFindingType.ArterioscleroticPAVK &&
                    ChronicLesionsType == ChronicLesionsType.TypeB,

                nameof(ChronicLesionsType.TypeD) =>
                    FindingType == PelvisLegArteriesFindingType.ArterioscleroticPAVK &&
                    ChronicLesionsType == ChronicLesionsType.TypeD,

                _ => false
            };
    }
}