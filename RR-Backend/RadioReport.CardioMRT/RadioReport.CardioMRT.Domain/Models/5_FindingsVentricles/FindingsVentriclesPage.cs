using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using System;

namespace RadioReport.CardioMRT.Domain.Models
{
    [GeneratedControllerPageWithImageModel("CardioMRT/FindingsVentricles", nameof(MyocardialStrainImage), nameof(UploadedImageFile))]
    public class FindingsVentriclesPage : PageModelBase<FindingsVentriclesPage>, IImageFileContainer
    {
        [RadioReportId("car_m_050106")]
        public int? HeartRate { get; set; }

        #region Left ventricle readings 

        // Myocardium thickness (end-diastolic)

        [RadioReportId("car_m_050204")]
        public int? InterventricularSeptumThicknessInMm { get; set; }

        [RadioReportId("car_m_050206")]
        public int? LateralInMm { get; set; }

        [RadioReportId("car_m_050208")]
        public int? InferiorInMm { get; set; }

        [RadioReportId("car_m_050210")]
        public int? LeftMyocardialMassInG { get; set; }

        [RadioReportId("car_m_050212")]
        public int? LeftMyocardialMassAndBSAInGM2 { get; set; }

        // Function

        [RadioReportId("car_m_050215")]
        public int? LVEndDiastolicDiameterInMm { get; set; }

        [RadioReportId("car_m_050217")]
        public int? LVEDVInMl { get; set; }

        [RadioReportId("car_m_050219")]
        public int? LVESVInMl { get; set; }

        [RadioReportId("car_m_050301")]
        public int? LVEFInPercent { get; set; }

        [RadioReportId("car_m_050303")]
        public int? LVStrokeVolumeInMl { get; set; }

        [RadioReportId("car_m_050305")]
        public int? LvsvAndBSAInMlM2 { get; set; }

        [RadioReportId("car_m_050307")]
        public int? LVOutputInLInMin { get; set; }

        [RadioReportId("car_m_050309")]
        public int? LVEDVAndBSAInMlM2 { get; set; }

        [RadioReportId("car_m_050311")]
        public int? LVESVAndBSAInMlM2 { get; set; }

        [RadioReportId("car_m_050313")]
        public int? LeftEDTimeInMs { get; set; }

        [RadioReportId("car_m_050315")]
        public int? LeftESTimeInMs { get; set; }

        // Myocardial strain
        [RadioReportId("car_m_050402")]
        public float? LongitudinalInPercent { get; set; }

        [RadioReportId("car_m_050404")]
        public float? CircumferentialInPercent { get; set; }

        [RadioReportId("car_m_050417")]
        public float? Global3DStrainInPercent { get; set; }

        #region IMAGE FILE
        public Guid? ImageFileId { get; set; }

        [RadioReportId("uni_05_007l", InstanceName = "CardioMRT.FindingsVentriclesPage.UploadedImageFile", IsExportable = false)]
        public ImageFile UploadedImageFile { get; set; }

        public Guid? MyocardialStrainImageId { get; set; }

        [RadioReportId("car_m_050419l", InstanceName = "CardioMRT.FindingsVentriclesPage.MyocardialStrainImage", IsExportable = false)]
        public ImageFile MyocardialStrainImage {get;set;}

        public void DropImageFile(Guid? imageFileId)
        {
            if(ImageFileId == imageFileId)
            {
                ImageFileId = null;
                UploadedImageFile = null;
            } 
            else if(MyocardialStrainImageId == imageFileId)
            {
                MyocardialStrainImageId = null;
                MyocardialStrainImage = null;
            }
        }

        public Guid? GetImageFileGuid(string fileType)
        {
            if (fileType == null) throw new ArgumentNullException(nameof(fileType));

            if (fileType.Equals(nameof(UploadedImageFile), StringComparison.OrdinalIgnoreCase))
            {
                return ImageFileId;
            }
            else if (fileType.Equals(nameof(MyocardialStrainImage), StringComparison.OrdinalIgnoreCase))
            {
                return MyocardialStrainImageId;
            }
            return null;
        }

        public void SetImageFile(ImageFile imageFile, string fileType)
        {
            if (fileType == null) throw new ArgumentNullException(nameof(fileType));

            if (fileType.Equals(nameof(UploadedImageFile), StringComparison.OrdinalIgnoreCase))
            {
                UploadedImageFile = imageFile;
                ImageFileId = imageFile?.Id;
            }
            else if (fileType.Equals(nameof(MyocardialStrainImage), StringComparison.OrdinalIgnoreCase))
            {
                MyocardialStrainImage = imageFile;
                MyocardialStrainImageId = imageFile?.Id;
            }
        }

        [RadioReportId("uni_05_003")]
        public string SerialNumber { get; set; }

        [RadioReportId("uni_05_005")]
        public string PictureNumber { get; set; }
        #endregion

        // Diagnosis

        [RadioReportId("car_m_050502")]
        public bool IsLeftHeartFailure { get; set; }

        [RadioReportId("car_m_050503")]
        public bool HFpEF => LVEFInPercent >= 50;

        [RadioReportId("car_m_050504")]
        public bool HFmrEF => LVEFInPercent >= 40 && LVEFInPercent <= 49;

        [RadioReportId("car_m_050505")]
        public bool HFrEF => LVEFInPercent < 40;

        #endregion

        #region Findings right ventricle

        // Myocardium thickness (end-diastolic)

        [RadioReportId("car_m_050110")]
        public int? MedioLateralInMm { get; set; }

        [RadioReportId("car_m_050112")]
        public int? AnteroLateralInMm { get; set; }

        [RadioReportId("car_m_050114")]
        public int? InferoLateralInMm { get; set; }

        [RadioReportId("car_m_050116")]
        public int? RightMyocardialMassInG { get; set; }

        [RadioReportId("car_m_050118")]
        public int? RightMyocardialMassAndBSAInGM2 { get; set; }

        // Function

        [RadioReportId("car_m_050121")]
        public int? RVEndDiastolicDiameterInMm { get; set; }

        [RadioReportId("car_m_050123")]
        public int? RVEDVInMl { get; set; }

        [RadioReportId("car_m_050125")]
        public int? RVESVInMl { get; set; }

        [RadioReportId("car_m_050221")]
        public int? RVEFInPercent { get; set; }

        [RadioReportId("car_m_050223")]
        public int? RVStrokeVolumeInMl { get; set; }

        [RadioReportId("car_m_050225")]
        public int? RvsvAndBSAInMlM2 { get; set; }

        [RadioReportId("car_m_050227")]
        public int? RVOutputInLInMin { get; set; }

        [RadioReportId("car_m_050229")]
        public int? RVEDVAndBSAInMlM2 { get; set; }

        [RadioReportId("car_m_050231")]
        public int? RVESVAndBSAInMlM2 { get; set; }

        [RadioReportId("car_m_050233")]
        public int? RightEDTimeInMs { get; set; }

        [RadioReportId("car_m_050235")]
        public int? RightESTimeInMs { get; set; }

        [RadioReportId("car_m_050318")]
        public bool IsRightHeartFailure { get; set; }

        [RadioReportId("car_m_050410")]
        public int? RAIn4ChamberViewInMm { get; set; }

        [RadioReportId("car_m_050413")]
        public int? LAIn4ChamberViewInMm { get; set; }

        [RadioReportId("car_m_050415")]
        public int? Expansion2ndAxisInMm { get; set; }
        
        #endregion

        public override string PageTypeName => Common.Module.Logic.Consts.PageTypeNames.CardioMrtFindingsVentricles;
    }
}
