using System;
using RadioReport.AbdomenMRT.Domain.Constants;
using RadioReport.AbdomenMRT.Domain.Enums;
using RadioReport.AbdomenMRT.Domain.Enums.Liver;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.AbdomenMRT.Domain.Models
{
    public class LiverFinding : LiverFindingBase, IImageFileContainer
    {
        #region Common

        #region Enums

        [RadioReportId("abd_m_040109-l", InstanceName = nameof(InstanceNames.Liver), IsExportable = false)]
        public DescriptionType DescriptionType { get; set; }

        [RadioReportId("abd_m_040228", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        [RadioReportId("abd_m_040251", InstanceName = nameof(LiverFindingType.DiffuseParenchymalChanges))]
        [RadioReportId("abd_m_040541", InstanceName = nameof(LiverFindingType.GallbladderWallThickening))]
        [RadioReportId("abd_m_040546", InstanceName = nameof(LiverFindingType.BiliaryDuctalDilatation))]
        [RadioReportId("abd_m_040399", InstanceName = nameof(LiverFindingType.BileDuctMass))]
        public LiverDifferentialDiagnosisType DifferentialDiagnosis1 { get; set; }

        [RadioReportId("abd_m_040231", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        [RadioReportId("abd_m_040252", InstanceName = nameof(LiverFindingType.DiffuseParenchymalChanges))]
        [RadioReportId("abd_m_040544", InstanceName = nameof(LiverFindingType.GallbladderWallThickening))]
        [RadioReportId("abd_m_040547", InstanceName = nameof(LiverFindingType.BiliaryDuctalDilatation))]
        [RadioReportId("abd_m_0403102", InstanceName = nameof(LiverFindingType.BileDuctMass))]
        public LiverDifferentialDiagnosisType DifferentialDiagnosis2 { get; set; }

        [RadioReportId("abd_m_040234", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        public LiverDifferentialDiagnosisType DifferentialDiagnosis3 { get; set; }

        [RadioReportId("abd_m_040311", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        public LiverSegmentsLocations LiverSegmentsLocations { get; set; }

        [RadioReportId("abd_m_0402142", InstanceName = nameof(LiverFindingType.BiliaryDuctalDilatation))]
        [RadioReportId("abd_m_0402142", InstanceName = nameof(LiverFindingType.BileDuctLeakage))]
        [RadioReportId("abd_m_0402142", InstanceName = nameof(LiverFindingType.BileDuctMass))]
        public LiverPathologyLocations LiverPathologyLocations { get; set; }

        [RadioReportId("abd_m_0403110", InstanceName = nameof(LiverFindingType.BiliaryDuctalDilatation))]
        public LiverPathologyLocations LiverPathologyLocations2 { get; set; }

        #endregion

        #region booleans

        [RadioReportId("abd_m_040213", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        [RadioReportId("abd_m_040440", InstanceName = nameof(LiverFindingType.DiffuseParenchymalChanges))]
        public bool IsSignalDropInChemicalShift { get; set; }

        [RadioReportId("abd_m_040215", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        [RadioReportId("abd_m_040442", InstanceName = nameof(LiverFindingType.DiffuseParenchymalChanges))]
        [RadioReportId("abd_m_040383", InstanceName = nameof(LiverFindingType.BileDuctLeakage))]
        public bool IsDiffusionRestriction { get; set; }

        [RadioReportId("abd_m_040322", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        [RadioReportId("abd_m_040382", InstanceName = nameof(LiverFindingType.BileDuctLeakage))]
        public bool IsPeripheralEnhancement { get; set; }

        [RadioReportId("abd_m_040520", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        [RadioReportId("abd_m_0402133", InstanceName = nameof(LiverFindingType.BileDuctMass))]
        public bool IsPortalVeinRightBranch { get; set; }

        [RadioReportId("abd_m_040522", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        [RadioReportId("abd_m_0402134", InstanceName = nameof(LiverFindingType.BileDuctMass))]
        public bool IsPortalVeinLeftBranch { get; set; }

        [RadioReportId("abd_m_040229", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        [RadioReportId("abd_m_040229", InstanceName = nameof(LiverFindingType.DiffuseParenchymalChanges))]
        [RadioReportId("abd_m_040542", InstanceName = nameof(LiverFindingType.GallbladderWallThickening))]
        [RadioReportId("abd_m_040542", InstanceName = nameof(LiverFindingType.BiliaryDuctalDilatation))]
        [RadioReportId("abd_m_0403100", InstanceName = nameof(LiverFindingType.BileDuctMass))]
        public bool IsSuspicionOf { get; set; }

        [RadioReportId("abd_m_040232", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        [RadioReportId("abd_m_040232", InstanceName = nameof(LiverFindingType.DiffuseParenchymalChanges))]
        [RadioReportId("abd_m_040545", InstanceName = nameof(LiverFindingType.GallbladderWallThickening))]
        [RadioReportId("abd_m_040545", InstanceName = nameof(LiverFindingType.BiliaryDuctalDilatation))]
        [RadioReportId("abd_m_0403103", InstanceName = nameof(LiverFindingType.BileDuctMass))]
        public bool IsSubordinate { get; set; }

        [RadioReportId("abd_m_040499", InstanceName = nameof(LiverFindingType.GallbladderWallThickening))]
        [RadioReportId("abd_m_0402129", InstanceName = nameof(LiverFindingType.BileDuctMass))]
        [RadioReportId("abd_m_0402139", InstanceName = nameof(LiverFindingType.VascularNormVariants))]
        public bool IsCommonHepaticArtery { get; set; }

        [RadioReportId("abd_m_0404101", InstanceName = nameof(LiverFindingType.GallbladderWallThickening))]
        [RadioReportId("abd_m_0402130", InstanceName = nameof(LiverFindingType.BileDuctMass))]
        [RadioReportId("abd_m_0403105", InstanceName = nameof(LiverFindingType.VascularNormVariants))]
        public bool IsRightHepaticArtery { get; set; }

        [RadioReportId("abd_m_0404102", InstanceName = nameof(LiverFindingType.GallbladderWallThickening))]
        [RadioReportId("abd_m_0402131", InstanceName = nameof(LiverFindingType.BileDuctMass))]
        [RadioReportId("abd_m_0403106", InstanceName = nameof(LiverFindingType.VascularNormVariants))]
        public bool IsLeftHepaticArtery { get; set; }

        [RadioReportId("abd_m_0402100", InstanceName = nameof(LiverFindingType.BiliaryDuctalDilatation))]
        [RadioReportId("abd_m_040386", InstanceName = nameof(LiverFindingType.BileDuctLeakage))]
        public bool IsIntrahepatic { get; set; }

        #endregion

        #region Other

        [RadioReportId("abd_m_040404", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        [RadioReportId("abd_m_040259", InstanceName = nameof(LiverFindingType.GallbladderHydrops))]
        [RadioReportId("abd_m_040448", InstanceName = nameof(LiverFindingType.GallbladderStone))]
        [RadioReportId("abd_m_0402103", InstanceName = nameof(LiverFindingType.BiliaryDuctalDilatation))]
        [RadioReportId("abd_m_040474", InstanceName = nameof(LiverFindingType.BileDuctLeakage))]
        [RadioReportId("abd_m_040389", InstanceName = nameof(LiverFindingType.BileDuctMass))]
        public int? SizeInMm { get; set; }

        [RadioReportId("abd_m_040407", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        [RadioReportId("abd_m_040262", InstanceName = nameof(LiverFindingType.GallbladderHydrops))]
        [RadioReportId("abd_m_040477", InstanceName = nameof(LiverFindingType.BileDuctLeakage))]
        [RadioReportId("abd_m_040392", InstanceName = nameof(LiverFindingType.BileDuctMass))]
        public int? SecondPlaneInMm { get; set; }

        [RadioReportId("abd_m_040410", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        [RadioReportId("abd_m_040265", InstanceName = nameof(LiverFindingType.GallbladderHydrops))]
        [RadioReportId("abd_m_040480", InstanceName = nameof(LiverFindingType.BileDuctLeakage))]
        [RadioReportId("abd_m_040395", InstanceName = nameof(LiverFindingType.BileDuctMass))]
        public int? ThirdPlaneInMm { get; set; }

        #endregion

        #region IMAGE FILE
        public Guid? ImageFileId { get; set; }

        [RadioReportId("uni_04_007", InstanceName = "AbdomenMRT.Liver.LiverFinding", IsExportable = false)]
        public ImageFile UploadedImageFile { get; set; }

        public void DropImageFile(Guid? imageFileId = null)
        {
            ImageFileId = null;
            UploadedImageFile = null;
        }

        public Guid? GetImageFileGuid(string fileType = null) => ImageFileId;

        public void SetImageFile(ImageFile imageFile, string fileType = null)
        {
            ImageFileId = imageFile?.Id;
            UploadedImageFile = imageFile;
        }

        [RadioReportId("uni_04_003")]
        public string SerialNumber { get; set; }

        [RadioReportId("uni_04_005")]
        public string PictureNumber { get; set; }

        #endregion

        #endregion

        #region FocalLiverLesion

        [RadioReportId("abd_m_040205", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        public bool IsHistologyKnown { get; set; }

        public HistologyKnownType HistologyKnownType { get; set; }

        [RadioReportId("abd_m_040307", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        public bool IsLeftLobeOfLiver { get; set; }

        [RadioReportId("abd_m_040308", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        public bool IsLobusCaudatus { get; set; }

        [RadioReportId("abd_m_040309", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        public bool IsLobusQuadratus { get; set; }

        public MarginType MarginType { get; set; }

        public FormType FormType { get; set; }

        [RadioReportId("abd_m_040415", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        public SignalTypeExtended Equilibrium { get; set; }

        [RadioReportId("abd_m_040217", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        public bool IsCottonWoolAppearance { get; set; }

        [RadioReportId("abd_m_040218", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        public bool IsCentripetalFillInIrisDiaphragmPhenomenon { get; set; }

        [RadioReportId("abd_m_040219", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        public bool IsTriangleSign { get; set; }

        [RadioReportId("abd_m_040220", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        public bool IsEnhancementToHepaticVeins { get; set; }

        [RadioReportId("abd_m_040221", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        public bool IsCentrifugalEnhancement { get; set; }

        [RadioReportId("abd_m_040319", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        public bool IsWashOutVenousPhase { get; set; }

        [RadioReportId("abd_m_040321", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        public bool IsRingTargetSign { get; set; }

        [RadioReportId("abd_m_040324", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        public bool IsFadingEnhancement { get; set; }

        public FatType FatType { get; set; }

        [RadioReportId("abd_m_040421", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        public bool IsSepts { get; set; }

        [RadioReportId("abd_m_040424", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        public bool IsFluidCsfIsointens { get; set; }

        [RadioReportId("abd_m_040425", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        public bool IsPeripheralMembrane { get; set; }

        [RadioReportId("abd_m_040521", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        public bool IsPortalVeinProximal { get; set; }

        [RadioReportId("abd_m_040523", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        public bool IsRightHepaticVein { get; set; }

        [RadioReportId("abd_m_040524", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        public bool IsMiddleHepaticVein { get; set; }

        [RadioReportId("abd_m_040525", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        public bool IsLeftHepaticVein { get; set; }

        [RadioReportId("abd_m_040527", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        public bool IsAssociatedCholestasis { get; set; }

        [RadioReportId("abd_m_040528", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        public bool IsRightHepaticDuct { get; set; }

        [RadioReportId("abd_m_040529", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        public bool IsLeftHepaticDuct { get; set; }

        [RadioReportId("abd_m_040530", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        public bool IsCommonHepaticDuct { get; set; }

        [RadioReportId("abd_m_040531", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        public bool IsGallBladder { get; set; }

        [RadioReportId("abd_m_040235", InstanceName = nameof(LiverFindingType.FocalLiverLesion))]
        public bool IsMoreThanOneLesionOfTheSameEntity { get; set; }

        #endregion

        #region DiffuseParenchymalChanges

        [RadioReportId("abd_m_040238", InstanceName = nameof(LiverFindingType.DiffuseParenchymalChanges))]
        public bool IsHypertrophyLeftLiverLobe { get; set; }

        [RadioReportId("abd_m_040239", InstanceName = nameof(LiverFindingType.DiffuseParenchymalChanges))]
        public bool IsHypertrophyCaudateLobe { get; set; }

        [RadioReportId("abd_m_040240", InstanceName = nameof(LiverFindingType.DiffuseParenchymalChanges))]
        public bool IsHepaticFissureWidening { get; set; }

        [RadioReportId("abd_m_040241", InstanceName = nameof(LiverFindingType.DiffuseParenchymalChanges))]
        public bool IsNodularSurface { get; set; }

        public NodularSurfaceType NodularSurfaceType { get; set; }

        [RadioReportId("abd_m_040326", InstanceName = nameof(LiverFindingType.DiffuseParenchymalChanges))]
        public bool IsCorkscrewLikeHepaticArtery { get; set; }

        [RadioReportId("abd_m_040327", InstanceName = nameof(LiverFindingType.DiffuseParenchymalChanges))]
        public bool IsVPortaeDilatation { get; set; }

        [RadioReportId("abd_m_040328", InstanceName = nameof(LiverFindingType.DiffuseParenchymalChanges))]
        public bool IsVPortaeThrombosis { get; set; }

        [RadioReportId("abd_m_040329", InstanceName = nameof(LiverFindingType.DiffuseParenchymalChanges))]
        public bool IsCentral { get; set; }

        [RadioReportId("abd_m_040330", InstanceName = nameof(LiverFindingType.DiffuseParenchymalChanges))]
        public bool IsRightPortalVein { get; set; }

        [RadioReportId("abd_m_040331", InstanceName = nameof(LiverFindingType.DiffuseParenchymalChanges))]
        public bool IsLeftPortalVein { get; set; }

        [RadioReportId("abd_m_040332", InstanceName = nameof(LiverFindingType.DiffuseParenchymalChanges))]
        public bool IsSubocclusive { get; set; }

        [RadioReportId("abd_m_040333", InstanceName = nameof(LiverFindingType.DiffuseParenchymalChanges))]
        public bool IsCollateralization { get; set; }

        [RadioReportId("abd_m_040334", InstanceName = nameof(LiverFindingType.DiffuseParenchymalChanges))]
        public bool IsCavernousPortalVein { get; set; }

        [RadioReportId("abd_m_040428", InstanceName = nameof(LiverFindingType.DiffuseParenchymalChanges))]
        public bool IsHepaticVeins { get; set; }

        [RadioReportId("abd_m_040429", InstanceName = nameof(LiverFindingType.DiffuseParenchymalChanges))]
        public bool IsHepaticVeinsNotEvaluable { get; set; }

        [RadioReportId("abd_m_040430", InstanceName = nameof(LiverFindingType.DiffuseParenchymalChanges))]
        public bool IsThrombosis { get; set; }

        [RadioReportId("abd_m_040431", InstanceName = nameof(LiverFindingType.DiffuseParenchymalChanges))]
        public bool IsComplete { get; set; }

        [RadioReportId("abd_m_040432", InstanceName = nameof(LiverFindingType.DiffuseParenchymalChanges))]
        public bool IsPartial { get; set; }

        [RadioReportId("abd_m_040433", InstanceName = nameof(LiverFindingType.DiffuseParenchymalChanges))]
        public bool IsOcclusion { get; set; }

        [RadioReportId("abd_m_040434", InstanceName = nameof(LiverFindingType.DiffuseParenchymalChanges))]
        public bool IsDilatation { get; set; }

        [RadioReportId("abd_m_040435", InstanceName = nameof(LiverFindingType.DiffuseParenchymalChanges))]
        public bool IsArteriovenousShunts { get; set; }

        [RadioReportId("abd_m_040436", InstanceName = nameof(LiverFindingType.DiffuseParenchymalChanges))]
        public bool IsArterioportalShunts { get; set; }

        [RadioReportId("abd_m_040437", InstanceName = nameof(LiverFindingType.DiffuseParenchymalChanges))]
        public bool IsPortovenousShunts { get; set; }

        [RadioReportId("abd_m_040533", InstanceName = nameof(LiverFindingType.DiffuseParenchymalChanges))]
        public bool IsPeriosophageal { get; set; }

        [RadioReportId("abd_m_040534", InstanceName = nameof(LiverFindingType.DiffuseParenchymalChanges))]
        public bool IsPerisplenic { get; set; }

        [RadioReportId("abd_m_040535", InstanceName = nameof(LiverFindingType.DiffuseParenchymalChanges))]
        public bool IsPerigastric { get; set; }

        [RadioReportId("abd_m_040536", InstanceName = nameof(LiverFindingType.DiffuseParenchymalChanges))]
        public bool IsParaumbilical { get; set; }

        [RadioReportId("abd_m_040537", InstanceName = nameof(LiverFindingType.DiffuseParenchymalChanges))]
        public bool IsRetroperitoneal { get; set; }

        [RadioReportId("abd_m_040538", InstanceName = nameof(LiverFindingType.DiffuseParenchymalChanges))]
        public bool IsRecanalizedUmbilicalVein { get; set; }

        [RadioReportId("abd_m_040245", InstanceName = nameof(LiverFindingType.DiffuseParenchymalChanges))]
        public bool IsAscites { get; set; }

        public AscitesType AscitesType { get; set; }

        [RadioReportId("abd_m_040248", InstanceName = nameof(LiverFindingType.DiffuseParenchymalChanges))]
        public bool IsFibrosis { get; set; }

        [RadioReportId("abd_m_040249", InstanceName = nameof(LiverFindingType.DiffuseParenchymalChanges))]
        public bool IsConfluent { get; set; }

        [RadioReportId("abd_m_040250", InstanceName = nameof(LiverFindingType.DiffuseParenchymalChanges))]
        public bool IsWedgeShapedExtensionToPeriphery { get; set; }

        [RadioReportId("abd_m_040341", InstanceName = nameof(LiverFindingType.DiffuseParenchymalChanges))]
        public bool IsSignalDrop { get; set; }

        public SignalDropType SignalDropType { get; set; }

        #endregion

        #region GallbladderNormVariantPostoperative
        public GallbladderNormVariantPostoperativeType GallbladderNormVariantPostoperativeType { get; set; }

        #endregion

        #region GallbladderStone
        public TopographyConcrementsType TopographyConcrementsType { get; set; }

        [RadioReportId("abd_m_040347", InstanceName = nameof(LiverFindingType.GallbladderStone))]
        public bool IsObstructive { get; set; }

        [RadioReportId("abd_m_040348", InstanceName = nameof(LiverFindingType.GallbladderStone))]
        public bool IsIntrahepaticBileDuctDilatation { get; set; }

        [RadioReportId("abd_m_040349", InstanceName = nameof(LiverFindingType.GallbladderStone))]
        public bool IsMirizziSyndrome { get; set; }

        public ClassificationAccordingToMcsherryType ClassificationMcsherryType { get; set; }

        public DetailsStoneType DetailsStoneType { get; set; }

        #endregion

        #region GallbladderWallThickening

        [RadioReportId("abd_m_040272", InstanceName = nameof(LiverFindingType.GallbladderWallThickening))]
        public bool IsNeckCollum { get; set; }

        [RadioReportId("abd_m_040273", InstanceName = nameof(LiverFindingType.GallbladderWallThickening))]
        public bool IsBodyCorpus { get; set; }

        [RadioReportId("abd_m_040274", InstanceName = nameof(LiverFindingType.GallbladderWallThickening))]
        public bool IsBaseOfBladderFundus { get; set; }

        [RadioReportId("abd_m_040275", InstanceName = nameof(LiverFindingType.GallbladderWallThickening))]
        public bool IsCysticDuct { get; set; }

        public CharacteristicsType CharacteristicsType { get; set; }

        [RadioReportId("abd_m_040280", InstanceName = nameof(LiverFindingType.GallbladderWallThickening))]
        public int? MaxWallThicknessInMm { get; set; }

        [RadioReportId("abd_m_040354", InstanceName = nameof(LiverFindingType.GallbladderWallThickening))]
        public bool IsPeriportalEdema { get; set; }

        [RadioReportId("abd_m_040355", InstanceName = nameof(LiverFindingType.GallbladderWallThickening))]
        public bool IsIncreasedGallbladderWallEnhancement { get; set; }

        [RadioReportId("abd_m_040356", InstanceName = nameof(LiverFindingType.GallbladderWallThickening))]
        public bool IsIncreasedContrastEnhancementLiverParenchyma { get; set; }

        [RadioReportId("abd_m_040357", InstanceName = nameof(LiverFindingType.GallbladderWallThickening))]
        public bool IsWallDiscontinuity { get; set; }

        [RadioReportId("abd_m_040358", InstanceName = nameof(LiverFindingType.GallbladderWallThickening))]
        public bool IsIntramuralRokitanskyAschoff { get; set; }

        [RadioReportId("abd_m_040359", InstanceName = nameof(LiverFindingType.GallbladderWallThickening))]
        public bool IsPearlNecklaceSign { get; set; }

        [RadioReportId("abd_m_040360", InstanceName = nameof(LiverFindingType.GallbladderWallThickening))]
        public bool IsIntramuralGranulomas { get; set; }

        [RadioReportId("abd_m_040361", InstanceName = nameof(LiverFindingType.GallbladderWallThickening))]
        public bool IsIntraluminalPolypoidMass { get; set; }

        [RadioReportId("abd_m_040362", InstanceName = nameof(LiverFindingType.GallbladderWallThickening))]
        public bool IsMuralCalcification { get; set; }

        [RadioReportId("abd_m_040451", InstanceName = nameof(LiverFindingType.GallbladderWallThickening))]
        public bool IsLiver { get; set; }

        [RadioReportId("abd_m_040452", InstanceName = nameof(LiverFindingType.GallbladderWallThickening))]
        public bool IsStomach { get; set; }

        [RadioReportId("abd_m_040453", InstanceName = nameof(LiverFindingType.GallbladderWallThickening))]
        public bool IsIntestine { get; set; }

        [RadioReportId("abd_m_040454", InstanceName = nameof(LiverFindingType.GallbladderWallThickening))]
        public bool IsPancreas { get; set; }

        [RadioReportId("abd_m_040455", InstanceName = nameof(LiverFindingType.GallbladderWallThickening))]
        public bool IsHepaticArtery { get; set; }

        [RadioReportId("abd_m_0404100", InstanceName = nameof(LiverFindingType.GallbladderWallThickening))]
        public bool IsProperHepaticArtery { get; set; }

        [RadioReportId("abd_m_040456", InstanceName = nameof(LiverFindingType.GallbladderWallThickening))]
        public bool IsPortalVein { get; set; }

        #endregion

        #region BileDuctNormVariant

        [RadioReportId("abd_m_040283", InstanceName = nameof(LiverFindingType.BileDuctNormVariant))]
        public bool IsShortRightHepaticDuct { get; set; }

        [RadioReportId("abd_m_040284", InstanceName = nameof(LiverFindingType.BileDuctNormVariant))]
        public bool IsHuangClassification { get; set; }

        [RadioReportId("abd_m_040285", InstanceName = nameof(LiverFindingType.BileDuctNormVariant))]
        public HuangClassificationType HuangClassificationType { get; set; }

        #endregion

        #region BiliaryDuctalDilatation

        [RadioReportId("abd_m_040364", InstanceName = nameof(LiverFindingType.BiliaryDuctalDilatation))]
        public int? MaxWidthOfTheCommonBileDuctInMm { get; set; }

        [RadioReportId("abd_m_040367", InstanceName = nameof(LiverFindingType.BiliaryDuctalDilatation))]
        public int? MaxWidthOfTheIntrahepaticInMm { get; set; }

        [RadioReportId("abd_m_040458", InstanceName = nameof(LiverFindingType.BiliaryDuctalDilatation))]
        public bool IsDoubleDuctSign { get; set; }

        [RadioReportId("abd_m_040459", InstanceName = nameof(LiverFindingType.BiliaryDuctalDilatation))]
        public bool IsMultifocalDilatationOfBileDucts { get; set; }

        [RadioReportId("abd_m_040460", InstanceName = nameof(LiverFindingType.BiliaryDuctalDilatation))]
        public bool IsCysticDilatationsOfBileDucts { get; set; }

        [RadioReportId("abd_m_040461", InstanceName = nameof(LiverFindingType.BiliaryDuctalDilatation))]
        public bool IsCaliberVariations { get; set; }

        [RadioReportId("abd_m_040462", InstanceName = nameof(LiverFindingType.BiliaryDuctalDilatation))]
        public bool IsConcentricWallThickening { get; set; }

        [RadioReportId("abd_m_040463", InstanceName = nameof(LiverFindingType.BiliaryDuctalDilatation))]
        public bool IsStringOfPearlsConfiguration { get; set; }

        [RadioReportId("abd_m_040464", InstanceName = nameof(LiverFindingType.BiliaryDuctalDilatation))]
        public bool IsWallEnhancement { get; set; }

        [RadioReportId("abd_m_040298", InstanceName = nameof(LiverFindingType.BiliaryDuctalDilatation))]
        public bool IsIntrahepaticStone { get; set; }

        [RadioReportId("abd_m_0402101", InstanceName = nameof(LiverFindingType.BiliaryDuctalDilatation))]
        public bool IsIntraductal { get; set; }

        [RadioReportId("abd_m_0402105", InstanceName = nameof(LiverFindingType.BiliaryDuctalDilatation))]
        public bool IsCholangitis { get; set; }

        [RadioReportId("abd_m_0402144", InstanceName = nameof(LiverFindingType.BiliaryDuctalDilatation))]
        public bool IsPusInTheBileDuct { get; set; }

        [RadioReportId("abd_m_0402106", InstanceName = nameof(LiverFindingType.BiliaryDuctalDilatation))]
        public bool IsAbscess { get; set; }

        [RadioReportId("abd_m_0402108", InstanceName = nameof(LiverFindingType.BiliaryDuctalDilatation))]
        public int? ExtensionInMm { get; set; }

        [RadioReportId("abd_m_0402145", InstanceName = nameof(LiverFindingType.BiliaryDuctalDilatation))]
        public bool IsAerobilia { get; set; }

        [RadioReportId("abd_m_0403109", InstanceName = nameof(LiverFindingType.BiliaryDuctalDilatation))]
        public bool IsStricture { get; set; }

        [RadioReportId("abd_m_040468", InstanceName = nameof(LiverFindingType.BiliaryDuctalDilatation))]
        public int? LengthOfStrictureInMm { get; set; }

        [RadioReportId("abd_m_040470", InstanceName = nameof(LiverFindingType.BiliaryDuctalDilatation))]
        public bool IsPseudostricture { get; set; }

        [RadioReportId("abd_m_040471", InstanceName = nameof(LiverFindingType.BiliaryDuctalDilatation))]
        public bool IsPseudostrictureSuspicionOf { get; set; }

        #endregion

        #region BileDuctLeakage

        public ExtensionType ExtensionType { get; set; }

        [RadioReportId("abd_m_040378", InstanceName = nameof(LiverFindingType.BileDuctLeakage))]
        public bool IsAdjacentFluidFormation { get; set; }

        [RadioReportId("abd_m_040380", InstanceName = nameof(LiverFindingType.BileDuctLeakage))]
        public bool IsEncapsulation { get; set; }

        [RadioReportId("abd_m_040381", InstanceName = nameof(LiverFindingType.BileDuctLeakage))]
        public bool IsGasInclusion { get; set; }

        [RadioReportId("abd_m_040385", InstanceName = nameof(LiverFindingType.BileDuctLeakage))]
        public bool IsExtrahepatic { get; set; }

        [RadioReportId("abd_m_040555", InstanceName = nameof(LiverFindingType.BileDuctLeakage))]
        public bool IsSignsOfInfection { get; set; }

        #endregion

        #region BileDuctMass

        [RadioReportId("abd_m_040483", InstanceName = nameof(LiverFindingType.BileDuctMass))]
        public bool IsLongSegmentalStricture { get; set; }

        [RadioReportId("abd_m_040484", InstanceName = nameof(LiverFindingType.BileDuctMass))]
        public bool IsIrregularWallThickening { get; set; }

        [RadioReportId("abd_m_040485", InstanceName = nameof(LiverFindingType.BileDuctMass))]
        public bool IsLateEnhancementOfTheMassWallThickening { get; set; }

        [RadioReportId("abd_m_040486", InstanceName = nameof(LiverFindingType.BileDuctMass))]
        public bool IsAbsenceOfWashout { get; set; }

        [RadioReportId("abd_m_040487", InstanceName = nameof(LiverFindingType.BileDuctMass))]
        public bool IsCapsularRetraction { get; set; }

        public GrowthPatternType GrowthPatternType { get; set; }

        [RadioReportId("abd_m_0402132", InstanceName = nameof(LiverFindingType.BileDuctMass))]
        public bool IsVPortaeProximal { get; set; }

        [RadioReportId("abd_m_0402135", InstanceName = nameof(LiverFindingType.BileDuctMass))]
        public bool IsInferiorVenaCava { get; set; }

        [RadioReportId("abd_m_0402136", InstanceName = nameof(LiverFindingType.BileDuctMass))]
        public bool IsLiverCapsule { get; set; }

        public ClassificationCorletteType ClassificationCorletteType { get; set; }

        #endregion

        #region VascularNormVariants

        [RadioReportId("abd_m_0402140", InstanceName = nameof(LiverFindingType.VascularNormVariants))]
        public bool IsCommonOriginOfCeliacArtery { get; set; }

        [RadioReportId("abd_m_0403107", InstanceName = nameof(LiverFindingType.VascularNormVariants))]
        public bool IsTrifurcationHepaticArtery { get; set; }

        [RadioReportId("abd_m_0403108", InstanceName = nameof(LiverFindingType.VascularNormVariants))]
        public bool IsGastroduodenalArtery { get; set; }

        [RadioReportId("abd_m_040496", InstanceName = nameof(LiverFindingType.VascularNormVariants))]
        public bool IsTruncusIncompletus { get; set; }

        [RadioReportId("abd_m_040497", InstanceName = nameof(LiverFindingType.VascularNormVariants))]
        public bool IsTruncusCompletus { get; set; }

        #endregion


    }
}