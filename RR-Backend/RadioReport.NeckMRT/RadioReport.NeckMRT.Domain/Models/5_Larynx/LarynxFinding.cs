using System;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.NeckMRT.Domain.Enums;
using RadioReport.NeckMRT.Domain.Enums.Larynx;

namespace RadioReport.NeckMRT.Domain.Models
{
    public class LarynxFinding : LarynxFindingBase, IImageFileContainer
    {
        #region Common
        
        [RadioReportId("nec_m_050308", InstanceName = nameof(LarynxFindingType.Mass))]
        [RadioReportId("nec_m_050225", InstanceName = nameof(LarynxFindingType.AcuteEpiglottitis))]
        public bool IsEpiglottis { get; set; }

        [RadioReportId("nec_m_050413", InstanceName = nameof(LarynxFindingType.Mass))]
        [RadioReportId("nec_m_050329", InstanceName = nameof(LarynxFindingType.AcuteEpiglottitis))]
        public bool IsLymphadenitis { get; set; }

        [RadioReportId("nec_m_050326", InstanceName = nameof(LarynxFindingType.Mass))]
        [RadioReportId("nec_m_050421", InstanceName = nameof(LarynxFindingType.AcuteEpiglottitis))]
        public bool IsNecrosis { get; set; }

        [RadioReportId("nec_m_050222", InstanceName = nameof(LarynxFindingType.Mass))]
        [RadioReportId("nec_m_050531", InstanceName = nameof(LarynxFindingType.AcuteEpiglottitis))]
        public bool IsSubordinated { get; set; }
        
        #endregion

        #region Mass
        
        [RadioReportId("nec_m_050109-l", InstanceName = nameof(LarynxFinding) + nameof(LarynxFindingType.Mass), IsExportable = false)]
        public DescriptionType DescriptionType { get; set; }
        
        [RadioReportId("nec_m_050205", InstanceName = nameof(LarynxFindingType.Mass))]
        public bool IsHistologyKnown { get; set; }

        public HistologyKnownType HistologyKnownType { get; set; }
        
        [RadioReportId("nec_m_050304", InstanceName = nameof(LarynxFindingType.Mass))]
        public bool IsVestibularFold { get; set; }
        
        [RadioReportId("nec_m_050305", InstanceName = nameof(LarynxFindingType.Mass))]
        public bool IsVocalCord { get; set; }
        
        [RadioReportId("nec_m_050306", InstanceName = nameof(LarynxFindingType.Mass))]
        public bool IsThyroidCartilage { get; set; }
        
        [RadioReportId("nec_m_050307", InstanceName = nameof(LarynxFindingType.Mass))]
        public bool IsAryepiglotticFold { get; set; }
        
        [RadioReportId("nec_m_050310", InstanceName = nameof(LarynxFindingType.Mass))]
        public bool IsThyroarytenoidMuscle { get; set; }
                
        [RadioReportId("nec_m_050312", InstanceName = nameof(LarynxFindingType.Mass))]
        public bool IsAnteriorCommissure { get; set; }
        
        [RadioReportId("nec_m_050313", InstanceName = nameof(LarynxFindingType.Mass))]
        public bool IsPosteriorCommissure { get; set; }
        
        [RadioReportId("nec_m_050314", InstanceName = nameof(LarynxFindingType.Mass))]
        public bool IsSubglotticSpace { get; set; }

        public LocalizationAxialType LocalizationAxialType { get; set; }

        [RadioReportId("nec_m_050504", InstanceName = nameof(LarynxFindingType.Mass))]
        public int? SizeInMm { get; set; }
        
        [RadioReportId("nec_m_050507", InstanceName = nameof(LarynxFindingType.Mass))]
        public int? SecondPlaneInMm { get; set; }
        
        [RadioReportId("nec_m_050510", InstanceName = nameof(LarynxFindingType.Mass))]
        public int? ThirdPlaneInMm { get; set; }

        [RadioReportId("nec_m_050514-l", InstanceName = nameof(LarynxFinding.HomogeneityType), IsExportable = false)]
        public HomogeneityType HomogeneityType { get; set; }
        
        [RadioReportId("nec_m_050215", InstanceName = nameof(LarynxFindingType.Mass))]
        public bool IsDiffusionRestriction { get; set; }
        
        [RadioReportId("nec_m_050316", InstanceName = nameof(LarynxFindingType.Mass))]
        public bool IsMicroscopicFat { get; set; }
        
        [RadioReportId("nec_m_050317", InstanceName = nameof(LarynxFindingType.Mass))]
        public bool IsMacroscopicFat { get; set; }
        
        [RadioReportId("nec_m_050318", InstanceName = nameof(LarynxFindingType.Mass))]
        public bool IsCysts { get; set; }
    
        public CystsType CystsType { get; set; }

