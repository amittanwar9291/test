using RadioReport.CardioMRT.Domain.Models;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.SpatialRequirement
{
	public enum EnhancementIntensityType : byte
	{
		None = 0,

		[RadioReportId("car_m_080505", InstanceName = nameof(SpatialRequirementFinding.ContrastEnhancementIntensityPerfusionType))]
		[RadioReportId("car_m_080212", InstanceName = nameof(SpatialRequirementFinding.GdEnhancementIntensityEGEType))]
		[RadioReportId("car_m_080313", InstanceName = nameof(SpatialRequirementFinding.GdEnhancementIntensityLGEType))]
		Marked = 1,

		[RadioReportId("car_m_080506", InstanceName = nameof(SpatialRequirementFinding.ContrastEnhancementIntensityPerfusionType))]
		[RadioReportId("car_m_080213", InstanceName = nameof(SpatialRequirementFinding.GdEnhancementIntensityEGEType))]
		[RadioReportId("car_m_080314", InstanceName = nameof(SpatialRequirementFinding.GdEnhancementIntensityLGEType))]
		Mild = 2
	}
}
