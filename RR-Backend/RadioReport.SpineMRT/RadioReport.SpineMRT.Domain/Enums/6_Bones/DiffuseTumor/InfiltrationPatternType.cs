using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums
{
    public enum InfiltrationPatternType : byte
    {
        None = 0,

        [RadioReportId("spi_m_060494", InstanceName = nameof(BonesFindingType.DiffuseTumor))]
        Focal = 1,

        [RadioReportId("spi_m_060495", InstanceName = nameof(BonesFindingType.DiffuseTumor))]
        Diffuse = 2,

        [RadioReportId("spi_m_060496", InstanceName = nameof(BonesFindingType.DiffuseTumor))]
        SaltAndPepperSign = 3,

        [RadioReportId("spi_m_060497", InstanceName = nameof(BonesFindingType.DiffuseTumor))]
        MultipleLesions = 4
    }
}