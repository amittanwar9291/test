using RadioReport.Common.Logic.Attributes;
using RadioReport.MammaMX.Domain.Models;

namespace RadioReport.MammaMX.Domain.Enums
{
    public enum MammographyDetailsType : byte
    {
        None = 0,

        [RadioReportId("mam_mx_010205", InstanceName = nameof(PatientIndicationPage.MammasonographyDetails))]
        [RadioReportId("mam_mx_010305", InstanceName = nameof(PatientIndicationPage.MammographyMRTDetails))]
        [RadioReportId("mam_mx_010118", InstanceName = nameof(PatientIndicationPage.MammographyDetails))]
        NoPathologicFinding = 1,

        [RadioReportId("mam_mx_010206", InstanceName = nameof(PatientIndicationPage.MammasonographyDetails))]
        [RadioReportId("mam_mx_010306", InstanceName = nameof(PatientIndicationPage.MammographyMRTDetails))]
        [RadioReportId("mam_mx_010119", InstanceName = nameof(PatientIndicationPage.MammographyDetails))]
        FindingsInNeedOfClarification = 2
    }
}
