using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Larynx
{
    public enum CmDistributionType: byte
    {
        None = 0,
        
        [RadioReportId("nec_m_050524", InstanceName = nameof(LarynxFindingType.Mass))]
        Peripheral = 1,
        
        [RadioReportId("nec_m_050525", InstanceName = nameof(LarynxFindingType.Mass))]
        Central = 2,
        
        [RadioReportId("nec_m_050526", InstanceName = nameof(LarynxFindingType.Mass))]
        EntireLesion = 3,
        
        [RadioReportId("nec_m_050527", InstanceName = nameof(LarynxFindingType.Mass))]
        Septal = 4,
        
        [RadioReportId("nec_m_050528", InstanceName = nameof(LarynxFindingType.Mass))]
        InNidus = 5
    }
}