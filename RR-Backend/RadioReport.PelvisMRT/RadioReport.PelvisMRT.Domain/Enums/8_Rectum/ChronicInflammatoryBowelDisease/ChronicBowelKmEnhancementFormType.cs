using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Rectum
{
    public enum ChronicBowelKmEnhancementFormType : byte
    {
        None = 0,

        [RadioReportId("pel_m_080284", InstanceName = nameof(RectumFindingType.ChronicInflammatoryBowelDisease))]
        EntireIntestinalWall = 1,
        
        [RadioReportId("pel_m_080285", InstanceName = nameof(RectumFindingType.ChronicInflammatoryBowelDisease))]
        Mucosa = 2
    }
}
