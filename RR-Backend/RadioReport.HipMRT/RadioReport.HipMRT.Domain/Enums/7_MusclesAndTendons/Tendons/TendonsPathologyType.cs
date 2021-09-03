using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Domain.Enums
{
    public enum TendonsPathologyType : byte
    {
        None = 0,
        
        [RadioReportId("hip_m_070305", InstanceName = nameof(MusclesAndTendonsFindingType.Tendons))]
        Rupture = 1,
        
        [RadioReportId("hip_m_070306", InstanceName = nameof(MusclesAndTendonsFindingType.Tendons))]
        Tendinopathy = 2,
    }
}
