using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.PeritonealCavity
{
    public enum ContrastEnhancementDistributionType : byte
    {
        None = 0,
        
        [RadioReportId("abd_m_100442", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        [RadioReportId("abd_m_100560", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        Peripheral = 1,
        
        [RadioReportId("abd_m_100443", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        [RadioReportId("abd_m_100561", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        EntireLesion = 2,
        
        [RadioReportId("abd_m_100444", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        [RadioReportId("abd_m_100562", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        Central = 3,
        
        [RadioReportId("abd_m_100445", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        [RadioReportId("abd_m_100563", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        Septal = 4,
        
        [RadioReportId("abd_m_100446", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        [RadioReportId("abd_m_100564", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        Capsular = 5
    }
}
