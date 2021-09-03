using RadioReport.PelvisMRT.Domain.Enums.PelvicFloor;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;

namespace RadioReport.PelvisMRT.Domain.Models
{
    public class PelvicFloorFinding : FindingBase
    {
		public override string InstanceName => FindingType.ToString();

		[RadioReportId("pel_m_070107")]
		public PelvicFloorFindingType FindingType { get; set; }

		#region Morphology

		[RadioReportId("pel_m_070204", InstanceName = nameof(PelvicFloorFindingType.Morphology))]
		public bool IsVaginaLossOfTheHShape { get; set; }

		[RadioReportId("pel_m_070205", InstanceName = nameof(PelvicFloorFindingType.Morphology))]
		public bool IsPosteriorDislocationOfTheVaginaFornix { get; set; }

		[RadioReportId("pel_m_070206", InstanceName = nameof(PelvicFloorFindingType.Morphology))]
		public bool IsBladderSaddlebagSign { get; set; }

		[RadioReportId("pel_m_070303", InstanceName = nameof(PelvicFloorFindingType.Morphology))]
		public bool IsLesionPeriurethralLigament { get; set; }

		[RadioReportId("pel_m_070305", InstanceName = nameof(PelvicFloorFindingType.Morphology))]
		public bool IsLesionPeriurethralLigamentRight { get; set; }

		[RadioReportId("pel_m_070306", InstanceName = nameof(PelvicFloorFindingType.Morphology))]
		public bool IsLesionPeriurethralLigamentLeft { get; set; }

		[RadioReportId("pel_m_070307", InstanceName = nameof(PelvicFloorFindingType.Morphology))]
		public bool IsLesionPeriurethralLigamentSuspicionOf { get; set; }

		[RadioReportId("pel_m_070308", InstanceName = nameof(PelvicFloorFindingType.Morphology))]
		public bool IsLesionParaurethralLigament { get; set; }

		[RadioReportId("pel_m_070310", InstanceName = nameof(PelvicFloorFindingType.Morphology))]
		public bool IsLesionParaurethralLigamentRight { get; set; }

		[RadioReportId("pel_m_070311", InstanceName = nameof(PelvicFloorFindingType.Morphology))]
		public bool IsLesionParaurethralLigamentLeft { get; set; }

		[RadioReportId("pel_m_070312", InstanceName = nameof(PelvicFloorFindingType.Morphology))]
		public bool IsLesionParaurethralLigamentSuspicionOf { get; set; }

		[RadioReportId("pel_m_070401", InstanceName = nameof(PelvicFloorFindingType.Morphology))]
		public bool IsPubourethralLigamentLesion { get; set; }

		[RadioReportId("pel_m_070403", InstanceName = nameof(PelvicFloorFindingType.Morphology))]
		public bool IsPubourethralLigamentLesionRight { get; set; }

		[RadioReportId("pel_m_070404", InstanceName = nameof(PelvicFloorFindingType.Morphology))]
		public bool IsPubourethralLigamentLesionLeft { get; set; }

		[RadioReportId("pel_m_070405", InstanceName = nameof(PelvicFloorFindingType.Morphology))]
		public bool IsPubourethralLigamentLesionSuspicionOf { get; set; }

		[RadioReportId("pel_m_070502", InstanceName = nameof(PelvicFloorFindingType.Morphology))]
		public bool IsLesionOfOuterSphincterMuscle { get; set; }

		[RadioReportId("pel_m_070503", InstanceName = nameof(PelvicFloorFindingType.Morphology))]
		public bool IsOuterSsl { get; set; }

		[RadioReportId("pel_m_070504", InstanceName = nameof(PelvicFloorFindingType.Morphology))]
		public SslType SslOuterType { get; set; }

		[RadioReportId("pel_m_070504-l", InstanceName = nameof(SslLesionOuterSphincterMuscleType), IsExportable = false)]
		public SslLesionTypes SslLesionOuterSphincterMuscleType { get; set; }

		[RadioReportId("pel_m_070507", InstanceName = nameof(PelvicFloorFindingType.Morphology))]
		public bool IsInnerSphincterLesion { get; set; }

		[RadioReportId("pel_m_070508", InstanceName = nameof(PelvicFloorFindingType.Morphology))]
		public bool IsInnerSsl { get; set; }

