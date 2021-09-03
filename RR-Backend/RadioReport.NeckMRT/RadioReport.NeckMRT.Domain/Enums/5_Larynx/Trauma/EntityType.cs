using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Larynx
{
    public enum EntityType: byte
    {
        None = 0,
        
        [RadioReportId("nec_m_050237", InstanceName = nameof(LarynxFindingType.Trauma))]
        Hematoma = 1,
        
        [RadioReportId("nec_m_050238", InstanceName = nameof(LarynxFindingType.Trauma))]
        Edema = 2
    }
}