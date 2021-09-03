using RadioReport.AbdomenCT.Domain.Constants;
using RadioReport.AbdomenCT.Domain.Enums;
using RadioReport.AbdomenCT.Domain.Enums.Spleen;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using System;

namespace RadioReport.AbdomenCT.Domain.Models
{
    public class SpleenFinding : FindingBase, IImageFileContainer
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("abd_c_050106")]
        public SpleenFindingType FindingType { get; set; }

        #region Common

        [RadioReportId("abd_c_050242", InstanceName = nameof(SpleenFindingType.StandardVariants))]
        [RadioReportId("abd_c_050288", InstanceName = nameof(SpleenFindingType.SubcapsularHematoma))]
        [RadioReportId("abd_c_050209", InstanceName = nameof(SpleenFindingType.Splenomegaly))]
        [RadioReportId("abd_c_050341", InstanceName = nameof(SpleenFindingType.Mass))]
        [RadioReportId("abd_c_050252", InstanceName = nameof(SpleenFindingType.SplenicInfarction))]
        public int? SizeInMm { get; set; }

        [RadioReportId("abd_c_050245", InstanceName = nameof(SpleenFindingType.StandardVariants))]
        [RadioReportId("abd_c_050291", InstanceName = nameof(SpleenFindingType.SubcapsularHematoma))]
        [RadioReportId("abd_c_050212", InstanceName = nameof(SpleenFindingType.Splenomegaly))]
        [RadioReportId("abd_c_050344", InstanceName = nameof(SpleenFindingType.Mass))]
        [RadioReportId("abd_c_050255", InstanceName = nameof(SpleenFindingType.SplenicInfarction))]
        public int? SecondPlaneInMm { get; set; }

        [RadioReportId("abd_c_050248", InstanceName = nameof(SpleenFindingType.StandardVariants))]
        [RadioReportId("abd_c_050294", InstanceName = nameof(SpleenFindingType.SubcapsularHematoma))]
        [RadioReportId("abd_c_050215", InstanceName = nameof(SpleenFindingType.Splenomegaly))]
        [RadioReportId("abd_c_050347", InstanceName = nameof(SpleenFindingType.Mass))]
        [RadioReportId("abd_c_050258", InstanceName = nameof(SpleenFindingType.SplenicInfarction))]
        public int? ThirdPlaneInMm { get; set; }

        [RadioReportId("abd_c_050272", InstanceName = nameof(SpleenFindingType.Trauma))]
        [RadioReportId("abd_c_050269", InstanceName = nameof(SpleenFindingType.Mass))]
        public bool IsSubcapsular { get; set; }

        [RadioReportId("abd_c_050364", InstanceName = nameof(SpleenFindingType.Splenomegaly))]
        [RadioReportId("abd_c_0502110", InstanceName = nameof(SpleenFindingType.Mass))]
        public bool IsSuspicionOf { get; set; }

        [RadioReportId("abd_c_050355-l", InstanceName = nameof(SpleenFindingType.SubcapsularHematoma), IsExportable = false)]
        public CharacterizationHematoma CharacterizationHematoma { get; set; }

        #endregion

        #region StandardVariants

        [RadioReportId("abd_c_050270", InstanceName = nameof(SpleenFindingType.StandardVariants))]
        public bool IsPlantVariationPathologicalMyProperty { get; set; }

        public PlantVariationPathologicalAnatomyType PlantVariationPathologicalAnatomyType { get; set; }

        [RadioReportId("abd_c_050349", InstanceName = nameof(SpleenFindingType.StandardVariants))]
        public bool IsSpleenContour { get; set; }

        [RadioReportId("abd_c_050302", InstanceName = nameof(SpleenFindingType.StandardVariants))]
        public bool IsCleaves { get; set; }

        [RadioReportId("abd_c_050303", InstanceName = nameof(SpleenFindingType.StandardVariants))]
        public bool IsNotches { get; set; }

        [RadioReportId("abd_c_050304", InstanceName = nameof(SpleenFindingType.StandardVariants))]
        public bool IsNodes { get; set; }

        [RadioReportId("abd_c_050305", InstanceName = nameof(SpleenFindingType.StandardVariants))]
        public bool IsLobulation { get; set; }

        #endregion

        #region Trauma

        [RadioReportId("abd_c_050271", InstanceName = nameof(SpleenFindingType.Trauma))]
        public bool IsHematoma { get; set; }

        [RadioReportId("abd_c_050273", InstanceName = nameof(SpleenFindingType.Trauma))]
        public int? Subcapsular { get; set; }

        [RadioReportId("abd_c_050275", InstanceName = nameof(SpleenFindingType.Trauma))]
        public bool IsSplenicVascularInjuryOr { get; set; }

        [RadioReportId("abd_c_050276", InstanceName = nameof(SpleenFindingType.Trauma))]
        public bool IsSplenicVascularInjuryWith { get; set; }

        [RadioReportId("abd_c_050278", InstanceName = nameof(SpleenFindingType.Trauma))]
        public int? ExtensionHematoma{ get; set; }

        [RadioReportId("abd_c_050281", InstanceName = nameof(SpleenFindingType.Trauma))]
        public int? SecondPlane { get; set; }

        [RadioReportId("abd_c_050284", InstanceName = nameof(SpleenFindingType.Trauma))]
        public int? ThirdPlane { get; set; }

        [RadioReportId("abd_c_050350", InstanceName = nameof(SpleenFindingType.Trauma))]
        public bool IsLazerationParenchymaDepth { get; set; }

        [RadioReportId("abd_c_050351", InstanceName = nameof(SpleenFindingType.Trauma))]
        public int? LazerationParenchymaDepth { get; set; }

        [RadioReportId("abd_c_050353", InstanceName = nameof(SpleenFindingType.Trauma))]
        public bool IsInvolvementOfTheHilar { get; set; }

        [RadioReportId("abd_c_050354", InstanceName = nameof(SpleenFindingType.Trauma))]
        public bool IsSplenicRupture { get; set; }

        [RadioReportId("abd_c_050427-l", InstanceName = nameof(SpleenFindingType.Trauma), IsExportable = false)]
        public ModifiedSpleenInjuryScaleType ModifiedSpleenInjuryScaleType { get; set; }

        #endregion

        #region Splenomegaly

        [RadioReportId("abd_c_050360", InstanceName = nameof(SpleenFindingType.Splenomegaly))]
        public bool IsInfectious { get; set; }

        [RadioReportId("abd_c_050361", InstanceName = nameof(SpleenFindingType.Splenomegaly))]
        public bool IsInflammatory { get; set; }

        [RadioReportId("abd_c_050362", InstanceName = nameof(SpleenFindingType.Splenomegaly))]
        public bool IsHematologicDisease { get; set; }

        [RadioReportId("abd_c_050363", InstanceName = nameof(SpleenFindingType.Splenomegaly))]
        public bool IsCongestive { get; set; }

        #endregion

        #region Mass

        [RadioReportId("abd_m_050109-l", InstanceName = nameof(InstanceNames.Spleen), IsExportable = false)]
        public DescriptionType DescriptionType { get; set; }

        [RadioReportId("abd_c_050218", InstanceName = nameof(SpleenFindingType.Mass))]
        public SpleenDiagnosisType DifferentialDiagnosis { get; set; }

        [RadioReportId("abd_c_050219", InstanceName = nameof(SpleenFindingType.Mass))]
        public bool IsHistologyKnown { get; set; }

        public HistologyKnownType HistologyKnownType { get; set; }

        [RadioReportId("abd_c_050263", InstanceName = nameof(SpleenFindingType.Mass))]
        public bool IsExtremitasAnterior { get; set; }

        [RadioReportId("abd_c_050264", InstanceName = nameof(SpleenFindingType.Mass))]
        public bool IsMiddleThird { get; set; }

        [RadioReportId("abd_c_050265", InstanceName = nameof(SpleenFindingType.Mass))]
        public bool IsAtTheHilus { get; set; }

        [RadioReportId("abd_c_050266", InstanceName = nameof(SpleenFindingType.Mass))]
        public bool IsExtremePosterior { get; set; }

        [RadioReportId("abd_c_050268", InstanceName = nameof(SpleenFindingType.Mass))]
        public bool IsParenchymatous { get; set; }

        public QuantityType QuantityType { get; set; }

        public DelimitationType DelimitationType { get; set; }

        [RadioReportId("abd_c_050401-l", InstanceName = nameof(HomogeneityType), IsExportable = false)]
        public HomogeneityType HomogeneityType { get; set; }

        public FormType FormType { get; set; }

        [RadioReportId("abd_c_050514", InstanceName = nameof(SpleenFindingType.Mass))]
        public SignalTypeExtended SignalTypeExtended { get; set; }

        public DensityType DensityType { get; set; }

        [RadioReportId("abd_c_050519", InstanceName = nameof(SpleenFindingType.Mass))]
        public int? Quantitative { get; set; }

        [RadioReportId("abd_c_050297", InstanceName = nameof(SpleenFindingType.Mass))]
        public bool IsFat { get; set; }

        [RadioReportId("abd_c_050298", InstanceName = nameof(SpleenFindingType.Mass))]
        public bool IsLiquid { get; set; }

        [RadioReportId("abd_c_050299", InstanceName = nameof(SpleenFindingType.Mass))]
        public bool IsCalcium { get; set; }

        [RadioReportId("abd_c_0502100", InstanceName = nameof(SpleenFindingType.Mass))]
        public bool IsCapsule { get; set; }

        [RadioReportId("abd_c_0502101", InstanceName = nameof(SpleenFindingType.Mass))]
        public bool IsSepts { get; set; }

        [RadioReportId("abd_c_0502102", InstanceName = nameof(SpleenFindingType.Mass))]
        public bool IsNecrosis { get; set; }

        [RadioReportId("abd_c_0502103", InstanceName = nameof(SpleenFindingType.Mass))]
        public bool IsBleeding { get; set; }

        [RadioReportId("abd_c_0502105", InstanceName = nameof(SpleenFindingType.Mass))]
        public bool IsNoDisplacement { get; set; }

        [RadioReportId("abd_c_0502106", InstanceName = nameof(SpleenFindingType.Mass))]
        public bool IsMass { get; set; }

        [RadioReportId("abd_c_050367", InstanceName = nameof(SpleenFindingType.Mass))]
        public SignalTypeExtended EarlyArterialSignalTypeExtended { get; set; }

        [RadioReportId("abd_c_050369", InstanceName = nameof(SpleenFindingType.Mass))]
        public SignalTypeExtended LateArterialSignalTypeExtended { get; set; }

        [RadioReportId("abd_c_050434", InstanceName = nameof(SpleenFindingType.Mass))]
        public SignalTypeExtended PortalVenousSignalTypeExtended { get; set; }

        [RadioReportId("abd_c_050436", InstanceName = nameof(SpleenFindingType.Mass))]
        public SignalTypeExtended VenousSignalTypeExtended { get; set; }

        [RadioReportId("abd_c_050528", InstanceName = nameof(SpleenFindingType.Mass))]
        public SignalTypeExtended EquilibriumSignalTypeExtended { get; set; }

        public CMEnhancementDistributionType CMEnhancementDistributionType { get; set; }

        [RadioReportId("abd_c_0502109", InstanceName = nameof(SpleenFindingType.Mass))]
        public SpleenDiagnosisType DifferentialDiagnosis1 { get; set; }

        [RadioReportId("abd_c_0502112", InstanceName = nameof(SpleenFindingType.Mass))]
        public SpleenDiagnosisType DifferentialDiagnosis2 { get; set; }

        [RadioReportId("abd_c_0502113", InstanceName = nameof(SpleenFindingType.Mass))]
        public bool IsSubordinate { get; set; }

        [RadioReportId("abd_c_0502115", InstanceName = nameof(SpleenFindingType.Mass))]
        public SpleenDiagnosisType DifferentialDiagnosis3 { get; set; }

        [RadioReportId("abd_c_050437", InstanceName = nameof(SpleenFindingType.Mass))]
        public bool IsMoreThanOneLesionSamePathology { get; set; }

        [RadioReportId("abd_c_050439", InstanceName = nameof(SpleenFindingType.Mass))]
        public bool IsMoreThanOneLesionParenchymatous { get; set; }

        [RadioReportId("abd_c_050440", InstanceName = nameof(SpleenFindingType.Mass))]
        public bool IsMoreThanOneLesionSubcapsular { get; set; }

        #endregion

        #region SplenicInfarction

        [RadioReportId("abd_c_050331", InstanceName = nameof(SpleenFindingType.SplenicInfarction))]
        public bool IsUpstreamAneurysm { get; set; }

        [RadioReportId("abd_c_050333", InstanceName = nameof(SpleenFindingType.SplenicInfarction))]
        public byte? MaxDiameterInMm { get; set; }

        [RadioReportId("abd_c_050335", InstanceName = nameof(SpleenFindingType.SplenicInfarction))]
        public bool IsUpstreamArterialOcclusion { get; set; }

        [RadioReportId("abd_c_050336", InstanceName = nameof(SpleenFindingType.SplenicInfarction))]
        public bool IsOcclusionOfTheSplenicVein { get; set; }

        [RadioReportId("abd_c_050337", InstanceName = nameof(SpleenFindingType.SplenicInfarction))]
        public bool IsThrombosisOfTheSplenicVein { get; set; }

        [RadioReportId("abd_c_050338", InstanceName = nameof(SpleenFindingType.SplenicInfarction))]
        public bool IsMultifocalLocalization { get; set; }

        #endregion

        #region ImageFileUpload

        [RadioReportId("uni_05_003")]
        public string SerialNumber { get; set; }

        [RadioReportId("uni_05_005")]
        public string PictureNumber { get; set; }

        public Guid? ImageFileId { get; set; }

        [RadioReportId("uni_05_007-l", InstanceName = "AbdomenCT.Spleen.SpleenFinding", IsExportable = false)]
        public ImageFile UploadedImageFile { get; set; }

        public void DropImageFile(Guid? imageFileId = null)
        {
            UploadedImageFile = null;
            ImageFileId = null;
        }

        public Guid? GetImageFileGuid(string fileType = null) => ImageFileId;

        public void SetImageFile(ImageFile imageFile, string fileType = null)
        {
            UploadedImageFile = imageFile ?? throw new ArgumentNullException(nameof(imageFile));
            ImageFileId = imageFile.Id;
        }

        #endregion

    }
}