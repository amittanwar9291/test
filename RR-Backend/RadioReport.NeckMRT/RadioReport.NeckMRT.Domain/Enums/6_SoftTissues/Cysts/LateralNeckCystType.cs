using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.SoftTissues.Cysts
{
    public enum LateralNeckCystType : byte
    {
        None = 0,
        
        [RadioReportId("nec_m_060402", InstanceName = nameof(SoftTissuesFindingType.Cysts))]
        Cyst = 1,
        
        [RadioReportId("nec_m_060403", InstanceName = nameof(SoftTissuesFindingType.Cysts))]
        Sinus = 2,
        
        [RadioReportId("nec_m_060404", InstanceName = nameof(SoftTissuesFindingType.Cysts))]
        Fistula = 3
    }
}
