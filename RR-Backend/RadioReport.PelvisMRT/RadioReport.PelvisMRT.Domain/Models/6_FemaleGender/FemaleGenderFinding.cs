using RadioReport.PelvisMRT.Domain.Enums.FemaleGender;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Module.Logic.Enums.Pages;
using RadioReport.Common.Logic.Interfaces;

namespace RadioReport.PelvisMRT.Domain.Models
{
    public class FemaleGenderFinding : FemaleGenderFindingBase, IRadioReportIdConditionEvaluator
    {
        #region Common

        #region Side & Localization

        [RadioReportId("pel_m_060204", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        [RadioReportId("pel_m_060228", InstanceName = nameof(FemaleGenderFindingType.OvaryInflammation))]
        [RadioReportId("pel_m_060249", InstanceName = nameof(FemaleGenderFindingType.OvaryTorsion))]
        [RadioReportId("pel_m_0605208", InstanceName = nameof(FemaleGenderFindingType.UterineTubeMass))]
        [RadioReportId("pel_m_060228", InstanceName = nameof(FemaleGenderFindingType.UterineTubeInflammation))]
        [RadioReportId("pel_m_0605208", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        [RadioReportId("pel_m_0604142", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriInflammation))]
        [RadioReportId("pel_m_0604142", InstanceName = nameof(FemaleGenderFindingType.CervixUteriInflammation))]
        public bool IsRight { get; set; }

        [RadioReportId("pel_m_060205", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        [RadioReportId("pel_m_060229", InstanceName = nameof(FemaleGenderFindingType.OvaryInflammation))]
        [RadioReportId("pel_m_060250", InstanceName = nameof(FemaleGenderFindingType.OvaryTorsion))]
        [RadioReportId("pel_m_0605209", InstanceName = nameof(FemaleGenderFindingType.UterineTubeMass))]
        [RadioReportId("pel_m_060229", InstanceName = nameof(FemaleGenderFindingType.UterineTubeInflammation))]
        [RadioReportId("pel_m_0605209", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        [RadioReportId("pel_m_0604143", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriInflammation))]
        [RadioReportId("pel_m_0604143", InstanceName = nameof(FemaleGenderFindingType.CervixUteriInflammation))]
        public bool IsLeft { get; set; }

        [RadioReportId("pel_m_060xxx-l", InstanceName = nameof(SideType), IsExportable = false)]
        public SideType SideType { get; set; }

        [RadioReportId("pel_m_0602462-l", InstanceName = nameof(LabiaMajoraSideType), IsExportable = false)]
        public SideType LabiaMajoraSideType { get; set; }

        [RadioReportId("pel_m_0602450-l", InstanceName = nameof(LabiaMinoraSideType), IsExportable = false)]
        public SideType LabiaMinoraSideType { get; set; }

        public SideSubType SideSubType { get; set; }

        public LocalizationType LocalizationType { get; set; }

        public LocalizationSubType LocalizationSubType { get; set; }

        public LocalizationOfMassType LocalizationOfMassType { get; set; }

        [RadioReportId("pel_m_0602465", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        public EndometriosisLocalizationType EndometriosisLocalizationType { get; set; }

        #endregion

        #region DifferentialDiagnosis

        [RadioReportId("pel_m_060222", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        [RadioReportId("pel_m_0602420", InstanceName = nameof(FemaleGenderFindingType.UterineTubeMass))]
        [RadioReportId("pel_m_0604425", InstanceName = nameof(FemaleGenderFindingType.UterineTubeInflammation))]
        [RadioReportId("pel_m_0602117", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        [RadioReportId("pel_m_0602150", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        [RadioReportId("pel_m_0602183", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        [RadioReportId("pel_m_0602202", InstanceName = nameof(FemaleGenderFindingType.VulvaMass))]
        [RadioReportId("pel_m_0602460", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        public FemaleGenderDiagnosisType DifferentialDiagnosis1 { get; set; }

        [RadioReportId("pel_m_060224", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        [RadioReportId("pel_m_0602421", InstanceName = nameof(FemaleGenderFindingType.UterineTubeMass))]
        [RadioReportId("pel_m_0604427", InstanceName = nameof(FemaleGenderFindingType.UterineTubeInflammation))]
        [RadioReportId("pel_m_0602119", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        [RadioReportId("pel_m_0602152", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        [RadioReportId("pel_m_0602185", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        [RadioReportId("pel_m_0602204", InstanceName = nameof(FemaleGenderFindingType.VulvaMass))]
        [RadioReportId("pel_m_0602461", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        public FemaleGenderDiagnosisType DifferentialDiagnosis2 { get; set; }

        [RadioReportId("pel_m_060225", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        [RadioReportId("pel_m_060225", InstanceName = nameof(FemaleGenderFindingType.UterineTubeMass))]
        [RadioReportId("pel_m_0604428", InstanceName = nameof(FemaleGenderFindingType.UterineTubeInflammation))]
        [RadioReportId("pel_m_0602120", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        [RadioReportId("pel_m_0602153", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        [RadioReportId("pel_m_0602186", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        [RadioReportId("pel_m_0602205", InstanceName = nameof(FemaleGenderFindingType.VulvaMass))]
        [RadioReportId("pel_m_0602186", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        public bool IsSubordinate { get; set; }

        [RadioReportId("pel_m_060xxx-l", InstanceName = nameof(DifferentialDiagnosisType1), IsExportable = false)]
        public DifferentialDiagnosisType DifferentialDiagnosisType1 { get; set; }

        [RadioReportId("pel_m_060xxx-l", InstanceName = nameof(DifferentialDiagnosisType2), IsExportable = false)]
        public DifferentialDiagnosisType DifferentialDiagnosisType2 { get; set; }

        #endregion

        #region Signal

        [RadioReportId("pel_m_0605217", InstanceName = nameof(FemaleGenderFindingType.UterineTubeInflammation))]
        [RadioReportId("pel_m_0602447", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriInflammation))]
        [RadioReportId("pel_m_0602447", InstanceName = nameof(FemaleGenderFindingType.CervixUteriInflammation))]
        [RadioReportId("pel_m_0602447", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        public SignalType AdditionalT2wSignal { get; set; }

        #endregion

        #region ContrastEnhancement & Homogenity

        [RadioReportId("pel_m_060xxx-l", InstanceName = nameof(ContrastEnhancementType2), IsExportable = false)]
        public ContrastEnhancementType ContrastEnhancementType2 { get; set; }

        [RadioReportId("pel_m_060xxx-l", InstanceName = nameof(ContrastEnhancementHomogenityType2), IsExportable = false)]
        public HomogenityType ContrastEnhancementHomogenityType2 { get; set; }

        [RadioReportId("pel_m_060xxx-l", InstanceName = nameof(ContrastEnhancementType3), IsExportable = false)]
        public ContrastEnhancementType ContrastEnhancementType3 { get; set; }

        [RadioReportId("pel_m_060xxx-l", InstanceName = nameof(IntactCervicalStromaRingHomogenityType), IsExportable = false)]
        public HomogenityType IntactCervicalStromaRingHomogenityType { get; set; }

        #endregion

        public DescriptionType DescriptionType { get; set; }

        [RadioReportId("pel_m_060206", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        [RadioReportId("pel_m_0603416", InstanceName = nameof(FemaleGenderFindingType.UterineTubeMass))]
        [RadioReportId("pel_m_060206", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        [RadioReportId("pel_m_060206", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        [RadioReportId("pel_m_0603212", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        [RadioReportId("pel_m_0603212", InstanceName = nameof(FemaleGenderFindingType.VulvaMass))]
        [RadioReportId("pel_m_060206", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        public int? SizeInMm { get; set; }

        [RadioReportId("pel_m_060208", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        [RadioReportId("pel_m_0603419", InstanceName = nameof(FemaleGenderFindingType.UterineTubeMass))]
        [RadioReportId("pel_m_060208", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        [RadioReportId("pel_m_060208", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        [RadioReportId("pel_m_0603214", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        [RadioReportId("pel_m_0603214", InstanceName = nameof(FemaleGenderFindingType.VulvaMass))]
        [RadioReportId("pel_m_060208", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        public int? SecondPlaneInMm { get; set; }

        [RadioReportId("pel_m_060210", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        [RadioReportId("pel_m_0603422", InstanceName = nameof(FemaleGenderFindingType.UterineTubeMass))]
        [RadioReportId("pel_m_060210", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        [RadioReportId("pel_m_060210", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        [RadioReportId("pel_m_0603216", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        [RadioReportId("pel_m_0603216", InstanceName = nameof(FemaleGenderFindingType.VulvaMass))]
        [RadioReportId("pel_m_060210", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        public int? ThirdPlaneInMm { get; set; }

        [RadioReportId("pel_m_060414", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        [RadioReportId("pel_m_0604413", InstanceName = nameof(FemaleGenderFindingType.UterineTubeMass))]
        [RadioReportId("pel_m_0604413", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        public bool IsPeritonealNodules { get; set; }

        [RadioReportId("pel_m_060415", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        [RadioReportId("pel_m_0604416", InstanceName = nameof(FemaleGenderFindingType.UterineTubeMass))]
        [RadioReportId("pel_m_0604416", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        public bool IsRectouterinePouch { get; set; }

        [RadioReportId("pel_m_060418", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        [RadioReportId("pel_m_0603406", InstanceName = nameof(FemaleGenderFindingType.OvaryInflammation))]
        [RadioReportId("pel_m_060450", InstanceName = nameof(FemaleGenderFindingType.OvaryTorsion))]
        [RadioReportId("pel_m_0604417", InstanceName = nameof(FemaleGenderFindingType.UterineTubeMass))]
        [RadioReportId("pel_m_0603406", InstanceName = nameof(FemaleGenderFindingType.UterineTubeInflammation))]
        [RadioReportId("pel_m_0605243", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriInflammation))]
        [RadioReportId("pel_m_0605243", InstanceName = nameof(FemaleGenderFindingType.CervixUteriInflammation))]
        [RadioReportId("pel_m_0604417", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        public bool IsAscites { get; set; }

        [RadioReportId("pel_m_060419", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        [RadioReportId("pel_m_0603407", InstanceName = nameof(FemaleGenderFindingType.OvaryInflammation))]
        [RadioReportId("pel_m_060451", InstanceName = nameof(FemaleGenderFindingType.OvaryTorsion))]
        [RadioReportId("pel_m_0604418", InstanceName = nameof(FemaleGenderFindingType.UterineTubeMass))]
        [RadioReportId("pel_m_0603407", InstanceName = nameof(FemaleGenderFindingType.UterineTubeInflammation))]
        [RadioReportId("pel_m_0605244", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriInflammation))]
        [RadioReportId("pel_m_0605244", InstanceName = nameof(FemaleGenderFindingType.CervixUteriInflammation))]
        [RadioReportId("pel_m_0604418", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        public bool IsAscitesT1wSignalIncrease { get; set; }

        [RadioReportId("pel_m_060420", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        [RadioReportId("pel_m_0603408", InstanceName = nameof(FemaleGenderFindingType.OvaryInflammation))]
        [RadioReportId("pel_m_060452", InstanceName = nameof(FemaleGenderFindingType.OvaryTorsion))]
        [RadioReportId("pel_m_0604419", InstanceName = nameof(FemaleGenderFindingType.UterineTubeMass))]
        [RadioReportId("pel_m_0603408", InstanceName = nameof(FemaleGenderFindingType.UterineTubeInflammation))]
        [RadioReportId("pel_m_0605245", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriInflammation))]
        [RadioReportId("pel_m_0605245", InstanceName = nameof(FemaleGenderFindingType.CervixUteriInflammation))]
        [RadioReportId("pel_m_0604419", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        public bool IsHemosiderin { get; set; }

        [RadioReportId("pel_m_060421", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        [RadioReportId("pel_m_0603409", InstanceName = nameof(FemaleGenderFindingType.OvaryInflammation))]
        [RadioReportId("pel_m_060453", InstanceName = nameof(FemaleGenderFindingType.OvaryTorsion))]
        [RadioReportId("pel_m_0604420", InstanceName = nameof(FemaleGenderFindingType.UterineTubeMass))]
        [RadioReportId("pel_m_0603409", InstanceName = nameof(FemaleGenderFindingType.UterineTubeInflammation))]
        [RadioReportId("pel_m_0602434", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        [RadioReportId("pel_m_0605246", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriInflammation))]
        [RadioReportId("pel_m_0605246", InstanceName = nameof(FemaleGenderFindingType.CervixUteriInflammation))]
        [RadioReportId("pel_m_0604420", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        public bool IsFocal { get; set; }

        [RadioReportId("pel_m_060422", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        [RadioReportId("pel_m_0603410", InstanceName = nameof(FemaleGenderFindingType.OvaryInflammation))]
        [RadioReportId("pel_m_060454", InstanceName = nameof(FemaleGenderFindingType.OvaryTorsion))]
        [RadioReportId("pel_m_0604421", InstanceName = nameof(FemaleGenderFindingType.UterineTubeMass))]
        [RadioReportId("pel_m_0603410", InstanceName = nameof(FemaleGenderFindingType.UterineTubeInflammation))]
        [RadioReportId("pel_m_0605247", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriInflammation))]
        [RadioReportId("pel_m_0605247", InstanceName = nameof(FemaleGenderFindingType.CervixUteriInflammation))]
        [RadioReportId("pel_m_0604421", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        public bool IsGeneralized { get; set; }

        [RadioReportId("pel_m_060516", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        [RadioReportId("pel_m_0605210", InstanceName = nameof(FemaleGenderFindingType.UterineTubeMass))]
        public bool IsUterus { get; set; }

        [RadioReportId("pel_m_060517", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        [RadioReportId("pel_m_0605211", InstanceName = nameof(FemaleGenderFindingType.UterineTubeMass))]
        [RadioReportId("pel_m_0605211", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        [RadioReportId("pel_m_0604456", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        [RadioReportId("pel_m_0605211", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        public bool IsParametria { get; set; }

        [RadioReportId("pel_m_060518", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        [RadioReportId("pel_m_0605212", InstanceName = nameof(FemaleGenderFindingType.UterineTubeMass))]
        [RadioReportId("pel_m_0605212", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        [RadioReportId("pel_m_0604460", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        [RadioReportId("pel_m_0605212", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        [RadioReportId("pel_m_0605212", InstanceName = nameof(FemaleGenderFindingType.VulvaMass))]
        public bool IsUrinaryBladder { get; set; }

        [RadioReportId("pel_m_060327", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        [RadioReportId("pel_m_060240", InstanceName = nameof(FemaleGenderFindingType.OvaryInflammation))]
        [RadioReportId("pel_m_060240", InstanceName = nameof(FemaleGenderFindingType.UterineTubeInflammation))]
        public bool IsTuboovarianAbscess1 { get; set; }

        [RadioReportId("pel_m_060431", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        public bool IsTuboovarianAbscess2 { get; set; }

        [RadioReportId("pel_m_060230", InstanceName = nameof(FemaleGenderFindingType.OvaryInflammation))]
        [RadioReportId("pel_m_0602122", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriInflammation))]
        [RadioReportId("pel_m_0602122", InstanceName = nameof(FemaleGenderFindingType.CervixUteriInflammation))]
        public bool IsEnlarged { get; set; }

        [RadioReportId("pel_m_060233", InstanceName = nameof(FemaleGenderFindingType.OvaryInflammation))]
        [RadioReportId("pel_m_060350", InstanceName = nameof(FemaleGenderFindingType.OvaryTorsion))]
        public bool IsTwistedOvarianVessel { get; set; }

        [RadioReportId("pel_m_060235", InstanceName = nameof(FemaleGenderFindingType.OvaryInflammation))]
        [RadioReportId("pel_m_060256", InstanceName = nameof(FemaleGenderFindingType.OvaryTorsion))]
        public bool IsPeripheralFollicularDisplacement { get; set; }

        public SurroundingDetailsType SurroundingDetailsType { get; set; }

        [RadioReportId("pel_m_060237", InstanceName = nameof(FemaleGenderFindingType.OvaryInflammation))]
        [RadioReportId("pel_m_060237", InstanceName = nameof(FemaleGenderFindingType.UterineTubeInflammation))]
        [RadioReportId("pel_m_0604141", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriInflammation))]
        [RadioReportId("pel_m_0604141", InstanceName = nameof(FemaleGenderFindingType.CervixUteriInflammation))]
        public bool IsOvarianVeinThrombosis { get; set; }

        [RadioReportId("pel_m_060241", InstanceName = nameof(FemaleGenderFindingType.OvaryInflammation))]
        [RadioReportId("pel_m_060348", InstanceName = nameof(FemaleGenderFindingType.OvaryTorsion))]
        [RadioReportId("pel_m_060241", InstanceName = nameof(FemaleGenderFindingType.UterineTubeInflammation))]
        [RadioReportId("pel_m_0603480", InstanceName = nameof(FemaleGenderFindingType.VulvaInflammation))]
        public int? ExpansionInMm { get; set; }

        [RadioReportId("pel_m_0602406", InstanceName = nameof(FemaleGenderFindingType.OvaryInflammation))]
        [RadioReportId("pel_m_0602423", InstanceName = nameof(FemaleGenderFindingType.UterineTubeInflammation))]
        [RadioReportId("pel_m_0604149", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriInflammation))]
        [RadioReportId("pel_m_0604149", InstanceName = nameof(FemaleGenderFindingType.CervixUteriInflammation))]
        public bool IsPeritonealContrastEnhancement { get; set; }

        [RadioReportId("pel_m_0602410", InstanceName = nameof(FemaleGenderFindingType.OvaryInflammation))]
        [RadioReportId("pel_m_0602427", InstanceName = nameof(FemaleGenderFindingType.UterineTubeInflammation))]
        [RadioReportId("pel_m_0604153", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriInflammation))]
        [RadioReportId("pel_m_0604153", InstanceName = nameof(FemaleGenderFindingType.CervixUteriInflammation))]
        public bool IsIleus { get; set; }

        [RadioReportId("pel_m_0602411", InstanceName = nameof(FemaleGenderFindingType.OvaryInflammation))]
        [RadioReportId("pel_m_0602428", InstanceName = nameof(FemaleGenderFindingType.UterineTubeInflammation))]
        [RadioReportId("pel_m_0604154", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriInflammation))]
        [RadioReportId("pel_m_0604459", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        [RadioReportId("pel_m_0604154", InstanceName = nameof(FemaleGenderFindingType.CervixUteriInflammation))]
        [RadioReportId("pel_m_0603493", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        public bool IsHydroureter { get; set; }

        [RadioReportId("pel_m_060446", InstanceName = nameof(FemaleGenderFindingType.OvaryInflammation))]
        [RadioReportId("pel_m_060566", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriInflammation))]
        [RadioReportId("pel_m_060566", InstanceName = nameof(FemaleGenderFindingType.CervixUteriInflammation))]
        public bool IsPID { get; set; }

        [RadioReportId("pel_m_0604408", InstanceName = nameof(FemaleGenderFindingType.OvaryTorsion))]
        [RadioReportId("pel_m_0604412", InstanceName = nameof(FemaleGenderFindingType.UterineTubeMass))]
        public bool IsHydrosalpinxT1wSignalIncrease { get; set; }

        [RadioReportId("pel_m_0603431", InstanceName = nameof(FemaleGenderFindingType.UterineTubeMass))]
        [RadioReportId("pel_m_0603259", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        public bool IsHeterogeneousNodularParts { get; set; }

        [RadioReportId("pel_m_0603432", InstanceName = nameof(FemaleGenderFindingType.UterineTubeMass))]
        [RadioReportId("pel_m_0604422", InstanceName = nameof(FemaleGenderFindingType.UterineTubeInflammation))]
        [RadioReportId("pel_m_0605273", InstanceName = nameof(FemaleGenderFindingType.VulvaInflammation))]
        public bool IsParietal { get; set; }

        [RadioReportId("pel_m_0604414", InstanceName = nameof(FemaleGenderFindingType.UterineTubeMass))]
        [RadioReportId("pel_m_0604414", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        public bool IsUnifocal { get; set; }

        [RadioReportId("pel_m_0604415", InstanceName = nameof(FemaleGenderFindingType.UterineTubeMass))]
        [RadioReportId("pel_m_0604415", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        public bool IsMultifocal { get; set; }

        [RadioReportId("pel_m_0605206", InstanceName = nameof(FemaleGenderFindingType.UterineTubeMass))]
        [RadioReportId("pel_m_0605206", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        [RadioReportId("pel_m_0604462", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        public bool IsOvary { get; set; }

        [RadioReportId("pel_m_0605213", InstanceName = nameof(FemaleGenderFindingType.UterineTubeMass))]
        [RadioReportId("pel_m_0605213", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        [RadioReportId("pel_m_0604461", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        [RadioReportId("pel_m_0605213", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        public bool IsRectum { get; set; }

        [RadioReportId("pel_m_0603435", InstanceName = nameof(FemaleGenderFindingType.UterineTubeInflammation))]
        [RadioReportId("pel_m_0604484", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        public bool IsWallThickening { get; set; }

        [RadioReportId("pel_m_0605227", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        [RadioReportId("pel_m_0605227", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        [RadioReportId("pel_m_0602463", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        [RadioReportId("pel_m_0602463", InstanceName = nameof(FemaleGenderFindingType.VulvaMass))]
        [RadioReportId("pel_m_0602463", InstanceName = nameof(FemaleGenderFindingType.VulvaInflammation))]
        public bool IsFat { get; set; }

        [RadioReportId("pel_m_0605228", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        [RadioReportId("pel_m_0605228", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        [RadioReportId("pel_m_0602451", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        [RadioReportId("pel_m_0602451", InstanceName = nameof(FemaleGenderFindingType.VulvaMass))]
        [RadioReportId("pel_m_0602451", InstanceName = nameof(FemaleGenderFindingType.VulvaInflammation))]
        public bool IsCysts { get; set; }

        [RadioReportId("pel_m_0605233", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        [RadioReportId("pel_m_0605233", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        [RadioReportId("pel_m_0602456", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        [RadioReportId("pel_m_0602456", InstanceName = nameof(FemaleGenderFindingType.VulvaMass))]
        [RadioReportId("pel_m_0602456", InstanceName = nameof(FemaleGenderFindingType.VulvaInflammation))]
        [RadioReportId("pel_m_0604491", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        public bool IsSignalVoids { get; set; }

        public WideningObstructionType WideningObstructionType { get; set; }

        [RadioReportId("pel_m_0604441", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        [RadioReportId("pel_m_0603462", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        public bool IsObstructionOfTheEndometrialCanal { get; set; }

        [RadioReportId("pel_m_0605239", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        [RadioReportId("pel_m_0605239", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        public bool IsCervixUteri { get; set; }

        [RadioReportId("pel_m_0605241", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        [RadioReportId("pel_m_0604455", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        [RadioReportId("pel_m_0605241", InstanceName = nameof(FemaleGenderFindingType.VulvaMass))]
        public bool IsVagina { get; set; }

        [RadioReportId("pel_m_060xxx-l", InstanceName = nameof(FigoStageType1), IsExportable = false)]
        public FigoStageType FigoStageType1 { get; set; }

        [RadioReportId("pel_m_060xxx-l", InstanceName = nameof(FigoStageType2), IsExportable = false)]
        public FigoStageType FigoStageType2 { get; set; }

        [RadioReportId("pel_m_0603453", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass), CustomConditionName = nameof(FigoStageType1) + nameof(FigoStageType.StageI))]
        [RadioReportId("pel_m_0603455", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass), CustomConditionName = nameof(FigoStageType1) + nameof(FigoStageType.StageIII))]
        [RadioReportId("pel_m_0603459", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass), CustomConditionName = nameof(FigoStageType1) + nameof(FigoStageType.StageIV))]
        [RadioReportId("pel_m_0603469", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass), CustomConditionName = nameof(FigoStageType1) + nameof(FigoStageType.StageII))]
        [RadioReportId("pel_m_0603472", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass), CustomConditionName = nameof(FigoStageType1) + nameof(FigoStageType.StageIII))]
        [RadioReportId("pel_m_060363", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass), CustomConditionName = nameof(FigoStageType1) + nameof(FigoStageType.StageIV))]
        public FigoStageDetailsType FigoStageDetailsType1 { get; set; }

        [RadioReportId("pel_m_0604445", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass), CustomConditionName = nameof(FigoStageType2) + nameof(FigoStageType.StageI))]
        [RadioReportId("pel_m_0604447", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass), CustomConditionName = nameof(FigoStageType2) + nameof(FigoStageType.StageIII))]
        [RadioReportId("pel_m_0604451", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass), CustomConditionName = nameof(FigoStageType2) + nameof(FigoStageType.StageIV))]
        [RadioReportId("pel_m_0604470", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass), CustomConditionName = nameof(FigoStageType2) + nameof(FigoStageType.StageII))]
        [RadioReportId("pel_m_0604473", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass), CustomConditionName = nameof(FigoStageType2) + nameof(FigoStageType.StageIII))]
        [RadioReportId("pel_m_0604500", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass), CustomConditionName = nameof(FigoStageType2) + nameof(FigoStageType.StageIV))]
        public FigoStageDetailsType FigoStageDetailsType2 { get; set; }

        [RadioReportId("pel_m_0603457", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass), CustomConditionName = nameof(FigoStageType1) + nameof(FigoStageType.StageIII))]
        [RadioReportId("pel_m_0603467", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass), CustomConditionName = nameof(FigoStageType1) + nameof(FigoStageType.StageI))]
        [RadioReportId("pel_m_0603470", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass), CustomConditionName = nameof(FigoStageType1) + nameof(FigoStageType.StageII))]
        public FigoStageDetailsType FigoStageAdditionalDetailsType1 { get; set; }

        [RadioReportId("pel_m_0604449", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass), CustomConditionName = nameof(FigoStageType2) + nameof(FigoStageType.StageIII))]
        [RadioReportId("pel_m_0604468", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass), CustomConditionName = nameof(FigoStageType2) + nameof(FigoStageType.StageI))]
        [RadioReportId("pel_m_0604471", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass), CustomConditionName = nameof(FigoStageType2) + nameof(FigoStageType.StageII))]
        public FigoStageDetailsType FigoStageAdditionalDetailsType2 { get; set; }

        [RadioReportId("pel_m_0602124", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriInflammation))]
        [RadioReportId("pel_m_0602124", InstanceName = nameof(FemaleGenderFindingType.CervixUteriInflammation))]
        public bool IsThickenedEndometrium { get; set; }

        [RadioReportId("pel_m_0603145", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriInflammation))]
        [RadioReportId("pel_m_0603145", InstanceName = nameof(FemaleGenderFindingType.CervixUteriInflammation))]
        public bool IsThickenedUterosacralLigaments { get; set; }

        [RadioReportId("pel_m_0603147", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriInflammation))]
        [RadioReportId("pel_m_0603147", InstanceName = nameof(FemaleGenderFindingType.CervixUteriInflammation))]
        public bool IsContrastEnhancement { get; set; }

        [RadioReportId("pel_m_0605252", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        [RadioReportId("pel_m_0602458", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        [RadioReportId("pel_m_0602458", InstanceName = nameof(FemaleGenderFindingType.VulvaMass))]
        [RadioReportId("pel_m_0602458", InstanceName = nameof(FemaleGenderFindingType.VulvaInflammation))]
        [RadioReportId("pel_m_0605274", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        public bool IsPossiblySuperinfectedOrNecroticAreas { get; set; }

        [RadioReportId("pel_m_0604458", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        [RadioReportId("pel_m_0605261", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        public bool IsUreter { get; set; }

        [RadioReportId("pel_m_0603473", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        [RadioReportId("pel_m_0603473", InstanceName = nameof(FemaleGenderFindingType.VulvaMass))]
        public bool IsMarginal { get; set; }

        [RadioReportId("pel_m_0602466", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        [RadioReportId("pel_m_0602466", InstanceName = nameof(FemaleGenderFindingType.VulvaMass))]
        [RadioReportId("pel_m_0602466", InstanceName = nameof(FemaleGenderFindingType.VulvaInflammation))]
        [RadioReportId("pel_m_0604488", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        public bool IsCapsule { get; set; }

        [RadioReportId("pel_m_0603231", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        [RadioReportId("pel_m_0603241", InstanceName = nameof(FemaleGenderFindingType.VulvaMass))]
        public bool IsDegeneration1 { get; set; }

        [RadioReportId("pel_m_0604209", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        [RadioReportId("pel_m_0604216", InstanceName = nameof(FemaleGenderFindingType.VulvaMass))]
        public bool IsDegeneration2 { get; set; }

        [RadioReportId("pel_m_0603233", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        [RadioReportId("pel_m_0603478", InstanceName = nameof(FemaleGenderFindingType.VulvaInflammation))]
        public bool IsAbscess1 { get; set; }

        [RadioReportId("pel_m_0604211", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        public bool IsAbscess2 { get; set; }

        #endregion

        #region OvaryMass

        [RadioReportId("pel_m_0603401", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        public bool IsDetectionOfACapsule { get; set; }

        [RadioReportId("pel_m_0603402", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        public bool IsExpansionBeyondTheCapsule { get; set; }

        [RadioReportId("pel_m_060508", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        public bool IsComplexCysticNodularParts { get; set; }

        public DceMriType DceMriType { get; set; }

        [RadioReportId("pel_m_060317", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        public bool IsCentripetalEnhancement { get; set; }

        [RadioReportId("pel_m_0603404", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        public bool IsBeakSign { get; set; }

        public PeritonealNodulesType PeritonealNodulesType { get; set; }

        [RadioReportId("pel_m_060513", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        public bool IsTubes { get; set; }

        [RadioReportId("pel_m_060519", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        public bool IsIntestine { get; set; }

        [RadioReportId("pel_m_060322", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        public bool IsFollicularCysts1 { get; set; }

        [RadioReportId("pel_m_060427", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        public bool IsFollicularCysts2 { get; set; }

        [RadioReportId("pel_m_060326", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        public bool IsCystadenofibroma1 { get; set; }

        [RadioReportId("pel_m_060430", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        public bool IsCystadenofibroma2 { get; set; }

        [RadioReportId("pel_m_060328", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        public bool IsSalpingitis1 { get; set; }

        [RadioReportId("pel_m_060432", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        public bool IsSalpingitis2 { get; set; }

        [RadioReportId("pel_m_060329", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        public bool IsKrukenbergTumor1 { get; set; }

        [RadioReportId("pel_m_060433", InstanceName = nameof(FemaleGenderFindingType.OvaryMass))]
        public bool IsKrukenbergTumor2 { get; set; }

        #endregion

        #region OvaryInflammation

        [RadioReportId("pel_m_060231", InstanceName = nameof(FemaleGenderFindingType.OvaryInflammation))]
        public bool IsDetailsT2wSignalIncrease { get; set; }

        [RadioReportId("pel_m_060232", InstanceName = nameof(FemaleGenderFindingType.OvaryInflammation))]
        public bool IsPolycysticChanges { get; set; }

        [RadioReportId("pel_m_060234", InstanceName = nameof(FemaleGenderFindingType.OvaryInflammation))]
        public bool IsCentralStromaEnlargement { get; set; }

        [RadioReportId("pel_m_060435", InstanceName = nameof(FemaleGenderFindingType.OvaryInflammation))]
        public bool IsSurroundingT2wSignalIncrease { get; set; }

        #endregion

        #region OvaryTorsion

        [RadioReportId("pel_m_060255", InstanceName = nameof(FemaleGenderFindingType.OvaryTorsion))]
        public bool IsEnlargementOfTheCentralAfollicularStromas { get; set; }

        [RadioReportId("pel_m_060257", InstanceName = nameof(FemaleGenderFindingType.OvaryTorsion))]
        public bool IsHematoma { get; set; }

        [RadioReportId("pel_m_060258", InstanceName = nameof(FemaleGenderFindingType.OvaryTorsion))]
        public bool IsFocalOrParietalT1wSignalIncrease { get; set; }

        [RadioReportId("pel_m_0603412", InstanceName = nameof(FemaleGenderFindingType.OvaryTorsion))]
        public bool IsEnlargedOvary { get; set; }

        [RadioReportId("pel_m_0603413", InstanceName = nameof(FemaleGenderFindingType.OvaryTorsion))]
        public bool IsT2wSignalIncrease { get; set; }

        [RadioReportId("pel_m_060347", InstanceName = nameof(FemaleGenderFindingType.OvaryTorsion))]
        public bool IsOvarianMass { get; set; }

        [RadioReportId("pel_m_060351", InstanceName = nameof(FemaleGenderFindingType.OvaryTorsion))]
        public bool IsHematosalpinx { get; set; }

        [RadioReportId("pel_m_060352", InstanceName = nameof(FemaleGenderFindingType.OvaryTorsion))]
        public bool IsIpsilateralUterineDeviation { get; set; }

        #endregion

        #region UterineTubeMass

        public ComplexCysticType ComplexCysticType { get; set; }

        [RadioReportId("pel_m_0605214", InstanceName = nameof(FemaleGenderFindingType.UterineTubeMass))]
        public bool IsOtherIntestineParts { get; set; }

        #endregion

        #region UterineTubeInflammation

        [RadioReportId("pel_m_0603436", InstanceName = nameof(FemaleGenderFindingType.UterineTubeInflammation))]
        public bool IsDilatedLumen { get; set; }

        [RadioReportId("pel_m_0603437", InstanceName = nameof(FemaleGenderFindingType.UterineTubeInflammation))]
        public bool IsIntraluminalFluid { get; set; }

        #endregion

        #region CorpusUteriMass

        [RadioReportId("pel_m_060293", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        public UterusLocations UterusLocation { get; set; }

        [RadioReportId("pel_m_060378", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        public int? SizeUterusAxialInMm { get; set; }

        [RadioReportId("pel_m_060380", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        public int? SecondPlaneOrthogonalInMm { get; set; }

        [RadioReportId("pel_m_060382", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        public int? CraniocaudalInMm { get; set; }

        [RadioReportId("pel_m_060384", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        public int? DiameterOfTheEndometriumInMm { get; set; }

        [RadioReportId("pel_m_060386", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        public int? DiameterOfEndometrialMyometrialZoneInMm { get; set; }

        [RadioReportId("pel_m_060532", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        public bool IsMucosalOrSubmucosal { get; set; }

        [RadioReportId("pel_m_060533", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        public bool IsMucosalOrSubmucosalPedunculated { get; set; }

        [RadioReportId("pel_m_060534", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        public int? MucosalOrSubmucosalLengthInMm { get; set; }

        [RadioReportId("pel_m_060536", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        public bool IsIntramural { get; set; }

        [RadioReportId("pel_m_0604107", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        public bool IsSubserous { get; set; }

        [RadioReportId("pel_m_0604108", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        public bool IsSubserousPedunculated { get; set; }

        [RadioReportId("pel_m_0604109", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        public int? SubserousLengthInMm { get; set; }

        [RadioReportId("pel_m_0604111", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        public bool IsExtensionIntoTheLigamentumLatumUteri { get; set; }

        [RadioReportId("pel_m_0605234", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        public bool IsPerifocalEdema { get; set; }

        [RadioReportId("pel_m_0605235", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        public bool IsAbnormalVesselCollection { get; set; }

        [RadioReportId("pel_m_0605236", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        public bool IsCentralNidus { get; set; }

        [RadioReportId("pel_m_0605237", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        public bool IsLobulated { get; set; }

        [RadioReportId("pel_m_0605238", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        public bool IsFluidLevel { get; set; }

        [RadioReportId("pel_m_0604438", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        public bool IsWideningOfTheInternalUterineOstium { get; set; }

        [RadioReportId("pel_m_0605240", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        public bool IsIntactRingOfTheCervicalStroma { get; set; }

        [RadioReportId("pel_m_0603114", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        public FigoClassificationLocations FigoClassificationLocation1 { get; set; }

        [RadioReportId("pel_m_0604120", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        public FigoClassificationLocations FigoClassificationLocation2 { get; set; }

        [RadioReportId("pel_m_0604122", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        public DegenerationType DegenerationType2 { get; set; }

        [RadioReportId("pel_m_0603121", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        public bool IsTorsion1 { get; set; }

        [RadioReportId("pel_m_0604127", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriMass))]
        public bool IsTorsion2 { get; set; }

        #endregion

        #region CorpusUteriInflammation

        [RadioReportId("pel_m_0602126", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriInflammation))]
        public bool IsFocalSignalVoidIntrauterine { get; set; }

        [RadioReportId("pel_m_0603148", InstanceName = nameof(FemaleGenderFindingType.CorpusUteriInflammation))]
        public bool IsMarkedUterineVessels { get; set; }

        #endregion

        #region CervixUteriMass

        [RadioReportId("pel_m_0603158", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        public bool IsIntactCervicalStromaRing { get; set; }

        [RadioReportId("pel_m_0603160", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        public bool IsDetailsCapsule { get; set; }

        [RadioReportId("pel_m_0605250", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        public bool IsAlteredInternalStructureCapsule { get; set; }

        [RadioReportId("pel_m_0604454", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        public bool IsCorpusUteri { get; set; }

        [RadioReportId("pel_m_0604457", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        public bool IsPelvisWall { get; set; }

        [RadioReportId("pel_m_0603179", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        public bool Is1BMacroinvasiveLesion1 { get; set; }

       [RadioReportId("pel_m_0604167", InstanceName = nameof(FemaleGenderFindingType.CervixUteriMass))]
        public bool Is1BMacroinvasiveLesion2 { get; set; }

        #endregion

        #region CervixUteriInflammation

        [RadioReportId("pel_m_0602125", InstanceName = nameof(FemaleGenderFindingType.CervixUteriInflammation))]
        public bool IsFocalSignalVoidsInTheCervicalCanal { get; set; }

        [RadioReportId("pel_m_0603170", InstanceName = nameof(FemaleGenderFindingType.CervixUteriInflammation))]
        public bool IsMarkedCervicalVessels { get; set; }

        #endregion

        #region VaginaMass

        [RadioReportId("pel_m_0603475", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        public bool IsFistula { get; set; }

        [RadioReportId("pel_m_0603476", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        public bool IsVesicovaginal { get; set; }

        [RadioReportId("pel_m_0603477", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        public bool IsRectovaginal { get; set; }

        [RadioReportId("pel_m_0605259", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        public bool IsParavaginalSoftTissue { get; set; }

        [RadioReportId("pel_m_0605260", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        public bool IsPelvicWall { get; set; }

        [RadioReportId("pel_m_0605262", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        public bool IsPeritoneum { get; set; }

        [RadioReportId("pel_m_0603232", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        public bool IsBartholinitis1 { get; set; }

        [RadioReportId("pel_m_0604210", InstanceName = nameof(FemaleGenderFindingType.VaginaMass))]
        public bool IsBartholinitis2 { get; set; }

        #endregion

        #region VulvaMass

        [RadioReportId("pel_m_0602464", InstanceName = nameof(FemaleGenderFindingType.VulvaMass))]
        public bool IsFluidDebrisLevel { get; set; }

        [RadioReportId("pel_m_0602199", InstanceName = nameof(FemaleGenderFindingType.VulvaMass))]
        public bool IsVaginalDisplacement { get; set; }

        [RadioReportId("pel_m_0605263", InstanceName = nameof(FemaleGenderFindingType.VulvaMass))]
        public bool IsPerineum { get; set; }

        [RadioReportId("pel_m_0605264", InstanceName = nameof(FemaleGenderFindingType.VulvaMass))]
        public bool IsUrethra { get; set; }

        [RadioReportId("pel_m_0605265", InstanceName = nameof(FemaleGenderFindingType.VulvaMass))]
        public bool IsAnalSphincter { get; set; }

        [RadioReportId("pel_m_0605266", InstanceName = nameof(FemaleGenderFindingType.VulvaMass))]
        public bool IsAnusOrRectum { get; set; }

        [RadioReportId("pel_m_0603242", InstanceName = nameof(FemaleGenderFindingType.VulvaMass))]
        public bool IsUrethralLeiomyoma1 { get; set; }

        [RadioReportId("pel_m_0604217", InstanceName = nameof(FemaleGenderFindingType.VulvaMass))]
        public bool IsUrethralLeiomyoma2 { get; set; }

        [RadioReportId("pel_m_0603243", InstanceName = nameof(FemaleGenderFindingType.VulvaMass))]
        public bool IsUrethralMetastasis1 { get; set; }

        [RadioReportId("pel_m_0604218", InstanceName = nameof(FemaleGenderFindingType.VulvaMass))]
        public bool IsUrethralMetastasis2 { get; set; }

        #endregion

        #region VulvaInflammation

        [RadioReportId("pel_m_0603252", InstanceName = nameof(FemaleGenderFindingType.VulvaInflammation))]
        public bool IsSoftTissueSwelling { get; set; }

        [RadioReportId("pel_m_0603482", InstanceName = nameof(FemaleGenderFindingType.VulvaInflammation))]
        public bool IsFourniersGangrene { get; set; }

        [RadioReportId("pel_m_0603483", InstanceName = nameof(FemaleGenderFindingType.VulvaInflammation))]
        public bool IsVenousThrombosis { get; set; }

        [RadioReportId("pel_m_0603484", InstanceName = nameof(FemaleGenderFindingType.VulvaInflammation))]
        public bool IsT2wSignalIncreasePerivascular { get; set; }

        [RadioReportId("pel_m_0604479", InstanceName = nameof(FemaleGenderFindingType.VulvaInflammation))]
        public bool IsCystOfSkenesGlands { get; set; }

        [RadioReportId("pel_m_0604480", InstanceName = nameof(FemaleGenderFindingType.VulvaInflammation))]
        public bool IsUrethralDiverticula { get; set; }

        #endregion

        #region Endometriosis

        [RadioReportId("pel_m_0603485", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        public bool IsHypointenseCapsule { get; set; }

        [RadioReportId("pel_m_0603486", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        public bool IsSpicula { get; set; }

        [RadioReportId("pel_m_0604483", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        public bool IsNodular { get; set; }

        [RadioReportId("pel_m_0604485", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        public bool IsLigamentousThickening { get; set; }

        [RadioReportId("pel_m_0604486", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        public bool IsMushroomSign { get; set; }

        [RadioReportId("pel_m_0603490", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        public bool IsShading { get; set; }

        [RadioReportId("pel_m_0604237", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        public bool IsMultifocalSignalIncreaseT1w { get; set; }

        [RadioReportId("pel_m_0604238", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        public bool IsMultifocalSignalIncreaseT2w { get; set; }

        [RadioReportId("pel_m_0604239", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        public bool IsCystic { get; set; }

        [RadioReportId("pel_m_0604240", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        public bool IsComplex { get; set; }

        [RadioReportId("pel_m_0604231", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        public bool IsDetectionOfBloodClots { get; set; }

        [RadioReportId("pel_m_0604492", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        public bool IsInternalBleeding { get; set; }

        public DepthOfInfiltrationType DepthOfInfiltrationType { get; set; }

        public SubperitonealInfiltrationType SubperitonealInfiltrationType { get; set; }

        [RadioReportId("pel_m_0603261", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        public bool IsPerifocalFatTissueObliteration { get; set; }

        [RadioReportId("pel_m_0603262", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        public bool IsPerifocalTighteningOrShortening { get; set; }

        public ComplicationsType ComplicationsType { get; set; }

        [RadioReportId("pel_m_0605286", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        public bool IsAtTheLevelOfTheUreterostium { get; set; }

        [RadioReportId("pel_m_0605277", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        public bool IsPrestenoticDilatation { get; set; }

        [RadioReportId("pel_m_0605278", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        public bool IsPoststenoticCollapse { get; set; }

        [RadioReportId("pel_m_0605280", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        public bool IsPosteriorDisplacementOfTheUterus { get; set; }

        [RadioReportId("pel_m_0605281", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        public bool IsPosteriorDisplacementOfTheOvaries { get; set; }

        [RadioReportId("pel_m_0605282", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        public bool IsKissingOvaries { get; set; }

        [RadioReportId("pel_m_0605283", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        public bool IsCranialDisplacementOfThePosteriorFornixVaginae { get; set; }

        [RadioReportId("pel_m_0605284", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        public bool IsDisplacementOfIntestinalLoops { get; set; }

        [RadioReportId("pel_m_0603491", InstanceName = nameof(FemaleGenderFindingType.Endometriosis))]
        public bool IsMoreThan1LesionSamePathology { get; set; }

        #endregion

        public bool CheckCondition(string customConditionId) =>
            customConditionId switch
            {
                nameof(FemaleGenderFindingType.OvaryMass) => FindingType.ToString() == customConditionId,
                nameof(FemaleGenderFindingType.OvaryInflammation) => FindingType.ToString() == customConditionId,
                nameof(FemaleGenderFindingType.OvaryTorsion) => FindingType.ToString() == customConditionId,
                nameof(FemaleGenderFindingType.UterineTubeMass) => FindingType.ToString() == customConditionId,
                nameof(FemaleGenderFindingType.UterineTubeInflammation) => FindingType.ToString() == customConditionId,
                nameof(FemaleGenderFindingType.CorpusUteriMass) => FindingType.ToString() == customConditionId,
                nameof(FemaleGenderFindingType.CorpusUteriInflammation) => FindingType.ToString() == customConditionId,
                nameof(FemaleGenderFindingType.CervixUteriMass) => FindingType.ToString() == customConditionId,
                nameof(FemaleGenderFindingType.CervixUteriInflammation) => FindingType.ToString() == customConditionId,
                nameof(FemaleGenderFindingType.VaginaMass) => FindingType.ToString() == customConditionId,
                nameof(FemaleGenderFindingType.VulvaMass) => FindingType.ToString() == customConditionId,
                nameof(FemaleGenderFindingType.VulvaInflammation) => FindingType.ToString() == customConditionId,
                nameof(FemaleGenderFindingType.Endometriosis) => FindingType.ToString() == customConditionId,
                nameof(FigoStageType1) + nameof(FigoStageType.StageI) => FigoStageType1 == FigoStageType.StageI,
                nameof(FigoStageType2) + nameof(FigoStageType.StageI) => FigoStageType2 == FigoStageType.StageI,
                nameof(FigoStageType1) + nameof(FigoStageType.StageII) => FigoStageType1 == FigoStageType.StageII,
                nameof(FigoStageType2) + nameof(FigoStageType.StageII) => FigoStageType2 == FigoStageType.StageII,
                nameof(FigoStageType1) + nameof(FigoStageType.StageIII) => FigoStageType1 == FigoStageType.StageIII,
                nameof(FigoStageType2) + nameof(FigoStageType.StageIII) => FigoStageType2 == FigoStageType.StageIII,
                nameof(FigoStageType1) + nameof(FigoStageType.StageIV) => FigoStageType1 == FigoStageType.StageIV,
                nameof(FigoStageType2) + nameof(FigoStageType.StageIV) => FigoStageType2 == FigoStageType.StageIV,
                _ => false
            };
    }
}
