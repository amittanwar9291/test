using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.ShoulderMRT.Domain.Enums;
using System;

namespace RadioReport.ShoulderMRT.Domain.Models
{
    public class BonesFinding : BonesFindingBase, IRadioReportIdConditionEvaluator, IImageFileContainer
    {
        [RadioReportId("sho_m_040109-l", IsExportable = false)]
        public DescriptionType DescriptionType { get; set; }

        public BoneType BoneType { get; set; }


        [RadioReportId("sho_m_0405234", InstanceName = nameof(BonesFindingType.BoneTumor))]
        [RadioReportId("sho_m_0402212", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public bool IsSubordinated { get; set; }

        #region ImageFile upload

        [RadioReportId("uni_04_003")]
        public string SerialNumber { get; set; }

        [RadioReportId("uni_04_005")]
        public string PictureNumber { get; set; }

        public Guid? ImageFileId { get; set; }

        [RadioReportId("uni_04_007l", IsExportable = false, InstanceName = "ShoulderMRT.BonesFinding")]
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

        #region Fracture
        public FractureNotSpecifiedType FractureNotSpecifiedType { get; set; }

        #region Fracture_Humerus
        public FractureClassificationType FractureHumerusClassificationType { get; set; }

        public FractureProximalerAoRatingType FractureHumerusAoRatingType { get; set; }

        public FractureProximalerAoEvaluationType FractureHumerusAoEvaluationType { get; set; }

        public FractureProximalerNeerRatingType FractureHumerusNeerRatingType { get; set; }

        #region Fragments_Checkboxes
        [RadioReportId("sho_m_040512", InstanceName = nameof(BonesFindingType.Fracture))]
        public bool IsFractureHumerusFragmentsHumeraHead { get; set; }

        [RadioReportId("sho_m_040513", InstanceName = nameof(BonesFindingType.Fracture))]
        public bool IsFractureHumerusFragmentsMajusTubercle { get; set; }

        [RadioReportId("sho_m_040514", InstanceName = nameof(BonesFindingType.Fracture))]
        public bool IsFractureHumerusFragmentsTuberculumMinus { get; set; }

        [RadioReportId("sho_m_040515", InstanceName = nameof(BonesFindingType.Fracture))]
        public bool IsFractureHumerusFragmentsHumerumShaft { get; set; }
        #endregion

        public FractureProximalerNeerDetailsType FractureHumerusNeerDetailsType { get; set; }
        #endregion

        #region Fracture_Clavicula
        public FractureClaviculaEvaluationType FractureClaviculaEvaluationType { get; set; }

        public FractureClaviculaRatingType FractureClaviculaAoClassificationType { get; set; }
        #endregion

        #region Fracture_Scapula
        public FractureScapulaEvaluationType FractureScapulaEvaluationType { get; set; }

        public FractureScapulaRatingType FractureScapulaAoClassificationType { get; set; }
        #endregion

        #region Fracture_Humerus
        public AOClassificationAO12Type AOClassificationAO12Type { get; set; }

        public AOClassificationFractureType AOClassificationFractureType { get; set; }

        public FractureSpecificType FractureSpecificType { get; set; }
        #endregion

        #endregion

        #region BoneMarrow
        [RadioReportId("sho_m_0402202", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public bool IsProximalerHumerus { get; set; }

        [RadioReportId("sho_m_0402204", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public bool IsHillSachsLesion { get; set; }

        [RadioReportId("sho_m_0402205", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public bool IsReverseHillSachsLesion { get; set; }

        [RadioReportId("sho_m_0402206", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public bool IsHumeralHead { get; set; }

        [RadioReportId("sho_m_0402207", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public bool IsGreaterTubercle { get; set; }

        [RadioReportId("sho_m_0402208", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public bool IsLesserTubercle { get; set; }

        [RadioReportId("sho_m_0403206", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public bool IsLateralClavicle { get; set; }

        [RadioReportId("sho_m_0403208", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public bool IsAcromialEnd { get; set; }

        [RadioReportId("sho_m_0403209", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public bool IsClavicularBody { get; set; }

        [RadioReportId("sho_m_0403210", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public bool IsExtremitasClaviculae { get; set; }

        [RadioReportId("sho_m_0404210", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public bool IsScapula { get; set; }

        [RadioReportId("sho_m_0404212", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public bool IsAkromion { get; set; }

        [RadioReportId("sho_m_0404213", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public bool IsProcessusCoracoideus { get; set; }

        [RadioReportId("sho_m_0404240", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public bool IsScapularSpine { get; set; }

        [RadioReportId("sho_m_0404214", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public bool IsSupraspinatousFossa { get; set; }

        [RadioReportId("sho_m_0404215", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public bool IsGlenoidFossa { get; set; }

        [RadioReportId("sho_m_0404216", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public bool IsInfraspinatousFossa { get; set; }

        public DistributionType DistributionType { get; set; }

        [RadioReportId("sho_m_0405214", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public bool IsSoftTissueEdema { get; set; }

        [RadioReportId("sho_m_0405215", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public bool IsThickenedAndEdematizedSynovialis { get; set; }

        public DifferentialDiagnosisType DifferentialDiagnosisType { get; set; }
        #endregion

        #region Posttraumatic
        public PosttraumaticHillSachsType PosttraumaticHillSachsType { get; set; }

        [RadioReportId("sho_m_040212", InstanceName = nameof(BonesFindingType.PostTraumatic))]
        public bool IsImpressionPosteroSuperior { get; set; }

        [RadioReportId("sho_m_040225", InstanceName = nameof(BonesFindingType.PostTraumatic))]
        public byte? PosteroSuperiorDegrees { get; set; }

        [RadioReportId("sho_m_040216", InstanceName = nameof(BonesFindingType.PostTraumatic))]
        public bool IsImpressionAnteroSuperior { get; set; }

        [RadioReportId("sho_m_040226", InstanceName = nameof(BonesFindingType.PostTraumatic))]
        public byte? AnteroSuperiorDegrees { get; set; }
        #endregion

        #region Humerus
        [RadioReportId("sho_m_040219", InstanceName = nameof(BonesFindingType.HumerusNecrosis))]
        public bool IsHumerusSubchondral { get; set; }

        [RadioReportId("sho_m_040220", InstanceName = nameof(BonesFindingType.HumerusNecrosis))]
        public byte? HumerusDiameter { get; set; }

        [RadioReportId("sho_m_040221", InstanceName = nameof(BonesFindingType.HumerusNecrosis))]
        public bool IsHumerusIntactCortex { get; set; }
        #endregion

        #region Degeneration
        [RadioReportId("sho_m_040222", InstanceName = nameof(BonesFindingType.Degeneration))]
        public bool IsSeverityOfGlenohumeralOsteoarthritis { get; set; }

        public DegenerationIntensityType DegenerationIntensityType { get; set; }

        [RadioReportId("sho_m_040319", InstanceName = nameof(BonesFindingType.Degeneration))]
        public bool IsDegenerationSclerosis { get; set; }

        [RadioReportId("sho_m_040320", InstanceName = nameof(BonesFindingType.Degeneration))]
        public bool IsDegenerationEdema { get; set; }

        [RadioReportId("sho_m_040321", InstanceName = nameof(BonesFindingType.Degeneration))]
        public bool IsDegenerationCyst { get; set; }

        [RadioReportId("sho_m_040322", InstanceName = nameof(BonesFindingType.Degeneration))]
        public bool IsDegenerationChondropathy { get; set; }

        [RadioReportId("sho_m_040323", InstanceName = nameof(BonesFindingType.Degeneration))]
        public bool IsDegenerationChondrocalcinosis { get; set; }

        [RadioReportId("sho_m_040324", InstanceName = nameof(BonesFindingType.Degeneration))]
        public bool IsDegenerationOsteophytes { get; set; }

        [RadioReportId("sho_m_040325", InstanceName = nameof(BonesFindingType.Degeneration))]
        public bool IsDegenerationArthropathy { get; set; }

        public DegenerationOutbridgeType DegenerationOutbridgeType { get; set; }

        [RadioReportId("sho_m_040438", InstanceName = nameof(BonesFindingType.Degeneration))]
        public int? DegenerationExpansiveness { get; set; }

        public DegenerationJointSurfacesType DegenerationJointSurfacesType { get; set; }
        #endregion

        #region Bone Tumor
        public FirstLocalizationType FirstLocalizationType { get; set; }

        [RadioReportId("sho_m_0403214", InstanceName = nameof(BonesFindingType.BoneTumor))]
        public int? AxialMaxInMm { get; set; }

        [RadioReportId("sho_m_0403216", InstanceName = nameof(BonesFindingType.BoneTumor))]
        public int? PlaneAxialInMm { get; set; }

        [RadioReportId("sho_m_0403218", InstanceName = nameof(BonesFindingType.BoneTumor))]
        public int? CraniocaudalInMm { get; set; }

        [RadioReportId("sho_m_0404225", InstanceName = nameof(BonesFindingType.BoneTumor))]
        public bool IsSeptal { get; set; }

        [RadioReportId("sho_m_0403235", InstanceName = nameof(BonesFindingType.BoneTumor))]
        public bool IsInfiltrationOfAdjacentBones { get; set; }

        [RadioReportId("sho_m_0403236", InstanceName = nameof(BonesFindingType.BoneTumor))]
        public bool IsPathologicalFracture { get; set; }

        [RadioReportId("sho_m_0403240", InstanceName = nameof(BonesFindingType.BoneTumor))]
        public bool IsPerilesionalSclerosis { get; set; }

        [RadioReportId("sho_m_0403241", InstanceName = nameof(BonesFindingType.BoneTumor))]
        public bool IsSurroundingInflammatoryReaction { get; set; }

        [RadioReportId("sho_m_0404233", InstanceName = nameof(BonesFindingType.BoneTumor))]
        public bool IsAnotherLesionSameEntity { get; set; }

        [RadioReportId("sho_m_0404234", InstanceName = nameof(BonesFindingType.BoneTumor))]
        public bool IsWithinThePrimarilyAffected { get; set; }

        [RadioReportId("sho_m_0404235", InstanceName = nameof(BonesFindingType.BoneTumor))]
        public bool IsStagingPathologicalFracture { get; set; }

        public LocalPropagationType LocalPropagationType { get; set; }

        [RadioReportId("sho_m_0405231", InstanceName = nameof(BonesFindingType.BoneTumor))]
        public TumorDifferentialDiagnosis DifferentialDiagnosis01 { get; set; }

        [RadioReportId("sho_m_0405233", InstanceName = nameof(BonesFindingType.BoneTumor))]
        public SecondTumorDifferentialDiagnosis DifferentialDiagnosis02 { get; set; }

        [RadioReportId("sho_m_0405236", InstanceName = nameof(BonesFindingType.BoneTumor))]
        public SecondTumorDifferentialDiagnosis DifferentialDiagnosis03 { get; set; }
        #endregion

        #region Congenital
        [RadioReportId("sho_m_040227")]
        public bool IsRoundedPosteriorGlenoidRim { get; set; }

        [RadioReportId("sho_m_040228")]
        public bool IsPosteriorLabrumHypertrophy { get; set; }

        [RadioReportId("sho_m_040229")]
        public bool IsLabrumHyperintensity { get; set; }
        #endregion

        public bool CheckCondition(string customConditionId) =>
            customConditionId switch
            {
                nameof(FractureHumerusAoRatingType) => FractureHumerusAoRatingType == FractureProximalerAoRatingType.NotSpecified,
                nameof(FractureClaviculaEvaluationType) => FractureClaviculaEvaluationType == FractureClaviculaEvaluationType.NotSpecified,
                nameof(FractureScapulaEvaluationType) => FractureScapulaEvaluationType == FractureScapulaEvaluationType.NotSpecified,
                nameof(AOClassificationAO12Type) => AOClassificationAO12Type == AOClassificationAO12Type.NotSpecified,
                _ => false
            };
    }
}
