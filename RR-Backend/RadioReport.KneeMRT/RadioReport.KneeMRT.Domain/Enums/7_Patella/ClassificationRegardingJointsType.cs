using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum ClassificationRegardingJointsType : byte
    {
        None = 0,

        [RadioReportId("kne_m_070332", InstanceName = nameof(PatellaFindingType.OsteochondrosisDissecans))]
        Open = 1,

        [RadioReportId("kne_m_070333", InstanceName = nameof(PatellaFindingType.OsteochondrosisDissecans))]
        Closed = 2
    }
}
