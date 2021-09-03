using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Domain.Enums
{
    public enum ClassificationMCStatement : byte
    {
        None = 0,
        
        [RadioReportId("hip_m_070402", InstanceName = nameof(MusclesAndTendonsFindingType.Musculature))]
        MuscularEdema = 1,
        
        [RadioReportId("hip_m_070403", InstanceName = nameof(MusclesAndTendonsFindingType.Musculature))]
        MuscleFiberRuptureTypeIIIa = 2,
        
        [RadioReportId("hip_m_070404", InstanceName = nameof(MusclesAndTendonsFindingType.Musculature))]
        TornMuscleBundleTypeIIIb = 3,
        
        [RadioReportId("hip_m_070405", InstanceName = nameof(MusclesAndTendonsFindingType.Musculature))]
        TornMuscleOrTendonRuptureTypeIV = 4
    }
}
