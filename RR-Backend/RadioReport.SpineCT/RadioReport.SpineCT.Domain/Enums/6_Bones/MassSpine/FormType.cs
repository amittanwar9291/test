using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.Bones
{
    public enum FormType : byte
    {
        None = 0,

        [RadioReportId("spi_c_0604222", InstanceName = nameof(BonesFindingType.MassSpine))]
        Round,

        [RadioReportId("spi_c_0604223", InstanceName = nameof(BonesFindingType.MassSpine))]
        Oval,

        [RadioReportId("spi_c_0604224", InstanceName = nameof(BonesFindingType.MassSpine))]
        Irregular
    }
}
