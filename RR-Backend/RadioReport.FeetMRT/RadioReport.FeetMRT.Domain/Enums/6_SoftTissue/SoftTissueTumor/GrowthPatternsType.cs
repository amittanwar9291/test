using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.SoftTissue
{
    public enum GrowthPatternsType : byte
    {
        None = 0,

        [RadioReportId("anc_m_060511", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        Subcutaneous = 1,

        [RadioReportId("anc_m_060512", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        NoDisplacement = 2,

        [RadioReportId("anc_m_060513", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        Infiltration = 3,

        [RadioReportId("anc_m_060514", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        InTheInterdigitalSpace = 4
    }
}