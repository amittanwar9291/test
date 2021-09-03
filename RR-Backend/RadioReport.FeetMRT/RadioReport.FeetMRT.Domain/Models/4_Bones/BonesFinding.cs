using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.Common.Logic.Models;
using RadioReport.FeetMRT.Domain.Enums.Bones;
using RadioReport.FeetMRT.Domain.Enums.Bones.Dislocation;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.FeetMRT.Domain.Enums;
using System.Linq;
using RadioReport.FeetMRT.Domain.Constants;

namespace RadioReport.FeetMRT.Domain.Models
{
    public class BonesFinding : BonesFindingBase, IRadioReportIdConditionEvaluator
    {
        #region Common

        [RadioReportId("anc_m_040204", InstanceName = nameof(BonesFindingType.NormalVariantOrAnomaly))]
        public FootThreeSidesLocalizations FootThreeSidesLocalization { get; set; }

        [RadioReportId("anc_m_040208", InstanceName = nameof(BonesFindingType.Fracture))]
        [RadioReportId("anc_m_040210", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        [RadioReportId("anc_m_040217", InstanceName = nameof(BonesFindingType.OsteochondralLesion))]
        [RadioReportId("anc_m_040219", InstanceName = nameof(BonesFindingType.Osteoarthritis))]
        [RadioReportId("anc_m_040219", InstanceName = nameof(BonesFindingType.Arthritis))]
        [RadioReportId("anc_m_040210", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        [RadioReportId("anc_m_040223", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public ThreeDimensionalLocalizations ThreeDimensionalLocalization { get; set; }

        public IntensityType IntensityType { get; set; }

        [RadioReportId("anc_m_040372", InstanceName = nameof(BonesFindingType.OsteochondralLesion))]
        [RadioReportId("anc_m_0403258", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsBoneMarrowEdema { get; set; }

        [RadioReportId("anc_m_0403300", InstanceName = nameof(BonesFindingType.Osteoarthritis))]
        [RadioReportId("anc_m_0404112", InstanceName = nameof(BonesFindingType.Arthritis))]
        public bool IsChondropathy { get; set; }

        [RadioReportId("anc_m_040587", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        [RadioReportId("anc_m_0405229", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        [RadioReportId("anc_m_0402234", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsSubordinated { get; set; }

        #endregion

        #region NormalVariantOrAnomaly

        public StandardVariantType StandardVariantType { get; set; }

        public RadioulnarSynostosisType RadioulnarSynostosisType { get; set; }

        public SynarthrosisType SynarthrosisType { get; set; }

        #endregion

        #region Fracture

        public FractureClassificationType FractureClassificationType { get; set; }

        public FractureTypeType FractureTypeType { get; set; }

        public FractureFormSubType FractureFormSubType { get; set; }

        public MedialMalleolusType MedialMalleolusType { get; set; }

        public DistalTibiaFractureType DistalTibiaFractureType { get; set; }

        [RadioReportId("anc_m_040354", InstanceName = nameof(BonesFindingType.Fracture))]
        public bool IsHindfoot { get; set; }

        [RadioReportId("anc_m_040355", InstanceName = nameof(BonesFindingType.Fracture))]
        public bool IsMidfoot { get; set; }

        [RadioReportId("anc_m_040356", InstanceName = nameof(BonesFindingType.Fracture))]
        public bool IsForefoot { get; set; }

        [RadioReportId("anc_m_040512", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureFormSubType.FrontalCoronalFracture43B11))]
        [RadioReportId("anc_m_040519", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureFormSubType.FrontalCoronalFracture43B21))]
        [RadioReportId("anc_m_040526", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureFormSubType.FrontalCoronalFracture43B31))]
        public bool IsAnterior { get; set; }

        [RadioReportId("anc_m_040513", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureFormSubType.FrontalCoronalFracture43B11))]
        [RadioReportId("anc_m_040520", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureFormSubType.FrontalCoronalFracture43B21))]
        [RadioReportId("anc_m_040527", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureFormSubType.FrontalCoronalFracture43B31))]
        public bool IsPosteriorVolkmann { get; set; }

        [RadioReportId("anc_m_040515", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureFormSubType.SagittalFracture43B12))]
        [RadioReportId("anc_m_040522", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureFormSubType.Sagittal43B22))]
        [RadioReportId("anc_m_040529", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureFormSubType.Sagittal43B32))]
        public bool IsLateral { get; set; }

        [RadioReportId("anc_m_040516", InstanceName = nameof(BonesFindingType.Fracture))]
        public bool IsMedArticularSurfaceInclMedMalleolus { get; set; }

        [RadioReportId("anc_m_040523", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureFormSubType.Sagittal43B22))]
        [RadioReportId("anc_m_040530", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureFormSubType.Sagittal43B32))]
        public bool IsMedial { get; set; }

        [RadioReportId("anc_m_0405311", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.SimpleArticularSimpleMetaphysealFracture43C1))]
        [RadioReportId("anc_m_0405316", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.SimpleArticularMultifragmentaryMetaphysealFracture43C2))]
        public bool IsFrontalCoronal { get; set; }

        [RadioReportId("anc_m_0405312", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.SimpleArticularSimpleMetaphysealFracture43C1))]
        [RadioReportId("anc_m_0405317", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.SimpleArticularMultifragmentaryMetaphysealFracture43C2))]
        public bool IsSagittalPlane { get; set; }

