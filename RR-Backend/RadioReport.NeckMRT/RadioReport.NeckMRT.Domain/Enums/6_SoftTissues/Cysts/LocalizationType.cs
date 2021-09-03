using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.SoftTissues.Cysts
{
    public enum LocalizationType : byte
    {
        None = 0,
        
        [RadioReportId("nec_m_060372", InstanceName = nameof(SoftTissuesFindingType.Cysts))]
        Periauricular = 1,
        
        [RadioReportId("nec_m_060373", InstanceName = nameof(SoftTissuesFindingType.Cysts))]
        Anterolateral = 2
    }
}