		[RadioReportId("pel_m_070509", InstanceName = nameof(PelvicFloorFindingType.Morphology))]
		public SslType SslInnerType { get; set; }

		[RadioReportId("pel_m_070510-l", InstanceName = nameof(SslLesionInnerSphincterMuscleType), IsExportable = false)]
		public SslLesionTypes SslLesionInnerSphincterMuscleType { get; set; }

		[RadioReportId("pel_m_070208", InstanceName = nameof(PelvicFloorFindingType.Morphology))]
		public bool IsLesionPuborectalisMuscle { get; set; }

		[RadioReportId("pel_m_070208-l", InstanceName = nameof(PuborectalisLesionType), IsExportable = false)]
		public LesionType PuborectalisLesionType { get; set; }

		[RadioReportId("pel_m_070212", InstanceName = nameof(PelvicFloorFindingType.Morphology))]
		public bool IsLesionMPuborectalisRight { get; set; }

		[RadioReportId("pel_m_070213", InstanceName = nameof(PelvicFloorFindingType.Morphology))]
		public bool IsLesionMPuborectalisLeft { get; set; }

		[RadioReportId("pel_m_070214", InstanceName = nameof(PelvicFloorFindingType.Morphology))]
		public bool IsMPuborectalisSuspicionOf { get; set; }

		[RadioReportId("pel_m_070314", InstanceName = nameof(PelvicFloorFindingType.Morphology))]
		public bool IsLesionMIliococcygeusMuscle { get; set; }

		[RadioReportId("pel_m_070314-l", InstanceName = nameof(MIliococcygeusLesionType), IsExportable = false)]
		public LesionType MIliococcygeusLesionType { get; set; }

		[RadioReportId("pel_m_070318", InstanceName = nameof(PelvicFloorFindingType.Morphology))]
		public bool IsLesionMIliococcygeusRight { get; set; }

		[RadioReportId("pel_m_070319", InstanceName = nameof(PelvicFloorFindingType.Morphology))]
		public bool IsLesionMIliococcygeusLeft { get; set; }

		[RadioReportId("pel_m_070320", InstanceName = nameof(PelvicFloorFindingType.Morphology))]
		public bool IsMIliococcygeusSuspicionOf { get; set; }

		[RadioReportId("pel_m_070409", InstanceName = nameof(PelvicFloorFindingType.Morphology))]
		public bool IsLesionPubococygeusMuscle { get; set; }

		[RadioReportId("pel_m_070409-l", InstanceName = nameof(MPubococygeusLesionType), IsExportable = false)]
		public LesionType MPubococygeusLesionType { get; set; }

		[RadioReportId("pel_m_070413", InstanceName = nameof(PelvicFloorFindingType.Morphology))]
		public bool IsLesionMPubococygeusRight { get; set; }

		[RadioReportId("pel_m_070414", InstanceName = nameof(PelvicFloorFindingType.Morphology))]
		public bool IsLesionMPubococygeusLeft { get; set; }

		[RadioReportId("pel_m_070415", InstanceName = nameof(PelvicFloorFindingType.Morphology))]
		public bool IsMPubococygeusSuspicionOf { get; set; }

		#endregion

		#region OrganProlapse

		[RadioReportId("pel_m_070218", InstanceName = nameof(PelvicFloorFindingType.OrganProlapse))]
		public bool IsCystocele { get; set; }

		[RadioReportId("pel_m_070221", InstanceName = nameof(PelvicFloorFindingType.OrganProlapse))]
		public int? MaxCraniocaudalExtensioToPlcInMm { get; set; }

		[RadioReportId("pel_m_070223-l", InstanceName = nameof(CraniocaudalExtensioToPlcPhaseType), IsExportable = false)]
		public PhaseType CraniocaudalExtensioToPlcPhaseType { get; set; }

        [RadioReportId("pel_m_070227", InstanceName = nameof(PelvicFloorFindingType.OrganProlapse))]
		public GradingType CraniocaudalExtensioToPlcGradingInMm { get; set; }

		[RadioReportId("pel_m_070322-l", InstanceName = nameof(CraniocaudalExtensionInReferenceToMplType), IsExportable = false)]
		public MlpPositionType CraniocaudalExtensionInReferenceToMplType { get; set; }

