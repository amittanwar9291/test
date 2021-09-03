using System;
using System.Collections.Generic;
using RadioReport.AbdomenMRT.Domain.Constants;
using RadioReport.AbdomenMRT.Domain.Enums;
using RadioReport.AbdomenMRT.Domain.Enums.LymphaticSystem;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.AbdomenMRT.Domain.Models
{
    public class LymphaticSystemFinding : FindingBase, IImageFileContainer
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("abd_m_110106")]
        public LymphaticSystemFindingType FindingType { get; set; }

        #region LymphNode

        public LocalizationType LocalizationType { get; set; }
		public IEnumerable<LymphNodeStationsFinding> LymphNodeStations { get; set; }

		[RadioReportId("abd_m_110209", InstanceName = nameof(LymphaticSystemFindingType.LymphNodes))]
		public int? MaxShortAxisDiameterSad { get; set; }

		[RadioReportId("abd_m_110320", InstanceName = nameof(LymphaticSystemFindingType.LymphNodes))]
		public bool IsLymphNodeBulk { get; set; }

		[RadioReportId("abd_m_110307", InstanceName = nameof(LymphaticSystemFindingType.LymphNodes))]
		public int? SizeInMm { get; set; }

		[RadioReportId("abd_m_110310", InstanceName = nameof(LymphaticSystemFindingType.LymphNodes))]
		public int? SecondPlaneInMm { get; set; }

		[RadioReportId("abd_m_110313", InstanceName = nameof(LymphaticSystemFindingType.LymphNodes))]
		public int? ThirdPlaneInMm { get; set; }

		[RadioReportId("abd_m_110315", InstanceName = nameof(LymphaticSystemFindingType.LymphNodes))]
		public SpineLocations SpineLocation { get; set; }
		public EvaluationType EvaluationType { get; set; }

		[RadioReportId("abd_m_110421", InstanceName = nameof(LymphaticSystemFindingType.LymphNodes))]
		public bool IsSize { get; set; }

		[RadioReportId("abd_m_110422", InstanceName = nameof(LymphaticSystemFindingType.LymphNodes))]
		public bool IsDiffusionRestriction { get; set; }

		[RadioReportId("abd_m_110423", InstanceName = nameof(LymphaticSystemFindingType.LymphNodes))]
		public bool IsContrastEnhancement { get; set; }

		[RadioReportId("abd_m_110424", InstanceName = nameof(LymphaticSystemFindingType.LymphNodes))]
		public bool IsLocation { get; set; }

		[RadioReportId("abd_m_110425", InstanceName = nameof(LymphaticSystemFindingType.LymphNodes))]
		public bool IsNumber { get; set; }

		[RadioReportId("abd_m_110427", InstanceName = nameof(LymphaticSystemFindingType.LymphNodes))]
		public bool IsFattyHilum { get; set; }

		[RadioReportId("abd_m_110428", InstanceName = nameof(LymphaticSystemFindingType.LymphNodes))]
		public bool IsIncreased { get; set; }

		[RadioReportId("abd_m_110516", InstanceName = nameof(LymphaticSystemFindingType.LymphNodes))]
		public bool IsPathologicDiffusionRestriction { get; set; }

		[RadioReportId("abd_m_110211", InstanceName = nameof(LymphaticSystemFindingType.LymphNodes))]
		public bool IsFattyTissueInTheLnHilus { get; set; }

		[RadioReportId("abd_m_110212", InstanceName = nameof(LymphaticSystemFindingType.LymphNodes))]
		public bool IsFattyInfiltration { get; set; }

		[RadioReportId("abd_m_110213", InstanceName = nameof(LymphaticSystemFindingType.LymphNodes))]
		public bool IsNecrosis { get; set; }

		[RadioReportId("abd_m_110214", InstanceName = nameof(LymphaticSystemFindingType.LymphNodes))]
		public bool IsCysticTransformation { get; set; }

		[RadioReportId("abd_m_110215", InstanceName = nameof(LymphaticSystemFindingType.LymphNodes))]
		public bool IsCalcification { get; set; }

		public FormType FormType { get; set; }

		[RadioReportId("abd_m_110431", InstanceName = nameof(LymphaticSystemFindingType.LymphNodes))]
		public bool IsSandwichSign { get; set; }

		[RadioReportId("abd_m_110432", InstanceName = nameof(LymphaticSystemFindingType.LymphNodes))]
		public bool IsAorticEncasement { get; set; }

		[RadioReportId("abd_m_110433", InstanceName = nameof(LymphaticSystemFindingType.LymphNodes))]
		public bool IsPortalVeinEncasement { get; set; }

		[RadioReportId("abd_m_110517-l", InstanceName = nameof(InstanceNames.LymphaticSystem), IsExportable = false)]
		public CMEnhancementQuantitativeType CMEnhancementQuantitativeType { get; set; }


		[RadioReportId("abd_m_110520-l", InstanceName = nameof(InstanceNames.LymphaticSystem), IsExportable = false)]
		public HomogeneityType HomogeneityType { get; set; }

		[RadioReportId("abd_m_110217", InstanceName = nameof(LymphaticSystemFindingType.LymphNodes))]
		public LymphaticSystemDifferentialDiagnosisType DifferentialDiagnosisType { get; set; }

		[RadioReportId("abd_m_110218", InstanceName = nameof(LymphaticSystemFindingType.LymphNodes))]
		public bool IsSuspicionOf { get; set; }

        #endregion

		#region ImageFileUpload

        [RadioReportId("uni_11_003")]
        public string SerialNumber { get; set; }

        [RadioReportId("uni_11_005")]
        public string PictureNumber { get; set; }

        public Guid? ImageFileId { get; set; }

        [RadioReportId("uni_11_007", InstanceName = "AbdomenMRT.LymphaticSystem", IsExportable = false)]
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
