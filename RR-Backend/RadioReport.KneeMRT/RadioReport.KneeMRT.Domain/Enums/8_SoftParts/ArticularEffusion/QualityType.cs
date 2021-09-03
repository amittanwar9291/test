using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum QualityType : byte
    {
        None = 0,

        [RadioReportId("kne_m_080207", InstanceName = nameof(SoftPartsFindingType.ArticularEffusion))]
        Haemorrhagic = 1,

        [RadioReportId("kne_m_0802200", InstanceName = nameof(SoftPartsFindingType.ArticularEffusion))]
        Empyema = 2
    }
}