		[RadioReportId("pel_m_070328", InstanceName = nameof(PelvicFloorFindingType.OrganProlapse))]
		public int? CraniocaudalExtensionInReferenceToMlpInMm { get; set; }

		[RadioReportId("pel_m_070329-l", InstanceName = nameof(CraniocaudalExtensionInReferenceToMlpPhaseType), IsExportable = false)]
		public PhaseType CraniocaudalExtensionInReferenceToMlpPhaseType { get; set; }

		[RadioReportId("pel_m_070333", InstanceName = nameof(PelvicFloorFindingType.OrganProlapse))]
		public StageType CraniocaudalExtensionInReferenceToMplGradingInMm { get; set; }

		[RadioReportId("pel_m_070417", InstanceName = nameof(PelvicFloorFindingType.OrganProlapse))]
		public bool IsUrethrovesicalJunctionKinking { get; set; }

		[RadioReportId("pel_m_070512", InstanceName = nameof(PelvicFloorFindingType.OrganProlapse))]
		public bool IsAnteriorUrethralAngulation { get; set; }

		[RadioReportId("pel_m_070513", InstanceName = nameof(PelvicFloorFindingType.OrganProlapse))]
		public int? AnteriorUrethralAngulationInDegrees { get; set; }

		[RadioReportId("pel_m_070229", InstanceName = nameof(PelvicFloorFindingType.OrganProlapse))]
		public bool IsUterineVaginalProlapse { get; set; }

		[RadioReportId("pel_m_0702106", InstanceName = nameof(PelvicFloorFindingType.OrganProlapse))]
		public int? MaxMiddleCraniocaudalExtensionToPclInMm { get; set; }

		[RadioReportId("pel_m_0702108-l", InstanceName = nameof(MiddleCraniocaudalExtensionToPclPhaseType), IsExportable = false)]
		public PhaseType MiddleCraniocaudalExtensionToPclPhaseType { get; set; }

		[RadioReportId("pel_m_0702112", InstanceName = nameof(PelvicFloorFindingType.OrganProlapse))]
		public GradingType MiddleCraniocaudalExtensionToPclGradingInMm { get; set; }

		[RadioReportId("pel_m_0703103-l", InstanceName = nameof(MiddleCraniocoudalExtensionMlpPositionType), IsExportable = false)]
		public MlpPositionType MiddleCraniocoudalExtensionMlpPositionType { get; set; }
		
		[RadioReportId("pel_m_0703108", InstanceName = nameof(PelvicFloorFindingType.OrganProlapse))]
		public int? MiddleCraniocoudalExtensionToMPLInMm { get; set; }

		[RadioReportId("pel_m_0703110-l", InstanceName = nameof(MiddleCraniocaudalExtensionToMplPhaseType), IsExportable = false)]
		public PhaseType MiddleCraniocaudalExtensionToMplPhaseType { get; set; }

		[RadioReportId("pel_m_0703114", InstanceName = nameof(PelvicFloorFindingType.OrganProlapse))]
		public StageType MiddleCraniocaudalExtensionToMplGradingInMm { get; set; }

		[RadioReportId("pel_m_070418", InstanceName = nameof(PelvicFloorFindingType.OrganProlapse))]
		public bool IsUterineProlapseExceedingGenital { get; set; }

		[RadioReportId("pel_m_070419", InstanceName = nameof(PelvicFloorFindingType.OrganProlapse))]
		public bool IsEversionOfTheVaginalWalls { get; set; }

		[RadioReportId("pel_m_070420", InstanceName = nameof(PelvicFloorFindingType.OrganProlapse))]
		public bool IsHorizontalShiftOfTheVaginalAxis { get; set; }

		[RadioReportId("pel_m_070421", InstanceName = nameof(PelvicFloorFindingType.OrganProlapse))]
		public bool IsEvidenceOfLargeUterusMyoma { get; set; }

		[RadioReportId("pel_m_070231", InstanceName = nameof(PelvicFloorFindingType.OrganProlapse))]
		public bool IsEnterocele { get; set; }

		[RadioReportId("pel_m_070223-l", InstanceName = nameof(EnterocelePhaseType), IsExportable = false)]
		public PhaseType EnterocelePhaseType { get; set; }

		[RadioReportId("pel_m_070232", InstanceName = nameof(PelvicFloorFindingType.OrganProlapse))]
		public bool IsIncarceration { get; set; }

