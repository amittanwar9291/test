using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.ShoulderMRT.Domain.Enums;
using System;

namespace RadioReport.ShoulderMRT.Domain.Models
{
    public class LabrumAndRibbonsFinding : LabrumAndRibbonsFindingBase, IImageFileContainer, IRadioReportIdConditionEvaluator
    {
        public DescriptionType DescriptionType { get; set; }

        [RadioReportId("uni_06_003", InstanceName = nameof(LabrumAndRibbonsFindingType.Labrum))]
        [RadioReportId("uni_06_003", InstanceName = nameof(LabrumAndRibbonsFindingType.Ligaments))]
        [RadioReportId("uni_06_003", InstanceName = nameof(LabrumAndRibbonsFindingType.BicepsTendon))]
        public string SerialNumber { get; set; }

        [RadioReportId("uni_06_005", InstanceName = nameof(LabrumAndRibbonsFindingType.Labrum))]
        [RadioReportId("uni_06_005", InstanceName = nameof(LabrumAndRibbonsFindingType.Ligaments))]
        [RadioReportId("uni_06_005", InstanceName = nameof(LabrumAndRibbonsFindingType.BicepsTendon))]
        public string PictureNumber { get; set; }

        public Guid? ImageFileId { get; set; }

        [RadioReportId("uni_06_007", InstanceName = "ShoulderMRT.LabrumAndRibbonsFinding.Labrum", CustomConditionName = nameof(LabrumAndRibbonsFindingType.Labrum), IsExportable = false)]
        [RadioReportId("uni_06_007", InstanceName = "ShoulderMRT.LabrumAndRibbonsFinding.Ligamenta", CustomConditionName = nameof(LabrumAndRibbonsFindingType.Ligaments), IsExportable = false)]
        [RadioReportId("uni_06_007", InstanceName = "ShoulderMRT.LabrumAndRibbonsFinding.BicepsTendon", CustomConditionName = nameof(LabrumAndRibbonsFindingType.BicepsTendon), IsExportable = false)]
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

        #region Labrum      

        [RadioReportId("sho_m_060204", InstanceName = nameof(LabrumAndRibbonsFindingType.Labrum))]
        public LabrumLocations LabrumLocation { get; set; }

        // Labral cyst
        [RadioReportId("sho_m_060413", InstanceName = nameof(LabrumAndRibbonsFindingType.Labrum))]
        public bool IsLabrumCyst { get; set; }

        [RadioReportId("sho_m_060415", InstanceName = nameof(LabrumAndRibbonsFindingType.Labrum))]
        public int? DiameterInMm { get; set; }

        [RadioReportId("sho_m_060509", InstanceName = nameof(LabrumAndRibbonsFindingType.Labrum))]
        public DiagnosisType Diagnosis1 { get; set; }

        [RadioReportId("sho_m_060511", InstanceName = nameof(LabrumAndRibbonsFindingType.Labrum))]
        public DiagnosisType Diagnosis2 { get; set; }

        // Subordinated
        [RadioReportId("sho_m_060512", InstanceName = nameof(LabrumAndRibbonsFindingType.Labrum))]
        public bool IsSubordinate { get; set; }

        #endregion

        #region Ligamenta

        // Superior glenohumeral ligament (SGHL)
        [RadioReportId("sho_m_060207", InstanceName = nameof(LabrumAndRibbonsFindingType.Ligaments))]
        public bool IsLigGlenohumeraleSuperior { get; set; }

        [RadioReportId("sho_m_060208-l", IsExportable = false, CustomConditionName = nameof(LabrumAndRibbonsFindingType.Ligaments))]
        public PulleyLesionDetailsType RupturePulleyLesionAfterHabermayer { get; set; }

        [RadioReportId("sho_m_060307", InstanceName = nameof(LabrumAndRibbonsFindingType.Ligaments))]
        public bool IsDuplicateMGH { get; set; }

