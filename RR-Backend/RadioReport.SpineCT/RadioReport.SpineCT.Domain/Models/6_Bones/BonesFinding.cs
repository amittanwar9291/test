using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.SpineCT.Domain.Constants;
using RadioReport.SpineCT.Domain.Enums;
using RadioReport.SpineCT.Domain.Enums.Bones;
using RadioReport.SpineCT.Domain.Enums.Bones.Bones;

namespace RadioReport.SpineCT.Domain.Models
{

    public class BonesFinding : BonesFindingBase, IRadioReportIdConditionEvaluator
    {
        #region common

        [RadioReportId("spi_c_060203")]
        public SpineLocations SpineLocation { get; set; }

        [RadioReportId("spi_c_0602232", InstanceName = nameof(BonesFindingType.Fracture))]
        [RadioReportId("spi_c_0605257", InstanceName = nameof(BonesFindingType.MassSpine))]
        public bool IsTrailingEdgeParticipation { get; set; }
        
        [RadioReportId("spi_c_0604254", InstanceName = nameof(BonesFindingType.PathologyOfTheVertebralArch))]
        [RadioReportId("spi_c_0605256", InstanceName = nameof(BonesFindingType.MassSpine))]
        public bool IsSuspicionOf { get; set; }
        
        #endregion

        #region Fracture

            [RadioReportId("spi_c_0602234", InstanceName = nameof(BonesFindingType.Fracture))]
            public int? MinVertebralBodyHeightInMm { get; set; }

            #region fracture_c0
            
            [RadioReportId("spi_c_0603241", InstanceName = nameof(BonesFindingType.Fracture))]
            public bool IsFractureOccipitalCondyleSideRight { get; set; }
            
            [RadioReportId("spi_c_0603241-1", InstanceName = nameof(FractureStabilityRight), IsExportable = false)]
            public C0Stability FractureStabilityRight { get; set; } 
        
            [RadioReportId("spi_c_060303-1", InstanceName = nameof(RotationOrTranslationRight), IsExportable = false)]
            public RotationOrTranslation RotationOrTranslationRight { get; set; }
            
            [RadioReportId("spi_c_0603244", InstanceName = nameof(BonesFindingType.Fracture))]
            public int? RotationRightInDeg { get; set; }
            
            [RadioReportId("spi_c_0603247", InstanceName = nameof(BonesFindingType.Fracture))]
            public int? TranslationRightInMm { get; set; }
            
            [RadioReportId("spi_c_060305-1", InstanceName = nameof(C0NoFutherDefinedTypeRight), IsExportable = false)]
            public NoFutherDefinedType C0NoFutherDefinedTypeRight { get; set; }
            
            [RadioReportId("spi_c_0604235", InstanceName = nameof(BonesFindingType.Fracture))]
            public bool IsFractureOccipitalCondyleSideLeft { get; set; }
            
            [RadioReportId("spi_c_0604235-1", InstanceName = nameof(FractureStabilityLeft), IsExportable = false)]
            public C0Stability FractureStabilityLeft { get; set; } 
            
            [RadioReportId("spi_c_0604238-1", InstanceName = nameof(RotationOrTranslationLeft), IsExportable = false)]
            public RotationOrTranslation RotationOrTranslationLeft { get; set; }
            
            [RadioReportId("spi_c_0604242", InstanceName = nameof(BonesFindingType.Fracture))]
            public int? RotationLeftInDeg { get; set; }
            
            [RadioReportId("spi_c_0604245", InstanceName = nameof(BonesFindingType.Fracture))]
            public int? TranslationLeftInMm { get; set; }
            
            [RadioReportId("spi_c_0604240-1", InstanceName = nameof(C0NoFutherDefinedTypeLeft), IsExportable = false)]
            public NoFutherDefinedType C0NoFutherDefinedTypeLeft { get; set; }
            
            #endregion
            
            #region fracture_c1
            
            public GehweilerType GehweilerType { get; set; }

            
            [RadioReportId("spi_c_060410-type", InstanceName = nameof(SideType), IsExportable = false)]
            public Enums.Bones.SideType SideType { get; set; }
            
            [RadioReportId("spi_c_060412", InstanceName = nameof(BonesFindingType.Fracture))]
            public bool IsVertebralArteryInvolvement { get; set; }
            
