using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.PeritonealCavity
{
    public enum AscitesQualityType : byte
    {
        None = 0,
        
        [RadioReportId("abd_m_100316", InstanceName = nameof(PeritonealCavityFindingType.Ascites))]
        Transsudative = 1,
        
        [RadioReportId("abd_m_100317", InstanceName = nameof(PeritonealCavityFindingType.Ascites))]
        Exudative = 2,
        
        [RadioReportId("abd_m_100318", InstanceName = nameof(PeritonealCavityFindingType.Ascites))]
        Hemorrhagic = 3,
        
        [RadioReportId("abd_m_100319", InstanceName = nameof(PeritonealCavityFindingType.Ascites))]
        Chylous = 4
    }
}
