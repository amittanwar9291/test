using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum PatellaClassificationType : byte
    {
        None = 0,

        [RadioReportId("kne_m_070325", InstanceName = nameof(PatellaFindingType.OsteochondrosisDissecans))]
        CartilageIntact = 1,

        [RadioReportId("kne_m_070327", InstanceName = nameof(PatellaFindingType.OsteochondrosisDissecans))]
        ChondralLesion = 2
    }
}
