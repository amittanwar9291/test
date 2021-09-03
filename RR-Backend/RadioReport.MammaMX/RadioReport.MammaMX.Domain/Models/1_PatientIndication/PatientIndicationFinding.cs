using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.MammaMX.Domain.Enums;

namespace RadioReport.MammaMX.Domain.Models
{
    public class PatientIndicationFinding : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("mam_mx_010514", InstanceName = nameof(PatientIndicationFindingType.LumpIndurationDetected))]
        public bool IsProgressiveFinding { get; set; }

        [RadioReportId("mam_mx_010403")]
        public PatientIndicationFindingType FindingType { get; set; }

        [RadioReportId("mam_mx_010503")]
        public SinceWhen NippleDischargeSinceWhen { get; set; }

        [RadioReportId("mam_mx_010505", InstanceName = nameof(PatientIndicationFindingType.LumpIndurationDetected))]
        [RadioReportId("mam_mx_010506", InstanceName = nameof(PatientIndicationFindingType.NippleDischarge))]
        [RadioReportId("mam_mx_010506", InstanceName = nameof(PatientIndicationFindingType.Mastodynia))]
        [RadioReportId("mam_mx_010506", InstanceName = nameof(PatientIndicationFindingType.Mastitis))]
        [RadioReportId("mam_mx_010506", InstanceName = nameof(PatientIndicationFindingType.Abscess))]
        public BreastLocations NippleDischargeLocalization { get; set; }

        public BreastPainType ChestPainType { get; set; }

        [RadioReportId("mam_mx_010509", InstanceName = nameof(PatientIndicationFindingType.Mastitis))]
        [RadioReportId("mam_mx_010509", InstanceName = nameof(PatientIndicationFindingType.Abscess))]
        public bool IsAntibiosis { get; set; }
    }
}
