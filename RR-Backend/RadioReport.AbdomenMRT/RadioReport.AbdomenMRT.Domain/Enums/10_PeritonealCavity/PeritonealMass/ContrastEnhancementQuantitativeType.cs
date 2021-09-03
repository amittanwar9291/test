using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.PeritonealCavity
{
    public enum ContrastEnhancementQuantitativeType : byte
    {
        None = 0,

        [RadioReportId("abd_m_100436", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        [RadioReportId("abd_m_100554", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        No = 1,
        
        [RadioReportId("abd_m_100437", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        [RadioReportId("abd_m_100555", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        Low = 2,
        
        [RadioReportId("abd_m_100438", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        [RadioReportId("abd_m_100556", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        Strong = 3
    }
}
