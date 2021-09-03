using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums
{
    public enum LocalizationSagittalType : byte
    {
        None = 0,

        [RadioReportId("spi_m_060375", InstanceName = nameof(BonesFindingType.PosttherapeuticChange))]
        Anterior = 1,

        [RadioReportId("spi_m_060376", InstanceName = nameof(BonesFindingType.PosttherapeuticChange))]
        Posterior = 2
    }
}