using System;
using System.Collections.Generic;
using RadioReport.AbdomenMRT.Domain.Constants;
using RadioReport.AbdomenMRT.Domain.Enums;
using RadioReport.AbdomenMRT.Domain.Enums.Kidneys;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.Common.Module.Logic.Interfaces;
using RadioReport.Common.Module.Logic.Models.Pages;

namespace RadioReport.AbdomenMRT.Domain.Models
{
    public class KidneysFinding : KidneysFindingBase, IRadioReportIdConditionEvaluator, IImageFileContainer
    {
        #region Common
		[RadioReportId("abd_m_070xxx-l", InstanceName = nameof(SideType), IsExportable = false)]
		public SideType SideType { get; set; }
		
		[RadioReportId("abd_m_070261", InstanceName = nameof(KidneysFindingType.Mass))]
		[RadioReportId("abd_m_070282", InstanceName = nameof(KidneysFindingType.DecreasedRenalVolume))]
		[RadioReportId("abd_m_0703112", InstanceName = nameof(KidneysFindingType.IncreasedRenalVolume))]
		public KidneysDifferentialDiagnosisType KidneysDifferentialDiagnosisType1 { get; set; }
		
		[RadioReportId("abd_m_070345", InstanceName = nameof(KidneysFindingType.Mass))]
		[RadioReportId("abd_m_070284", InstanceName = nameof(KidneysFindingType.DecreasedRenalVolume))]
		[RadioReportId("abd_m_0703115", InstanceName = nameof(KidneysFindingType.IncreasedRenalVolume))]
		public KidneysDifferentialDiagnosisType KidneysDifferentialDiagnosisType2 { get; set; }
		
		[RadioReportId("abd_m_070465", InstanceName = nameof(KidneysFindingType.Mass))]
		public KidneysDifferentialDiagnosisType KidneysDifferentialDiagnosisType3 { get; set; }

		[RadioReportId("abd_m_070262", InstanceName = nameof(KidneysFindingType.Mass))]
		[RadioReportId("abd_m_070262", InstanceName = nameof(KidneysFindingType.DecreasedRenalVolume))]
		[RadioReportId("abd_m_0703113", InstanceName = nameof(KidneysFindingType.IncreasedRenalVolume))]
        [RadioReportId("abd_m_070421", InstanceName = nameof(KidneysFindingType.ObstructiveNephropathy))]
		public bool IsSuspicionOf { get; set; }

		[RadioReportId("abd_m_070346", InstanceName = nameof(KidneysFindingType.Mass))]
		[RadioReportId("abd_m_070285", InstanceName = nameof(KidneysFindingType.DecreasedRenalVolume))]
		[RadioReportId("abd_m_0703116", InstanceName = nameof(KidneysFindingType.IncreasedRenalVolume))]
		public bool IsSubordinate { get; set; }

		[RadioReportId("abd_m_070270", InstanceName = nameof(KidneysFindingType.DecreasedRenalVolume))]
		[RadioReportId("abd_m_070270", InstanceName = nameof(KidneysFindingType.IncreasedRenalVolume))]
		public bool IsRight { get; set; }

		[RadioReportId("abd_m_070271", InstanceName = nameof(KidneysFindingType.DecreasedRenalVolume))]
		[RadioReportId("abd_m_070271", InstanceName = nameof(KidneysFindingType.IncreasedRenalVolume))]
		public bool IsLeft { get; set; }

