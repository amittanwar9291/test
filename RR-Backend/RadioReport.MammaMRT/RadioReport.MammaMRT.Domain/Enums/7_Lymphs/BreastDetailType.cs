using RadioReport.Common.Logic.Attributes;
using RadioReport.MammaMRT.Domain.Models;

namespace RadioReport.MammaMRT.Domain.Enums.Lymphs
{
    public enum BreastDetailType : byte
    {
        None = 0,

        [RadioReportId("mam_m_070411", InstanceName = nameof(LymphsPage.RightBreastDetailType))]
        [RadioReportId("mam_m_070414", InstanceName = nameof(LymphsPage.LeftBreastDetailType))]
        Slightly = 1,

        [RadioReportId("mam_m_070412", InstanceName = nameof(LymphsPage.RightBreastDetailType))]
        [RadioReportId("mam_m_070415", InstanceName = nameof(LymphsPage.LeftBreastDetailType))]
        Significant = 2
    }
}
