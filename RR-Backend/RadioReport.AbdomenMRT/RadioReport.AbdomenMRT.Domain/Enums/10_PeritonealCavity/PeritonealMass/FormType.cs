using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.PeritonealCavity
{
    public enum FormType : byte
    {
        None = 0,
        
        [RadioReportId("abd_m_100532", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        [RadioReportId("abd_m_100457", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        Round = 1,
        
        [RadioReportId("abd_m_100533", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        [RadioReportId("abd_m_100458", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        Lobulated = 2,
        
        [RadioReportId("abd_m_100534", InstanceName = nameof(PeritonealCavityFindingType.PeritonealMass))]
        [RadioReportId("abd_m_100459", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        Irregular = 3
    }
}
