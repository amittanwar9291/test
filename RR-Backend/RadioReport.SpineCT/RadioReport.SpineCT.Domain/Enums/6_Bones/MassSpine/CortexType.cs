using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.Bones
{
    public enum CortexType : byte
    {

        None = 0,

        [RadioReportId("spi_c_0604217", InstanceName = nameof(BonesFindingType.MassSpine))]
        Intact = 1,

        [RadioReportId("spi_c_0604218", InstanceName = nameof(BonesFindingType.MassSpine))]
        Thinning = 2,

        [RadioReportId("spi_c_0604219", InstanceName = nameof(BonesFindingType.MassSpine))]
        Destruction = 3,

        [RadioReportId("spi_c_0604220", InstanceName = nameof(BonesFindingType.MassSpine))]
        Neocortex = 4
    }
}