            [RadioReportId("spi_c_0604201", InstanceName = nameof(BonesFindingType.Fracture))]
            public bool IsInvolvementOfRightVertebralArtery { get; set; }
            
            [RadioReportId("spi_c_0604202", InstanceName = nameof(BonesFindingType.Fracture))]
            public bool IsInvolvementOfLeftVertebralArtery { get; set; }
            
            [RadioReportId("spi_c_060313-1", InstanceName = nameof(C1NoFutherDefinedType), IsExportable = false)]
            public NoFutherDefinedType C1NoFutherDefinedType { get; set; }
            
            [RadioReportId("spi_c_0605201", InstanceName = nameof(BonesFindingType.Fracture))]
            public SpecialFractureTypesType C1SpecialFractureTypesType { get; set; }
            
            #endregion

            #region fracture_c2
            
            public C2FractureLocalizationType C2FractureLocalizationType { get; set; }
            
            [RadioReportId("spi_c_0603252", InstanceName = nameof(BonesFindingType.Fracture))]
            public SpecialFractureTypesType C2SpecialFractureTypesType { get; set; }
            
            public C2FractureDetailsType C2FractureDetailsType { get; set; }

            public BonesDensityType DensityType { get; set; }

            public AxisArcType AxisArcType { get; set; }

            [RadioReportId("spi_c_0604107-type", IsExportable = false, InstanceName = nameof(C2NoFutherDefinedType))]
            public NoFutherDefinedType C2NoFutherDefinedType { get; set; }

            public StabilityType StabilityType { get; set; }

            public C1ToC2FractureType C1ToC2FractureType { get; set; }

            [RadioReportId("spi_c_0605203", InstanceName = nameof(BonesFindingType.Fracture))]
            public int? AtlantodentalIntervalInMm { get; set; }
            
            [RadioReportId("spi_c_0605205", InstanceName = nameof(BonesFindingType.Fracture))]
            public bool IsIncreasedAtlantodentalInterval { get; set; }
            
            #endregion

            #region fracture_common
            
            public FractureType FractureType { get; set; }

            [RadioReportId("spi_c_0603202", InstanceName = nameof(BonesFindingType.Fracture))]
            public CommonSpecialFractureType CCommonSpecialFractureType { get; set; }
            
            [RadioReportId("spi_c_060320-type", InstanceName = nameof(A0ClassificationType), IsExportable = false)]
            public A0ClassificationType A0ClassificationType { get; set; }

            [RadioReportId("spi_c_060430-type", InstanceName = nameof(A0ClassificationASubtype), IsExportable = false)]
            public A0ClassificationASubtype A0ClassificationASubtype { get; set; }

            [RadioReportId("spi_c_060431-type", InstanceName = nameof(A0ClassificationBSubtype), IsExportable = false)]
            public A0ClassificationBSubtype A0ClassificationBSubtype { get; set; }

            public GenantClassificationGradeType GenantClassificationGradeType { get; set; }

            public GenantFractureType GenantFractureType { get; set; }

            [RadioReportId("spi_c_0604207", InstanceName = nameof(BonesFindingType.Fracture))]
            public bool IsAnteriorColumn { get; set; }
            
            [RadioReportId("spi_c_0604208", InstanceName = nameof(BonesFindingType.Fracture))]
            public bool IsMiddleColumn { get; set; }
            
            [RadioReportId("spi_c_0604209", InstanceName = nameof(BonesFindingType.Fracture))]
            public bool IsPosteriorColumn { get; set; }
            
            [RadioReportId("spi_c_060322-type", InstanceName = nameof(CommonNoFutherDefinedType), IsExportable = false)]
            public NoFutherDefinedType CommonNoFutherDefinedType { get; set; }

            [RadioReportId("spi_c_0605206", InstanceName = nameof(BonesFindingType.Fracture))]
            public BonesDiagnosisType BonesFractureDiagnosisType { get; set; }

            [RadioReportId("spi_c_0605207", InstanceName = nameof(BonesFindingType.Fracture))]
            public bool IsSchmorlNode { get; set; }
            
            [RadioReportId("spi_c_060525", InstanceName = nameof(BonesFindingType.Fracture))]
            public bool IsSubordinate { get; set; }
            
            #endregion

            #region os_sacrum
            
