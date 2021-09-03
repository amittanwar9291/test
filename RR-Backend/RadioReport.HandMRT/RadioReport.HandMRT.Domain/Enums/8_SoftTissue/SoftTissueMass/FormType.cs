using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HandMRT.Domain.Enums.SoftTissue
{
    public enum FormType : byte
    {
        None = 0,
        
        [RadioReportId("han_m_0800508", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        Round = 1,
        
        [RadioReportId("han_m_0800509", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        Oval = 2,
        
        [RadioReportId("han_m_0800510", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        Lobulated = 3,
        
        [RadioReportId("han_m_0800511", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        SpindleShaped = 4,
        
        [RadioReportId("han_m_0800512", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        BroadBased = 5,
        
        [RadioReportId("han_m_0800513", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        Stalked = 6
    }
}