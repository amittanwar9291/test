using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums
{
    public enum DensityType : byte
    {
        None = 0,

        [RadioReportId("spi_m_060580", InstanceName = nameof(BonesFindingType.Fracture))]
        Type1 = 1,

        [RadioReportId("spi_m_060568", InstanceName = nameof(BonesFindingType.Fracture))]
        Type2 = 2,

        [RadioReportId("spi_m_060569", InstanceName = nameof(BonesFindingType.Fracture))]
        Type3 = 3
    }
}
