using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineCT.Domain.Enums.Bones
{
    public enum C1ToC2FractureType : byte
    {
        None = 0,

        [RadioReportId("spi_c_0604108", InstanceName = nameof(BonesFindingType.Fracture))]
        SubluxationWithRotation = 1,

        [RadioReportId("spi_c_0604109", InstanceName = nameof(BonesFindingType.Fracture))]
        Displacement = 2
    }
}
