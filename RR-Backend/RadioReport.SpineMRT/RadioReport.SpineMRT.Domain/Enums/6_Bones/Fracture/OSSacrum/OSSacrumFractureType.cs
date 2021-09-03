using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums
{
    public enum OsSacrumFractureType : byte
    {
        None = 0,

        [RadioReportId("spi_m_060326", InstanceName = nameof(BonesFindingType.Fracture))]
        FractureOfTheCaudalSegments = 1,

        [RadioReportId("spi_m_060327", InstanceName = nameof(BonesFindingType.Fracture))]
        FractureOfTheCranialSegments = 2,

        [RadioReportId("spi_m_060328", InstanceName = nameof(BonesFindingType.Fracture))]
        FractureWithInstability = 3,

        [RadioReportId("spi_m_060329", InstanceName = nameof(BonesFindingType.Fracture))]
        NotFurtherSpecified = 4
    }
}