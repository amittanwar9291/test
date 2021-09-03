using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Kidneys
{
    public enum FormType : byte
    {
        None = 0,
        
        [RadioReportId("abd_m_070592", InstanceName = nameof(KidneysFindingType.Mass))]
        Round = 1,
        
        [RadioReportId("abd_m_070593", InstanceName = nameof(KidneysFindingType.Mass))]
        Oval = 2,
        
        [RadioReportId("abd_m_070594", InstanceName = nameof(KidneysFindingType.Mass))]
        Irregular = 3
    }
}