            [RadioReportId("spi_c_060325-type", InstanceName = nameof(A0OsSacrumClassificationType), IsExportable = false)]
            public A0ClassificationType A0OsSacrumClassificationType { get; set; }

            [RadioReportId("spi_c_060326-type", InstanceName = nameof(A0OsSacrumClassificationASubtype), IsExportable = false)]
            public A0ClassificationASubtype A0OsSacrumClassificationASubtype { get; set; }

            [RadioReportId("spi_c_060527-type", InstanceName = nameof(A0OsSacrumClassificationBSubtype), IsExportable = false)]
            public A0ClassificationBSubtype A0OsSacrumClassificationBSubtype { get; set; }

            [RadioReportId("spi_c_060528-type", InstanceName = nameof(A0OsSacrumClassificationCSubtype), IsExportable = false)]
            public A0ClassificationCSubtype A0OsSacrumClassificationCSubtype { get; set; }

            [RadioReportId("spi_c_060529-type", InstanceName = nameof(OsSacrumNoFutherDefinedType), IsExportable = false)]
            public NoFutherDefinedType OsSacrumNoFutherDefinedType { get; set; }
            
            public OsSacrumDenisClassificationType OsSacrumDenisClassificationType { get; set; }

            [RadioReportId("spi_c_0605270", InstanceName = nameof(BonesFindingType.Fracture))]
            public bool IsOsSacrumRight { get; set; }

            [RadioReportId("spi_c_0605271", InstanceName = nameof(BonesFindingType.Fracture))]
            public bool IsOsSacrumLeft { get; set; }
            
            [RadioReportId("spi_c_0605211", InstanceName = nameof(BonesFindingType.Fracture))]
            public OsSacrumSpecialFractureType OsSacrumSpecialFractureType { get; set; }
            
            #endregion
            
            #region Coccygis
            
            [RadioReportId("spi_c_060325-type", InstanceName = nameof(A0CoccygisClassificationType), IsExportable = false)]
            public A0ClassificationType A0CoccygisClassificationType { get; set; }
            
            [RadioReportId("spi_c_0603254", InstanceName = nameof(BonesFindingType.Fracture))]
            public bool IsWithSignificantDisplacement { get; set; }
            
            [RadioReportId("spi_c_0603255", InstanceName = nameof(BonesFindingType.Fracture))]
            public bool IsAdjacentSoftTissueInjury { get; set; }
            
            [RadioReportId("spi_c_0603258-type", InstanceName = nameof(CoccygisNoFutherDefinedType), IsExportable = false)]
            public NoFutherDefinedType CoccygisNoFutherDefinedType { get; set; }
            
            #endregion

        #endregion

        #region PosttherapeuticChange
        
        [RadioReportId("spi_c_0602201", InstanceName = nameof(BonesFindingType.PosttherapeuticChange))]
        public InterventionType InterventionType { get; set; }
        
        [RadioReportId("spi_c_0603204", InstanceName = nameof(BonesFindingType.PosttherapeuticChange))]
        public SpineLocations SpondylodesisSpineLocations { get; set; }
        
        [RadioReportId("spi_c_0603208", InstanceName = nameof(BonesFindingType.PosttherapeuticChange))]
        public SpineLocations InterventionSpineLocations { get; set; }
        
        [RadioReportId("spi_c_0603206", InstanceName = nameof(BonesFindingType.PosttherapeuticChange))]
        public bool IsSpineSideRight { get; set; }
                
        [RadioReportId("spi_c_0603207", InstanceName = nameof(BonesFindingType.PosttherapeuticChange))]
        public bool IsSpineSideLeft { get; set; }

        [RadioReportId("spi_c_0603210", InstanceName = nameof(BonesFindingType.PosttherapeuticChange))]
        public SpineLocations IntervertebralDiscReplacementSpineLocations { get; set; }
        
        [RadioReportId("spi_c_0603211", InstanceName = nameof(DetailsInterventionType), IsExportable = false)]
        public DetailsInterventionType DetailsInterventionType { get; set; }
        
        public ComplicationsType ComplicationsType { get; set; }
        
        [RadioReportId("spi_c_0605228", InstanceName = nameof(BonesFindingType.PosttherapeuticChange))]
        public bool IsBoneCementLeakage { get; set; }
        
