using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.ThoraxMRT.Domain.Enums;
using System;

namespace RadioReport.ThoraxMRT.Domain.Models
{
    public class BonesFinding : FindingBase, IImageFileContainer
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("tho_m_070106")]
        public BonesFindingType FindingType { get; set; }

        #region Common

        public SideType SideType { get; set; }

        [RadioReportId("tho_m_070209", InstanceName = nameof(BonesFindingType.RibFracture))]
        [RadioReportId("tho_m_070270", InstanceName = nameof(BonesFindingType.MassOfTheRibs))]
        public RibLocations RibLocalization { get; set; }

        [RadioReportId("tho_m_070226", InstanceName = nameof(BonesFindingType.SpinalFracture))]
        [RadioReportId("tho_m_070276", InstanceName = nameof(BonesFindingType.SpinalMass))]
        public SpineLocations SpineLocalization { get; set; }

        #endregion

        #region Fracture

        public FractureType FractureType { get; set; }

        public FractureSubType FractureSubType { get; set; }

        public NotFutherSpecfiedType NotFutherSpecfiedType { get; set; }

        public FractureAge FractureAge { get; set; }

        #endregion

        #region Mass

        public DescriptionType DescriptionType { get; set; }

        [RadioReportId("tho_m_070230", InstanceName = nameof(BonesFindingType.ClavicularMass))]
        [RadioReportId("tho_m_070230", InstanceName = nameof(BonesFindingType.ScapularMass))]
        [RadioReportId("tho_m_070230", InstanceName = nameof(BonesFindingType.MassOfTheRibs))]
        [RadioReportId("tho_m_070230", InstanceName = nameof(BonesFindingType.SternalMass))]
        [RadioReportId("tho_m_070378", InstanceName = nameof(BonesFindingType.SpinalMass))]
        public BonesDiagnosisType CharacterizationOneDifferentialDiagnosis { get; set; }

        [RadioReportId("tho_m_070231", InstanceName = nameof(BonesFindingType.ClavicularMass))]
        [RadioReportId("tho_m_070231", InstanceName = nameof(BonesFindingType.ScapularMass))]
        [RadioReportId("tho_m_070231", InstanceName = nameof(BonesFindingType.MassOfTheRibs))]
        [RadioReportId("tho_m_070231", InstanceName = nameof(BonesFindingType.SternalMass))]
        [RadioReportId("tho_m_070379", InstanceName = nameof(BonesFindingType.SpinalMass))] 
        public bool IsHistologyKnown { get; set; }

        public HistologyKnownType HistologyKnownType { get; set; }

        [RadioReportId("tho_m_070376", InstanceName = nameof(BonesFindingType.ClavicularMass))]
        [RadioReportId("tho_m_070376", InstanceName = nameof(BonesFindingType.ScapularMass))]
        [RadioReportId("tho_m_070376", InstanceName = nameof(BonesFindingType.MassOfTheRibs))]
        [RadioReportId("tho_m_070376", InstanceName = nameof(BonesFindingType.SternalMass))]
        [RadioReportId("tho_m_070384", InstanceName = nameof(BonesFindingType.SpinalMass))]
        public int? ExtensionSize { get; set; }

        [RadioReportId("tho_m_070353", InstanceName = nameof(BonesFindingType.ClavicularMass))]
        [RadioReportId("tho_m_070353", InstanceName = nameof(BonesFindingType.ScapularMass))]
        [RadioReportId("tho_m_070353", InstanceName = nameof(BonesFindingType.MassOfTheRibs))]
        [RadioReportId("tho_m_070353", InstanceName = nameof(BonesFindingType.SternalMass))]
        [RadioReportId("tho_m_070387", InstanceName = nameof(BonesFindingType.SpinalMass))]
        public int? ExtensionSecondPlane { get; set; }

        [RadioReportId("tho_m_070356", InstanceName = nameof(BonesFindingType.ClavicularMass))]
        [RadioReportId("tho_m_070356", InstanceName = nameof(BonesFindingType.ScapularMass))]
        [RadioReportId("tho_m_070356", InstanceName = nameof(BonesFindingType.MassOfTheRibs))]
        [RadioReportId("tho_m_070356", InstanceName = nameof(BonesFindingType.SternalMass))]
        [RadioReportId("tho_m_070390", InstanceName = nameof(BonesFindingType.SpinalMass))]
        public int? ExtensionThirdPlane { get; set; }

        public MarginType MarginType { get; set; }

        [RadioReportId("tho_m_070431-l", InstanceName = nameof(HomogeneityType), IsExportable = false)]
        public HomogeneityType HomogeneityType { get; set; }

        public CorticalBone CorticalBone { get; set; }

        public MassShapeType MassShapeType { get; set; }

        public MatrixType MatrixType { get; set; }

        [RadioReportId("tho_m_070239")]
        public SignalTypeExtended T1wSignal { get; set; }

        [RadioReportId("tho_m_070242")]
        public SignalTypeExtended T2wSignal { get; set; }

        [RadioReportId("tho_m_070244")]
        public bool IsDiffusionRestriction { get; set; }

        [RadioReportId("tho_m_070359")]
        public bool IsCystic { get; set; }

        [RadioReportId("tho_m_070360")]
        public bool IsSeptatedOrChambered { get; set; }

        [RadioReportId("tho_m_070361")]
        public bool IsFluidLevel { get; set; }

        [RadioReportId("tho_m_070362")]
        public bool IsNecrosis { get; set; }

        [RadioReportId("tho_m_070363")]
        public bool IsCalcification { get; set; }

        [RadioReportId("tho_m_070364")]
        public bool IsCentral { get; set; }

        [RadioReportId("tho_m_070365")]
        public bool IsDiffuselyDistributed { get; set; }

        [RadioReportId("tho_m_070366")]
        public bool IsNidus { get; set; }

        [RadioReportId("tho_m_070367")]
        public bool IsT2wHyperintenseNidus { get; set; }

        [RadioReportId("tho_m_070368")]
        public bool IsFatSignal { get; set; }

        [RadioReportId("tho_m_070369")]
        public bool IsSclerosis { get; set; }

        [RadioReportId("tho_m_070440")]
        public bool IsPeriostealReaction { get; set; }

        [RadioReportId("tho_m_070441")]
        public bool IsCartilageCap { get; set; }

        [RadioReportId("tho_m_070443")]
        public int? CartilageCapMaxThickness { get; set; }

        [RadioReportId("tho_m_070445")]
        public bool IsT2wHyperintenseCartilageCap { get; set; }

        [RadioReportId("tho_m_070446")]
        public bool IsSingalPoorPerichondrium { get; set; }

        [RadioReportId("tho_m_070447")]
        public bool IsScleroticMargin { get; set; }

        [RadioReportId("tho_m_070540")]
        public bool IsExpansile { get; set; }

        [RadioReportId("tho_m_070541")]
        public bool IsOsteolytic { get; set; }

        [RadioReportId("tho_m_070542")]
        public bool IsOsteoblastic { get; set; }

        [RadioReportId("tho_m_070543")]
        public bool IsPermeativeGrowth { get; set; }

        [RadioReportId("tho_m_070544")]
        public bool IsScleroticMarginGrowthPattern { get; set; }

        [RadioReportId("tho_m_070545")]
        public bool IsMapLike { get; set; }

        [RadioReportId("tho_m_070546")]
        public bool IsPedunculated { get; set; }

        public ContrastEnhancementQuantitativeType ContrastEnhancementQuantitativeType { get; set; }

        [RadioReportId("tho_m_070248-l", InstanceName = nameof(ContrastEnhancementHomogeneityType), IsExportable = false)]
        public HomogeneityType ContrastEnhancementHomogeneityType { get; set; }

        public ContrastEnhancementDistributionType ContrastEnhancementDistributionType { get; set; }

        [RadioReportId("tho_m_070371")]
        public bool IsSoftTissueEdema { get; set; }

        [RadioReportId("tho_m_070372")]
        public bool IsBoneMarrowEdema { get; set; }

        [RadioReportId("tho_m_070373")]
        public bool IsPerifocalSclerosis { get; set; }

        [RadioReportId("tho_m_070374")]
        public bool IsSurroundingInflammatoryReaction { get; set; }

        [RadioReportId("tho_m_070449")]
        public bool IsIntraosseousAbscess { get; set; }

        [RadioReportId("tho_m_070450")]
        public bool IsInfiltrationOfSoftTissues { get; set; }

        [RadioReportId("tho_m_070451")]
        public bool IsInfiltrationOfAdjacentBone { get; set; }

        [RadioReportId("tho_m_070453")]
        public bool IsPathologicFracture { get; set; }

        [RadioReportId("tho_m_070454")]
        public bool IsInadequateTraumaSuspected { get; set; }

        [RadioReportId("tho_m_070259")]
        public BonesDiagnosisType DifferentialDiagnosis01 { get; set; }

        [RadioReportId("tho_m_070260")]
        public bool IsDiagnosisSuspected { get; set; }

        [RadioReportId("tho_m_070262")]
        public BonesDiagnosisType DifferentialDiagnosis02 { get; set; }

        [RadioReportId("tho_m_070263")]
        public bool IsSubordinate { get; set; }

        [RadioReportId("tho_m_070265")]
        public BonesDiagnosisType DifferentialDiagnosis03 { get; set; }

        [RadioReportId("tho_m_070266")]
        public bool IsMoreThanOneLesion { get; set; }

        #region FileUpload

        public Guid? ImageFileId { get; set; }

        [RadioReportId("uni_07_007-l", InstanceName = "ThoraxMRT.BonesFinding", IsExportable = false)]
        public ImageFile UploadedImageFile { get; set; }

        [RadioReportId("uni_07_003")]
        public string SerialNumber { get; set; }

        [RadioReportId("uni_07_005")]
        public string PictureNumber { get; set; }

        public void DropImageFile(Guid? imageFileId = null)
        {
            UploadedImageFile = null;
            ImageFileId = null;
        }
        public Guid? GetImageFileGuid(string fileType = null) => ImageFileId;

        public void SetImageFile(ImageFile imageFile, string fileType = null)
        {
            UploadedImageFile = imageFile;
            ImageFileId = imageFile?.Id;
        }

        #endregion

        #endregion

        #region ClavicleFracture

        [RadioReportId("tho_m_070302", InstanceName = nameof(BonesFindingType.ClavicleFracture))]
        public bool IsAOClassification { get; set; }

        [RadioReportId("tho_m_070501", InstanceName = nameof(BonesFindingType.ClavicleFracture))]
        public bool IsRockwood { get; set; }

        public RockwoodInjuryGrade RockwoodInjuryGrade { get; set; }

        [RadioReportId("tho_m_070509", InstanceName = nameof(BonesFindingType.ClavicleFracture))]
        public bool IsTossy { get; set; }

        public TossyInjuryGrade TossyInjuryGrade { get; set; }

        #endregion

        #region SpinalFracture

        public PathologyNoFractureType PathologyNoFractureType { get; set; }

        [RadioReportId("tho_m_070524", InstanceName = nameof(BonesFindingType.SpinalFracture))]
        public bool IsSchmorlNodes { get; set; }

        [RadioReportId("tho_m_070526", InstanceName = nameof(BonesFindingType.SpinalFracture))]
        public bool IsEndplateHerniation { get; set; }

        #endregion

        #region SternalMass

        [RadioReportId("tho_m_070272", InstanceName = nameof(BonesFindingType.SternalMass))]
        public bool IsSternalManubriumLocalized { get; set; }

        [RadioReportId("tho_m_070273", InstanceName = nameof(BonesFindingType.SternalMass))]
        public bool IsSternalBodyLocalized { get; set; }

        [RadioReportId("tho_m_070274", InstanceName = nameof(BonesFindingType.SternalMass))]
        public bool IsXiphoidProcessLocalized { get; set; }

        #endregion

        #region SpinalMass

        [RadioReportId("tho_m_070278", InstanceName = nameof(BonesFindingType.SpinalMass))]
        public VertebralBodyLocalizations VertebralBodyLocalization { get; set; }

        [RadioReportId("tho_m_070392", InstanceName = nameof(BonesFindingType.SpinalMass))]
        public bool IsPolkaDotSign { get; set; }

        [RadioReportId("tho_m_070547", InstanceName = nameof(BonesFindingType.SpinalMass))]
        public bool IsInterruptionOfVertebralEndPlate { get; set; }

        [RadioReportId("tho_m_070548", InstanceName = nameof(BonesFindingType.SpinalMass))]
        public bool IsEdgreenVainoSign { get; set; }

        [RadioReportId("tho_m_070455", InstanceName = nameof(BonesFindingType.SpinalMass))]
        public bool IsSpinalCanalInfiltration { get; set; }

        [RadioReportId("tho_m_070456", InstanceName = nameof(BonesFindingType.SpinalMass))]
        public bool IsPedicleDestruction { get; set; }

        #endregion

        public bool CheckCondition(string customConditionId) =>
            customConditionId switch
            {
                nameof(BonesFindingType.ClavicularMass) => FindingType.ToString() == customConditionId,
                nameof(BonesFindingType.ScapularMass) => FindingType.ToString() == customConditionId,
                nameof(BonesFindingType.MassOfTheRibs) => FindingType.ToString() == customConditionId,
                nameof(BonesFindingType.SternalMass) => FindingType.ToString() == customConditionId,
                nameof(BonesFindingType.SpinalMass) => FindingType.ToString() == customConditionId,
                _ => false
            };

    }
}
