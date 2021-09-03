using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Domain.Enums
{
    public enum BursitisMarginType : byte
    {
        None = 0,
        
        [RadioReportId("hip_m_070308", InstanceName = nameof(MusclesAndTendonsFindingType.Bursitis))]
        IllDefined = 1,
        
        [RadioReportId("hip_m_070309", InstanceName = nameof(MusclesAndTendonsFindingType.Bursitis))]
        Sharp = 2
    }
}
