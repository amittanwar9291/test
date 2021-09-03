using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum PatellaDetectionDissekatType : byte
    {
        None = 0,

        [RadioReportId("kne_m_070329", InstanceName = nameof(PatellaFindingType.OsteochondrosisDissecans))]
        InSitu = 1,

        [RadioReportId("kne_m_070330", InstanceName = nameof(PatellaFindingType.OsteochondrosisDissecans))]
        Displaced = 2
    }
}
