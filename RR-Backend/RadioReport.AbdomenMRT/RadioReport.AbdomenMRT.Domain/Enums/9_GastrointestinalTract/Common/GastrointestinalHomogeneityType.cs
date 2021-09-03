using RadioReport.AbdomenMRT.Domain.Models;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.GastrointestinalTract
{
	public enum GastrointestinalHomogeneityType : byte
	{
		None = 0,

		[RadioReportId("abd_m_090505", InstanceName = nameof(GastrointestinalTractFinding.HomogeneityType), CustomConditionName = nameof(GastrointestinalTractFindingType.GastricMass))]
		[RadioReportId("abd_m_090279", InstanceName = nameof(GastrointestinalTractFinding.HomogeneityType), CustomConditionName = nameof(GastrointestinalTractFindingType.IntestinalMass))]

		[RadioReportId("abd_m_090516", InstanceName = nameof(GastrointestinalTractFinding.CmEnhancementHomogeneityType), CustomConditionName = nameof(GastrointestinalTractFindingType.GastricMass))]
		[RadioReportId("abd_m_090264", InstanceName = nameof(GastrointestinalTractFinding.CmEnhancementHomogeneityType), CustomConditionName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		[RadioReportId("abd_m_0905103", InstanceName = nameof(GastrointestinalTractFinding.CmEnhancementHomogeneityType), CustomConditionName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		Homogeneous = 1,

		[RadioReportId("abd_m_090506", InstanceName = nameof(GastrointestinalTractFinding.HomogeneityType),
			CustomConditionName = nameof(GastrointestinalTractFindingType.GastricMass))]
		[RadioReportId("abd_m_090280", InstanceName = nameof(GastrointestinalTractFinding.HomogeneityType),
			CustomConditionName = nameof(GastrointestinalTractFindingType.IntestinalMass))]

		[RadioReportId("abd_m_090517", InstanceName = nameof(GastrointestinalTractFinding.CmEnhancementHomogeneityType), CustomConditionName = nameof(GastrointestinalTractFindingType.GastricMass))]
		[RadioReportId("abd_m_090265", InstanceName = nameof(GastrointestinalTractFinding.CmEnhancementHomogeneityType), CustomConditionName = nameof(GastrointestinalTractFindingType.SegmentalBowelFindings))]
		[RadioReportId("abd_m_0905104", InstanceName = nameof(GastrointestinalTractFinding.CmEnhancementHomogeneityType), CustomConditionName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		Heterogeneous = 2
	}
}