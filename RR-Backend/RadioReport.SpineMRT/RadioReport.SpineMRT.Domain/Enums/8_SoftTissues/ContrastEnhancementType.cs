using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums.SoftTissues
{
    public enum ContrastEnhancementType : byte
    {
        None = 0,

        [RadioReportId("spi_m_080502", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        [RadioReportId("spi_m_080502", InstanceName = nameof(SoftTissuesFindingType.IntraduralExtramedullaryMass))]
        Powerful = 1,

        [RadioReportId("spi_m_080503", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        [RadioReportId("spi_m_080503", InstanceName = nameof(SoftTissuesFindingType.IntraduralExtramedullaryMass))]
        Weak = 2,

        [RadioReportId("spi_m_080504", InstanceName = nameof(SoftTissuesFindingType.ParaspinalMass))]
        [RadioReportId("spi_m_080504", InstanceName = nameof(SoftTissuesFindingType.IntraduralExtramedullaryMass))]
        No = 3
    }
}
