using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.ThoraxMRT.Domain.Enums;
using System;

namespace RadioReport.ThoraxMRT.Domain.Models
{
    public class PleuraFinding : FindingBase, IImageFileContainer, IRadioReportIdConditionEvaluator
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("tho_m_060106")]
        public PleuraFindingType FindingType { get; set; }

        #region Common

        [RadioReportId("tho_m_060410", InstanceName = nameof(PleuraFindingType.PleuralEffusion))]
        [RadioReportId("tho_m_060325", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("tho_m_060533", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        [RadioReportId("tho_m_060542", InstanceName = nameof(PleuraFindingType.Mamma))]
        public bool IsFocalSignalVoids { get; set; }

        [RadioReportId("tho_m_060203-1", InstanceName = nameof(PleuraSiteType), IsExportable = false)]
        public PleuraSiteType PleuraSiteType { get; set; }

        public DescriptionType DescriptionType { get; set; }

        [RadioReportId("tho_m_060505-1", InstanceName = nameof(HomogeneityType), IsExportable = false)]
        public HomogeneityType HomogeneityType { get; set; }

        [RadioReportId("tho_m_060224", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("tho_m_060361", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        [RadioReportId("tho_m_060565", InstanceName = nameof(PleuraFindingType.Mamma))]
        [RadioReportId("tho_m_060552", InstanceName = nameof(PleuraFindingType.LymphNodesAxilla))]
        public bool IsDiffusionRestriction { get; set; }

        public FocalSignalVoidsType FocalSignalVoidsType { get; set; }

        public ContrastEnhancementQuantitativeType ContrastEnhancementQuantitativeType { get; set; }

        [RadioReportId("tho_m_060210", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("tho_m_060251", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        [RadioReportId("tho_m_060549", InstanceName = nameof(PleuraFindingType.Mamma))]
        [RadioReportId("tho_m_0602111", InstanceName = nameof(PleuraFindingType.UpperAbdomenLiverGallBladder))]
        [RadioReportId("tho_m_0602125", InstanceName = nameof(PleuraFindingType.UpperAbdomenPancreas))]
        [RadioReportId("tho_m_0602139", InstanceName = nameof(PleuraFindingType.UpperAbdomenKidneyAdrenalGland))]
        public PleuraDiagnosisType DifferentialDiagnosis { get; set; }

        [RadioReportId("tho_m_060228", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("tho_m_060279", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        [RadioReportId("tho_m_060550", InstanceName = nameof(PleuraFindingType.Mamma))]
        [RadioReportId("tho_m_0602112", InstanceName = nameof(PleuraFindingType.UpperAbdomenLiverGallBladder))]
        [RadioReportId("tho_m_0602126", InstanceName = nameof(PleuraFindingType.UpperAbdomenPancreas))]
        [RadioReportId("tho_m_0602140", InstanceName = nameof(PleuraFindingType.UpperAbdomenKidneyAdrenalGland))]
        public bool IsSuspicionOf { get; set; }

        [RadioReportId("tho_m_060327", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("tho_m_060452", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        [RadioReportId("tho_m_060560", InstanceName = nameof(PleuraFindingType.LymphNodesAxilla))]
        public bool IsHemorrhage { get; set; }

        [RadioReportId("tho_m_060326", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("tho_m_060540", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        [RadioReportId("tho_m_060562", InstanceName = nameof(PleuraFindingType.LymphNodesAxilla))]
        public bool IsNecrosis { get; set; }

        [RadioReportId("tho_m_060234", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("tho_m_060285", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        [RadioReportId("tho_m_0602113", InstanceName = nameof(PleuraFindingType.UpperAbdomenLiverGallBladder))]
        [RadioReportId("tho_m_0602127", InstanceName = nameof(PleuraFindingType.UpperAbdomenPancreas))]
        [RadioReportId("tho_m_0602141", InstanceName = nameof(PleuraFindingType.UpperAbdomenKidneyAdrenalGland))]
        public bool IsMoreThan1Lesion { get; set; }

        #region PleuralThickeningMass and ChestWallSoftTissueMass common

        [RadioReportId("tho_m_060211", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("tho_m_060252", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        public bool IsHistologyKnown { get; set; }

        public HistologyKnownType HistologyKnownType { get; set; }

        [RadioReportId("tho_m_060313", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("tho_m_060439", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        public bool IsAnterior { get; set; }

        [RadioReportId("tho_m_060314", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("tho_m_060440", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        public bool IsLateral { get; set; }

        [RadioReportId("tho_m_060315", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("tho_m_060441", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        public bool IsPosterior { get; set; }

        [RadioReportId("tho_m_060414", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("tho_m_060525", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        public int? ExpansionSizeInMM { get; set; }

        [RadioReportId("tho_m_060417", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("tho_m_060528", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        public int? SecondPlaneInMm { get; set; }

        [RadioReportId("tho_m_060420", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("tho_m_060531", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        public int? ThirdPlaneInMm { get; set; }

        public MarginType MarginType { get; set; }

        public PleuraShapeType PleuraShapeType { get; set; }

        [RadioReportId("tho_m_060219", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("tho_m_060356", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        public SignalTypeExtended T1wSignalType { get; set; }

        [RadioReportId("tho_m_060222", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("tho_m_060359", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        public SignalTypeExtended T2wSignalType { get; set; }

        [RadioReportId("tho_m_060322", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("tho_m_060443", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        public bool IsFat { get; set; }

        [RadioReportId("tho_m_060323", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("tho_m_060444", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        public bool IsMacroscopic { get; set; }

        [RadioReportId("tho_m_060324", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("tho_m_060445", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        public bool IsMicroscopic { get; set; }

        public CysticChangesType CysticChangesType { get; set; }

        [RadioReportId("tho_m_060505-1", InstanceName = nameof(ContrastEnhancementHomogeneityType), IsExportable = false)]
        public HomogeneityType ContrastEnhancementHomogeneityType { get; set; }

        public ContrastEnhancementPatternType ContrastEnhancementPatternType { get; set; }

        [RadioReportId("tho_m_060227", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("tho_m_060278", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        public PleuraDiagnosisType DifferentialDiagnosis1 { get; set; }

        [RadioReportId("tho_m_060230", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("tho_m_060281", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        public PleuraDiagnosisType DifferentialDiagnosis2 { get; set; }

        [RadioReportId("tho_m_060231", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("tho_m_060282", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        public bool IsSubordinate { get; set; }

        [RadioReportId("tho_m_060233", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("tho_m_060284", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        public PleuraDiagnosisType DifferentialDiagnosis3 { get; set; }

        [RadioReportId("uni_06_003", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("uni_06_003", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        public string SerialNumber { get; set; }

        [RadioReportId("uni_06_005", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        [RadioReportId("uni_06_005", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        public string PictureNumber { get; set; }

        public Guid? ImageFileId { get; set; }

        [RadioReportId("uni_06_007-l", InstanceName = "ThoraxMRT.PleuraFinding", CustomConditionName = nameof(PleuraFindingType.PleuralThickeningMass), IsExportable = false)]
        [RadioReportId("uni_06_007-l", InstanceName = "ThoraxMRT.PleuraFinding", CustomConditionName = nameof(PleuraFindingType.ChestWallSoftTissueMass), IsExportable = false)]
        public ImageFile UploadedImageFile { get; set; }

        #endregion

        #endregion

        #region PleuralEffusion
        [RadioReportId("tho_m_060206", InstanceName = nameof(PleuraFindingType.PleuralEffusion))]
        public int? MaxWidthInMM { get; set; }

        public PleuraFormType PleuraFormType { get; set; }

        public DistributionType DistributionType { get; set; }
        
        public QualityType QualityType { get; set; }

        [RadioReportId("tho_m_060405", InstanceName = nameof(PleuraFindingType.PleuralEffusion))]
        public bool IsCoagulum { get; set; }

        [RadioReportId("tho_m_060407", InstanceName = nameof(PleuraFindingType.PleuralEffusion))]
        public bool IsT1wHyperintense { get; set; }

        [RadioReportId("tho_m_060409", InstanceName = nameof(PleuraFindingType.PleuralEffusion))]
        public bool IsCMEnrichingCapsule { get; set; }

        [RadioReportId("tho_m_060502", InstanceName = nameof(PleuraFindingType.PleuralEffusion))]
        public bool IsSedimentation { get; set; }

        [RadioReportId("tho_m_060503", InstanceName = nameof(PleuraFindingType.PleuralEffusion))]
        public bool IsSplitPleuraSign { get; set; }
        #endregion

        #region PleuralThickeningMass

        public PleuralThickeningMassLocalizationType PleuralThickeningMassLocalizationType { get; set; }

        public PleuraLocalizationCraniocaudalType PleuraLocalizationCraniocaudalType { get; set; }

        [RadioReportId("tho_m_060316", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        public bool IsFissural { get; set; }

        [RadioReportId("tho_m_060317", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        public bool IsMediastinal { get; set; }

        public AngleToThoracicWallType AngleToThoracicWallType { get; set; }

        public DisplacementOfAdiposeTissueType DisplacementOfAdiposeTissueType { get; set; }

        [RadioReportId("tho_m_060328", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        public bool IsCysticChanges { get; set; }

        [RadioReportId("tho_m_060517", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        public bool IsNodularConfiguration { get; set; }

        [RadioReportId("tho_m_060518", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        public bool IsInfiltrationChestWall { get; set; }

        [RadioReportId("tho_m_060519", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        public bool IsInfiltrationOfExtrapleuralFatTissue { get; set; }

        [RadioReportId("tho_m_060520", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        public bool IsArrosionAdjacentOsseousStructures { get; set; }

        [RadioReportId("tho_m_060521", InstanceName = nameof(PleuraFindingType.PleuralThickeningMass))]
        public bool IsAssociatedFindingsHemorrhage { get; set; }

        #endregion

        #region Pneumothorax

        public PneumothoraxType PneumothoraxType { get; set; }

        public ExtensionType ExtensionType { get; set; }

        [RadioReportId("tho_m_060247", InstanceName = nameof(PleuraFindingType.Pneumothorax))]
        public int? ExpansionMaxWidthInMm { get; set; }

        [RadioReportId("tho_m_060332", InstanceName = nameof(PleuraFindingType.Pneumothorax))]
        public bool IsMediastinalshift { get; set; }

        [RadioReportId("tho_m_060203-1", InstanceName = nameof(MediastinalPleuraSiteType), IsExportable = false)]
        public PleuraSiteType MediastinalPleuraSiteType { get; set; }

        [RadioReportId("tho_m_060337", InstanceName = nameof(PleuraFindingType.Pneumothorax))]
        public bool IsAtelectasis { get; set; }

        [RadioReportId("tho_m_060338", InstanceName = nameof(PleuraFindingType.Pneumothorax))]
        public bool IsSoftTissueEmphysema { get; set; }

        [RadioReportId("tho_m_060339", InstanceName = nameof(PleuraFindingType.Pneumothorax))]
        public bool IsPneumopericardium { get; set; }

        [RadioReportId("tho_m_060340", InstanceName = nameof(PleuraFindingType.Pneumothorax))]
        public bool IsPneumomediastinum { get; set; }

        #endregion

        #region ChestWallSoftTissueMass

        public CraniocaudalType CraniocaudalType { get; set; }

        [RadioReportId("tho_m_060351", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        public SpineLocations SpineLocations { get; set; }

        [RadioReportId("tho_m_060353", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        public RibLocations RibLocations { get; set; }

        [RadioReportId("tho_m_060446", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        public bool IsCysts { get; set; }

        [RadioReportId("tho_m_060449", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        public bool IsLevel { get; set; }

        public LevelType LevelType { get; set; }

        [RadioReportId("tho_m_060538", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        public bool IsCapsule { get; set; }

        [RadioReportId("tho_m_060539", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        public bool IsSepta { get; set; }

        [RadioReportId("tho_m_060267", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        public bool IsNonDisplacing { get;set; }

        [RadioReportId("tho_m_060268", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        public bool IsSubcutaneous { get;set; }

        [RadioReportId("tho_m_060269", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        public bool IsInfiltration { get;set; }

        [RadioReportId("tho_m_060270", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        public bool IsPleura { get;set; }

        [RadioReportId("tho_m_060271", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        public bool IsPericardium { get;set; }

        [RadioReportId("tho_m_060272", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        public bool IsBone { get;set; }

        [RadioReportId("tho_m_060273", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        public bool IsLung { get;set; }

        [RadioReportId("tho_m_060274", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        public bool IsMediastinum { get;set; }

        [RadioReportId("tho_m_060275", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        public bool IsVessels { get; set; }

        [RadioReportId("tho_m_060454", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        public bool IsCutaneousThickening { get; set; }

        [RadioReportId("tho_m_060455", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        public bool IsPressureCorrosionRib { get ; set; }

        [RadioReportId("tho_m_060456", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        public bool IsSoftTissueEdema { get ; set; }

        [RadioReportId("tho_m_060457", InstanceName = nameof(PleuraFindingType.ChestWallSoftTissueMass))]
        public bool IsMuscleAtrophy { get ; set; }

        #endregion

        #region Mamma

        public VolumeType VolumeType { get; set; }

        [RadioReportId("tho_m_060293", InstanceName = nameof(PleuraFindingType.Mamma))]
        public bool IsAblatioRight { get; set; }

        [RadioReportId("tho_m_060294", InstanceName = nameof(PleuraFindingType.Mamma))]
        public bool IsAblatioLeft { get; set; }

        [RadioReportId("tho_m_060297", InstanceName = nameof(PleuraFindingType.Mamma))]
        public bool IsBreastAugmentationRight { get; set; }

        [RadioReportId("tho_m_060298", InstanceName = nameof(PleuraFindingType.Mamma))]
        public bool IsBreastAugmentationLeft { get; set; }

        [RadioReportId("tho_m_060375", InstanceName = nameof(PleuraFindingType.Mamma))]
        public bool IsThickened { get; set; }

        [RadioReportId("tho_m_060377", InstanceName = nameof(PleuraFindingType.Mamma))]
        public BreastLocations ThickenedCutisBreastLocation { get; set; }

        [RadioReportId("tho_m_060379", InstanceName = nameof(PleuraFindingType.Mamma))]
        public bool IsObscured { get; set; }

        [RadioReportId("tho_m_060381", InstanceName = nameof(PleuraFindingType.Mamma))]
        public bool IsObscuredRight { get; set; }

        [RadioReportId("tho_m_060382", InstanceName = nameof(PleuraFindingType.Mamma))]
        public bool IsObscuredLeft { get; set; }

        [RadioReportId("tho_m_060458", InstanceName = nameof(PleuraFindingType.Mamma))]
        public bool IsMass { get; set; }

        [RadioReportId("tho_m_060460", InstanceName = nameof(PleuraFindingType.Mamma))]
        public BreastLocations MassBreastLocation { get; set; }

        [RadioReportId("tho_m_060462", InstanceName = nameof(PleuraFindingType.Mamma))]
        public int? MassMaxDiameterAxialInMm { get; set; }

        [RadioReportId("tho_m_060465", InstanceName = nameof(PleuraFindingType.Mamma))]
        public MammaShapeType MammaShapeType { get; set; }

        // In mamma fiding margin is dropdown, hence lack of IsExportalbe = false
        [RadioReportId("tho_m_060467", InstanceName = nameof(PleuraFindingType.Mamma))]
        public MarginType MammaMarginType { get; set; }

        // In others is radiobutton, in mamma dropdown
        [RadioReportId("tho_m_060543", InstanceName = nameof(PleuraFindingType.Mamma))]
        public FocalSignalVoidsType MammaFocalSignalVoidsType { get; set; }

        #endregion

        #region LymphNodesAxilla

        public LymphNodesAxillaType LymphNodesAxillaType { get; set; }

        [RadioReportId("tho_m_060384", InstanceName = nameof(PleuraFindingType.LymphNodesAxilla), CustomConditionName = nameof(LymphNodesAxillaType.BorderlineCentralFatHilusPreserved))]
        [RadioReportId("tho_m_060393", InstanceName = nameof(PleuraFindingType.LymphNodesAxilla), CustomConditionName = nameof(LymphNodesAxillaType.Pathological))]
        public bool IsLymphNodeRight { get; set; }

        [RadioReportId("tho_m_060386", InstanceName = nameof(PleuraFindingType.LymphNodesAxilla), CustomConditionName = nameof(LymphNodesAxillaType.BorderlineCentralFatHilusPreserved))]
        [RadioReportId("tho_m_060395", InstanceName = nameof(PleuraFindingType.LymphNodesAxilla), CustomConditionName = nameof(LymphNodesAxillaType.Pathological))]
        public int? RightMarginalShortAxisDiameter { get; set; }

        [RadioReportId("tho_m_060388", InstanceName = nameof(PleuraFindingType.LymphNodesAxilla), CustomConditionName = nameof(LymphNodesAxillaType.BorderlineCentralFatHilusPreserved))]
        [RadioReportId("tho_m_060468", InstanceName = nameof(PleuraFindingType.LymphNodesAxilla), CustomConditionName = nameof(LymphNodesAxillaType.Pathological))]
        public bool IsLymphNodeLeft { get; set; }

        [RadioReportId("tho_m_060390", InstanceName = nameof(PleuraFindingType.LymphNodesAxilla), CustomConditionName = nameof(LymphNodesAxillaType.BorderlineCentralFatHilusPreserved))]
        [RadioReportId("tho_m_060470", InstanceName = nameof(PleuraFindingType.LymphNodesAxilla), CustomConditionName = nameof(LymphNodesAxillaType.Pathological))]
        public int? LeftMarginalShortAxisDiameter { get; set; }

        [RadioReportId("tho_m_060398", InstanceName = nameof(PleuraFindingType.LymphNodesAxilla))]
        public bool IsRightLevel1 { get; set; }

        [RadioReportId("tho_m_060399", InstanceName = nameof(PleuraFindingType.LymphNodesAxilla))]
        public bool IsRightLevel2 { get; set; }

        [RadioReportId("tho_m_0603100", InstanceName = nameof(PleuraFindingType.LymphNodesAxilla))]
        public bool IsRightLevel3 { get; set; }

        [RadioReportId("tho_m_060473", InstanceName = nameof(PleuraFindingType.LymphNodesAxilla))]
        public bool IsLeftLevel1 { get; set; }

        [RadioReportId("tho_m_060474", InstanceName = nameof(PleuraFindingType.LymphNodesAxilla))]
        public bool IsLeftLevel2 { get; set; }

        [RadioReportId("tho_m_060475", InstanceName = nameof(PleuraFindingType.LymphNodesAxilla))]
        public bool IsLeftLevel3 { get; set; }

        [RadioReportId("tho_m_060553", InstanceName = nameof(PleuraFindingType.LymphNodesAxilla))]
        public bool IsContrastEnhancement { get; set; }

        [RadioReportId("tho_m_060554", InstanceName = nameof(PleuraFindingType.LymphNodesAxilla))]
        public bool IsSignalVoid { get; set; }

        [RadioReportId("tho_m_060561", InstanceName = nameof(PleuraFindingType.LymphNodesAxilla))]
        public bool IsAbscess { get; set; }

        [RadioReportId("tho_m_060563", InstanceName = nameof(PleuraFindingType.LymphNodesAxilla))]
        public bool IsVascularContact { get; set; }

        #endregion

        #region UpperAbdomenLiverGallBladder

        [RadioReportId("tho_m_0602103", InstanceName = nameof(PleuraFindingType.UpperAbdomenLiverGallBladder))]
        public bool IsFocalLiverLesion { get; set; }

        [RadioReportId("tho_m_0602108", InstanceName = nameof(PleuraFindingType.UpperAbdomenLiverGallBladder))]
        public int? FocalLiverLesionMaxDiameterAxialInMm { get; set; }

        [RadioReportId("tho_m_0603101", InstanceName = nameof(PleuraFindingType.UpperAbdomenLiverGallBladder))]
        public bool IsDiffuseLiverLesion { get; set; }

        public DiffuseLesionType DiffuseLesionType { get; set; }

        [RadioReportId("tho_m_0603106", InstanceName = nameof(PleuraFindingType.UpperAbdomenLiverGallBladder))]
        public bool IsSuspicionOfDiffuseLiverLesion { get; set; }

        [RadioReportId("tho_m_0603107", InstanceName = nameof(PleuraFindingType.UpperAbdomenLiverGallBladder))]
        public bool IsCholecystolithiasis { get; set; }

        [RadioReportId("tho_m_0603108", InstanceName = nameof(PleuraFindingType.UpperAbdomenLiverGallBladder))]
        public bool IsWallThickeningOfTheGallBladder { get; set; }

        #endregion

        #region UpperAbdomenPancreas

        [RadioReportId("tho_m_0602115", InstanceName = nameof(PleuraFindingType.UpperAbdomenPancreas))]
        public bool IsFocalPancreaticLesion { get; set; }

        public LeasionLocalizationType LeasionLocalizationType { get; set; }

        [RadioReportId("tho_m_0602122", InstanceName = nameof(PleuraFindingType.UpperAbdomenPancreas))]
        public int? FocalPancreaticLesionMaxDiameterInMm { get; set; }

        [RadioReportId("tho_m_0603109", InstanceName = nameof(PleuraFindingType.UpperAbdomenPancreas))]
        public bool IsDiffusePancreaticLesion { get; set; }

        [RadioReportId("tho_m_0603110", InstanceName = nameof(PleuraFindingType.UpperAbdomenPancreas))]
        public bool IsFattyAtrophy { get; set; }

        [RadioReportId("tho_m_0603111", InstanceName = nameof(PleuraFindingType.UpperAbdomenPancreas))]
        public bool IsWirsungDuctDilatation { get; set; }

        #endregion

        #region UpperAbdomenKidneyAdrenalGland

        [RadioReportId("tho_m_0602129", InstanceName = nameof(PleuraFindingType.UpperAbdomenKidneyAdrenalGland))]
        public bool IsKidney { get; set; }

        [RadioReportId("tho_m_0602131", InstanceName = nameof(PleuraFindingType.UpperAbdomenKidneyAdrenalGland))]
        public bool IsKidneyFocalLesion { get; set; }

        [RadioReportId("tho_m_0602133-1", InstanceName = nameof(FocalLeasionSiteType), IsExportable = false)]
        public PleuraSiteType FocalLeasionSiteType { get; set; }

        [RadioReportId("tho_m_0602136", InstanceName = nameof(PleuraFindingType.UpperAbdomenKidneyAdrenalGland))]
        public int? KidneyFocalLesionMaxDiameterInMm { get; set; }

        [RadioReportId("tho_m_0603112", InstanceName = nameof(PleuraFindingType.UpperAbdomenKidneyAdrenalGland))]
        public bool IsUrinaryRetention { get; set; }

        [RadioReportId("tho_m_0603114", InstanceName = nameof(PleuraFindingType.UpperAbdomenKidneyAdrenalGland))]
        public bool IsUrinaryRetentionRight { get; set; }

        [RadioReportId("tho_m_0603115", InstanceName = nameof(PleuraFindingType.UpperAbdomenKidneyAdrenalGland))]
        public bool IsUrinaryRetentionLeft { get; set; }

        public GradingType GradingType { get; set; }

        [RadioReportId("tho_m_060476", InstanceName = nameof(PleuraFindingType.UpperAbdomenKidneyAdrenalGland))]
        public bool IsAdrenalGlandMass { get; set; }

        [RadioReportId("tho_m_060479-1", InstanceName = nameof(AdrenalGlandMassSiteType), IsExportable = false)]
        public PleuraSiteType AdrenalGlandMassSiteType { get; set; }

        [RadioReportId("tho_m_060481", InstanceName = nameof(PleuraFindingType.UpperAbdomenKidneyAdrenalGland))]
        public int? MassAdrenalGlandMaxDiameterInMm { get; set; }

        [RadioReportId("tho_m_060484", InstanceName = nameof(PleuraFindingType.UpperAbdomenKidneyAdrenalGland))]
        public PleuraDiagnosisType MassAdrenalGlandDifferentialDiagnosis { get; set; }

        [RadioReportId("tho_m_060485", InstanceName = nameof(PleuraFindingType.UpperAbdomenKidneyAdrenalGland))]
        public bool IsSuspicionOfMassAdrenalGland { get; set; }

        #endregion

        #region UpperAbdomenSpleenLymphNodesHernia

        [RadioReportId("tho_m_0602143", InstanceName = nameof(PleuraFindingType.UpperAbdomenSpleenLymphNodesHernia))]
        public bool IsSplenomegaly { get; set; }

        [RadioReportId("tho_m_0602144", InstanceName = nameof(PleuraFindingType.UpperAbdomenSpleenLymphNodesHernia))]
        public bool IsEnlargedAbdominalLymphNodes { get; set; }

        [RadioReportId("tho_m_0602146", InstanceName = nameof(PleuraFindingType.UpperAbdomenSpleenLymphNodesHernia))]
        public int? DiameterSADInMm { get; set; }

        [RadioReportId("tho_m_0602148", InstanceName = nameof(PleuraFindingType.UpperAbdomenSpleenLymphNodesHernia))]
        public bool IsPathological { get; set; }

        [RadioReportId("tho_m_0602149", InstanceName = nameof(PleuraFindingType.UpperAbdomenSpleenLymphNodesHernia))]
        public bool IsPathologicalMultiple { get; set; }

        [RadioReportId("tho_m_0602150", InstanceName = nameof(PleuraFindingType.UpperAbdomenSpleenLymphNodesHernia))]
        public bool IsPathologicalConglomerate { get; set; }

        [RadioReportId("tho_m_0602151", InstanceName = nameof(PleuraFindingType.UpperAbdomenSpleenLymphNodesHernia))]
        public bool IsPathologicalHiatalHernia { get; set; }

        #endregion

        #region UpperAbdomenAscites

        [RadioReportId("tho_m_0602153", InstanceName = nameof(PleuraFindingType.UpperAbdomenAscites))]
        public bool IsPerihepatic { get; set; }

        [RadioReportId("tho_m_0602154", InstanceName = nameof(PleuraFindingType.UpperAbdomenAscites))]
        public bool IsPerisplenic { get; set; }

        [RadioReportId("tho_m_0602155", InstanceName = nameof(PleuraFindingType.UpperAbdomenAscites))]
        public bool IsAscitesNotFurtherDefined { get; set; }

        #endregion

        #region Image upload
        public void DropImageFile(Guid? imageFileId = null)
        {
            ImageFileId = null;
            UploadedImageFile = null;
        }

        public Guid? GetImageFileGuid(string fileType = null) => ImageFileId;

        public void SetImageFile(ImageFile imageFile, string fileType = null)
        {
            UploadedImageFile = imageFile;
            ImageFileId = imageFile?.Id;
        }
        #endregion

        public bool CheckCondition(string customConditionId) =>
            customConditionId switch
            {
                nameof(PleuraFindingType.PleuralThickeningMass) => FindingType == PleuraFindingType.PleuralThickeningMass,
                nameof(PleuraFindingType.PleuralEffusion) => FindingType == PleuraFindingType.PleuralEffusion,
                nameof(PleuraFindingType.Pneumothorax) => FindingType == PleuraFindingType.Pneumothorax,
                nameof(PleuraFindingType.ChestWallSoftTissueMass) => FindingType == PleuraFindingType.ChestWallSoftTissueMass,
                nameof(PleuraFindingType.Mamma) => FindingType == PleuraFindingType.Mamma,
                nameof(PleuraFindingType.UpperAbdomenKidneyAdrenalGland) => FindingType == PleuraFindingType.UpperAbdomenKidneyAdrenalGland,
                nameof(PleuraFindingType.UpperAbdomenLiverGallBladder) => FindingType == PleuraFindingType.UpperAbdomenLiverGallBladder,
                nameof(LymphNodesAxillaType.BorderlineCentralFatHilusPreserved) => LymphNodesAxillaType == LymphNodesAxillaType.BorderlineCentralFatHilusPreserved,
                nameof(LymphNodesAxillaType.Pathological) => LymphNodesAxillaType == LymphNodesAxillaType.Pathological,
                _ => false
            };
    }
}
