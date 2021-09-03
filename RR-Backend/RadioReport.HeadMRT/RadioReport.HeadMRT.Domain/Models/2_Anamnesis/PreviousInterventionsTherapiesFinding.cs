using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.HeadMRT.Domain.Enums.Anamnesis;

namespace RadioReport.HeadMRT.Domain.Models
{
    public class PreviousInterventionsTherapiesFinding : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("hea_m_020303")]
        public PreviousInterventionsTherapiesType FindingType { get; set; }

        #region Common

        [RadioReportId("hea_m_020402")]
        public byte Month { get; set; }

        [RadioReportId("hea_m_020403")]
        public int Year { get; set; }

        #endregion
    }
}