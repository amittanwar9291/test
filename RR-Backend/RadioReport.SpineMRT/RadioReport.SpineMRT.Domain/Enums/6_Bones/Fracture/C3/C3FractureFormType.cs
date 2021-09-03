using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums
{
    public enum C3FractureFormType : byte
    {
        None = 0,

        [RadioReportId("spi_m_060505", InstanceName = nameof(BonesFindingType.Fracture))]
        A0 = 1,

        [RadioReportId("spi_m_060506", InstanceName = nameof(BonesFindingType.Fracture))]
        A1 = 2,

        [RadioReportId("spi_m_060507", InstanceName = nameof(BonesFindingType.Fracture))]
        A2 = 3,

        [RadioReportId("spi_m_060508", InstanceName = nameof(BonesFindingType.Fracture))]
        A3 = 4,

        [RadioReportId("spi_m_060509", InstanceName = nameof(BonesFindingType.Fracture))]
        A4 = 5,

        [RadioReportId("spi_m_060511", InstanceName = nameof(BonesFindingType.Fracture))]
        B1 = 6,

        [RadioReportId("spi_m_060512", InstanceName = nameof(BonesFindingType.Fracture))]
        B2 = 7,

        [RadioReportId("spi_m_060513", InstanceName = nameof(BonesFindingType.Fracture))]
        B3 = 8,

        [RadioReportId("spi_m_060515", InstanceName = nameof(BonesFindingType.Fracture))]
        WedgeFracture = 9,

        [RadioReportId("spi_m_060516", InstanceName = nameof(BonesFindingType.Fracture))]
        BiconcaveFracture = 10,

        [RadioReportId("spi_m_060517", InstanceName = nameof(BonesFindingType.Fracture))]
        CrushFracture = 11

    }
}