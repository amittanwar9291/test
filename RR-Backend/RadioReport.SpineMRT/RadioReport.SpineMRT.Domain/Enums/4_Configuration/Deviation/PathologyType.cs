using RadioReport.Common.Logic.Attributes;
using RadioReport.SpineMRT.Domain.Models;

namespace RadioReport.SpineMRT.Domain.Enums.Configuration
{
    public enum PathologyType : byte
    {
        None = 0,

        [RadioReportId("spi_m_040204", InstanceName = nameof(ConfigurationFinding.CervicalSpinePathologyType), CustomConditionName = nameof(ConfigurationFindingType.Deviation))]
        [RadioReportId("spi_m_040403", InstanceName = nameof(ConfigurationFinding.LumbarSpinePathologyType), CustomConditionName = nameof(ConfigurationFindingType.Deviation))]
        Hyperlordosis = 1,

        [RadioReportId("spi_m_040205", InstanceName = nameof(ConfigurationFinding.CervicalSpinePathologyType), CustomConditionName = nameof(ConfigurationFindingType.Deviation))]
        [RadioReportId("spi_m_040304", InstanceName = nameof(ConfigurationFinding.ThoracicSpinePathologyType), CustomConditionName = nameof(ConfigurationFindingType.Deviation))]
        [RadioReportId("spi_m_040404", InstanceName = nameof(ConfigurationFinding.LumbarSpinePathologyType), CustomConditionName = nameof(ConfigurationFindingType.Deviation))]
        Straightening = 2,

        [RadioReportId("spi_m_040206", InstanceName = nameof(ConfigurationFinding.CervicalSpinePathologyType), CustomConditionName = nameof(ConfigurationFindingType.Deviation))]
        [RadioReportId("spi_m_040405", InstanceName = nameof(ConfigurationFinding.LumbarSpinePathologyType), CustomConditionName = nameof(ConfigurationFindingType.Deviation))]
        Kyphosis = 3,

        [RadioReportId("spi_m_040207", InstanceName = nameof(ConfigurationFinding.CervicalSpinePathologyType), CustomConditionName = nameof(ConfigurationFindingType.Deviation))]
        KinkFormation = 4,

        [RadioReportId("spi_m_040303", InstanceName = nameof(ConfigurationFinding.ThoracicSpinePathologyType), CustomConditionName = nameof(ConfigurationFindingType.Deviation))]
        Lordosis = 5,

        [RadioReportId("spi_m_040305", InstanceName = nameof(ConfigurationFinding.ThoracicSpinePathologyType), CustomConditionName = nameof(ConfigurationFindingType.Deviation))]
        Hyperkyphosis = 6,

        [RadioReportId("spi_m_040306", InstanceName = nameof(ConfigurationFinding.ThoracicSpinePathologyType), CustomConditionName = nameof(ConfigurationFindingType.Deviation))]
        [RadioReportId("spi_m_040406", InstanceName = nameof(ConfigurationFinding.LumbarSpinePathologyType), CustomConditionName = nameof(ConfigurationFindingType.Deviation))]
        Kinking = 7
    }
}
