using System;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.NeckMRT.Domain.Enums;
using RadioReport.NeckMRT.Domain.Enums.Pharynx;

namespace RadioReport.NeckMRT.Domain.Models
{
    public class PharynxFinding: PharynxFindingBase, IImageFileContainer
    {
        #region Common
        [RadioReportId("nec_m_040323", InstanceName = nameof(PharynxFindingType.AnatomicVariantDysplasia))]
        [RadioReportId("nec_m_040234", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsDiffusionRestriction { get; set; }
        #endregion

        #region AnatomicVariantDysplasia

        public AnatomicVariantType AnatomicVariantType { get; set; }

        public GradingType GradingType { get; set; }

        [RadioReportId("nec_m_040302", InstanceName = nameof(PharynxFindingType.AnatomicVariantDysplasia))]
        public bool IsChoanalAtresiaRight { get; set; }

        [RadioReportId("nec_m_040303", InstanceName = nameof(PharynxFindingType.AnatomicVariantDysplasia))]
        public bool IsChoanalAtresiaLeft { get; set; }

        public CleftLipAndPalateType CleftLipAndPalateType { get; set; }

        [RadioReportId("nec_m_040313", InstanceName = nameof(PharynxFindingType.AnatomicVariantDysplasia))]
        public bool IsCleftLipAndPalateRight { get; set; }

        [RadioReportId("nec_m_040314", InstanceName = nameof(PharynxFindingType.AnatomicVariantDysplasia))]
        public bool IsCleftLipAndPalateLeft { get; set; }
        
        [RadioReportId("nec_m_040316", InstanceName = nameof(PharynxFindingType.AnatomicVariantDysplasia))]
        public bool IsZenkerSDiverticulum { get; set; }

        [RadioReportId("nec_m_040318", InstanceName = nameof(PharynxFindingType.AnatomicVariantDysplasia))]
        public bool IsFat { get; set; }

        [RadioReportId("nec_m_040319", InstanceName = nameof(PharynxFindingType.AnatomicVariantDysplasia))]
        public bool IsMacroscopic { get; set; }

        [RadioReportId("nec_m_040320", InstanceName = nameof(PharynxFindingType.AnatomicVariantDysplasia))]
        public bool IsMicroscopic { get; set; }

        [RadioReportId("nec_m_040321", InstanceName = nameof(PharynxFindingType.AnatomicVariantDysplasia))]
        public bool IsCysticChange { get; set; }

        #endregion

        #region Mass

        [RadioReportId("nec_m_040109-l", InstanceName = nameof(PharynxFinding) + nameof(PharynxFindingType.Mass), IsExportable = false)]
        public DescriptionType DescriptionType { get; set; }

        #region FirstTab
        public ProvenHistologyType ProvenHistologyType { get; set; }

        [RadioReportId("nec_m_040210", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsProvenHistology { get; set; }

        [RadioReportId("nec_m_040328", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsRoof { get; set; }

        [RadioReportId("nec_m_040329", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsPharyngealTonsil { get; set; }

        [RadioReportId("nec_m_040330", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsNasopharynxPosteriorWall { get; set; }

        [RadioReportId("nec_m_040331", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsNasopharynxLateralWall { get; set; }

        [RadioReportId("nec_m_040332", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsTorusTubarius { get; set; }

        [RadioReportId("nec_m_040333", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsPharyngealRecess { get; set; }

        [RadioReportId("nec_m_040334", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsInferiorSoftPalate { get; set; }

        [RadioReportId("nec_m_040410", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsOropharynxPosteriorWall { get; set; }
        
        [RadioReportId("nec_m_040411", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsOropharynxLateralWall { get; set; }

        [RadioReportId("nec_m_040412", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsTonsilLodge { get; set; }

        [RadioReportId("nec_m_040413", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsLateralPharyngealWall { get; set; }

        [RadioReportId("nec_m_040414", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsInferior { get; set; }

        [RadioReportId("nec_m_040415", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsTongueBase { get; set; }

        [RadioReportId("nec_m_040416", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsInferiorLingualTonsils { get; set; }
        
        [RadioReportId("nec_m_040417", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsEpiglottisUpperMargin { get; set; }

        [RadioReportId("nec_m_040418", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsInferiorValleculae { get; set; }

        [RadioReportId("nec_m_040504", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsHypopharynxPosteriorWall { get; set; }

        [RadioReportId("nec_m_040505", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsPiriformSinus { get; set; }

        [RadioReportId("nec_m_040506", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsPostcricoidRegion { get; set; }

        [RadioReportId("nec_m_040540", InstanceName = nameof(PharynxFindingType.Mass))]
        public OrientationAxialType OrientationAxialType { get; set; }

        #endregion

        #region SecondTab

        [RadioReportId("nec_m_040215", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsPharyngealMucosalSpacePms { get; set; }

        [RadioReportId("nec_m_040216", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsParapharyngealSpacePps { get; set; }

        [RadioReportId("nec_m_040217", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsMasticatorSpaceMs { get; set; }

        [RadioReportId("nec_m_040218", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsBuccalSpaceBs { get; set; }

        [RadioReportId("nec_m_040219", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsParotidSpacePs { get; set; }

        [RadioReportId("nec_m_040220", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsCarotidSpaceCs { get; set; }

        [RadioReportId("nec_m_040221", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsRetropharyngealSpaceRpsAndDangerSpace { get; set; }

        [RadioReportId("nec_m_040222", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsPerivertebralSpacePvsPrevertebral { get; set; }

        [RadioReportId("nec_m_040223", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsPerivertebralSpacePvsParaspinal { get; set; }

        [RadioReportId("nec_m_040224", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsVisceralSpaceVs { get; set; }

        [RadioReportId("nec_m_040225", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsAnteriorCervicalSpaceAcs { get; set; }

        [RadioReportId("nec_m_040226", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsPosteriorCervicalSpacePcs { get; set; }

        [RadioReportId("nec_m_040336", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsOralMucosalSpaceOms { get; set; }

        [RadioReportId("nec_m_040337", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsSublingualSpaceSls { get; set; }

        [RadioReportId("nec_m_040338", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsSubmandibularSpaceSms { get; set; }

        [RadioReportId("nec_m_040339", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsRootOfTheTongueRot { get; set; }

        [RadioReportId("nec_m_040340", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsFasciaSpacesLingualTonsils { get; set; }

        [RadioReportId("nec_m_040341", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsFasciaSpacesValleculae { get; set; }

        [RadioReportId("nec_m_040342", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsTransspatialGrowth { get; set; }

        [RadioReportId("nec_m_040421", InstanceName = nameof(PharynxFindingType.Mass))]
        public int? SizeInMm { get; set; }

        [RadioReportId("nec_m_040424", InstanceName = nameof(PharynxFindingType.Mass))]
        public int? SecondPlaneInMm { get; set; }

        [RadioReportId("nec_m_040427", InstanceName = nameof(PharynxFindingType.Mass))]
        public int? ThirdPlaneInMm { get; set; }
        
        public AsymmetryType AsymmetryType { get; set; }
                        
        public ShapeType ShapeType { get; set; }

        #endregion

        #region ThirdTab
        [RadioReportId("nec_m_040346", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsMicroscopicFat { get; set; }

        [RadioReportId("nec_m_040347", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsMacroscopicFat { get; set; }

        [RadioReportId("nec_m_040348", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsCyst { get; set; }

        public CystType CystType { get; set; }

        [RadioReportId("nec_m_040350", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsHemorrhageHemosiderin { get; set; }

        [RadioReportId("nec_m_040351", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsFocalSignalVoids { get; set; }

        [RadioReportId("nec_m_040352", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsCapsule { get; set; }

        [RadioReportId("nec_m_040353", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsSepta { get; set; }

        [RadioReportId("nec_m_040354", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsTissueBridging { get; set; }

        [RadioReportId("nec_m_040356", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsGasFluidLevel { get; set; }

        [RadioReportId("nec_m_040357", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsToothBoneFormation { get; set; }

        [RadioReportId("nec_m_040358", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsEdematousSwelling { get; set; }

        [RadioReportId("nec_m_040433", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsExophytic { get; set; }

        [RadioReportId("nec_m_040434", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsEndophytic { get; set; }

        public CmEnhancementDistributionType CmEnhancementDistributionType { get; set; }
        #endregion

        #region FourthTab

        [RadioReportId("nec_m_040236", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsLymphadenitis { get; set; }

        [RadioReportId("nec_m_040237", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsSoftTissueEdema { get; set; }

        [RadioReportId("nec_m_040238", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsImbibitionOfPerifocalFatTissue { get; set; }

        [RadioReportId("nec_m_040239", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsAffectionOfParapharyngealFatStrips { get; set; }

        [RadioReportId("nec_m_040240", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsSoftTissueEmphysema { get; set; }

        [RadioReportId("nec_m_040241", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsHyperplasiaRightTonsillaPalatina { get; set; }

        [RadioReportId("nec_m_040242", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsHyperplasiaLeftTonsilPalatina { get; set; }

        [RadioReportId("nec_m_040243", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsHyperplasiaTonsillaPharyngea { get; set; }

        [RadioReportId("nec_m_040244", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsTopographicalRelationToRecurrentLaryngealNerve { get; set; }

        [RadioReportId("nec_m_040245", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsEdemaOfTheRightLongusColliMuscle { get; set; }

        [RadioReportId("nec_m_040246", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsEdemaOfTheLeftLongusColliMuscle { get; set; }

        [RadioReportId("nec_m_040360", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsOsteomyelitis { get; set; }

        [RadioReportId("nec_m_040361", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsOsteomyelitisMaxilla { get; set; }
        
        [RadioReportId("nec_m_040362", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsOsteomyelitisMandible { get; set; }
        
        [RadioReportId("nec_m_040363", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsOsteomyelitisCorpusMandibulae { get; set; }
        
        [RadioReportId("nec_m_040364", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsOsteomyelitisRamusMandibulae { get; set; }

        [RadioReportId("nec_m_040365", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsOsteolysis { get; set; }
        
        [RadioReportId("nec_m_040366", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsOsteolysisMaxilla { get; set; }

        [RadioReportId("nec_m_040367", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsOsteolysisMandible { get; set; }

        [RadioReportId("nec_m_040368", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsOsteolysisCorpusMandibulae { get; set; }

        [RadioReportId("nec_m_040370", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsOsteolysisRamusMandibulae { get; set; }

        [RadioReportId("nec_m_040438", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsMediastinitis { get; set; }

        [RadioReportId("nec_m_040439", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsAirwayObstruction { get; set; }

        [RadioReportId("nec_m_040440", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsThrombosisRightInternalJugularVein { get; set; }

        [RadioReportId("nec_m_040441", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsThrombosisLeftInternalJugularVein { get; set; }

        [RadioReportId("nec_m_040442", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsPseudoaneurysmRightIca { get; set; }

        [RadioReportId("nec_m_040443", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsPseudoaneurysmLeftIca { get; set; }

        [RadioReportId("nec_m_040444", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsStenosisRightIca { get; set; }

        [RadioReportId("nec_m_040445", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsStenosisLeftIca { get; set; }

        [RadioReportId("nec_m_040446", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsAffectionSpinalCanal { get; set; }

        [RadioReportId("nec_m_040447", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsEpiduralExtension { get; set; }
        
        [RadioReportId("nec_m_040533", InstanceName = nameof(PharynxFindingType.Mass), AlternativeTranslationSuffix="v2")]
        public DifferentialDiagnosisType DifferentialDiagnosis1 { get; set; }

        [RadioReportId("nec_m_040534", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsSuspicionOf { get; set; }

        [RadioReportId("nec_m_040536", InstanceName = nameof(PharynxFindingType.Mass), AlternativeTranslationSuffix="v2")]
        public DifferentialDiagnosisType DifferentialDiagnosis2 { get; set; }

        [RadioReportId("nec_m_040537", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsSubordinate { get; set; }

        [RadioReportId("nec_m_040538", InstanceName = nameof(PharynxFindingType.Mass))]
        public bool IsMoreThan1LesionSameEntity { get; set; }
        #endregion

        #endregion

        #region ImageFile
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

        [RadioReportId("uni_04_003")]
        public string SerialNumber { get; set; }

        [RadioReportId("uni_04_005")]
        public string PictureNumber { get; set; }

        public Guid? ImageFileId { get; set; }

        [RadioReportId("uni_04_007", InstanceName = "NeckMRT.Pharynx.PharynxFinding", IsExportable = false)]
        public ImageFile UploadedImageFile { get; set; }
        #endregion
    }
}
