using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Kidneys
{
    public enum MultipleGasInclusionsLocalizationType : byte
    {
        None = 0,
        
        [RadioReportId("abd_m_070574", InstanceName = nameof(KidneysFindingType.IncreasedRenalVolume))]
        Subcapsular = 1,
        
        [RadioReportId("abd_m_0705104", InstanceName = nameof(KidneysFindingType.IncreasedRenalVolume))]
        Parapelvin = 2,
        
        [RadioReportId("abd_m_0705105", InstanceName = nameof(KidneysFindingType.IncreasedRenalVolume))]
        Retroperitoneal = 3
         
    }
}
