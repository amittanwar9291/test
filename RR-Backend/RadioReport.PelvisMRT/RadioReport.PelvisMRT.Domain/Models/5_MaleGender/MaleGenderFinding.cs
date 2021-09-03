using RadioReport.PelvisMRT.Domain.Enums.MaleGender;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.Common.Logic.Interfaces;

namespace RadioReport.PelvisMRT.Domain.Models
{
    public class MaleGenderFinding : MaleGenderFindingBase, IRadioReportIdConditionEvaluator
    {
		public DescriptionType DescriptionType { get; set; }

		#region Common

		[RadioReportId("pel_m_050216", InstanceName = nameof(MaleGenderFindingType.PenisTrauma))]
		[RadioReportId("pel_m_050274", InstanceName = nameof(MaleGenderFindingType.ScrotumTrauma))]
		public bool IsHematoma { get; set; } //common

		[RadioReportId("pel_m_050304", InstanceName = nameof(MaleGenderFindingType.PenisInfectionInflammation))]
		[RadioReportId("pel_m_050361", InstanceName = nameof(MaleGenderFindingType.ScrotumInfectionInflammation))]
		public bool IsDistension { get; set; } //common

		[RadioReportId("pel_m_050305", InstanceName = nameof(MaleGenderFindingType.PenisInfectionInflammation))]
		[RadioReportId("pel_m_050358", InstanceName = nameof(MaleGenderFindingType.ScrotumInfectionInflammation))]
		public bool IsAirInclusions { get; set; } //common

		[RadioReportId("pel_m_050307", InstanceName = nameof(MaleGenderFindingType.PenisInfectionInflammation))]
		[RadioReportId("pel_m_050360", InstanceName = nameof(MaleGenderFindingType.ScrotumInfectionInflammation))]
		public bool IsCircumscribedFluidAccumulation { get; set; } //common

		[RadioReportId("pel_m_050308", InstanceName = nameof(MaleGenderFindingType.PenisInfectionInflammation))]
		[RadioReportId("pel_m_050442", InstanceName = nameof(MaleGenderFindingType.ScrotumInfectionInflammation))]
		[RadioReportId("pel_m_050473", InstanceName = nameof(MaleGenderFindingType.SeminalVesiclesInfectionInflammation))]
		public bool IsAbscess { get; set; } //common

		[RadioReportId("pel_m_050309", InstanceName = nameof(MaleGenderFindingType.PenisInfectionInflammation))]
		[RadioReportId("pel_m_050443", InstanceName = nameof(MaleGenderFindingType.ScrotumInfectionInflammation))]
		[RadioReportId("pel_m_0503106", InstanceName = nameof(MaleGenderFindingType.SeminalVesiclesInfectionInflammation))]
		public int? ExpansionInMm { get; set; } //common

		[RadioReportId("pel_m_050313", InstanceName = nameof(MaleGenderFindingType.PenisInfectionInflammation))]
		[RadioReportId("pel_m_050359", InstanceName = nameof(MaleGenderFindingType.ScrotumInfectionInflammation))]
		public bool IsFascialThickening { get; set; } //common

