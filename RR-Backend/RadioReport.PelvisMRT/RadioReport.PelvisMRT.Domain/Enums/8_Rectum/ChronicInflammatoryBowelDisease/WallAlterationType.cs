using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Rectum
{
    public enum WallAlterationType : byte
    {
        None = 0,

        [RadioReportId("pel_m_080454", InstanceName = nameof(RectumFindingType.ChronicInflammatoryBowelDisease))]
        WhiteBowel = 1,
        
        [RadioReportId("pel_m_080455", InstanceName = nameof(RectumFindingType.ChronicInflammatoryBowelDisease))]
        GrayBowel = 2,
        
        [RadioReportId("pel_m_080456", InstanceName = nameof(RectumFindingType.ChronicInflammatoryBowelDisease))]
        WaterHaloSign = 3,
        
        [RadioReportId("pel_m_080457", InstanceName = nameof(RectumFindingType.ChronicInflammatoryBowelDisease))]
        FatHaloSign = 4,
        
        [RadioReportId("pel_m_080458", InstanceName = nameof(RectumFindingType.ChronicInflammatoryBowelDisease))]
        BlackBowel = 5
    }
}
