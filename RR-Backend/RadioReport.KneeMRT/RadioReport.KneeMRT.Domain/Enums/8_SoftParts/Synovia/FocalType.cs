using RadioReport.Common.Logic.Attributes;

namespace RadioReport.KneeMRT.Domain.Enums
{
    public enum FocalType : byte
    {
        None = 0,

        [RadioReportId("kne_m_080504", InstanceName = nameof(SoftPartsFindingType.SynoviaFocal))]
        HoffaFatBody = 1,

        [RadioReportId("kne_m_080505", InstanceName = nameof(SoftPartsFindingType.SynoviaFocal))]
        SuprapatellarRecess = 2
    }
}
