using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.Bones
{
    public enum GehweilerType : byte
    {
        None = 0,

        [RadioReportId("spi_c_060307", InstanceName = nameof(BonesFindingType.Fracture))]
        Type1 = 1,

        [RadioReportId("spi_c_060308", InstanceName = nameof(BonesFindingType.Fracture))]
        Type2 = 2,

        [RadioReportId("spi_c_060309", InstanceName = nameof(BonesFindingType.Fracture))]
        Type3a = 3,

        [RadioReportId("spi_c_060310", InstanceName = nameof(BonesFindingType.Fracture))]
        Type3b = 4,

        [RadioReportId("spi_c_060311", InstanceName = nameof(BonesFindingType.Fracture))]
        Type4 = 5,

        [RadioReportId("spi_c_060312", InstanceName = nameof(BonesFindingType.Fracture))]
        Type5 = 6,

        [RadioReportId("spi_c_060313", InstanceName = nameof(BonesFindingType.Fracture))]
        NoSpec = 7
    }
}
