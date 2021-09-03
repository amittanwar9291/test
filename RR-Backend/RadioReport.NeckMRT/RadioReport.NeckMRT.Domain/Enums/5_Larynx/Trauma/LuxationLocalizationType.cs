using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Larynx
{
    public enum LuxationLocalizationType: byte
    {
        None = 0,
        
        [RadioReportId("nec_m_050424", InstanceName = nameof(LarynxFindingType.Trauma))]
        CricothyroidalJoint = 1,
        
        [RadioReportId("nec_m_050428", InstanceName = nameof(LarynxFindingType.Trauma))]
        CartilagoArytaenoidea = 2
    }
}