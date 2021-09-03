using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.SpineCT.Domain.Enums;
using RadioReport.SpineCT.Domain.Enums.MyelonSpinalCanal;

namespace RadioReport.SpineCT.Domain.Models
{
    public class MyelonSpinalCanalFinding : FindingBase
	{
        public override string InstanceName => FindingType.ToString();

		[RadioReportId("spi_c_070106")]
		public MyelonSpinalCanalFindingType FindingType { get; set; }

        #region SpinalCanalStenosis
        
		[RadioReportId("spi_c_070203", InstanceName = nameof(MyelonSpinalCanalFindingType.SpinalCanalStenosis))]
		public SpineLocations SpineLocation { get; set; }
				
		public SpinalCanalStenosisDetailType SpinalCanalStenosisDetailType { get; set; }      
        
        [RadioReportId("spi_c_070307", InstanceName = nameof(MyelonSpinalCanalFindingType.SpinalCanalStenosis))]
        public int? SagittalDiameterInMm { get; set; }

        [RadioReportId("spi_c_070310", InstanceName = nameof(MyelonSpinalCanalFindingType.SpinalCanalStenosis))]
        public int? TransverseDiameterInMm { get; set; }
        
        [RadioReportId("spi_c_070402", InstanceName = nameof(MyelonSpinalCanalFindingType.SpinalCanalStenosis))]
        public bool IsSpondylosis { get; set; }
        
        [RadioReportId("spi_c_070404", InstanceName = nameof(MyelonSpinalCanalFindingType.SpinalCanalStenosis))]
        public bool IsSpondylosisRightSide { get; set; }
        
        [RadioReportId("spi_c_070405", InstanceName = nameof(MyelonSpinalCanalFindingType.SpinalCanalStenosis))]
        public bool IsSpondylosisLeftSide { get; set; }
        
        [RadioReportId("spi_c_070407", InstanceName = nameof(MyelonSpinalCanalFindingType.SpinalCanalStenosis))]
        public SpondylosisDetailsType SpondylosisDetailsType { get; set; }
        
        [RadioReportId("spi_c_070408", InstanceName = nameof(MyelonSpinalCanalFindingType.SpinalCanalStenosis))]
        public bool IsLigFlavumHypertrophy { get; set; }
        
        [RadioReportId("spi_c_070410", InstanceName = nameof(MyelonSpinalCanalFindingType.SpinalCanalStenosis))]
        public bool IsLigFlavumHypertrophyRightSide { get; set; }
        
        [RadioReportId("spi_c_070411", InstanceName = nameof(MyelonSpinalCanalFindingType.SpinalCanalStenosis))]
        public bool IsLigFlavumHypertrophyLeftSide { get; set; }
        
        [RadioReportId("spi_c_070412", InstanceName = nameof(MyelonSpinalCanalFindingType.SpinalCanalStenosis))]
        public bool IsLDiscProtrusion { get; set; }
        
        [RadioReportId("spi_c_070413", InstanceName = nameof(MyelonSpinalCanalFindingType.SpinalCanalStenosis))]
        public bool IsRetrospondylosis { get; set; }
        
        [RadioReportId("spi_c_070501", InstanceName = nameof(MyelonSpinalCanalFindingType.SpinalCanalStenosis))]
        public bool IsUncovertebralArthrosis { get; set; }
        
        [RadioReportId("spi_c_070503", InstanceName = nameof(MyelonSpinalCanalFindingType.SpinalCanalStenosis))]
        public bool IsUncovertebralArthrosisRightSide { get; set; }
        
        [RadioReportId("spi_c_070504", InstanceName = nameof(MyelonSpinalCanalFindingType.SpinalCanalStenosis))]
        public bool IsUncovertebralArthrosisLeftSide { get; set; }
        
        [RadioReportId("spi_c_070505", InstanceName = nameof(MyelonSpinalCanalFindingType.SpinalCanalStenosis))]
        public bool IsNeuralForaminalCompression { get; set; }
        
        [RadioReportId("spi_c_070507", InstanceName = nameof(MyelonSpinalCanalFindingType.SpinalCanalStenosis))]
        public bool IsNeuralForaminalCompressionRightSide { get; set; }
        
        [RadioReportId("spi_c_070508", InstanceName = nameof(MyelonSpinalCanalFindingType.SpinalCanalStenosis))]
        public bool IsNeuralForaminalCompressionLeftSide { get; set; }
        
        [RadioReportId("spi_c_070509", InstanceName = nameof(MyelonSpinalCanalFindingType.SpinalCanalStenosis))]
        public bool IsLateralRecessStenosis { get; set; }
        
        [RadioReportId("spi_c_070510", InstanceName = nameof(MyelonSpinalCanalFindingType.SpinalCanalStenosis))]
        public bool IsTShapedStenosisSpinalCanal { get; set; }
        
        [RadioReportId("spi_c_070511", InstanceName = nameof(MyelonSpinalCanalFindingType.SpinalCanalStenosis))]
        public bool IsPseudospondylolisthesis { get; set; }
        
        [RadioReportId("spi_c_070513", InstanceName = nameof(MyelonSpinalCanalFindingType.SpinalCanalStenosis))]
        public AccordingToMeyerdingType AccordingToMeyerdingType { get; set; }
        
        #endregion

        #region Mass
        
            #region Characterization I tab
            
