using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums
{
    public enum OsCoccygisFractureType : byte
    {
        None = 0,
        
        [RadioReportId("spi_m_0603202", InstanceName = nameof(BonesFindingType.Fracture))]
        CompressionInjuryOsCoccygis = 1,

        [RadioReportId("spi_m_0603203", InstanceName = nameof(BonesFindingType.Fracture))]
        NotFurtherSpecified = 2
    }
}
