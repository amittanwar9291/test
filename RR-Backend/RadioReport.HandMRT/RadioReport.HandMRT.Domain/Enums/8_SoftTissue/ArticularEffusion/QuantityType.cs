
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums.SoftTissue
{
    public enum QuantityType : byte
    {
        None = 0,
        
        [RadioReportId("han_m_080302", InstanceName = nameof(SoftTissueFindingType.ArticularEffusion))]
        Low = 1,
        
        [RadioReportId("han_m_080303", InstanceName = nameof(SoftTissueFindingType.ArticularEffusion))]
        Pronounced = 2
    }
}