using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Larynx
{
    public enum CystsType: byte
    {
        None = 0,
        
        [RadioReportId("nec_m_050319", InstanceName = nameof(LarynxFindingType.Mass))]
        Simple = 1,
        
        [RadioReportId("nec_m_050320", InstanceName = nameof(LarynxFindingType.Mass))]
        Complex = 2
    }
}