using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.HeadMRT.Domain.Enums.Anamnesis;

namespace RadioReport.HeadMRT.Domain.Models
{
    public class ClinicalSymptomFinding : FindingBase, IRadioReportIdConditionEvaluator
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("hea_m_020105")]
        public ClinicalSymptomType FindingType { get; set; }

        #region Common

        [RadioReportId("hea_m_020203", InstanceName = nameof(ClinicalSymptomType.Headache))]
        [RadioReportId("hea_m_0202118", InstanceName = nameof(ClinicalSymptomType.VisualDisturbances))]
        [RadioReportId("hea_m_020262", InstanceName = nameof(ClinicalSymptomType.CranialNerves), CustomConditionName = nameof(CranialNervesType.TrigeminalNeuralgia))]
        [RadioReportId("hea_m_020262", InstanceName = nameof(ClinicalSymptomType.CranialNerves), CustomConditionName = nameof(CranialNervesType.VestibularNeuritis))]
        [RadioReportId("hea_m_0202115", InstanceName = nameof(ClinicalSymptomType.CranialNerves), CustomConditionName = nameof(CranialNervesType.FacialNervePalsy))]
        [RadioReportId("hea_m_020291", InstanceName = nameof(ClinicalSymptomType.HearingImpairment))]
        [RadioReportId("hea_m_0202101", InstanceName = nameof(ClinicalSymptomType.PupilEyelidEyeOrbit))]
        public bool IsRight { get; set; }

        [RadioReportId("hea_m_020204", InstanceName = nameof(ClinicalSymptomType.Headache))]
        [RadioReportId("hea_m_0202119", InstanceName = nameof(ClinicalSymptomType.VisualDisturbances))]
        [RadioReportId("hea_m_020263", InstanceName = nameof(ClinicalSymptomType.CranialNerves), CustomConditionName = nameof(CranialNervesType.TrigeminalNeuralgia))]
        [RadioReportId("hea_m_020263", InstanceName = nameof(ClinicalSymptomType.CranialNerves), CustomConditionName = nameof(CranialNervesType.VestibularNeuritis))]
        [RadioReportId("hea_m_0202116", InstanceName = nameof(ClinicalSymptomType.CranialNerves), CustomConditionName = nameof(CranialNervesType.FacialNervePalsy))]
        [RadioReportId("hea_m_020292", InstanceName = nameof(ClinicalSymptomType.HearingImpairment))]
        [RadioReportId("hea_m_0202102", InstanceName = nameof(ClinicalSymptomType.PupilEyelidEyeOrbit))]
        public bool IsLeft { get; set; }

        #endregion

        #region Headache

        public CharacterizationType CharacterizationType { get; set; }

        #endregion

        #region Vertigo

        public VertigoType VertigoType { get; set; }

        #endregion

        #region Visual disturbances

        public VisualDisturbanceType VisualDisturbanceType { get; set; }

        #endregion

        #region Cognitive changes

        public CognitiveChangeType CognitiveChangeType { get; set; }

        #endregion

        #region Disorder of consciousness

        public DisorderOfConsciousnessType DisorderOfConsciousnessType { get; set; }

        #endregion

        #region Signs of increased intracranial pressure (ICP)

        [RadioReportId("hea_m_020234", InstanceName = nameof(ClinicalSymptomType.SignsOfIncreasedIntracranialPressure))]
        public bool IsHeadache { get; set; }

        [RadioReportId("hea_m_020235", InstanceName = nameof(ClinicalSymptomType.SignsOfIncreasedIntracranialPressure))]
        public bool IsNauseaVomiting { get; set; }

        [RadioReportId("hea_m_020236", InstanceName = nameof(ClinicalSymptomType.SignsOfIncreasedIntracranialPressure))]
        public bool IsDisorderOfConsciousnessComa { get; set; }

        [RadioReportId("hea_m_020237", InstanceName = nameof(ClinicalSymptomType.SignsOfIncreasedIntracranialPressure))]
        public bool IsPapilledema { get; set; }

        #endregion

        #region Signs of inflammation

        [RadioReportId("hea_m_020239", InstanceName = nameof(ClinicalSymptomType.SignsOfInflammation))]
        public bool IsMeningism { get; set; }

        [RadioReportId("hea_m_020240", InstanceName = nameof(ClinicalSymptomType.SignsOfInflammation))]
        public bool IsFever { get; set; }

        [RadioReportId("hea_m_020241", InstanceName = nameof(ClinicalSymptomType.SignsOfInflammation))]
        public bool IsPhotophobia { get; set; }

        [RadioReportId("hea_m_020242", InstanceName = nameof(ClinicalSymptomType.SignsOfInflammation))]
        public bool IsNausea { get; set; }

        #endregion

        #region Motor deficit

        public MotorDeficitType MotorDeficitType { get; set; }
        public SideType SideType { get; set; }
        public LocalizationType LocalizationType { get; set; }

        #endregion

        #region Cranial nerves

        public CranialNervesType CranialNervesType { get; set; }
        public OlfactoryNerveDetailsType OlfactoryNerveDetailsType { get; set; }
        public FacialNervePalsyDetailsType FacialNervePalsyDetailsType { get; set; }

        #endregion

        #region Dysesthesia

        public DysesthesiaType DysesthesiaType { get; set; }

        #endregion

        #region Tremor

        public TremorType TremorType { get; set; }

        #endregion

        #region Ataxia

        public AtaxiaType AtaxiaType { get; set; }

        #endregion

        #region Speech disorder

        public SpeechDisorderType SpeechDisorderType { get; set; }

        #endregion

        #region Hearing impairment

        [RadioReportId("hea_m_020282", InstanceName = nameof(ClinicalSymptomType.HearingImpairment))]
        public bool IsHearingLoss { get; set; }

        [RadioReportId("hea_m_020283", InstanceName = nameof(ClinicalSymptomType.HearingImpairment))]
        public bool IsHyperacusis { get; set; }

        [RadioReportId("hea_m_020284", InstanceName = nameof(ClinicalSymptomType.HearingImpairment))]
        public bool IsHypoacusis { get; set; }

        [RadioReportId("hea_m_020285", InstanceName = nameof(ClinicalSymptomType.HearingImpairment))]
        public bool IsConductiveHearingLoss { get; set; }

        [RadioReportId("hea_m_020286", InstanceName = nameof(ClinicalSymptomType.HearingImpairment))]
        public bool IsHypoakusisSensorineuralHearingLoss { get; set; }

        [RadioReportId("hea_m_020287", InstanceName = nameof(ClinicalSymptomType.HearingImpairment))]
        public bool IsTinnitus { get; set; }

        [RadioReportId("hea_m_020288", InstanceName = nameof(ClinicalSymptomType.HearingImpairment))]
        public bool IsPulsatile { get; set; }

        [RadioReportId("hea_m_020289", InstanceName = nameof(ClinicalSymptomType.HearingImpairment))]
        public bool IsSensorineuralHearingLoss { get; set; }

        #endregion

        #region Pupil/eyelid/eye orbit

        [RadioReportId("hea_m_020294", InstanceName = nameof(ClinicalSymptomType.PupilEyelidEyeOrbit))]
        public bool IsAnisocoria { get; set; }

        [RadioReportId("hea_m_020295", InstanceName = nameof(ClinicalSymptomType.PupilEyelidEyeOrbit))]
        public bool IsMydriasis { get; set; }

        [RadioReportId("hea_m_020296", InstanceName = nameof(ClinicalSymptomType.PupilEyelidEyeOrbit))]
        public bool IsMyosis { get; set; }

        [RadioReportId("hea_m_020297", InstanceName = nameof(ClinicalSymptomType.PupilEyelidEyeOrbit))]
        public bool IsPtosis { get; set; }

        [RadioReportId("hea_m_020298", InstanceName = nameof(ClinicalSymptomType.PupilEyelidEyeOrbit))]
        public bool IsEnophthalmos { get; set; }

        [RadioReportId("hea_m_020299", InstanceName = nameof(ClinicalSymptomType.PupilEyelidEyeOrbit))]
        public bool IsExophthalmos { get; set; }



        #endregion

        #region Nystagmus

        public NystagmusType NystagmusType { get; set; }

        #endregion

        #region Endocrine disorder

        public EndocrineDisorderType EndocrineDisorderType { get; set; }

        #endregion

        #region Psychiatric disorder

        [RadioReportId("hea_m_0202111", InstanceName = nameof(ClinicalSymptomType.PsychiatricDisorder))]
        public bool IsPersonalityChanges { get; set; }

        #endregion

        public bool CheckCondition(string customConditionId) =>
            customConditionId switch
            {
                nameof(CranialNervesType.TrigeminalNeuralgia) => CranialNervesType.ToString() == customConditionId,
                nameof(CranialNervesType.FacialNervePalsy) => CranialNervesType.ToString() == customConditionId,
                nameof(CranialNervesType.VestibularNeuritis) => CranialNervesType.ToString() == customConditionId,
                _ => false
            };
    }
}
