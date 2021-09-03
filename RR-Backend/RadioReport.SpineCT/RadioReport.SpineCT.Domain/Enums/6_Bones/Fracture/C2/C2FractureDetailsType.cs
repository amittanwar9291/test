using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.Bones
{
    public enum C2FractureDetailsType : byte
    {
        None = 0,

        [RadioReportId("spi_c_0604104", InstanceName = nameof(BonesFindingType.Fracture))]
        Dens = 1,

        [RadioReportId("spi_c_0604105", InstanceName = nameof(BonesFindingType.Fracture))]
        Vertebra = 2,

        [RadioReportId("spi_c_0604106", InstanceName = nameof(BonesFindingType.Fracture))]
        AxisArc = 3,

        [RadioReportId("spi_c_0604107", InstanceName = nameof(BonesFindingType.Fracture))]
        NoSpec = 4
    }
}
