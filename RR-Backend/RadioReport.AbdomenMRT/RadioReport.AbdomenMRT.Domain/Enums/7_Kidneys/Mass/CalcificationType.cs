using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Kidneys
{
    public enum CalcificationType : byte
    {
        None = 0,
        
        [RadioReportId("abd_m_070240", InstanceName = nameof(KidneysFindingType.Mass))]
        Diffuse = 1,
        
        [RadioReportId("abd_m_070241", InstanceName = nameof(KidneysFindingType.Mass))]
        Central = 2
    }
}