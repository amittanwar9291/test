

using RadioReport.Common.Logic.Attributes;
using RadioReport.MammaMRT.Domain.Models;

namespace RadioReport.MammaMRT.Domain.Enums
{
    public enum MammographyDetails : byte
    {
        None = 0,

        [RadioReportId("mam_m_010205", InstanceName = nameof(PatientIndicationPage.MammographyDetails))]
        [RadioReportId("mam_m_010305", InstanceName = nameof(PatientIndicationPage.MammasonographyDetails))]
        Unremarkable = 1,

        [RadioReportId("mam_m_010206", InstanceName = nameof(PatientIndicationPage.MammographyDetails))]
        [RadioReportId("mam_m_010306", InstanceName = nameof(PatientIndicationPage.MammasonographyDetails))]
        FindingsInNeedOfClarification = 2
    }
}
