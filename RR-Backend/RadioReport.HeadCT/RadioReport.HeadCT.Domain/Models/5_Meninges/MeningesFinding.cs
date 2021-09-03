using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.HeadCT.Domain.Constants;
using RadioReport.HeadCT.Domain.Enums;
using RadioReport.HeadCT.Domain.Enums.Meninges;
using System;

namespace RadioReport.HeadCT.Domain.Models
{
    public class MeningesFinding : FindingBase, IRadioReportIdConditionEvaluator, IImageFileContainer
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("hea_c_050106")]
        public MeningesFindingType FindingType { get; set; }

        #region Common

        #region ImageFile

        [RadioReportId("uni_05_003")]
        public string SerialNumber { get; set; }

        [RadioReportId("uni_05_005")]
        public string PictureNumber { get; set; }

        public Guid? ImageFileId { get; set; }

        [RadioReportId("uni_05_007-l", InstanceName = "HeadCT.Meninges.MeningesFinding", IsExportable = false)]
        public ImageFile ImageFile { get; set; }

        public void SetImageFile(ImageFile imageFile, string fileType = null)
        {
            ImageFileId = imageFile?.Id;
            ImageFile = imageFile;
        }

        public Guid? GetImageFileGuid(string fileType = null) => ImageFileId;

        public void DropImageFile(Guid? imageFileId = null)
        {
            ImageFileId = null;
            ImageFile = null;
        }

        #endregion

        [RadioReportId("hea_c_050209", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_c_050246", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        [RadioReportId("hea_c_050274", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        [RadioReportId("hea_c_050290", InstanceName = nameof(MeningesFindingType.EpiduralHematoma))]
        public bool IsRight { get; set; }

        [RadioReportId("hea_c_050210", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_c_050247", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        [RadioReportId("hea_c_050275", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        [RadioReportId("hea_c_050291", InstanceName = nameof(MeningesFindingType.EpiduralHematoma))]
        public bool IsLeft { get; set; }

        [RadioReportId("hea_c_050211", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_c_050248", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        [RadioReportId("hea_c_050276", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        [RadioReportId("hea_c_050292", InstanceName = nameof(MeningesFindingType.EpiduralHematoma))]
        public bool IsMedian { get; set; }

        [RadioReportId("hea_c_050303", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_c_050250", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        [RadioReportId("hea_c_050278", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        [RadioReportId("hea_c_050294", InstanceName = nameof(MeningesFindingType.EpiduralHematoma))]
        public bool IsFrontal { get; set; }

        [RadioReportId("hea_c_050304", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_c_050251", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        [RadioReportId("hea_c_050279", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        [RadioReportId("hea_c_050295", InstanceName = nameof(MeningesFindingType.EpiduralHematoma))]
        public bool IsTemporal { get; set; }

        [RadioReportId("hea_c_050305", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_c_050252", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        [RadioReportId("hea_c_050280", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        [RadioReportId("hea_c_050296", InstanceName = nameof(MeningesFindingType.EpiduralHematoma))]
        public bool IsParietal { get; set; }

        [RadioReportId("hea_c_050306", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_c_050253", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        [RadioReportId("hea_c_050281", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        [RadioReportId("hea_c_050297", InstanceName = nameof(MeningesFindingType.EpiduralHematoma))]
        public bool IsOccipital { get; set; }

        [RadioReportId("hea_c_050307", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_c_050254", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        [RadioReportId("hea_c_050282", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        [RadioReportId("hea_c_050298", InstanceName = nameof(MeningesFindingType.EpiduralHematoma))]
        public bool IsInfratentorial { get; set; }

        [RadioReportId("hea_c_050403", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_c_050328", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsFalx { get; set; }

        [RadioReportId("hea_c_050404", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_c_050329", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsTentorium { get; set; }

        [RadioReportId("hea_c_050405", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_c_050330", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsLaminaCribrosa { get; set; }

        [RadioReportId("hea_c_050406", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_c_050331", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsOpticNerveSheath { get; set; }

        [RadioReportId("hea_c_050407", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_c_050332", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsIntrasellar { get; set; }

        [RadioReportId("hea_c_0504214", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_c_0503213", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsSkullBase { get; set; }

        [RadioReportId("hea_c_050408", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_c_050333", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsPosteriorClinoidProcess { get; set; }

        [RadioReportId("hea_c_050409", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_c_050334", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsSphenoidWing { get; set; }

        [RadioReportId("hea_c_050410", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_c_050335", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsCerebellopontineAngle { get; set; }

        [RadioReportId("hea_c_0505219", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_c_0504222", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsSigmoidSulcus { get; set; }

        [RadioReportId("hea_c_0505220", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_c_0504223", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsTrigoneOfTheLateralVentricle { get; set; }

        [RadioReportId("hea_c_0505221", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_c_0504224", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsInsularCistern { get; set; }

        [RadioReportId("hea_c_0505222", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_c_0504225", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsForamenMagnum { get; set; }

        [RadioReportId("hea_c_0505223", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_c_0504226", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsJugularForamen { get; set; }

        [RadioReportId("hea_c_050214", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_c_050476", InstanceName = nameof(MeningesFindingType.EpiduralHematoma))]
        public int? SizeInMm { get; set; }

        [RadioReportId("hea_c_050217", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_c_0504245", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        [RadioReportId("hea_c_050479", InstanceName = nameof(MeningesFindingType.EpiduralHematoma))]
        public int? SecondPlaneInMm { get; set; }

        [RadioReportId("hea_c_050220", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_c_050482", InstanceName = nameof(MeningesFindingType.EpiduralHematoma))]
        public int? ThirdPlaneInMm { get; set; }

        [RadioReportId("hea_c_0504215-l", InstanceName = nameof(InstanceNames.Meninges), IsExportable = false)]
        public DensityType DensityType { get; set; }

        [RadioReportId("hea_c_0504220", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_c_0504232", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public int? QuantitativeInHu { get; set; }

        [RadioReportId("hea_c_0502201", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_c_0503214", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsFat { get; set; }

        [RadioReportId("hea_c_0502204", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_c_0503215", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsCysticParts { get; set; }

        public CysticPartsType CysticPartsType { get; set; }

        [RadioReportId("hea_c_0502213", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_c_0503218", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsSolidParts { get; set; }

        [RadioReportId("hea_c_0502214", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_c_0503219", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsHemorrhage { get; set; }

        [RadioReportId("hea_c_0502208", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_c_0503220", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsCapsule { get; set; }

        [RadioReportId("hea_c_0502209", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_c_0503221", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsSepta { get; set; }

        [RadioReportId("hea_c_0502210", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_c_0503222", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsNecrosis { get; set; }

        [RadioReportId("hea_c_0502211", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_c_0503223", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsCalcification { get; set; }

        [RadioReportId("hea_c_050428-l", InstanceName = InstanceNames.Meninges, IsExportable = false)]
        public ContrastEnhancementType ContrastEnhancementType { get; set; }

        [RadioReportId("hea_c_050428-l", InstanceName = nameof(MeningesFinding) + nameof(ContrastEnhancementHomogeneityType), IsExportable = false)]
        public HomogeneityType ContrastEnhancementHomogeneityType { get; set; }

        [RadioReportId("hea_c_050236", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_c_050267", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public MeningesDiagnosisType DifferentialDiagnosis1 { get; set; }

        [RadioReportId("hea_c_050237", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_c_050268", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsSuspicionOf { get; set; }

        [RadioReportId("hea_c_050239", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_c_050270", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public MeningesDiagnosisType DifferentialDiagnosis2 { get; set; }

        [RadioReportId("hea_c_050240", InstanceName = nameof(MeningesFindingType.Mass))]
        [RadioReportId("hea_c_0502215", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsSubordinate { get; set; }

        [RadioReportId("hea_c_0503226", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        [RadioReportId("hea_c_0503233", InstanceName = nameof(MeningesFindingType.EpiduralHematoma))]
        public int? CurrentExaminationInHu { get; set; }

        [RadioReportId("hea_c_0503229", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        [RadioReportId("hea_c_0503236", InstanceName = nameof(MeningesFindingType.EpiduralHematoma))]
        public int? PreviousExaminationInHu { get; set; }

        #endregion

        #region Mass

        [RadioReportId("hea_c_050109-l", InstanceName = InstanceNames.Meninges, IsExportable = false)]
        public DescriptionType DescriptionType { get; set; }

        [RadioReportId("hea_c_050204", InstanceName = nameof(MeningesFindingType.Mass))]
        public MeningesDiagnosisType DifferentialDiagnosis { get; set; }

        [RadioReportId("hea_c_050205", InstanceName = nameof(MeningesFindingType.Mass))]
        public bool IsHistologyKnown { get; set; }

        [RadioReportId("hea_c_050205-l", InstanceName = nameof(InstanceNames.Meninges), IsExportable = false)]
        public HistologyKnownType HistologyKnownType { get; set; }

        [RadioReportId("hea_c_050222-l", InstanceName = nameof(InstanceNames.Meninges), IsExportable = false)]
        public MarginType MarginType { get; set; }

        [RadioReportId("hea_c_050308-l", InstanceName = nameof(MeningesFinding) + nameof(HomogeneityType), IsExportable = false)]
        public HomogeneityType HomogeneityType { get; set; }

        [RadioReportId("hea_c_050311-l", InstanceName = InstanceNames.Meninges, IsExportable = false)]
        public ShapeType ShapeType { get; set; }

        [RadioReportId("hea_c_0503211", InstanceName = nameof(MeningesFindingType.Mass))]
        public bool IsEnPlaqueConfiguration { get; set; }

        public GrowthPatternType GrowthPatternType { get; set; }

        [RadioReportId("hea_c_0503212", InstanceName = nameof(MeningesFindingType.Mass))]
        public bool IsGyriformGrowth { get; set; }

        [RadioReportId("hea_c_0503203", InstanceName = nameof(MeningesFindingType.Mass))]
        public bool IsIntrameatalGrowth { get; set; }

        [RadioReportId("hea_c_0503204", InstanceName = nameof(MeningesFindingType.Mass))]
        public bool IsIntraforaminalFissuralGrowth { get; set; }

        [RadioReportId("hea_c_0503206", InstanceName = nameof(MeningesFindingType.Mass))]
        public bool IsPerifocalCerebralEdema { get; set; }

        [RadioReportId("hea_c_0503207", InstanceName = nameof(MeningesFindingType.Mass))]
        public bool IsDuraTailSign { get; set; }

        [RadioReportId("hea_c_0503208", InstanceName = nameof(MeningesFindingType.Mass))]
        public bool IsLocalVenousStasis { get; set; }

        [RadioReportId("hea_c_0503209", InstanceName = nameof(MeningesFindingType.Mass))]
        public bool IsOsteolysis { get; set; }

        [RadioReportId("hea_c_0503210", InstanceName = nameof(MeningesFindingType.Mass))]
        public bool IsHyperostosisOfTheAdjacentBone { get; set; }

        [RadioReportId("hea_c_050434-l", InstanceName = nameof(InstanceNames.Meninges), IsExportable = false)]
        public ContrastDistributionType ContrastDistributionType { get; set; }

        [RadioReportId("hea_c_050242", InstanceName = nameof(MeningesFindingType.Mass))]
        public MeningesDiagnosisType DifferentialDiagnosis3 { get; set; }

        [RadioReportId("hea_c_050243", InstanceName = nameof(MeningesFindingType.Mass))]
        public bool IsMoreThenOneLesionOfTheSameEntity { get; set; }

        #endregion

        #region DiffuseChanges

        [RadioReportId("hea_c_050256", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsThickening { get; set; }

        [RadioReportId("hea_c_050258", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public int? MeningesWidthInMm { get; set; }

        [RadioReportId("hea_c_0505217", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsPachymeninges { get; set; }

        [RadioReportId("hea_c_0505218", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsLeptomeninges { get; set; }

        [RadioReportId("hea_c_0505225", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsAbscess { get; set; }

        [RadioReportId("hea_c_0505227", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public int? MaxExtensionInMm { get; set; }

        [RadioReportId("hea_c_0505229", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsAbscessCapsule { get; set; }

        [RadioReportId("hea_c_0505230", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsEmpyema { get; set; }

        [RadioReportId("hea_c_0505231", InstanceName = nameof(MeningesFindingType.DiffuseChanges))]
        public bool IsHydrocephalus { get; set; }

        #endregion

        #region SubduralHematoma

        [RadioReportId("hea_c_050346", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        public bool IsCrescentShaped { get; set; }

        [RadioReportId("hea_c_050347", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        public bool IsCrossingSutures { get; set; }

        [RadioReportId("hea_c_050348", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        public bool IsDuralAttachmentNotExceeded { get; set; }

        [RadioReportId("hea_c_0504242", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        public int? MaxWidthInMm { get; set; }

        [RadioReportId("hea_c_0504247", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        public bool IsAlongFalx { get; set; }

        [RadioReportId("hea_c_0504248", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        public bool IsAlongTentorium { get; set; }

        [RadioReportId("hea_c_050284", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        public bool IsSeptations { get; set; }

        [RadioReportId("hea_c_050285", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        public bool IsContrastEnhancementMembrane { get; set; }

        [RadioReportId("hea_c_050287", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        public bool IsFluid { get; set; }

        [RadioReportId("hea_c_050288", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        public bool IsFluidLevel { get; set; }

        [RadioReportId("hea_c_050359", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        public bool IsCorticalVeinDisplacement { get; set; }

        [RadioReportId("hea_c_050360", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        public bool IsDuralThickening { get; set; }

        [RadioReportId("hea_c_050361", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        public bool IsContrastEnhancement { get; set; }

        [RadioReportId("hea_c_050362", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        public bool IsMidlineShift { get; set; }

        public MidlineShiftSideType MidlineShiftSideType { get; set; }

        [RadioReportId("hea_c_050367", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        public int? MidlineShiftInMm { get; set; }

        [RadioReportId("hea_c_050369", InstanceName = nameof(MeningesFindingType.SubduralHematoma))]
        public bool IsHerniation { get; set; }

        [RadioReportId("hea_c_050371", InstanceName = nameof(MeningesFindingType.SubduralHematoma), AlternativeTranslationSuffix = "CT")]
        public RegionType RegionType { get; set; }

        public CharacterizationHematomaType CharacterizationHematomaType { get; set; }

        public DifferentialDiagnosisType DifferentialDiagnosisType { get; set; }

        #endregion

        #region EpiduralHematoma

        [RadioReportId("hea_c_050486", InstanceName = nameof(MeningesFindingType.EpiduralHematoma))]
        public bool IsDuralAttachmentCrossed { get; set; }

        [RadioReportId("hea_c_050484", InstanceName = nameof(MeningesFindingType.EpiduralHematoma))]
        public bool IsSuturesNotCrossed { get; set; }

        [RadioReportId("hea_c_050485", InstanceName = nameof(MeningesFindingType.EpiduralHematoma))]
        public bool IsDuralDisplacementBetweenEDHAndBrain { get; set; }

        [RadioReportId("hea_c_050466", InstanceName = nameof(MeningesFindingType.EpiduralHematoma))]
        public bool IsBiconvex { get; set; }

        [RadioReportId("hea_c_050568", InstanceName = nameof(MeningesFindingType.EpiduralHematoma))]
        public bool IsAssociatedSkullFracture { get; set; }

        [RadioReportId("hea_c_0505232", InstanceName = nameof(MeningesFindingType.EpiduralHematoma))]
        public bool IsSwirlSign { get; set; }

        [RadioReportId("hea_c_050569", InstanceName = nameof(MeningesFindingType.EpiduralHematoma))]
        public bool IsContrecoupSDH { get; set; }

        [RadioReportId("hea_c_050570", InstanceName = nameof(MeningesFindingType.EpiduralHematoma))]
        public bool IsAdjacentContusion { get; set; }

        [RadioReportId("hea_c_050571", InstanceName = nameof(MeningesFindingType.EpiduralHematoma))]
        public bool IsConcomitantHydrocephalus { get; set; }

        [RadioReportId("hea_c_050572", InstanceName = nameof(MeningesFindingType.EpiduralHematoma))]
        public bool IsAssociatedInfarction { get; set; }

        #endregion

        public bool CheckCondition(string customConditionId) => customConditionId switch
        {
            nameof(MeningesFindingType.Mass) => FindingType.ToString() == customConditionId,
            nameof(MeningesFindingType.DiffuseChanges) => FindingType.ToString() == customConditionId,
            _ => false
        };
    }
}