		[RadioReportId("pel_m_070233", InstanceName = nameof(PelvicFloorFindingType.OrganProlapse))]
		public bool IsCulDeSacFailureOfPassage { get; set; }

		[RadioReportId("pel_m_070234", InstanceName = nameof(PelvicFloorFindingType.OrganProlapse))]
		public bool IsPerienericFreeFluid { get; set; }

		[RadioReportId("pel_m_070235", InstanceName = nameof(PelvicFloorFindingType.OrganProlapse))]
		public bool IsPerinealHernia { get; set; }

		[RadioReportId("pel_m_070334", InstanceName = nameof(PelvicFloorFindingType.OrganProlapse))]
		public bool IsPeritoneocele { get; set; }

		[RadioReportId("pel_m_070329-l", InstanceName = nameof(PeritoneocelePhaseType), IsExportable = false)]
		public PhaseType PeritoneocelePhaseType { get; set; }

		[RadioReportId("pel_m_070335", InstanceName = nameof(PelvicFloorFindingType.OrganProlapse))]
		public bool IsFreeFluid { get; set; }

		[RadioReportId("pel_m_070336", InstanceName = nameof(PelvicFloorFindingType.OrganProlapse))]
		public bool IsEdema { get; set; }

		[RadioReportId("pel_m_070423", InstanceName = nameof(PelvicFloorFindingType.OrganProlapse))]
		public bool IsSigmoidocele { get; set; }

		[RadioReportId("pel_m_070424-l", InstanceName = nameof(SigmoidocelePhaseType), IsExportable = false)]
		public PhaseType SigmoidocelePhaseType { get; set; }

		[RadioReportId("pel_m_070427", InstanceName = nameof(PelvicFloorFindingType.OrganProlapse))]
		public bool IsSigmoidoceleIncarceration { get; set; }

		[RadioReportId("pel_m_070428", InstanceName = nameof(PelvicFloorFindingType.OrganProlapse))]
		public bool IsSigmoidoceleFailureOfPassage { get; set; }

		[RadioReportId("pel_m_070429", InstanceName = nameof(PelvicFloorFindingType.OrganProlapse))]
		public bool IsSigmoidocelePerisigmoidalFluid { get; set; }

		[RadioReportId("pel_m_070237", InstanceName = nameof(PelvicFloorFindingType.OrganProlapse))]
		public bool IsAnteriorRectocele { get; set; }

		[RadioReportId("pel_m_070239", InstanceName = nameof(PelvicFloorFindingType.OrganProlapse))]
		public int? ExpansionInReferenceToAnteriorRectalWallInMm { get; set; }

		[RadioReportId("pel_m_0702113-l", InstanceName = nameof(AnteriorRectocelePhaseType), IsExportable = false)]
		public PhaseType AnteriorRectocelePhaseType { get; set; }

		[RadioReportId("pel_m_0702117", InstanceName = nameof(PelvicFloorFindingType.OrganProlapse))]
		public GradingType AnteriorRectoceleGradingInMm { get; set; }

		[RadioReportId("pel_m_070241", InstanceName = nameof(PelvicFloorFindingType.OrganProlapse))]
		public bool IsIntraluminalCmRetentionAfterDefecation { get; set; }

		[RadioReportId("pel_m_070337", InstanceName = nameof(PelvicFloorFindingType.OrganProlapse))]
		public bool IsPosteriorRectocele { get; set; }

		[RadioReportId("pel_m_070430", InstanceName = nameof(PelvicFloorFindingType.OrganProlapse))]
		public bool IsLateralRectocele { get; set; }

		[RadioReportId("pel_m_070431-l", InstanceName = nameof(LateralRectoceleDirectionType), IsExportable = false)]
		public DirectionTypes LateralRectoceleDirectionType { get; set; }

		[RadioReportId("pel_m_070526", InstanceName = nameof(PelvicFloorFindingType.OrganProlapse))]
		public bool IsRectalIntussusception { get; set; }

		public RectalIntussusceptionType RectalIntussusceptionType { get; set; }

		public  ExpansionLongitudinalType LongitudinalExpansionType { get; set; }

		public HorizontalExpansionType HorizontalExpansionType { get; set; }

		[RadioReportId("pel_m_070524", InstanceName = nameof(PelvicFloorFindingType.OrganProlapse))]
		public bool IsPosteriorCompartmentFailureOfPassage  { get; set; }
		#endregion

