using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Kidneys
{
    public enum ContrastEnhancementQuantitativeType : byte
    {
        None = 0,
        
        [RadioReportId("abd_m_070565", InstanceName = nameof(KidneysFindingType.DecreasedRenalVolume))]
        [RadioReportId("abd_m_0702111", InstanceName = nameof(KidneysFindingType.IncreasedRenalVolume))]
        No = 1,
        
        [RadioReportId("abd_m_070566", InstanceName  = nameof(KidneysFindingType.DecreasedRenalVolume))]
        [RadioReportId("abd_m_0702112", InstanceName = nameof(KidneysFindingType.IncreasedRenalVolume))]
        Low = 2, 
        
        [RadioReportId("abd_m_070567", InstanceName  = nameof(KidneysFindingType.DecreasedRenalVolume))]
        [RadioReportId("abd_m_0702113", InstanceName = nameof(KidneysFindingType.IncreasedRenalVolume))]
        Strong = 3
    }
}
