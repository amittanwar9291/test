using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum SynoviaType : byte
    {
        None = 0,

        [RadioReportId("kne_m_080218", InstanceName = nameof(SoftPartsFindingType.SynoviaFocal))]
        Intrasynovial = 1,

        [RadioReportId("kne_m_080219", InstanceName = nameof(SoftPartsFindingType.SynoviaFocal))]
        Extrasynovial = 2
    }
}