        [RadioReportId("sho_m_060310", InstanceName = nameof(LabrumAndRibbonsFindingType.Ligaments))]
        public bool IsIGHLPrevious { get; set; }

        [RadioReportId("sho_m_060311", InstanceName = nameof(LabrumAndRibbonsFindingType.Ligaments))]
        public bool IsIGHLBack { get; set; }

        public LigGlenoIGHLLocalizationType RuptureLigGlenoIGHLLocalization { get; set; }

        // Avulsion
        [RadioReportId("sho_m_060316", InstanceName = nameof(LabrumAndRibbonsFindingType.Ligaments))]
        public bool IsBonyAvulsion { get; set; }

        // Coracohumeral ligament (CHL)
        [RadioReportId("sho_m_060417", InstanceName = nameof(LabrumAndRibbonsFindingType.Ligaments))]
        public bool IsLigCoracohumerale { get; set; }

        // Medial
        [RadioReportId("sho_m_060419", InstanceName = nameof(LabrumAndRibbonsFindingType.Ligaments))]
        public bool IsLigCoracohumeraleMedia { get; set; }

        [RadioReportId("sho_m_060420", InstanceName = nameof(LabrumAndRibbonsFindingType.Ligaments))]
        public bool IsLigCoracohumeraleLateral { get; set; }

        // Coracoacromial ligament (CAL)
        [RadioReportId("sho_m_060421", InstanceName = nameof(LabrumAndRibbonsFindingType.Ligaments))]
        public bool IsRuptureLigCoracoacromiale { get; set; }

        // Coracoclavicular ligament (CCL)
        [RadioReportId("sho_m_060422", InstanceName = nameof(LabrumAndRibbonsFindingType.Ligaments))]
        public bool IsRuptureLigCoracoclaviculare { get; set; }

        // Tranverse humeral ligament (THL)
        [RadioReportId("sho_m_060423", InstanceName = nameof(LabrumAndRibbonsFindingType.Ligaments))]
        public bool IsRuptureLigHumeriTransversum { get; set; }

        // Semicircular humeral ligament SCHL; rotator cable
        [RadioReportId("sho_m_060424", InstanceName = nameof(LabrumAndRibbonsFindingType.Ligaments))]
        public bool IsRuptureLigSemicirculareHumeri { get; set; }

        [RadioReportId("sho_m_060216", InstanceName = nameof(LabrumAndRibbonsFindingType.Ligaments))]
        public bool IsSGHL { get; set; }

        // Missing/hypoplastic MGHL
        [RadioReportId("sho_m_060217", InstanceName = nameof(LabrumAndRibbonsFindingType.Ligaments))]
        public bool IsMissingOrHypoPlasticMGHL { get; set; }

        [RadioReportId("sho_m_060219", InstanceName = nameof(LabrumAndRibbonsFindingType.Ligaments))]
        public bool IsBufordComplex { get; set; }

        [RadioReportId("sho_m_060221", InstanceName = nameof(LabrumAndRibbonsFindingType.Ligaments))]
        public bool IsIGHL { get; set; }

        // Coracohumeral ligament (CHL)
        [RadioReportId("sho_m_060317", InstanceName = nameof(LabrumAndRibbonsFindingType.Ligaments))]
        public bool IsThickeningLigCoracohumerale { get; set; }

        // Coracoacromial ligament (CAL)
        [RadioReportId("sho_m_060318", InstanceName = nameof(LabrumAndRibbonsFindingType.Ligaments))]
        public bool IsThickeningLigCoracoacromiale { get; set; }

        // Coracoclavicular ligament (CCL)
        [RadioReportId("sho_m_060319", InstanceName = nameof(LabrumAndRibbonsFindingType.Ligaments))]
        public bool IsThickeningLigCoracoclaviculare { get; set; }

