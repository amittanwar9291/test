using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums
{
    public enum C0StabilityType : byte
    {
        None = 0,

        [RadioReportId("spi_m_060302", InstanceName = nameof(BonesFindingType.Fracture))]
        Stable = 1,

        [RadioReportId("spi_m_060303", InstanceName = nameof(BonesFindingType.Fracture))]
        Unstable = 2,

        [RadioReportId("spi_m_060304", InstanceName = nameof(BonesFindingType.Fracture))]
        Dissociation = 3,

        [RadioReportId("spi_m_060305", InstanceName = nameof(BonesFindingType.Fracture))]
        NoSpec = 4
    }
}
