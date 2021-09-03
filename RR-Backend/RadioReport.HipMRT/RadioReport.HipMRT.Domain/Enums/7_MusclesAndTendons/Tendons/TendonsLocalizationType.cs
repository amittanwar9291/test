using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Domain.Enums
{
    public enum TendonsLocalizationType : byte
    {
        None = 0,
        
        [RadioReportId("hip_m_070215", InstanceName = nameof(MusclesAndTendonsFindingType.Tendons))]
        IliotibialBand = 1,
        
        [RadioReportId("hip_m_070216", InstanceName = nameof(MusclesAndTendonsFindingType.Tendons))]
        RectusFemorisMuscle = 2,
        
        [RadioReportId("hip_m_070217", InstanceName = nameof(MusclesAndTendonsFindingType.Tendons))]
        GluteusMinimusMuscle = 3,
        
        [RadioReportId("hip_m_070218", InstanceName = nameof(MusclesAndTendonsFindingType.Tendons))]
        GluteusMediusMuscle = 4,
        
        [RadioReportId("hip_m_070219", InstanceName = nameof(MusclesAndTendonsFindingType.Tendons))]
        GluteusMaximusMuscle = 5
    }
}
