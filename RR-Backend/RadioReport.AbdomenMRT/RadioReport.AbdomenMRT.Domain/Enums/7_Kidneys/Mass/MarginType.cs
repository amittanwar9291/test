using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Kidneys
{
    public enum MarginType : byte
    {
        None = 0,
        
        [RadioReportId("abd_m_070443", InstanceName = nameof(KidneysFindingType.Mass))]
        Circumscribed = 1,
        
        [RadioReportId("abd_m_070444", InstanceName = nameof(KidneysFindingType.Mass))]
        NonCircumscribed = 2
    }
}