        [RadioReportId("nec_m_050321", InstanceName = nameof(LarynxFindingType.Mass))]
        public bool IsHemorrhageSignsOfResidualHemorrhage { get; set; }
        
        [RadioReportId("nec_m_050322", InstanceName = nameof(LarynxFindingType.Mass))]
        public bool IsCalcifications { get; set; }
        
        [RadioReportId("nec_m_050323", InstanceName = nameof(LarynxFindingType.Mass))]
        public bool IsCapsule { get; set; }
        
        [RadioReportId("nec_m_050324", InstanceName = nameof(LarynxFindingType.Mass))]
        public bool IsSepta { get; set; }
        
        [RadioReportId("nec_m_050325", InstanceName = nameof(LarynxFindingType.Mass))]
        public bool IsToothBone { get; set; }
        
        [RadioReportId("nec_m_050327", InstanceName = nameof(LarynxFindingType.Mass))]
        public bool IsAirFluidLevel { get; set; }
        
        [RadioReportId("nec_m_050408", InstanceName = nameof(LarynxFindingType.Mass))]
        public bool IsExophytic { get; set; }
        
        [RadioReportId("nec_m_050409", InstanceName = nameof(LarynxFindingType.Mass))]
        public bool IsEndophytic { get; set; }
        
        [RadioReportId("nec_m_050411", InstanceName = nameof(LarynxFindingType.Mass))]
        public bool IsDisplacing { get; set; }
        
        [RadioReportId("nec_m_050414", InstanceName = nameof(LarynxFindingType.Mass))]
        public bool IsSoftTissueEdema { get; set; }

        public CmDistributionType CmDistributionType { get; set; }

        [RadioReportId("nec_m_050218", InstanceName = nameof(LarynxFindingType.Mass))]
        public DifferentialDiagnosisType DifferentialDiagnosis1 { get; set; }
        
        [RadioReportId("nec_m_050219", InstanceName = nameof(LarynxFindingType.Mass))]
        public bool IsSuspected { get; set; }
        
        [RadioReportId("nec_m_050221", InstanceName = nameof(LarynxFindingType.Mass))]
        public DifferentialDiagnosisType DifferentialDiagnosis2 { get; set; }
        
        [RadioReportId("nec_m_050223", InstanceName = nameof(LarynxFindingType.Mass))]
        public bool IsMoreThan1LesionSameEntity { get; set; }

        #endregion


        #region AcuteEpiglottitis
        
        [RadioReportId("nec_m_050226", InstanceName = nameof(LarynxFindingType.AcuteEpiglottitis))]
        public bool IsAryepiglotticFolds { get; set; }
        
        [RadioReportId("nec_m_050228", InstanceName = nameof(LarynxFindingType.AcuteEpiglottitis))]
        public bool IsMucosalContrastEnhancement { get; set; }
        
        [RadioReportId("nec_m_050229", InstanceName = nameof(LarynxFindingType.AcuteEpiglottitis))]
        public bool IsSupraglotticLaryngealEdema { get; set; }
        
        [RadioReportId("nec_m_050230", InstanceName = nameof(LarynxFindingType.AcuteEpiglottitis))]
        public bool IsEdematousSwellingOfTheEpiglottis { get; set; }
        
        [RadioReportId("nec_m_050330", InstanceName = nameof(LarynxFindingType.AcuteEpiglottitis))]
        public bool IsObliterationOfThePerifocalFattyTissue { get; set; }
        
        [RadioReportId("nec_m_050331", InstanceName = nameof(LarynxFindingType.AcuteEpiglottitis))]
        public bool IsPhlegmon { get; set; }
        
        [RadioReportId("nec_m_050332", InstanceName = nameof(LarynxFindingType.AcuteEpiglottitis))]
        public bool IsTongueEdema { get; set; }
        
        [RadioReportId("nec_m_050347", InstanceName = nameof(LarynxFindingType.AcuteEpiglottitis))]
        public bool IsPalatinTonsilEdema { get; set; }
        
        [RadioReportId("nec_m_050416", InstanceName = nameof(LarynxFindingType.AcuteEpiglottitis))]
        public bool IsAbscess { get; set; }
        
        [RadioReportId("nec_m_050419", InstanceName = nameof(LarynxFindingType.AcuteEpiglottitis))]
        public int? ExtensionInMm { get; set; }
        
        [RadioReportId("nec_m_050420", InstanceName = nameof(LarynxFindingType.AcuteEpiglottitis))]
        public bool IsExtensionToSpacesOfSuprahyoidNeck { get; set; }

        #endregion
        
        #region Trauma
        
        [RadioReportId("nec_m_050233", InstanceName = nameof(LarynxFindingType.Trauma))]
        public bool IsSoftTissueSwelling { get; set; }

        [RadioReportId("nec_m_050235", InstanceName = nameof(LarynxFindingType.Trauma))]
        public SoftTissueLocalizationType SoftTissueLocalizationType { get; set; }

