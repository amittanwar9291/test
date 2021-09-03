using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.SoftTissues.MassInflammation
{
    public enum TrachealDisplacementType : byte
    {
        None = 0,
        
        [RadioReportId("nec_m_060251", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        ToTheRight = 1,
        
        [RadioReportId("nec_m_060252", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        ToTheLeft = 2,
        
        [RadioReportId("nec_m_060253", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        Anterior = 3,
        
        [RadioReportId("nec_m_060254", InstanceName = nameof(SoftTissuesFindingType.MassInflammation))]
        Posterior = 4,
    }
}
