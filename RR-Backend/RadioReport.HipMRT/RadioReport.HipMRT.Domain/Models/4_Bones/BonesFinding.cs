using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.HipMRT.Bones.Domain.Enums;
using RadioReport.HipMRT.Domain.Enums;
using System;
using System.Collections.Generic;
using SideType = RadioReport.HipMRT.Bones.Domain.Enums.SideType;

namespace RadioReport.HipMRT.Domain.Models.Bones
{
    public class BonesFinding : BonesFindingBase, IImageFileContainer, IRadioReportIdConditionEvaluator
    {
        public override string InstanceName => FindingType.ToString();

        #region Common
        [RadioReportId("hip_m_040205", InstanceName = nameof(BonesFindingType.FractureFemoralShaftAndTrochanter))]
        [RadioReportId("hip_m_040205", InstanceName = nameof(BonesFindingType.FractureFemoralNeck))]
        [RadioReportId("hip_m_040205", InstanceName = nameof(BonesFindingType.FractureFemoralHead))]
        [RadioReportId("hip_m_040205", InstanceName = nameof(BonesFindingType.FractureAcetabulum))]
        [RadioReportId("hip_m_040205", InstanceName = nameof(BonesFindingType.StressFracture))]
        [RadioReportId("hip_m_040205", InstanceName = nameof(BonesFindingType.SubchondralInsufficiencyFracture))]
        [RadioReportId("hip_m_040205", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        [RadioReportId("hip_m_040206", InstanceName = nameof(BonesFindingType.FracturePelvis))]
        [RadioReportId("hip_m_040206", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        [RadioReportId("hip_m_040206", InstanceName = nameof(BonesFindingType.TransientBoneMarrowEdema))]
        [RadioReportId("hip_m_040206", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public HipSpecificLocalizations HipSpecificLocalizations { get; set; }

        public FractureSpecificationType FractureSpecificationType { get; set; }

        [RadioReportId("hip_m_040442", InstanceName = nameof(BonesFindingType.SubchondralInsufficiencyFracture))]
        [RadioReportId("hip_m_040594", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        [RadioReportId("hip_m_040597", InstanceName = nameof(BonesFindingType.AvascularFemoralHeadNecrosis))]
        [RadioReportId("hip_m_0405122", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        [RadioReportId("hip_m_040280", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public bool IsSecondary { get; set; }

        [RadioReportId("hip_m_040372", InstanceName = nameof(BonesFindingType.TransientBoneMarrowEdema))]
        [RadioReportId("hip_m_0404121", InstanceName = nameof(BonesFindingType.AvascularFemoralHeadNecrosis))]
        [RadioReportId("hip_m_040387", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
        public bool IsArticularEffusion { get; set; }

        [RadioReportId("hip_m_040359", InstanceName = nameof(BonesFindingType.SubchondralInsufficiencyFracture))]
        [RadioReportId("hip_m_040457", InstanceName = nameof(BonesFindingType.AvascularFemoralHeadNecrosis))]
        public bool IsOsteochondralFragment { get; set; }
        #endregion

        #region Alignment
        public AlignmentType AlignmentType { get; set; }

        [RadioReportId("hip_m_040302", InstanceName = nameof(BonesFindingType.Alignment))]
        public bool IsRight { get; set; }

        [RadioReportId("hip_m_040303", InstanceName = nameof(BonesFindingType.Alignment))]
        public bool IsLeft { get; set; }

        public PositioningType PositioningType { get; set; }

        [RadioReportId("hip_m_040402", InstanceName = nameof(BonesFindingType.Alignment))]
        public bool IsDysplasia { get; set; }

        [RadioReportId("hip_m_040404", InstanceName = nameof(BonesFindingType.Alignment))]
        public bool IsFlattened { get; set; }

        public AcetabulumType AcetabulumType { get; set; }

        [RadioReportId("hip_m_040502", InstanceName = nameof(BonesFindingType.Alignment))]
        public bool IsEpiphysiolysis { get; set; }

        [RadioReportId("hip_m_040503", InstanceName = nameof(BonesFindingType.Alignment))]
        public bool IsEpiphysealBoneMarrowEdema { get; set; }

        [RadioReportId("hip_m_040504", InstanceName = nameof(BonesFindingType.Alignment))]
        public bool IsEnlargedEpiphysealPlate { get; set; }

        [RadioReportId("hip_m_040505", InstanceName = nameof(BonesFindingType.Alignment))]
        public bool IsIrregularEpiphysealPlate { get; set; }

        [RadioReportId("hip_m_040506", InstanceName = nameof(BonesFindingType.Alignment))]
        public bool IsCrushedPhysis { get; set; }

        [RadioReportId("hip_m_040507", InstanceName = nameof(BonesFindingType.Alignment))]
        public bool IsDislocatedFemoralHead { get; set; }
        #endregion

        #region Fracture Femoral Shaft And Trochanter
        public FractureAO31A32ClassificationType FractureClassificationType { get; set; }

        public Fracture32Type Fracture32Type { get; set; }

        public Fracture32AType Fracture32AType { get; set; }

        public Fracture32BType Fracture32BType { get; set; }

        public Fracture32CType Fracture32CType { get; set; }

        public Fracture31AType Fracture31AType { get; set; }

        public Fracture31A1Type Fracture31A1Type { get; set; }

        public TrochantericAvulsionTearType TrochantericAvulsionTearType { get; set; }

        public Fracture31A2Type Fracture31A2Type { get; set; }

        public Fracture31A3Type Fracture31A3Type { get; set; }
        #endregion

        #region Fracture Femoral Neck
        public FractureAO31BClassificationType FractureAO31BClassificationType { get; set; }

        public Fracture31BType Fracture31BType { get; set; }

        public Fracture31B1Type Fracture31B1Type { get; set; }

        public Fracture31B2Type Fracture31B2Type { get; set; }

        public ShearFractureType ShearFractureType { get; set; }
        #endregion

        #region Fracture Femoral Head
        public FractureAO31CClassificationType FractureAO31CClassificationType { get; set; }

        public Fracture31CType Fracture31CType { get; set; }

        public Fracture31C1Type Fracture31C1Type { get; set; }

        public Fracture31C2Type Fracture31C2Type { get; set; }
        #endregion

        #region Fracture Acetabulum
        public FractureAO62ClassificationType FractureAO62ClassificationType { get; set; }

        public Fracture62AType Fracture62AType { get; set; }

        public Fracture62A1Type Fracture62A1Type { get; set; }

        public Fracture62A2Type Fracture62A2Type { get; set; }

        public Fracture62A3Type Fracture62A3Type { get; set; }

        public Fracture62BType Fracture62BType { get; set; }

        public Fracture62B1Type Fracture62B1Type { get; set; }

        public Fracture62B2Type Fracture62B2Type { get; set; }

        public Fracture62B3Type Fracture62B3Type { get; set; }

        public Fracture62CType Fracture62CType { get; set; }
        #endregion

        #region Fracture Pelvis
        public FractureAO61ClassificationType FractureAO61ClassificationType { get; set; }

        public Fracture61AType Fracture61AType { get; set; }

        public Fracture61A1Type Fracture61A1Type { get; set; }

        public Fracture61A2Type Fracture61A2Type { get; set; }

        public Fracture61BType Fracture61BType { get; set; }

        public Fracture61B1Type Fracture61B1Type { get; set; }

        public Fracture61B2Type Fracture61B2Type { get; set; }

        [RadioReportId("hip_m_040570", InstanceName = nameof(BonesFindingType.FracturePelvis), CustomConditionName = nameof(Fracture61BType.RotationalInstabilityUnilateral))]
        [RadioReportId("hip_m_040574", InstanceName = nameof(BonesFindingType.FracturePelvis), CustomConditionName = nameof(Fracture61BType.BilateralInjuryOfPosteriorArch))]
        [RadioReportId("hip_m_040578", InstanceName = nameof(BonesFindingType.FracturePelvis), CustomConditionName = nameof(Fracture61CType.UnilateralPosteriorInjury))]
        public bool IsSymphysisDisruption { get; set; }

        public Fracture61B3Type Fracture61B3Type { get; set; }

        public Fracture61CType Fracture61CType { get; set; }

        public Fracture61C1Type Fracture61C1Type { get; set; }

        public Fracture61C2Type Fracture61C2Type { get; set; }

        [RadioReportId("hip_m_040583", InstanceName = nameof(BonesFindingType.FracturePelvis))]
        public FurtherImageFeaturesType FurtherImageFeaturesType { get; set; }

        public Fracture61C3Type Fracture61C3Type { get; set; }

        public SacralFractureType SacralFractureType { get; set; }
        #endregion

        #region Stress Fracture
        public PartType PartType { get; set; }

        public ExpansionType ExpansionType { get; set; }

        [RadioReportId("hip_m_040345", InstanceName = nameof(BonesFindingType.StressFracture))]
        public bool IsPeriostealEdema { get; set; }

        [RadioReportId("hip_m_040346", InstanceName = nameof(BonesFindingType.StressFracture))]
        public bool IsT1wHypointenseLinePerpendicular { get; set; }

        public ExpansionCoronalType ExpansionCoronalType { get; set; }

        [RadioReportId("hip_m_040352", InstanceName = nameof(BonesFindingType.StressFracture))]
        public byte? ExpansionInMm { get; set; }

        public ClassificationRohenaQuinquillaType ClassificationRohenaQuinquillaType { 
            get 
            {
                var IsLocalizerChecked = 
                    HipSpecificLocalizations.HasFlag(HipSpecificLocalizations.LeftFemoralNeck) | 
                    HipSpecificLocalizations.HasFlag(HipSpecificLocalizations.RightFemoralNeck);

                if (IsLocalizerChecked && ExpansionCoronalType == ExpansionCoronalType.EqualOver50)
                {
                    return ClassificationRohenaQuinquillaType.Grade4;
                }

                if (IsLocalizerChecked && ExpansionCoronalType == ExpansionCoronalType.Below50)
                {
                    return ClassificationRohenaQuinquillaType.Grade3;
                }

                if(IsLocalizerChecked && ExpansionType == ExpansionType.Over6Mm)
                {
                    return ClassificationRohenaQuinquillaType.Grade2;
                }

                if(IsLocalizerChecked && ExpansionType == ExpansionType.BelowEqual6Mm)
                {
                    return ClassificationRohenaQuinquillaType.Grade1;
                }

                return ClassificationRohenaQuinquillaType.None;
            } 
        }
        #endregion

        #region Subchondral Insufficiency Fracture
        [RadioReportId("hip_m_040355", InstanceName = nameof(BonesFindingType.SubchondralInsufficiencyFracture))]
        public bool IsLinearSignalAlterationParallel { get; set; }

        [RadioReportId("hip_m_040356", InstanceName = nameof(BonesFindingType.SubchondralInsufficiencyFracture))]
        public bool IsT1wLowSignalArea { get; set; }

        [RadioReportId("hip_m_040357", InstanceName = nameof(BonesFindingType.SubchondralInsufficiencyFracture))]
        public bool IsArticularCorticalImpressionFracture { get; set; }

        [RadioReportId("hip_m_040358", InstanceName = nameof(BonesFindingType.SubchondralInsufficiencyFracture))]
        public bool IsSubchondralCleftWithFluid { get; set; }

        [RadioReportId("hip_m_040362", InstanceName = nameof(BonesFindingType.SubchondralInsufficiencyFracture))]
        public int? MaxDiameterInMm { get; set; }

        [RadioReportId("hip_m_040363", InstanceName = nameof(BonesFindingType.SubchondralInsufficiencyFracture))]
        public bool IsDislocated { get; set; }

        [RadioReportId("hip_m_040364", InstanceName = nameof(BonesFindingType.SubchondralInsufficiencyFracture))]
        public bool IsPerifocalContrastEnhancement { get; set; }

        [RadioReportId("hip_m_040441", InstanceName = nameof(BonesFindingType.SubchondralInsufficiencyFracture))]
        public bool IsTransientBoneMarrowEdema { get; set; }
        #endregion

        #region Bone Marrow Edema
        public DistributionType DistributionType { get; set; }

        [RadioReportId("hip_m_040445", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public bool IsThickenedSynoviaWithEdema { get; set; }

        [RadioReportId("hip_m_040446", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public bool IsSubchondralFracture { get; set; }

        [RadioReportId("hip_m_040593", InstanceName = nameof(BonesFindingType.BoneMarrowEdema))]
        public BoneMarrowDifferentialDiagnosisType BoneMarrowDifferentialDiagnosisType { get; set; }
        #endregion

        #region Transient Bone Marrow Edema
        [RadioReportId("hip_m_040374", InstanceName = nameof(BonesFindingType.TransientBoneMarrowEdema))]
        public bool IsSubchondralLesion { get; set; }

        public CoxarthrosisDifferentialDiagnosisType CoxarthrosisDifferentialDiagnosisType { get; set; }

        public StimulatedBoneMarrowType StimulatedBoneMarrowType { get; set; }
        #endregion

        #region Avascular Femoral Head Necrosis
        public SideType SideType { get; set; }

        [RadioReportId("hip_m_040214", InstanceName = nameof(BonesFindingType.AvascularFemoralHeadNecrosis))]
        public bool IsSubchondralLowSignalIntensity { get; set; }

        [RadioReportId("hip_m_040216", InstanceName = nameof(BonesFindingType.AvascularFemoralHeadNecrosis))]
        public bool IsDoubleLineSignT2w { get; set; }

        [RadioReportId("hip_m_040217", InstanceName = nameof(BonesFindingType.AvascularFemoralHeadNecrosis))]
        public bool IsMirroringArticularSurface { get; set; }

        [RadioReportId("hip_m_040218", InstanceName = nameof(BonesFindingType.AvascularFemoralHeadNecrosis))]
        public bool IsAnterosuperior { get; set; }

        [RadioReportId("hip_m_040219", InstanceName = nameof(BonesFindingType.AvascularFemoralHeadNecrosis))]
        public bool IsAdjacentBoneMarrowEdema { get; set; }

        [RadioReportId("hip_m_040378", InstanceName = nameof(BonesFindingType.AvascularFemoralHeadNecrosis))]
        public int? CoronalMeasurementInDegrees { get; set; }

        [RadioReportId("hip_m_040381", InstanceName = nameof(BonesFindingType.AvascularFemoralHeadNecrosis))]
        public int? SagittalMeasurementInDegrees { get; set; }

        public CorticalBoneType CorticalBoneType { get; set; }

        [RadioReportId("hip_m_040456", InstanceName = nameof(BonesFindingType.AvascularFemoralHeadNecrosis))]
        public bool IsCoxarthrosis { get; set; }

        public ARCOClassificationType ARCOClassificationType { get; set; }

        [RadioReportId("hip_m_040596", InstanceName = nameof(BonesFindingType.AvascularFemoralHeadNecrosis))]
        public AvescularDifferentialDiagnosisType AvescularDifferentialDiagnosisType { get; set; }
        #endregion

        #region Coxarthrosis

        [RadioReportId("hip_m_040224", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
        public bool IsFemur { get; set; }

        [RadioReportId("hip_m_040225", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
        public bool IsAcetabulum { get; set; }

        [RadioReportId("hip_m_040227", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
        public bool IsChondropathy { get; set; }

        public DegreeType DegreeType { get; set; }

        public CartilageDistributionType CartilageDistributionType { get; set; }

        [RadioReportId("hip_m_040386", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
        public bool IsJointSpaceNarrowing { get; set; }

        [RadioReportId("hip_m_040389", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
        public bool IsSubchondralEdema { get; set; }

        [RadioReportId("hip_m_040390", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
        public bool IsOsteophytes { get; set; }

        [RadioReportId("hip_m_040391", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
        public bool IsSubchondralCystsgeodes { get; set; }

        [RadioReportId("hip_m_040392", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
        public bool IsGanglion { get; set; }

        [RadioReportId("hip_m_040396", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
        public bool IsSubchondralSclerosis { get; set; }

        [RadioReportId("hip_m_040397", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
        public bool IsSynovialCyst { get; set; }

        [RadioReportId("hip_m_0403100", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
        public int? MaxSynovialCystDiameterInMm { get; set; }

        [RadioReportId("hip_m_040395", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
        public int? MaxGanglionDiameterInMm { get; set; }

        [RadioReportId("hip_m_040464", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
        public bool IsSynovitis { get; set; }

        [RadioReportId("hip_m_040465", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
        public bool IsParalabralCysts { get; set; }

        [RadioReportId("hip_m_040466", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
        public bool IsIntraarticularLoosebody { get; set; }

        [RadioReportId("hip_m_040467", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
        public bool IsQuantityOverOne { get; set; }

        [RadioReportId("hip_m_040470", InstanceName = nameof(BonesFindingType.Coxarthrosis))]
        public int? MaxLoosebodyDiameterInMm { get; set; }

        public GeneralType GeneralType { get; set; }

        public VallotonKellgrenMRadaptedType VallotonKellgrenMRadaptedType { get; set; }
        #endregion

        #region Osteomyelitis
        public StageType StageType { get; set; }

        [RadioReportId("hip_m_040238", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsThinningscalopping { get; set; }

        [RadioReportId("hip_m_040239", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsDestruction { get; set; }

        [RadioReportId("hip_m_0403103", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsIntraosseousAbscessBrodieAbscess { get; set; }

        [RadioReportId("hip_m_0403106", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public int? AbscessSizeInMm { get; set; }

        [RadioReportId("hip_m_0403109", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public int? AbscessSecondSizeInMm { get; set; }

        [RadioReportId("hip_m_0403112", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public int? AbscessThirdSizeInMm { get; set; }

        [RadioReportId("hip_m_0403114", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsPenumbraSign { get; set; }

        [RadioReportId("hip_m_0403115", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsPeripheralContrastEnhancement { get; set; }

        [RadioReportId("hip_m_0403116")]
        public bool IsAbscessLesionSame { get; set; }

        [RadioReportId("hip_m_040471", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsSequester { get; set; }

        [RadioReportId("hip_m_040474", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public int? SequesterSizeInMm { get; set; }

        [RadioReportId("hip_m_040477", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public int? SequesterSecondSizeInMm { get; set; }

        [RadioReportId("hip_m_040480", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public int? SequesterThirdSizeInMm { get; set; }

        [RadioReportId("hip_m_040482", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsNoContrastEnhancement { get; set; }

        [RadioReportId("hip_m_040483", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsSinusTractFistula { get; set; }

        [RadioReportId("hip_m_040484")]
        public bool IsSpongiosaLesionSame { get; set; }

        [RadioReportId("hip_m_0405109", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsOsteolysis { get; set; }

        [RadioReportId("hip_m_0405110", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsCloaca { get; set; }

        [RadioReportId("hip_m_0405111", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsBoneApposition { get; set; }

        [RadioReportId("hip_m_0405112", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsPeriostealThickening { get; set; }

        [RadioReportId("hip_m_0405113", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsPeriostealRupture { get; set; }

        [RadioReportId("hip_m_0405114", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public bool IsSubperiostealAbscess { get; set; }

        [RadioReportId("hip_m_0405117", InstanceName = nameof(BonesFindingType.Osteomyelitis))]
        public int? SubperiostealSizeInMm { get; set; }

        public OsteomyelitisDifferentialDiagnosisType OsteomyelitisDifferentialDiagnosisType { get; set; }
        #endregion

        #region Osteitis Pubis
        [RadioReportId("hip_m_040241", InstanceName = nameof(BonesFindingType.OsteitisPubis))]
        public bool IsRightBoneMarrowEdemaOsPubis { get; set; }

        [RadioReportId("hip_m_040242", InstanceName = nameof(BonesFindingType.OsteitisPubis))]
        public bool IsRightMuscleEdemaOfAdductor { get; set; }

        [RadioReportId("hip_m_040243", InstanceName = nameof(BonesFindingType.OsteitisPubis))]
        public bool IsRightJointIrregularity { get; set; }

        [RadioReportId("hip_m_040244", InstanceName = nameof(BonesFindingType.OsteitisPubis))]
        public bool IsRightSecondaryCleftSign { get; set; }

        [RadioReportId("hip_m_040245", InstanceName = nameof(BonesFindingType.OsteitisPubis))]
        public bool IsRightEnthesiopathy { get; set; }

        [RadioReportId("hip_m_0403118", InstanceName = nameof(BonesFindingType.OsteitisPubis))]
        public bool IsLeftPubicBoneMarrowEdema { get; set; }

        [RadioReportId("hip_m_0403119", InstanceName = nameof(BonesFindingType.OsteitisPubis))]
        public bool IsLeftMuscleEdemaOfAdductor { get; set; }

        [RadioReportId("hip_m_0403120", InstanceName = nameof(BonesFindingType.OsteitisPubis))]
        public bool IsLeftJointIrregularity { get; set; }

        [RadioReportId("hip_m_0403121", InstanceName = nameof(BonesFindingType.OsteitisPubis))]
        public bool IsLeftSecondaryCleftSign { get; set; }

        [RadioReportId("hip_m_0403122", InstanceName = nameof(BonesFindingType.OsteitisPubis))]
        public bool IsLeftEnthesiopathy { get; set; }
        #endregion

        #region MassOrOsteolysis

        public DescriptionType DescriptionType { get; set; }

        #region IMAGEFILE
        [RadioReportId("uni_04_003", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public string SerialNumber { get; set; }

        [RadioReportId("uni_04_005", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public string PictureNumber { get; set; }

        public Guid? ImageFileId { get; set; }

        [RadioReportId("uni_04_007l", InstanceName = "HipMRT.Bones.BonesFinding", IsExportable = false)]
        public ImageFile UploadedImageFile { get; set; }

        public List<Guid> ImageIds => ImageFileId.HasValue ? new List<Guid> { ImageFileId.Value } : new List<Guid>();

        public void DropImageFile(Guid? imageFileId = null)
        {
            ImageFileId = null;
            UploadedImageFile = null;
        }

        public Guid? GetImageFileGuid(string fileType = null) => ImageFileId;

        public void SetImageFile(ImageFile imageFile, string fileType = null)
        {
            ImageFileId = imageFile?.Id;
            UploadedImageFile = imageFile;
        }
        #endregion

        #region tab1
        [RadioReportId("hip_m_040249", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public bool IsHistologyKnown { get; set; }

        public HistologyKnownType HistologyKnownType { get; set; }

        [RadioReportId("hip_m_040489", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public int? ExpansionSizeInMm { get; set; }

        [RadioReportId("hip_m_040492", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public int? ExpansionSecondSizeInMm { get; set; }

        [RadioReportId("hip_m_040495", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public int? ExpansionThirdSizeInMm { get; set; }
        #endregion

        #region tab3
        [RadioReportId("hip_m_0403140", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public int? MaxThicknessInMm { get; set; }

        [RadioReportId("hip_m_0404116", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public bool IsPathologicalFracture { get; set; }

        [RadioReportId("hip_m_0404117", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public bool IsPathologicalFractureSuspected { get; set; }

        public LocalExpansionType LocalExpansionType { get; set; }

        [RadioReportId("hip_m_0404114", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public bool IsInfiltrationOfAdjacentBone { get; set; }

        [RadioReportId("hip_m_0405134", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public bool IsPerifocalSclerosis { get; set; }
        #endregion

        #region tab4
        [RadioReportId("hip_m_040276", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public MassOsteolysisDifferentialDiagnosisType DifferentialDiagnosis1 { get; set; }

        [RadioReportId("hip_m_040277", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public bool IsSuspected { get; set; }

        [RadioReportId("hip_m_040279", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public MassOsteolysisDifferentialDiagnosisType DifferentialDiagnosis2 { get; set; }

        [RadioReportId("hip_m_040282", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public MassOsteolysisDifferentialDiagnosisType DifferentialDiagnosis3 { get; set; }

        [RadioReportId("hip_m_0403144", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public bool IsOverOneLesionSameEntity { get; set; }

        [RadioReportId("hip_m_0403145", InstanceName = nameof(BonesFindingType.MassOrOsteolysis))]
        public bool IsInThePrimarilyAffected { get; set; }
        #endregion

        #endregion
        public bool CheckCondition(string customConditionId) =>
            customConditionId switch
            {
                nameof(Fracture61BType.RotationalInstabilityUnilateral) => Fracture61BType == Fracture61BType.RotationalInstabilityUnilateral,
                nameof(Fracture61BType.BilateralInjuryOfPosteriorArch) => Fracture61BType == Fracture61BType.BilateralInjuryOfPosteriorArch,
                nameof(Fracture61CType.UnilateralPosteriorInjury) => Fracture61CType == Fracture61CType.UnilateralPosteriorInjury,
                _ => false
            };
    }
}
