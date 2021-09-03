using RadioReport.Common.Logic.Attributes;
using RadioReport.SpineCT.Domain.Models;

namespace RadioReport.SpineCT.Domain.Enums.Bones
{
    public enum HomogeneityType : byte
    {
        None = 0,

        [RadioReportId("spi_c_0604214", InstanceName = nameof(BonesFinding.HomogeneityType))]
        [RadioReportId("spi_c_0605262", InstanceName = nameof(BonesFinding.SignificantType))]
        Homogeneous = 1,

        [RadioReportId("spi_c_0604215", InstanceName = nameof(BonesFinding.HomogeneityType))]
        [RadioReportId("spi_c_0605263", InstanceName = nameof(BonesFinding.SignificantType))]
        Heterogeneous = 2,
    }
}