        public EntityType EntityType { get; set; }
        
        [RadioReportId("nec_m_050239", InstanceName = nameof(LarynxFindingType.Trauma))]
        public bool IsEpiglotticDisruption { get; set; }
        
        [RadioReportId("nec_m_050240", InstanceName = nameof(LarynxFindingType.Trauma))]
        public bool IsRuptureAtLevelOfPetiole { get; set; }
        
        [RadioReportId("nec_m_050241", InstanceName = nameof(LarynxFindingType.Trauma))]
        public bool IsMucosalTearsOfTheAryepiglotticFolds { get; set; }

        public ClassificationType ClassificationType { get; set; }
        
        [RadioReportId("nec_m_050245", InstanceName = nameof(LarynxFindingType.Trauma))]
        public bool IsDislocation { get; set; }
        
        [RadioReportId("nec_m_050335", InstanceName = nameof(LarynxFindingType.Trauma))]
        public bool IsFracture { get; set; }

        public FractureLocalizationType FractureLocalizationType { get; set; }
        
        [RadioReportId("nec_m_050341", InstanceName = nameof(LarynxFindingType.Trauma))]
        public bool IsArytaenoidCartilageRight { get; set; }

        [RadioReportId("nec_m_050342", InstanceName = nameof(LarynxFindingType.Trauma))]
        public bool IsArytaenoidCartilageLeft { get; set; }
        
        public FractureOrientationType FractureOrientationType { get; set; }

        [RadioReportId("nec_m_050422", InstanceName = nameof(LarynxFindingType.Trauma))]
        public bool IsLuxationSubluxation { get; set; }

        public LuxationLocalizationType LuxationLocalizationType { get; set; }
        
        [RadioReportId("nec_m_050426", InstanceName = nameof(LarynxFindingType.Trauma))]
        public bool IsCricothyroidalJointRight { get; set; }

        [RadioReportId("nec_m_050427", InstanceName = nameof(LarynxFindingType.Trauma))]
        public bool IsCricothyroidalJointLeft { get; set; }
        
        [RadioReportId("nec_m_050430", InstanceName = nameof(LarynxFindingType.Trauma))]
        public bool IsCartilagoArytaenoideaRight { get; set; }

        [RadioReportId("nec_m_050431", InstanceName = nameof(LarynxFindingType.Trauma))]
        public bool IsCartilagoArytaenoideaLeft { get; set; }

        public CricothyroidClassificationType CricothyroidClassificationType { get; set; }


        [RadioReportId("nec_m_050537", InstanceName = nameof(LarynxFindingType.Trauma))]
        public bool IsPronouncedSubcutaneousEdema { get; set; }
        
        [RadioReportId("nec_m_050538", InstanceName = nameof(LarynxFindingType.Trauma))]
        public bool IsRetractionOfRupture { get; set; }
        
        [RadioReportId("nec_m_050247", InstanceName = nameof(LarynxFindingType.Trauma))]
        public bool IsDissectionCarotidArtery { get; set; }

        [RadioReportId("nec_m_050249", InstanceName = nameof(LarynxFindingType.Trauma))]
        public bool IsDissectionCarotidArteryRight { get; set; }
        
        [RadioReportId("nec_m_050250", InstanceName = nameof(LarynxFindingType.Trauma))]
        public bool IsDissectionCarotidArteryLeft { get; set; }
        
        [RadioReportId("nec_m_050251", InstanceName = nameof(LarynxFindingType.Trauma))]
        public bool IsAirwayObstruction { get; set; }
        
        [RadioReportId("nec_m_050252", InstanceName = nameof(LarynxFindingType.Trauma))]
        public bool IsSubcutaneousEmphysema { get; set; }
        
        [RadioReportId("nec_m_050253", InstanceName = nameof(LarynxFindingType.Trauma))]
        public bool IsIpsilateralVocalFoldAdduction { get; set; }

        [RadioReportId("nec_m_050255", InstanceName = nameof(LarynxFindingType.Trauma))]
        public bool IsIpsilateralVocalFoldAdductionRight { get; set; }
        
        [RadioReportId("nec_m_050256", InstanceName = nameof(LarynxFindingType.Trauma))]
        public bool IsIpsilateralVocalFoldAdductionLeft { get; set; }
        
        [RadioReportId("nec_m_050257", InstanceName = nameof(LarynxFindingType.Trauma))]
        public bool IsDislocatedFractureFragments { get; set; }

        #endregion

        #region ImageFileUpload
            
        [RadioReportId("uni_05_003")]
        public string SerialNumber { get; set; }

        [RadioReportId("uni_05_005")]
        public string PictureNumber { get; set; }

        public Guid? ImageFileId { get; set; }

        [RadioReportId("uni_05_007", InstanceName = "NeckMRT.Larynx.LarynxFinding", IsExportable = false)]
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
