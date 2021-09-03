using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Rectum
{
    public enum PatternsOfInflammationType : byte
    {
        None = 0,

        [RadioReportId("pel_m_080276", InstanceName = nameof(RectumFindingType.ChronicInflammatoryBowelDisease))]
        Discontinued = 1,
        
        [RadioReportId("pel_m_080277", InstanceName = nameof(RectumFindingType.ChronicInflammatoryBowelDisease))]
        Continued = 2
    }
}
