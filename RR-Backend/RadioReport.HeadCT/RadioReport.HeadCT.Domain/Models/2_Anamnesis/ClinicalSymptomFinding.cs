using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Interfaces;
using RadioReport.Common.Logic.Models;
using RadioReport.HeadCT.Domain.Enums;
using RadioReport.HeadCT.Domain.Enums.Anamnesis;

namespace RadioReport.HeadCT.Domain.Models
{
    public class ClinicalSymptomFinding : FindingBase, IRadioReportIdConditionEvaluator
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("hea_c_020105")]
        public ClinicalSymptomType FindingType { get; set; }

        #region Common

        [RadioReportId("hea_c_020203", InstanceName = nameof(ClinicalSymptomType.Headache))]
        [RadioReportId("hea_c_0202118", InstanceName = nameof(ClinicalSymptomType.VisualDisturbances))]
        [RadioReportId("hea_c_020262", InstanceName = nameof(ClinicalSymptomType.CranialNerves), CustomConditionName = nameof(CranialNervesType.TrigeminalNeuralgia))]
        [RadioReportId("hea_c_020262", InstanceName = nameof(ClinicalSymptomType.CranialNerves), CustomConditionName = nameof(CranialNervesType.VestibularNeuritis))]
        [RadioReportId("hea_c_0202115", InstanceName = nameof(ClinicalSymptomType.CranialNerves), CustomConditionName = nameof(CranialNervesType.FacialNervePalsy))]
        [RadioReportId("hea_c_020291", InstanceName = nameof(ClinicalSymptomType.HearingImpairment))]
        [RadioReportId("hea_c_0202101", InstanceName = nameof(ClinicalSymptomType.PupilEyelidOrbit))]
        public bool IsRight { get; set; }

        [RadioReportId("hea_c_020204", InstanceName = nameof(ClinicalSymptomType.Headache))]
        [RadioReportId("hea_c_0202119", InstanceName = nameof(ClinicalSymptomType.VisualDisturbances))]
        [RadioReportId("hea_c_020263", InstanceName = nameof(ClinicalSymptomType.CranialNerves), CustomConditionName = nameof(CranialNervesType.TrigeminalNeuralgia))]
        [RadioReportId("hea_c_020263", InstanceName = nameof(ClinicalSymptomType.CranialNerves), CustomConditionName = nameof(CranialNervesType.VestibularNeuritis))]
        [RadioReportId("hea_c_0202116", InstanceName = nameof(ClinicalSymptomType.CranialNerves), CustomConditionName = nameof(CranialNervesType.FacialNervePalsy))]
        [RadioReportId("hea_c_020292", InstanceName = nameof(ClinicalSymptomType.HearingImpairment))]
        [RadioReportId("hea_c_0202102", InstanceName = nameof(ClinicalSymptomType.PupilEyelidOrbit))]
        public bool IsLeft { get; set; }

        public SideType SideType { get; set; }

        #endregion

        #region Headache

        public CharacterizationType CharacterizationType { get; set; }

        [RadioReportId("hea_c_0202124", InstanceName = nameof(ClinicalSymptomType.Headache))]
        public bool IsThunderclapHeadache { get; set; }

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

        #region Altered state of consciousness

        public AlteredStateOfConsciousnessType AlteredStateOfConsciousnessType { get; set; }

        #endregion

        #region Signs of increased intracranial pressure (ICP)

        [RadioReportId("hea_c_020234", InstanceName = nameof(ClinicalSymptomType.SignsOfIncreasedIntracranialPressure))]
        public bool IsHeadache { get; set; }

        [RadioReportId("hea_c_020235", InstanceName = nameof(ClinicalSymptomType.SignsOfIncreasedIntracranialPressure))]
        public bool IsNauseaVomiting { get; set; }

        [RadioReportId("hea_c_020236", InstanceName = nameof(ClinicalSymptomType.SignsOfIncreasedIntracranialPressure))]
        public bool IsDisorderOfConsciousnessComa { get; set; }

        [RadioReportId("hea_c_020237", InstanceName = nameof(ClinicalSymptomType.SignsOfIncreasedIntracranialPressure))]
        public bool IsPapilledema { get; set; }

        #endregion

        #region Signs of inflammation

        [RadioReportId("hea_c_020239", InstanceName = nameof(ClinicalSymptomType.SignsOfInflammation))]
        public bool IsMeningism { get; set; }

        [RadioReportId("hea_c_020240", InstanceName = nameof(ClinicalSymptomType.SignsOfInflammation))]
        public bool IsFever { get; set; }

        [RadioReportId("hea_c_020241", InstanceName = nameof(ClinicalSymptomType.SignsOfInflammation))]
        public bool IsPhotophobia { get; set; }

        [RadioReportId("hea_c_020242", InstanceName = nameof(ClinicalSymptomType.SignsOfInflammation))]
        public bool IsNausea { get; set; }

        #endregion

        #region Motor deficit

        public MotorDeficitType MotorDeficitType { get; set; }
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

        [RadioReportId("hea_c_020282", InstanceName = nameof(ClinicalSymptomType.HearingImpairment))]
        public bool IsHearingLoss { get; set; }

        [RadioReportId("hea_c_020283", InstanceName = nameof(ClinicalSymptomType.HearingImpairment))]
        public bool IsHyperacusis { get; set; }

        [RadioReportId("hea_c_020284", InstanceName = nameof(ClinicalSymptomType.HearingImpairment))]
        public bool IsHypoacusis { get; set; }

        [RadioReportId("hea_c_020285", InstanceName = nameof(ClinicalSymptomType.HearingImpairment))]
        public bool IsConductiveHearingLoss { get; set; }

        [RadioReportId("hea_c_020286", InstanceName = nameof(ClinicalSymptomType.HearingImpairment))]
        public bool IsHypoakusisSensorineuralHearingLoss { get; set; }

        [RadioReportId("hea_c_020287", InstanceName = nameof(ClinicalSymptomType.HearingImpairment))]
        public bool IsTinnitus { get; set; }

        [RadioReportId("hea_c_020288", InstanceName = nameof(ClinicalSymptomType.HearingImpairment))]
        public bool IsPulsatile { get; set; }

        [RadioReportId("hea_c_020289", InstanceName = nameof(ClinicalSymptomType.HearingImpairment))]
        public bool IsSensorineuralHearingLoss { get; set; }

        #endregion

        #region Pupil/eyelid/orbit

        [RadioReportId("hea_c_020294", InstanceName = nameof(ClinicalSymptomType.PupilEyelidOrbit))]
        public bool IsAnisocoria { get; set; }

        [RadioReportId("hea_c_020295", InstanceName = nameof(ClinicalSymptomType.PupilEyelidOrbit))]
        public bool IsMydriasis { get; set; }

        [RadioReportId("hea_c_020296", InstanceName = nameof(ClinicalSymptomType.PupilEyelidOrbit))]
        public bool IsMyosis { get; set; }

        [RadioReportId("hea_c_020297", InstanceName = nameof(ClinicalSymptomType.PupilEyelidOrbit))]
        public bool IsPtosis { get; set; }

        [RadioReportId("hea_c_020298", InstanceName = nameof(ClinicalSymptomType.PupilEyelidOrbit))]
        public bool IsEnophthalmos { get; set; }

        [RadioReportId("hea_c_020299", InstanceName = nameof(ClinicalSymptomType.PupilEyelidOrbit))]
        public bool IsExophthalmos { get; set; }

        #endregion

        #region Nystagmus

        public NystagmusType NystagmusType { get; set; }

        #endregion

        #region Central endocrine disorder

        public CentralEndocrineDisorderType CentralEndocrineDisorderType { get; set; }

        #endregion

        #region Psychiatric disorder

        [RadioReportId("hea_c_0202111", InstanceName = nameof(ClinicalSymptomType.PsychiatricDisorder))]
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
