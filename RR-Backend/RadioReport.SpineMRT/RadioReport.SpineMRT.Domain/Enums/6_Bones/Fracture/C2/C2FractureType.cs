using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums
{
    public enum C2FractureType : byte
    {
        None = 0,

        [RadioReportId("spi_m_0604104", InstanceName = nameof(BonesFindingType.Fracture))]
        Dense = 1,

        [RadioReportId("spi_m_0604105", InstanceName = nameof(BonesFindingType.Fracture))]
        Vertebra = 2,

        [RadioReportId("spi_m_0604106", InstanceName = nameof(BonesFindingType.Fracture))]
        AxisArc = 3,

        [RadioReportId("spi_m_0604107", InstanceName = nameof(BonesFindingType.Fracture))]
        NoSpec = 4
    }
}
