using RadioReport.Common.Logic.Attributes;

namespace RadioReport.FeetMRT.Domain.Enums.SoftTissue
{
    public enum DimensionType : byte
    {
        None = 0,

        [RadioReportId("anc_m_060302", InstanceName = nameof(SoftTissueFindingType.Effusion))]
        Mild = 1,
        
        [RadioReportId("anc_m_060303", InstanceName = nameof(SoftTissueFindingType.Effusion))]
        Significant = 2
    }
}