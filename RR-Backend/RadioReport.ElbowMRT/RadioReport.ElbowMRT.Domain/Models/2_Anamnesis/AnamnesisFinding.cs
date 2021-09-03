using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.ElbowMRT.Domain.Enums;

namespace RadioReport.ShoulderMRT.Domain.Models
{
    public class AnamnesisFinding : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("elb_m_0201100")]
        public AnamnesisFindingType FindingType { get; set; }

        [RadioReportId("elb_m_0202109")]
        public bool IsSuspectedDiagnosis { get; set; }

        #region Trauma
        [RadioReportId("elb_m_0202103", InstanceName = nameof(AnamnesisFindingType.Trauma))]
        public byte? TraumaMonth { get; set; }

        [RadioReportId("elb_m_0202104", InstanceName = nameof(AnamnesisFindingType.Trauma))]
        public int? TraumaYear { get; set; }
        #endregion

        #region Lesion of tendons ligaments
        [RadioReportId("elb_m_0202106", InstanceName = nameof(AnamnesisFindingType.LesionOfTendonsLigaments))]
        public bool IsEpicondylitis { get; set; }

        [RadioReportId("elb_m_0202107", InstanceName = nameof(AnamnesisFindingType.LesionOfTendonsLigaments))]
        public bool IsLesionOfBicepsTendon { get; set; }

        [RadioReportId("elb_m_0202108", InstanceName = nameof(AnamnesisFindingType.LesionOfTendonsLigaments))]
        public bool IsLesionOfTricepsTendon { get; set; }
        #endregion
    }
}
