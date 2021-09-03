using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.GastrointestinalTract
{
	public enum SideType : byte
	{
		None = 0,

		[RadioReportId("abd_m_0902136", InstanceName = nameof(GastrointestinalTractFindingType.Appendagitis))]
		[RadioReportId("abd_m_0903158", InstanceName = nameof(GastrointestinalTractFindingType.Hernia), CustomConditionName = nameof(HerniaLocalizationType.BochdalekHernia))]
		[RadioReportId("abd_m_0903146", InstanceName = nameof(GastrointestinalTractFindingType.Hernia), CustomConditionName = nameof(HerniaLocalizationType.AbdominalWall))]
		[RadioReportId("abd_m_0903158", InstanceName = nameof(GastrointestinalTractFindingType.Hernia), CustomConditionName = nameof(HerniaLocalizationType.FemoralCanal))]
		[RadioReportId("abd_m_0903161", InstanceName = nameof(GastrointestinalTractFindingType.Hernia), CustomConditionName = nameof(HerniaLocalizationType.InguinalCanal))]
		[RadioReportId("abd_m_0903158", InstanceName = nameof(GastrointestinalTractFindingType.Hernia), CustomConditionName = nameof(HerniaLocalizationType.BackMuscles))]
		[RadioReportId("abd_m_0903174", InstanceName = nameof(GastrointestinalTractFindingType.Hernia), CustomConditionName = nameof(HerniaLocalizationType.InternalHernia))]
		Right = 1,

		[RadioReportId("abd_m_0902137", InstanceName = nameof(GastrointestinalTractFindingType.Appendagitis))]
		[RadioReportId("abd_m_0903159", InstanceName = nameof(GastrointestinalTractFindingType.Hernia), CustomConditionName = nameof(HerniaLocalizationType.BochdalekHernia))]
		[RadioReportId("abd_m_0903147", InstanceName = nameof(GastrointestinalTractFindingType.Hernia), CustomConditionName = nameof(HerniaLocalizationType.AbdominalWall))]
		[RadioReportId("abd_m_0903159", InstanceName = nameof(GastrointestinalTractFindingType.Hernia), CustomConditionName = nameof(HerniaLocalizationType.FemoralCanal))]
		[RadioReportId("abd_m_0903162", InstanceName = nameof(GastrointestinalTractFindingType.Hernia), CustomConditionName = nameof(HerniaLocalizationType.InguinalCanal))]
		[RadioReportId("abd_m_0903159", InstanceName = nameof(GastrointestinalTractFindingType.Hernia), CustomConditionName = nameof(HerniaLocalizationType.BackMuscles))]
		[RadioReportId("abd_m_0903175", InstanceName = nameof(GastrointestinalTractFindingType.Hernia), CustomConditionName = nameof(HerniaLocalizationType.InternalHernia))]
		Left = 2
	}
}