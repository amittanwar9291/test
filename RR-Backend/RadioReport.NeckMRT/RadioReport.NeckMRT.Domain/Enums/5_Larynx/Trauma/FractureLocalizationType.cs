using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Larynx
{
    public enum FractureLocalizationType: byte
    {
        None = 0,
        
        [RadioReportId("nec_m_050337", InstanceName = nameof(LarynxFindingType.Trauma))]
        ThyroidCartilage = 1,
        
        [RadioReportId("nec_m_050338", InstanceName = nameof(LarynxFindingType.Trauma))]
        CricoidCartilage = 2,
        
        [RadioReportId("nec_m_050339", InstanceName = nameof(LarynxFindingType.Trauma))]
        ArytaenoidCartilage = 3
    }
}