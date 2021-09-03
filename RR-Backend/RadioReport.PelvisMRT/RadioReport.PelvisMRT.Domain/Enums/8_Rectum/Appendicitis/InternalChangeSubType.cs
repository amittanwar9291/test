using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Rectum
{
    public enum InternalChangeSubType : byte
    {
        None = 0,
        
        [RadioReportId("pel_m_0802102", InstanceName = nameof(RectumFindingType.Appendicitis))]
        Central = 1,
        
        [RadioReportId("pel_m_0802128", InstanceName = nameof(RectumFindingType.Appendicitis))]
        Peripheral = 2,
        
        [RadioReportId("pel_m_0802103", InstanceName = nameof(RectumFindingType.Appendicitis))]
        Mural = 3
    }
}
