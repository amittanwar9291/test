using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.HeadCT.Domain.Enums.Anamnesis;

namespace RadioReport.HeadCT.Domain.Models
{
    public class PreviousInterventionsTherapiesFinding : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("hea_c_020303")]
        public PreviousInterventionsTherapiesType FindingType { get; set; }

        #region Common

        [RadioReportId("hea_c_020402")]
        public byte Month { get; set; }

        [RadioReportId("hea_c_020403")]
        public int Year { get; set; }

        #endregion
    }
}