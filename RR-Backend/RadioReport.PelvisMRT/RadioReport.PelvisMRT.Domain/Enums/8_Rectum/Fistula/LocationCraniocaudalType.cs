using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Rectum
{
    public enum LocationCraniocaudalType : byte
    {
        None = 0,

        [RadioReportId("pel_m_0803147", InstanceName = nameof(RectumFindingType.Fistula))]
        UpperThird = 1,
        
        [RadioReportId("pel_m_0803148", InstanceName = nameof(RectumFindingType.Fistula))]
        MiddleThird = 2,
        
        [RadioReportId("pel_m_0803149", InstanceName = nameof(RectumFindingType.Fistula))]
        LowerThird = 3,
        
        [RadioReportId("pel_m_0803150", InstanceName = nameof(RectumFindingType.Fistula))]
        AnalChannel = 4
    }
}
