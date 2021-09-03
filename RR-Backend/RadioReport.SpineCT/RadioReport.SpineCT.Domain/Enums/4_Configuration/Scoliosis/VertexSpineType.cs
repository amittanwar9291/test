using RadioReport.Common.Logic.Attributes;
using RadioReport.SpineCT.Domain.Models;

namespace RadioReport.SpineCT.Domain.Enums.Configuration
{
	public enum VertexSpineType : byte
	{
		None = 0,

        [RadioReportId("spi_c_0403203", InstanceName = nameof(ConfigurationFinding.CervicalVertexSpineType), CustomConditionName = nameof(ConfigurationFindingType.Scoliosis))]
        [RadioReportId("spi_c_0404203", InstanceName = nameof(ConfigurationFinding.ThoracicVertexSpineType), CustomConditionName = nameof(ConfigurationFindingType.Scoliosis))]
        [RadioReportId("spi_c_0405203", InstanceName = nameof(ConfigurationFinding.LumbarVertexSpineType), CustomConditionName = nameof(ConfigurationFindingType.Scoliosis))]
        RightConvex = 1,

        [RadioReportId("spi_c_0403204", InstanceName = nameof(ConfigurationFinding.CervicalVertexSpineType), CustomConditionName = nameof(ConfigurationFindingType.Scoliosis))]
        [RadioReportId("spi_c_0404204", InstanceName = nameof(ConfigurationFinding.ThoracicVertexSpineType), CustomConditionName = nameof(ConfigurationFindingType.Scoliosis))]
        [RadioReportId("spi_c_0405204", InstanceName = nameof(ConfigurationFinding.LumbarVertexSpineType), CustomConditionName = nameof(ConfigurationFindingType.Scoliosis))]
        LeftConvex = 2

	}
}
