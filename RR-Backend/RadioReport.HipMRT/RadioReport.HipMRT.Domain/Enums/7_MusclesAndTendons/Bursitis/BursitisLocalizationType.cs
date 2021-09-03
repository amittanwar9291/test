using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Domain.Enums
{
    public enum BursitisLocalizationType : byte
    {
        None = 0,
        
        [RadioReportId("hip_m_070220", InstanceName = nameof(MusclesAndTendonsFindingType.Bursitis))]
        TrochantericBursa = 1,
        
        [RadioReportId("hip_m_070221", InstanceName = nameof(MusclesAndTendonsFindingType.Bursitis))]
        IliopectinealBursa = 2,
        
        [RadioReportId("hip_m_070222", InstanceName = nameof(MusclesAndTendonsFindingType.Bursitis))]
        IliopsoasBursa = 3,
        
        [RadioReportId("hip_m_070223", InstanceName = nameof(MusclesAndTendonsFindingType.Bursitis))]
        IschialBursa = 4,
        
        [RadioReportId("hip_m_070224", InstanceName = nameof(MusclesAndTendonsFindingType.Bursitis))]
        ObturatorExternusBursa = 5,
        
        [RadioReportId("hip_m_070225", InstanceName = nameof(MusclesAndTendonsFindingType.Bursitis))]
        QuadratusFemorisBursa = 6,
        
        [RadioReportId("hip_m_070226", InstanceName = nameof(MusclesAndTendonsFindingType.Bursitis))]
        SubglutealBursa = 7
    }
}
