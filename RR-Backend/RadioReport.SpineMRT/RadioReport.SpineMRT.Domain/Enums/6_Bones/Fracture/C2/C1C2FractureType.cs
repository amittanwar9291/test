using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums
{
    public enum C1C2FractureType : byte
    {
        None = 0,

        [RadioReportId("spi_m_060315", InstanceName = nameof(BonesFindingType.Fracture))]
        C2 = 1,

        [RadioReportId("spi_m_060317", InstanceName = nameof(BonesFindingType.Fracture))]
        C1C2 = 2
    }
}