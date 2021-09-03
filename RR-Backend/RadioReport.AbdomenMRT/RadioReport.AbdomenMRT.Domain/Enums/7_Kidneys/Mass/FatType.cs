using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Kidneys
{
    public enum FatType : byte
    {
        None = 0,
        
        [RadioReportId("abd_m_070236", InstanceName = nameof(KidneysFindingType.Mass))]
        Macroscopic = 1,
        
        [RadioReportId("abd_m_070237", InstanceName = nameof(KidneysFindingType.Mass))]
        Microscopic = 2
    }
}
