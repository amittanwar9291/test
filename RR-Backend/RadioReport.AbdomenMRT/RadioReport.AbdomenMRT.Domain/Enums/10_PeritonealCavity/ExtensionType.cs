using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.PeritonealCavity
{
    public enum ExtensionType : byte
    {
        None = 0,
        
        [RadioReportId("abd_m_100504", InstanceName = nameof(PeritonealCavityFindingType.Ascites))]
        [RadioReportId("abd_m_100377", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
        [RadioReportId("abd_m_100552", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        Diffuse = 1,
        
        [RadioReportId("abd_m_100503", InstanceName = nameof(PeritonealCavityFindingType.Ascites))]
        [RadioReportId("abd_m_100376", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
        [RadioReportId("abd_m_100551", InstanceName = nameof(PeritonealCavityFindingType.RetroperitonealMass))]
        Focal = 2
    }
}
