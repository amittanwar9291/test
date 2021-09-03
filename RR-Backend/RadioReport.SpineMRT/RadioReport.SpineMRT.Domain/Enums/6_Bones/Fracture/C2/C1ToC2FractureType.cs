using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums
{
    public enum C1ToC2FractureType : byte
    {
        None = 0,

        [RadioReportId("spi_m_0604108", InstanceName = nameof(BonesFindingType.Fracture))]
        SubluxationWithRotation = 1,

        [RadioReportId("spi_m_0604109", InstanceName = nameof(BonesFindingType.Fracture))]
        Displacement = 2
    }
}
