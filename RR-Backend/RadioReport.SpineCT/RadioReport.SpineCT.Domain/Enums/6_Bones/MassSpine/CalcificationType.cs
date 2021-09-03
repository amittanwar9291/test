using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.Bones
{
    public enum CalcificationType : byte
    {
        None = 0,

        [RadioReportId("spi_c_0602211", InstanceName = nameof(BonesFindingType.MassSpine))]
        Areal = 1,

        [RadioReportId("spi_c_0602212", InstanceName = nameof(BonesFindingType.MassSpine))]
        Central = 2,

        [RadioReportId("spi_c_0602213", InstanceName = nameof(BonesFindingType.MassSpine))]
        Dystrophy = 3
    }
}
