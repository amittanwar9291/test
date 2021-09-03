using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums
{
    public enum C3FractureType : byte
    {
        None = 0,

        [RadioReportId("spi_m_060320", InstanceName = nameof(BonesFindingType.Fracture))]
        A0Classification = 1,

        [RadioReportId("spi_m_060321", InstanceName = nameof(BonesFindingType.Fracture))]
        GenantClassification = 2,

        [RadioReportId("spi_m_060322", InstanceName = nameof(BonesFindingType.Fracture))]
        NoSpec = 3
    }
}
