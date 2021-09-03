using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.PelvisMRT.Domain.Enums.Prostata;

namespace RadioReport.PelvisMRT.Domain.Models
{
    public class ProstataFinding : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("pel_m_040123")]
        public ProstataFindingType FindingType { get; set; }

        #region ResidualHemorrhage

        [RadioReportId("pel_m_040220")]
        public LocalizationT1wSignalEnhancementTypes LocalizationT1wSignalEnhancementType { get; set; }

        public PatternType PatternType { get; set; }

        #endregion

        [RadioReportId("pel_m_040224", InstanceName = nameof(ProstataFindingType.TransitionZoneTZ))]
        public TransitionaZoneTZLocalizerTypes TransitionaZoneTZLocalizerType { get; set; }

        public SignalPowerType SignalPowerType { get; set; }

        [RadioReportId("pel_m_040309")]
        public bool IsSignalLossFlowVoid { get; set; }

        public MarginType MarginType { get; set; }

        public HomogenityTypes HomogenityType { get; set; }

        public CapsuleType TransitionaZoneTZCapsuleType { get; set; }

        [RadioReportId("pel_m_040422", InstanceName = nameof(ProstataFindingType.TransitionZoneTZ))]
        [RadioReportId("pel_m_040422", InstanceName = nameof(ProstataFindingType.PeripheralZonePZ))]
        [RadioReportId("pel_m_040453", InstanceName = nameof(ProstataFindingType.CentralZoneCZ))]
        public bool IsAnteriorFibromuscularStroma { get; set; }

        [RadioReportId("pel_m_040423", InstanceName = nameof(ProstataFindingType.PeripheralZonePZ))]
        [RadioReportId("pel_m_040423", InstanceName = nameof(ProstataFindingType.TransitionZoneTZ))]
        [RadioReportId("pel_m_040454", InstanceName = nameof(ProstataFindingType.CentralZoneCZ))]
        public bool IsCentralZone { get; set; }

        [RadioReportId("pel_m_040424")]
        public bool IsEjaculatoryDuct { get; set; }

        [RadioReportId("pel_m_0404400-l", InstanceName = nameof(EjaculatoryDuctDirectionType), IsExportable = false)]
        public DirectionTypes EjaculatoryDuctDirectionType { get; set; }

        [RadioReportId("pel_m_040427")]
        public bool IsProstaticUrethra { get; set; }

        [RadioReportId("pel_m_040428")]
        public bool IsLentiform { get; set; }

        [RadioReportId("pel_m_040429")]
        public bool IsInfiltrationSpiculated { get; set; }

        [RadioReportId("pel_m_040430", InstanceName = nameof(ProstataFindingType.TransitionZoneTZ))]
        public bool IsErasedCharcoalSign { get; set; }

        [RadioReportId("pel_m_040431", InstanceName = nameof(ProstataFindingType.TransitionZoneTZ))]
        public bool IsTypicalBphNode { get; set; }

        [RadioReportId("pel_m_040516")]
        public bool IsIncreasedDwiSignal { get; set; }

        [RadioReportId("pel_m_040516-l", InstanceName = nameof(IncreasedDwiSignalType), IsExportable = false)]
        public DwiAdcSignalType IncreasedDwiSignalType { get; set; }

        [RadioReportId("pel_m_040517-l", InstanceName = nameof(DwiDiscreteType), IsExportable = false)]
        public DiscreteType DwiDiscreteType { get; set; }

        [RadioReportId("pel_m_040521")]
        public bool IsAdcHypointensity { get; set; }

        [RadioReportId("pel_m_040521-l", InstanceName = nameof(AdcHypointensityType), IsExportable = false)]
        public DwiAdcSignalType AdcHypointensityType { get; set; }

        [RadioReportId("pel_m_040522-l", InstanceName = nameof(AdcDiscreteType), IsExportable = false)]
        public DiscreteType AdcDiscreteType { get; set; }

        public DynamicContrastEnhancedType DynamicContrastEnhancedType { get; set; }

        public DceMrtNegativeType DceMrtNegativeType { get; set; }

        public ExtraprostaticGrowthType ExtraprostaticGrowthType { get; set; }

        public PenetrationOfPseudocapsuleType PenetrationOfPseudocapsuleType { get; set; }

        [RadioReportId("pel_m_040326")]
        public bool IsPseudocapsularBulgingSpiculated { get; set; }

        [RadioReportId("pel_m_040328")]
        public bool IsSuspicionOf { get; set; }

        [RadioReportId("pel_m_040433")]
        public bool IsSeminalVesicles { get; set; }
        
        [RadioReportId("pel_m_040439-l", InstanceName = nameof(SeminalVesiclesDirectionType), IsExportable = false)]
        public DirectionTypes SeminalVesiclesDirectionType { get; set; }

        [RadioReportId("pel_m_040436")]
        public bool IsAlteredInternalStructure { get; set; }

        [RadioReportId("pel_m_040437")]
        public bool IsFocalOrDiffuseT2wSignalReduction { get; set; }

        [RadioReportId("pel_m_040438")]
        public bool IsSeparateFocalT2wSignalReduction { get; set; }

        [RadioReportId("pel_m_040440")]
        public bool IsEnlargedEjaculatoryDuctWithT2wSignalReduction { get; set; }

        [RadioReportId("pel_m_040441")]
        public bool IsObliterationOfProstateSeminalVesicleAngle { get; set; }

        [RadioReportId("pel_m_040533")]
        public bool IsDirectInfiltrationPerContinuitatem { get; set; }

        [RadioReportId("pel_m_040526")]
        public bool IsNeurovascularBundle { get; set; }

        [RadioReportId("pel_m_040534-l", InstanceName = nameof(NeurovascularBundleDirectionType), IsExportable = false)]
        public DirectionTypes NeurovascularBundleDirectionType { get; set; }

        [RadioReportId("pel_m_040529")]
        public bool IsRectum { get; set; }

        [RadioReportId("pel_m_040530")]
        public bool IsUrinaryBladder { get; set; }

        [RadioReportId("pel_m_040531")]
        public bool IsExternalUrethrasphincter { get; set; }

        [RadioReportId("pel_m_040532")]
        public bool IsMembranousUrethra { get; set; }

        public SizeType PiradsScoreSizeType { get; set; }

        [RadioReportId("pel_m_040238")]
        public SliderPiradsScoreType SliderPiradasScoreType { get; set; }

        public IndexLesionType IndexLesionType { get; set; }

        [RadioReportId("pel_m_040330")]
        public int? PiradsScoreTotal { get; set; }

        [RadioReportId("pel_m_040446")]
        public DifferentialDiagnosis DifferentialDiagnosis01 { get; set; }

        [RadioReportId("pel_m_040447")]
        public bool IsSuspicionOf01 { get; set; }

        [RadioReportId("pel_m_040449")]
        public DifferentialDiagnosis DifferentialDiagnosis02 { get; set; }

        [RadioReportId("pel_m_040450")]
        public bool IsSuspicionOf02 { get; set; }

        [RadioReportId("pel_m_040536")]
        public bool IsDifferentialDiagnosis01GranulomatousProstatitis { get; set; }

        [RadioReportId("pel_m_040538")]
        public bool IsDifferentialDiagnosis02GranulomatousProstatitis { get; set; }

        public SideAsymmetryType SideAsymmetryType { get; set; }

        [RadioReportId("pel_m_040256", InstanceName = nameof(ProstataFindingType.CentralZoneCZ))]
        public bool IsDisplacementOrDeformationInBph { get; set; }

        [RadioReportId("pel_m_040231", InstanceName = nameof(ProstataFindingType.PeripheralZonePZ))]
        public PeripheralZonePZLocalizerTypes PeripheralZonePZLocalizerType { get; set; }

        [RadioReportId("pel_m_040233", InstanceName = nameof(ProstataFindingType.CentralZoneCZ))]
        public CentralZoneCZLocalizerTypes CentralZoneCZLocalizerType { get; set; }
    }
}
