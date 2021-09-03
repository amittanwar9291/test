using RadioReport.Common.Logic.Attributes;
using RadioReport.SpineCT.Domain.Models;

namespace RadioReport.SpineCT.Domain.Enums.Configuration
{
    public enum PathologyType : byte
    {
        None = 0,

        [RadioReportId("spi_c_040204", InstanceName = nameof(ConfigurationFinding.CervicalSpinePathologyType), CustomConditionName = nameof(ConfigurationFindingType.CurvatureDisorders))]
        [RadioReportId("spi_c_040403", InstanceName = nameof(ConfigurationFinding.LumbarSpinePathologyType), CustomConditionName = nameof(ConfigurationFindingType.CurvatureDisorders))]
        Hyperlordosis = 1,

        [RadioReportId("spi_c_040205", InstanceName = nameof(ConfigurationFinding.CervicalSpinePathologyType), CustomConditionName = nameof(ConfigurationFindingType.CurvatureDisorders))]
        [RadioReportId("spi_c_040304", InstanceName = nameof(ConfigurationFinding.ThoracicSpinePathologyType), CustomConditionName = nameof(ConfigurationFindingType.CurvatureDisorders))]
        [RadioReportId("spi_c_040404", InstanceName = nameof(ConfigurationFinding.LumbarSpinePathologyType), CustomConditionName = nameof(ConfigurationFindingType.CurvatureDisorders))]
        Straightening = 2,

        [RadioReportId("spi_c_040206", InstanceName = nameof(ConfigurationFinding.CervicalSpinePathologyType), CustomConditionName = nameof(ConfigurationFindingType.CurvatureDisorders))]
        [RadioReportId("spi_c_040405", InstanceName = nameof(ConfigurationFinding.LumbarSpinePathologyType), CustomConditionName = nameof(ConfigurationFindingType.CurvatureDisorders))]
        Kyphosis = 3,

        [RadioReportId("spi_c_040207", InstanceName = nameof(ConfigurationFinding.CervicalSpinePathologyType), CustomConditionName = nameof(ConfigurationFindingType.CurvatureDisorders))]
        [RadioReportId("spi_c_040306", InstanceName = nameof(ConfigurationFinding.ThoracicSpinePathologyType), CustomConditionName = nameof(ConfigurationFindingType.CurvatureDisorders))]
        [RadioReportId("spi_c_040406", InstanceName = nameof(ConfigurationFinding.LumbarSpinePathologyType), CustomConditionName = nameof(ConfigurationFindingType.CurvatureDisorders))]
        Kinking = 4,

        [RadioReportId("spi_c_040303", InstanceName = nameof(ConfigurationFinding.ThoracicSpinePathologyType), CustomConditionName = nameof(ConfigurationFindingType.CurvatureDisorders))]
        Lordosis = 5,

        [RadioReportId("spi_c_040305", InstanceName = nameof(ConfigurationFinding.ThoracicSpinePathologyType), CustomConditionName = nameof(ConfigurationFindingType.CurvatureDisorders))]
        Hyperkyphosis = 6
    }
}
