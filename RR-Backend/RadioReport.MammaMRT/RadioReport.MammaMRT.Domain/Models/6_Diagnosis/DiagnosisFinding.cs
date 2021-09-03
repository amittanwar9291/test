using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.MammaMRT.Domain.Enums;
using System;
using System.Collections.Generic;

namespace RadioReport.MammaMRT.Domain.Models
{
    public class DiagnosisFinding : DiagnosisFindingTemplate, IImageFileContainer
    {
        public override string InstanceName => base.InstanceName;

        public DescriptionType DescriptionType { get; set; }

        public DistributionPatternType DistributionPatternType { get; set; }

        public InternalEnhancementType InternalEnhancementType { get; set; }

        [RadioReportId("mam_m_060205", AlternativeTranslationSuffix = "v2", InstanceName = nameof(DiagnosisFindingType.FocalPoint))]
        [RadioReportId("mam_m_060218", AlternativeTranslationSuffix = "v2", InstanceName = nameof(DiagnosisFindingType.FocusFoci))]
        [RadioReportId("mam_m_060218", AlternativeTranslationSuffix = "v2", InstanceName = nameof(DiagnosisFindingType.NonSpatialEnhancement))]
        public BreastLocations FindingLocation { get; set; }

        [RadioReportId("mam_m_060225", InstanceName = nameof(DiagnosisFindingType.FocalPoint))]
        [RadioReportId("mam_m_060215", InstanceName = nameof(DiagnosisFindingType.FocusFoci))]
        public int? LargestDiameterInMm { get; set; }

        [RadioReportId("mam_m_060506")]
        public DiagnosisType AdditionalDiagnosis2Type { get; set; }

        [RadioReportId("mam_m_060507")]
        public bool IsSubordinated { get; set; }

        [RadioReportId("mam_m_060509")]
        public DiagnosisType AdditionalDiagnosis3Type { get; set; }

        #region FocalPoint
        [RadioReportId("mam_m_060219", InstanceName = nameof(DiagnosisFindingType.FocalPoint))]
        public bool IsHistologicalConfirmation { get; set; }

        public HistologicallySecuredType HistologicallySecuredType { get; set; }

        [RadioReportId("mam_m_060227", InstanceName = nameof(DiagnosisFindingType.FocalPoint))]
        public int? AxisRightAngledInMm { get; set; }

        [RadioReportId("mam_m_060230", InstanceName = nameof(DiagnosisFindingType.FocalPoint))]
        public int? DistanceToNippleInMm { get; set; }

        [RadioReportId("mam_m_060314", InstanceName = nameof(DiagnosisFindingType.FocalPoint))]
        public bool IsIntralesionalFat { get; set; }

        [RadioReportId("mam_m_060421", InstanceName = nameof(DiagnosisFindingType.FocalPoint))]
        public bool IsDiffusionRestriction { get; set; }

        [RadioReportId("mam_m_060422", InstanceName = nameof(DiagnosisFindingType.FocalPoint))]
        public bool IsAdditionalIpsilateralLesionsSameEntity { get; set; }

        [RadioReportId("mam_m_060412", InstanceName = nameof(DiagnosisFindingType.FocalPoint))]
        public bool IsSkinInfiltration { get; set; }

        [RadioReportId("mam_m_060413", InstanceName = nameof(DiagnosisFindingType.FocalPoint))]
        public bool IsPectoralisMuscleInfiltration { get; set; }

        [RadioReportId("mam_m_060414", InstanceName = nameof(DiagnosisFindingType.FocalPoint))]
        public bool IsChestWall { get; set; }
        #endregion

        [RadioReportId("uni_06_003")]
        public string SerialNumber { get; set; }

        [RadioReportId("uni_06_005")]
        public string PictureNumber { get; set; }

        public Guid? ImageFileId { get; set; }

        [RadioReportId("uni_06_007l", InstanceName = "MammaMRT.DiagnosisFinding", IsExportable = false)]
        public ImageFile UploadedImageFile { get; set; }

        public List<Guid> ImageIds => ImageFileId.HasValue ? new List<Guid> { ImageFileId.Value } : new List<Guid>();

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
    }
}
