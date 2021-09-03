using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.Common.Logic.Models;
using RadioReport.HandMRT.Domain.Enums;
using System;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.HandMRT.Domain.Constants;

namespace RadioReport.HandMRT.Domain.Models
{
    public class BonesFinding : BonesFindingBase, IImageFileContainer
    {
        #region Common
        [RadioReportId("han_m_040205", InstanceName = nameof(BonesFindingType.Fracture))]
        [RadioReportId("han_m_0402103", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        [RadioReportId("han_m_0402103", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        [RadioReportId("han_m_0402103", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public HandLocations InvolvedBonesLocalizer { get; set; }

        [RadioReportId("han_m_040219", InstanceName = nameof(BonesFindingType.Osteoarthritis))]
        [RadioReportId("han_m_040245", InstanceName = nameof(BonesFindingType.Arthritis))]
        public HandJointLocations HandJointsLocalizer { get; set; }

        [RadioReportId("han_m_040313", InstanceName = nameof(BonesFindingType.NormVariantsAnomalies), CustomConditionName = nameof(StandardVariantsType.CarpalCoalition))]
        [RadioReportId("han_m_040314", InstanceName = nameof(BonesFindingType.NormVariantsAnomalies), CustomConditionName = nameof(StandardVariantsType.CarpalBonesDivision))]
        [RadioReportId("han_m_040207", InstanceName = nameof(BonesFindingType.AvascularNecrosis))]
        public WristBonesLocations InvolvedBonesType { get; set; }

        [RadioReportId("han_m_0405123", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        [RadioReportId("han_m_0405126", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        [RadioReportId("han_m_040293", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsSecondary { get; set; }

        [RadioReportId("han_m_0403140", InstanceName = nameof(BonesFindingType.Arthritis))]
        [RadioReportId("han_m_0403203", InstanceName = nameof(BonesFindingType.NormVariantsAnomalies))]
        public bool IsChondropathy { get; set; }
        #endregion

        #region Standard variants / anomalies

        public StandardVariantsType StandardVariantsType { get; set; }

        [RadioReportId("han_m_040304", InstanceName = nameof(BonesFindingType.NormVariantsAnomalies))]
        public bool IsParatrapezium { get; set; }

        [RadioReportId("han_m_040305", InstanceName = nameof(BonesFindingType.NormVariantsAnomalies))]
        public bool IsTrapeziumSecundarium { get; set; }

        [RadioReportId("han_m_040306", InstanceName = nameof(BonesFindingType.NormVariantsAnomalies))]
        public bool IsStyloidum { get; set; }

        [RadioReportId("han_m_040307", InstanceName = nameof(BonesFindingType.NormVariantsAnomalies))]
        public bool IsCapitatumSecundarium { get; set; }

        [RadioReportId("han_m_040308", InstanceName = nameof(BonesFindingType.NormVariantsAnomalies))]
        public bool IsRadialeExternum { get; set; }

        [RadioReportId("han_m_040309", InstanceName = nameof(BonesFindingType.NormVariantsAnomalies))]
        public bool IsCentrale { get; set; }

        [RadioReportId("han_m_040310", InstanceName = nameof(BonesFindingType.NormVariantsAnomalies))]
        public bool IsTriangulare { get; set; }

        [RadioReportId("han_m_040311", InstanceName = nameof(BonesFindingType.NormVariantsAnomalies))]
        public bool IsHypotriquetrum { get; set; }

        [RadioReportId("han_m_040402", InstanceName = nameof(BonesFindingType.NormVariantsAnomalies))]
        public bool IsEpitrapezium { get; set; }

        [RadioReportId("han_m_040403", InstanceName = nameof(BonesFindingType.NormVariantsAnomalies))]
        public bool IsTrapezoidesSecundarium { get; set; }

        [RadioReportId("han_m_040404", InstanceName = nameof(BonesFindingType.NormVariantsAnomalies))]
        public bool IsOssiculumGruberi { get; set; }

        [RadioReportId("han_m_040405", InstanceName = nameof(BonesFindingType.NormVariantsAnomalies))]
        public bool IsOsHamuliProprium { get; set; }

        [RadioReportId("han_m_040406", InstanceName = nameof(BonesFindingType.NormVariantsAnomalies))]
        public bool IsVesalianum { get; set; }

        [RadioReportId("han_m_040407", InstanceName = nameof(BonesFindingType.NormVariantsAnomalies))]
        public bool IsUlnareExternum { get; set; }

        [RadioReportId("han_m_040408", InstanceName = nameof(BonesFindingType.NormVariantsAnomalies))]
        public bool IsParascaphoid { get; set; }

        [RadioReportId("han_m_040409", InstanceName = nameof(BonesFindingType.NormVariantsAnomalies))]
        public bool IsHypolunatum { get; set; }

        [RadioReportId("han_m_040410", InstanceName = nameof(BonesFindingType.NormVariantsAnomalies))]
        public bool IsEpilunatum { get; set; }

        [RadioReportId("han_m_040411", InstanceName = nameof(BonesFindingType.NormVariantsAnomalies))]
        public bool IsEpipyramis { get; set; }

        [RadioReportId("han_m_040412", InstanceName = nameof(BonesFindingType.NormVariantsAnomalies))]
        public bool IsLunula { get; set; }

        public EtiologyType EtiologyType { get; set; }

        public MinaarClassificationType MinaarClassificationType { get; set; }

        public EtiologyDetailsType EtiologyDetailsType { get; set; }

        public PartitumType PartitumType { get; set; }

        public FacetType FacetType { get; set; }

        [RadioReportId("han_m_0403204", InstanceName = nameof(BonesFindingType.NormVariantsAnomalies))]
        public bool IsOsHematumBoneMarrowEdema { get; set; }
        #endregion

        #region Fracture

        public FractureClassificationType FractureClassificationType { get; set; }

        public FractureFormType FractureFormType { get; set; }

        public FractureFormScaphoideumType FractureFormScaphoideumType { get; set; }

        public FractureFormNotSpecifiedType FractureFormNotSpecifiedType { get; set; }

        public FractureFormSubType FractureFormSubType { get; set; }

        public DorsomedialDrugType DorsomedialDrugType { get; set; }
        #endregion

        #region AvascularNecrosis

        public ScaphoideumClassificationType ScaphoideumClassificationType { get; set; }

        public ScaphoideumGradingType ScaphoideumGradingType { get; set; }

        public LichtmanStagingType LichtmanStagingType { get; set; }

        public LichtmanStagingSubType LichtmanStagingSubType { get; set; }

        #endregion

        #region Osteoarthritis

        [RadioReportId("han_m_040399", InstanceName = nameof(BonesFindingType.Osteoarthritis))]
        public bool IsJointSpaceNarrowing { get; set; }

        [RadioReportId("han_m_0403100", InstanceName = nameof(BonesFindingType.Osteoarthritis))]
        public bool IsSubchondralSclerosis { get; set; }

        [RadioReportId("han_m_0403101", InstanceName = nameof(BonesFindingType.Osteoarthritis))]
        public bool IsOsteophyte { get; set; }

        [RadioReportId("han_m_0403102", InstanceName = nameof(BonesFindingType.Osteoarthritis))]
        public bool IsSubchondralCyts { get; set; }

        [RadioReportId("han_m_040394", InstanceName = nameof(BonesFindingType.Osteoarthritis))]
        public SlacSnacType OsteoarthritisSlacWristType { get; set; }

        [RadioReportId("han_m_040396", InstanceName = nameof(BonesFindingType.Osteoarthritis))]
        public SlacSnacType OsteoarthritisSnacWristType { get; set; }

        public SignificanceType SignificanceType { get; set; }

        [RadioReportId("han_m_040457", InstanceName = nameof(BonesFindingType.Osteoarthritis))]
        public bool IsRemodellingAtIncisuraUlnaris { get; set; }

        [RadioReportId("han_m_040458", InstanceName = nameof(BonesFindingType.Osteoarthritis))]
        public bool IsIntraArticularBodies { get; set; }

        [RadioReportId("han_m_040461", InstanceName = nameof(BonesFindingType.Osteoarthritis))]
        public bool IsJoinSurfaceMoreThan20 { get; set; }

        [RadioReportId("han_m_040462", InstanceName = nameof(BonesFindingType.Osteoarthritis))]
        public bool IsShortenedRadius { get; set; }

        [RadioReportId("han_m_040463", InstanceName = nameof(BonesFindingType.Osteoarthritis))]
        public bool IsDepressionOfJointSurface { get; set; }

        [RadioReportId("han_m_040464", InstanceName = nameof(BonesFindingType.Osteoarthritis))]
        public bool IsGapInJoinSurface { get; set; }

        [RadioReportId("han_m_0404109", InstanceName = nameof(BonesFindingType.Osteoarthritis))]
        public bool IsPosttraumatic { get; set; }

        public EatonLitterStagingType EatonLitterStagingType { get; set; }
        #endregion

        #region ImpactionAndImpingementSyndrome

        public ImpactionImpingementSyndromeType ImpactionImpingementSyndromeType { get; set; }

        [RadioReportId("han_m_0403107", InstanceName = nameof(BonesFindingType.ImpactionAndImpingementSyndrome))]
        public bool IsArticularCartilageDamage { get; set; }

        [RadioReportId("han_m_0403108", InstanceName = nameof(BonesFindingType.ImpactionAndImpingementSyndrome))]
        public bool IsIncreasedSubchondralSclerosis { get; set; }

        [RadioReportId("han_m_0403109", InstanceName = nameof(BonesFindingType.ImpactionAndImpingementSyndrome))]
        public bool IsCystsFormation { get; set; }

        [RadioReportId("han_m_0403112", InstanceName = nameof(BonesFindingType.ImpactionAndImpingementSyndrome))]
        public bool IsUlna { get; set; }

        [RadioReportId("han_m_0403113", InstanceName = nameof(BonesFindingType.ImpactionAndImpingementSyndrome))]
        public bool IsOsLunatum { get; set; }

        [RadioReportId("han_m_0403114", InstanceName = nameof(BonesFindingType.ImpactionAndImpingementSyndrome))]
        public bool IsOsTriquetrum { get; set; }

        [RadioReportId("han_m_0403115", InstanceName = nameof(BonesFindingType.ImpactionAndImpingementSyndrome))]
        public bool IsTFCC { get; set; }

        public UlnocarpalEtiologyType UlnocarpalEtiologyType { get; set; }

        [RadioReportId("han_m_040468", InstanceName = nameof(BonesFindingType.ImpactionAndImpingementSyndrome))]
        public bool IsLunateNecrosis { get; set; }

        [RadioReportId("han_m_0403116", InstanceName = nameof(BonesFindingType.ImpactionAndImpingementSyndrome))]
        public bool IsNegativeUlnarVariance { get; set; }

        [RadioReportId("han_m_0403244", InstanceName = nameof(BonesFindingType.ImpactionAndImpingementSyndrome))]
        public bool IsSecondaryUlnarVariance { get; set; }

        public RadioulnarImpingementType RadioulnarImpingementType { get; set; }

        public RadioulnarEarlyPhaseType RadioulnarEarlyPhaseType { get; set; }

        public RadioulnarLatePhaseType RadioulnarLatePhaseType { get; set; }

        #endregion

        #region ScaphoidPseudarthrosis
        public VitalityType VitalityType { get; set; }

        public ScaphoidClassificationType ScaphoidPseudarthrosisClassificationType { get; set; }

        public ScaphoidCystType ScaphoidCystType { get; set; }

        public ScaphoidSclerosisType ScaphoidSclerosisType { get; set; }

        public ScaphoidOsteoarthritisType ScaphoidOsteoarthritisType { get; set; }

        public ScaphoidSnacType ScaphoidSnacType { get; set; }

        #endregion

        #region Arthritis

        [RadioReportId("han_m_0403134", InstanceName = nameof(BonesFindingType.Arthritis))]
        public bool IsJointEffusion { get; set; }

        [RadioReportId("han_m_0403135", InstanceName = nameof(BonesFindingType.Arthritis))]
        public bool IsSynovitis { get; set; }

        [RadioReportId("han_m_0403136", InstanceName = nameof(BonesFindingType.Arthritis))]
        public bool IsSynovitisWithPannus { get; set; }

        [RadioReportId("han_m_0403137", InstanceName = nameof(BonesFindingType.Arthritis))]
        public bool IsInflammatoryBoneMarrowEdema { get; set; }

        [RadioReportId("han_m_0403138", InstanceName = nameof(BonesFindingType.Arthritis))]
        public bool IsErosions { get; set; }

        [RadioReportId("han_m_0403139", InstanceName = nameof(BonesFindingType.Arthritis))]
        public bool IsProliferativeBoneChanges { get; set; }

        [RadioReportId("han_m_0403141", InstanceName = nameof(BonesFindingType.Arthritis))]
        public bool IsTenosynovitis { get; set; }

        [RadioReportId("han_m_0403142", InstanceName = nameof(BonesFindingType.Arthritis))]
        public bool IsBursitis { get; set; }

        [RadioReportId("han_m_0403143", InstanceName = nameof(BonesFindingType.Arthritis))]
        public bool IsDestructions { get; set; }

        [RadioReportId("han_m_0403144", InstanceName = nameof(BonesFindingType.Arthritis))]
        public bool IsMutilations { get; set; }

        [RadioReportId("han_m_0403145", InstanceName = nameof(BonesFindingType.Arthritis))]
        public bool IsAnkulosis { get; set; }

        [RadioReportId("han_m_0404116", InstanceName = nameof(BonesFindingType.Arthritis))]
        public ArthritisDifferentialDiagnosisType ArthritisDifferentialDiagnosisType { get; set; }
        #endregion

        #region Osteomyelitis

        public OsteomyelitisStageType OsteomyelitisStageType { get; set; }

        [RadioReportId("han_m_0402108", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsThinning { get; set; }

        [RadioReportId("han_m_0402109", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsDestruction { get; set; }

        [RadioReportId("han_m_0403251", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsIntraosseousAbscess { get; set; }

        [RadioReportId("han_m_0403253", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public int? IntraosseousSize { get; set; }

        [RadioReportId("han_m_0403256", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public int? Intraosseous2ndPlaneSize { get; set; }

        [RadioReportId("han_m_0403259", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public int? Intraosseous3rdPlaneSize { get; set; }

        [RadioReportId("han_m_0403262", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsPenumbraSign { get; set; }

        [RadioReportId("han_m_0403263", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsPeripheralContrast { get; set; }

        [RadioReportId("han_m_0403264", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsIntaosseousLasion { get; set; }

        [RadioReportId("han_m_0404117", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsSequester { get; set; }

        [RadioReportId("han_m_0404119", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public int? SequesterSize { get; set; }

        [RadioReportId("han_m_0404122", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public int? Sequester2ndPlaneSize { get; set; }

        [RadioReportId("han_m_0404125", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public int? Sequester3rdPlaneSize { get; set; }

        [RadioReportId("han_m_0404128", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsNoContrastEnhancement { get; set; }

        [RadioReportId("han_m_0404129", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsSequesterLasion { get; set; }

        [RadioReportId("han_m_0405111", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsOsteolysis { get; set; }

        [RadioReportId("han_m_0405112", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsBoneApposition { get; set; }

        [RadioReportId("han_m_0405113", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsPeriostealThickening { get; set; }

        [RadioReportId("han_m_0405114", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsPeriostealRupture { get; set; }

        [RadioReportId("han_m_0405115", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsSubperiostealAbscess { get; set; }

        [RadioReportId("han_m_0405117", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public int? SubperiostealSize { get; set; }

        public OsteomyelitisDifferentialDiagnosisType OsteomyelitisDifferentialDiagnosisType { get; set; }

        #endregion

        #region Bone marrow edema

        public DistributionType DistributionType { get; set; }

        [RadioReportId("han_m_0404132", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public bool IsThickenedSynovia { get; set; }

        [RadioReportId("han_m_0404133", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public bool IsSubchondralFracture { get; set; }

        [RadioReportId("han_m_0404134", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public bool IsCutisThickening { get; set; }

        [RadioReportId("han_m_0405125", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public BoneMarrowEdemaDifferentialDiagnosisType BoneMarrowEdemaDifferentialDiagnosisType { get; set; }

        #endregion

        #region Tumor

        // Common
        [RadioReportId("han_m_040110-l", InstanceName = InstanceNames.Bones, IsExportable = false)]
        public DescriptionType DescriptionType { get; set; }

        // Tab - Localization
        [RadioReportId("han_m_0402112", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsHistologyKnown { get; set; }

        public KnownHistologyMalignancyType KnownHistologyMalignancyType { get; set; }

        [RadioReportId("han_m_0403176", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsDiaphyseal { get; set; }

        [RadioReportId("han_m_0404147", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public int? ExtensionSize { get; set; }

        [RadioReportId("han_m_0404150", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public int? Extension2ndPlaneSize { get; set; }

        [RadioReportId("han_m_0404153", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public int? Extension3rdPlaneSize { get; set; }

        #region FILE UPLOAD

        public Guid? ImageFileId { get; set; }

        [RadioReportId("uni_04_007l", InstanceName = "HandMRT.Bones.BonesFinding", IsExportable = false)]
        public ImageFile UploadedImageFile { get; set; }

        [RadioReportId("uni_04_003")]
        public string SerialNumber { get; set; }

        [RadioReportId("uni_04_005")]
        public string PictureNumber { get; set; }

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

        // Tab - Characterization I

        [RadioReportId("han_m_040595", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsGeographic { get; set; }

        // Tab - Characterization II

        [RadioReportId("han_m_0403166", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public int? MaxCartilageThicness { get; set; }

        [RadioReportId("han_m_0404141", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsAdjacentBoneInfiltration { get; set; }

        [RadioReportId("han_m_0404143", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsPathologicalFracture { get; set; }

        [RadioReportId("han_m_0404144", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsPathologicalFractureSuspected { get; set; }

        [RadioReportId("han_m_0405130", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsPerifocalSclerosis { get; set; }

        [RadioReportId("han_m_0405131", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsSurroundingInflammatoryReaction { get; set; }

        public LocalExpansionType LocalExpansionType {get;set;}

        // 4th tab
        [RadioReportId("han_m_040289", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public TumorDifferentialDiagnosisType TumorDifferentialDiagnosis1Type { get; set; }

        [RadioReportId("han_m_040290", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsDifferentialDiagnosisSuspected { get; set; }

        [RadioReportId("han_m_040292", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public TumorDifferentialDiagnosisType TumorDifferentialDiagnosis2Type { get; set; }

        [RadioReportId("han_m_040295", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public TumorDifferentialDiagnosisType TumorDifferentialDiagnosis3Type { get; set; }

        [RadioReportId("han_m_0403171", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsLesionSameEntity { get; set; }

        [RadioReportId("han_m_0403172", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsPrimarilyInvolvedBone { get; set; }
        #endregion

        public bool CheckCondition(string customConditionId)
        {

            return customConditionId switch
            {
                nameof(StandardVariantsType.CarpalBonesDivision) => StandardVariantsType.ToString() == customConditionId,
                nameof(StandardVariantsType.CarpalCoalition) => StandardVariantsType.ToString() == customConditionId,
                _ => false
            };
        }
    }
}
 