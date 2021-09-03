using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Domain.Enums.SoftTissue
{
    public enum QuantityType : byte
    {
        None = 0,

        [RadioReportId("hip_m_080302", InstanceName = nameof(SoftTissueFindingType.ArticularEffusion))]
        Small = 1,
        
        [RadioReportId("hip_m_080303", InstanceName = nameof(SoftTissueFindingType.ArticularEffusion))]
        Moderate = 2,
        
        [RadioReportId("hip_m_080304", InstanceName = nameof(SoftTissueFindingType.ArticularEffusion))]
        Pronounced = 3
    }
}