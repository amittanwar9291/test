using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Domain.Enums.SoftTissue
{
    public enum ClassificationType : byte
    {
        None = 0,
        
        [RadioReportId("hip_m_080405", InstanceName = nameof(SoftTissueFindingType.MorelLavalleeLesion))]
        TypeI = 1,
        
        [RadioReportId("hip_m_080406", InstanceName = nameof(SoftTissueFindingType.MorelLavalleeLesion))]
        TypeII = 2,
        
        [RadioReportId("hip_m_080407", InstanceName = nameof(SoftTissueFindingType.MorelLavalleeLesion))]
        TypeIII = 3,
        
        [RadioReportId("hip_m_080408", InstanceName = nameof(SoftTissueFindingType.MorelLavalleeLesion))]
        TypeIV = 4,
        
        [RadioReportId("hip_m_080409", InstanceName = nameof(SoftTissueFindingType.MorelLavalleeLesion))]
        TypeV = 5,
        
        [RadioReportId("hip_m_080410", InstanceName = nameof(SoftTissueFindingType.MorelLavalleeLesion))]
        TypeVI = 6
    }
}