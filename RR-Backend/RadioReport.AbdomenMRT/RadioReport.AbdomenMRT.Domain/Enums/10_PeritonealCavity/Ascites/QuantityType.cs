using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.PeritonealCavity
{
    public enum QuantityType : byte
    {
        None = 0,
        
        [RadioReportId("abd_m_100313", InstanceName = nameof(PeritonealCavityFindingType.Ascites))]
        Little = 1,
        
        [RadioReportId("abd_m_100314", InstanceName = nameof(PeritonealCavityFindingType.Ascites))]
        Significant = 2
    }
}
