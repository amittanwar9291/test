using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.SoftTissues.MassInflammation
{
    public enum CystType : byte
    {
        None = 0,
        
        [RadioReportId("nec_m_060235", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        Simple = 1,
        
        [RadioReportId("nec_m_060236", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        Complex = 2
    }
}
