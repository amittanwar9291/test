using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Rectum
{
    public enum FistulaMorphologyType : byte
    {
        None = 0,

        [RadioReportId("pel_m_0803173", InstanceName = nameof(RectumFindingType.Fistula))]
        SolitaryFistula = 1,
        
        [RadioReportId("pel_m_0803174", InstanceName = nameof(RectumFindingType.Fistula))]
        BranchingFistula = 2,
        
        [RadioReportId("pel_m_0803175", InstanceName = nameof(RectumFindingType.Fistula))]
        MultipleFistulas = 3

    }
}
