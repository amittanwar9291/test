using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum QuantityType : byte
    {
        None = 0,
        [RadioReportId("kne_m_080203", InstanceName = nameof(SoftPartsFindingType.ArticularEffusion))]
        Minor = 1,

        [RadioReportId("kne_m_080204", InstanceName = nameof(SoftPartsFindingType.ArticularEffusion))]
        Major = 2,

        [RadioReportId("kne_m_080205", InstanceName = nameof(SoftPartsFindingType.ArticularEffusion))]
        Extensive = 3
    }
}
