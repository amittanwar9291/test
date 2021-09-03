using RadioReport.Common.Logic.Attributes;
using RadioReport.ThoraxMRT.Domain.Models;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
    public enum DynamicFindingsType : byte
    {
        None = 0,

        [RadioReportId("tho_m_080303", InstanceName = nameof(SummaryPage.DynamicFindingsType))]
        New = 1,

        [RadioReportId("tho_m_080304", InstanceName = nameof(SummaryPage.DynamicFindingsType))]
        [RadioReportId("tho_m_080508", InstanceName = nameof(SummaryPage.CysticFibrosisDynamicFindingsType))]
        Deterioration = 2,

        [RadioReportId("tho_m_080305", InstanceName = nameof(SummaryPage.DynamicFindingsType))]
        [RadioReportId("tho_m_080507", InstanceName = nameof(SummaryPage.CysticFibrosisDynamicFindingsType))]
        NoChange = 3,

        [RadioReportId("tho_m_080306", InstanceName = nameof(SummaryPage.DynamicFindingsType))]
        [RadioReportId("tho_m_080506", InstanceName = nameof(SummaryPage.CysticFibrosisDynamicFindingsType))]
        Improvement = 4
    }
}
