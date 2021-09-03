using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Rectum
{
    public enum ActivityType : byte
    {
        None = 0,

        [RadioReportId("pel_m_080390", InstanceName = nameof(RectumFindingType.ChronicInflammatoryBowelDisease))]
        ActiveInflammable = 1,

        [RadioReportId("pel_m_080391", InstanceName = nameof(RectumFindingType.ChronicInflammatoryBowelDisease))]
        ChronicFibrotic = 2

    }
}
