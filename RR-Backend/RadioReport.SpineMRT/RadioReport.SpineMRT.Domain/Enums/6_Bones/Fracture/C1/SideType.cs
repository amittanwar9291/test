using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums
{
    public enum SideType : byte
    {
        None = 0,

        [RadioReportId("spi_m_060411", InstanceName = nameof(BonesFindingType.Fracture))]
        Right = 1,

        [RadioReportId("spi_m_060413", InstanceName = nameof(BonesFindingType.Fracture))]
        Left = 2
    }
}
