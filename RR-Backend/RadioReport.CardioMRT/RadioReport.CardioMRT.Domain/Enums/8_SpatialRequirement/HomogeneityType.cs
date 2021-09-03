using RadioReport.CardioMRT.Domain.Models;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.SpatialRequirement
{
	public enum HomogeneityType : byte
	{
		None = 0,

		[RadioReportId("car_m_080508", InstanceName = nameof(SpatialRequirementFinding.ContrastEnhancementQualityPerfusionType))]
		[RadioReportId("car_m_080223", InstanceName = nameof(SpatialRequirementFinding.GdEnhancementQualityEGEType))]
		[RadioReportId("car_m_080316", InstanceName = nameof(SpatialRequirementFinding.GdEnhancementQualityLGEType))]
		[RadioReportId("car_m_080403", InstanceName = nameof(SpatialRequirementFinding.HomogeneityType))]
		Homogeneous = 1,


		[RadioReportId("car_m_080509", InstanceName = nameof(SpatialRequirementFinding.ContrastEnhancementQualityPerfusionType))]
		[RadioReportId("car_m_080224", InstanceName = nameof(SpatialRequirementFinding.GdEnhancementQualityEGEType))]
		[RadioReportId("car_m_080317", InstanceName = nameof(SpatialRequirementFinding.GdEnhancementQualityLGEType))]
		[RadioReportId("car_m_080404", InstanceName = nameof(SpatialRequirementFinding.HomogeneityType))]
		Inhomogeneous = 2
	}
}
