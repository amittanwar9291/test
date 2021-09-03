using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Larynx
{
    public enum MarginType: byte
    {
        None = 0,
        
        [RadioReportId("nec_m_050512", InstanceName = nameof(LarynxFindingType.Mass))]
        WellDefined = 1,
        
        [RadioReportId("nec_m_050513", InstanceName = nameof(LarynxFindingType.Mass))]
        IllDefined = 2
    }
}