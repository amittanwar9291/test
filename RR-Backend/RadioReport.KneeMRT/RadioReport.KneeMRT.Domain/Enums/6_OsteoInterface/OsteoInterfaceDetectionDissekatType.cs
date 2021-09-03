using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum OsteoInterfaceDetectionDissekatType : byte
    {
        None = 0,

        [RadioReportId("kne_m_060344", InstanceName = nameof(OsteoInterfaceFindingType.OsteochondrosisDissecans))]
        InSitu = 1,

        [RadioReportId("kne_m_060345", InstanceName = nameof(OsteoInterfaceFindingType.OsteochondrosisDissecans))]
        Displaced = 2
    }
}