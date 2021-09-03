using RadioReport.Common.Logic.Attributes;
using RadioReport.SpineCT.Domain.Models;

namespace RadioReport.SpineCT.Domain.Enums.Bones
{
    public enum C0Stability : byte
    {
        None = 0,

        
        [RadioReportId("spi_c_060302", InstanceName = nameof(BonesFinding.FractureStabilityRight))]
        [RadioReportId("spi_c_0604237", InstanceName = nameof(BonesFinding.FractureStabilityLeft))]
        Stable = 1,

        [RadioReportId("spi_c_060303", InstanceName = nameof(BonesFinding.FractureStabilityRight))]
        [RadioReportId("spi_c_0604238", InstanceName = nameof(BonesFinding.FractureStabilityLeft))]
        Unstable = 2,

        [RadioReportId("spi_c_060304", InstanceName = nameof(BonesFinding.FractureStabilityRight))]
        [RadioReportId("spi_c_0604239", InstanceName = nameof(BonesFinding.FractureStabilityLeft))]
        Dissociation = 3,

        [RadioReportId("spi_c_060305", InstanceName = nameof(BonesFinding.FractureStabilityRight))]
        [RadioReportId("spi_c_0604240", InstanceName = nameof(BonesFinding.FractureStabilityLeft))]
        NotFurtherDefined = 4,
    }
}
