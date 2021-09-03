using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Indication
{
    public enum MetabolismType: byte
    {
        None = 0,
        
        [RadioReportId("nec_m_020219", InstanceName = nameof(IndicationType.Goiter))]
        Hyperthyroidism = 1,
        
        [RadioReportId("nec_m_020220", InstanceName = nameof(IndicationType.Goiter))]
        Euhyroidism = 2,
        
        [RadioReportId("nec_m_020221", InstanceName = nameof(IndicationType.Goiter))]
        Hypothyroidism = 3
    }
}