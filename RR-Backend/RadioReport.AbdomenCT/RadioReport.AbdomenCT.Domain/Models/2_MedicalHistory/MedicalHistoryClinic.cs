using RadioReport.AbdomenCT.Domain.Enums.MedicalHistory;
using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;

namespace RadioReport.AbdomenCT.Domain.Models
{
    public class MedicalHistoryClinic: FindingBase
    {
        public override string InstanceName => ClinicType.ToString();

        [RadioReportId("abd_c_020113")]
        public MedicalHistoryClinicType ClinicType { get; set; }
    }
}