            [RadioReportId("spi_c_070208", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
            public SpineLocations LocalizationTopOrBottomVertebra { get; set; }
            
            [RadioReportId("spi_c_070235", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
            public SpinalCanalLocations SpinalCanalLocation { get; set; }
            
            [RadioReportId("spi_c_070316", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
            public bool IsAnterior { get; set; }
            
            [RadioReportId("spi_c_070317", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
            public bool IsPosterior { get; set; }
            
            [RadioReportId("spi_c_070318", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
            public bool IsSpinalCanalLocalizationLeft { get; set; }
            
            [RadioReportId("spi_c_070319", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
            public bool IsIsSpinalCanalLocalizationRight { get; set; }
            
            [RadioReportId("spi_c_070320", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
            public bool IsHourglassNeurinoma { get; set; }
            
            [RadioReportId("spi_c_070417", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
            public int? ExpansionMaxDiameterInMm { get; set; }
            
            [RadioReportId("spi_c_070420", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
            public int? Expansion2ndPlaneInMm { get; set; }
            
            [RadioReportId("spi_c_070423", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
            public int? Expansion3rdPlaneInMm { get; set; }
            
            public CharacterizationType CharacterizationType { get; set; }
            
            public MyelonSpinalCanalDensityType MyelonSpinalCanalDensityType { get; set; }
            
            [RadioReportId("spi_c_070520", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
            public bool IsGasInclusion { get; set; }
            
            [RadioReportId("spi_c_070522", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
            public int? MeasurementInHU { get; set; }
            
            public MarginType MarginType { get; set; }

            #endregion

            #region Characterization II tab
            
            [RadioReportId("spi_c_070209", InstanceName = nameof(CharIIHomogeneityType), IsExportable = false)]
            public Enums.MyelonSpinalCanal.HomogeneityType CharIIHomogeneityType { get; set; }
            
            [RadioReportId("spi_c_070213", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
            public bool IsCalcification { get; set; }
            
            public MyelonSpinalCanalCalcificationType CalcificationType { get; set; }
            
            [RadioReportId("spi_c_070217", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
            public bool IsSclerosis{ get; set; }
            
            [RadioReportId("spi_c_070218", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
            public bool IsSepta { get; set; }
            
            [RadioReportId("spi_c_070219", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
            public bool IsIntralesionalFat{ get; set; }
            
            [RadioReportId("spi_c_070220", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
            public bool IsCystic { get; set; }
            
            [RadioReportId("spi_c_070221", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
            public bool IsFluidLevel { get; set; }
            
            public MyelonAffectionType MyelonAffectionType { get; set; }
            
            [RadioReportId("spi_c_070324", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
            public bool IsCompressionFromAnterior { get; set; }
            
            [RadioReportId("spi_c_070325", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
            public bool IsCompressionFromRightSide { get; set; }
            
            [RadioReportId("spi_c_070326", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
            public bool IsCompressionFromLeftSide { get; set; }
            
            [RadioReportId("spi_c_070327", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
            public bool IsCompressionFromPosterior { get; set; }
            
            [RadioReportId("spi_c_070429", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
            public bool IsSerpiginousVascularStructures { get; set; }
            
            [RadioReportId("spi_c_070430", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
            public bool IsSignificantVascularization { get; set; }
            
            [RadioReportId("spi_c_070431", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
            public bool IsRootDisplacement { get; set; }
            
            [RadioReportId("spi_c_070432", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
            public bool IsClottedNerveRoots { get; set; }
            
            [RadioReportId("spi_c_070433", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
            public bool IsEmptyDuralSac { get; set; }
            
            [RadioReportId("spi_c_070434", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
            public bool IsSeptationInTheSubarachnoidSpace { get; set; }
            
            [RadioReportId("spi_c_070435", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
            public bool IsLeptomeningealSpread { get; set; }
            
            [RadioReportId("spi_c_070436", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
            public bool IsScaloppingOrThinnedPedicle { get; set; }
            
            [RadioReportId("spi_c_070437", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
            public bool IsNeuralForaminalWidening { get; set; }
            
            [RadioReportId("spi_c_070438", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
            public bool IsNecrosis { get; set; }
            
            [RadioReportId("spi_c_070439", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
            public bool IsHemorrhage { get; set; }
            
            [RadioReportId("spi_c_070530", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
            public SpineLocationBones LocalizationOfNerveRootDisplacement { get; set; }
            
            [RadioReportId("spi_c_070532", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
            public SpineLocationBones LocalizationOfNeuralForaminalWidening { get; set; }

            #endregion

            #region Differential diagnosis tab
            
            public Enums.MyelonSpinalCanal.ContrastEnhancementQuantitativeType ContrastEnhancementQuantitativeType { get; set; }
            
            [RadioReportId("spi_c_070222", InstanceName = nameof(DDHomogeneityType), IsExportable = false)]
            public Enums.MyelonSpinalCanal.HomogeneityType DDHomogeneityType { get; set; }

            public ContrastEnhancementDistributionType ContrastEnhancementDistributionType { get; set; }

            [RadioReportId("spi_c_070330", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
            public MyelonDifferentialDiagnoseType DifferentialDiagnosis1Type { get; set; }
            
            [RadioReportId("spi_c_070331", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
            public bool IsSuspicionOf { get; set; }
            
            [RadioReportId("spi_c_070333", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
            public MyelonDifferentialDiagnoseType DifferentialDiagnosis2Type { get; set; }
            
            [RadioReportId("spi_c_070334", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
            public bool IsSubordinate { get; set; }
            
            [RadioReportId("spi_c_070440", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
            public bool IsDifferentialDiagnosisAbove1LesionOfTheSameEntity { get; set; }
            
            [RadioReportId("spi_c_070442", InstanceName = nameof(MyelonSpinalCanalFindingType.Mass))]
            public SpineLocations DifferentialDiagnosisAbove1LesionLocations { get; set; }
            
            #endregion
        
        #endregion
	}
}
