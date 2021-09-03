using RadioReport.AbdomenMRT.Domain.Constants;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums
{
    public enum AreFindingsExtended : byte
    {
        None = 0,

        [RadioReportId("abd_m_050104", InstanceName = nameof(InstanceNames.Spleen))]
        [RadioReportId("abd_m_080104", InstanceName = nameof(InstanceNames.AdrenalGlands))]
        [RadioReportId("abd_m_090104", InstanceName = nameof(InstanceNames.GastrointestinalTract))]
        [RadioReportId("abd_m_110104", InstanceName = nameof(InstanceNames.LymphaticSystem))]
        False = 1,

        [RadioReportId("abd_m_050113", InstanceName = nameof(InstanceNames.Spleen))]
        [RadioReportId("abd_m_080109", InstanceName = nameof(InstanceNames.AdrenalGlands))]
        [RadioReportId("abd_m_090113", InstanceName = nameof(InstanceNames.GastrointestinalTract))]
        [RadioReportId("abd_m_110109", InstanceName = nameof(InstanceNames.LymphaticSystem))]
        NoDetails = 2,

        [RadioReportId("abd_m_050105", InstanceName = nameof(InstanceNames.Spleen))]
        [RadioReportId("abd_m_080105", InstanceName = nameof(InstanceNames.AdrenalGlands))]
        [RadioReportId("abd_m_090105", InstanceName = nameof(InstanceNames.GastrointestinalTract))]
        [RadioReportId("abd_m_110105", InstanceName = nameof(InstanceNames.LymphaticSystem))]
        True = 3
    }
}
