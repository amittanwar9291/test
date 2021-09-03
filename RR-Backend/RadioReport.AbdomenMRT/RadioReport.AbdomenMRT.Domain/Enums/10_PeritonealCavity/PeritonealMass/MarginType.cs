using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.PeritonealCavity
{
    public enum MarginType : byte
    {
        None = 0,
        
        [RadioReportId("abd_m_100524", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        [RadioReportId("abd_m_100449", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        Circumscribed = 1,
        
        [RadioReportId("abd_m_100525", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        [RadioReportId("abd_m_100450", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        NonCircumscribed = 2,
        
        [RadioReportId("abd_m_100526", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        [RadioReportId("abd_m_100451", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        Nodular = 3,
        
        [RadioReportId("abd_m_100527", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        [RadioReportId("abd_m_100452", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        Multinodular = 4
    }
}
