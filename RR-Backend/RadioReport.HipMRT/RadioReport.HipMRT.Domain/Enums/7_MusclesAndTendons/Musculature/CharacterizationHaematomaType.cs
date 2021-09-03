using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Domain.Enums.MusclesAndTendons
{
    public enum CharacterizationHaematomaType : byte
    {
        None = 0,
        
        [RadioReportId("hip_m_070515", InstanceName = nameof(MusclesAndTendonsFindingType.Musculature))]
        Hyperacute = 1,
        
        [RadioReportId("hip_m_070516", InstanceName = nameof(MusclesAndTendonsFindingType.Musculature))]
        Acute = 2,
        
        [RadioReportId("hip_m_070517", InstanceName = nameof(MusclesAndTendonsFindingType.Musculature))]
        Subacute = 3,
        
        [RadioReportId("hip_m_070518", InstanceName = nameof(MusclesAndTendonsFindingType.Musculature))]
        ChronicOrganized = 4
    }
}
