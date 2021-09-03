using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums.SoftTissue
{
    public enum ContrastEnhancementDistributionType : byte
    {
        None = 0,
        
        [RadioReportId("han_m_0800523", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        Peripheral = 1,
        
        [RadioReportId("han_m_0800524", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        Central = 2,
        
        [RadioReportId("han_m_0800525", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        EntireLesion = 3,
        
        [RadioReportId("han_m_0800526", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        Septal = 4,
        
        [RadioReportId("han_m_0800527", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        InTheNidus = 5
    }
}