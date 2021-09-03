using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.Bones.Bones
{
    public enum ContrastEnhancementQuantitativeType : byte
    {

        None = 0,

        [RadioReportId("spi_c_0605259", InstanceName = nameof(BonesFindingType.MassSpine))]
        No = 1,

        [RadioReportId("spi_c_0605260", InstanceName = nameof(BonesFindingType.MassSpine))]
        Weak = 2,

        [RadioReportId("spi_c_0605261", InstanceName = nameof(BonesFindingType.MassSpine))]
        Significant = 3
    }
}
