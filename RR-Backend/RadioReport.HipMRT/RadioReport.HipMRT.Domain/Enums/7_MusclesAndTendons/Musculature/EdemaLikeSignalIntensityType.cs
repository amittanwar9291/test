using RadioReport.Common.Logic.Attributes;

namespace RadioReport.HipMRT.Domain.Enums
{
    public enum EdemaLikeSignalIntensityType : byte
    {
        None = 0,
        
        [RadioReportId("hip_m_070417", InstanceName = nameof(MusclesAndTendonsFindingType.Musculature))]
        EpimysealPeripheral = 1,
        
        [RadioReportId("hip_m_070418", InstanceName = nameof(MusclesAndTendonsFindingType.Musculature))]
        MyotendinousCentral = 2
    }
}
