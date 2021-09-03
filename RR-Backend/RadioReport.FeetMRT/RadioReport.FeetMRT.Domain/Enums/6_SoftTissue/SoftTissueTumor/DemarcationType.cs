using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.SoftTissue
{
    public enum DemarcationType : byte
    {
        None = 0,
        
        [RadioReportId("anc_m_060230", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        Sharp = 1,

        [RadioReportId("anc_m_060231", InstanceName = nameof(SoftTissueFindingType.SoftTissueTumor))]
        IllDefined = 2
    }
}