		#region PelvicFloorDysfunction

		[RadioReportId("pel_m_070242", InstanceName = nameof(PelvicFloorFindingType.PelvicFloorDysfunction))]
		public bool IsHiatalExtension { get; set; }

		[RadioReportId("pel_m_070243", InstanceName = nameof(PelvicFloorFindingType.PelvicFloorDysfunction))]
		public int? HiatalExtensionInMm { get; set; }

		[RadioReportId("pel_m_070223-l", InstanceName = nameof(HiatalExtensionPhaseType), IsExportable = false)]
		public PhaseType HiatalExtensionPhaseType { get; set; }

		[RadioReportId("pel_m_070245", InstanceName = nameof(PelvicFloorFindingType.PelvicFloorDysfunction))]
		public GradingType HiatalExtensionGrading { get; set; }

		[RadioReportId("pel_m_070342", InstanceName = nameof(PelvicFloorFindingType.PelvicFloorDysfunction))]
		public bool IsDescendingPelvicFloor { get; set; }

		[RadioReportId("pel_m_070343", InstanceName = nameof(PelvicFloorFindingType.PelvicFloorDysfunction))]
		public int? DescendingPelvicFloorInMm { get; set; }

		[RadioReportId("pel_m_070329-l", InstanceName = nameof(DescendingPelvicFloorPhaseType), IsExportable = false)]
		public PhaseType DescendingPelvicFloorPhaseType { get; set; }

		[RadioReportId("pel_m_070345", InstanceName = nameof(PelvicFloorFindingType.PelvicFloorDysfunction))]
		public GradingType DescendingPelvicFloorGrading { get; set; }

		[RadioReportId("pel_m_070434", InstanceName = nameof(PelvicFloorFindingType.PelvicFloorDysfunction))]
		public bool IsCaudalAngulationOfLevatorPlate { get; set; }

		#endregion

		#region DyssynergicDefecationAnism

		[RadioReportId("pel_m_070261", InstanceName = nameof(PelvicFloorFindingType.DyssynergicDefecationAnism))]
		public bool IsAnorectalAngle { get; set; }

		[RadioReportId("pel_m_070247", InstanceName = nameof(PelvicFloorFindingType.DyssynergicDefecationAnism))]
		public int? AnorectalAngleAtRestInDegrees { get; set; }

		[RadioReportId("pel_m_070250", InstanceName = nameof(PelvicFloorFindingType.DyssynergicDefecationAnism))]
		public int? AnorectalAngleWhilePressingInDegrees { get; set; }

		[RadioReportId("pel_m_070253", InstanceName = nameof(PelvicFloorFindingType.DyssynergicDefecationAnism))]
		public int? AnorectalAngleDuringDefecationInDegrees { get; set; }

		[RadioReportId("pel_m_070256", InstanceName = nameof(PelvicFloorFindingType.DyssynergicDefecationAnism))]
		public int? ReductionOfTheAnorectalAngleDuringPressing { get; set; }

		[RadioReportId("pel_m_070259", InstanceName = nameof(PelvicFloorFindingType.DyssynergicDefecationAnism))]
		public int? OpeningOfTheAnorectalAngleAtDefecation { get; set; }

		[RadioReportId("pel_m_070347", InstanceName = nameof(PelvicFloorFindingType.DyssynergicDefecationAnism))]
		public bool IsAbsentPelvicFloorDescentAtDefecation { get; set; }

		[RadioReportId("pel_m_070348", InstanceName = nameof(PelvicFloorFindingType.DyssynergicDefecationAnism))]
		public bool IsEmphasizedPuborectalisMuscle { get; set; }

		[RadioReportId("pel_m_070349", InstanceName = nameof(PelvicFloorFindingType.DyssynergicDefecationAnism))]
		public bool IsDelayedDefecation { get; set; }

		[RadioReportId("pel_m_070350", InstanceName = nameof(PelvicFloorFindingType.DyssynergicDefecationAnism))]
		public bool IsIncreasedIntervalBetweenOpeningAndDefecation { get; set; }

		[RadioReportId("pel_m_070351", InstanceName = nameof(PelvicFloorFindingType.DyssynergicDefecationAnism))]
		public bool IsIncompleteRectalEvacuation { get; set; }

		#endregion
	}
}
