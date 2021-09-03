using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Summary
{
    public enum AtrophyNeurodegenerationType : byte
    {
        None = 0,

        [RadioReportId("hea_m_120225", InstanceName = nameof(SummaryFindingType.Neurodegeneration))]
        HistoryOfNeurodegenerativeDisease = 1,

        [RadioReportId("hea_m_120226", InstanceName = nameof(SummaryFindingType.Neurodegeneration))]
        AtrophyOfOtherGenesis = 2
    }
}