using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum OsteoInterfaceEpiphysealJointType : byte
    {
        None = 0,

        [RadioReportId("kne_m_060435", InstanceName = nameof(OsteoInterfaceFindingType.OsteochondrosisDissecans))]
        Open = 1,

        [RadioReportId("kne_m_060436", InstanceName = nameof(OsteoInterfaceFindingType.OsteochondrosisDissecans))]
        Close = 2
    }
}