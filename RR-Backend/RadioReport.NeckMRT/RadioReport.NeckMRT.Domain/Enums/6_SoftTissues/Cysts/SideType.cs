using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.SoftTissues.Cysts
{
    public enum SideType : byte
    {
        None = 0,
        
        [RadioReportId("nec_m_060369", InstanceName = nameof(SoftTissuesFindingType.Cysts))]
        Right = 1,
        
        [RadioReportId("nec_m_060370", InstanceName = nameof(SoftTissuesFindingType.Cysts))]
        Left = 2
    }
}
