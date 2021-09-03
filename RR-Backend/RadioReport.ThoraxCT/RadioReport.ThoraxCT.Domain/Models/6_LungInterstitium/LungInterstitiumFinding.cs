using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.ThoraxCT.Domain.Enums;
using System;

namespace RadioReport.ThoraxCT.Domain.Models
{
    public class LungInterstitiumFinding : LungInterstitiumFindingBase, IImageFileContainer
    {
        #region Common

        [RadioReportId("tho_c_0603128", InstanceName = nameof(LungInterstitiumFindingType.IncreasedParenchymalDensity))]
        public LungsFlapsLocations LungsFlapsLocation1 { get; set; }

        [RadioReportId("tho_c_0604108", InstanceName = nameof(LungInterstitiumFindingType.IncreasedParenchymalDensity))]
        [RadioReportId("tho_c_0604108", InstanceName = nameof(LungInterstitiumFindingType.BronchialTubes))]
        public LungsFlapsLocations LungsFlapsLocation2 { get; set; }

        #endregion

        #region NodularChanges

        [RadioReportId("tho_c_0604115", InstanceName = nameof(LungInterstitiumFindingType.NodularChanges))]
        public bool IsMacronodular { get; set; }

        [RadioReportId("tho_c_0604116", InstanceName = nameof(LungInterstitiumFindingType.NodularChanges))]
        public bool IsConfluentGranulomasSarcoidGalaxy { get; set; }

        [RadioReportId("tho_c_0605106", InstanceName = nameof(LungInterstitiumFindingType.NodularChanges))]
        public bool IsGroundGlassNodules { get; set; }

        [RadioReportId("tho_c_0605107", InstanceName = nameof(LungInterstitiumFindingType.NodularChanges))]
        public bool IsMicronodulesClusters { get; set; }

        [RadioReportId("tho_c_0605108", InstanceName = nameof(LungInterstitiumFindingType.NodularChanges))]
        public bool IsReversedHaloSign { get; set; }

        [RadioReportId("tho_c_0605109", InstanceName = nameof(LungInterstitiumFindingType.NodularChanges))]
        public bool IsPseudoplaque { get; set; }

        #endregion

        #region Reticulations

        [RadioReportId("tho_c_0603116", InstanceName = nameof(LungInterstitiumFindingType.Reticulations))]
        public bool IsLinearPattern { get; set; }

        [RadioReportId("tho_c_0603117", InstanceName = nameof(LungInterstitiumFindingType.Reticulations))]
        public bool IsReticularPattern { get; set; }

        [RadioReportId("tho_c_0603124", InstanceName = nameof(LungInterstitiumFindingType.Reticulations))]
        public bool IsArchitecturalDistortion { get; set; }

        #endregion

        #region IncreasedParenchymalDensity

        [RadioReportId("tho_c_0603129", InstanceName = nameof(LungInterstitiumFindingType.IncreasedParenchymalDensity))]
        public bool IsPositiveBronchopneumogram { get; set; }

        [RadioReportId("tho_c_0604139", InstanceName = nameof(LungInterstitiumFindingType.IncreasedParenchymalDensity))]
        public QuantityType QuantityType { get; set; }

        [RadioReportId("tho_c_0604141", InstanceName = nameof(LungInterstitiumFindingType.IncreasedParenchymalDensity))]
        public RatioReticularChangesType RatioReticularChangesType { get; set; }

        [RadioReportId("tho_c_0604142", InstanceName = nameof(LungInterstitiumFindingType.IncreasedParenchymalDensity))]
        public bool IsDarkBronchusSign { get; set; }

        [RadioReportId("tho_c_0605114", InstanceName = nameof(LungInterstitiumFindingType.IncreasedParenchymalDensity))]
        public bool IsPleuralThickening { get; set; }

        #endregion

        #region DecreasedParenchymalDensity

        public ReducedParenchymaDensityPatternType ReducedParenchymaDensityPatternType { get; set; }
        
        public LungInterstitiumCystType CystType { get; set; }

        public CystWallType CystWallType { get; set; }

        #endregion

        #region OtherParenchymalPatterns

        [RadioReportId("tho_c_0603139", InstanceName = nameof(LungInterstitiumFindingType.OtherParenchymalPatterns))]
        public bool IsMosaicPattern { get; set; }

        public MosaicPatternType MosaicPatternType { get; set; }

        public MosaicIntensityType MosaicIntensityType { get; set; }

        [RadioReportId("tho_c_0603145", InstanceName = nameof(LungInterstitiumFindingType.OtherParenchymalPatterns))]
        public bool IsCurvilinearOpacification { get; set; }

        #endregion

        #region Emphysema

        public EmphysemaType EmphysemaType { get; set; }

        [RadioReportId("tho_c_0603148", InstanceName = nameof(LungInterstitiumFindingType.Emphysema))]
        public bool IsConfluentEmphysema { get; set; }

        [RadioReportId("tho_c_0603154", InstanceName = nameof(LungInterstitiumFindingType.Emphysema))]
        public int? DiameterLargestBullaInMm { get; set; }

        #endregion

        #region BronchialTubes

        [RadioReportId("tho_c_0603176", InstanceName = nameof(LungInterstitiumFindingType.BronchialTubes))]
        public bool IsTractionBronchiectasis { get; set; }

        [RadioReportId("tho_c_0603177", InstanceName = nameof(LungInterstitiumFindingType.BronchialTubes))]
        public bool IsSignetRingSign { get; set; }

        [RadioReportId("tho_c_0603179", InstanceName = nameof(LungInterstitiumFindingType.BronchialTubes))]
        public bool IsTractionBronchiolectasis { get; set; }

        public LocalizationLevel LocalizationLevel { get; set; }

        [RadioReportId("tho_c_0604117", InstanceName = nameof(LungInterstitiumFindingType.BronchialTubes))]
        public LungsSegmentsLocations LungsSegmentsLocation { get; set; }

        #endregion

        #region IMAGE FILE UPLOAD 

        [RadioReportId("uni_06_003", InstanceName = nameof(LungInterstitiumFindingType.NodularChanges))]
        public string SerialNumber { get; set; }

        [RadioReportId("uni_06_005", InstanceName = nameof(LungInterstitiumFindingType.NodularChanges))]
        public string PictureNumber { get; set; }

        public Guid? ImageFileId { get; set; }

        [RadioReportId("uni_06_007-l", InstanceName = "ThoraxCT.LungInterstitiumFinding", IsExportable = false)]
        public ImageFile UploadedImageFile { get; set; }

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
    }
}
