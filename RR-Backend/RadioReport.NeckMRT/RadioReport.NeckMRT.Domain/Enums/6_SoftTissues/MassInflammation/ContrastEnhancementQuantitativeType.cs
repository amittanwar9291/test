using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.SoftTissues.MassInflammation
{
    public enum ContrastEnhancementQuantitativeType : byte
    {
        None = 0, 
        
        [RadioReportId("nec_m_060352", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        No = 1,
        
        [RadioReportId("nec_m_060353", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        Weak = 2,
        
        [RadioReportId("nec_m_060354", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        Significant = 3
    }
}
