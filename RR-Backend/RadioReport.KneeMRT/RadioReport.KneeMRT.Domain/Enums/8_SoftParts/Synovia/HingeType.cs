using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum HingeType : byte
    {
        None = 0,

        [RadioReportId("kne_m_080215", InstanceName = nameof(SoftPartsFindingType.SynoviaFocal))]
        Intracapsular = 1,

        [RadioReportId("kne_m_080216", InstanceName = nameof(SoftPartsFindingType.SynoviaFocal))]
        Extracapsular = 2
    }
}
