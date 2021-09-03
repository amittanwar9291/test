using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HeadMRT.Domain.Enums.Summary
{
    public enum NeurodegenerationType : byte
    {
        None = 0,

        [RadioReportId("hea_m_120223", InstanceName = nameof(SummaryFindingType.Neurodegeneration))]
        Microangiopathy = 1,

        [RadioReportId("hea_m_120224", InstanceName = nameof(SummaryFindingType.Neurodegeneration))]
        Atrophy = 2
    }
}