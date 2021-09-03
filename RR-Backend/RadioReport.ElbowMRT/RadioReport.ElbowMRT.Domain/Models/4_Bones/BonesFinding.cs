using RadioReport.Common.Logic.Attributes;
using RadioReport.ElbowMRT.Domain.Enums.Bones;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.ElbowMRT.Domain.Enums;

namespace RadioReport.ElbowMRT.Domain.Models
{
    public class BonesFinding : BonesFindingBase, IRadioReportIdConditionEvaluator
    {
        #region Common

        [RadioReportId("elb_m_0405136", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        [RadioReportId("elb_m_0402149", InstanceName = nameof(BonesFindingType.Mass))]
        public bool IsSubordinated { get; set; }

        [RadioReportId("elb_m_040213", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        [RadioReportId("elb_m_0403188", InstanceName = nameof(BonesFindingType.Mass))]
        public bool IsHumerusLateralEpicondyle { get; set; }

        [RadioReportId("elb_m_040214", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        [RadioReportId("elb_m_0403189", InstanceName = nameof(BonesFindingType.Mass))]
        public bool IsHumerusMedialEpicondyle { get; set; }

        [RadioReportId("elb_m_040216", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        [RadioReportId("elb_m_0403192", InstanceName = nameof(BonesFindingType.Mass))]
        public bool IsUlnaProximal { get; set; }
        
        #endregion

        #region StandardVariantOrMalformation

        [RadioReportId("elb_m_040203", InstanceName = nameof(BonesFindingType.StandardVariantOrMalformation))]
        public bool IsSupracondylarProcess { get; set; }

        [RadioReportId("elb_m_040204", InstanceName = nameof(BonesFindingType.StandardVariantOrMalformation))]
        public bool IsSupratrochlearFormen { get; set; }

        [RadioReportId("elb_m_040205", InstanceName = nameof(BonesFindingType.StandardVariantOrMalformation))]
        public bool IsRadioulnarSynostosis { get; set; }

        #endregion

        #region Fracture

        [RadioReportId("elb_m_040207", InstanceName = nameof(BonesFindingType.Fracture))]
        public FractureType FractureType { get; set; }

        public BonesClassificationType ClassificationType { get; set; }

        public GraduationType GraduationType { get; set; }

        public AoClassificationType AoClassificationType { get; set; }

        public NotFurtherSpecifiedType NotFurtherSpecifiedType { get; set; }

        public FractureFormType FractureFormType { get; set; }

        public FractureFormDetailsType FractureFormDetailsType { get; set; }

        public LocalizationLongitudinalType LocalizationLongitudinalType { get; set; }

        public FractureFormSubType FractureFormSubType { get; set; }

        #endregion

        #region Luxation

        public DirectionType DirectionType { get; set; }

        [RadioReportId("elb_m_040231", InstanceName = nameof(BonesFindingType.Luxation))]
        public bool IsDirectionStatusPost { get; set; }

        public ComplexDislocationFracturesType ComplexDislocationFracturesType { get; set; }

        [RadioReportId("elb_m_0403186", InstanceName = nameof(BonesFindingType.Luxation))]
        public bool IsComplexDislocationFracturesStatusPost { get; set; }

        public MonteggiaFractureType MonteggiaFractureType { get; set; }

        #endregion

        #region BoneMarrowEdema

        [RadioReportId("elb_m_040215", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public bool IsRadialHead { get; set; }

        [RadioReportId("elb_m_0402152", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public bool IsOlecranon { get; set; }

        public DistributionType DistributionType { get; set; }

        [RadioReportId("elb_m_0403177", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public bool IsSubchondralFracture { get; set; }

        [RadioReportId("elb_m_0403178", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public bool IsImpaction { get; set; }

        [RadioReportId("elb_m_0403179", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public bool IsApophysitis { get; set; }

        [RadioReportId("elb_m_0403180", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public bool IsEpicondylitisHumeri { get; set; }

        [RadioReportId("elb_m_0403181", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public bool IsRadial { get; set; }

        [RadioReportId("elb_m_0403182", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public bool IsUlnar { get; set; }

        #endregion

        #region Arthrosis

        [RadioReportId("elb_m_0402102", InstanceName = nameof(BonesFindingType.Arthrosis))]
        public bool IsOsteophytes { get; set; }

        [RadioReportId("elb_m_0402103", InstanceName = nameof(BonesFindingType.Arthrosis))]
        public bool IsSubchondralSclerosis { get; set; }

        [RadioReportId("elb_m_0402104", InstanceName = nameof(BonesFindingType.Arthrosis))]
        public bool IsJointSpaceNarrowing { get; set; }

        [RadioReportId("elb_m_0402105", InstanceName = nameof(BonesFindingType.Arthrosis))]
        public bool IsLooseBody { get; set; }

        [RadioReportId("elb_m_0402107", InstanceName = nameof(BonesFindingType.Arthrosis))]
        public int? LooseBodyMaxDiameterInMm { get; set; }

        [RadioReportId("elb_m_0402154", InstanceName = nameof(BonesFindingType.Arthrosis))]
        public bool IsMoreThanOneLooseBody { get; set; }

        [RadioReportId("elb_m_0402155", InstanceName = nameof(BonesFindingType.Arthrosis))]
        public LooseBodyType LooseBodyType { get; set; }

        #endregion

        #region Osteomyelitis

        
        [RadioReportId("elb_m_0402114", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsIntraosseousAbscess  { get; set; }

        [RadioReportId("elb_m_0402117", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public int? IntraosseousAbscessSizeInMm { get; set; }

        [RadioReportId("elb_m_0402120", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public int? IntraosseousAbscessSecondPlaneInMm { get; set; }

        [RadioReportId("elb_m_0402123", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public int? IntraosseousAbscessThirdPlaneInMm { get; set; }

        [RadioReportId("elb_m_0402126", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsPenumbraSign { get; set; }

        [RadioReportId("elb_m_0402127", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsPeripheralContrastEnhancement { get; set; }

        [RadioReportId("elb_m_0402128", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsIntraosseousAbscessMoreThanOneLesion { get; set; }

        [RadioReportId("elb_m_0403130", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsSequester { get; set; }

        [RadioReportId("elb_m_0403133", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public int? SequesterSizeInMm { get; set; }

        [RadioReportId("elb_m_0403136", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public int? SequesterSecondPlaneInMm { get; set; }

        [RadioReportId("elb_m_0403139", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public int? SequesterThirdPlaneInMm { get; set; }

        [RadioReportId("elb_m_0403142", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsNoCmEnhancement { get; set; }

        [RadioReportId("elb_m_0403143", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsSequesterMoreThanOneLesion { get; set; }

        [RadioReportId("elb_m_0403145", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsThinningScalopping { get; set; }

        [RadioReportId("elb_m_0403146", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsDestruction { get; set; }

        [RadioReportId("elb_m_0404146", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsOsteolysis { get; set; }

        [RadioReportId("elb_m_0404147", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsBoneApposition { get; set; }

        [RadioReportId("elb_m_0404148", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsPeriostealThickening { get; set; }

        [RadioReportId("elb_m_0404194", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsPeriostealRupture { get; set; }
        
        [RadioReportId("elb_m_0404149", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsSubperiostealAbscess { get; set; }

        [RadioReportId("elb_m_0404152", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public int? SubperiostealAbscessSizeInMm { get; set; }

        [RadioReportId("elb_m_0404155", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public int? SubperiostealAbscessSecondPlaneInMm { get; set; }

        [RadioReportId("elb_m_0404164", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public int? SubperiostealAbscessThirdPlaneInMm { get; set; }

        public StadiumType StadiumType { get; set; }

        public BonesDifferentialDiagnosisType DifferentialDiagnosisType { get; set; }

        #endregion

        #region Mass

        [RadioReportId("elb_m_040106-l", InstanceName = nameof(BonesFindingType.Mass), IsExportable = false)]
        public DescriptionType DescriptionType { get; set; }

        [RadioReportId("elb_m_0402129", InstanceName = nameof(BonesFindingType.Mass))]
        public bool IsHistologicallyConfirmed { get; set; }

        public HistologyConfirmedType HistologyConfirmedType { get; set; }

        [RadioReportId("elb_m_0403190", InstanceName = nameof(BonesFindingType.Mass))]
        public bool IsHumerusDistal { get; set; }

        [RadioReportId("elb_m_0403191", InstanceName = nameof(BonesFindingType.Mass))]
        public bool IsRadiusProximal { get; set; }

        [RadioReportId("elb_m_0404186", InstanceName = nameof(BonesFindingType.Mass))]
        public bool IsDiaphyseal { get; set; }

        [RadioReportId("elb_m_0405178", InstanceName = nameof(BonesFindingType.Mass))]
        public int? ExtensionSizeInMm { get; set; }

        [RadioReportId("elb_m_0405181", InstanceName = nameof(BonesFindingType.Mass))]
        public int? ExtensionSecondPlaneInMm { get; set; }

        [RadioReportId("elb_m_0405184", InstanceName = nameof(BonesFindingType.Mass))]
        public int? ExtensionThirdPlaneInMm { get; set; }

        [RadioReportId("elb_m_0403202", InstanceName = nameof(BonesFindingType.Mass))]
        public int? CartilageCapMaxThicknessInMm { get; set; }

        [RadioReportId("elb_m_0404180", InstanceName = nameof(BonesFindingType.Mass))]
        public bool IsInfiltrationOfAdjacentBones { get; set; }

        [RadioReportId("elb_m_0404182", InstanceName = nameof(BonesFindingType.Mass))]
        public bool IsPathologicalFracture { get; set; }

        [RadioReportId("elb_m_0404193", InstanceName = nameof(BonesFindingType.Mass))]
        public bool IsPathologicalFractureSuspectedDiagnosis { get; set; }

        [RadioReportId("elb_m_0405174", InstanceName = nameof(BonesFindingType.Mass))]
        public bool IsPerifocalSclerosis { get; set; }

        [RadioReportId("elb_m_0405175", InstanceName = nameof(BonesFindingType.Mass))]
        public bool IsSurroundingInflammatoryReaction { get; set; }

        public LocalExtensionType LocalExtensionType { get; set; }

        [RadioReportId("elb_m_0402145", InstanceName = nameof(BonesFindingType.Mass))]
        public DiagnosisType DifferentialDiagnosis1 { get; set; }

        [RadioReportId("elb_m_0402146", InstanceName = nameof(BonesFindingType.Mass))]
        public bool IsSuspectedDiagnosis { get; set; }

        [RadioReportId("elb_m_0402148", InstanceName = nameof(BonesFindingType.Mass))]
        public DiagnosisType DifferentialDiagnosis2 { get; set; }

        [RadioReportId("elb_m_0402151", InstanceName = nameof(BonesFindingType.Mass))]
        public DiagnosisType DifferentialDiagnosis3 { get; set; }

        [RadioReportId("elb_m_0403205", InstanceName = nameof(BonesFindingType.Mass))]
        public bool IsWithinThePrimarilyAffectedBone { get; set; }

        #endregion

        public bool CheckCondition(string customConditionId) =>
            customConditionId switch
            {
                nameof(FractureType.RadialHead) => FractureType.ToString() == customConditionId,
                nameof(FractureType.ProximalUlna) => FractureType.ToString() == customConditionId,
                nameof(FractureType.DiaphysealRadius) => FractureType.ToString() == customConditionId,
                nameof(FractureType.DistalHumerus) => FractureType.ToString() == customConditionId,
                nameof(FractureType.DiaphysealUlna) => FractureType.ToString() == customConditionId,
                nameof(AoClassificationType.PartialArticular) => AoClassificationType.ToString() == customConditionId,
                nameof(AoClassificationType.Articular) => AoClassificationType.ToString() == customConditionId,
                nameof(FractureFormType.MultifragmentaryExtraarticularFx) => FractureFormType.ToString() == customConditionId,
                nameof(FractureFormType.SimpleArticularWedgeOrMultifragmentary) => FractureFormType.ToString() == customConditionId,
                nameof(FractureFormType.ArticularMultifragmentary) => FractureFormType.ToString() == customConditionId,
                nameof(FractureFormType.LateralSagittalFracture) => FractureFormType.ToString() == customConditionId,
                nameof(FractureFormType.MedialSagittalFracture) => FractureFormType.ToString() == customConditionId,
                nameof(FractureType.DiaphysealRadius) + nameof(AoClassificationType.SimpleFracture) => FractureType == FractureType.DiaphysealRadius && AoClassificationType == AoClassificationType.SimpleFracture,
                nameof(FractureType.DiaphysealRadius) + nameof(AoClassificationType.WedgeFracture) => FractureType == FractureType.DiaphysealRadius && AoClassificationType == AoClassificationType.WedgeFracture,
                nameof(FractureType.DiaphysealUlna) + nameof(AoClassificationType.SimpleFracture) => FractureType == FractureType.DiaphysealUlna && AoClassificationType == AoClassificationType.SimpleFracture,
                nameof(FractureType.DiaphysealUlna) + nameof(AoClassificationType.WedgeFracture) => FractureType == FractureType.DiaphysealUlna && AoClassificationType == AoClassificationType.WedgeFracture,
                nameof(BonesFindingType.Mass) => FindingType.ToString() == customConditionId,
                _ => false
            };
    }
}
