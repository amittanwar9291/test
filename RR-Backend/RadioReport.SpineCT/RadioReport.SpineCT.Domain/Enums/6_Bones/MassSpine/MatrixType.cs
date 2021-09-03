using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.Bones
{
    public enum MatrixType : byte
    {
        None = 0,
        
        [RadioReportId("spi_c_0605242", InstanceName = nameof(BonesFindingType.MassSpine))]
        Osseous = 1,
        
        [RadioReportId("spi_c_0605243", InstanceName = nameof(BonesFindingType.MassSpine))]
        Chondroid = 2
    }
}
