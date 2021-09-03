using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.HeadCT.Domain.Enums.Examination;
using System;
using System.Collections.Generic;
using System.Text;

namespace RadioReport.HeadCT.Domain.Models
{
    public class ExaminationIndicationFinding : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("hea_c_010402", AlternativeTranslationSuffix = "CT")]
        public ExaminationFindingType FindingType { get; set; }

        #region Common

        public DetailsType DetailsType { get; set; }

        public IndicationSubType IndicationSubType { get; set; }

        #endregion

        #region IntercranialHemorrage

        [RadioReportId("hea_c_010577", InstanceName = nameof (ExaminationFindingType.IntracranialHemorrhage))]
        public bool IsKnownCoagulopathy { get; set; }

        [RadioReportId("hea_c_010578", InstanceName = nameof(ExaminationFindingType.IntracranialHemorrhage))]
        public bool IsKnownAnticoagulation { get; set; }

        [RadioReportId("hea_c_010522", InstanceName = nameof(ExaminationFindingType.IntracranialHemorrhage))]
        public HuntHessScaleType HuntHessScaleType { get; set; }

        #endregion

        #region Trauma

        [RadioReportId("hea_c_010581", InstanceName = nameof(ExaminationFindingType.Trauma))]
        public bool IsPathologilacFindingInPreviousExamination { get; set; }

        [RadioReportId("hea_c_010582", InstanceName = nameof(ExaminationFindingType.Trauma))]
        public bool IsProgressiveClinicalFindings {get;set;}

        [RadioReportId("hea_c_010561", InstanceName = nameof(ExaminationFindingType.Trauma))]
        public bool IsMinorTrauma { get; set; }

        [RadioReportId("hea_c_010583", InstanceName = nameof(ExaminationFindingType.Trauma))]
        public bool IsMajorTrauma { get; set; }

        [RadioReportId("hea_c_010584", InstanceName = nameof(ExaminationFindingType.Trauma))]
        public bool IsPenetratingInjury { get; set; }

        [RadioReportId("hea_c_010562", InstanceName = nameof(ExaminationFindingType.Trauma))]
        public bool IsPolytrauma { get; set; }

        [RadioReportId("hea_c_010565", InstanceName = nameof(ExaminationFindingType.Trauma))]
        public int? GlasgowComaScale { get; set; }
        
        #endregion

        #region Ischemia

        [RadioReportId("hea_c_010506", InstanceName =nameof(ExaminationFindingType.Ischemia))]
        public bool IsIschemia { get; set; }

        [RadioReportId("hea_c_010509", InstanceName = nameof(ExaminationFindingType.Ischemia))]
        public int? NihssScore { get; set; }

        [RadioReportId("hea_c_010512", InstanceName = nameof(ExaminationFindingType.Ischemia))]
        public int? AspectScore { get; set; }

        [RadioReportId("hea_c_010515", InstanceName = nameof(ExaminationFindingType.Ischemia))]
        public int? HoursAfterClinicalOnset { get; set; }
        
        [RadioReportId("hea_c_010517", InstanceName = nameof(ExaminationFindingType.Ischemia))]
        public bool IsWakeUpStroke { get; set; }
        #endregion

        #region Seizure

        [RadioReportId("hea_c_010550", InstanceName = nameof(ExaminationFindingType.Seizure))]
        public byte? Month { get; set; }

        [RadioReportId("hea_c_010551", InstanceName = nameof(ExaminationFindingType.Seizure))]
        public int? Year { get; set; }

        [RadioReportId("hea_c_010553", InstanceName = nameof(ExaminationFindingType.Seizure))]
        public bool IsRefractoryEpilepsy { get; set; }

        #endregion

        #region Perioperative

        [RadioReportId("hea_c_0105105", InstanceName = nameof(ExaminationFindingType.Perioperative))]
        public bool IsVerificationOfShuntPositioning { get; set; }

        #endregion

        #region Headache

        public HeadacheCourseType HeadacheCourseType { get; set; }

        [RadioReportId("hea_c_0105107", InstanceName = nameof(ExaminationFindingType.Headache))]
        public bool IsSubacuteTrauma { get; set; }

        [RadioReportId("hea_c_0105108", InstanceName = nameof(ExaminationFindingType.Headache))]
        public bool IsExertion { get; set; }

        [RadioReportId("hea_c_0105109", InstanceName = nameof(ExaminationFindingType.Headache))]
        public bool IsNeurologicalDeficit { get; set; }

        [RadioReportId("hea_c_0105110", InstanceName = nameof(ExaminationFindingType.Headache))]
        public bool IsNeoplasia { get; set; }

        [RadioReportId("hea_c_0105111", InstanceName = nameof(ExaminationFindingType.Headache))]
        public bool IsImmuneSupression { get; set; }

        [RadioReportId("hea_c_0105112", InstanceName = nameof(ExaminationFindingType.Headache))]
        public bool IsPregnancy { get; set; }

        [RadioReportId("hea_c_0105113", InstanceName = nameof(ExaminationFindingType.Headache))]
        public bool IsPapilledema { get; set; }      

        [RadioReportId("hea_c_0105118", InstanceName = nameof(ExaminationFindingType.Headache))]
        public bool IsThunderclapHeadache { get; set; }

        #endregion
    }
}
