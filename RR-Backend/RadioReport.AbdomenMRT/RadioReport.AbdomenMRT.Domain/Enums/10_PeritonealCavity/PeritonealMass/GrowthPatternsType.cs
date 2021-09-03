using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.PeritonealCavity
{
    public enum GrowthPatternsType : byte
    {
        None = 0,
        
        [RadioReportId("abd_m_100433", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        [RadioReportId("abd_m_100358", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        Displacement = 1,
        
        [RadioReportId("abd_m_100434", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        [RadioReportId("abd_m_100359", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        Infiltration = 2
    }
}
