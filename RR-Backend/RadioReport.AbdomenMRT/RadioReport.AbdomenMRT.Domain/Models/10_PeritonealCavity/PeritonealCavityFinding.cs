using RadioReport.AbdomenMRT.Domain.Enums;
using RadioReport.AbdomenMRT.Domain.Enums.PeritonealCavity;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.AbdomenMRT.Domain.Models
{
    public class PeritonealCavityFinding : FindingWithImageBase, IRadioReportIdConditionEvaluator
    {
        public override string InstanceName => FindingType.ToString();

		[RadioReportId("abd_m_100106")]
        public PeritonealCavityFindingType FindingType { get; set; }
        
        #region Common

		[RadioReportId("abd_m_100367", InstanceName = nameof(PeritonealCavityFindingType.MistyMesentery))]
		public PeritonealCavityDifferentialDiagnosisType DifferentialDiagnosisType { get; set; }

		[RadioReportId("abd_m_100250", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
		[RadioReportId("abd_m_100276", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
		public PeritonealCavityDifferentialDiagnosisType DifferentialDiagnosis1Type { get; set; }

		[RadioReportId("abd_m_100253", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
		[RadioReportId("abd_m_100277", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
		public PeritonealCavityDifferentialDiagnosisType DifferentialDiagnosis2Type { get; set; }

		[RadioReportId("abd_m_100256", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
		[RadioReportId("abd_m_100278", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
		public PeritonealCavityDifferentialDiagnosisType DifferentialDiagnosis3Type { get; set; }

		[RadioReportId("abd_m_100204", InstanceName = nameof(PeritonealCavityFindingType.Ascites))]
		[RadioReportId("abd_m_100204", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
		[RadioReportId("abd_m_100204", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
		public bool IsSubphrenic { get; set; }

		[RadioReportId("abd_m_100205", InstanceName = nameof(PeritonealCavityFindingType.Ascites))]
		[RadioReportId("abd_m_100205", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
		[RadioReportId("abd_m_100205", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
		[RadioReportId("abd_m_100205", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
		public bool IsRight { get; set; }

		[RadioReportId("abd_m_100206", InstanceName = nameof(PeritonealCavityFindingType.Ascites))]
		[RadioReportId("abd_m_100206", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
		[RadioReportId("abd_m_100206", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
		[RadioReportId("abd_m_100206", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
		public bool IsLeft { get; set; }

		[RadioReportId("abd_m_100207", InstanceName = nameof(PeritonealCavityFindingType.Ascites))]
		[RadioReportId("abd_m_100207", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
		[RadioReportId("abd_m_100207", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
		public bool IsOmentalBursa { get; set; }

		[RadioReportId("abd_m_100208", InstanceName = nameof(PeritonealCavityFindingType.Ascites))]
		[RadioReportId("abd_m_100208", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
		[RadioReportId("abd_m_100208", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
		public bool IsOmentumMajus { get; set; }

		[RadioReportId("abd_m_100209", InstanceName = nameof(PeritonealCavityFindingType.Ascites))]
		[RadioReportId("abd_m_100209", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
		[RadioReportId("abd_m_100209", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
		public bool IsOmentalForamen { get; set; }

		[RadioReportId("abd_m_100210", InstanceName = nameof(PeritonealCavityFindingType.Ascites))]
		[RadioReportId("abd_m_100210", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
		[RadioReportId("abd_m_100210", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
		public bool IsSubhepatic { get; set; }

		[RadioReportId("abd_m_100211", InstanceName = nameof(PeritonealCavityFindingType.Ascites))]
		[RadioReportId("abd_m_100211", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
		[RadioReportId("abd_m_100211", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
		public bool IsSupramesenteric { get; set; }

		[RadioReportId("abd_m_100212", InstanceName = nameof(PeritonealCavityFindingType.Ascites))]
		[RadioReportId("abd_m_100212", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
		[RadioReportId("abd_m_100212", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
		public bool IsInframesenteric { get; set; }

		[RadioReportId("abd_m_100213", InstanceName = nameof(PeritonealCavityFindingType.Ascites))]
		[RadioReportId("abd_m_100213", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
		[RadioReportId("abd_m_100213", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
		public bool IsMesentericRoot { get; set; }

        [RadioReportId("abd_m_100215", InstanceName = nameof(PeritonealCavityFindingType.Ascites))]
        [RadioReportId("abd_m_100215", InstanceName = nameof(PeritonealCavityFindingType.Peritonitis))]
        public bool IsPeritonealContrastEnhancement { get; set; }
        
        [RadioReportId("abd_m_1002102", InstanceName = nameof(PeritonealCavityFindingType.Ascites))]
        [RadioReportId("abd_m_100302", InstanceName  = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
        [RadioReportId("abd_m_100283", InstanceName  = nameof(PeritonealCavityFindingType.PeritonealMass))]
        public bool IsParacolic { get; set; }
        
        [RadioReportId("abd_m_1002103", InstanceName = nameof(PeritonealCavityFindingType.Ascites))]
        [RadioReportId("abd_m_100303", InstanceName  = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
        [RadioReportId("abd_m_100284", InstanceName  = nameof(PeritonealCavityFindingType.PeritonealMass))]
        public bool IsParacolicRight { get; set; }
        
        [RadioReportId("abd_m_1002104", InstanceName = nameof(PeritonealCavityFindingType.Ascites))]
        [RadioReportId("abd_m_100368", InstanceName  = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
        [RadioReportId("abd_m_100285", InstanceName  = nameof(PeritonealCavityFindingType.PeritonealMass))]
        public bool IsParacolicLeft { get; set; }

		[RadioReportId("abd_m_100304", InstanceName = nameof(PeritonealCavityFindingType.Ascites))]
		[RadioReportId("abd_m_100304", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
		[RadioReportId("abd_m_100304", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
		public bool IsMesocolonTransversum { get; set; }

		[RadioReportId("abd_m_100305", InstanceName = nameof(PeritonealCavityFindingType.Ascites))]
		[RadioReportId("abd_m_100305", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
		[RadioReportId("abd_m_100305", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
		public bool IsSupramesocolic { get; set; }

		[RadioReportId("abd_m_100306", InstanceName = nameof(PeritonealCavityFindingType.Ascites))]
		[RadioReportId("abd_m_100306", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
		[RadioReportId("abd_m_100306", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
		public bool IsInframesocolic { get; set; }

		[RadioReportId("abd_m_100307", InstanceName = nameof(PeritonealCavityFindingType.Ascites))]
		[RadioReportId("abd_m_100307", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
		[RadioReportId("abd_m_100307", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
		public bool IsVesicoUterinePouch { get; set; }

		[RadioReportId("abd_m_100308", InstanceName = nameof(PeritonealCavityFindingType.Ascites))]
		[RadioReportId("abd_m_100308", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
		[RadioReportId("abd_m_100308", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
		public bool IsRectoUterinePouchPouchOfDouglas { get; set; }

		[RadioReportId("abd_m_100309", InstanceName = nameof(PeritonealCavityFindingType.Ascites))]
		[RadioReportId("abd_m_100309", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
		[RadioReportId("abd_m_100309", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
		public bool IsRectoVesicalPouch { get; set; }

		[RadioReportId("abd_m_100310", InstanceName = nameof(PeritonealCavityFindingType.Ascites))]
		[RadioReportId("abd_m_100310", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
		[RadioReportId("abd_m_100310", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
		public bool IsMesenteryOfTheSmallBowel { get; set; }

		[RadioReportId("abd_m_100311", InstanceName = nameof(PeritonealCavityFindingType.Ascites))]
		[RadioReportId("abd_m_100311", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
		[RadioReportId("abd_m_100311", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
		public bool IsDiffuse { get; set; }

		[RadioReportId("abd_m_100410", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
		[RadioReportId("abd_m_100258", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
		public bool IsAnteriorPararenalSpace { get; set; }

		[RadioReportId("abd_m_100411", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
		[RadioReportId("abd_m_100259", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
		public bool IsPosteriorPararenalSpace { get; set; }

		[RadioReportId("abd_m_100412", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
		[RadioReportId("abd_m_100260", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
		public bool IsPerirenalSpace { get; set; }

		[RadioReportId("abd_m_100413", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
		[RadioReportId("abd_m_100261", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
		public bool IsAnteriorLeafGerotaFascia { get; set; }

		[RadioReportId("abd_m_100414", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
		[RadioReportId("abd_m_100262", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
		public bool IsPosteriorLeafGerotaFascia { get; set; }

		[RadioReportId("abd_m_100251", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
		[RadioReportId("abd_m_100251", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
		public bool IsSuspicionOf { get; set; }

		[RadioReportId("abd_m_100254", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
		[RadioReportId("abd_m_100254", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        [RadioReportId("abd_m_100570", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
        public bool IsSubordinate { get; set; }

            #region ImageFileUpload
                    
            [RadioReportId("uni_10_003")]
            public string SerialNumber { get; set; }

            [RadioReportId("uni_10_005")]
            public string PictureNumber { get; set; }

            [RadioReportId("uni_10_007", InstanceName = "AbdomenMRT.PeritonealCavity.PeritonealCavityFinding", IsExportable = false)]
            public override ImageFile UploadedImageFile { get; set; }
                
            #endregion
        
        [RadioReportId("abd_m_100405", InstanceName = nameof(PeritonealCavityFindingType.Ascites))]
        [RadioReportId("abd_m_100371", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
        [RadioReportId("abd_m_100228", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        [RadioReportId("abd_m_100545", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        public SignalTypeExtended T1wSignal { get; set; }
        
        [RadioReportId("abd_m_100407", InstanceName = nameof(PeritonealCavityFindingType.Ascites))] 
        [RadioReportId("abd_m_100373", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
        [RadioReportId("abd_m_100230", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        [RadioReportId("abd_m_100548", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        public SignalTypeExtended T2wSignal { get; set; }
        
        [RadioReportId("abd_m_100502", InstanceName = nameof(PeritonealCavityFindingType.Ascites))]
        [RadioReportId("abd_m_100375", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
        [RadioReportId("abd_m_100550", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        public bool IsSignalDrop { get; set; }
        
        public ExtensionType SignalDropExtensionType { get; set; }
        
        [RadioReportId("abd_m_100506", InstanceName = nameof(PeritonealCavityFindingType.Ascites))]
        [RadioReportId("abd_m_100476", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))] 
        [RadioReportId("abd_m_100236", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))] 
        [RadioReportId("abd_m_100236", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))] 
        public bool IsDiffusionRestriction { get; set; }
        
        [RadioReportId("abd_m_100294", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
        [RadioReportId("abd_m_100424", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        [RadioReportId("abd_m_100349", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        public int? ExtensionSizeInMm { get; set; }
        
        [RadioReportId("abd_m_100297", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
        [RadioReportId("abd_m_100427", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        [RadioReportId("abd_m_100352", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        public int? SecondPlaneInMm { get; set; }
        
        [RadioReportId("abd_m_1002101", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
        [RadioReportId("abd_m_100430", InstanceName  = nameof(PeritonealCavityFindingType.PeritonealMass))]
        [RadioReportId("abd_m_100355", InstanceName  = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        public int? ThirdPlaneInMm { get; set; }
        
        [RadioReportId("abd_m_100408", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
        [RadioReportId("abd_m_100541", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        public bool IsRetroperitoneum { get; set; }
        
        [RadioReportId("abd_m_100465", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
        [RadioReportId("abd_m_100263", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        public bool IsLateroconalFascia { get; set; }
        
        [RadioReportId("abd_m_100466", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
        [RadioReportId("abd_m_100264", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        public bool IsZuckerkandlsFascia { get; set; }
        
        [RadioReportId("abd_m_100467", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
        [RadioReportId("abd_m_100280", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        public bool IsParaaortic { get; set; }
        
        [RadioReportId("abd_m_100468", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
        [RadioReportId("abd_m_100281", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        public bool IsInteraortocaval { get; set; }
        
        [RadioReportId("abd_m_100469", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
        [RadioReportId("abd_m_100282", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        public bool IsParacaval { get; set; }
        
        public MarginType MarginType { get; set; } 
        
        public FormType FormType { get; set; }
        
        [RadioReportId("abd_m_100334", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        [RadioReportId("abd_m_100267", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        public bool IsFat { get; set; }
          
        [RadioReportId("abd_m_100335", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        [RadioReportId("abd_m_100268", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        public bool IsCysts { get; set; }
               
        [RadioReportId("abd_m_100336", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        [RadioReportId("abd_m_100269", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        public bool IsCalcification { get; set; }
               
        [RadioReportId("abd_m_100337", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        [RadioReportId("abd_m_100270", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        public bool IsBoneOrTooth { get; set; }
               
        [RadioReportId("abd_m_100338", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        [RadioReportId("abd_m_100271", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        public bool IsInternalChangesCapsule { get; set; }
               
        [RadioReportId("abd_m_100339", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        [RadioReportId("abd_m_100272", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        public bool IsSepta { get; set; }
               
        [RadioReportId("abd_m_100340", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        [RadioReportId("abd_m_100273", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        public bool IsNecrosis { get; set; }
               
        [RadioReportId("abd_m_100341", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        [RadioReportId("abd_m_100274", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        public bool IsSignalVoids { get; set; }
               
        [RadioReportId("abd_m_100342", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        [RadioReportId("abd_m_100275", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        public bool IsHemorrhage { get; set; }
        
        public GrowthPatternsType GrowthPatternsType { get; set; }
        
        [RadioReportId("abd_m_100241", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        [RadioReportId("abd_m_100461", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        public bool IsAssociatedFindingsCapsule { get; set; }
        
        [RadioReportId("abd_m_100291", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        [RadioReportId("abd_m_100462", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        [RadioReportId("abd_m_100279", InstanceName = nameof(PeritonealCavityFindingType.MistyMesentery))]
        public bool IsPseudoCapsule { get; set; }
        
        public ContrastEnhancementQuantitativeType ContrastEnhancementQuantitativeType { get; set; }
        
        public ContrastEnhancementDistributionType ContrastEnhancementDistributionType { get; set; }
        
        #endregion

        #region Ascites
        
        [RadioReportId("abd_m_100402", InstanceName = nameof(PeritonealCavityFindingType.Ascites))]
        public int? MaxThicknessInMm { get; set; }

        [RadioReportId("abd_m_100216", InstanceName = nameof(PeritonealCavityFindingType.Ascites))]
        public bool IsConcomitantPeritonitis { get; set; }
        
        [RadioReportId("abd_m_100217", InstanceName = nameof(PeritonealCavityFindingType.Ascites))]
        public bool IsFocalGasInclusion { get; set; }
        
        [RadioReportId("abd_m_100218", InstanceName = nameof(PeritonealCavityFindingType.Ascites))]
        public bool IsSuspectedAbscess { get; set; }
        
        [RadioReportId("abd_m_100219", InstanceName = nameof(PeritonealCavityFindingType.Ascites))]
        public bool IsSuspectedAbscessAboveOneFinding { get; set; }
        
        [RadioReportId("abd_m_100220", InstanceName = nameof(PeritonealCavityFindingType.Ascites))]
        public bool IsCommunicatingLesions { get; set; }
        
        public QuantityType QuantityType { get; set; }
        
        public AscitesQualityType AscitesQualityType { get; set; }
        
        #endregion
        
        #region Peritonitis
        
        [RadioReportId("abd_m_100221", InstanceName = nameof(PeritonealCavityFindingType.Peritonitis))]
        public bool IsOmentumInvolvement { get; set; }
        
        [RadioReportId("abd_m_100222", InstanceName = nameof(PeritonealCavityFindingType.Peritonitis))]
        public bool IsMesentericFatInvolvement { get; set; }
        
        [RadioReportId("abd_m_100321", InstanceName = nameof(PeritonealCavityFindingType.Peritonitis))]
        public bool IsInvolvedQuadrantsRightUpper { get; set; }
        
        [RadioReportId("abd_m_100322", InstanceName = nameof(PeritonealCavityFindingType.Peritonitis))]
        public bool IsInvolvedQuadrantsRightLower { get; set; }
        
        [RadioReportId("abd_m_100323", InstanceName = nameof(PeritonealCavityFindingType.Peritonitis))]
        public bool IsInvolvedQuadrantsLeftUpper { get; set; }
        
        [RadioReportId("abd_m_100324", InstanceName = nameof(PeritonealCavityFindingType.Peritonitis))]
        public bool IsInvolvedQuadrantsLeftLower { get; set; }
        
        #endregion
        
        #region HemorrhageHematoma

		[RadioReportId("abd_m_100225", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
		public bool IsIntraperitoneal { get; set; }
       
        [RadioReportId("abd_m_100568", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
        public bool IsRetroperitoneumRightSide { get; set; }
        
        [RadioReportId("abd_m_100569", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
        public bool IsRetroperitoneumLeftSide { get; set; }

        [RadioReportId("abd_m_100478", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
        public bool IsSedimentationEffects { get; set; }
        
        [RadioReportId("abd_m_100479", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
        public bool IsFluidLevel { get; set; }
        
        [RadioReportId("abd_m_100480", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
        public bool IsSignsOfSuperinfection { get; set; }
        
        #endregion

        #region PeritonealMass
        
        
        [RadioReportId("abd_m_100528", InstanceName = nameof(PMLocalizationHomogeneityType), IsExportable = false)]
        public HomogeneityType PMLocalizationHomogeneityType { get; set; }

        [RadioReportId("abd_m_100536", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        public bool IsSpaceOccupying { get; set; }
        
        [RadioReportId("abd_m_100538", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        public bool IsAbdominalWall { get; set; }
        
        [RadioReportId("abd_m_100539", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        public bool IsSmallIntestine { get; set; }
        
        [RadioReportId("abd_m_100540", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        public bool IsColon { get; set; }
        
        [RadioReportId("abd_m_100542", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        public bool IsStomach { get; set; }
        
        [RadioReportId("abd_m_100565", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        public bool IsArteries { get; set; }
        
        [RadioReportId("abd_m_100566", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        public bool IsVeins { get; set; }
        
        [RadioReportId("abd_m_100237", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        public bool IsThickenedGreaterOmentum { get; set; }
        
        [RadioReportId("abd_m_100238", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        public bool IsContrastEnhancement { get; set; }
        
        [RadioReportId("abd_m_100288", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        public int? ThickenedGreaterOmentumMaxWidthInMm { get; set; }
        
        [RadioReportId("abd_m_100289", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        public bool IsPerforation { get; set; }
        
        [RadioReportId("abd_m_100239", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        public bool IsFreeGas { get; set; }
        
        [RadioReportId("abd_m_100290", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        public bool IsDDPostoperative { get; set; }
        
        [RadioReportId("abd_m_100240", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        public bool IsIleus { get; set; }
        
        [RadioReportId("abd_m_100242", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        public bool IsAscites { get; set; }
        
        [RadioReportId("abd_m_100246", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        public bool IsImpressionOfLiverSurface { get; set; }
        
        [RadioReportId("abd_m_100247", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        public bool IsImpressionOfSpleenSurface { get; set; }
        
        [RadioReportId("abd_m_100343", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        public bool IsEvidenceOfContrastMediaLatePhase { get; set; }
        
        [RadioReportId("abd_m_100345", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        public bool IsEncasementOfMesentericVessels { get; set; }
        
        [RadioReportId("abd_m_100346", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        public bool IsRetractionOfAdjacentIntestinalLoops { get; set; }

        [RadioReportId("abd_m_100438-1", InstanceName = nameof(PMStrongHomogeneityType), IsExportable = false)]
        public HomogeneityType PMStrongHomogeneityType { get; set; }

        [RadioReportId("abd_m_100257", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        [RadioReportId("abd_m_100257", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]

        public bool IsAboveOneLesionOfTheSameEntity { get; set; }

        #endregion

        #region RetroperitonealMass
        
        [RadioReportId("abd_m_100453", InstanceName = nameof(RMLocalizationHomogeneityType), IsExportable = false)]
        public HomogeneityType RMLocalizationHomogeneityType { get; set; }
        
        [RadioReportId("abd_m_100360", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        public bool IsUreter { get; set; }
        
        [RadioReportId("abd_m_100361", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        public bool IsBone { get; set; }
        
        [RadioReportId("abd_m_100362", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        public bool IsNeuralForamen { get; set; }
        
        [RadioReportId("abd_m_100363", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        public bool IsSpinalCanal { get; set; }
        
        [RadioReportId("abd_m_100364", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        public bool IsCutaneous { get; set; }
        
        [RadioReportId("abd_m_100365", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        public bool IsMPsoas { get; set; }
        
        [RadioReportId("abd_m_100463", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        public bool IsSpondylodiscitis { get; set; }

        [RadioReportId("abd_m_100464", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        public bool IsSpondylodiscitisSuspicionOf { get; set;}
        
        [RadioReportId("abd_m_100556-1", InstanceName = nameof(RMStrongHomogeneityType), IsExportable = false)]
        public HomogeneityType RMStrongHomogeneityType { get; set; }
        
        #endregion
        public bool CheckCondition(string customConditionId) =>
            customConditionId switch
            {
                nameof(PMLocalizationHomogeneityType) => FindingType.ToString() == customConditionId,
                nameof(PMStrongHomogeneityType) => FindingType.ToString() == customConditionId,
                nameof(RMLocalizationHomogeneityType) => FindingType.ToString() == customConditionId,
                nameof(RMStrongHomogeneityType) => FindingType.ToString() == customConditionId,
                nameof(PeritonealCavityFindingType.PeritonealMass) => FindingType.ToString() == customConditionId,
                nameof(PeritonealCavityFindingType.RetroperitonealMass) => FindingType.ToString() == customConditionId,
                _ => false
            };
    }
}