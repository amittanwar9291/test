using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums
{
    public enum NeurofibromatosisType : byte
    {
        None = 0,

        [RadioReportId("spi_m_080423", InstanceName = nameof(SoftTissuesFindingType.IntraduralExtramedullaryMass))]
        Type1 = 1,

        [RadioReportId("spi_m_080424", InstanceName = nameof(SoftTissuesFindingType.IntraduralExtramedullaryMass))]
        Type2 = 2
    }
}