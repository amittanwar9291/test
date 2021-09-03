using System;
using RadioReport.Common.Logic.Attributes;
using RadioReport.CardioMRT.Domain.Enums.SpatialRequirement;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.Common.Module.Logic.Interfaces;

namespace RadioReport.CardioMRT.Domain.Models
{
	public class SpatialRequirementFinding : SpatialRequirementFindingBase, IImageFileContainer
    {
        [RadioReportId("car_m_080204")]
        public MainTumorLocalizers MainTumorLocalizer { get; set; }
        
        [RadioReportId("car_m_080206")]
        public int? DiameterMaxAxialInMm { get; set; }
       
        [RadioReportId("car_m_080211", InstanceName = nameof(GdEnhancementIntensityEGEType), IsExportable = false)]
        public EnhancementIntensityType GdEnhancementIntensityEGEType { get; set; }
       
        [RadioReportId("car_m_080312", InstanceName = nameof(GdEnhancementIntensityLGEType), IsExportable = false)]
        public EnhancementIntensityType GdEnhancementIntensityLGEType { get; set; }

        [RadioReportId("car_m_080315", InstanceName = nameof(GdEnhancementQualityLGEType), IsExportable = false)]
        public HomogeneityType GdEnhancementQualityLGEType { get; set; }
        
        [RadioReportId("car_m_080417")]
        public bool IsInfiltrationThroughDifferentTissue { get; set; }

        [RadioReportId("car_m_080511")]
        public bool IsPericardialEffusion { get; set; }

        [RadioReportId("car_m_080512")]
        public bool IsHaemorrhage { get; set; }

        [RadioReportId("car_m_080513")]
        public bool IsPleuralEffusion { get; set; }

        [RadioReportId("car_m_080514")]
        public bool IsSuperimposedThrombus { get; set; }

        public MobilityType MobilityType { get; set; }

        [RadioReportId("car_m_080216")]
        public SpatialRequirementDiagnosisType DifferentialDiagnosis1 { get; set; }
        
        [RadioReportId("car_m_080218")]
        public SpatialRequirementDiagnosisType DifferentialDiagnosis2 { get; set; }

        [RadioReportId("car_m_080219")]
        public bool IsSubordinate { get; set; }

        [RadioReportId("car_m_080221")]
        public SpatialRequirementDiagnosisType DifferentialDiagnosis3 { get; set; }

        [RadioReportId("car_m_080318")]
        public bool IsLesionSame { get; set; }

        [RadioReportId("car_m_080320")]
        public MainTumorLocalizers NonTargetLesionLocalizer { get; set; }

        #region IMAGE FILE

        public Guid? ImageFileId { get; set; }

        [RadioReportId("uni_08_007", InstanceName = "CardioMRT.SpatialRequirementFinding", IsExportable = false)]
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

        [RadioReportId("uni_08_003")]
        public string SerialNumber { get; set; }

        [RadioReportId("uni_08_005")]
        public string PictureNumber { get; set; }
    }
}
