using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Domain.Enums.MusclesAndTendons
{
    public enum PathologyType : byte
    {
        None = 0,
        
        [RadioReportId("hip_m_070302", InstanceName = nameof(MusclesAndTendonsFindingType.Musculature))]
        MuscleLesion = 1,
        
        [RadioReportId("hip_m_070303", InstanceName = nameof(MusclesAndTendonsFindingType.Musculature))]
        Haematoma = 2,
        
        [RadioReportId("hip_m_070304", InstanceName = nameof(MusclesAndTendonsFindingType.Musculature))]
        FurtherFindings = 3
    }
}
