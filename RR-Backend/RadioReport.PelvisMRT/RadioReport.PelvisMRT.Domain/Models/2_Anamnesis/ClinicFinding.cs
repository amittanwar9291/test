using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.PelvisMRT.Domain.Enums;

namespace RadioReport.PelvisMRT.Domain.Models
{
    public class ClinicFinding : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("pel_m_020118")]
        public ClinicFindingType FindingType { get; set; }

        #region Pain
        [RadioReportId("pel_m_020214", InstanceName = nameof(ClinicFindingType.Pain))]
        public bool IsDigitalRectalExam { get; set; }

        [RadioReportId("pel_m_020215", InstanceName = nameof(ClinicFindingType.Pain))]
        public bool IsPressurePainLowerAbdomen { get; set; }

        [RadioReportId("pel_m_020217", InstanceName = nameof(ClinicFindingType.Pain))]
        public bool IsPressurePainRight { get; set; }

        [RadioReportId("pel_m_020218", InstanceName = nameof(ClinicFindingType.Pain))]
        public bool IsPressurePainLeft { get; set; }

        [RadioReportId("pel_m_020219", InstanceName = nameof(ClinicFindingType.Pain))]
        public bool IsBonePain { get; set; }
        #endregion

        #region Urinary incontinence
        [RadioReportId("pel_m_020223", InstanceName = nameof(ClinicFindingType.UrinaryIncontinence))]
        public bool IsStressIncontinence { get; set; }

        [RadioReportId("pel_m_020224", InstanceName = nameof(ClinicFindingType.UrinaryIncontinence))]
        public bool IsUrgeIncontinence { get; set; }
        #endregion

        #region Diarrhea
        [RadioReportId("pel_m_020226", InstanceName = nameof(ClinicFindingType.Diarrhea))]
        public bool IsParadoxical { get; set; }
        #endregion

        #region Bloody stool
        [RadioReportId("pel_m_020228", InstanceName = nameof(ClinicFindingType.BloodyStool))]
        public bool IsAnemiaDueToBleeding { get; set; } 
        #endregion
    }
}
