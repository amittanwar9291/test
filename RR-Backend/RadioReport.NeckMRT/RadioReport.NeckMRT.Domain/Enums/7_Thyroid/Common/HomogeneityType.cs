using RadioReport.Common.Logic.Attributes;
using RadioReport.NeckMRT.Domain.Models;

namespace RadioReport.NeckMRT.Domain.Enums.Thyroid
{
	public enum HomogeneityType : byte
	{
		None = 0,

		[RadioReportId("nec_m_070523", InstanceName = nameof(ThyroidFinding.HomogeneityType), CustomConditionName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation) )]
		[RadioReportId("nec_m_070547", InstanceName = nameof(ThyroidFinding.CmHomogeneityType), CustomConditionName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation) )]
		[RadioReportId("nec_m_070456", InstanceName = nameof(ThyroidFinding.HomogeneityType), CustomConditionName = nameof(ThyroidFindingType.ParathyroidGlandMass) )]
		[RadioReportId("nec_m_070462", InstanceName = nameof(ThyroidFinding.CmHomogeneityType), CustomConditionName = nameof(ThyroidFindingType.ParathyroidGlandMass) )]
		[RadioReportId("nec_m_070474", InstanceName = nameof(ThyroidFinding.HomogeneityType), CustomConditionName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation) )]
		[RadioReportId("nec_m_0704102", InstanceName = nameof(ThyroidFinding.CmHomogeneityType), CustomConditionName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation) )]
		Homogeneous = 1,

		[RadioReportId("nec_m_070524", InstanceName = nameof(ThyroidFinding.HomogeneityType), CustomConditionName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation) )]
		[RadioReportId("nec_m_070548", InstanceName = nameof(ThyroidFinding.CmHomogeneityType), CustomConditionName = nameof(ThyroidFindingType.ThyroidGoiterMassInflammation) )]
		[RadioReportId("nec_m_070457", InstanceName = nameof(ThyroidFinding.HomogeneityType), CustomConditionName = nameof(ThyroidFindingType.ParathyroidGlandMass) )]
		[RadioReportId("nec_m_070463", InstanceName = nameof(ThyroidFinding.CmHomogeneityType), CustomConditionName = nameof(ThyroidFindingType.ParathyroidGlandMass) )]
		[RadioReportId("nec_m_070475", InstanceName = nameof(ThyroidFinding.HomogeneityType), CustomConditionName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation) )]
		[RadioReportId("nec_m_0704103", InstanceName = nameof(ThyroidFinding.CmHomogeneityType), CustomConditionName = nameof(ThyroidFindingType.SalivaryGlandsMassInflammation) )]
		Heterogeneous = 2
	}
}