using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Larynx
{
    public enum LocalizationAxialType: byte
    {
        None = 0,
        
        [RadioReportId("nec_m_050403", InstanceName = nameof(LarynxFindingType.Mass))]
        Left = 1,
        
        [RadioReportId("nec_m_050404", InstanceName = nameof(LarynxFindingType.Mass))]
        Right = 2,
        
        [RadioReportId("nec_m_050405", InstanceName = nameof(LarynxFindingType.Mass))]
        Bilateral = 3,
        
        [RadioReportId("nec_m_050406", InstanceName = nameof(LarynxFindingType.Mass))]
        Median = 4
    }
}