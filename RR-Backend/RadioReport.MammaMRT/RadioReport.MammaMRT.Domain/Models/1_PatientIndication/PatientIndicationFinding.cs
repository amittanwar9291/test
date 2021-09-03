using RadioReport.Common.Logic.Attributes;
using RadioReport.Common.Logic.Models;
using RadioReport.MammaMRT.Domain.Enums;

namespace RadioReport.MammaMRT.Domain.Models
{
    public class PatientIndicationFinding : FindingBase
    {
        public override string InstanceName => FindingType.ToString();

        [RadioReportId("mam_m_010403")]
        public PatientIndicationFindingType FindingType { get; set; }

        [RadioReportId("mam_m_010503")]
        public SinceWhen NippleDischargeSinceWhen { get; set; }

        [RadioReportId("mam_m_010505", InstanceName = nameof(PatientIndicationFindingType.LumpsHardeningInBreastDetected))]
        [RadioReportId("mam_m_010506", InstanceName = nameof(PatientIndicationFindingType.NippleDischarge))]
        [RadioReportId("mam_m_010506", InstanceName = nameof(PatientIndicationFindingType.ChestPain))]
        [RadioReportId("mam_m_010506", InstanceName = nameof(PatientIndicationFindingType.Mastitis))]
        public BreastLocations NippleDischargeLocalization { get; set; }

        public ChestPainType ChestPainType { get; set; }

        [RadioReportId("mam_m_010509", InstanceName = nameof(PatientIndicationFindingType.Mastitis))]
        public bool IsAntibiosis { get; set; }
    }
}
