using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.Bones
{
    public enum AxisArcType : byte
    {
        None = 0,

        [RadioReportId("spi_c_060575", InstanceName = nameof(BonesFindingType.Fracture))]
        Type1 = 1,

        [RadioReportId("spi_c_060576", InstanceName = nameof(BonesFindingType.Fracture))]
        Type2 = 2,

        [RadioReportId("spi_c_060577", InstanceName = nameof(BonesFindingType.Fracture))]
        Type2a = 3,

        [RadioReportId("spi_c_060578", InstanceName = nameof(BonesFindingType.Fracture))]
        Type3 = 4
    }
}
