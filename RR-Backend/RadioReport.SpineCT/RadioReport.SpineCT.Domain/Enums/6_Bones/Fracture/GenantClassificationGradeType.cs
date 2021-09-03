using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.Bones
{
    public enum GenantClassificationGradeType : byte
    {
        None = 0,

        [RadioReportId("spi_c_060434", InstanceName = nameof(BonesFindingType.Fracture))]
        Grade1 = 1,

        [RadioReportId("spi_c_060435", InstanceName = nameof(BonesFindingType.Fracture))]
        Grade2 = 2,

        [RadioReportId("spi_c_060436", InstanceName = nameof(BonesFindingType.Fracture))]
        Grade3 = 3
    }
}
