using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.Bones
{
    public enum AdjacentSclerosisType : byte
    {
        None = 0,

        [RadioReportId("spi_c_0604227", InstanceName = nameof(BonesFindingType.MassSpine))]
        Narrow = 1,

        [RadioReportId("spi_c_0604228", InstanceName = nameof(BonesFindingType.MassSpine))]
        Wide = 2
    }
}
