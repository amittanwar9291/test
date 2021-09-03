using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.Bones
{
    public enum StabilityType : byte
    {
        None = 0,

        [RadioReportId("spi_c_060573", InstanceName = nameof(BonesFindingType.Fracture))]
        Stable = 1,

        [RadioReportId("spi_c_060574", InstanceName = nameof(BonesFindingType.Fracture))]
        Unstable = 2
    }
}
