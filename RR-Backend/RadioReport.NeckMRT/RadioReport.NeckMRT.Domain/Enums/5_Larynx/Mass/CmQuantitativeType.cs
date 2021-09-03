using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Larynx
{
    public enum CmQuantitativeType: byte
    {
        None = 0,
        
        [RadioReportId("nec_m_050518", InstanceName = nameof(LarynxFindingType.Mass))]
        No = 1,
        
        [RadioReportId("nec_m_050519", InstanceName = nameof(LarynxFindingType.Mass))]
        Mild = 2,
        
        [RadioReportId("nec_m_050520", InstanceName = nameof(LarynxFindingType.Mass))]
        Pronounced = 3
    }
}