using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums
{
    public enum RotationOrTranslationType : byte
    {
        None = 0,

        [RadioReportId("spi_m_060401", InstanceName = nameof(BonesFindingType.Fracture))]
        Rotation = 1,

        [RadioReportId("spi_m_060405", InstanceName = nameof(BonesFindingType.Fracture))]
        Translation = 2
    }
}
