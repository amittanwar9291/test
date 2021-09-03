using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums
{
    public enum StabilityType : byte
    {
        None = 0,

        [RadioReportId("spi_m_060573", InstanceName = nameof(BonesFindingType.Fracture))]
        Stable = 1,

        [RadioReportId("spi_m_060574", InstanceName = nameof(BonesFindingType.Fracture))]
        Unstable = 2
    }
}
