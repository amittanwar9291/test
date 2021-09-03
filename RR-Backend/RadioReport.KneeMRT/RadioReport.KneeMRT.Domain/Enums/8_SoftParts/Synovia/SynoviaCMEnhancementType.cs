using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum SynoviaCMEnhancementType : byte
    {
        None = 0,

        [RadioReportId("kne_m_0803249", InstanceName = nameof(SoftPartsFindingType.SynoviaFocal))]
        No = 1,

        [RadioReportId("kne_m_0803250", InstanceName = nameof(SoftPartsFindingType.SynoviaFocal))]
        Weak = 2,

        [RadioReportId("kne_m_080320", InstanceName = nameof(SoftPartsFindingType.SynoviaFocal))]
        Strong = 3
    }
}
