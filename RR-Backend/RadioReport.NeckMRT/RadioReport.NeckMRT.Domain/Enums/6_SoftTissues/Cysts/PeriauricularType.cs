using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.SoftTissues.Cysts
{
    public enum PeriauricularType : byte
    {
        None = 0,
        
        [RadioReportId("nec_m_060307", InstanceName = nameof(SoftTissuesFindingType.Cysts))]
        TypeI = 1,
        
        [RadioReportId("nec_m_060308", InstanceName = nameof(SoftTissuesFindingType.Cysts))]
        TypeII = 2
    }
}
