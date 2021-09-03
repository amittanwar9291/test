using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Pharynx
{
    public enum CmEnhancementDistributionType : byte
    {
        None = 0,

        [RadioReportId("nec_m_040525", InstanceName = nameof(PharynxFindingType.Mass))]
        Peripheral = 1,
        
        [RadioReportId("nec_m_040526", InstanceName = nameof(PharynxFindingType.Mass))]
        EntireLesion = 2,
        
        [RadioReportId("nec_m_040527", InstanceName = nameof(PharynxFindingType.Mass))]
        Central = 3,
        
        [RadioReportId("nec_m_040528", InstanceName = nameof(PharynxFindingType.Mass))]
        Septal = 4,
        
        [RadioReportId("nec_m_040529", InstanceName = nameof(PharynxFindingType.Mass))]
        InNidus = 5,
        
        [RadioReportId("nec_m_040530", InstanceName = nameof(PharynxFindingType.Mass))]
        Mucosal = 6,
    }
}
