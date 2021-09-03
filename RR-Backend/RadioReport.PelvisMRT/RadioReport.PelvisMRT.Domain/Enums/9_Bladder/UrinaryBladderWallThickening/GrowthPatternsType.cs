using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bladder
{
    public enum GrowthPatternsType : byte
    {
        None = 0,
        
        [RadioReportId("pel_m_0902156", InstanceName = nameof(BladderFindingType.UrinaryBladderWallThickening))]
        ExophyticGrowth = 1,
        
        [RadioReportId("pel_m_0902157", InstanceName = nameof(BladderFindingType.UrinaryBladderWallThickening))]
        InfiltrativeGrowth = 2
    }
}