		[RadioReportId("pel_m_050264", InstanceName = nameof(MaleGenderFindingType.PenisMass))]
		[RadioReportId("pel_m_050509", InstanceName = nameof(MaleGenderFindingType.PenisInfectionInflammation))]
		[RadioReportId("pel_m_050264", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
		[RadioReportId("pel_m_0503122", InstanceName = nameof(MaleGenderFindingType.SeminalVesiclesMass))]
		public bool IsSubordinate { get; set; } //common

		[RadioReportId("pel_m_050319", InstanceName = nameof(MaleGenderFindingType.PenisMass))]
		[RadioReportId("pel_m_0502115", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
		[RadioReportId("pel_m_0502115", InstanceName = nameof(MaleGenderFindingType.SeminalVesiclesMass))]
		public int? SizeInMm { get; set; } //common

		[RadioReportId("pel_m_050322", InstanceName = nameof(MaleGenderFindingType.PenisMass))]
		[RadioReportId("pel_m_0502118", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
		[RadioReportId("pel_m_0502118", InstanceName = nameof(MaleGenderFindingType.SeminalVesiclesMass))]
		public int? SecondPlaneInMm { get; set; } //common

		[RadioReportId("pel_m_050325", InstanceName = nameof(MaleGenderFindingType.PenisMass))]
		[RadioReportId("pel_m_0502121", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
		[RadioReportId("pel_m_0502121", InstanceName = nameof(MaleGenderFindingType.SeminalVesiclesMass))]
		public int? ThirdPlaneInMm { get; set; } //common

        [RadioReportId("pel_m_050434", InstanceName = nameof(MaleGenderFindingType.PenisMass))]
		[RadioReportId("pel_m_050517", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
		public bool IsTunicaAlbuginea { get; set; } //common

		[RadioReportId("pel_m_050437", InstanceName = nameof(MaleGenderFindingType.PenisMass))]
		[RadioReportId("pel_m_050515", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
		[RadioReportId("pel_m_0502143", InstanceName = nameof(MaleGenderFindingType.SeminalVesiclesMass))]
		public bool IsTesticles { get; set; } //common

		[RadioReportId("pel_m_050276", InstanceName = nameof(MaleGenderFindingType.ScrotumTrauma))]
		[RadioReportId("pel_m_050520", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
		[RadioReportId("pel_m_0502147", InstanceName = nameof(MaleGenderFindingType.SeminalVesiclesMass))]
		public bool IsVasDeferens { get; set; } //common

		[RadioReportId("pel_m_050378", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
		[RadioReportId("pel_m_050480", InstanceName = nameof(MaleGenderFindingType.SeminalVesiclesMass))]
		public bool IsPerifocalEdema { get; set; } //common

		[RadioReportId("pel_m_0503101", InstanceName = nameof(MaleGenderFindingType.PenisTrauma))]
		[RadioReportId("pel_m_050338", InstanceName = nameof(MaleGenderFindingType.ScrotumTrauma))]
		[RadioReportId("pel_m_0502106", InstanceName = nameof(MaleGenderFindingType.ScrotumInfectionInflammation))]
		public bool IsSuspicionOf { get; set; } //common

		[RadioReportId("pel_m_050228", InstanceName = nameof(MaleGenderFindingType.PenisInfectionInflammation))]
		[RadioReportId("pel_m_050356", InstanceName = nameof(MaleGenderFindingType.ScrotumInfectionInflammation))]
		[RadioReportId("pel_m_0502139", InstanceName = nameof(MaleGenderFindingType.SeminalVesiclesInfectionInflammation))]
		public bool IsHomogeneous { get; set; } // common

		[RadioReportId("pel_m_050229", InstanceName = nameof(MaleGenderFindingType.PenisInfectionInflammation))]
		[RadioReportId("pel_m_050357", InstanceName = nameof(MaleGenderFindingType.ScrotumInfectionInflammation))]
		[RadioReportId("pel_m_0502140", InstanceName = nameof(MaleGenderFindingType.SeminalVesiclesInfectionInflammation))]
		public bool IsHeterogeneous { get; set; } // common

		[RadioReportId("pel_m_050522", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
		[RadioReportId("pel_m_0502149", InstanceName = nameof(MaleGenderFindingType.SeminalVesiclesMass))]
		public bool IsDuctusDeferensRight { get; set; } // common

		[RadioReportId("pel_m_050523", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
		[RadioReportId("pel_m_0502150", InstanceName = nameof(MaleGenderFindingType.SeminalVesiclesMass))]
		public bool IsDuctusDeferensLeft { get; set; } // common

		public MarginType MarginType { get; set; }

		public FormType FormType { get; set; }

		public ExpansionType ExpansionType { get; set; }

		public NodularComponentsType NodularComponentsType { get; set; }

		public DirectionType DirectionType { get; set; }

		#endregion

		#region PenisTrauma
		public TunicaAlbugineaType TunicaAlbugineaType { get; set; }

		[RadioReportId("pel_m_050207", InstanceName = nameof(MaleGenderFindingType.PenisTrauma))]
		public bool IsCorpusCavernosumRight { get; set; }

		[RadioReportId("pel_m_050208", InstanceName = nameof(MaleGenderFindingType.PenisTrauma))]
		public bool IsCorpusCavernosumLeft { get; set; }

		[RadioReportId("pel_m_050209", InstanceName = nameof(MaleGenderFindingType.PenisTrauma))]
		public bool IsCorpusSpongiosum { get; set; }

		[RadioReportId("pel_m_050212", InstanceName = nameof(MaleGenderFindingType.PenisTrauma))]
		public bool IsFocalT2wCorpusCavernosumRight { get; set; }

		[RadioReportId("pel_m_050213", InstanceName = nameof(MaleGenderFindingType.PenisTrauma))]
		public bool IsFocalT2wCorpusCavernosumLeft { get; set; }

		[RadioReportId("pel_m_050215", InstanceName = nameof(MaleGenderFindingType.PenisTrauma))]
		public bool IsSoftTissueEdema { get; set; }

		[RadioReportId("pel_m_050217", InstanceName = nameof(MaleGenderFindingType.PenisTrauma))]
		public bool IsScrotalHematocele { get; set; }

		public DifferentialDiagnosisTraumaType DifferentialDiagnosisPenisTraumaType { get; set; }


		#endregion

		#region PenisInfectionInflammation

		[RadioReportId("pel_m_050220", InstanceName = nameof(MaleGenderFindingType.PenisInfectionInflammation))]
		public SignalType SignalBehaviourT2wType { get; set; }

		[RadioReportId("pel_m_050224-l", InstanceName = nameof(CMEnhancementType), IsExportable = false)]
		public CMEnhancementType CMEnhancementType { get; set; }

		[RadioReportId("pel_m_050311", InstanceName = nameof(MaleGenderFindingType.PenisInfectionInflammation))]
		public bool IsScrotalExpansion { get; set; }

		[RadioReportId("pel_m_050312", InstanceName = nameof(MaleGenderFindingType.PenisInfectionInflammation))]
		public bool IsFocalPlaquesOfTheTunicaAlbuginea { get; set; }

		[RadioReportId("pel_m_050402", InstanceName = nameof(MaleGenderFindingType.PenisInfectionInflammation))]
		public bool IsT1wHypointense { get; set; }

		[RadioReportId("pel_m_050403", InstanceName = nameof(MaleGenderFindingType.PenisInfectionInflammation))]
		public bool IsT2wHypointense { get; set; }

		[RadioReportId("pel_m_050404", InstanceName = nameof(MaleGenderFindingType.PenisInfectionInflammation))]
		public int? ExampleThicknessInMm { get; set; }

		[RadioReportId("pel_m_050407", InstanceName = nameof(MaleGenderFindingType.PenisInfectionInflammation))]
		public bool IsLocalizationCorpusCavernosumRight { get; set; }

		[RadioReportId("pel_m_050408", InstanceName = nameof(MaleGenderFindingType.PenisInfectionInflammation))]
		public bool IsLocalizationCorpusCavernosumLeft { get; set; }

		[RadioReportId("pel_m_050409", InstanceName = nameof(MaleGenderFindingType.PenisInfectionInflammation))]
		public bool IsLocalizationCorpusSpongiosum { get; set; }

		[RadioReportId("pel_m_050410-l", InstanceName = nameof(CMEnhancementFocalPlaquesType), IsExportable = false)]
		public CMEnhancementType CMEnhancementFocalPlaquesType { get; set; }

		[RadioReportId("pel_m_050414", InstanceName = nameof(MaleGenderFindingType.PenisInfectionInflammation))]
		public bool IsFocalSignalVoids { get; set; }

		[RadioReportId("pel_m_050502", InstanceName = nameof(MaleGenderFindingType.PenisInfectionInflammation))]
		public bool IsFluidAroundProsthesis { get; set; }

		[RadioReportId("pel_m_050503", InstanceName = nameof(MaleGenderFindingType.PenisInfectionInflammation))]
		public bool IsProsthesisDefect { get; set; }

		[RadioReportId("pel_m_050506", InstanceName = nameof(MaleGenderFindingType.PenisInfectionInflammation))]
		public MaleGenderDiagnosisType DifferentialDiagnosisInfection01Type { get; set; }

		[RadioReportId("pel_m_050508", InstanceName = nameof(MaleGenderFindingType.PenisInfectionInflammation))]
		public MaleGenderDiagnosisType DifferentialDiagnosisInfection02Type { get; set; }

		#endregion

		#region PenisMass

		[RadioReportId("pel_m_050243", InstanceName = nameof(MaleGenderFindingType.PenisMass))]
		public bool IsAdjacentTo { get; set; }

		[RadioReportId("pel_m_050316", InstanceName = nameof(MaleGenderFindingType.PenisMass))]
		public MaleGenderDiagnosisType DifferentialDiagnosisMainFeatures01Type { get; set; }

		[RadioReportId("pel_m_050423-l", InstanceName = nameof(PenisMassHomogeneity01Type), IsExportable = false)]
		public HomogeneityType PenisMassHomogeneity01Type { get; set; }

		[RadioReportId("pel_m_050330-l", InstanceName = nameof(PenisMassHomogeneity02Type), IsExportable = false)]
		public HomogeneityType PenisMassHomogeneity02Type { get; set; }

		[RadioReportId("pel_m_050429", InstanceName = nameof(MaleGenderFindingType.PenisMass))]
		public bool IsAdjacentStructuresCorpusSpongiosum { get; set; }

		[RadioReportId("pel_m_050430", InstanceName = nameof(MaleGenderFindingType.PenisMass))]
		public bool IsAdjacentStructuresCorpusCavernosum { get; set; }

		[RadioReportId("pel_m_050431", InstanceName = nameof(MaleGenderFindingType.PenisMass))]
		public bool CorpusCavernosumRight { get; set; }

		[RadioReportId("pel_m_050432", InstanceName = nameof(MaleGenderFindingType.PenisMass))]
		public bool CorpusCavernosumLeft { get; set; }

		[RadioReportId("pel_m_050433", InstanceName = nameof(MaleGenderFindingType.PenisMass))]
		public bool IsUrethra { get; set; }

		[RadioReportId("pel_m_050435", InstanceName = nameof(MaleGenderFindingType.PenisMass))]
		public bool IsExulceration { get; set; }

		[RadioReportId("pel_m_050436", InstanceName = nameof(MaleGenderFindingType.PenisMass))]
		public bool IsScrotum { get; set; }

		[RadioReportId("pel_m_0502152", InstanceName = nameof(MaleGenderFindingType.PenisMass))]
		public MaleGenderDiagnosisType DifferentialDiagnosisPenisMass01Type { get; set; }

		[RadioReportId("pel_m_0502153", InstanceName = nameof(MaleGenderFindingType.PenisMass))]
		public MaleGenderDiagnosisType DifferentialDiagnosisPenisMass02Type { get; set; }

		#endregion

		#region ScrotumTrauma

		public TesticlesType TesticlesType { get; set; }

		[RadioReportId("pel_m_050270", InstanceName = nameof(MaleGenderFindingType.ScrotumTrauma))]
		public bool IsDiscontinuityOfTheTunicaAlbugineaLeft { get; set; }

		[RadioReportId("pel_m_050269", InstanceName = nameof(MaleGenderFindingType.ScrotumTrauma))]
		public bool IsDiscontinuityOfTheTunicaAlbugineaRight { get; set; }

		[RadioReportId("pel_m_050273", InstanceName = nameof(MaleGenderFindingType.ScrotumTrauma))]
		public bool IsHematocele { get; set; }

		[RadioReportId("pel_m_050275", InstanceName = nameof(MaleGenderFindingType.ScrotumTrauma))]
		public bool IsScrotal { get; set; }

		public DifferentialDiagnosisScrotumTraumaType DifferentialDiagnosisScrotumTraumaType { get; set; }

		[RadioReportId("pel_m_050277", InstanceName = nameof(MaleGenderFindingType.ScrotumTrauma))]
		public bool IsNonDisplacing { get; set; }

		#endregion

		#region ScrotumCryptorchidism

		[RadioReportId("pel_m_050279", InstanceName = nameof(MaleGenderFindingType.ScrotumCryptorchidism))]
		public bool IsCryptorchidismRight { get; set; }

		[RadioReportId("pel_m_050281", InstanceName = nameof(MaleGenderFindingType.ScrotumCryptorchidism))]
		public bool IsCryptorchidismLeft { get; set; }

		[RadioReportId("pel_m_050280", InstanceName = nameof(MaleGenderFindingType.ScrotumCryptorchidism))]
		public bool IsTesticularAtrophyRight { get; set; }

		[RadioReportId("pel_m_050282", InstanceName = nameof(MaleGenderFindingType.ScrotumCryptorchidism))]
		public bool IsTesticularAtrophyLeft { get; set; }

		public LocalizationOfTheNondescendedType LocalizationOfTheNondescendedType { get; set; }

		#endregion

		#region ScrotumInfectionInflammation

		[RadioReportId("pel_m_050286", InstanceName = nameof(MaleGenderFindingType.ScrotumInfectionInflammation))]
		public SignalType TesticlesSignalT2wSliderType { get; set; }

		[RadioReportId("pel_m_050287-l", InstanceName = nameof(TesticlesCMEnhancement), IsExportable = false)]
		public CMEnhancementType TesticlesCMEnhancement { get; set; }

		[RadioReportId("pel_m_050291", InstanceName = nameof(MaleGenderFindingType.ScrotumInfectionInflammation))]
		public bool IsHomogeneousTesticles { get; set; }

		[RadioReportId("pel_m_050292", InstanceName = nameof(MaleGenderFindingType.ScrotumInfectionInflammation))]
		public bool IsHeterogeneousTesticles { get; set; }

		[RadioReportId("pel_m_050346", InstanceName = nameof(MaleGenderFindingType.ScrotumInfectionInflammation))]
		public SignalType EpididymisSignalT2wSliderType { get; set; }

		[RadioReportId("pel_m_050347-l", InstanceName = nameof(EpididymisCMEnhancement), IsExportable = false)]
		public CMEnhancementType EpididymisCMEnhancement { get; set; }

		[RadioReportId("pel_m_050351", InstanceName = nameof(MaleGenderFindingType.ScrotumInfectionInflammation))]
		public bool IsHomogeneousEpididymis { get; set; }

		[RadioReportId("pel_m_0503670", InstanceName = nameof(MaleGenderFindingType.ScrotumInfectionInflammation))]
		public bool IsHeterogeneousEpididymis { get; set; }

		[RadioReportId("pel_m_050295", InstanceName = nameof(MaleGenderFindingType.ScrotumInfectionInflammation))]
		public SignalType SurroundingSoftTissueSignalT1wSliderType { get; set; }

		[RadioReportId("pel_m_050297", InstanceName = nameof(MaleGenderFindingType.ScrotumInfectionInflammation))]
		public SignalType SurroundingSoftTissueSignalT2wSliderType { get; set; }

		[RadioReportId("pel_m_050352", InstanceName = nameof(SurroundingSoftTissueCMEnhancement), IsExportable = false)]
		public CMEnhancementType SurroundingSoftTissueCMEnhancement { get; set; }

		[RadioReportId("pel_m_050362", InstanceName = nameof(MaleGenderFindingType.ScrotumInfectionInflammation))]
		public bool IsDiscontinuityOfTheTunicaAlbuginea { get; set; }

		[RadioReportId("pel_m_050363", InstanceName = nameof(MaleGenderFindingType.ScrotumInfectionInflammation))]
		public bool IsVenousInfarction { get; set; }

		[RadioReportId("pel_m_050445", InstanceName = nameof(MaleGenderFindingType.ScrotumInfectionInflammation))]
		public bool IsSinusTract { get; set; }

		[RadioReportId("pel_m_050446", InstanceName = nameof(MaleGenderFindingType.ScrotumInfectionInflammation))]
		public bool IsCutaneousFistula { get; set; }

		[RadioReportId("pel_m_050447", InstanceName = nameof(MaleGenderFindingType.ScrotumInfectionInflammation))]
		public bool IsAirFluidLevel { get; set; }

		[RadioReportId("pel_m_050449", InstanceName = nameof(MaleGenderFindingType.ScrotumInfectionInflammation))]
		public bool IsPyrocele { get; set; }

		public DifferentialDiagnosisScrotumInfectionInflammationType DifferentialDiagnosisScrotumInfectionInflammationType { get; set; }

		[RadioReportId("pel_m_0502103", InstanceName = nameof(MaleGenderFindingType.ScrotumInfectionInflammation))]
		public bool IsEpididymitisFournierGangrene { get; set; }

		[RadioReportId("pel_m_0502104", InstanceName = nameof(MaleGenderFindingType.ScrotumInfectionInflammation))]
		public bool IsEpididymoorchitis { get; set; }

        #endregion

        #region ScrotumMass
        [RadioReportId("pel_m_050365", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
		public bool IsEnlargedTesticle { get; set; }

		[RadioReportId("pel_m_050367", InstanceName = "ScrotumMass")]
		public bool IsEnlargedTesticleRight { get; set; }

		[RadioReportId("pel_m_050368", InstanceName = "ScrotumMass")]
		public bool IsEnlargedTesticleLeft { get; set; }

		[RadioReportId("pel_m_050369", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
		public bool IsEnlargedEpididymis { get; set; }

		[RadioReportId("pel_m_050371", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
		public bool IsEnlargedEpididymisRight { get; set; }

		[RadioReportId("pel_m_050372", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
		public bool IsEnlargedEpididymisLeft { get; set; }

		[RadioReportId("pel_m_050451", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
		public MaleGenderDiagnosisType DifferentialDiagnosisScrotumMassType { get; set; }

		[RadioReportId("pel_m_050245-l", InstanceName = nameof(ScrotumMassInternalChangeLocalizationType), IsExportable = false)]
		public ScrotumMassLocalizationType ScrotumMassInternalChangeLocalizationType { get; set; }

		[RadioReportId("pel_m_0502126", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
		public bool IsLooseBody { get; set; }

		[RadioReportId("pel_m_0502127", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
		public bool IsFat  { get; set; }

		public FatType FatType { get; set; }

		[RadioReportId("pel_m_050375", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
		public bool IsLobulated { get; set; }

		[RadioReportId("pel_m_050460", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
		public bool IsWashout { get; set; }

		[RadioReportId("pel_m_050461", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
		public bool IsEarlyArterialCmEnhancement { get; set; }

		[RadioReportId("pel_m_050518", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
		public bool IsTunicaVaginalis { get; set; }

		[RadioReportId("pel_m_050519", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
		public bool IsCremasterMuscle { get; set; }

		[RadioReportId("pel_m_050524", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
		public bool IsTesticularArtery { get; set; }

		[RadioReportId("pel_m_050526", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
		public bool IsTesticularArteryRight { get; set; }

		[RadioReportId("pel_m_050527", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
		public bool IsTesticularArteryLeft { get; set; }

		[RadioReportId("pel_m_050528", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
		public bool IsPampiniformPlexus { get; set; }

		[RadioReportId("pel_m_050261", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
		public MaleGenderDiagnosisType DifferentialDiagnosisScrotumMassType01 { get; set; }

		[RadioReportId("pel_m_050263", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
		public MaleGenderDiagnosisType DifferentialDiagnosisScrotumMassType02 { get; set; }

        [RadioReportId("pel_m_050491", InstanceName = nameof(MaleGenderFindingType.ScrotumMass), CustomConditionName = nameof(DescriptionType.IKnow))]
        [RadioReportId("pel_m_050384", InstanceName = nameof(MaleGenderFindingType.ScrotumMass), CustomConditionName = nameof(DescriptionType.IDescribe))]
		public bool IsScrotalPearl01 { get; set; }

		[RadioReportId("pel_m_050469", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
		public bool IsScrotalPearl02 { get; set; }

        [RadioReportId("pel_m_050490", InstanceName = nameof(MaleGenderFindingType.ScrotumMass), CustomConditionName = nameof(DescriptionType.IKnow))]
        [RadioReportId("pel_m_050380", InstanceName = nameof(MaleGenderFindingType.ScrotumMass), CustomConditionName = nameof(DescriptionType.IDescribe))]
		public bool IsSpermaticCordLipoma01 { get; set; }

		[RadioReportId("pel_m_050465", InstanceName = nameof(MaleGenderFindingType.ScrotumMass))]
		public bool IsSpermaticCordLipoma02 { get; set; }

		[RadioReportId("pel_m_050373", InstanceName = nameof(MaleGenderFindingType.SeminalVesiclesInfectionInflammation))]
		public bool IsFluidLevel { get; set; }

		#endregion

		#region SeminalVesiclesInfectionInflammation

		[RadioReportId("pel_m_0502124-l", InstanceName = nameof(SeminalVesiclesInfectionInflammationCmEnhancementType), IsExportable = false)]
		public CMEnhancementType SeminalVesiclesInfectionInflammationCmEnhancementType { get; set; }

		[RadioReportId("pel_m_0502134", InstanceName = nameof(MaleGenderFindingType.SeminalVesiclesInfectionInflammation))]
		public bool IsDiffuseWallThickening { get; set; }

		[RadioReportId("pel_m_050397", InstanceName = nameof(MaleGenderFindingType.SeminalVesiclesInfectionInflammation))]
		public bool IsDiffuse { get; set; }

		[RadioReportId("pel_m_050398", InstanceName = nameof(MaleGenderFindingType.SeminalVesiclesInfectionInflammation))]
		public bool IsParietal { get; set; }

		[RadioReportId("pel_m_050399", InstanceName = nameof(MaleGenderFindingType.SeminalVesiclesInfectionInflammation))]
		public bool IsSeptal { get; set; }

		public SeminalVesicleChannelType SeminalVesicleChannelType { get; set; }

		[RadioReportId("pel_m_050472", InstanceName = nameof(MaleGenderFindingType.SeminalVesiclesInfectionInflammation))]
		public bool IsSeminalVesiculitis { get; set; }

		#endregion

		#region SeminalVesiclesMass

		[RadioReportId("pel_m_050346", InstanceName = nameof(MaleGenderFindingType.SeminalVesiclesMass))]
		public SignalType SeminalVesiclesMassSignalT2wSliderType { get; set; }

		[RadioReportId("pel_m_050451", InstanceName = nameof(MaleGenderFindingType.SeminalVesiclesMass))]
		public MaleGenderDiagnosisType DifferentialDiagnosisSeminalVesiclesMassMainFeatures01Type { get; set; }

		[RadioReportId("pel_m_050475", InstanceName = nameof(MaleGenderFindingType.SeminalVesiclesMass))]
		public bool IsCircumscribedFluidCollection { get; set; }

		[RadioReportId("pel_m_050477", InstanceName = nameof(MaleGenderFindingType.SeminalVesiclesMass))]
		public bool IsT1wSignalBoost { get; set; }

		[RadioReportId("pel_m_050478", InstanceName = nameof(MaleGenderFindingType.SeminalVesiclesMass))]
		public bool IsCysticNecrotic { get; set; }

		[RadioReportId("pel_m_050479", InstanceName = nameof(MaleGenderFindingType.SeminalVesiclesMass))]
		public bool IsDilatationOfSeminalVesicularTubules { get; set; }

		[RadioReportId("pel_m_050529-l", InstanceName = nameof(CMEnhancementSeminalVesiclesMassType), IsExportable = false)]
		public CMEnhancementType CMEnhancementSeminalVesiclesMassType { get; set; }

		[RadioReportId("pel_m_050532-l", InstanceName = nameof(HomogeneitySeminalVesiclesMassType), IsExportable = false)]
		public HomogeneityType HomogeneitySeminalVesiclesMassType { get; set; }

		[RadioReportId("pel_m_0502145", InstanceName = nameof(MaleGenderFindingType.SeminalVesiclesMass))]
		public bool IsProstate { get; set; }

		[RadioReportId("pel_m_0502146", InstanceName = nameof(MaleGenderFindingType.SeminalVesiclesMass))]
		public bool IsUrinaryBladder { get; set; }

		[RadioReportId("pel_m_0502151", InstanceName = nameof(MaleGenderFindingType.SeminalVesiclesMass))]
		public bool IsRectum { get; set; }

		[RadioReportId("pel_m_0503119", InstanceName = nameof(MaleGenderFindingType.SeminalVesiclesMass))]
		public MaleGenderDiagnosisType DifferentialDiagnosisSeminalVesiclesMass01Type { get; set; }

		[RadioReportId("pel_m_0503121", InstanceName = nameof(MaleGenderFindingType.SeminalVesiclesMass))]
		public MaleGenderDiagnosisType DifferentialDiagnosisSeminalVesiclesMass02Type { get; set; }

        #endregion

        public bool CheckCondition(string customConditionId) =>
            customConditionId switch
            {
                nameof(MaleGenderFindingType.PenisMass) => FindingType.ToString() == customConditionId,
                nameof(MaleGenderFindingType.ScrotumMass) => FindingType.ToString() == customConditionId,
                nameof(DescriptionType.IKnow) => DescriptionType.ToString() == customConditionId,
                nameof(DescriptionType.IDescribe) => DescriptionType.ToString() == customConditionId,
                _ => false
            };
    }
}
