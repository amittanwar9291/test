using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.Bones
{
    public enum GenantFractureType : byte
    {
        None = 0,

        [RadioReportId("spi_c_060515", InstanceName = nameof(BonesFindingType.Fracture))]
        WedgeFracture = 1,

        [RadioReportId("spi_c_060516", InstanceName = nameof(BonesFindingType.Fracture))]
        BiconcaveFracture = 2,

        [RadioReportId("spi_c_060517", InstanceName = nameof(BonesFindingType.Fracture))]
        CrushFracture = 3
    }
}
