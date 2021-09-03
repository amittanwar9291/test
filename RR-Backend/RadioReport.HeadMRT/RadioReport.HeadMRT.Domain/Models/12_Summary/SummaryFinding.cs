using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.HeadMRT.Domain.Enums;
using RadioReport.HeadMRT.Domain.Enums.Summary;

namespace RadioReport.HeadMRT.Domain.Models
{
    public class SummaryFinding : FindingBase, IRadioReportIdConditionEvaluator
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("hea_m_120105")]
        public SummaryFindingType FindingType { get; set; }

        #region Common

        [RadioReportId("hea_m_120318", InstanceName = nameof(SummaryFindingType.MultipleSclerosis))]
        [RadioReportId("hea_m_120213", InstanceName = nameof(SummaryFindingType.SignsOfIntracranialPressure))]
        public bool IsRight { get; set; }

        [RadioReportId("hea_m_120319", InstanceName = nameof(SummaryFindingType.MultipleSclerosis))]
        [RadioReportId("hea_m_120214", InstanceName = nameof(SummaryFindingType.SignsOfIntracranialPressure))]
        public bool IsLeft { get; set; }
        
        [RadioReportId("hea_m_120507", InstanceName = nameof(SummaryFindingType.MultipleSclerosis))]
        [RadioReportId("hea_m_120515", InstanceName = nameof(SummaryFindingType.Neurodegeneration))]
        public SummaryDiagnosisType SummaryDiagnosisType { get; set; }

        public SideType SideType { get; set; }

        #endregion

        #region MultipleSclerosis

        [RadioReportId("hea_m_120203", InstanceName = nameof(SummaryFindingType.MultipleSclerosis))]
        public bool IsSpatialDissemination { get; set; }

        [RadioReportId("hea_m_120204", InstanceName = nameof(SummaryFindingType.MultipleSclerosis))]
        public bool IsTemporalDissemination { get; set; }

        [RadioReportId("hea_m_120207", InstanceName = nameof(SummaryFindingType.MultipleSclerosis))]
        public byte? ProgressControlMonth { get; set; }

        [RadioReportId("hea_m_120208", InstanceName = nameof(SummaryFindingType.MultipleSclerosis))]
        public int? ProgressControlYear { get; set; }

        public ProgressControlType ProgressControlType {get; set; }

        [RadioReportId("hea_m_120302", InstanceName = nameof(SummaryFindingType.MultipleSclerosis))]
        public bool IsPeriventricular { get; set; }

        [RadioReportId("hea_m_120303", InstanceName = nameof(SummaryFindingType.MultipleSclerosis))]
        public int? Periventricular { get; set; }

        [RadioReportId("hea_m_120305", InstanceName = nameof(SummaryFindingType.MultipleSclerosis))]
        public bool IsCortical { get; set; }

        [RadioReportId("hea_m_120306", InstanceName = nameof(SummaryFindingType.MultipleSclerosis))]
        public int? Cortical { get; set; }

        [RadioReportId("hea_m_120308", InstanceName = nameof(SummaryFindingType.MultipleSclerosis))]
        public bool IsJuxtacortical { get; set; }

        [RadioReportId("hea_m_120309", InstanceName = nameof(SummaryFindingType.MultipleSclerosis))]
        public int? Juxtacortical { get; set; }

        [RadioReportId("hea_m_120311", InstanceName = nameof(SummaryFindingType.MultipleSclerosis))]
        public bool IsInfratentorial { get; set; }

        [RadioReportId("hea_m_120312", InstanceName = nameof(SummaryFindingType.MultipleSclerosis))]
        public int? Infratentorial { get; set; }

        [RadioReportId("hea_m_120314", InstanceName = nameof(SummaryFindingType.MultipleSclerosis))]
        public bool IsSpinal { get; set; }

        [RadioReportId("hea_m_120315", InstanceName = nameof(SummaryFindingType.MultipleSclerosis))]
        public int? Spinal { get; set; }

        [RadioReportId("hea_m_120317", InstanceName = nameof(SummaryFindingType.MultipleSclerosis))]
        public bool IsOpticNeuritis { get; set; }

        [RadioReportId("hea_m_120402", InstanceName = nameof(SummaryFindingType.MultipleSclerosis))]
        public bool IsActiveLesions { get; set; }
        
        [RadioReportId("hea_m_120403", InstanceName = nameof(SummaryFindingType.MultipleSclerosis))]
        public bool IsNewLesions { get; set; }

        [RadioReportId("hea_m_120404", InstanceName = nameof(SummaryFindingType.MultipleSclerosis))]
        public bool IsActive { get; set; }

        [RadioReportId("hea_m_120405", InstanceName = nameof(SummaryFindingType.MultipleSclerosis))]
        public int? NewLesions { get; set; }

        [RadioReportId("hea_m_120407", InstanceName = nameof(SummaryFindingType.MultipleSclerosis))]
        public bool IsBlackHoles { get; set; }

        [RadioReportId("hea_m_120408", InstanceName = nameof(SummaryFindingType.MultipleSclerosis))]
        public int? BlackHoles { get; set; }

        [RadioReportId("hea_m_120410", InstanceName = nameof(SummaryFindingType.MultipleSclerosis))]
        public bool IsDawsonFinger { get; set; }

        [RadioReportId("hea_m_120411", InstanceName = nameof(SummaryFindingType.MultipleSclerosis))]
        public bool IsPerivenousSpread { get; set; }

        [RadioReportId("hea_m_120412", InstanceName = nameof(SummaryFindingType.MultipleSclerosis))]
        public bool IsCorpusCallosumUndersurface { get; set; }

        [RadioReportId("hea_m_120413", InstanceName = nameof(SummaryFindingType.MultipleSclerosis))]
        public bool IsTumefactiveMS { get; set; }

        [RadioReportId("hea_m_120414", InstanceName = nameof(SummaryFindingType.MultipleSclerosis))]
        public bool IsIncompleteRingEnhancement { get; set; }

        public OtherDiseaseType OtherDiseaseType { get; set; }

        [RadioReportId("hea_m_120505", InstanceName = nameof(SummaryFindingType.MultipleSclerosis))]
        public bool IsSuspicionOf { get; set; }

        #endregion

        #region SignsOfIntracranialPressure

        [RadioReportId("hea_m_120216", InstanceName = nameof(SummaryFindingType.SignsOfIntracranialPressure))]
        public bool IsLocallyFlattenedSulci { get; set; }

        [RadioReportId("hea_m_120321", InstanceName = nameof(SummaryFindingType.SignsOfIntracranialPressure))]
        public HerniationType HerniationType { get; set; }

        [RadioReportId("hea_m_120323", InstanceName = nameof(SummaryFindingType.SignsOfIntracranialPressure))]
        public bool IsMidlineShift { get; set; }

        [RadioReportId("hea_m_120328", InstanceName = nameof(SummaryFindingType.SignsOfIntracranialPressure))]
        public int? MidlineShiftInMm { get; set; }

        [RadioReportId("hea_m_120416", InstanceName = nameof(SummaryFindingType.SignsOfIntracranialPressure))]
        public bool IsHydrocephalus { get; set; }

        [RadioReportId("hea_m_120417", InstanceName = nameof(SummaryFindingType.SignsOfIntracranialPressure))]
        public bool IsUnilateral { get; set; }

        [RadioReportId("hea_m_120418", InstanceName = nameof(SummaryFindingType.SignsOfIntracranialPressure))]
        public bool IsACAInfarction { get; set; }

        [RadioReportId("hea_m_120419", InstanceName = nameof(SummaryFindingType.SignsOfIntracranialPressure))]
        public bool IsMCAInfarction { get; set; }

        [RadioReportId("hea_m_120420", InstanceName = nameof(SummaryFindingType.SignsOfIntracranialPressure))]
        public bool IsPCAInfarction { get; set; }

        [RadioReportId("hea_m_120422", InstanceName = nameof(SummaryFindingType.SignsOfIntracranialPressure))]
        public bool IsObstructiveHydrocephalus { get; set; }

        [RadioReportId("hea_m_120423", InstanceName = nameof(SummaryFindingType.SignsOfIntracranialPressure))]
        public bool IsCompressionOfTheAqueduct { get; set; }

        [RadioReportId("hea_m_120424", InstanceName = nameof(SummaryFindingType.SignsOfIntracranialPressure))]
        public bool IsTonsillarNecrosis { get; set; }

        [RadioReportId("hea_m_120421", InstanceName = nameof(SummaryFindingType.SignsOfIntracranialPressure))]
        public bool IsDuretHemorrhage { get; set; }

        public WedgingType WedgingType { get; set; }

        [RadioReportId("hea_m_120512", InstanceName = nameof(SummaryFindingType.SignsOfIntracranialPressure))]
        public bool IsIntracranialHypotension { get; set; }

        #endregion

        #region Hemorrhage

        public HemorrhageLocalizationType HemorrhageLocalizationType { get; set; }

        public EtiologyType EtiologyType { get; set; }

        [RadioReportId("hea_m_120425", InstanceName = nameof(SummaryFindingType.Hemorrhage))]
        public bool IsFracture { get; set; }

        public AtraumaticEtiologyType AtraumaticEtiologyType { get; set; }

        public CharacterizationType CharacterizationType { get; set; }

        #endregion

        #region Neurodegeneration

        public NeurodegenerationType NeurodegenerationType { get; set; }

        public FazekasType FazekasType { get; set; }

        public AtrophyNeurodegenerationType AtrophyNeurodegenerationType { get; set; }

        [RadioReportId("hea_m_120345", InstanceName = nameof(SummaryFindingType.Neurodegeneration))]
        public bool IsFrontalLobeAtrophy { get; set; }

        [RadioReportId("hea_m_120346", InstanceName = nameof(SummaryFindingType.Neurodegeneration))]
        public bool IsParietalLobeAtrophy { get; set; }

        [RadioReportId("hea_m_120347", InstanceName = nameof(SummaryFindingType.Neurodegeneration))]
        public bool IsTemporalLobeAtrophy { get; set; }

        [RadioReportId("hea_m_120348", InstanceName = nameof(SummaryFindingType.Neurodegeneration))]
        public bool IsOccipitalLobeAtrophy { get; set; }

        [RadioReportId("hea_m_120349", InstanceName = nameof(SummaryFindingType.Neurodegeneration))]
        public bool IsHippocampalAtrophy { get; set; }

        [RadioReportId("hea_m_120350", InstanceName = nameof(SummaryFindingType.Neurodegeneration))]
        public bool IsSupratentorialAccentuation { get; set; }

        [RadioReportId("hea_m_120351", InstanceName = nameof(SummaryFindingType.Neurodegeneration))]
        public bool IsInfratentorialAccentuation { get; set; }

        [RadioReportId("hea_m_120352", InstanceName = nameof(SummaryFindingType.Neurodegeneration))]
        public bool IsGlobalAtrophy { get; set; }

        [RadioReportId("hea_m_120363", InstanceName = nameof(SummaryFindingType.Neurodegeneration))]
        public NeurodegenerationLocalizationType NeurodegenerationLocalizationType { get; set; }

        [RadioReportId("hea_m_120353", InstanceName = nameof(SummaryFindingType.Neurodegeneration))]
        public bool IsSideAsymmetryInFavorOf { get; set; }

        [RadioReportId("hea_m_120432", InstanceName = nameof(SummaryFindingType.Neurodegeneration))]
        public bool IsEnlargedPerivascularSpaces { get; set; }

        [RadioReportId("hea_m_120433", InstanceName = nameof(SummaryFindingType.Neurodegeneration))]
        public bool IsInfarctLacunae { get; set; }

        [RadioReportId("hea_m_120434", InstanceName = nameof(SummaryFindingType.Neurodegeneration))]
        public bool IsMicroBleeding { get; set; }

        [RadioReportId("hea_m_120435", InstanceName = nameof(SummaryFindingType.Neurodegeneration))]
        public bool IsStrategicInfarcts { get; set; }

        [RadioReportId("hea_m_120436", InstanceName = nameof(SummaryFindingType.Neurodegeneration))]
        public bool IsHummingbirdSign { get; set; }

        [RadioReportId("hea_m_120437", InstanceName = nameof(SummaryFindingType.Neurodegeneration))]
        public bool IsHotCrossBunSign { get; set; }

        [RadioReportId("hea_m_120438", InstanceName = nameof(SummaryFindingType.Neurodegeneration))]
        public bool IsMickeyMouseSign { get; set; }

        [RadioReportId("hea_m_120439", InstanceName = nameof(SummaryFindingType.Neurodegeneration))]
        public bool IsMorningGlorySign { get; set; }

        [RadioReportId("hea_m_120440", InstanceName = nameof(SummaryFindingType.Neurodegeneration))]
        public bool IsFieldHockeyStickSign { get; set; }

        [RadioReportId("hea_m_120441", InstanceName = nameof(SummaryFindingType.Neurodegeneration))]
        public bool IsPulvinarSign { get; set; }

        [RadioReportId("hea_m_120442", InstanceName = nameof(SummaryFindingType.Neurodegeneration))]
        public bool IsReducedMidbrainToPonsRatio { get; set; }

        [RadioReportId("hea_m_120449", InstanceName = nameof(SummaryFindingType.Neurodegeneration))]
        public bool IsAbsentSwallowTailSign { get; set; }

        [RadioReportId("hea_m_120517", InstanceName = nameof(SummaryFindingType.Neurodegeneration))]
        public bool IsKoedamScore { get; set; }

        [RadioReportId("hea_m_120519", InstanceName = nameof(SummaryFindingType.Neurodegeneration))]
        public ScoreType KoedamScore { get; set; }

        [RadioReportId("hea_m_120520", InstanceName = nameof(SummaryFindingType.Neurodegeneration))]
        public bool IsMesialTemporalLobeAtrophy { get; set; }

        [RadioReportId("hea_m_120522", InstanceName = nameof(SummaryFindingType.Neurodegeneration))]
        public ScoreType MesialTemporalLobeAtrophyScore { get; set; }
        
        #endregion

        #region Seizure

        public PossibleEpileptogenicFindingsType PossibleEpileptogenicFindingsType { get; set; }

        #endregion

        public bool CheckCondition(string customConditionId) =>
            customConditionId switch 
            {
                _ => false
            };
    }
}
