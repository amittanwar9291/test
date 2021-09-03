using RadioReport.CardioMRT.Domain.Models;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.SpatialRequirement
{
	public enum EnhancementType : byte
	{
		None = 0,

		[RadioReportId("car_m_080502", InstanceName = nameof(SpatialRequirementFinding.ContrastEnhancementPerfusionType))]
		[RadioReportId("car_m_080209", InstanceName = nameof(SpatialRequirementFinding.GdEnhancementEGEType))]
		[RadioReportId("car_m_080310", InstanceName = nameof(SpatialRequirementFinding.GdEnhancementLGEType))]
		Yes = 1,

		[RadioReportId("car_m_080503", InstanceName = nameof(SpatialRequirementFinding.ContrastEnhancementPerfusionType))]
		[RadioReportId("car_m_080210", InstanceName = nameof(SpatialRequirementFinding.GdEnhancementEGEType))]
		[RadioReportId("car_m_080311", InstanceName = nameof(SpatialRequirementFinding.GdEnhancementLGEType))]
		No = 2
	}
}
