using RadioReport.AngiographyMRT.Domain.Enums;
using RadioReport.AngiographyMRT.Domain.Enums.PelvisLegArteries;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;

namespace RadioReport.AngiographyMRT.Domain.Models
{
    public class PelvisLegArteriesFinding : FindingBase, IRadioReportIdConditionEvaluator
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("ang_m_080106")]
        public PelvisLegArteriesFindingType FindingType { get; set; }

        #region Common

        public SideType SideType { get; set; }

        public PathologyType PathologyType { get; set; }

        [RadioReportId("ang_m_080310", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        [RadioReportId("ang_m_080216", InstanceName = nameof(PelvisLegArteriesFindingType.Aneurysm))]
        [RadioReportId("ang_m_080346", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        [RadioReportId("ang_m_080372", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        public LocalizationType LocalizationType { get; set; }

        [RadioReportId("ang_m_080506", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK), CustomConditionName = nameof(PathologyType.VascularStenosis))]
        [RadioReportId("ang_m_080444", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK), CustomConditionName = nameof(ClassificationAccordingToTASCIISubType.TypeA))]
        [RadioReportId("ang_m_080528", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK), CustomConditionName = nameof(ClassificationAccordingToTASCIISubType.TypeB))]
        [RadioReportId("ang_m_080531", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK), CustomConditionName = nameof(ClassificationAccordingToTASCIISubType.TypeD))]
        [RadioReportId("ang_m_080344", InstanceName = nameof(PelvisLegArteriesFindingType.Aneurysm))]
        public int? LengthInMm { get; set; }

        #endregion

        #region AnatomicVariants

        [RadioReportId("ang_m_080302", InstanceName = nameof(PelvisLegArteriesFindingType.AnatomicVariants))]
        public bool IsPersistentIschiadicArtery { get; set; }

        [RadioReportId("ang_m_080303", InstanceName = nameof(PelvisLegArteriesFindingType.AnatomicVariants))]
        public bool IsHighOriginAnteriorTibialArtery { get; set; }

        [RadioReportId("ang_m_080304", InstanceName = nameof(PelvisLegArteriesFindingType.AnatomicVariants))]
        public bool IsHighOriginPosteriorTibialArtery { get; set; }

        [RadioReportId("ang_m_080305", InstanceName = nameof(PelvisLegArteriesFindingType.AnatomicVariants))]
        public bool IsHighOriginPeronealArtery { get; set; }

        [RadioReportId("ang_m_080402", InstanceName = nameof(PelvisLegArteriesFindingType.AnatomicVariants))]
        public bool IsTypeA { get; set; }

        [RadioReportId("ang_m_080403", InstanceName = nameof(PelvisLegArteriesFindingType.AnatomicVariants))]
        public bool IsTypeB { get; set; }

        [RadioReportId("ang_m_080404", InstanceName = nameof(PelvisLegArteriesFindingType.AnatomicVariants))]
        public bool IsTypeC { get; set; }

        [RadioReportId("ang_m_080405", InstanceName = nameof(PelvisLegArteriesFindingType.AnatomicVariants))]
        public bool IsTypeD { get; set; }

        #endregion

        #region ArterioscleroticPAVK

        public SeverityType SeverityType { get; set; }

        [RadioReportId("ang_m_080411", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK), CustomConditionName = nameof(PathologyType.VascularStenosis))]
        [RadioReportId("ang_m_080516", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK), CustomConditionName = nameof(PathologyType.VascularPathology))]
        public bool IsHemodynamicallyRelevant { get; set; }

        [RadioReportId("ang_m_080414", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK), CustomConditionName = nameof(PathologyType.VascularStenosis))]
        [RadioReportId("ang_m_080519", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK), CustomConditionName = nameof(PathologyType.VascularPathology))]
        public int? DiameterStenosisInMm { get; set; }

        [RadioReportId("ang_m_080417", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK), CustomConditionName = nameof(PathologyType.VascularStenosis))]
        [RadioReportId("ang_m_080522", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK), CustomConditionName = nameof(PathologyType.VascularPathology))]
        public int? DiameterNormalPoststenoticSegmentInMm { get; set; }

        [RadioReportId("ang_m_080420", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK), CustomConditionName = nameof(PathologyType.VascularStenosis))]
        [RadioReportId("ang_m_080525", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK), CustomConditionName = nameof(PathologyType.VascularPathology))]
        public decimal? DegreeOfStenosisAccordingToNASCETInPercentage { get; set; }

        public FormType FormType { get; set; }

        [RadioReportId("ang_m_080507", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK), CustomConditionName = nameof(PathologyType.VascularStenosis))]
        [RadioReportId("ang_m_080445", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK), CustomConditionName = nameof(PathologyType.VascularPathology))]
        public bool IsShortLengthStenosis { get; set; }

        [RadioReportId("ang_m_080509", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        public bool IsBridgingCollaterals { get; set; }

        [RadioReportId("ang_m_080510", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        public bool IsCollateralsFromAdjacentVessels { get; set; }

        [RadioReportId("ang_m_080511", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        public bool IsPoorCollateralization { get; set; }

        public ClassificationAccordingToTASCIIType ClassificationAccordingToTASCIIType { get; set; }

        public ClassificationAccordingToTASCIISubType ClassificationAccordingToTASCIISubType { get; set; }

        public ClassificationAccordingToTASCIIDetailsType ClassificationAccordingToTASCIIDetailsType { get; set; }

        public VascularPathologyLocalizationType VascularPathologyLocalizationType { get; set; }

        public ExtentType ExtentType { get; set; }

        [RadioReportId("ang_m_080459", InstanceName = nameof(PelvisLegArteriesFindingType.ArterioscleroticPAVK))]
        public bool IsSingularStenosisLessThan1Cm { get; set; }

        #endregion

        #region Aneurysm

        public ShapeType ShapeType { get; set; }

        [RadioReportId("ang_m_080341", InstanceName = nameof(PelvisLegArteriesFindingType.Aneurysm))]
        public int? MaxDiameterInMm { get; set; }

        public CharacterizationType CharacterizationType { get; set; }

        [RadioReportId("ang_m_080470", InstanceName = nameof(PelvisLegArteriesFindingType.Aneurysm))]
        public bool IsActiveBleedingOrFreshHematoma { get; set; }

        [RadioReportId("ang_m_080473", InstanceName = nameof(PelvisLegArteriesFindingType.Aneurysm))]
        public bool IsPartiallyThrombosed { get; set; }

        [RadioReportId("ang_m_080474", InstanceName = nameof(PelvisLegArteriesFindingType.Aneurysm))]
        public bool IsEccentric { get; set; }

        #endregion

        #region NonArterioscleroticPAVK

        [RadioReportId("ang_m_080349", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        public int? LengthEmbolusInMm { get; set; }

        public PathologySubType PathologySubType { get; set; }

        [RadioReportId("ang_m_080475", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        public bool IsTypeV { get; set; }

        [RadioReportId("ang_m_080355", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        public bool IsDetectionOfCystsWithinTheVesselWall { get; set; }

        [RadioReportId("ang_m_080356", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        public bool IsStenosis { get; set; }

        public StenosisType StenosisType { get; set; }

        [RadioReportId("ang_m_080359", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        public bool IsPeripheralOcclusionsOrStenoses { get; set; }

        [RadioReportId("ang_m_080360", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        public bool IsSeveralShortStretchStenoses { get; set; }

        [RadioReportId("ang_m_080361", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        public bool IsConcentricFilumTerminaleSign { get; set; }

        [RadioReportId("ang_m_080362", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        public bool IsSegmentalOcclusions { get; set; }

        [RadioReportId("ang_m_080363", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        public bool IsSuddenChangeInDiameter { get; set; }

        [RadioReportId("ang_m_080364", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        public bool IsWallThickening { get; set; }

        [RadioReportId("ang_m_080365", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        public bool IsT2wHyperintensityOfVascularWallOrOedema { get; set; }

        [RadioReportId("ang_m_080366", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        public bool IsArterialWallEnhancement { get; set; }

        [RadioReportId("ang_m_080367", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        public bool IsMicroaneurysm { get; set; }

        [RadioReportId("ang_m_080476", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        public bool IsTortuousCourseOfTheSuperficialFemoralArtery { get; set; }

        [RadioReportId("ang_m_080477", InstanceName = nameof(PelvisLegArteriesFindingType.NonArterioscleroticPAVK))]
        public bool IsCorkscrewCollaterals { get; set; }

        #endregion

        #region AfterTherapy

        public TherapyType TherapyType { get; set; }

        public BypassType BypassType { get; set; }

        public ComplicationsType ComplicationsType { get; set; }

        [RadioReportId("ang_m_080482", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        public bool IsAnastomoticAneurysm { get; set; }

        public AnastomoticAneurysmType AnastomoticAneurysmType { get; set; }

        [RadioReportId("ang_m_080532", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        public bool IsPeriprostheticFluidCollection { get; set; }

        public PeriprostheticFluidCollectionType PeriprostheticFluidCollectionType { get; set; }

        [RadioReportId("ang_m_080534", InstanceName = nameof(PelvisLegArteriesFindingType.AfterTherapy))]
        public bool IsEspeciallyPeriprostheticInfection { get; set; }

        public CollectionWithoutContrastEnhancementType CollectionWithoutContrastEnhancementType { get; set; }

        #endregion

        public bool CheckCondition(string customConditionId) =>
            customConditionId switch
            {
                nameof(PathologyType.VascularStenosis) => PathologyType.ToString() == customConditionId,
                nameof(PathologyType.VascularPathology) => PathologyType.ToString() == customConditionId,
                nameof(ClassificationAccordingToTASCIIType.ChronicAortoiliac) => ClassificationAccordingToTASCIIType.ToString() == customConditionId,
                nameof(ClassificationAccordingToTASCIIType.ChronicFemoropopliteal) => ClassificationAccordingToTASCIIType.ToString() == customConditionId,
                nameof(ClassificationAccordingToTASCIIType.ChronicCruroPedal) => ClassificationAccordingToTASCIIType.ToString() == customConditionId,
                nameof(ClassificationAccordingToTASCIISubType.TypeA) => ClassificationAccordingToTASCIISubType.ToString() == customConditionId,
                nameof(ClassificationAccordingToTASCIISubType.TypeB) => ClassificationAccordingToTASCIISubType.ToString() == customConditionId,
                nameof(ClassificationAccordingToTASCIISubType.TypeC) => ClassificationAccordingToTASCIISubType.ToString() == customConditionId,
                nameof(ClassificationAccordingToTASCIISubType.TypeD) => ClassificationAccordingToTASCIISubType.ToString() == customConditionId,
                _ => false
            };
    }
}
