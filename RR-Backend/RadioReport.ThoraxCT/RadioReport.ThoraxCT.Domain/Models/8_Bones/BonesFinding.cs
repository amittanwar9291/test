using RadioReport.Common.Logic.Attributes;
using RadioReport.ThoraxCT.Domain.Enums;
using RadioReport.ThoraxCT.Domain.Enums.Assessment;

namespace RadioReport.ThoraxCT.Domain.Models
{
    public class BonesFinding : BonesFindingBase
    {
        #region Common

        public BonesSideType SideType { get; set; }

        [RadioReportId("tho_c_0805237", InstanceName = nameof(BonesFindingType.FractureOfRibs))]
        [RadioReportId("tho_c_0805231", InstanceName = nameof(BonesFindingType.FractureOfSternum))]
        [RadioReportId("tho_c_080428", InstanceName = nameof(BonesFindingType.FractureOfSpine))]
        public bool IsFractureOlderRemodeled { get; set; }

        public DescriptionType DescriptionType { get; set; }

        [RadioReportId("tho_c_080206", InstanceName = nameof(BonesFindingType.FractureOfRibs))]
        [RadioReportId("tho_c_080206", InstanceName = nameof(BonesFindingType.MassRibs))]
        public RibLocations RibLocation { get; set; }

        [RadioReportId("tho_c_0802215", InstanceName = nameof(BonesFindingType.FractureOfRibs))]
        [RadioReportId("tho_c_0802217", InstanceName = nameof(BonesFindingType.FractureOfSpine))]
        public bool IsAcute { get; set; }

        [RadioReportId("tho_c_0802216", InstanceName = nameof(BonesFindingType.FractureOfRibs))]
        [RadioReportId("tho_c_0802218", InstanceName = nameof(BonesFindingType.FractureOfSpine))]
        public bool IsOlderRemodeled { get; set; }

        [RadioReportId("tho_c_080213", InstanceName = nameof(BonesFindingType.FractureOfSpine))]
        [RadioReportId("tho_c_080213", InstanceName = nameof(BonesFindingType.MassSpine))]
        public VertebralColumnLocalizations VertebralColumnLocalization { get; set; }

        public NotFurtherDefinedClassificationType NotFurtherDefinedClassificationType { get; set; }

        #region Mass

        [RadioReportId("tho_c_0803227")]
        public int? SizeInMm { get; set; }

        [RadioReportId("tho_c_080351")]
        public int? SecondPlaneInMm { get; set; }

        [RadioReportId("tho_c_080353")]
        public int? ThirdPlaneInMm { get; set; }

        [RadioReportId("tho_c_0803232")]
        public bool IsPermeativeGrowth { get; set; }

        [RadioReportId("tho_c_080448")]
        public bool IsLamination { get; set; }

        [RadioReportId("tho_c_0805100", InstanceName = nameof(BonesFindingType.MassSpine))]
        [RadioReportId("tho_c_0805100", InstanceName = nameof(BonesFindingType.MassRibs))]
        [RadioReportId("tho_c_0805100", InstanceName = nameof(BonesFindingType.MassClavicle))]
        [RadioReportId("tho_c_0805100", InstanceName = nameof(BonesFindingType.MassScapula))]
        [RadioReportId("tho_c_0805100", InstanceName = nameof(BonesFindingType.MassSternum))]
        public bool IsPathologicalFracture { get; set; }

        [RadioReportId("tho_c_0805226")]
        public bool IsInvolvingOfThePosteriorWall { get; set; }

        [RadioReportId("tho_c_080234")]
        public BonesDifferentialDiagnosisType BonesDifferentialDiagnosis1 { get; set; }

        [RadioReportId("tho_c_0802219")]
        public bool IsSuspected { get; set; }

        [RadioReportId("tho_c_080236")]
        public BonesDifferentialDiagnosisType BonesDifferentialDiagnosis2 { get; set; }

        [RadioReportId("tho_c_080237")]
        public bool IsSubordinated { get; set; }

        [RadioReportId("tho_c_080239")]
        public BonesDifferentialDiagnosisType BonesDifferentialDiagnosis3 { get; set; }

        #endregion

        #endregion

        #region FractureOfClavicle

        [RadioReportId("tho_c_0803201", InstanceName = nameof(BonesFindingType.FractureOfClavicle))]
        public bool IsAOClassification { get; set; }

        public ClaviculaeFractureType ClaviculaeFractureType { get; set; }

        public MedialEndSegmentClaviculaeType MedialEndSegmentClaviculaeType { get; set; }

        public DiaphysealSegmentClaviculaeType DiaphysealSegmentClaviculaeType { get; set; }

        public LateralEndSegmentClaviculaeType LateralEndSegmentClaviculaeType { get; set; }

        [RadioReportId("tho_c_0805200", InstanceName = nameof(BonesFindingType.FractureOfClavicle))]
        public bool IsRockwood { get; set; }

        public RockwoodType RockwoodType { get; set; }

        [RadioReportId("tho_c_0805208", InstanceName = nameof(BonesFindingType.FractureOfClavicle))]
        public bool IsTossy { get; set; }

        public TossyType TossyType { get; set; }

        #endregion

        #region FractureOfScapula

        public ScapulaFractureType ScapulaFractureType { get; set; }

        public ProcessType ProcessType { get; set; }

        public BodyType BodyType { get; set; }

        public GlenoidFossaType GlenoidFossaType { get; set; }

        #endregion

        #region FractureOfRibs

        public RibFractureType RibFractureType { get; set; }

        public PosteriorSegmentType PosteriorSegmentType { get; set; }

        public ShankType ShankType { get; set; }

        public AnteriorEndSegmentType AnteriorEndSegmentType { get; set; }

        #endregion

        #region FractureOfSternum

        public SternumFractureType SternumFractureType { get; set; }

        public ManubriumType ManubriumType { get; set; }

        public BodySternumType BodySternumType { get; set; }

        public XiphoidType XiphoidType { get; set; }

        #endregion

        #region FractureOfSpine

        public FractureOfSpineType FractureOfSpineType { get; set; }

        public CompressionInjuryType CompressionInjuryType { get; set; }

        public TensionBandInjuryType TensionBandInjuryType { get; set; }

        public PathologyType PathologyType { get; set; }

        [RadioReportId("tho_c_0805215", InstanceName = nameof(BonesFindingType.FractureOfSpine))]
        public bool IsSchmorlNodes { get; set; }

        [RadioReportId("tho_c_0805216", InstanceName = nameof(BonesFindingType.FractureOfSpine))]
        public bool IsEndplateHerniation { get; set; }

        #endregion

        #region MassSpine

        [RadioReportId("tho_c_080217", InstanceName = nameof(BonesFindingType.MassSpine))]
        public VertebralBodyLocalizations VertebralBodyLocalization { get; set; }

        #endregion

        #region MassSternum

        [RadioReportId("tho_c_080241", InstanceName = nameof(BonesFindingType.MassSternum))]
        public bool IsManubrium { get; set; }

        [RadioReportId("tho_c_080242", InstanceName = nameof(BonesFindingType.MassSternum))]
        public bool IsCorpus { get; set; }

        [RadioReportId("tho_c_080243", InstanceName = nameof(BonesFindingType.MassSternum))]
        public bool IsXiphoidProcess { get; set; }

        #endregion
    }
}
