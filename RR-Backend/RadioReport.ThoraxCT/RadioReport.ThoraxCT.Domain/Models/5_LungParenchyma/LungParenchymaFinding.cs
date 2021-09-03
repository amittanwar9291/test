using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.ThoraxCT.Domain.Enums;
using RadioReport.ThoraxCT.Domain.Enums.RoundStove;
using System;

namespace RadioReport.ThoraxCT.Domain.Models
{
    public class LungParenchymaFinding : LungParenchymaFindingBase, IImageFileContainer, IRadioReportIdConditionEvaluator
    {
        #region Common

        [RadioReportId("tho_c_050111-l", InstanceName = nameof(LungParenchymaFinding) + nameof(LungParenchymaFindingType.Mass), IsExportable = false)]
        public DescriptionType DescriptionType { get; set; }

        [RadioReportId("tho_c_0502401", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_0502401", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        public bool IsHistologyKnown { get; set; }

        public HistologyKnownType HistologyKnownType { get; set; }

        [RadioReportId("tho_c_050203-l", InstanceName = nameof(MainCharacteristicsLocalizationType), IsExportable = false)]
        public LungParenchymaLocalizationType MainCharacteristicsLocalizationType { get; set; }

        [RadioReportId("tho_c_050405", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_0503240", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        public int? MeasuredValuesMaxDiameterAxialInMm { get; set; }

        [RadioReportId("tho_c_050408", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_0503242", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        public int? MeasuredValuesVolumeInMm3 { get; set; }

        [RadioReportId("tho_c_0505300", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_0504307", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        public int? AverageDensityInHU { get; set; }

        [RadioReportId("tho_c_050214", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_050214", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        [RadioReportId("tho_c_050214", InstanceName = nameof(LungParenchymaFindingType.Atelectasis))]
        [RadioReportId("tho_c_0502205", InstanceName = nameof(LungParenchymaFindingType.Consolidation))]
        [RadioReportId("tho_c_0502205", InstanceName = nameof(LungParenchymaFindingType.PulmonaryInfarction))]
        public LungsSegmentsLocations MainCharacteristicsLungsSegmentsLocation { get; set; }

        [RadioReportId("tho_c_050216", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_0505302", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        public bool IsRiglerNotchSign { get; set; }

        [RadioReportId("tho_c_050219", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_0505304", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        public bool IsCentralNecrosis { get; set; }

        [RadioReportId("tho_c_050232", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_050232", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        [RadioReportId("tho_c_0502200", InstanceName = nameof(LungParenchymaFindingType.Consolidation))]
        public LungParenchymaDiagnosisType DifferentialDiagnosis01 { get; set; }

        [RadioReportId("tho_c_050233", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_050233", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        [RadioReportId("tho_c_0502201", InstanceName = nameof(LungParenchymaFindingType.Consolidation))]
        public bool IsSuspected { get; set; }

        [RadioReportId("tho_c_050235", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_050235", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        [RadioReportId("tho_c_0502203", InstanceName = nameof(LungParenchymaFindingType.Consolidation))]
        public LungParenchymaDiagnosisType DifferentialDiagnosis02 { get; set; }

        [RadioReportId("tho_c_050236", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_050236", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        [RadioReportId("tho_c_0502204", InstanceName = nameof(LungParenchymaFindingType.Consolidation))]
        public bool IsSubordinated { get; set; }

        [RadioReportId("tho_c_050238", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_050238", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        public LungParenchymaDiagnosisType DifferentialDiagnosis03 { get; set; }

        [RadioReportId("tho_c_050320", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_050320", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        public bool IsMoreThanOneLesionSamePathology { get; set; }

        [RadioReportId("tho_c_050321-l", InstanceName = nameof(DifferentialDiagnosisLocalizationType), IsExportable = false)]
        public LungParenchymaLocalizationType DifferentialDiagnosisLocalizationType { get; set; }

        [RadioReportId("tho_c_0503401", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_050331", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        public LungsSegmentsLocations DifferentialDiagnosisLungsSegmentsLocation { get; set; }

        [RadioReportId("tho_c_0503235", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("tho_c_0503225", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        public LungsFlapsLocations DifferentialDiagnosisLungsFlapsLocation { get; set; }

        #endregion

        #region Nodule

        public PerifissuralNodulusType PerifissuralNodulusType { get; set; }

        [RadioReportId("tho_c_050312", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        public int? DistanceToInterlobularSeptumInMm { get; set; }

        #endregion

        #region Mass

        [RadioReportId("tho_c_0503209", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        public bool IsPleura { get; set; }

        [RadioReportId("tho_c_0503210", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        public bool IsPericardium { get; set; }

        [RadioReportId("tho_c_0503212", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        public bool IsRib { get; set; }

        [RadioReportId("tho_c_0503213", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        public bool IsSternum { get; set; }

        [RadioReportId("tho_c_0503214", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        public bool IsClavicule { get; set; }

        [RadioReportId("tho_c_0503215", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        public bool IsVertebralBody { get; set; }

        [RadioReportId("tho_c_0504206", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        public bool IsAPulmonalis { get; set; }

        [RadioReportId("tho_c_0504207", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        public bool IsAPulmonalisRight { get; set; }

        [RadioReportId("tho_c_0504208", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        public bool IsAPulmonalisLeft { get; set; }

        [RadioReportId("tho_c_0504209", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        public bool IsVvPulmonary { get; set; }

        [RadioReportId("tho_c_0504210", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        public bool IsVvPulmonaryRight { get; set; }

        [RadioReportId("tho_c_0504211", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        public bool IsVvPulmonaryLeft { get; set; }

        [RadioReportId("tho_c_0504212", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        public bool IsASubclavia { get; set; }

        [RadioReportId("tho_c_0504213", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        public bool IsASubclaviaRight { get; set; }

        [RadioReportId("tho_c_0504214", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        public bool IsASubclaviaLeft { get; set; }

        [RadioReportId("tho_c_0504215", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        public bool IsVSubclavia { get; set; }

        [RadioReportId("tho_c_0504216", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        public bool IsVSubclaviaRight { get; set; }

        [RadioReportId("tho_c_0504217", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        public bool IsVSubclaviaLeft { get; set; }

        [RadioReportId("tho_c_0505201", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        public bool IsTrachea { get; set; }

        [RadioReportId("tho_c_0505202", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        public bool IsBifurcation { get; set; }

        [RadioReportId("tho_c_0505203", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        public bool IsMainBronchus { get; set; }

        [RadioReportId("tho_c_0505204", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        public bool IsMainBronchusRight { get; set; }

        [RadioReportId("tho_c_0505205", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        public bool IsMainBronchusLeft { get; set; }

        [RadioReportId("tho_c_0505207", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        public bool IsPlexusCervicalis { get; set; }

        [RadioReportId("tho_c_0505208", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        public bool IsPlexusCervicalisRight { get; set; }

        [RadioReportId("tho_c_0505209", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        public bool IsPlexusCervicalisLeft { get; set; }

        [RadioReportId("tho_c_0505210", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        public bool IsPlexusBrachialis { get; set; }

        [RadioReportId("tho_c_0505211", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        public bool IsPlexusBrachialisRight { get; set; }

        [RadioReportId("tho_c_0505212", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        public bool IsPlexusBrachialisLeft { get; set; }

        #endregion

        #region Atelectasis

        public LungSectionType LungSectionType { get; set; }

        public SideType SideType { get; set; }

        public PeculiaritySegmentatelectasisType PeculiaritySegmentatelectasisType { get; set; }

        public LungParenchymaFormType FormType { get; set; }

        #endregion

        #region Consolidation   

        [RadioReportId("tho_c_0504234", InstanceName = nameof(LungParenchymaFindingType.Consolidation))]
        public bool IsMosaicPattern { get; set; }

        public WellDefinedType WellDefinedType { get; set; }

        [RadioReportId("tho_c_050254", InstanceName = nameof(LungParenchymaFindingType.Consolidation))]
        public bool IsAbscess { get; set; }

        [RadioReportId("tho_c_050261", InstanceName = nameof(LungParenchymaFindingType.Consolidation))]
        public bool IsPneumatocele { get; set; }

        [RadioReportId("tho_c_050349", InstanceName = nameof(LungParenchymaFindingType.Consolidation))]
        public int? AccompanyingEffusionMaxWidthInMm { get; set; }

        #endregion

        #region PulmonaryInfarction

        public PulmonaryInfarctionType PulmonaryInfarctionType { get; set; }

        [RadioReportId("tho_c_050363", InstanceName = nameof(LungParenchymaFindingType.PulmonaryInfarction))]
        public bool IsAbsentBronchopneumogram { get; set; }

        [RadioReportId("tho_c_050364", InstanceName = nameof(LungParenchymaFindingType.PulmonaryInfarction))]
        public bool IsBubblyConsolidation { get; set; }

        [RadioReportId("tho_c_050432", InstanceName = nameof(LungParenchymaFindingType.PulmonaryInfarction))]
        public bool IsDrecreased { get; set; }

        #endregion

        #region IMAGE FILE UPLOAD 

        [RadioReportId("uni_05_003", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("uni_05_003", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        public string SerialNumber { get; set; }

        [RadioReportId("uni_05_005", InstanceName = nameof(LungParenchymaFindingType.Nodule))]
        [RadioReportId("uni_05_005", InstanceName = nameof(LungParenchymaFindingType.Mass))]
        public string PictureNumber { get; set; }

        public Guid? ImageFileId { get; set; }

        [RadioReportId("uni_05_007-l", InstanceName = "ThoraxCT.LungParenchymaFinding", IsExportable = false)]
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

        public bool CheckCondition(string customConditionId) =>
            customConditionId switch
            {
                nameof(LungParenchymaFindingType.Nodule) => FindingType.ToString() == customConditionId,
                nameof(LungParenchymaFindingType.Mass) => FindingType.ToString() == customConditionId,
                nameof(LungParenchymaFindingType.Consolidation) => FindingType.ToString() == customConditionId,
                nameof(LungParenchymaFindingType.PulmonaryInfarction) => FindingType.ToString() == customConditionId,
                _ => false
            };
    }
}
