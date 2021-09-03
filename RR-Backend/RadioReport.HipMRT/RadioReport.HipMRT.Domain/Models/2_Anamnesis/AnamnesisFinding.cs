using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.HipMRT.Domain.Enums;

namespace RadioReport.HipMRT.Domain.Models
{
    public class AnamnesisFinding : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        #region Common

        [RadioReportId("hip_m_020105")]
        public AnamnesisFindingType FindingType { get; set; }

        [RadioReportId("hip_m_020207")]
        public bool IsSuspicion { get; set; }

        [RadioReportId("hip_m_020209")]
        public bool IsSiteRight { get; set; }

        [RadioReportId("hip_m_020210")]
        public bool IsSiteLeft { get; set; }

        [RadioReportId("hip_m_020218")]
        public bool IsFemur { get; set; }

        [RadioReportId("hip_m_020219")]
        public bool IsFemurRight { get; set; }

        [RadioReportId("hip_m_020220")]
        public bool IsFemurLeft { get; set; }

        [RadioReportId("hip_m_020221")]
        public bool IsPelvis { get; set; }

        [RadioReportId("hip_m_020222")]
        public bool IsPelvisRight { get; set; }

        [RadioReportId("hip_m_020223")]
        public bool IsPelvisLeft { get; set; }

        #endregion
        #region Coxalgia

        [RadioReportId("hip_m_020204", InstanceName = nameof(AnamnesisFindingType.Coxalgia))]
        public bool IsRight { get; set; }

        [RadioReportId("hip_m_020205", InstanceName = nameof(AnamnesisFindingType.Coxalgia))]
        public bool IsLeft { get; set; }

        #endregion
        #region Trauma

        [RadioReportId("hip_m_020216", InstanceName = nameof(AnamnesisFindingType.Trauma))]
        public int? YearOfTrauma { get; set; }

        [RadioReportId("hip_m_020215", InstanceName = nameof(AnamnesisFindingType.Trauma))]
        public int? MonthOfTrauma { get; set; }

        #endregion
        #region Fracture

        [RadioReportId("hip_m_020224", InstanceName = nameof(AnamnesisFindingType.Fracture))]
        public bool IsSacrum { get;set;}

        #endregion
    }
}
