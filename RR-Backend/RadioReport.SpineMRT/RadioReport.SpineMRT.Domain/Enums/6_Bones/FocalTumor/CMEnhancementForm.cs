using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums
{
    public enum CMEnhancementForm : byte
    {
        None = 0,

        [RadioReportId("spi_m_060544", InstanceName = nameof(BonesFindingType.FocalTumor))]
        Peripheral = 1,

        [RadioReportId("spi_m_060545", InstanceName = nameof(BonesFindingType.FocalTumor))]
        EntireLesion = 2,

        [RadioReportId("spi_m_060546", InstanceName = nameof(BonesFindingType.FocalTumor))]
        Central = 3,

        [RadioReportId("spi_m_060547", InstanceName = nameof(BonesFindingType.FocalTumor))]
        Septa = 4,

        [RadioReportId("spi_m_060548", InstanceName = nameof(BonesFindingType.FocalTumor))]
        InTheNidus = 5
    }
}
