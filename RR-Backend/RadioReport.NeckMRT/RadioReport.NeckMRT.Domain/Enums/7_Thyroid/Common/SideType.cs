using RadioReport.Common.Logic.Attributes;
using RadioReport.NeckMRT.Domain.Models;

namespace RadioReport.NeckMRT.Domain.Enums.Thyroid
{
	public enum SideType : byte
	{
		None = 0,

		[RadioReportId("nec_m_070302", InstanceName = nameof(ThyroidFinding.SideType), CustomConditionName = nameof(AbnormalitiesNormVariantsThyroidType.Hypoplasia))]
		[RadioReportId("nec_m_070305", InstanceName = nameof(ThyroidFinding.SideType), CustomConditionName = nameof(AbnormalitiesNormVariantsThyroidType.ThyroidHemiagenesis))]
		[RadioReportId("nec_m_070212", InstanceName = nameof(ThyroidFinding.ThyroidectomySideType), CustomConditionName = nameof(ThyroidFindingType.Thyroidectomy))]
		[RadioReportId("nec_m_070507", InstanceName = nameof(ThyroidFinding.SideType), CustomConditionName = nameof(ThyroidFindingType.Thyroidectomy))]
		[RadioReportId("nec_m_070273", InstanceName = nameof(ThyroidFinding.SideType), CustomConditionName = nameof(ThyroidFindingType.ParathyroidGlandMass))]
		Right = 1,

		[RadioReportId("nec_m_070303", InstanceName = nameof(ThyroidFinding.SideType), CustomConditionName = nameof(AbnormalitiesNormVariantsThyroidType.Hypoplasia))]
		[RadioReportId("nec_m_070306", InstanceName = nameof(ThyroidFinding.SideType), CustomConditionName = nameof(AbnormalitiesNormVariantsThyroidType.ThyroidHemiagenesis))]
		[RadioReportId("nec_m_070213", InstanceName = nameof(ThyroidFinding.ThyroidectomySideType), CustomConditionName = nameof(ThyroidFindingType.Thyroidectomy))]
		[RadioReportId("nec_m_070508", InstanceName = nameof(ThyroidFinding.SideType), CustomConditionName = nameof(ThyroidFindingType.Thyroidectomy))]
		[RadioReportId("nec_m_070274", InstanceName = nameof(ThyroidFinding.SideType), CustomConditionName = nameof(ThyroidFindingType.ParathyroidGlandMass))]
		Left = 2
	}
}