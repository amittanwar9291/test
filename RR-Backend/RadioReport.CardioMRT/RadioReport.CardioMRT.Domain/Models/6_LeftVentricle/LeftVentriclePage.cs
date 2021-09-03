using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.CardioMRT.Domain.Enums.LeftVentricle;
using System;
using RadioReport.Common.Module.Logic.Interfaces;
using System.Collections.Generic;

namespace RadioReport.CardioMRT.Domain.Models
{
    [GeneratedControllerPageWithImageModel("CardioMRT/LeftVentricle")]
    public class LeftVentriclePage : PageModelBase<LeftVentriclePage>, IImageFileContainer
    {
		[RadioReportId("car_m_060104")]
		public MyocardialEdemaType MyocardialEdemaType { get; set; }

		[RadioReportId("car_m_060105")]
		public WallThickeningType WallThickeningType { get; set; }

		[RadioReportId("car_m_060106")]
		public WallThinningType WallThinningType { get; set; }

		[RadioReportId("car_m_060107")]
		public HypointensMyokType HypointensMyokType { get; set; }

		#region Morphologie Editor Section with 4 localizers
		[RadioReportId("car_m_060112")]
		public VentricleAreaLocalizers MyocardialEdemaLocalizer { get; set; }

		[RadioReportId("car_m_060113")]
		public VentricleAreaLocalizers WallThickeningLocalizer { get; set; }

		[RadioReportId("car_m_060116")]
		public VentricleAreaLocalizers WallThinningLocalizer { get; set; }

		[RadioReportId("car_m_060117")]
		public VentricleAreaLocalizers ReducedMyocardialSignalT1wT2wLocalizer { get; set; }
		#endregion

		[RadioReportId("car_m_060201")]
		public bool IsFunction { get; set; }

		[RadioReportId("car_m_060203")]
		public bool IsKineticDisorder { get; set; }

		[RadioReportId("car_m_060204")]
		public bool IsMidVentricularWallMovementDisorder { get; set; }

		[RadioReportId("car_m_060205")]
		public bool IsApicalBallooning { get; set; }

		[RadioReportId("car_m_060206")]
		public bool IsAneurysm { get; set; }

		[RadioReportId("car_m_060207")]
		public AneurysmType FunctionType { get; set; }

		public KineticDisorderLocalizer KineticDisorderLocalizer { get; set; }

		[RadioReportId("car_m_060301")]
		public bool IsPerfusion { get; set; }

		public PerfusionType PerfusionType { get; set; }

		public PerfusionDefectLocalizer PerfusionDefectLocalizer { get; set; }

		[RadioReportId("car_m_060401")]
		public bool IsLGE { get; set; }

		[RadioReportId("car_m_060403")]
		public LGEType LGEType { get; set; }

		[RadioReportId("car_m_060405")]
		public DistributionType DistributionType { get; set; }

		public RelaxationTimeType NonSegmentalType { get; set; }

		public LGESegmentalLocalizer LGESegmentalLocalizer { get; set; }

        #region FILE UPLOAD

        #region LGE
        public Guid? LGEImageFileId { get; set; }

		[RadioReportId("uni_06_007_01l", InstanceName = "CardioMRT.LeftVentriclePage.LGEImageFile", IsExportable = false)]
		public ImageFile LGEImageFile { get; set; }

		[RadioReportId("uni_06_003_01")]
		public string LGESerialNumber { get; set; }

		[RadioReportId("uni_06_005_01")]
		public string LGEPictureNumber { get; set; }
        #endregion

        #region T1
        public Guid? T1ImageFileId { get; set; }

        [RadioReportId("uni_06_007_02l", InstanceName = "CardioMRT.LeftVentriclePage.T1ImageFile", IsExportable = false)]
        public ImageFile T1ImageFile { get; set; }

        [RadioReportId("uni_06_003_02")]
        public string T1SerialNumber { get; set; }

        [RadioReportId("uni_06_005_02")]
        public string T1PictureNumber { get; set; }
        #endregion

        #region T2
        public Guid? T2ImageFileId { get; set; }

        [RadioReportId("uni_06_007_03l", InstanceName = "CardioMRT.LeftVentriclePage.T2ImageFile", IsExportable = false)]
        public ImageFile T2ImageFile { get; set; }

        [RadioReportId("uni_06_003_03")]
        public string T2SerialNumber { get; set; }

        [RadioReportId("uni_06_005_03")]
        public string T2PictureNumber { get; set; }
        #endregion

        #region T1Gd
        public Guid? T1GdImageFileId { get; set; }