        [RadioReportId("abd_m_070590", InstanceName = nameof(KidneysFindingType.ObstructiveNephropathy))]
        [RadioReportId("abd_m_070545", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsMoreThanOneLesionSameEntity { get; set; }
        
        [RadioReportId("abd_m_070274", InstanceName = nameof(KidneysFindingType.DecreasedRenalVolume))]
        [RadioReportId("abd_m_070274", InstanceName = nameof(KidneysFindingType.IncreasedRenalVolume))]
        public int? CraniocaudalDiameterInMm { get; set; }
        
        [RadioReportId("abd_m_070277", InstanceName = nameof(KidneysFindingType.DecreasedRenalVolume))]
        [RadioReportId("abd_m_070277", InstanceName = nameof(KidneysFindingType.IncreasedRenalVolume))]
        public int? DiameterKidneySecondPlaneInMm { get; set; }
        
        [RadioReportId("abd_m_070280", InstanceName = nameof(KidneysFindingType.DecreasedRenalVolume))]
        [RadioReportId("abd_m_070280", InstanceName = nameof(KidneysFindingType.IncreasedRenalVolume))]
        public int? DiameterKidneyThirdPlaneInMm { get; set; }

        [RadioReportId("abd_m_070356", InstanceName = nameof(KidneysFindingType.DecreasedRenalVolume))]
        [RadioReportId("abd_m_070356", InstanceName = nameof(KidneysFindingType.IncreasedRenalVolume))]
        public SignalTypeExtended RenalCortexT1wSignal { get; set; }
        
        [RadioReportId("abd_m_070358", InstanceName = nameof(KidneysFindingType.DecreasedRenalVolume))]
        [RadioReportId("abd_m_070358", InstanceName = nameof(KidneysFindingType.IncreasedRenalVolume))]
        public SignalTypeExtended RenalCortexT2wSignal { get; set; }
        
        [RadioReportId("abd_m_070360", InstanceName = nameof(KidneysFindingType.DecreasedRenalVolume))]
        [RadioReportId("abd_m_070360", InstanceName = nameof(KidneysFindingType.IncreasedRenalVolume))]
        public bool IsRenalCortexFocal { get; set; }
        
        [RadioReportId("abd_m_070473", InstanceName = nameof(KidneysFindingType.DecreasedRenalVolume))]
        [RadioReportId("abd_m_070473", InstanceName = nameof(KidneysFindingType.IncreasedRenalVolume))]
        public SignalTypeExtended KidneyMarrowT1wSignal { get; set; }
        
        [RadioReportId("abd_m_070475", InstanceName = nameof(KidneysFindingType.DecreasedRenalVolume))]
        [RadioReportId("abd_m_070475", InstanceName = nameof(KidneysFindingType.IncreasedRenalVolume))]
        public SignalTypeExtended KidneyMarrowT2wSignal { get; set; }
        
        [RadioReportId("abd_m_070477", InstanceName = nameof(KidneysFindingType.DecreasedRenalVolume))]
        [RadioReportId("abd_m_070477", InstanceName = nameof(KidneysFindingType.IncreasedRenalVolume))]
        public bool IsKidneyMarrowFocal { get; set; }
        
        [RadioReportId("abd_m_070570", InstanceName = nameof(KidneysFindingType.DecreasedRenalVolume))]
        [RadioReportId("abd_m_070570", InstanceName = nameof(KidneysFindingType.IncreasedRenalVolume))]
        public bool IsStreakyInflammatoryInfiltrationPerirenalAdiposeTissue { get; set; }
        
        [RadioReportId("abd_m_070571", InstanceName = nameof(KidneysFindingType.DecreasedRenalVolume))]
        [RadioReportId("abd_m_070571", InstanceName = nameof(KidneysFindingType.IncreasedRenalVolume))]
        public bool IsThickeningGerotaFascia { get; set; }
        
        [RadioReportId("abd_m_070572", InstanceName = nameof(KidneysFindingType.DecreasedRenalVolume))]
        [RadioReportId("abd_m_070572", InstanceName = nameof(KidneysFindingType.IncreasedRenalVolume))]
        public bool IsMultipleGasInclusions { get; set; }
        
        public ContrastEnhancementQuantitativeType ContrastEnhancementRenalParenchymaQuantitative { get; set; }

        [RadioReportId(
            "abd_m_070568-l",
            InstanceName = nameof(KidneysFinding.ContrastEnhancementQuantitativeStrongType),
            IsExportable = false
        )]
        public HomogeneityType ContrastEnhancementQuantitativeStrongType { get; set; }
        
        #endregion
        #region NormVariantOrAnomaly
        
        [RadioReportId("abd_m_070302-l", InstanceName = nameof(KidneysFinding.NormVariantOrAnomalyType), IsExportable = false)]
        public NormVariantOrAnomalyType NormVariantOrAnomalyType { get; set; }
        
        [RadioReportId("abd_m_070402", InstanceName = nameof(KidneysFindingType.NormVariantOrAnomaly))]
        public bool IsAgenesis { get; set; }
        
        [RadioReportId("abd_m_070403", InstanceName = nameof(KidneysFindingType.NormVariantOrAnomaly))]
        public bool IsAplasia { get; set; }
        
        [RadioReportId("abd_m_070404", InstanceName = nameof(KidneysFindingType.NormVariantOrAnomaly))]
        public bool IsEnlargementOfTheContralateralKidney { get; set; }
        
        [RadioReportId("abd_m_070405", InstanceName = nameof(KidneysFindingType.NormVariantOrAnomaly))]
        public bool IsHypoplasia { get; set; }
        
        [RadioReportId("abd_m_070406", InstanceName = nameof(KidneysFindingType.NormVariantOrAnomaly))]
        public bool IsLobarDysmorphia { get; set; }
        
        [RadioReportId("abd_m_0704131", InstanceName = nameof(KidneysFindingType.NormVariantOrAnomaly))]
        public bool IsDDMass { get; set; }
        
        [RadioReportId("abd_m_070407", InstanceName = nameof(KidneysFindingType.NormVariantOrAnomaly))]
        public bool IsDuplexCollectingSystem { get; set; }
        
        [RadioReportId("abd_m_070408", InstanceName = nameof(KidneysFindingType.NormVariantOrAnomaly))]
        public bool IsDoubleKidney { get; set; }
        
        [RadioReportId("abd_m_070409", InstanceName = nameof(KidneysFindingType.NormVariantOrAnomaly))]
        public bool IsRenalEctopy { get; set; }
        
        [RadioReportId("abd_m_070410", InstanceName = nameof(KidneysFindingType.NormVariantOrAnomaly))]
        public bool IsFloatingKidney { get; set; }
        
        [RadioReportId("abd_m_070503", InstanceName = nameof(KidneysFindingType.NormVariantOrAnomaly))]
        public bool IsFusionAnomalies { get; set; }
        
        public FusionAnomaliesKidneyType FusionAnomaliesKidneyType { get; set; }
        
        [RadioReportId("abd_m_070507", InstanceName = nameof(KidneysFindingType.NormVariantOrAnomaly))]
        public bool IsNonrotation {get;set;}
        
        [RadioReportId("abd_m_070508", InstanceName = nameof(KidneysFindingType.NormVariantOrAnomaly))]
        public bool IsPersistentFetalLobulation {get;set;}
        
        public RenalArteryType RenalArteryType { get; set; }
        
        public PolarArteryType PolarArteryType { get; set; }
        
        public RenalVeinsType RenalVeinsType { get; set; }
        
        [RadioReportId("abd_m_070489", InstanceName = nameof(KidneysFindingType.NormVariantOrAnomaly))]
        public bool IsBifurcatedLeftRenalVeinAnteriorAndPosteriorAorta {get; set;}
        
        public UreterType UreterType { get; set; }
        
        #endregion
        #region ObstructiveNephropathy

		[RadioReportId("abd_m_070206", InstanceName = nameof(KidneysFindingType.ObstructiveNephropathy))]
		public SeverityType SeverityType { get; set; }

		[RadioReportId("abd_m_070213", InstanceName = nameof(KidneysFindingType.ObstructiveNephropathy), CustomConditionName = nameof(SeverityType.Grade2))]
		[RadioReportId("abd_m_070218", InstanceName = nameof(KidneysFindingType.ObstructiveNephropathy), CustomConditionName = nameof(SeverityType.Grade3))]
		public bool IsDilatationOfTheRenalPelvisAndTheRenalCalices { get; set; }

		[RadioReportId("abd_m_070210", InstanceName = nameof(KidneysFindingType.ObstructiveNephropathy), CustomConditionName = nameof(SeverityType.Grade1))]
		[RadioReportId("abd_m_070215", InstanceName = nameof(KidneysFindingType.ObstructiveNephropathy), CustomConditionName = nameof(SeverityType.Grade2))]
		[RadioReportId("abd_m_070220", InstanceName = nameof(KidneysFindingType.ObstructiveNephropathy), CustomConditionName = nameof(SeverityType.Grade3))]
		public int? MaxDilatationInMm { get; set; }

		[RadioReportId("abd_m_070224", InstanceName = nameof(KidneysFindingType.ObstructiveNephropathy))]
		public int? MaxDilatationParenchymaInMm { get; set; }

		[RadioReportId("abd_m_070208", InstanceName = nameof(KidneysFindingType.ObstructiveNephropathy))]
		public bool IsRenalPelvisDilatation { get; set; }

		[RadioReportId("abd_m_070222", InstanceName = nameof(KidneysFindingType.ObstructiveNephropathy))]
		public bool IsReducedRenalParenchymaThickness { get; set; }

		[RadioReportId("abd_m_070227", InstanceName = nameof(KidneysFindingType.ObstructiveNephropathy))]
		public bool IsLossOfParenchymaHydronephrosis { get; set; }

        [RadioReportId("abd_m_070307", InstanceName = nameof(KidneysFindingType.ObstructiveNephropathy))]
        public bool IsSideDifferenceContrastEnhancement { get; set; }
        
        [RadioReportId("abd_m_070308", InstanceName = nameof(KidneysFindingType.ObstructiveNephropathy))]
        public bool IsLossCorticomedullaryDifferentiation { get; set; }
        
        [RadioReportId("abd_m_070309", InstanceName = nameof(KidneysFindingType.ObstructiveNephropathy))]
        public bool IsSwollenKidney { get; set; }

        [RadioReportId("abd_m_070310", InstanceName = nameof(KidneysFindingType.ObstructiveNephropathy))]
        public bool IsIndurationPerirenal { get; set; }
        
        [RadioReportId("abd_m_070311", InstanceName = nameof(KidneysFindingType.ObstructiveNephropathy))]
        public bool IsPerirenalFluid { get; set; }
        
        [RadioReportId("abd_m_070313", InstanceName = nameof(KidneysFindingType.ObstructiveNephropathy))]
        public bool IsDilatationUreter { get; set; }
        
        [RadioReportId("abd_m_070315", InstanceName = nameof(KidneysFindingType.ObstructiveNephropathy))]
        public int? DilatationInMm { get; set; }
        
        [RadioReportId("abd_m_070317", InstanceName = nameof(KidneysFindingType.ObstructiveNephropathy))]
        public bool IsContrastEnhancementUreteralWall{ get; set; }
        
        [RadioReportId("abd_m_070420", InstanceName = nameof(KidneysFindingType.ObstructiveNephropathy))]
        public AssociatedCausalFindingsType AssociatedCausalFindingsType { get; set; }

        [RadioReportId("abd_m_070492", InstanceName = nameof(KidneysFindingType.ObstructiveNephropathy))]
        public bool IsRenalCalice { get; set; }
        
        [RadioReportId("abd_m_070493", InstanceName = nameof(KidneysFindingType.ObstructiveNephropathy))]
        public bool IsRenalPelvis { get; set; }
                
        [RadioReportId("abd_m_070494", InstanceName = nameof(KidneysFindingType.ObstructiveNephropathy))]
        public bool IsUreter { get; set; }
        
        [RadioReportId("abd_m_070495", InstanceName = nameof(KidneysFindingType.ObstructiveNephropathy))]
        public UrolithiasisDetailsUreterType UrolithiasisDetailsUreterType { get; set; }

        [RadioReportId("abd_m_070496", InstanceName = nameof(KidneysFindingType.ObstructiveNephropathy))]
        public bool IsUrinaryBladder { get; set; }
        
        [RadioReportId("abd_m_070497", InstanceName = nameof(KidneysFindingType.ObstructiveNephropathy))]
        public bool IsOstiumRight { get; set; }
                
        [RadioReportId("abd_m_070498", InstanceName = nameof(KidneysFindingType.ObstructiveNephropathy))]
        public bool IsOstiumLeft { get; set; }
                        
        [RadioReportId("abd_m_070499", InstanceName = nameof(KidneysFindingType.ObstructiveNephropathy))]
        public bool IsUrethra { get; set; }
        
        [RadioReportId("abd_m_0705107", InstanceName = nameof(KidneysFindingType.ObstructiveNephropathy))]
        public int? MaxDiameterConcrementInMm { get; set; }
        
        [RadioReportId("abd_m_070588", InstanceName = nameof(KidneysFindingType.ObstructiveNephropathy))]
        public bool IsPhlebolite { get; set; }
        
        [RadioReportId("abd_m_070589", InstanceName = nameof(KidneysFindingType.ObstructiveNephropathy))]
        public bool IsPapillaryCalcifications { get; set; }

        public EnlargedUterusDetailsType EnlargedUterusDetailsType { get; set; }
        
        [RadioReportId("abd_m_070294", InstanceName = nameof(KidneysFindingType.ObstructiveNephropathy))]
        public bool IsFornixRupture { get; set; }
        
        [RadioReportId("abd_m_070295", InstanceName = nameof(KidneysFindingType.ObstructiveNephropathy))]
        public bool IsPyelonephritis { get; set; }
        
        [RadioReportId("abd_m_070297", InstanceName = nameof(KidneysFindingType.ObstructiveNephropathy))]
        public bool IsAmpullaryTypeOfRenalPelvis { get; set; }
        
        [RadioReportId("abd_m_070298", InstanceName = nameof(KidneysFindingType.ObstructiveNephropathy))]
        public bool IsRenalSinusCyst { get; set; }
        
        #endregion
        #region Mass

        [RadioReportId("abd_m_070111-l", InstanceName = nameof(InstanceNames.Kidneys), IsExportable = false)]
        public DescriptionType DescriptionType { get; set; }

		[RadioReportId("abd_m_070231", InstanceName = nameof(KidneysFindingType.Mass))]
		public bool IsHistologyKnown { get; set; }

		public HistologyKnownType HistologyKnownType { get; set; }	

		[RadioReportId("abd_m_070320-l", InstanceName = nameof(KidneysFinding.MassSideType), IsExportable=false)]
		public SideType MassSideType { get; set; }

		[RadioReportId("abd_m_070331", InstanceName = nameof(KidneysFindingType.Mass))]
		public bool IsCompletelyIntrarenal { get; set; }

		[RadioReportId("abd_m_070323-l", InstanceName = nameof(KidneysFinding.LocalizationType), IsExportable=false)]
		public LocalizationType LocalizationType { get; set; }
		
		[RadioReportId("abd_m_070264", InstanceName = nameof(KidneysFindingType.Mass))]
		public BosniakClassificationType BosniakClassificationType1 { get; set; } 
		
		[RadioReportId("abd_m_070348", InstanceName = nameof(KidneysFindingType.Mass))]
		public BosniakClassificationType BosniakClassificationType2 { get; set; } 
		
		[RadioReportId("abd_m_070467", InstanceName = nameof(KidneysFindingType.Mass))]
		public BosniakClassificationType BosniakClassificationType3 { get; set; } 
        
		[RadioReportId("abd_m_070546", InstanceName = nameof(KidneysFindingType.Mass))]
		public bool IsLocalization { get; set; }

		[RadioReportId("abd_m_070547-l", InstanceName = nameof(KidneysFinding.MassSideMoreThanOneLesionType), IsExportable=false)]
		public SideType MassSideMoreThanOneLesionType { get; set; }

        [RadioReportId("abd_m_070551", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsUpperPoleKidney {get;set;}
        
        [RadioReportId("abd_m_070552", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsCranialThird {get;set;}
        
        [RadioReportId("abd_m_070553", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsMiddleThird {get;set;}
        
        [RadioReportId("abd_m_070554", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsLowerThird {get;set;}
        
        [RadioReportId("abd_m_070555", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsLowerPoleKidney {get;set;}
        
        [RadioReportId("abd_m_070556", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsRenalHilus {get;set;}
        
		[RadioReportId("abd_m_070558", InstanceName = nameof(KidneysFindingType.Mass))]
		public bool IsDetailsCompletelyIntrarenal { get; set; }
        
        [RadioReportId("abd_m_070431", InstanceName = nameof(KidneysFindingType.Mass))]
        public int? MassChar2ExtensionSizeInMm { get; set; }
        
        [RadioReportId("abd_m_070434", InstanceName = nameof(KidneysFindingType.Mass))]
        public int? MassChar2SecondPlaneInMm { get; set; }
        
        [RadioReportId("abd_m_070437", InstanceName = nameof(KidneysFindingType.Mass))]
        public int? MassChar2ThirdPlaneInMm { get; set; }
        
        public FormType FormType { get; set; }
        
        [RadioReportId("abd_m_070235", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsFat { get; set; }
        
        public FatType FatType { get; set; }
        
        [RadioReportId("abd_m_070238", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsCysts { get; set; }
        
        [RadioReportId("abd_m_070239", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsCalcification { get; set; }
        
        public CalcificationType CalcificationType { get; set; }
        
        [RadioReportId("abd_m_070242", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsSepta { get; set; }
        
        [RadioReportId("abd_m_070243", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsNodularThickening { get; set; }
        
        [RadioReportId("abd_m_070244", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsDelicate { get; set; }
        
        [RadioReportId("abd_m_070245", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsSeptaCalcification { get; set; }
        
        [RadioReportId("abd_m_070299", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsNecrosis { get; set; }
        
        [RadioReportId("abd_m_0702100", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsCentralScar { get; set; }
        
        [RadioReportId("abd_m_0702101", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsHemosiderin { get; set; }
        
        [RadioReportId("abd_m_070395", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsExophytic { get; set; }
        
        [RadioReportId("abd_m_070396", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsAngularInterfaceSign { get; set; }
        
        [RadioReportId("abd_m_070397", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsFungalConfiguration { get; set; }
        
        [RadioReportId("abd_m_070399", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsPlaqueLikeGrowthRenalPelvis { get; set; }
        
        [RadioReportId("abd_m_0703100", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsObstructionAndHydronephrosis { get; set; }
        
        [RadioReportId("abd_m_0703101", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsCommunicationWithRenalPelvis { get; set; }
        
        [RadioReportId("abd_m_0703102", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsBeanShaped { get; set; }
        
        [RadioReportId("abd_m_0704104", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsInfiltration { get; set; }
        
        [RadioReportId("abd_m_0704105", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsInfiltrationRenalPelvis { get; set; }
        
        [RadioReportId("abd_m_0704106", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsInfiltrationPerirenalSpace { get; set; }
        
        [RadioReportId("abd_m_0704107", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsInfiltrationMusculature { get; set; }
        
        [RadioReportId("abd_m_0704108", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsInfiltrationAbdominalWall { get; set; }
        
        [RadioReportId("abd_m_0704109", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsInfiltrationAdrenalGlands { get; set; }
        
        [RadioReportId("abd_m_0704110", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsInfiltrationLiver { get; set; }
        
        [RadioReportId("abd_m_0704111", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsInfiltrationSpleen { get; set; }
        
        [RadioReportId("abd_m_0704112", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsInfiltrationIntestine { get; set; }
        
        [RadioReportId("abd_m_0704113", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsInfiltrationBones { get; set; }
    
        [RadioReportId("abd_m_0705101", InstanceName = nameof(KidneysFindingType.Mass))]
        public SignalTypeExtended ExcretoryPhase { get; set; }
        
        [RadioReportId("abd_m_0705103", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsSpokeWheelEnhancementPattern { get; set; }
        
        [RadioReportId("abd_m_0702103", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsDiffusionRestriction { get; set; }
        
        [RadioReportId("abd_m_0703121", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsCapsule { get; set; }
        
        [RadioReportId("abd_m_0703122", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsAssociatedFindingsNodularThickening { get; set; }
        
        [RadioReportId("abd_m_0703123", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsAssociatedFindingsCalcification { get; set; }
        
        [RadioReportId("abd_m_0703124", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsPseudoCapsularExtension { get; set; }
        
        [RadioReportId("abd_m_0703125", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsInfiltrationPerirenalAdiposeTissue { get; set; }
        
        [RadioReportId("abd_m_0703127", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsHemorrhage { get; set; }
        
        [RadioReportId("abd_m_0703128", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsLocoregionalLN { get; set; }
        
        [RadioReportId("abd_m_0703130", InstanceName = nameof(KidneysFindingType.Mass))]
        public int? SADInMm { get; set; }
        
        [RadioReportId("abd_m_0704123", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsVascularInfiltration { get; set; }
        
        [RadioReportId("abd_m_0704125-l", InstanceName = nameof(KidneysFinding.VascularInfiltrationType), IsExportable = false)]
        public NormVariantOrAnomalyType VascularInfiltrationType { get; set; }
        
        [RadioReportId("abd_m_0704127", InstanceName = nameof(KidneysFindingType.Mass))]
        public ExtensionType ExtensionType { get; set; }
        
        [RadioReportId("abd_m_0704128", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsCompleteOcclusion { get; set; }
        
        [RadioReportId("abd_m_0704129", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsIntramuralInfiltration { get; set; }
        
        [RadioReportId("abd_m_0704114", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsRetroperitonealCollateralVessels { get; set; }
        
        [RadioReportId("abd_m_0704115", InstanceName = nameof(KidneysFindingType.Mass))]
        public bool IsFluidAroundCyst { get; set; }
        
        [RadioReportId("abd_m_0702105", InstanceName = nameof(KidneysFindingType.Mass))]
        public int? DD1FollowUpMonths { get; set; }
        
        [RadioReportId("abd_m_0702104-1", InstanceName = nameof(DD1ModalityType), IsExportable = false)]
        public ModalityType DD1ModalityType { get; set; }
        
        [RadioReportId("abd_m_0703104", InstanceName = nameof(KidneysFindingType.Mass))]
        public int? DD2FollowUpMonths { get; set; }
        
        [RadioReportId("abd_m_0703103-1", InstanceName = nameof(DD2ModalityType), IsExportable = false)]
        public ModalityType DD2ModalityType { get; set; }
        
        [RadioReportId("abd_m_0704117", InstanceName = nameof(KidneysFindingType.Mass))]
        public int? DD3FollowUpMonths { get; set; }
        
        [RadioReportId("abd_m_0704116-1", InstanceName = nameof(DD3ModalityType), IsExportable = false)]
        public ModalityType DD3ModalityType { get; set; }
        
		#endregion
        #region DecreasedRenalVolume

        [RadioReportId("abd_m_070560", InstanceName = nameof(KidneysFindingType.DecreasedRenalVolume))]
        public bool IsIrregularNarrowingRenalParenchyma { get; set; }
        
        [RadioReportId("abd_m_070561", InstanceName = nameof(KidneysFindingType.DecreasedRenalVolume))]
        public bool IsDeformationCalices { get; set; }
        
        [RadioReportId("abd_m_070562", InstanceName = nameof(KidneysFindingType.DecreasedRenalVolume))]
        public bool IsMultipleScars { get; set; }
        
        [RadioReportId("abd_m_070563", InstanceName = nameof(KidneysFindingType.DecreasedRenalVolume))]
        public bool IsReductionCortexAndMedulla { get; set; }
        
        #endregion
        #region IncreasedRenalVolume 
        
        public MultipleGasInclusionsLocalizationType MultipleGasInclusionsLocalizationType { get; set; }
        
        #endregion
        #region VascularNephropathy
        
		public PathologyType PathologyType { get; set; }

        [RadioReportId("abd_m_070361-l", InstanceName = nameof(KidneysFinding.RenalInfarctionLocalizationType), IsExportable = false)]
        public LocalizationType RenalInfarctionLocalizationType { get; set; }
        
        [RadioReportId("abd_m_070370", InstanceName = nameof(KidneysFindingType.VascularNephropathy))]
        public int? RenalInfarctionExtensionSizeInMm { get; set; }
        
        [RadioReportId("abd_m_070373", InstanceName = nameof(KidneysFindingType.VascularNephropathy))]
        public int? RenalInfarctionSecondPlaneInMm { get; set; }
        
        [RadioReportId("abd_m_070376", InstanceName = nameof(KidneysFindingType.VascularNephropathy))]
        public int? RenalInfarctionThirdPlaneInMm { get; set; }
        
        [RadioReportId("abd_m_070481", InstanceName = nameof(KidneysFindingType.VascularNephropathy))]
        public SignalType RenalInfarctionT1wSignal { get; set; }
        
        [RadioReportId("abd_m_070484", InstanceName = nameof(KidneysFindingType.VascularNephropathy))]
        public SignalType RenalInfarctionT2wSignal { get; set; }
        
        [RadioReportId("abd_m_070576", InstanceName = nameof(KidneysFindingType.VascularNephropathy))]
        public bool IsWedgeShapedDefect { get; set; }
        
        [RadioReportId("abd_m_070577", InstanceName = nameof(KidneysFindingType.VascularNephropathy))]
        public bool IsMissingCMEnhancement { get; set; }
        
        [RadioReportId("abd_m_070578", InstanceName = nameof(KidneysFindingType.VascularNephropathy))]
        public bool IsCorticalRimSign { get; set; }
        
        [RadioReportId("abd_m_070579", InstanceName = nameof(KidneysFindingType.VascularNephropathy))]
        public bool IsFibroticChangesOrScarTissue { get; set; }
        
        [RadioReportId("abd_m_070580", InstanceName = nameof(KidneysFindingType.VascularNephropathy))]
        public bool IsDeformationsBarkContour { get; set; }
        
        [RadioReportId("abd_m_070581", InstanceName = nameof(KidneysFindingType.VascularNephropathy))]
        public bool IsShrinkageInfarctedTissue { get; set; }
        
        [RadioReportId("abd_m_070582", InstanceName = nameof(KidneysFindingType.VascularNephropathy))]
        public bool IsDissectionRenalArtery { get; set; }
        
        [RadioReportId("abd_m_070583", InstanceName = nameof(KidneysFindingType.VascularNephropathy))]
        public bool IsStenosisOrOcclusionRenalArtery { get; set; }
        
        public RenalInfarctionCharacterizationType RenalInfarctionCharacterizationType { get; set; }
        
        [RadioReportId("abd_m_070379", InstanceName = nameof(KidneysFindingType.VascularNephropathy))]
        public bool IsOnyMedullaryContrastEnhancement { get; set; }
        
        [RadioReportId("abd_m_070380", InstanceName = nameof(KidneysFindingType.VascularNephropathy))]
        public bool IsNarrowContrastedRimAroundCortex { get; set; }
        
        [RadioReportId("abd_m_070382", InstanceName = nameof(KidneysFindingType.VascularNephropathy))]
        public bool IsCorticalCalcifications { get; set; }
        
        [RadioReportId("abd_m_070383", InstanceName = nameof(KidneysFindingType.VascularNephropathy))]
        public bool IsAtrophy { get; set; }
        
        [RadioReportId("abd_m_070384", InstanceName = nameof(KidneysFindingType.VascularNephropathy))]
        public bool IsCompleteRenalCorticalNecrosis { get; set; }
        
		[RadioReportId("abd_m_070386", InstanceName = nameof(KidneysFindingType.VascularNephropathy))]
		public int? DilatationOfTheRenalVeinInMm { get; set; }

		[RadioReportId("abd_m_070389", InstanceName = nameof(KidneysFindingType.VascularNephropathy))]
		public bool IsFillingDefectAfterContrastAdministration { get; set; }

		[RadioReportId("abd_m_070390", InstanceName = nameof(KidneysFindingType.VascularNephropathy))]
		public bool IsNodularThrombusEnhancement { get; set; }

		[RadioReportId("abd_m_070391", InstanceName = nameof(KidneysFindingType.VascularNephropathy))]
		public bool IsDiffusionRestrictionInTheThrombus { get; set; }

		[RadioReportId("abd_m_070392", InstanceName = nameof(KidneysFindingType.VascularNephropathy))]
		public bool IsAlteredRenalPerfusion { get; set; }

		[RadioReportId("abd_m_070486", InstanceName = nameof(KidneysFindingType.VascularNephropathy))]
		public bool IsTumorThrombosis { get; set; }
        
        #endregion
        
        public bool CheckCondition(string customConditionId) =>
            customConditionId switch
            {
                nameof(SeverityType.Grade1)                       => SeverityType.ToString() == customConditionId,
                nameof(SeverityType.Grade2)                       => SeverityType.ToString() == customConditionId,
                nameof(SeverityType.Grade3)                       => SeverityType.ToString() == customConditionId,
                nameof(SeverityType.Grade4)                       => SeverityType.ToString() == customConditionId,
                nameof(KidneysFindingType.NormVariantOrAnomaly)   => FindingType.ToString() == customConditionId,
                nameof(KidneysFindingType.ObstructiveNephropathy) => FindingType.ToString() == customConditionId,
                nameof(KidneysFindingType.VascularNephropathy)    => FindingType.ToString() == customConditionId,
                nameof(KidneysFindingType.Mass)                   => FindingType.ToString() == customConditionId,
                nameof(KidneysFindingType.DecreasedRenalVolume)   => FindingType.ToString() == customConditionId,
                nameof(KidneysFindingType.IncreasedRenalVolume)   => FindingType.ToString() == customConditionId,
                _                                                 => false
            };
        
        #region ImageFile

            #region NormVariantOrAnomaly

            [RadioReportId("uni_07_003")]
            public string NormVariantOrAnomalySerialNumber { get; set; }

            [RadioReportId("uni_07_005")]
            public string NormVariantOrAnomalyPictureNumber { get; set; }

            public Guid? NormVariantOrAnomalyImageFileId { get; set; }

            [RadioReportId("uni_07_007", InstanceName ="AbdomenMRT.KidneysFinding", IsExportable = false)]
            public ImageFile NormVariantOrAnomalyImageFile { get; set; }
            
            #endregion

            #region ObstructiveNephropathy CHAR_I
            
            [RadioReportId("uni_07_003_01", CustomConditionName = nameof(KidneysFindingType.ObstructiveNephropathy) +  nameof(AssociatedCausalFindingsType.Urolithiasis))]
            public string ObstructiveNephropathyChar1SerialNumber { get; set; }

            [RadioReportId("uni_07_005_01", CustomConditionName = nameof(KidneysFindingType.ObstructiveNephropathy) +  nameof(AssociatedCausalFindingsType.Urolithiasis))]
            public string ObstructiveNephropathyChar1PictureNumber { get; set; }

            public Guid? ObstructiveNephropathyChar1ImageFileId { get; set; }

            [RadioReportId("uni_07_007_01", InstanceName ="AbdomenMRT.KidneysFinding.Char1", IsExportable = false, CustomConditionName = nameof(KidneysFindingType.ObstructiveNephropathy) +  nameof(AssociatedCausalFindingsType.Urolithiasis))]
            public ImageFile ObstructiveNephropathyChar1ImageFile { get; set; }
            
            #endregion
            
            #region ObstructiveNephropathy CHAR_II
            
            [RadioReportId("uni_07_003_02", CustomConditionName = nameof(KidneysFindingType.ObstructiveNephropathy))]
            public string ObstructiveNephropathyChar2SerialNumber { get; set; }

            [RadioReportId("uni_07_005_02", CustomConditionName = nameof(KidneysFindingType.ObstructiveNephropathy))]
            public string ObstructiveNephropathyChar2PictureNumber { get; set; }

            public Guid? ObstructiveNephropathyChar2ImageFileId { get; set; }

            [RadioReportId("uni_07_007_02", InstanceName ="AbdomenMRT.KidneysFinding.Char2", IsExportable = false,
                CustomConditionName = nameof(KidneysFindingType.ObstructiveNephropathy))]
            public ImageFile ObstructiveNephropathyChar2ImageFile { get; set; }
            
            #endregion
            
            #region Mass
            
            [RadioReportId("uni_07_003")]
            public string MassSerialNumber { get; set; }

            [RadioReportId("uni_07_005")]
            public string MassPictureNumber { get; set; }

            public Guid? MassImageFileId { get; set; }

            [RadioReportId("uni_07_007", InstanceName ="AbdomenMRT.KidneysFinding", IsExportable = false)]
            public ImageFile MassImageFile { get; set; }
            
            #endregion
            
            #region DecreasedRenalVolume
            
            [RadioReportId("uni_07_003")]
            public string DecreasedRenalVolumeSerialNumber { get; set; }

            [RadioReportId("uni_07_005")]
            public string DecreasedRenalVolumePictureNumber { get; set; }

            public Guid? DecreasedRenalVolumeImageFileId { get; set; }

            [RadioReportId("uni_07_007", InstanceName ="AbdomenMRT.KidneysFinding", IsExportable = false)]
            public ImageFile DecreasedRenalVolumeImageFile { get; set; }
            
            #endregion
            
            #region IncreasedRenalVolume
            
            [RadioReportId("uni_07_003")]
            public string IncreasedRenalVolumeSerialNumber { get; set; }

            [RadioReportId("uni_07_005")]
            public string IncreasedRenalVolumePictureNumber { get; set; }

            public Guid? IncreasedRenalVolumeImageFileId { get; set; }

            [RadioReportId("uni_07_007", InstanceName ="AbdomenMRT.KidneysFinding", IsExportable = false)]
            public ImageFile IncreasedRenalVolumeImageFile { get; set; }
            
            #endregion
            
            #region VascularNephropathy
            
            [RadioReportId("uni_07_003")]
            public string VascularNephropathySerialNumber { get; set; }

            [RadioReportId("uni_07_005")]
            public string VascularNephropathyPictureNumber { get; set; }

            public Guid? VascularNephropathyImageFileId { get; set; }

            [RadioReportId("uni_07_007", InstanceName ="AbdomenMRT.KidneysFinding", IsExportable = false)]
            public ImageFile VascularNephropathyImageFile { get; set; }
            
            #endregion
            
        public void DropImageFile(Guid? imageFileId)
        {
            if (imageFileId == NormVariantOrAnomalyImageFileId)
            {
                SetImageFile(null, nameof(NormVariantOrAnomalyImageFile));
            }
            else if (imageFileId == ObstructiveNephropathyChar1ImageFileId)
            {
                SetImageFile(null, nameof(ObstructiveNephropathyChar1ImageFile));
            }
            else if (imageFileId == ObstructiveNephropathyChar2ImageFileId)
            {
                SetImageFile(null, nameof(ObstructiveNephropathyChar2ImageFile));
            }
            else if (imageFileId == MassImageFileId)
            {
                SetImageFile(null, nameof(MassImageFile));
            }
            else if (imageFileId == DecreasedRenalVolumeImageFileId)
            {
                SetImageFile(null, nameof(DecreasedRenalVolumeImageFile));
            }
            else if (imageFileId == IncreasedRenalVolumeImageFileId)
            {
                SetImageFile(null, nameof(IncreasedRenalVolumeImageFile));
            }
            else if (imageFileId == VascularNephropathyImageFileId)
            {
                SetImageFile(null, nameof(VascularNephropathyImageFile));
            }
        }

        public Guid? GetImageFileGuid(string fileType)
        {
            if (fileType == null) throw new ArgumentNullException(nameof(fileType));

            if (fileType.Equals(nameof(NormVariantOrAnomalyImageFile), StringComparison.OrdinalIgnoreCase))
            {
                return NormVariantOrAnomalyImageFileId;
            }
            else if (fileType.Equals(nameof(ObstructiveNephropathyChar1ImageFile), StringComparison.OrdinalIgnoreCase))
            {
                return ObstructiveNephropathyChar1ImageFileId;
            }
            else if (fileType.Equals(nameof(ObstructiveNephropathyChar2ImageFile), StringComparison.OrdinalIgnoreCase))
            {
                return ObstructiveNephropathyChar2ImageFileId;
            }
            else if (fileType.Equals(nameof(MassImageFile), StringComparison.OrdinalIgnoreCase))
            {
                return MassImageFileId;
            }
            else if (fileType.Equals(nameof(DecreasedRenalVolumeImageFile), StringComparison.OrdinalIgnoreCase))
            {
                return DecreasedRenalVolumeImageFileId;
            }
            else if (fileType.Equals(nameof(IncreasedRenalVolumeImageFile), StringComparison.OrdinalIgnoreCase))
            {
                return IncreasedRenalVolumeImageFileId;
            }
            else if (fileType.Equals(nameof(VascularNephropathyImageFile), StringComparison.OrdinalIgnoreCase))
            {
                return VascularNephropathyImageFileId;
            }
            else
            {
                return null;
            }
        }

        public void SetImageFile(ImageFile imageFile, string fileType)
        {
            if (fileType == null) throw new ArgumentNullException(nameof(fileType));

            if (fileType.Equals(nameof(NormVariantOrAnomalyImageFile), StringComparison.OrdinalIgnoreCase))
            {
                NormVariantOrAnomalyImageFile   = imageFile;
                NormVariantOrAnomalyImageFileId = imageFile?.Id;
            }
            else if (fileType.Equals(nameof(ObstructiveNephropathyChar1ImageFile), StringComparison.OrdinalIgnoreCase))
            {
                ObstructiveNephropathyChar1ImageFile   = imageFile;
                ObstructiveNephropathyChar1ImageFileId = imageFile?.Id;
            }
            else if (fileType.Equals(nameof(ObstructiveNephropathyChar2ImageFile), StringComparison.OrdinalIgnoreCase))
            {
                ObstructiveNephropathyChar2ImageFile   = imageFile;
                ObstructiveNephropathyChar2ImageFileId = imageFile?.Id;
            }
            else if (fileType.Equals(nameof(MassImageFile), StringComparison.OrdinalIgnoreCase))
            {
                MassImageFile   = imageFile;
                MassImageFileId = imageFile?.Id;
            }
            else if (fileType.Equals(nameof(DecreasedRenalVolumeImageFile), StringComparison.OrdinalIgnoreCase))
            {
                DecreasedRenalVolumeImageFile   = imageFile;
                DecreasedRenalVolumeImageFileId = imageFile?.Id;
            }
            else if (fileType.Equals(nameof(IncreasedRenalVolumeImageFile), StringComparison.OrdinalIgnoreCase))
            {
                IncreasedRenalVolumeImageFile   = imageFile;
                IncreasedRenalVolumeImageFileId = imageFile?.Id;
            }
            else if (fileType.Equals(nameof(VascularNephropathyImageFile), StringComparison.OrdinalIgnoreCase))
            {
                VascularNephropathyImageFile   = imageFile;
                VascularNephropathyImageFileId = imageFile?.Id;
            }
        }

        public List<Guid> ImageIds
        {
            get
            {
                var result = new List<Guid>();
                var temp = new[]
                {
                    NormVariantOrAnomalyImageFileId,
                    ObstructiveNephropathyChar1ImageFileId,
                    ObstructiveNephropathyChar2ImageFileId,
                    MassImageFileId,
                    DecreasedRenalVolumeImageFileId,
                    IncreasedRenalVolumeImageFileId,
                    VascularNephropathyImageFileId
                };

                foreach (var id in temp)
                {
                    if (id.HasValue)
                    {
                        result.Add(id.Value);
                    }
                }

                return result;
            }
        }

        public bool HasImages =>
            NormVariantOrAnomalyImageFileId.HasValue ||
            ObstructiveNephropathyChar1ImageFileId.HasValue ||
            ObstructiveNephropathyChar2ImageFileId.HasValue ||
            MassImageFileId.HasValue ||
            DecreasedRenalVolumeImageFileId.HasValue ||
            IncreasedRenalVolumeImageFileId.HasValue ||
            VascularNephropathyImageFileId.HasValue;
 
        #endregion
    }
}