using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.Common.Module.Logic.Models.Pages;
using RadioReport.NeckMRT.Domain.Enums;
using RadioReport.NeckMRT.Domain.Enums.Thyroid;

namespace RadioReport.NeckMRT.Domain.Models
{
    public class ThyroidFinding : FindingWithImageBase, IRadioReportIdConditionEvaluator
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("nec_m_070106")]
        public ThyroidFindingType FindingType { get; set; }

        #region Common
		[RadioReportId("nec_m_070xxx-l", InstanceName = nameof(SideType), IsExportable = false)]
		public SideType SideType { get; set; }

		public TotalVolumeType TotalVolumeType { get; set; }
		public MarginType MarginType { get; set; }

		[RadioReportId("nec_m_070522-l", InstanceName = nameof(ThyroidFinding.HomogeneityType), IsExportable = false)]
		public HomogeneityType HomogeneityType { get; set; }

		[RadioReportId("nec_m_070546-l", InstanceName = nameof(ThyroidFinding.CmHomogeneityType), IsExportable = false)]
		public HomogeneityType CmHomogeneityType { get; set; }
		public ContrastEnhancementQuantitativeType ContrastEnhancementQuantitativeType { get; set; }
		public ContrastEnhancementDistributionType ContrastEnhancementDistributionType { get; set; }
		
		[RadioReportId("nec_m_070264", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		[RadioReportId("nec_m_070287", InstanceName = nameof(ThyroidFindingType.ParathyroidGlandMass))]
		[RadioReportId("nec_m_0702144", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public DifferentialDiagnosisType DifferentialDiagnosisType1 { get; set; }

		[RadioReportId("nec_m_070267", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		[RadioReportId("nec_m_070290", InstanceName = nameof(ThyroidFindingType.ParathyroidGlandMass))]
		[RadioReportId("nec_m_0702147", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public DifferentialDiagnosisType DifferentialDiagnosisType2 { get; set; }

		[RadioReportId("nec_m_070309", InstanceName = nameof(ThyroidFindingType.Thyroidectomy))]
		[RadioReportId("nec_m_070329", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation), DecimalPlaces = 2)]
		public float? SizeRightLobeInMm { get; set; }

		[RadioReportId("nec_m_070312", InstanceName = nameof(ThyroidFindingType.Thyroidectomy))]
		[RadioReportId("nec_m_070332", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation), DecimalPlaces = 2)]
		public float? SizeRightLobeSecondPlaneInMm { get; set; }

		[RadioReportId("nec_m_070315", InstanceName = nameof(ThyroidFindingType.Thyroidectomy))]
		[RadioReportId("nec_m_070335", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation), DecimalPlaces = 2)]
		public float? SizeRightLobeThirdPlaneInMm { get; set; }

		[RadioReportId("nec_m_070318", InstanceName = nameof(ThyroidFindingType.Thyroidectomy))]
		[RadioReportId("nec_m_070338", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation), DecimalPlaces = 2)]
		public float? SizeLeftLobeInMm { get; set; }

		[RadioReportId("nec_m_070321", InstanceName = nameof(ThyroidFindingType.Thyroidectomy))]
		[RadioReportId("nec_m_070341", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation), DecimalPlaces = 2)]
		public float? SizeLeftLobeSecondPlaneInMm { get; set; }
		
		[RadioReportId("nec_m_070324", InstanceName = nameof(ThyroidFindingType.Thyroidectomy))]
		[RadioReportId("nec_m_070344", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation), DecimalPlaces = 2)]
		public float? SizeLeftLobeThirdPlaneInMm { get; set; }
		
		[RadioReportId("nec_m_070511", InstanceName = nameof(ThyroidFindingType.Thyroidectomy))]
		[RadioReportId("nec_m_070226", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		[RadioReportId("nec_m_070382", InstanceName = nameof(ThyroidFindingType.ParathyroidGlandMass))]
		[RadioReportId("nec_m_0703107", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public int? SizeInMm { get; set; }

		[RadioReportId("nec_m_070514", InstanceName = nameof(ThyroidFindingType.Thyroidectomy))]
		[RadioReportId("nec_m_070229", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		[RadioReportId("nec_m_070385", InstanceName = nameof(ThyroidFindingType.ParathyroidGlandMass))]
		[RadioReportId("nec_m_0703110", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public int? SecondPlaneInMm { get; set; }

		[RadioReportId("nec_m_070517", InstanceName = nameof(ThyroidFindingType.Thyroidectomy))]
		[RadioReportId("nec_m_070232", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		[RadioReportId("nec_m_070388", InstanceName = nameof(ThyroidFindingType.ParathyroidGlandMass))]
		[RadioReportId("nec_m_0703113", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public int? ThirdPlaneInMm { get; set; }

		[RadioReportId("nec_m_070403", InstanceName = nameof(ThyroidFindingType.Thyroidectomy))]
		[RadioReportId("nec_m_070412", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		public int? AutomaticCalculationInMl { get; set; }
		
		[RadioReportId("nec_m_070407", InstanceName = nameof(ThyroidFindingType.Thyroidectomy))]
		[RadioReportId("nec_m_070416", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		public int? MeasurementInMl { get; set; }
		
		[RadioReportId("nec_m_070369", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		[RadioReportId("nec_m_070394", InstanceName = nameof(ThyroidFindingType.ParathyroidGlandMass))]
		public int? MinInnerDiameterAxialInMm { get; set; }

		[RadioReportId("nec_m_070372", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		[RadioReportId("nec_m_070397", InstanceName = nameof(ThyroidFindingType.ParathyroidGlandMass))]
		public int? SagittalInMm { get; set; }

		[RadioReportId("nec_m_070375", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		[RadioReportId("nec_m_0703100", InstanceName = nameof(ThyroidFindingType.ParathyroidGlandMass))]
		public int? Coronal { get; set; }

		[RadioReportId("nec_m_070505", InstanceName = nameof(ThyroidFindingType.Thyroidectomy))]
		[RadioReportId("nec_m_0703126", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsAbscess { get; set; }

		[RadioReportId("nec_m_070251", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		[RadioReportId("nec_m_070561", InstanceName = nameof(ThyroidFindingType.ParathyroidGlandMass))]
		[RadioReportId("nec_m_070570", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsDiffusionRestriction { get; set; }

		[RadioReportId("nec_m_070253", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		[RadioReportId("nec_m_070281", InstanceName = nameof(ThyroidFindingType.ParathyroidGlandMass))]
		[RadioReportId("nec_m_0702103", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsCyst { get; set; }

		[RadioReportId("nec_m_070254", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		[RadioReportId("nec_m_070282", InstanceName = nameof(ThyroidFindingType.ParathyroidGlandMass))]
		public bool IsCalcifications { get; set; }

		[RadioReportId("nec_m_070255", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		[RadioReportId("nec_m_0702108", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsCapsule { get; set; }

		[RadioReportId("nec_m_070256", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		[RadioReportId("nec_m_0702109", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsSepta { get; set; }

		[RadioReportId("nec_m_070257", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		[RadioReportId("nec_m_070283", InstanceName = nameof(ThyroidFindingType.ParathyroidGlandMass))]
		[RadioReportId("nec_m_0702138", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsFibrosis { get; set; }

		[RadioReportId("nec_m_070259", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		[RadioReportId("nec_m_070284", InstanceName = nameof(ThyroidFindingType.ParathyroidGlandMass))]
		[RadioReportId("nec_m_0702112", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsHemorrhage { get; set; }

		[RadioReportId("nec_m_070366", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		[RadioReportId("nec_m_070391", InstanceName = nameof(ThyroidFindingType.ParathyroidGlandMass))]
		[RadioReportId("nec_m_0703117", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsDisplacement { get; set; }

		[RadioReportId("nec_m_070367", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		[RadioReportId("nec_m_070392", InstanceName = nameof(ThyroidFindingType.ParathyroidGlandMass))]
		public bool IsTrachealCompression { get; set; }

		[RadioReportId("nec_m_070377", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		[RadioReportId("nec_m_0703102", InstanceName = nameof(ThyroidFindingType.ParathyroidGlandMass))]
		public bool IsVascularCompressionRight { get; set; }

		[RadioReportId("nec_m_070378", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		[RadioReportId("nec_m_0703103", InstanceName = nameof(ThyroidFindingType.ParathyroidGlandMass))]
		public bool IsVascularCompressionLeft { get; set; }

		[RadioReportId("nec_m_070441", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		[RadioReportId("nec_m_0703119", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsInfiltration { get; set; }

		[RadioReportId("nec_m_070450", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		[RadioReportId("nec_m_070577", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsCutis { get; set; }

		[RadioReportId("nec_m_070265", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		[RadioReportId("nec_m_070288", InstanceName = nameof(ThyroidFindingType.ParathyroidGlandMass))]
		[RadioReportId("nec_m_0702145", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsSuspicionOf { get; set; }

		[RadioReportId("nec_m_070268", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		[RadioReportId("nec_m_070291", InstanceName = nameof(ThyroidFindingType.ParathyroidGlandMass))]
		[RadioReportId("nec_m_0702148", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsSubordinate { get; set; }

		[RadioReportId("nec_m_070269", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		[RadioReportId("nec_m_070292", InstanceName = nameof(ThyroidFindingType.ParathyroidGlandMass))]
		[RadioReportId("nec_m_0702149", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsMoreThanOneLesionOfTheSameEntity { get; set; }
		
		[RadioReportId("nec_m_070527", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		[RadioReportId("nec_m_070556", InstanceName = nameof(ThyroidFindingType.ParathyroidGlandMass))]
		[RadioReportId("nec_m_070565", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public SignalType T1wSignalType { get; set; }

		[RadioReportId("nec_m_070530", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		[RadioReportId("nec_m_070559", InstanceName = nameof(ThyroidFindingType.ParathyroidGlandMass))]
		[RadioReportId("nec_m_070568", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public SignalType T2wSignalType { get; set; }

        #endregion

		#region AnomaliesNormalVariantsThyroidGland
		public AbnormalitiesNormVariantsThyroidType AbnormalitiesNormVariantsThyroidType { get; set; }

		#endregion

		#region Thyroidectomy

		public ThyroidectomyType ThyroidectomyType { get; set; }
		
		[RadioReportId("nec_m_070208", InstanceName = nameof(ThyroidFindingType.Thyroidectomy))]
		public bool IsNoThyroidTissue { get; set; }

		[RadioReportId("nec_m_070211-l", InstanceName = nameof(ThyroidectomySideType), IsExportable = false)]
		public SideType ThyroidectomySideType { get; set; }
		
		public TherapyType TherapyType { get; set; }
		public ComplicationsType ComplicationsType { get; set; }

		#endregion

		#region ThyroidGoiterMassInflammation
		
		[RadioReportId("nec_m_070219", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		public bool IsRightLobe { get; set; }

		[RadioReportId("nec_m_070220", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		public bool IsLeftLobe { get; set; }

		[RadioReportId("nec_m_070221", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		public bool IsIsthmus { get; set; }
		public MeasurementType MeasurementType { get; set; }
		public GrowthType GrowthType { get; set; }

		[RadioReportId("nec_m_070423", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		public int? ExpansionInMm { get; set; }

		[RadioReportId("nec_m_070258", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		public bool IsNecrosis { get; set; }

		[RadioReportId("nec_m_070260", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		public bool IsNodusSolitary { get; set; }

		[RadioReportId("nec_m_070261", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		public bool IsMultinodular { get; set; }

		[RadioReportId("nec_m_070440", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		public bool IsTranscapsular { get; set; }

		[RadioReportId("nec_m_070442", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		public bool IsTrachea { get; set; }

		[RadioReportId("nec_m_070443", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		public bool IsVascularNerveSheathRight { get; set; }

		[RadioReportId("nec_m_070444", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		public bool IsVascularNerveSheathLeft { get; set; }

		[RadioReportId("nec_m_070445", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		public bool IsRecurrentLaryngealNerve { get; set; }

		[RadioReportId("nec_m_070446", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		public bool IsEsophagus { get; set; }

		[RadioReportId("nec_m_070447", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		public bool IsLarynx { get; set; }

		[RadioReportId("nec_m_070448", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		public bool IsPrevertebralFascia { get; set; }

		[RadioReportId("nec_m_070449", InstanceName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation))]
		public bool IsUpperMediastinum { get; set; }

		#endregion

		#region ParathyroidGlandMass
		
		public RelationToThyroidGlandType RelationToThyroidGlandType { get; set; }

		#endregion

		#region SalivaryGlandsMassInflammation
		public LocalizationType LocalizationType { get; set; }

		[RadioReportId("nec_m_070299", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsRight { get; set; }

		[RadioReportId("nec_m_0702100", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsLeft { get; set; }
		public ShapeType ShapeType { get; set; }

		[RadioReportId("nec_m_0702102", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsFat { get; set; }

		[RadioReportId("nec_m_0702104", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsSolitary { get; set; }

		[RadioReportId("nec_m_0702105", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsMultiple { get; set; }

		[RadioReportId("nec_m_0702106", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsCalcification { get; set; }

		[RadioReportId("nec_m_0702107", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsDystrophy { get; set; }

		[RadioReportId("nec_m_0702110", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsNecroses { get; set; }

		[RadioReportId("nec_m_0702111", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsSignalVoids { get; set; }

		[RadioReportId("nec_m_0702113", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsFluidLevel { get; set; }

		[RadioReportId("nec_m_0703116", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsSubcutaneous { get; set; }

		[RadioReportId("nec_m_0703118", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsPerineuralInvasion { get; set; }

		[RadioReportId("nec_m_070481", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsTransspatialSpread { get; set; }

		[RadioReportId("nec_m_070482", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsParapharyngealSpace { get; set; }

		[RadioReportId("nec_m_070483", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsMastricatorSpace { get; set; }

		[RadioReportId("nec_m_070484", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsParotidSpace { get; set; }

		[RadioReportId("nec_m_070485", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsCarotidSpace { get; set; }

		[RadioReportId("nec_m_070486", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsPostCervicalSpace { get; set; }

		[RadioReportId("nec_m_070487", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsSublingualSpace { get; set; }

		[RadioReportId("nec_m_070488", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsSubmandibularSpace { get; set; }

		[RadioReportId("nec_m_070571", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsMusclesOfMastication { get; set; }

		[RadioReportId("nec_m_070572", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsBones { get; set; }

		[RadioReportId("nec_m_070573", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsMandible { get; set; }

		[RadioReportId("nec_m_070574", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsMaxilla { get; set; }

		[RadioReportId("nec_m_070575", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsAnteriorCranialFossa { get; set; }

		[RadioReportId("nec_m_070576", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsMiddleCranialFossa { get; set; }

		[RadioReportId("nec_m_0702128", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsDuctalCompression { get; set; }

		[RadioReportId("nec_m_0702129", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsDuctalStenosis { get; set; }

		[RadioReportId("nec_m_0702130", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsConcrement { get; set; }

		[RadioReportId("nec_m_0702131", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public int? ConcrementInMm { get; set; }

		[RadioReportId("nec_m_0702133", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsDilatedDuctus { get; set; }

		[RadioReportId("nec_m_0702134", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public int? DilatedDuctusInMm { get; set; }

		[RadioReportId("nec_m_0702136", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsEdematousSwelling { get; set; }

		[RadioReportId("nec_m_0702137", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsFattyDegeneration { get; set; }

		[RadioReportId("nec_m_0702139", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsAtrophy { get; set; }

		[RadioReportId("nec_m_0702140", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsIntraglandularLymphNode { get; set; }

		[RadioReportId("nec_m_0702141", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsNecrotic { get; set; }

		[RadioReportId("nec_m_0703127", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public int? AbscessInMm { get; set; }

		[RadioReportId("nec_m_0703129", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsExtensionIntoCervicalFascialSpaces { get; set; }

		[RadioReportId("nec_m_0703130", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsMyositis { get; set; }

		[RadioReportId("nec_m_0703131", InstanceName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation))]
		public bool IsPhlegmon { get; set; }

        #endregion
		
		#region ImageFileUpload
            
        [RadioReportId("uni_07_003")]
        public string SerialNumber { get; set; }

        [RadioReportId("uni_07_005")]
        public string PictureNumber { get; set; }

        [RadioReportId("uni_07_007", InstanceName = "NeckMRT.Thyroid.ThyroidFinding", IsExportable = false)]
        public override ImageFile UploadedImageFile { get; set; }

        public bool CheckCondition(string customConditionId) =>
            customConditionId switch
            {
                nameof(ThyroidFindingType.ThyroidGoiterMassInflammation) => FindingType.ToString() == customConditionId,
                nameof(ThyroidFindingType.ParathyroidGlandMass) => FindingType.ToString() == customConditionId,
                nameof(ThyroidFindingType.SalivaryGlandsMassInflammation) => FindingType.ToString() == customConditionId,
                nameof(ThyroidFindingType.Thyroidectomy) => FindingType.ToString() == customConditionId,
                nameof(AbnormalitiesNormVariantsThyroidType.Hypoplasia) => AbnormalitiesNormVariantsThyroidType.ToString() == customConditionId,
                nameof(AbnormalitiesNormVariantsThyroidType.ThyroidHemiagenesis) => AbnormalitiesNormVariantsThyroidType.ToString() == customConditionId,
                _ => false
            };

        #endregion
    }
}
