using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.SoftTissues.Cysts
{
    public enum CharacterizationCystType : byte
    {
        None = 0,
        
        [RadioReportId("nec_m_060203", InstanceName = nameof(SoftTissuesFindingType.Cysts))]
        MedianNeckCyst = 1,
        
        [RadioReportId("nec_m_060204", InstanceName = nameof(SoftTissuesFindingType.Cysts))]
        LateralNeckCyst = 2,
        
        [RadioReportId("nec_m_060205", InstanceName = nameof(SoftTissuesFindingType.Cysts))]
        TornwaldtCyst = 3,
    }
}
