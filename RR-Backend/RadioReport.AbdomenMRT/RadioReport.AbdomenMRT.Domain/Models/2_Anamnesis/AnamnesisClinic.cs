using RadioReport.AbdomenMRT.Domain.Enums.Anamnesis;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;

namespace RadioReport.AbdomenMRT.Domain.Models
{
    public class AnamnesisClinic : FindingBase
    {
        public override string InstanceName => ClinicType.ToString();

        [RadioReportId("abd_m_020113")]
        public AnamnesisClinicType ClinicType { get; set; }
    }
}