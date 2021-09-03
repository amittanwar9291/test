using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.Bones
{
    public enum BonesDensityType : byte
    {
        None = 0,

        [RadioReportId("spi_c_060580", InstanceName = nameof(BonesFindingType.Fracture))]
        Type1 = 1,

        [RadioReportId("spi_c_060568", InstanceName = nameof(BonesFindingType.Fracture))]
        Type2 = 2,

        [RadioReportId("spi_c_060569", InstanceName = nameof(BonesFindingType.Fracture))]
        Type3 = 3,
    }
}