        [RadioReportId("anc_m_0405323", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.IsolatedFibulaFracture44B1))]
        [RadioReportId("anc_m_0405329", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.WithMedialInjury44B2))]
        [RadioReportId("anc_m_0405341", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.WithMedialInjuryAndFxOfThePosterolateralRim44B3))]
        public bool IsnTillauxChaputTubercleFracture { get; set; }

        [RadioReportId("anc_m_0405324", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.IsolatedFibulaFracture44B1))]
        [RadioReportId("anc_m_0405330", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.WithMedialInjury44B2))]
        [RadioReportId("anc_m_0405342", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.WithMedialInjuryAndFxOfThePosterolateralRim44B3))]
        public bool IsWagstaffeLeFortAvulsionFracture { get; set; }

        [RadioReportId("anc_m_0405325", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.IsolatedFibulaFracture44B1))]
        [RadioReportId("anc_m_0405331", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.WithMedialInjury44B2))]
        [RadioReportId("anc_m_0405343", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.WithMedialInjuryAndFxOfThePosterolateralRim44B3))]
        [RadioReportId("anc_m_0405337", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureFormSubType.Multifragment44B23))]
        public bool IsSyndesmosisUnstable { get; set; }

        [RadioReportId("anc_m_0405335", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureFormSubType.Multifragment44B23))]
        [RadioReportId("anc_m_040569", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.ProximalFibulaInjury44C3))]
        public bool IsRuptureOfTheDeltoidLigament { get; set; }

        [RadioReportId("anc_m_0405336", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureFormSubType.Multifragment44B23))]
        [RadioReportId("anc_m_040570", InstanceName = nameof(BonesFindingType.Fracture), CustomConditionName = nameof(FractureTypeType.ProximalFibulaInjury44C3))]
        public bool IsFractureOfTheMedialMalleolus { get; set; }

        [RadioReportId("anc_m_040567", InstanceName = nameof(BonesFindingType.Fracture))]
        public bool IsFibulaNeckFracture { get; set; }

        [RadioReportId("anc_m_040568", InstanceName = nameof(BonesFindingType.Fracture))]
        public bool IsProximalTibiofibularJointDislocation { get; set; }

        #endregion

        #region BoneMarrowEdema

        public DistributionType DistributionType { get; set; }

        public AssociatedFindingsType AssociatedFindingsType { get; set; }

        [RadioReportId("anc_m_040582", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public DifferentialDiagnosisType DifferentialDiagnosisType { get; set; }

        #endregion

        #region Dislocation

        public DislocationLocalizationType DislocationLocalizationType { get; set; }

        public DislocationClassificationType DislocationClassificationType { get; set; }

        public DislocationClassificationSubType DislocationClassificationSubType { get; set; }

        public DislocationClassificationDetailsType DislocationClassificationDetailsType { get; set; }

        public DislocationStageType DislocationStageType { get; set; }

        #endregion



        #region OsteochondralLesion

        [RadioReportId("anc_m_040368")]
        public int? DiameterLesionInMm { get; set; }

        public OsteochondralLesionClassificationType OsteochondralLesionClassificationType { get; set; }

        [RadioReportId("anc_m_040374", InstanceName = nameof(BonesFindingType.OsteochondralLesion))]
        public bool IsDetectionFragment { get; set; }

        public DetectionDissekatType DetectionDissekatType { get; set; }

        [RadioReportId("anc_m_040377", InstanceName = nameof(BonesFindingType.OsteochondralLesion))]
        public bool IsSubchondralCyst { get; set; }

        [RadioReportId("anc_m_040378", InstanceName = nameof(BonesFindingType.OsteochondralLesion))]
        public bool IsT2HyperintenseRim { get; set; }

        [RadioReportId("anc_m_040486", InstanceName = nameof(BonesFindingType.OsteochondralLesion))]
        public bool IsAdjacentArticularEffusion { get; set; }

        public EpiphysealJointsType EpiphysealJointsType { get; set; }

        [RadioReportId("anc_m_0405303", InstanceName = nameof(BonesFindingType.OsteochondralLesion))]
        public bool ApophysitisMorbusSever { get; set; }

        [RadioReportId("anc_m_0405304", InstanceName = nameof(BonesFindingType.OsteochondralLesion))]
        public bool ApophysitisMorbusIselin { get; set; }

        [RadioReportId("anc_m_0405305", InstanceName = nameof(BonesFindingType.OsteochondralLesion))]
        public bool ThiemannDisease { get; set; }

        [RadioReportId("anc_m_0405306", InstanceName = nameof(BonesFindingType.OsteochondralLesion))]
        public bool KohlerDiseaseI { get; set; }

        [RadioReportId("anc_m_0405307", InstanceName = nameof(BonesFindingType.OsteochondralLesion))]
        public bool KohlerDiseaseII { get; set; }


        #endregion



        #region Osteoarthrosis

        public OuterbridgeClassificationType OuterbridgeClassificationType { get; set; }

        [RadioReportId("anc_m_0403308", InstanceName = nameof(BonesFindingType.Osteoarthritis))]
        public int? ExpansionLargestDiameterInMm { get; set; }
        public ArticularSurfacesType ArticularSurfacesType { get; set; }

        [RadioReportId("anc_m_0404301", InstanceName = nameof(BonesFindingType.Osteoarthritis))]
        public bool IsOsteophytes { get; set; }

        [RadioReportId("anc_m_0404302", InstanceName = nameof(BonesFindingType.Osteoarthritis))]
        public bool IsSubchondralCystsGeodes { get; set; }

        [RadioReportId("anc_m_0404303", InstanceName = nameof(BonesFindingType.Osteoarthritis))]
        public bool IsSubchondralEdema { get; set; }

        [RadioReportId("anc_m_0404304", InstanceName = nameof(BonesFindingType.Osteoarthritis))]
        public bool IsSubchondralSclerosis { get; set; }

        [RadioReportId("anc_m_0404305", InstanceName = nameof(BonesFindingType.Osteoarthritis))]
        public bool IsLocalBoneMarrowEdema { get; set; }

        [RadioReportId("anc_m_0404306", InstanceName = nameof(BonesFindingType.Osteoarthritis))]
        public bool IsSynovialCyst { get; set; }

        [RadioReportId("anc_m_0405301", InstanceName = nameof(BonesFindingType.Osteoarthritis))]
        public bool IsChondrocalcinosis { get; set; }

        #endregion

        #region Arthritis

        [RadioReportId("anc_m_040387", InstanceName = nameof(BonesFindingType.Arthritis))]
        public bool IsArticularEffusion { get; set; }

        [RadioReportId("anc_m_040388", InstanceName = nameof(BonesFindingType.Arthritis))]
        public bool IsSynovitis { get; set; }

        [RadioReportId("anc_m_040389", InstanceName = nameof(BonesFindingType.Arthritis))]
        public bool IsHyperplasia { get; set; }

        [RadioReportId("anc_m_040390", InstanceName = nameof(BonesFindingType.Arthritis))]
        public bool IsT2wHyperintensity { get; set; }

        [RadioReportId("anc_m_040391", InstanceName = nameof(BonesFindingType.Arthritis))]
        public bool IsIncreasedContrastEnhancement { get; set; }

        [RadioReportId("anc_m_040392", InstanceName = nameof(BonesFindingType.Arthritis))]
        public bool IsPannus { get; set; }

        [RadioReportId("anc_m_0404103", InstanceName = nameof(BonesFindingType.Arthritis))]
        public bool IsErosions { get; set; }

        public ErosionsType ErosionsLocalizationType { get; set; }

        [RadioReportId("anc_m_0404107", InstanceName = nameof(BonesFindingType.Arthritis))]
        public bool IsInflammatoryBoneMarrowEdema { get; set; }

        public InflammatoryBoneMarrowEdemaType InflammatoryBoneMarrowEdemaLocalizationType { get; set; }

        [RadioReportId("anc_m_0404111", InstanceName = nameof(BonesFindingType.Arthritis))]
        public bool IsIntraosseousCysts { get; set; }

        [RadioReportId("anc_m_0404113", InstanceName = nameof(BonesFindingType.Arthritis))]
        public bool IsPeriostitis { get; set; }

        [RadioReportId("anc_m_0405100", InstanceName = nameof(BonesFindingType.Arthritis))]
        public bool IsProliferativeBoneChanges { get; set; }

        [RadioReportId("anc_m_0405101", InstanceName = nameof(BonesFindingType.Arthritis))]
        public bool IsDestructions { get; set; }

        [RadioReportId("anc_m_0405102", InstanceName = nameof(BonesFindingType.Arthritis))]
        public bool IsAnkylosis { get; set; }

        public ArthritisDifferentialDiagnosisType ArthritisDifferentialDiagnosisType { get; set; }


        #endregion

        #region Osteomyelitis

        public StageType StageType { get; set; }

        [RadioReportId("anc_m_0402244", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsDestruction { get; set; }

        [RadioReportId("anc_m_0402245", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsThinning { get; set; }

        [RadioReportId("anc_m_0403259", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsIntraosseousAbscess { get; set; }

        [RadioReportId("anc_m_0403261", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public int? IntrabonyAbscessSizeInMm { get; set; }

        [RadioReportId("anc_m_0403264", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public int? IntraosseousAbscessSecondPlaneInMm { get; set; }

        [RadioReportId("anc_m_0403267", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public int? IntraosseousAbscessThirdPlaneInMm { get; set; }

        [RadioReportId("anc_m_0403269", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsPenumbraSign { get; set; }

        [RadioReportId("anc_m_0403270", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsPeripheralContrastEnhancement { get; set; }


        [RadioReportId("anc_m_0403271", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsIntraossalAbscessMoreThanOneLesion { get; set; }

        [RadioReportId("anc_m_0404250", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsSequestrum { get; set; }

        [RadioReportId("anc_m_0404240", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public int? SequestrumSizeInMm { get; set; }

        [RadioReportId("anc_m_0404243", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public int? SequesterSecondPlaneInMm { get; set; }

        [RadioReportId("anc_m_0404246", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public int? SequesterThirdPlaneInMm { get; set; }

        [RadioReportId("anc_m_0404248", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsSequesterNoContrastEnhancement { get; set; }

        [RadioReportId("anc_m_0404249", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsSequestrumMoreThanOneLesion { get; set; }

        [RadioReportId("anc_m_0405217", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsOsteolysis { get; set; }

        [RadioReportId("anc_m_0405218", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsBoneApposition { get; set; }

        [RadioReportId("anc_m_0405219", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsPeriostealThickening { get; set; }

        [RadioReportId("anc_m_0405220", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsPeriostealRupture { get; set; }

        [RadioReportId("anc_m_0405221", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsSubperiostealAbscess { get; set; }

        [RadioReportId("anc_m_0405224", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public int? SubperiostealAbscessSizeInMm { get; set; }

        [RadioReportId("anc_m_0405225", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsSoftTissueEdema { get; set; }
        public OsteomyelitisDifferentialDiagnosisType OsteomyelitisDifferentialDiagnosisType { get; set; }

        #endregion

        #region SpaceRequirement

        public DescriptionType DescriptionType { get; set; }

        public HistologyType HistologyType { get; set; }

        [RadioReportId("anc_m_0403236", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsDiaphyseal { get; set; }

        [RadioReportId("anc_m_0404208", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public int? SizeInMm { get; set; }

        [RadioReportId("anc_m_0404211", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public int? SecondPlaneInMm { get; set; }

        [RadioReportId("anc_m_0404214", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public int? ThirdPlaneInMm { get; set; }

        [RadioReportId("anc_m_0405204", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsGeographic { get; set; }

        [RadioReportId("anc_m_0403248", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public int? MaxThicknessInMm { get; set; }

        [RadioReportId("anc_m_0404234", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsInfiltrationOfAdjacentBones { get; set; }

        [RadioReportId("anc_m_0404236", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsPathologicFracture { get; set; }

        [RadioReportId("anc_m_0404237", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsPathologicalFractureSuspicionOf { get; set; }

        [RadioReportId("anc_m_0405211", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsPerifocalSclerosis { get; set; }

        [RadioReportId("anc_m_0405212", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsSurroundingInflammatoryReaction { get; set; }
        public LocalPropagationType LocalPropagationType { get; set; }

        [RadioReportId("anc_m_0402230", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public DifferentialDiagnosisType DifferentialDiagnosis1 { get; set; }

        [RadioReportId("anc_m_0402231", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsSuspicionOf { get; set; }

        [RadioReportId("anc_m_0402233", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public DifferentialDiagnosisType DifferentialDiagnosis2 { get; set; }

        [RadioReportId("anc_m_0402236", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public DifferentialDiagnosisType DifferentialDiagnosis3 { get; set; }

        [RadioReportId("anc_m_0403255", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsMoreThanOneLesionSameEntity { get; set; }

        [RadioReportId("anc_m_0403256", InstanceName = nameof(BonesFindingType.MassOsteolysis))]
        public bool IsInsideTheBonePrimarilyAffected { get; set; }

        #endregion


        public bool CheckCondition(string customConditionId) =>
            customConditionId switch
            {

                nameof(ThreeDimensionalLocalizations.Tibia) => this.ThreeDimensionalLocalization.ToString() == customConditionId,
                nameof(ThreeDimensionalLocalizations.Fibula) => this.ThreeDimensionalLocalization.ToString() == customConditionId,
                nameof(ThreeDimensionalLocalizations.Malleoli) => this.ThreeDimensionalLocalization.ToString() == customConditionId,
                nameof(ThreeDimensionalLocalizations.Talus) => this.ThreeDimensionalLocalization.ToString() == customConditionId,
                nameof(ThreeDimensionalLocalizations.Calcaneus) => this.ThreeDimensionalLocalization.ToString() == customConditionId,
                nameof(ThreeDimensionalLocalizations.OsNaviculare) => this.ThreeDimensionalLocalization.ToString() == customConditionId,
                nameof(ThreeDimensionalLocalizations.OsCuboideum) => this.ThreeDimensionalLocalization.ToString() == customConditionId,

                nameof(FractureClassificationType.Extraarticular43A) => this.FractureClassificationType.ToString() == customConditionId,
                nameof(FractureClassificationType.PartiallyArticular43B) => this.FractureClassificationType.ToString() == customConditionId,
                nameof(FractureClassificationType.Articular43C) => this.FractureClassificationType.ToString() == customConditionId,
                nameof(FractureClassificationType.InfrasyndesmoticFibulaInjury44A) => this.FractureClassificationType.ToString() == customConditionId,
                nameof(FractureClassificationType.TranssyndesmoticFibula44B) => this.FractureClassificationType.ToString() == customConditionId,
                nameof(FractureClassificationType.SuprasyndesmoticFibula44C) => this.FractureClassificationType.ToString() == customConditionId,
                nameof(FractureClassificationType.BodyFracture811) => this.FractureClassificationType.ToString() == customConditionId,
                nameof(FractureClassificationType.FractureOfTheNeck812) => this.FractureClassificationType.ToString() == customConditionId,
                nameof(FractureClassificationType.HeadFracture813) => this.FractureClassificationType.ToString() == customConditionId,
                nameof(FractureClassificationType.ExtraArticular82A) => this.FractureClassificationType.ToString() == customConditionId,
                nameof(FractureClassificationType.TongueTypeFractureExitingIntoPosteriorFacet82B) => this.FractureClassificationType.ToString() == customConditionId,
                nameof(FractureClassificationType.IntraArticularFractureJoint82C) => this.FractureClassificationType.ToString() == customConditionId,
                nameof(FractureClassificationType.Medial851) => this.FractureClassificationType.ToString() == customConditionId,
                nameof(FractureClassificationType.Middle852) => this.FractureClassificationType.ToString() == customConditionId,
                nameof(FractureClassificationType.Lateral853) => this.FractureClassificationType.ToString() == customConditionId,
                nameof(FractureClassificationType.ProximalEndSegment871) => this.FractureClassificationType.ToString() == customConditionId,
                nameof(FractureClassificationType.Diaphyseal872) => this.FractureClassificationType.ToString() == customConditionId,
                nameof(FractureClassificationType.DistalEndSegment873) => this.FractureClassificationType.ToString() == customConditionId,
                nameof(FractureClassificationType.ProximalEndSegment881) => this.FractureClassificationType.ToString() == customConditionId,
                nameof(FractureClassificationType.Diaphyseal882) => this.FractureClassificationType.ToString() == customConditionId,
                nameof(FractureClassificationType.DistalEndSegment883) => this.FractureClassificationType.ToString() == customConditionId,

                nameof(FractureTypeType.WithMedialInjuryAndFxOfThePosterolateralRim44B3) => this.FractureTypeType.ToString() == customConditionId,
                nameof(FractureTypeType.ProximalFibulaInjury44C3) => this.FractureTypeType.ToString() == customConditionId,
                nameof(FractureTypeType.IsolatedFibulaFracture44B1) => this.FractureTypeType.ToString() == customConditionId,
                nameof(FractureTypeType.SimpleDiaphysealFibulaFracture44C1) => this.FractureTypeType.ToString() == customConditionId,
                nameof(FractureTypeType.WedgeMultifragmentaryDiaphysealFibulaFracture44C2) => this.FractureTypeType.ToString() == customConditionId,
                nameof(FractureTypeType.SimpleArticularSimpleMetaphysealFracture43C1) => this.FractureTypeType.ToString() == customConditionId,
                nameof(FractureTypeType.SimpleArticularMultifragmentaryMetaphysealFracture43C2) => this.FractureTypeType.ToString() == customConditionId,
                nameof(FractureTypeType.SimpleFracture43A1) => this.FractureTypeType.ToString() == customConditionId,
                nameof(FractureTypeType.WedgeFracture43A2) => this.FractureTypeType.ToString() == customConditionId,
                nameof(FractureTypeType.MultifragmentaryFracture43A3) => this.FractureTypeType.ToString() == customConditionId,
                nameof(FractureTypeType.SplitFracture43B1) => this.FractureTypeType.ToString() == customConditionId,
                nameof(FractureTypeType.SplitDepressionFracture43B2) => this.FractureTypeType.ToString() == customConditionId,
                nameof(FractureTypeType.MultiFragmentaryImpression43B3) => this.FractureTypeType.ToString() == customConditionId,
                nameof(FractureTypeType.MultifragmentaryArticularAndMetaphysealFracture43C3) => this.FractureTypeType.ToString() == customConditionId,
                nameof(FractureTypeType.IsolatedLesionOf44A1) => this.FractureTypeType.ToString() == customConditionId,
                nameof(FractureTypeType.WithMedialMalleolarFracture44A2) => this.FractureTypeType.ToString() == customConditionId,
                nameof(FractureTypeType.WithPosteromedialFracture44A3) => this.FractureTypeType.ToString() == customConditionId,
                nameof(FractureTypeType.WithMedialInjury44B2) => this.FractureTypeType.ToString() == customConditionId,
                nameof(FractureTypeType.Avulsion811A) => this.FractureTypeType.ToString() == customConditionId,
                nameof(FractureTypeType.PartialArticular811B) => this.FractureTypeType.ToString() == customConditionId,
                nameof(FractureTypeType.CompleteArticular811C) => this.FractureTypeType.ToString() == customConditionId,

                nameof(FractureFormSubType.FrontalCoronalFracture43B11) => this.FractureFormSubType.ToString() == customConditionId,
                nameof(FractureFormSubType.FrontalCoronalFracture43B21) => this.FractureFormSubType.ToString() == customConditionId,
                nameof(FractureFormSubType.FrontalCoronalFracture43B31) => this.FractureFormSubType.ToString() == customConditionId,
                nameof(FractureFormSubType.SagittalFracture43B12) => this.FractureFormSubType.ToString() == customConditionId,
                nameof(FractureFormSubType.Sagittal43B22) => this.FractureFormSubType.ToString() == customConditionId,
                nameof(FractureFormSubType.Sagittal43B32) => this.FractureFormSubType.ToString() == customConditionId,
                nameof(FractureFormSubType.Multifragment44B23) => this.FractureFormSubType.ToString() == customConditionId,

                CustomConditionNames.Cuneiform =>
                    new[] { ThreeDimensionalLocalizations.OsCuneiformeIntermedium, ThreeDimensionalLocalizations.OsCuneiformeLaterale, ThreeDimensionalLocalizations.OsCuneiformeMediale }.Contains(this.ThreeDimensionalLocalization),
                CustomConditionNames.Metatarsale =>
                    new[] {ThreeDimensionalLocalizations.OsMetatarsale1, ThreeDimensionalLocalizations.OsMetatarsale2, ThreeDimensionalLocalizations.OsMetatarsale3,
                            ThreeDimensionalLocalizations.OsMetatarsale4, ThreeDimensionalLocalizations.OsMetatarsale5}.Contains(this.ThreeDimensionalLocalization),
                CustomConditionNames.ProximalePhalanx =>
                    new[] {ThreeDimensionalLocalizations.ProximalPhalanxD1, ThreeDimensionalLocalizations.ProximalPhalanxD2, ThreeDimensionalLocalizations.ProximalPhalanxD3,
                            ThreeDimensionalLocalizations.ProximalPhalanxD4, ThreeDimensionalLocalizations.ProximalPhalanxD5, ThreeDimensionalLocalizations.MiddlePhalanxD2, 
                            ThreeDimensionalLocalizations.MiddlePhalanxD3, ThreeDimensionalLocalizations.MiddlePhalanxD4, ThreeDimensionalLocalizations.MiddlePhalanxD5,
                            ThreeDimensionalLocalizations.DistalPhalanxD1, ThreeDimensionalLocalizations.DistalPhalanxD2, ThreeDimensionalLocalizations.DistalPhalanxD3,
                            ThreeDimensionalLocalizations.DistalPhalanxD4, ThreeDimensionalLocalizations.DistalPhalanxD5}.Contains(this.ThreeDimensionalLocalization),
                CustomConditionNames.ProximalDistal => FractureClassificationType == FractureClassificationType.ProximalEndSegment871 || FractureClassificationType == FractureClassificationType.DistalEndSegment873,
                _ => false
            };
    }
}
