using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.HeadMRT.Domain.Enums.Examination;

namespace RadioReport.HeadMRT.Domain.Models
{
    public class ExaminationIndicationFinding : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("hea_m_010402")]
        public ExaminationFindingType FindingType { get; set; }

        #region Common

        public IschemiaIntracranialHemorrhageType IschemiaIntracranialHemorrhageType { get; set; }

        public DetailsType DetailsType { get; set; }

        [RadioReportId("hea_m_010533", InstanceName = nameof(ExaminationFindingType.Inflammation))]
        [RadioReportId("hea_m_010533", InstanceName = nameof(ExaminationFindingType.AutoimmuneDisease))]
        [RadioReportId("hea_m_010533", InstanceName = nameof(ExaminationFindingType.Demyelination))]
        public bool IsMultipleSclerosis { get; set; }

        [RadioReportId("hea_m_010534", InstanceName = nameof(ExaminationFindingType.Inflammation))]
        [RadioReportId("hea_m_010534", InstanceName = nameof(ExaminationFindingType.AutoimmuneDisease))]
        [RadioReportId("hea_m_010534", InstanceName = nameof(ExaminationFindingType.Demyelination))]
        public bool IsVasculitis { get; set; }

        #endregion

        #region Ischemia

        [RadioReportId("hea_m_010509", InstanceName = nameof(ExaminationFindingType.Ischemia))]
        public int? NihssScore { get; set; }

        [RadioReportId("hea_m_010512", InstanceName = nameof(ExaminationFindingType.Ischemia))]
        public int? AspectScore { get; set; }

        [RadioReportId("hea_m_010515", InstanceName = nameof(ExaminationFindingType.Ischemia))]
        public int? HoursAfterSymptomOnset { get; set; }

        [RadioReportId("hea_m_010517", InstanceName = nameof(ExaminationFindingType.Ischemia))]
        public bool IsWakeUpStroke { get; set; }

        #endregion

        #region IntracranialHemorrhage

        public IntracranialHemorrhageType IntracranialHemorrhageType { get; set; }

        [RadioReportId("hea_m_010522", InstanceName = nameof(ExaminationFindingType.IntracranialHemorrhage))]
        public HuntHessScaleType HuntHessScaleType { get; set; }
        
        #endregion

        #region Seizure

        [RadioReportId("hea_m_010550", InstanceName = nameof(ExaminationFindingType.Seizure))]
        public int? Month { get; set; }

        [RadioReportId("hea_m_010551", InstanceName = nameof(ExaminationFindingType.Seizure))]
        public int? Year { get; set; }

        [RadioReportId("hea_m_010553", InstanceName = nameof(ExaminationFindingType.Seizure))]
        public bool IsRefractoryEpilepsy { get; set; }

        #endregion

        #region Trauma

        [RadioReportId("hea_m_010559", InstanceName = nameof(ExaminationFindingType.Trauma))]
        public bool IsIntracranialHemorrhage { get; set; }

        [RadioReportId("hea_m_010561", InstanceName = nameof(ExaminationFindingType.Trauma))]
        public bool IsMinorTrauma { get; set; }

        [RadioReportId("hea_m_010562", InstanceName = nameof(ExaminationFindingType.Trauma))]
        public bool IsPolytrauma { get; set; }

        [RadioReportId("hea_m_010563", InstanceName = nameof(ExaminationFindingType.Trauma))]
        public bool IsHighVelocityTrauma { get; set; }

        [RadioReportId("hea_m_010565", InstanceName = nameof(ExaminationFindingType.Trauma))]
        public int? GlasgowComaScale { get; set; }

        #endregion

    }
}