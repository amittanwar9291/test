using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bladder
{
    public enum HeterogeneousType : byte
    {
        None = 0,
        
        [RadioReportId("pel_m_0904112", InstanceName = nameof(BladderFindingType.UrinaryBladderWallThickening))]
        Central = 1,
        
        [RadioReportId("pel_m_0904113", InstanceName = nameof(BladderFindingType.UrinaryBladderWallThickening))]
        Peripheral = 2,
        
        [RadioReportId("pel_m_0904114", InstanceName = nameof(BladderFindingType.UrinaryBladderWallThickening))]
        Marginal = 3
    }
}