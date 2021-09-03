using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Bladder
{
    public enum TumorLocalizationType : byte
    {
        None = 0,

        [RadioReportId("pel_m_090261", InstanceName = nameof(BladderFindingType.PeripheralNerveSheathTumor))]
        Intrapelvic = 1,

        [RadioReportId("pel_m_090262", InstanceName = nameof(BladderFindingType.PeripheralNerveSheathTumor))]
        Extrapelvic = 2
    }
}