        [RadioReportId("uni_06_007_04l", InstanceName = "CardioMRT.LeftVentriclePage.T1GdImageFile", IsExportable = false)]
        public ImageFile T1GdImageFile { get; set; }

        [RadioReportId("uni_06_003_04")]
        public string T1GdSerialNumber { get; set; }

        [RadioReportId("uni_06_005_04")]
        public string T1GdPictureNumber { get; set; }
        #endregion

        public void DropImageFile(Guid? imageFileId)
		{
            if (imageFileId == LGEImageFileId)
            {
                SetImageFile(null, nameof(LGEImageFile));
            }
            else if (imageFileId == T1ImageFileId)
            {
                SetImageFile(null, nameof(T1ImageFile));
            }
            else if (imageFileId == T2ImageFileId)
            {
                SetImageFile(null, nameof(T2ImageFile));
            }
            else if (imageFileId == T1GdImageFileId)
            {
                SetImageFile(null, nameof(T1GdImageFile));
            }
        }

        public Guid? GetImageFileGuid(string fileType)
        {
            if (fileType == null) throw new ArgumentNullException(nameof(fileType));

            if (fileType.Equals(nameof(LGEImageFile), StringComparison.OrdinalIgnoreCase))
            {
                return LGEImageFileId;
            }
            else if (fileType.Equals(nameof(T1ImageFile), StringComparison.OrdinalIgnoreCase))
            {
                return T1ImageFileId;
            }
            else if (fileType.Equals(nameof(T2ImageFile), StringComparison.OrdinalIgnoreCase))
            {
                return T2ImageFileId;
            }
            else if (fileType.Equals(nameof(T1GdImageFile), StringComparison.OrdinalIgnoreCase))
            {
                return T1GdImageFileId;
            }
            else
            {
                return null;
            }
        }

        public void SetImageFile(ImageFile imageFile, string fileType)
        {
            if (fileType == null) throw new ArgumentNullException(nameof(fileType));

            if (fileType.Equals(nameof(LGEImageFile), StringComparison.OrdinalIgnoreCase))
            {
                LGEImageFile = imageFile;
                LGEImageFileId = imageFile?.Id;
            }
            else if (fileType.Equals(nameof(T1ImageFile), StringComparison.OrdinalIgnoreCase))
            {
                T1ImageFile = imageFile;
                T1ImageFileId = imageFile?.Id;
            }
            else if (fileType.Equals(nameof(T2ImageFile), StringComparison.OrdinalIgnoreCase))
            {
                T2ImageFile = imageFile;
                T2ImageFileId = imageFile?.Id;
            }
            else if (fileType.Equals(nameof(T1GdImageFile), StringComparison.OrdinalIgnoreCase))
            {
                T1GdImageFile = imageFile;
                T1GdImageFileId = imageFile?.Id;
            }
        }

        public List<Guid> ImageIds
        {
            get
            {
                var result = new List<Guid>();
                var temp = new[]
                {
                    LGEImageFileId,
                    T1ImageFileId,
                    T2ImageFileId,
                    T1GdImageFileId
                };
                foreach (var id in temp)
                {
                    if (id.HasValue)
                    {
                        result.Add(id.Value);
                    }
                }
                return result;
            }
        }

        public bool HasImages =>
            LGEImageFileId.HasValue ||
            T1ImageFileId.HasValue ||
            T2ImageFileId.HasValue ||
            T1GdImageFileId.HasValue;
        #endregion

        [RadioReportId("car_m_060502")]
		public bool IsT1 { get; set; }

		[RadioReportId("car_m_060503")]
		public bool IsT2 { get; set; }

		[RadioReportId("car_m_060504")]
		public bool IsT1Gd { get; set; }

		[RadioReportId("car_m_0605101")]
		public bool IsT2Asterisk { get; set; }

		[RadioReportId("car_m_0605103")]
		public int? ValueMyocardiumInMs { get; set; }

		[RadioReportId("car_m_0605105")]
		public int? ReferenceValueOfMyocardiumInMs { get; set; }

		[RadioReportId("car_m_060509l", InstanceName = nameof(T1Localizer), IsExportable = false)]
		public RelaxingTimeLocalizer T1Localizer { get; set; }

		[RadioReportId("car_m_060510l", InstanceName = nameof(T2Localizer), IsExportable = false)]
		public RelaxingTimeLocalizer T2Localizer { get; set; }

		[RadioReportId("car_m_060512l", InstanceName = nameof(T1GdLocalizer), IsExportable = false)]
		public RelaxingTimeLocalizer T1GdLocalizer { get; set; }

		public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.CardioMrtLeftVentricle;
    }
}