        // Transverse humeral ligament (THL)
        [RadioReportId("sho_m_060320", InstanceName = nameof(LabrumAndRibbonsFindingType.Ligaments))]
        public bool IsThickeningLigHumeriTransversum { get; set; }

        // Semicircular ligament  („rotator cable“)
        [RadioReportId("sho_m_060321", InstanceName = nameof(LabrumAndRibbonsFindingType.Ligaments))]
        public bool IsThickeningLigSemicirculareHumeri { get; set; }

        #endregion

        #region BicepsTendon

        public LongBicepsTendonType LongBicepsTendonType { get; set; }

        [RadioReportId("sho_m_060323", InstanceName = nameof(LabrumAndRibbonsFindingType.BicepsTendon))]
        public int? RetractionInMm { get; set; }

        // Severely retracted tendon (toward the biceps anchor)
        [RadioReportId("sho_m_060325", InstanceName = nameof(LabrumAndRibbonsFindingType.BicepsTendon))]
        public bool IsRetractedTendonStumpBicepsAnchor { get; set; }

        [RadioReportId("sho_m_060326", InstanceName = nameof(LabrumAndRibbonsFindingType.BicepsTendon))]
        public bool IsIntraArticularEntrapment { get; set; }

        [RadioReportId("sho_m_060328", InstanceName = nameof(LabrumAndRibbonsFindingType.BicepsTendon))]
        public bool IsThinningOutDegeneration { get; set; }

        [RadioReportId("sho_m_060329", InstanceName = nameof(LabrumAndRibbonsFindingType.BicepsTendon))]
        public bool IsThickeningMoreThan5Degeneration { get; set; }

        // Subentheseal cyst
        [RadioReportId("sho_m_060330", InstanceName = nameof(LabrumAndRibbonsFindingType.BicepsTendon))]
        public bool IsCystDegeneration { get; set; }

        [RadioReportId("sho_m_060331", InstanceName = nameof(LabrumAndRibbonsFindingType.BicepsTendon))]
        public int? CystDiameterInMm { get; set; }

        [RadioReportId("sho_m_060333", InstanceName = nameof(LabrumAndRibbonsFindingType.BicepsTendon))]
        public bool IsIncreasedSignalOnT2wOrPdAndT1w { get; set; }

        // Increased fluid  within tendon sheath
        [RadioReportId("sho_m_060335", InstanceName = nameof(LabrumAndRibbonsFindingType.BicepsTendon))]
        public bool IsTendinitisLiquidInTendonSheath { get; set; }

        [RadioReportId("sho_m_060336", InstanceName = nameof(LabrumAndRibbonsFindingType.BicepsTendon))]
        public bool IsTendinitisThickening { get; set; }

        [RadioReportId("sho_m_060337", InstanceName = nameof(LabrumAndRibbonsFindingType.BicepsTendon))]
        public bool IsTendinitisThinningOut { get; set; }

        [RadioReportId("sho_m_060338", InstanceName = nameof(LabrumAndRibbonsFindingType.BicepsTendon))]
        public bool IsTendinitisT2wSignalIncrease { get; set; }

        [RadioReportId("sho_m_060339-l", IsExportable = false, CustomConditionName = nameof(LabrumAndRibbonsFindingType.BicepsTendon))]
        public PulleyLesionDetailsType PulleyLesionBiceps { get; set; }

        public DislocationDetailsType DislocationDetailsType { get; set; }

        public DislocationFromSulcusType DislocationFromSulcusType { get; set; }

        public bool CheckCondition(string customConditionId) =>
           customConditionId switch
           {
               nameof(LabrumAndRibbonsFindingType.Labrum) => FindingType.ToString() == customConditionId,
               nameof(LabrumAndRibbonsFindingType.Ligaments) => FindingType.ToString() == customConditionId,
               nameof(LabrumAndRibbonsFindingType.BicepsTendon) => FindingType.ToString() == customConditionId,
               _ => false
           };

        #endregion
    }
}
