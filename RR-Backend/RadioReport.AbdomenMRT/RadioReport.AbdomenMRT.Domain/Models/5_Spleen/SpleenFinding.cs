using System;
using RadioReport.AbdomenMRT.Domain.Constants;
using RadioReport.AbdomenMRT.Domain.Enums;
using RadioReport.AbdomenMRT.Domain.Enums.Spleen;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.AbdomenMRT.Domain.Models
{
    public class SpleenFinding : SpleenFindingBase, IRadioReportIdConditionEvaluator, IImageFileContainer
    {
		#region Common
        [RadioReportId("abd_m_050242", InstanceName = nameof(SpleenFindingType.StandardVariants))]
        [RadioReportId("abd_m_050209", InstanceName = nameof(SpleenFindingType.Splenomegaly))]
        [RadioReportId("abd_m_050341", InstanceName = nameof(SpleenFindingType.Mass))]
        [RadioReportId("abd_m_050252", InstanceName = nameof(SpleenFindingType.SplenicInfarction))]
        public int? SizeInMm { get; set; }

        [RadioReportId("abd_m_050245", InstanceName = nameof(SpleenFindingType.StandardVariants))]
        [RadioReportId("abd_m_050212", InstanceName = nameof(SpleenFindingType.Splenomegaly))]
        [RadioReportId("abd_m_050344", InstanceName = nameof(SpleenFindingType.Mass))]
        [RadioReportId("abd_m_050255", InstanceName = nameof(SpleenFindingType.SplenicInfarction))]
        public int? SecondPlaneInMm { get; set; }

        [RadioReportId("abd_m_050248", InstanceName = nameof(SpleenFindingType.StandardVariants))]
        [RadioReportId("abd_m_050215", InstanceName = nameof(SpleenFindingType.Splenomegaly))]
        [RadioReportId("abd_m_050347", InstanceName = nameof(SpleenFindingType.Mass))]
        [RadioReportId("abd_m_050258", InstanceName = nameof(SpleenFindingType.SplenicInfarction))]
        public int? ThirdPlaneInMm { get; set; }
		#endregion

		#region StandardVariants
        public PlantVariationPathologicalAnatomyType PlantVariationPathologicalAnatomyType { get; set; }

        [RadioReportId("abd_m_050302", InstanceName = nameof(SpleenFindingType.StandardVariants))]
        public bool IsCleaves { get; set; }

        [RadioReportId("abd_m_050303", InstanceName = nameof(SpleenFindingType.StandardVariants))]
        public bool IsNotches { get; set; }

        [RadioReportId("abd_m_050304", InstanceName = nameof(SpleenFindingType.StandardVariants))]
        public bool IsNodes { get; set; }

        [RadioReportId("abd_m_050305", InstanceName = nameof(SpleenFindingType.StandardVariants))]
        public bool IsLobulation { get; set; }

        #endregion

        #region Mass       
        [RadioReportId("abd_m_050109-l", InstanceName = nameof(InstanceNames.Spleen), IsExportable = false)]
        public DescriptionType DescriptionType { get; set; }

        [RadioReportId("abd_m_050219", InstanceName = nameof(SpleenFindingType.Mass))]
        public bool IsHistologyKnown { get; set; }

        public HistologyKnownType HistologyKnownType { get; set; }

        [RadioReportId("abd_m_050263", InstanceName = nameof(SpleenFindingType.Mass))]
        public bool IsExtremitasAnterior { get; set; }

        [RadioReportId("abd_m_050264", InstanceName = nameof(SpleenFindingType.Mass))]
        public bool IsMiddleThird { get; set; }

        [RadioReportId("abd_m_050265", InstanceName = nameof(SpleenFindingType.Mass))]
        public bool IsAtTheHilus { get; set; }

        [RadioReportId("abd_m_050266", InstanceName = nameof(SpleenFindingType.Mass))]
        public bool IsExtremePosterior { get; set; }

        [RadioReportId("abd_m_050268", InstanceName = nameof(SpleenFindingType.Mass))]
        public bool IsParenchymatous { get; set; }

        [RadioReportId("abd_m_050269", InstanceName = nameof(SpleenFindingType.Mass))]
        public bool IsSubcapsular { get; set; }

        public QuantityType QuantityType { get; set; }

        [RadioReportId("abd_m_050502", InstanceName = nameof(SpleenFindingType.Mass))]
        public bool IsFat { get; set; }

        [RadioReportId("abd_m_050503", InstanceName = nameof(SpleenFindingType.Mass))]
        public bool IsLiquid { get; set; }

        [RadioReportId("abd_m_050504", InstanceName = nameof(SpleenFindingType.Mass))]
        public bool IsCalcium { get; set; }

        [RadioReportId("abd_m_050505", InstanceName = nameof(SpleenFindingType.Mass))]
        public bool IsCapsule { get; set; }

        [RadioReportId("abd_m_050506", InstanceName = nameof(SpleenFindingType.Mass))]
        public bool IsSepts { get; set; }

        [RadioReportId("abd_m_050507", InstanceName = nameof(SpleenFindingType.Mass))]
        public bool IsNecrosis { get; set; }

        [RadioReportId("abd_m_050508", InstanceName = nameof(SpleenFindingType.Mass))]
        public bool IsFlowVoid { get; set; }

        [RadioReportId("abd_m_050509", InstanceName = nameof(SpleenFindingType.Mass))]
        public bool IsBleeding { get; set; }

        [RadioReportId("abd_m_050511", InstanceName = nameof(SpleenFindingType.Mass))]
        public bool IsNoDisplacement { get; set; }

        [RadioReportId("abd_m_050512", InstanceName = nameof(SpleenFindingType.Mass))]
        public bool IsMass { get; set; }

        [RadioReportId("abd_m_050237", InstanceName = nameof(SpleenFindingType.Mass))]
        public bool IsDiffusionRestriction { get; set; }

        [RadioReportId("abd_m_050411", InstanceName = nameof(SpleenFindingType.Mass))]
        public SpleenDiagnosisType DifferentialDiagnosis1 { get; set; }

        [RadioReportId("abd_m_050412", InstanceName = nameof(SpleenFindingType.Mass))]
        public bool IsSuspicionOf { get; set; }

        [RadioReportId("abd_m_050414", InstanceName = nameof(SpleenFindingType.Mass))]
        public SpleenDiagnosisType DifferentialDiagnosis2 { get; set; }

        [RadioReportId("abd_m_050415", InstanceName = nameof(SpleenFindingType.Mass))]
        public bool IsSubordinate { get; set; }

        [RadioReportId("abd_m_050417", InstanceName = nameof(SpleenFindingType.Mass))]
        public SpleenDiagnosisType DifferentialDiagnosis3 { get; set; }

        [RadioReportId("abd_m_050418", InstanceName = nameof(SpleenFindingType.Mass))]
        public bool IsMoreThanOneLesionSamePathology { get; set; }

        [RadioReportId("abd_m_050420", InstanceName = nameof(SpleenFindingType.Mass))]
        public bool IsMoreThanOneLesionParenchymatous { get; set; }

        [RadioReportId("abd_m_050421", InstanceName = nameof(SpleenFindingType.Mass))]
        public bool IsMoreThanOneLesionSubcapsular { get; set; }

        #endregion

        #region SplenicInfarction
        [RadioReportId("abd_m_050331", InstanceName = nameof(SpleenFindingType.SplenicInfarction))]
        public bool IsUpstreamAneurysm { get; set; }

        [RadioReportId("abd_m_050333", InstanceName = nameof(SpleenFindingType.SplenicInfarction))]
        public byte? MaxDiameterInMm { get; set; }

        [RadioReportId("abd_m_050335", InstanceName = nameof(SpleenFindingType.SplenicInfarction))]
        public bool IsUpstreamArterialOcclusion { get; set; }

        [RadioReportId("abd_m_050336", InstanceName = nameof(SpleenFindingType.SplenicInfarction))]
        public bool IsOcclusionOfTheSplenicVein { get; set; }

        [RadioReportId("abd_m_050337", InstanceName = nameof(SpleenFindingType.SplenicInfarction))]
        public bool IsThrombosisOfTheSplenicVein { get; set; }

        [RadioReportId("abd_m_050338", InstanceName = nameof(SpleenFindingType.SplenicInfarction))]
        public bool IsMultifocalLocalization { get; set;}
        #endregion

        #region ImageFileUpload
        [RadioReportId("uni_05_003")]
        public string SerialNumber { get; set; }

        [RadioReportId("uni_05_005")]
        public string PictureNumber { get; set; }

        public Guid? ImageFileId { get; set; }

        [RadioReportId("uni_05_007", InstanceName = "AbdomenMRT.Spleen.SpleenFinding", IsExportable = false)]
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

        public bool CheckCondition(string customConditionId) =>
            customConditionId switch
            {
                nameof(SpleenFindingType.Mass) => FindingType.ToString() == customConditionId,
                _ => false
            };
    }
}