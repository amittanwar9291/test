using RadioReport.Common.Logic.Attributes;
using RadioReport.KneeMRT.Domain.Enums;
using RadioReport.KneeMRT.Domain.Enums.Bones;
using RadioReport.Common.Logic.Interfaces;

namespace RadioReport.KneeMRT.Domain.Models
{
    public class BonesFinding : BonesFindingBase, IRadioReportIdConditionEvaluator
    {
        public EvaluationFractureType EvaluationFractureType { get; set; }

        public FractureDistType FractureDistType { get; set; }

        public AvulsionFractureType AvulsionFractureType { get; set; }

        [RadioReportId("kne_m_040227", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        [RadioReportId("kne_m_040270", InstanceName = nameof(BonesFindingType.BonesTumor))]
        public KneeExtensionLocations KneeExtensionLocation { get; set; }

        [RadioReportId("kne_m_040230")]
        public BonesLocations KneeLocation { get; set; }

        #region FractureDistalFemur

        public FemurExtraarticularType FemurExtraarticularType { get; set; }

        public SimpleFractureType SimpleFractureType { get; set; }

        public WedgeFractureType WedgeFractureType { get; set; }

        public FemurPartiallyArticularType FemurPartiallyArticularType { get; set; }

        [RadioReportId("kne_m_040301-l", InstanceName = nameof(SimpleLateralFractureType), IsExportable = false)]
        public SimpleLateralMedialFractureType SimpleLateralFractureType { get; set; }

        [RadioReportId("kne_m_040401-l", InstanceName = nameof(SimpleMedialFractureType), IsExportable = false)]
        public SimpleLateralMedialFractureType SimpleMedialFractureType { get; set; }

        public CoronaryFractureType CoronaryFractureType { get; set; }

        public FemurArticularType FemurArticularType { get; set; }

        public ArticularOneFractureLineType ArticularOneFractureLineType { get; set; }

        public ArticularMultipleFractureLinesType ArticularMultipleFractureLinesType { get; set; }

        #endregion


        #region FractureTibiaProximal

        public TibiaExtraarticularType TibiaExtraarticularType { get; set; }

        public MetaphysealOneFragmentType MetaphysealOneFragmentType { get; set; }

        public MetaphysealMultifragmentaryType MetaphysealMultifragmentaryType { get; set; }

        public RatingFractureDetailsType RatingFractureDetailsType { get; set; }

        public TibiaPartiallyArticularType TibiaPartiallyArticularType { get; set; }

        [RadioReportId("kne_m_040325-l", InstanceName = nameof(FissionFractureType), IsExportable = false)]
        public FractureType FissionFractureType { get; set; }

        [RadioReportId("kne_m_040497")]
        public int? LateralImpressionFractureDepthInMm { get; set; }

        [RadioReportId("kne_m_0404102")]
        public int? MedialImpressionFractureDepthInMm { get; set; }

        [RadioReportId("kne_m_0404106")]
        public int? ObliqueImpressionFractureDepthInMm { get; set; }

        public ImpressionType ImpressionType { get; set; }

        [RadioReportId("kne_m_040332-l", InstanceName = nameof(FissionAndImpressionFractureType), IsExportable = false)]
        public FractureType FissionAndImpressionFractureType { get; set; }

        public TibiaArticularType TibiaArticularType { get; set; }

        public SimplyArticulateType SimplyArticulateType { get; set; }

        [RadioReportId("kne_m_0403105-l", InstanceName = nameof(MultifragmentaryFractureType), IsExportable = false)]
        public FractureType MultifragmentaryFractureType { get; set; }

        #endregion


        #region Fibula

        public FibulaFractureDetailsType FibulaFractureDetailsType { get; set; }

        #endregion


        #region Patella

        [RadioReportId("kne_m_040337", InstanceName = nameof(BonesFindingType.FracturePatella))]
        public bool IsAvulsionFracture { get; set; }

        public PatellaFractureBType PatellaFractureBType { get; set; }

        public PatellaFractureCType PatellaFractureCType { get; set; }

        [RadioReportId("kne_m_040419-l", InstanceName = nameof(PatellaFractureLateralDetailsType), IsExportable = false)]
        public PatellaFractureDetailsType PatellaFractureLateralDetailsType { get; set; }

        [RadioReportId("kne_m_040422-l", InstanceName = nameof(PatellaFractureMedialDetailsType), IsExportable = false)]
        public PatellaFractureDetailsType PatellaFractureMedialDetailsType { get; set; }

        public HorizontalFractureType HorizontalFractureType { get; set; }


        #endregion


        #region BoneMarrowEdema

        public DistributionType DistributionType { get; set; }

        [RadioReportId("kne_m_0403114", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public bool IsThickenedAndEdematizedSynovial { get; set; }

        [RadioReportId("kne_m_040345", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public bool IsSubchondralFracture { get; set; }

        [RadioReportId("kne_m_040347", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public bool IsTransientOsteoporosis { get; set; }

        [RadioReportId("kne_m_0403113", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public bool IsSoftTissueEdema { get; set; }

        #endregion


        #region Osteomyelitis

        [RadioReportId("kne_m_040352", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsAbscess { get; set; }

        [RadioReportId("kne_m_040354", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public int? AbscessDiameter { get; set; }

        [RadioReportId("kne_m_040356", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsAbscessMoreThanOneLesion { get; set; }

        [RadioReportId("kne_m_040357", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsAbscessPeripheralCMEnhancement { get; set; }

        [RadioReportId("kne_m_040358", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsOsteomyelitisBoneMarrowEdema { get; set; }

        [RadioReportId("kne_m_040359", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsOsteolysis { get; set; }

        [RadioReportId("kne_m_040360", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsSequestrum { get; set; }

        [RadioReportId("kne_m_040362", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public int? SequestrumDiameter { get; set; }

        [RadioReportId("kne_m_040364", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsSequestrumMoreThanOneLesion { get; set; }

        [RadioReportId("kne_m_040365", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsSequestrumNoCMEnhancement { get; set; }

        [RadioReportId("kne_m_040456", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsCorticalisDestruction { get; set; }

        [RadioReportId("kne_m_040454", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsCorticalisThinning { get; set; }

        [RadioReportId("kne_m_040458", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsPeriostealThickening { get; set; }

        [RadioReportId("kne_m_040459", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsSubperiostealAbscess { get; set; }

        [RadioReportId("kne_m_040461", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public int? SubperiostealAbscessDiameter { get; set; }

        [RadioReportId("kne_m_040463", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsPeriostrupture { get; set; }

        [RadioReportId("kne_m_040464", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsOsteomyelitisSoftTissueEdema { get; set; }

        [RadioReportId("kne_m_040465", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsPeriostealBoneApposition { get; set; }

        public BonesStageType StageType { get; set; }

        public DifferentialDiagnosisType DifferentialDiagnosisType { get; set; }

        [RadioReportId("kne_m_040513", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsDiagnosisSubordinated { get; set; }

        #endregion


        #region StandardVariant

        [RadioReportId("kne_m_040232", InstanceName = nameof(BonesFindingType.StandardVariant))]
        public bool IsCorticalDesmoidMetaphyseal { get; set; }

        [RadioReportId("kne_m_040233", InstanceName = nameof(BonesFindingType.StandardVariant))]
        public bool IsCorticalDesmoidLessThan30MM { get; set; }

        [RadioReportId("kne_m_040234", InstanceName = nameof(BonesFindingType.StandardVariant))]
        public bool IsCorticalDesmoidRimSclerosis { get; set; }

        [RadioReportId("kne_m_040235", InstanceName = nameof(BonesFindingType.StandardVariant))]
        public bool IsCorticalDesmoidLobbied { get; set; }

        [RadioReportId("kne_m_040236", InstanceName = nameof(BonesFindingType.StandardVariant))]
        public bool IsCorticalDesmoidT1wIsointens { get; set; }

        [RadioReportId("kne_m_040237", InstanceName = nameof(BonesFindingType.StandardVariant))]
        public bool IsCorticalDesmoidHeterogeneous { get; set; }

        #endregion


        #region EpiphysealJoint

        public BonesEpiphysealJointType EpiphysealJointType { get; set; }

        public BonesEpiphysealJointDetailsType BonesEpiphysealJointDetailsType { get; set; }

        public AitkenClassificationType AitkenClassificationType { get; set; }

        [RadioReportId("kne_m_040466", InstanceName = nameof(BonesFindingType.EpiphysealJointFracture))]
        public bool IsBonyBridging { get; set; }

        [RadioReportId("kne_m_040468", InstanceName = nameof(BonesFindingType.EpiphysealJointFracture))]
        public int? BoneDiameterInPercent { get; set; }

        [RadioReportId("kne_m_040515", InstanceName = nameof(BonesFindingType.EpiphysealJointFracture))]
        public bool IsEpiphysisJointExtension { get; set; }

        [RadioReportId("kne_m_040516", InstanceName = nameof(BonesFindingType.EpiphysealJointFracture))]
        public bool IsIrregularityEpiphysisJoint { get; set; }

        [RadioReportId("kne_m_040517", InstanceName = nameof(BonesFindingType.EpiphysealJointFracture))]
        public bool IsBMEInAdjacentMetaphysis { get; set; }

        #endregion


        #region BonesTumor

        public DescriptionType DescriptionType { get; set; }

        [RadioReportId("kne_m_0404112", InstanceName = nameof(BonesFindingType.BonesTumor))]
        public int? ExpansionAxialMaxInMm { get; set; }

        [RadioReportId("kne_m_0404114", InstanceName = nameof(BonesFindingType.BonesTumor))]
        public int? Expansion2ndPlaneAxialInMm { get; set; }

        [RadioReportId("kne_m_0404116", InstanceName = nameof(BonesFindingType.BonesTumor))]
        public int? ExpansionCraniocaudalInMm { get; set; }

        [RadioReportId("kne_m_040474")]
        public bool IsContrastInSepta { get; set; }
        
        [RadioReportId("kne_m_040526", InstanceName = nameof(BonesFindingType.BonesTumor))]
        public bool IsNidusT2wHyperintensity { get; set; }

        [RadioReportId("kne_m_040527", InstanceName = nameof(BonesFindingType.BonesTumor))]
        public bool IsCapT2wHyperintensity { get; set; }

        [RadioReportId("kne_m_0403118", InstanceName = nameof(BonesFindingType.BonesTumor))]
        public bool IsInfiltrationBoundary { get; set; }

        [RadioReportId("kne_m_0403119", InstanceName = nameof(BonesFindingType.BonesTumor))]
        public bool IsGrowthPatternPathologicalFracture { get; set; }

        [RadioReportId("kne_m_0403120", InstanceName = nameof(BonesFindingType.BonesTumor))]
        public bool IsPerifocalSclerosis { get; set; }

        [RadioReportId("kne_m_0403121", InstanceName = nameof(BonesFindingType.BonesTumor))]
        public bool IsSurroundingInflammatoryReaction { get; set; }

        [RadioReportId("kne_m_040489", InstanceName = nameof(BonesFindingType.BonesTumor))]
        public bool IsWithinThePrimarilyAffectedBone { get; set; }

        [RadioReportId("kne_m_040490", InstanceName = nameof(BonesFindingType.BonesTumor))]
        public bool IsStagingPathologicalFracture { get; set; }

        public BonesClassificationType ClassificationType { get; set; }

        public LocalSpreadType LocalSpreadType { get; set; }

        [RadioReportId("kne_m_0404124", InstanceName = nameof(BonesFindingType.BonesTumor))]
        public bool IsHistologicallySecured { get; set; }

        public HistologicallySecuredType HistologicallySecuredType { get; set; }

        [RadioReportId("kne_m_040531", InstanceName = nameof(BonesFindingType.BonesTumor))]
        public BonesDiagnosisType DifferentialDiagnosis1 { get; set; }

        [RadioReportId("kne_m_040533", InstanceName = nameof(BonesFindingType.BonesTumor))]
        public BonesDiagnosisType DifferentialDiagnosis2 { get; set; }

        [RadioReportId("kne_m_040534", InstanceName = nameof(BonesFindingType.BonesTumor))]
        public bool IsDifferentialDiagnosisSubordinate { get; set; }

        [RadioReportId("kne_m_040536", InstanceName = nameof(BonesFindingType.BonesTumor))]
        public BonesDiagnosisType DifferentialDiagnosis3 { get; set; }

        #endregion

        public bool CheckCondition(string customConditionId) =>
            customConditionId switch
            {
                nameof(FemurPartiallyArticularType.SimpleFractureLateral) => FemurPartiallyArticularType == FemurPartiallyArticularType.SimpleFractureLateral,
                nameof(FemurPartiallyArticularType.SimpleMedialFracture) => FemurPartiallyArticularType == FemurPartiallyArticularType.SimpleMedialFracture,
                nameof(AvulsionFractureType.CapsuleTear) => AvulsionFractureType == AvulsionFractureType.CapsuleTear,
                nameof(FractureType.Lateral) => FissionAndImpressionFractureType == FractureType.Lateral || FissionFractureType == FractureType.Lateral,
                nameof(FractureType.Medial) => FissionAndImpressionFractureType == FractureType.Medial || FissionFractureType == FractureType.Medial,
                nameof(FractureType.ObliqueFractureUpToDiaphyseal) => FissionAndImpressionFractureType == FractureType.ObliqueFractureUpToDiaphyseal || FissionFractureType == FractureType.ObliqueFractureUpToDiaphyseal,
                nameof(TibiaExtraarticularType.MetaphysealMultifragmentary) => TibiaExtraarticularType == TibiaExtraarticularType.MetaphysealMultifragmentary,
                nameof(TibiaArticularType.SingleArticularMultifragmentaryMetaphyseal) => TibiaArticularType == TibiaArticularType.SingleArticularMultifragmentaryMetaphyseal,
                nameof(MetaphysealMultifragmentaryType.IntactWedge) + nameof(MetaphysealMultifragmentaryType.FragmentedWedge) =>
                    MetaphysealMultifragmentaryType == MetaphysealMultifragmentaryType.IntactWedge || MetaphysealMultifragmentaryType == MetaphysealMultifragmentaryType.FragmentedWedge,
                _ => false
            };
    }
}