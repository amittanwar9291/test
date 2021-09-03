using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Domain.Enums.SoftTissue
{
    public enum ContrastEnhancementDistributionType : byte
    {
        None = 0,

        [RadioReportId("hip_m_080528", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        Peripheral = 1,
        
        [RadioReportId("hip_m_080529", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        Central = 2,
        
        [RadioReportId("hip_m_080530", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        TotalLesion = 3,
        
        [RadioReportId("hip_m_080531", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        Septal = 4,
        
        [RadioReportId("hip_m_080532", InstanceName = nameof(SoftTissueFindingType.SoftTissueMass))]
        InNidus = 5
    }
}