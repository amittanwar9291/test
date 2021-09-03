using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.Larynx
{
    public enum FractureOrientationType: byte
    {
        None = 0,
        
        [RadioReportId("nec_m_050344", InstanceName = nameof(LarynxFindingType.Trauma))]
        Horizontal = 1,
        
        [RadioReportId("nec_m_050345", InstanceName = nameof(LarynxFindingType.Trauma))]
        Vertical = 2,
        
        [RadioReportId("nec_m_050346", InstanceName = nameof(LarynxFindingType.Trauma))]
        Oblique = 3
    }
}