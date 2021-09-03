using System;
using RadioReport.AbdomenMRT.Domain.Constants;
using RadioReport.AbdomenMRT.Domain.Enums;
using RadioReport.AbdomenMRT.Domain.Enums.AdrenalGlands;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.AbdomenMRT.Domain.Models
{
    public class AdrenalGlandsFinding : FindingBase, IImageFileContainer
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("abd_m_080106")]
        public AdrenalGlandsFindingType FindingType { get; set; }

        #region Common

        [RadioReportId("abd_m_080508", InstanceName = nameof(AdrenalGlandsFindingType.Mass))]
		[RadioReportId("abd_m_080520", InstanceName = nameof(AdrenalGlandsFindingType.AdrenalHyperplasia))]
		public bool IsSuspicionOf { get; set; }

		[RadioReportId("abd_m_080304", InstanceName = nameof(AdrenalGlandsFindingType.Mass))]
		[RadioReportId("abd_m_080304", InstanceName = nameof(AdrenalGlandsFindingType.AdrenalHyperplasia))]
		public int? SizeInMm { get; set; }

		[RadioReportId("abd_m_080307", InstanceName = nameof(AdrenalGlandsFindingType.Mass))]
		[RadioReportId("abd_m_080307", InstanceName = nameof(AdrenalGlandsFindingType.AdrenalHyperplasia))]
		public int? SecondPlaneInMm { get; set; }

		[RadioReportId("abd_m_080310", InstanceName = nameof(AdrenalGlandsFindingType.Mass))]
		[RadioReportId("abd_m_080310", InstanceName = nameof(AdrenalGlandsFindingType.AdrenalHyperplasia))]
		public int? ThirdPlaneInMm { get; set; }

		#region IMAGE FILE
        public Guid? ImageFileId { get; set; }

        [RadioReportId("uni_08_007", InstanceName = "AbdomenMRT.AdrenalGlands", IsExportable = false)]
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

        [RadioReportId("uni_08_003")]
        public string SerialNumber { get; set; }

        [RadioReportId("uni_08_005")]
        public string PictureNumber { get; set; }

        #endregion

		#endregion

		#region Mass

		public LocalizationType LocalizationType { get; set; }

		[RadioReportId("abd_m_080403", InstanceName = nameof(AdrenalGlandsFindingType.Mass))]
		public SignalTypeExtended SingalT1wType { get; set; }

		[RadioReportId("abd_m_080406", InstanceName = nameof(AdrenalGlandsFindingType.Mass))]
		public SignalTypeExtended SingalT2wType { get; set; }

		[RadioReportId("abd_m_080502", InstanceName = nameof(AdrenalGlandsFindingType.Mass))]
		public bool IsSignalDropInPhaseShift { get; set; }

		[RadioReportId("abd_m_080504", InstanceName = nameof(AdrenalGlandsFindingType.Mass))]
		public bool IsDiffusionRestriction { get; set; }

		[RadioReportId("abd_m_080208", InstanceName = nameof(AdrenalGlandsFindingType.Mass))]
		public bool IsFocalRegressiveChanges { get; set; }

		[RadioReportId("abd_m_080209", InstanceName = nameof(AdrenalGlandsFindingType.Mass))]
		public bool IsCalcification { get; set; }

		[RadioReportId("abd_m_080210", InstanceName = nameof(AdrenalGlandsFindingType.Mass))]
		public bool IsAtrophyOfTheRemainingAdrenalGland { get; set; }

		[RadioReportId("abd_m_080211", InstanceName = nameof(AdrenalGlandsFindingType.Mass))]
		public bool IsFatTissue { get; set; }

		[RadioReportId("abd_m_080212", InstanceName = nameof(AdrenalGlandsFindingType.Mass))]
		public bool IsEquivalentToFat { get; set; }

		[RadioReportId("abd_m_080219", InstanceName = nameof(AdrenalGlandsFindingType.Mass))]
		public bool IsMacroscopicFat { get; set; }

		[RadioReportId("abd_m_080220", InstanceName = nameof(AdrenalGlandsFindingType.Mass))]
		public bool IsIntracytoplasmicFat { get; set; }

		[RadioReportId("abd_m_080213", InstanceName = nameof(AdrenalGlandsFindingType.Mass))]
		public bool IsHemorrhage { get; set; }

		[RadioReportId("abd_m_080214", InstanceName = nameof(AdrenalGlandsFindingType.Mass))]
		public bool IsNecrosis { get; set; }

		[RadioReportId("abd_m_080321", InstanceName = nameof(AdrenalGlandsFindingType.Mass))]
		public bool IsLocoregionalLymphadenopathy { get; set; }

		public GrowthPatternsType GrowthPatternsType { get; set; }

		[RadioReportId("abd_m_080315", InstanceName = nameof(AdrenalGlandsFindingType.Mass))]
		public bool IsKidneys { get; set; }

		[RadioReportId("abd_m_080316", InstanceName = nameof(AdrenalGlandsFindingType.Mass))]
		public bool IsDiaphragm { get; set; }

		[RadioReportId("abd_m_080317", InstanceName = nameof(AdrenalGlandsFindingType.Mass))]
		public bool IsSupradiaphragmaticSpread { get; set; }

		[RadioReportId("abd_m_080318", InstanceName = nameof(AdrenalGlandsFindingType.Mass))]
		public bool IsMusculature { get; set; }

		[RadioReportId("abd_m_080320", InstanceName = nameof(AdrenalGlandsFindingType.Mass))]
		public bool IsMidlineCrossing { get; set; }


		[RadioReportId("abd_m_080407-l", InstanceName = nameof(InstanceNames.AdrenalGlands), IsExportable = false)]
		public CMEnhancementQuantitativeType CMEnhancementQuantitativeType { get; set; }

		[RadioReportId("abd_m_080410-l", InstanceName = nameof(InstanceNames.AdrenalGlands), IsExportable = false)]
		public HomogeneityType HomogeneityType { get; set; }

		[RadioReportId("abd_m_080507", InstanceName = nameof(AdrenalGlandsFindingType.Mass))]
		public AdrenalGlandsDifferentialDiagnosisType DifferentialDiagnosis1Type { get; set; }

		[RadioReportId("abd_m_080510", InstanceName = nameof(AdrenalGlandsFindingType.Mass))]
		public AdrenalGlandsDifferentialDiagnosisType DifferentialDiagnosis2Type { get; set; }

		[RadioReportId("abd_m_080511", InstanceName = nameof(AdrenalGlandsFindingType.Mass))]
		public bool IsSubordinate { get; set; }

		#endregion

		#region AdrenalHyperplasia

		[RadioReportId("abd_m_080217", InstanceName = nameof(AdrenalGlandsFindingType.AdrenalHyperplasia))]
		public bool IsRight { get; set; }

		[RadioReportId("abd_m_080218", InstanceName = nameof(AdrenalGlandsFindingType.AdrenalHyperplasia))]
		public bool IsLeft { get; set; }

		public FormType FormType { get; set; }

		[RadioReportId("abd_m_080519", InstanceName = nameof(AdrenalGlandsFindingType.AdrenalHyperplasia))]
		public AdrenalGlandsDifferentialDiagnosisType DifferentialDiagnosisType { get; set; }

		#endregion
    }
}
