using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Domain.Enums
{
    public enum BonyAvulsionType : byte
    {
        None = 0,
        
        [RadioReportId("hip_m_070508", InstanceName = nameof(MusclesAndTendonsFindingType.Musculature))]
        AnteriorSuperiorIliacSpine = 1,
        
        [RadioReportId("hip_m_070509", InstanceName = nameof(MusclesAndTendonsFindingType.Musculature))]
        AnteriorInferiorIliacSpine = 2,
        
        [RadioReportId("hip_m_070510", InstanceName = nameof(MusclesAndTendonsFindingType.Musculature))]
        IschialTuberosity = 3,
        
        [RadioReportId("hip_m_070511", InstanceName = nameof(MusclesAndTendonsFindingType.Musculature))]
        LesserTrochanter = 4,
        
        [RadioReportId("hip_m_070512", InstanceName = nameof(MusclesAndTendonsFindingType.Musculature))]
        PosteriorFemoralDiaphysis = 5
    }
}
