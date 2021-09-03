using RadioReport.AngiographyCT.Domain.Enums;
using RadioReport.AngiographyCT.Domain.Enums.Aorta;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;

namespace RadioReport.AngiographyCT.Domain.Models
{
    public class AortaFinding : FindingBase, IRadioReportIdConditionEvaluator
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("ang_c_070106")]
        public AortaFindingType FindingType { get; set; }

		#region Common

		public AortaCharacterizationType CharacterizationType { get; set; }

		public ShapeType ShapeType { get; set; }

		public FormType FormType { get; set; }

		public TypeType TypeType { get; set; }

		[RadioReportId("ang_c_070228", InstanceName = nameof(AortaFindingType.DilatationAorta))]
		[RadioReportId("ang_c_070228", InstanceName = nameof(AortaFindingType.ArterioscleroticChanges))]
		[RadioReportId("ang_c_070234", AlternativeTranslationSuffix = "CT", InstanceName = nameof(AortaFindingType.AcuteAortalSyndromeAas), CustomConditionName = nameof(AcuteAortalSyndromeAasType.AorticDissection))]
		[RadioReportId("ang_c_070238", AlternativeTranslationSuffix = "CT", InstanceName = nameof(AortaFindingType.AcuteAortalSyndromeAas), CustomConditionName = nameof(AcuteAortalSyndromeAasType.IntramuralHematomaImh))]
		[RadioReportId("ang_c_070238", AlternativeTranslationSuffix = "CT", InstanceName = nameof(AortaFindingType.AcuteAortalSyndromeAas), CustomConditionName = nameof(AcuteAortalSyndromeAasType.PenetratingAorticUlcerPau))]
		[RadioReportId("ang_c_070234", AlternativeTranslationSuffix = "CT", InstanceName = nameof(AortaFindingType.Endoleak))]
		[RadioReportId("ang_c_070238", AlternativeTranslationSuffix = "CT", InstanceName = nameof(AortaFindingType.Aortitis))]
		public AortaLocations AortaLocations1 { get; set; }

		[RadioReportId("ang_c_070236", AlternativeTranslationSuffix = "CT", InstanceName = nameof(AortaFindingType.AcuteAortalSyndromeAas))]
		[RadioReportId("ang_c_070399", AlternativeTranslationSuffix = "CT", InstanceName = nameof(AortaFindingType.Endoleak))]
		public AortaLocations AortaLocations2 { get; set; }

		[RadioReportId("ang_c_070446", InstanceName = nameof(AortaFindingType.DilatationAorta))]
		[RadioReportId("ang_c_070547", InstanceName = nameof(AortaFindingType.ArterioscleroticChanges))]
		public bool IsWallCalcifications { get; set; }

		[RadioReportId("ang_c_070503", InstanceName = nameof(AortaFindingType.DilatationAorta))]
		[RadioReportId("ang_c_070487", InstanceName = nameof(AortaFindingType.Aortitis))]
		public bool IsSuspicionOf { get; set; }

		[RadioReportId("ang_c_070336", InstanceName = nameof(AortaFindingType.ArterioscleroticChanges))]
		[RadioReportId("ang_c_070370", InstanceName = nameof(AortaFindingType.Aortitis))]
		public bool IsHemodynamicallyRelevant { get; set; }

		[RadioReportId("ang_c_070415", InstanceName = nameof(AortaFindingType.ArterioscleroticChanges))]
		[RadioReportId("ang_c_070445", InstanceName = nameof(AortaFindingType.Aortitis))]
		public bool IsShortLengthStenosis { get; set; }

		[RadioReportId("ang_c_070505", InstanceName = nameof(AortaFindingType.ArterioscleroticChanges))]
		[RadioReportId("ang_c_070221", InstanceName = nameof(AortaFindingType.Aortitis))]
		public bool IsThrombus { get; set; }

		[RadioReportId("ang_c_070506", InstanceName = nameof(AortaFindingType.ArterioscleroticChanges))]
		[RadioReportId("ang_c_070222", InstanceName = nameof(AortaFindingType.Aortitis))]
		public bool IsFreeFloating { get; set; }

		[RadioReportId("ang_c_070507", InstanceName = nameof(AortaFindingType.ArterioscleroticChanges))]
		[RadioReportId("ang_c_070223", InstanceName = nameof(AortaFindingType.Aortitis))]
		public bool IsWallAdherent { get; set; }

		[RadioReportId("ang_c_070508", InstanceName = nameof(AortaFindingType.ArterioscleroticChanges))]
		[RadioReportId("ang_c_070224", InstanceName = nameof(AortaFindingType.Aortitis))]
		public bool IsIrregularContour { get; set; }

		[RadioReportId("ang_c_070462", InstanceName = nameof(AortaFindingType.AcuteAortalSyndromeAas))]
		[RadioReportId("ang_c_070566", InstanceName = nameof(AortaFindingType.Endoleak))]
		public bool IsInferiorMesentericArteryIma { get; set; }

		//custom condition
		[RadioReportId("ang_c_070557", InstanceName = nameof(AortaFindingType.AcuteAortalSyndromeAas), CustomConditionName = nameof(AcuteAortalSyndromeAasType.AorticDissection))]
		[RadioReportId("ang_c_070560", InstanceName = nameof(AortaFindingType.AcuteAortalSyndromeAas), CustomConditionName = nameof(AcuteAortalSyndromeAasType.IntramuralHematomaImh))]
		[RadioReportId("ang_c_070477", InstanceName = nameof(AortaFindingType.AcuteAortalSyndromeAas), CustomConditionName = nameof(AcuteAortalSyndromeAasType.PenetratingAorticUlcerPau))]
		public bool IsAcuteExtravascularHematoma { get; set; }

		[RadioReportId("ang_c_070466", InstanceName = nameof(AortaFindingType.AcuteAortalSyndromeAas))]
		[RadioReportId("ang_c_070356", InstanceName = nameof(AortaFindingType.Aortitis))]
		public bool IsWallThickening { get; set; }


		[RadioReportId("ang_c_070320", InstanceName = nameof(AortaFindingType.DilatationAorta))]
		public int? MaxAxialDiameterInMm { get; set; }

		[RadioReportId("ang_c_070339", InstanceName = nameof(AortaFindingType.ArterioscleroticChanges))]
		[RadioReportId("ang_c_070245", InstanceName = nameof(AortaFindingType.PreoperativeMeasurements))]
		public int? MaxDiameterInMm { get; set; }
		
		[RadioReportId("ang_c_070342", InstanceName = nameof(AortaFindingType.ArterioscleroticChanges))]
		public int? DiameterNormalPoststenoticSegmentInMm { get; set; }

		[RadioReportId("ang_c_070345", InstanceName = nameof(AortaFindingType.ArterioscleroticChanges))]
		public int? DegreeOfStenosisNASCETInPercent { get; set; }

		[RadioReportId("ang_c_070323", InstanceName = nameof(AortaFindingType.DilatationAorta))]
		public int? CraniodualLengthInMm { get; set; }
		
		[RadioReportId("ang_c_070326", InstanceName = nameof(AortaFindingType.DilatationAorta))]
		public int? ProximalNeckLengthInMm { get; set; }

		[RadioReportId("ang_c_070329", InstanceName = nameof(AortaFindingType.DilatationAorta))]
		public int? ProximalAneurysmaticNeckDiameterInMm { get; set; }

		[RadioReportId("ang_c_070408", InstanceName = nameof(AortaFindingType.DilatationAorta))]
		public int? MaxDiameterPreviousExaminationInMm { get; set; }
		
		[RadioReportId("ang_c_070414", InstanceName = nameof(AortaFindingType.ArterioscleroticChanges))]
		public int? LengthInMm { get; set; }
		
		[RadioReportId("ang_c_070469", InstanceName = nameof(AortaFindingType.AcuteAortalSyndromeAas))]
		public int? WallThicknessInMm { get; set; }

        [RadioReportId("ang_c_070332", InstanceName = nameof(AortaFindingType.ArterioscleroticChanges))]
        [RadioReportId("ang_c_070365-l", InstanceName = nameof(AortaFindingType.Aortitis), IsExportable = false)]
        public SeverityType SeverityType { get; set; }

        #endregion

        #region AorticAbnormalities

        public AnomaliesType AnomaliesType { get; set; }

		[RadioReportId("ang_c_070302", InstanceName = nameof(AortaFindingType.AorticAbnormalities))]
		public bool IsHypoplasticAorticArch { get; set; }

		[RadioReportId("ang_c_070303", InstanceName = nameof(AortaFindingType.AorticAbnormalities))]
		public bool IsPoststenoticDilatation { get; set; }

		[RadioReportId("ang_c_070304", InstanceName = nameof(AortaFindingType.AorticAbnormalities))]
		public bool IsResidualStenosisAfterSurgery { get; set; }

		public DetailsAorticArchKinkingPseudocoarctationType DetailsAorticArchKinkingPseudocoarctationType { get; set; }

		public DetailsCongenitalVascularRingsType DetailsCongenitalVascularRingsType { get; set; }

		[RadioReportId("ang_c_070313", InstanceName = nameof(AortaFindingType.AorticAbnormalities))]
		public bool IsLusoriaKommerellDiverticulum { get; set; }

		[RadioReportId("ang_c_070315", InstanceName = nameof(AortaFindingType.AorticAbnormalities))]
		public bool IsSubclavianArteryKommerellDiverticulum { get; set; }

		#endregion

		#region DilatationAorta

		[RadioReportId("ang_c_070401", InstanceName = nameof(AortaFindingType.DilatationAorta))]
		public bool IsEccentricPartialThrombus { get; set; }

		public FollowUpType FollowUpType { get; set; }
		public DilatationDifferentialDiagnosisType DilatationDifferentialDiagnosisType { get; set; }

		#endregion

		#region ArterioscleroticChanges

		[RadioReportId("ang_c_070330", InstanceName = nameof(AortaFindingType.ArterioscleroticChanges))]
		public bool IsStenosis { get; set; }

		[RadioReportId("ang_c_070451", InstanceName = nameof(AortaFindingType.ArterioscleroticChanges))]
		public bool IsLongIntermittent { get; set; }

		[RadioReportId("ang_c_070511", InstanceName = nameof(AortaFindingType.ArterioscleroticChanges))]
		public int? SizeInAxialPlaneInMm { get; set; }

		[RadioReportId("ang_c_070548", InstanceName = nameof(AortaFindingType.ArterioscleroticChanges))]
		public bool IsPorcelainAorta { get; set; }

		#endregion

		#region AcuteAortalSyndromeAas

		[RadioReportId("ang_c_070232", InstanceName = nameof(AortaFindingType.AcuteAortalSyndromeAas))]
		public AcuteAortalSyndromeAasType AcuteAortalSyndromeAasType { get; set; }

		[RadioReportId("ang_c_070382", InstanceName = nameof(AortaFindingType.AcuteAortalSyndromeAas))]
		public int? MaxDiameterAortaInMm { get; set; }
		
		[RadioReportId("ang_c_070385", InstanceName = nameof(AortaFindingType.AcuteAortalSyndromeAas))]
		public LocalizationOfTheMeasurementType LocalizationOfTheMeasurementType { get; set; }

		[RadioReportId("ang_c_070387", InstanceName = nameof(AortaFindingType.AcuteAortalSyndromeAas))]
		public int? CraniocaudalLengthInMm { get; set; }

		[RadioReportId("ang_c_070390", InstanceName = nameof(AortaFindingType.AcuteAortalSyndromeAas))]
		public bool IsThrombosisFalseLumen { get; set; }

		[RadioReportId("ang_c_070391", InstanceName = nameof(AortaFindingType.AcuteAortalSyndromeAas))]
		public bool IsPericardialEffusion { get; set; }

		[RadioReportId("ang_c_070392", InstanceName = nameof(AortaFindingType.AcuteAortalSyndromeAas))]
		public PericardialPleuralEffusionType PericardialEffusionType { get; set; }

		[RadioReportId("ang_c_070393", InstanceName = nameof(AortaFindingType.AcuteAortalSyndromeAas))]
		public bool IsPleuralEffusion { get; set; }

		[RadioReportId("ang_c_070394", InstanceName = nameof(AortaFindingType.AcuteAortalSyndromeAas))]
		public PericardialPleuralEffusionType PleuralEffusionType { get; set; }

		[RadioReportId("ang_c_070453", InstanceName = nameof(AortaFindingType.AcuteAortalSyndromeAas))]
		public bool IsRightCoronaryArtery { get; set; }

		[RadioReportId("ang_c_070454", InstanceName = nameof(AortaFindingType.AcuteAortalSyndromeAas))]
		public bool IsLeftCoronaryArtery { get; set; }

		[RadioReportId("ang_c_070455", InstanceName = nameof(AortaFindingType.AcuteAortalSyndromeAas))]
		public bool IsBrachiocephalicTrunk { get; set; }

		[RadioReportId("ang_c_070456", InstanceName = nameof(AortaFindingType.AcuteAortalSyndromeAas))]
		public bool IsRightSubclavianArtery { get; set; }

		[RadioReportId("ang_c_070457", InstanceName = nameof(AortaFindingType.AcuteAortalSyndromeAas))]
		public bool IsRightCommonCarotidArtery { get; set; }

		[RadioReportId("ang_c_070458", InstanceName = nameof(AortaFindingType.AcuteAortalSyndromeAas))]
		public bool IsLeftCommonCarotidArtery { get; set; }

		[RadioReportId("ang_c_070459", InstanceName = nameof(AortaFindingType.AcuteAortalSyndromeAas))]
		public bool IsLeftSubclavianArtery { get; set; }

		[RadioReportId("ang_c_070460", InstanceName = nameof(AortaFindingType.AcuteAortalSyndromeAas))]
		public bool IsCoeliacTrunk { get; set; }

		[RadioReportId("ang_c_070461", InstanceName = nameof(AortaFindingType.AcuteAortalSyndromeAas))]
		public bool IsSuperiorMesentericArterySma { get; set; }

		[RadioReportId("ang_c_070463", InstanceName = nameof(AortaFindingType.AcuteAortalSyndromeAas))]
		public bool IsRightRenalArtery { get; set; }

		[RadioReportId("ang_c_070464", InstanceName = nameof(AortaFindingType.AcuteAortalSyndromeAas))]
		public bool IsLeftRenalArtery { get; set; }

		[RadioReportId("ang_c_070551", InstanceName = nameof(AortaFindingType.AcuteAortalSyndromeAas))]
		public StanfordType StanfordType { get; set; }

		[RadioReportId("ang_c_070553", InstanceName = nameof(AortaFindingType.AcuteAortalSyndromeAas))]
		public DebakeyType DebakeyType { get; set; }

		[RadioReportId("ang_c_070555", InstanceName = nameof(AortaFindingType.AcuteAortalSyndromeAas))]
		public SvenssonType SvenssonType { get; set; }

		public BeginningType BeginningType { get; set; }

		[RadioReportId("ang_c_070467", InstanceName = nameof(AortaFindingType.AcuteAortalSyndromeAas))]
		public bool IsEccentric { get; set; }

		public DensityType DensityType { get; set; }

		[RadioReportId("ang_c_070558", InstanceName = nameof(AortaFindingType.AcuteAortalSyndromeAas))]
		public bool IsRupture { get; set; }

		[RadioReportId("ang_c_070559", InstanceName = nameof(AortaFindingType.AcuteAortalSyndromeAas))]
		public bool IsCmExtravasation { get; set; }
		
		[RadioReportId("ang_c_070562", InstanceName = nameof(AortaFindingType.AcuteAortalSyndromeAas))]
		public bool IsAortitis { get; set; }

		[RadioReportId("ang_c_070396", InstanceName = nameof(AortaFindingType.AcuteAortalSyndromeAas))]
		public int? DepthInMm { get; set; }

		[RadioReportId("ang_c_070474", InstanceName = nameof(AortaFindingType.AcuteAortalSyndromeAas))]
		public bool IsMushroomShaped { get; set; }

		[RadioReportId("ang_c_070476", InstanceName = nameof(AortaFindingType.AcuteAortalSyndromeAas))]
		public bool IsIntramuralAorticHematoma { get; set; }

		#endregion

		#region Endoleak

		public EndoleakClassificationType EndoleakClassificationType { get; set; }

		[RadioReportId("ang_c_070563", InstanceName = nameof(AortaFindingType.Endoleak))]
		public bool IsAProximal { get; set; }

		[RadioReportId("ang_c_070564", InstanceName = nameof(AortaFindingType.Endoleak))]
		public bool IsBDistal { get; set; }

		[RadioReportId("ang_c_070567", InstanceName = nameof(AortaFindingType.Endoleak))]
		public bool IsLumbarArteries { get; set; }

		#endregion

		#region PreoperativeMeasurements

		[RadioReportId("ang_c_070248", InstanceName = nameof(AortaFindingType.PreoperativeMeasurements))]
		public int? SecondPlaneInMm { get; set; }

		[RadioReportId("ang_c_0703101", InstanceName = nameof(AortaFindingType.PreoperativeMeasurements))]
		public int? DistanceCoronaryOstiaValvePlaneInMm { get; set; }

		#endregion

		#region Aortitis

		[RadioReportId("ang_c_070357", InstanceName = nameof(AortaFindingType.Aortitis))]
		public bool IsConcentric { get; set; }
		
		[RadioReportId("ang_c_070360", InstanceName = nameof(AortaFindingType.Aortitis))]
		public int? AortitisWallThicknessInMm { get; set; }

		[RadioReportId("ang_c_070361", InstanceName = nameof(AortaFindingType.Aortitis))]
		public bool IsContrastEnhancementOfTheArterialWall { get; set; }

		[RadioReportId("ang_c_070362", InstanceName = nameof(AortaFindingType.Aortitis))]
		public bool IsPeriaorticEdema { get; set; }

		[RadioReportId("ang_c_070363", InstanceName = nameof(AortaFindingType.Aortitis))]
		public bool IsPeriaortitis { get; set; }

		public QuantificationAortitisType QuantificationAortitisType { get; set; }
		
		[RadioReportId("ang_c_070227", InstanceName = nameof(AortaFindingType.Aortitis))]
		public int? AortitisMaxWidthInMm { get; set; }

		[RadioReportId("ang_c_070364", InstanceName = nameof(AortaFindingType.Aortitis))]
		public bool IsStenosisOcclusion { get; set; }
		
		[RadioReportId("ang_c_070373", InstanceName = nameof(AortaFindingType.Aortitis))]
		public int? AortitisDiameterStenosisInMm { get; set; }

		[RadioReportId("ang_c_070376", InstanceName = nameof(AortaFindingType.Aortitis))]
		public int? AortitisDiameterNormalPoststenoticSegmentInMm { get; set; }

		[RadioReportId("ang_c_070379", InstanceName = nameof(AortaFindingType.Aortitis))]
		public int? AortitisNASCETInPercent { get; set; }

		[RadioReportId("ang_c_070444", InstanceName = nameof(AortaFindingType.Aortitis))]
		public int? AortitisLengthInMm { get; set; }

		[RadioReportId("ang_c_070250", InstanceName = nameof(AortaFindingType.Aortitis))]
		public bool IsVascularDilatation { get; set; }
		
		[RadioReportId("ang_c_070253", InstanceName = nameof(AortaFindingType.Aortitis))]
		public int? AortitisMaxAxialDiameterInMm { get; set; }
		
		[RadioReportId("ang_c_070256", InstanceName = nameof(AortaFindingType.Aortitis))]
		public int? AortitisVascularLengthInMm { get; set; }

		[RadioReportId("ang_c_070264", InstanceName = nameof(AortaFindingType.Aortitis))]
		public bool IsMycoticAneurysm { get; set; }

		[RadioReportId("ang_c_0703108", InstanceName = nameof(AortaFindingType.Aortitis))]
		public bool IsUlcer { get; set; }

		[RadioReportId("ang_c_0703109", InstanceName = nameof(AortaFindingType.Aortitis))]
		public bool IsEctasiaAnnulusAortaeAndAscendingAorta { get; set; }

		[RadioReportId("ang_c_070486", InstanceName = nameof(AortaFindingType.Aortitis))]
		public AortitisDifferentialDiagnosisType AortitisDifferentialDiagnosisType { get; set; }

        public bool CheckCondition(string customConditionId)
        {
			return customConditionId switch
            {
                nameof(AcuteAortalSyndromeAasType.AorticDissection) => AcuteAortalSyndromeAasType.ToString() == customConditionId,
                nameof(AcuteAortalSyndromeAasType.IntramuralHematomaImh) => AcuteAortalSyndromeAasType.ToString() == customConditionId,
                nameof(AcuteAortalSyndromeAasType.PenetratingAorticUlcerPau) => AcuteAortalSyndromeAasType.ToString() == customConditionId,
                _ => false
            };
        }

        #endregion
    }
}
