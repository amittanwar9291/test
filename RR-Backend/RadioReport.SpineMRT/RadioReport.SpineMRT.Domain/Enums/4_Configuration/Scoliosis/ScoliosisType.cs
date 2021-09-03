using RadioReport.Common.Logic.Attributes;
using RadioReport.SpineMRT.Domain.Models;

namespace RadioReport.SpineMRT.Domain.Enums.Configuration
{
    public enum ScoliosisType
    {
        None = 0,

        [RadioReportId("spi_m_040229", InstanceName = nameof(ConfigurationFinding.CervicalSpineScoliosisType), CustomConditionName = nameof(ConfigurationFindingType.Scoliosis))]
        [RadioReportId("spi_m_040323", InstanceName = nameof(ConfigurationFinding.ThoracicSpineScoliosisType), CustomConditionName = nameof(ConfigurationFindingType.Scoliosis))]
        [RadioReportId("spi_m_040412", InstanceName = nameof(ConfigurationFinding.LumbarSpineScoliosisType), CustomConditionName = nameof(ConfigurationFindingType.Scoliosis))]
        RightConvex = 1,

        [RadioReportId("spi_m_040230", InstanceName = nameof(ConfigurationFinding.CervicalSpineScoliosisType), CustomConditionName = nameof(ConfigurationFindingType.Scoliosis))]
        [RadioReportId("spi_m_040324", InstanceName = nameof(ConfigurationFinding.ThoracicSpineScoliosisType), CustomConditionName = nameof(ConfigurationFindingType.Scoliosis))]
        [RadioReportId("spi_m_040413", InstanceName = nameof(ConfigurationFinding.LumbarSpineScoliosisType), CustomConditionName = nameof(ConfigurationFindingType.Scoliosis))]
        LeftConvex = 2
    }
}
