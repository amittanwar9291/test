using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Domain.Enums
{
    public enum RuptureLocalizationType : byte
    {
        None = 0,
        
        [RadioReportId("hip_m_070424", InstanceName = nameof(MusclesAndTendonsFindingType.Tendons))]
        Proximal = 1,
        
        [RadioReportId("hip_m_070425", InstanceName = nameof(MusclesAndTendonsFindingType.Tendons))]
        Distal = 2
    }
}
