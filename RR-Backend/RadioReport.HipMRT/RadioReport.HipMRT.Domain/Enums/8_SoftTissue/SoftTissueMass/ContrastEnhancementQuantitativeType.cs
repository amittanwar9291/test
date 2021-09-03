using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Domain.Enums.SoftTissue
{
    public enum ContrastEnhancementQuantitativeType : byte
    {
        None = 0,

        [RadioReportId("hip_m_080522", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        No = 1,
        
        [RadioReportId("hip_m_080523", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        Low = 2,
        
        [RadioReportId("hip_m_080524", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        Pronounced = 3
    }
}