        [RadioReportId("spi_c_0605229", InstanceName = nameof(BonesFindingType.PosttherapeuticChange))]
        public bool IsCompressionOfAdjacentStructures { get; set; }
        
        [RadioReportId("spi_c_0605230", InstanceName = nameof(BonesFindingType.PosttherapeuticChange))]
        public bool IsCementEvidenceInParavertebralVeins { get; set; }
        
        [RadioReportId("spi_c_0605231", InstanceName = nameof(BonesFindingType.PosttherapeuticChange))]
        public bool IsIndicationOfPulmonaryArteryEmbolism { get; set; }
        
        [RadioReportId("spi_c_0605232", InstanceName = nameof(BonesFindingType.PosttherapeuticChange))]
        public bool IsMaterialFracture { get; set; }
        
        [RadioReportId("spi_c_0605233", InstanceName = nameof(BonesFindingType.PosttherapeuticChange))]
        public bool IsDislocation { get; set; }

        #endregion
        
        #region PathologyOfTheVertebralArch
        
        [RadioReportId("spi_c_0602202", InstanceName = nameof(BonesFindingType.PathologyOfTheVertebralArch))]
        public SpineLocations VertebraSpineLocations { get; set; }
        
        [RadioReportId("spi_c_0602100", InstanceName = nameof(LocationSideType), IsExportable = false)]
        public Enums.Bones.SideType LocationSideType { get; set; }
        
        public LocalizationVertebralArchType LocalizationVertebralArchType { get; set; }
        
        [RadioReportId("spi_c_0604253", InstanceName = nameof(BonesFindingType.PathologyOfTheVertebralArch))]
        public BonesDiagnosisType PathologyOfTheVertebralArchBonesDiagnosis { get; set; }
        
        #endregion
        
        #region MassSpine

            [RadioReportId("spi_c_060103-type", InstanceName = InstanceNames.Bones, IsExportable = false)]
            public DescriptionType DescriptionType { get; set; }
        
            #region Characterization I
            
            [RadioReportId("spi_c_0602208", InstanceName = nameof(BonesFindingType.MassSpine))]
            public TraumaLocations VertebralBodyLocalizations {get;set;}
            
            [RadioReportId("spi_c_0603220", InstanceName = nameof(BonesFindingType.MassSpine))]
            public int? ExpansionMaxDiameterInMm { get; set; }
            
            [RadioReportId("spi_c_0603223", InstanceName = nameof(BonesFindingType.MassSpine))]
            public int? Expansion2ndPlaneInMm { get; set; }
            
            [RadioReportId("spi_c_0603226", InstanceName = nameof(BonesFindingType.MassSpine))]
            public int? Expansion3rdPlaneInMm { get; set; }
            
            [RadioReportId("spi_c_0604213-type", InstanceName = nameof(HomogeneityType), IsExportable = false)]
            public HomogeneityType HomogeneityType {get;set;}
            
            public MassSpineDensityType MassSpineDensityType { get; set; }
            
            public MatrixType MatrixType { get; set; }
            
            #endregion
            
            #region Characterization II
            
            [RadioReportId("spi_c_0602210", InstanceName = nameof(BonesFindingType.MassSpine))]
            public bool IsCalcification { get; set; }
            
            public CalcificationType CalcificationType { get; set; }
           
            [RadioReportId("spi_c_0602216", InstanceName = nameof(BonesFindingType.MassSpine))]
            public bool IsNidus { get; set; }
            
            [RadioReportId("spi_c_0602218", InstanceName = nameof(BonesFindingType.MassSpine))]
            public bool IsIntralesionalFat { get; set; }
            
            [RadioReportId("spi_c_0602219", InstanceName = nameof(BonesFindingType.MassSpine))]
            public bool IsCystic { get; set; }

            [RadioReportId("spi_c_0602220", InstanceName = nameof(BonesFindingType.MassSpine))]
            public bool IsGroundGlassAspect { get; set; }
            
            [RadioReportId("spi_c_0603232", InstanceName = nameof(BonesFindingType.MassSpine))]
            public bool IsSwelling { get; set; }
            
            [RadioReportId("spi_c_0603234", InstanceName = nameof(BonesFindingType.MassSpine))]
            public bool IsOsteoblastic { get; set; }
            
