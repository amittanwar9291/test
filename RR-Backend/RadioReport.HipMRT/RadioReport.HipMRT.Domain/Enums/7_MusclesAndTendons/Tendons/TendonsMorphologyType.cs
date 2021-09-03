using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Domain.Enums
{
    public enum TendonsMorphologyType : byte
    {
        None = 0,
        
        [RadioReportId("hip_m_070436", InstanceName = nameof(MusclesAndTendonsFindingType.Tendons))]
        Thinning = 1,
        
        [RadioReportId("hip_m_070435", InstanceName = nameof(MusclesAndTendonsFindingType.Tendons))]
        Thickening = 2
    }
}
