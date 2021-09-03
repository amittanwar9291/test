using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Rectum
{
    public enum StJamesClassificationType : byte
    {
        None = 0,
        
        [RadioReportId("pel_m_080484", InstanceName = nameof(RectumFindingType.Fistula))]
        SimplyIntersphincteric = 1,
        
        [RadioReportId("pel_m_080485", InstanceName = nameof(RectumFindingType.Fistula))]
        IntersphinctericWithAbscess = 2,
        
        [RadioReportId("pel_m_080486", InstanceName = nameof(RectumFindingType.Fistula))]
        Transsphincteric = 3,
        
        [RadioReportId("pel_m_080487", InstanceName = nameof(RectumFindingType.Fistula))]
        TranssphinctericWithAbscess = 4,
        
        [RadioReportId("pel_m_080488", InstanceName = nameof(RectumFindingType.Fistula))]
        Supralevatoric = 5,
        
        [RadioReportId("pel_m_080489", InstanceName = nameof(RectumFindingType.Fistula))]
        Extrasphincteric = 6
    }
}