            [RadioReportId("spi_c_0603235", InstanceName = nameof(BonesFindingType.MassSpine))]
            public bool IsPermeativeGrowthPattern { get; set; }

            [RadioReportId("spi_c_0603237", InstanceName = nameof(BonesFindingType.MassSpine))]
            public bool IsGeographicAppearance { get; set; }
            
            [RadioReportId("spi_c_0603238", InstanceName = nameof(BonesFindingType.MassSpine))]
            public bool IsPedunculateGrowingAwayFromNearbyJoint { get; set; }
            
            [RadioReportId("spi_c_0603239", InstanceName = nameof(BonesFindingType.MassSpine))]
            public bool IsSubchondral { get; set; }
            
            [RadioReportId("spi_c_0604226", InstanceName = nameof(BonesFindingType.MassSpine))]
            public bool IsAdjacentSclerosis { get; set; }

            public AdjacentSclerosisType AdjacentSclerosisType { get; set; }
            
            [RadioReportId("spi_c_0604229", InstanceName = nameof(BonesFindingType.MassSpine))]
            public bool IsInterruptionOfEndPlate { get; set; }

            [RadioReportId("spi_c_0604230", InstanceName = nameof(BonesFindingType.MassSpine))]
            public bool IsOsteoproliferativeReaction { get; set; }

            [RadioReportId("spi_c_0604231", InstanceName = nameof(BonesFindingType.MassSpine))]
            public bool IsBoneApposition { get; set; }

            [RadioReportId("spi_c_0604233", InstanceName = nameof(BonesFindingType.MassSpine))]
            public bool IsEdgrenVainoSign { get; set; }
            
            [RadioReportId("spi_c_0604248", InstanceName = nameof(BonesFindingType.MassSpine))]
            public bool IsRemodelling { get; set; }
            
            [RadioReportId("spi_c_0604249", InstanceName = nameof(BonesFindingType.MassSpine))]
            public bool IsMultilayered { get; set; }
            
            [RadioReportId("spi_c_0604251", InstanceName = nameof(BonesFindingType.MassSpine))]
            public bool IsCodmanTriangle { get; set; }
            
            [RadioReportId("spi_c_0605255", InstanceName = nameof(BonesFindingType.MassSpine))]
            public bool IsPathologicFracture { get; set; }
            
            public ContrastEnhancementQuantitativeType ContrastEnhancementQuantitativeType { get; set; }
            
            [RadioReportId("spi_c_0605261-type", InstanceName = nameof(SignificantType), IsExportable = false)]
            public HomogeneityType SignificantType {get;set;}
            
            [RadioReportId("spi_c_0605265", InstanceName = nameof(BonesFindingType.MassSpine))]
            public ContrastEnhancementDistributionType ContrastEnhancementDistribution {get; set; }
            
            #endregion
            
            #region Differential diagnosis
            
            [RadioReportId("spi_c_0602224", InstanceName = nameof(BonesFindingType.MassSpine), AlternativeTranslationSuffix = "CT")]
            public BonesDiagnosisType MassSpineDD1 { get; set; }
            
            [RadioReportId("spi_c_0602225", InstanceName = nameof(BonesFindingType.MassSpine))]
            public bool IsDD1SuspicionOf { get; set; }
            
            [RadioReportId("spi_c_0602227", InstanceName = nameof(BonesFindingType.MassSpine))]
            public BonesDiagnosisType MassSpineDD2 { get; set; }
            
            [RadioReportId("spi_c_0602228", InstanceName = nameof(BonesFindingType.MassSpine))]
            public bool IsDD2Subordinate { get; set; }
            
            [RadioReportId("spi_c_0602230", InstanceName = nameof(BonesFindingType.MassSpine))]
            public BonesDiagnosisType MassSpineDD3 { get; set; }
            
            [RadioReportId("spi_c_0602231", InstanceName = nameof(BonesFindingType.MassSpine))]
            public bool IsAbove1LesionSameEntity { get; set; }
            
            #endregion
        
        #endregion
        
        public bool CheckCondition(string customConditionId) =>
            customConditionId switch
            {
                nameof(BonesFindingType.Fracture) => FindingType.ToString() == customConditionId,
                nameof(BonesFindingType.PathologyOfTheVertebralArch) => FindingType.ToString() == customConditionId,
                _ => false
            };
    }
}
