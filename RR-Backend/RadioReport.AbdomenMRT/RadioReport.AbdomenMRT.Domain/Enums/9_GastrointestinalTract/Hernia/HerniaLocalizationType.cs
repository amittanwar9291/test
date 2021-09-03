using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.GastrointestinalTract
{
	public enum HerniaLocalizationType : byte
	{
		None = 0,

		[RadioReportId("abd_m_0902151", InstanceName = nameof(GastrointestinalTractFindingType.Hernia))]
		BochdalekHernia = 1,

		[RadioReportId("abd_m_0902152", InstanceName = nameof(GastrointestinalTractFindingType.Hernia))]
		MorgagniHernia = 2,

		[RadioReportId("abd_m_0902153", InstanceName = nameof(GastrointestinalTractFindingType.Hernia))]
		AbdominalWall = 3,

		[RadioReportId("abd_m_0902154", InstanceName = nameof(GastrointestinalTractFindingType.Hernia))]
		FemoralCanal = 4,

		[RadioReportId("abd_m_0902155", InstanceName = nameof(GastrointestinalTractFindingType.Hernia))]
		InguinalCanal = 5,

		[RadioReportId("abd_m_0902156", InstanceName = nameof(GastrointestinalTractFindingType.Hernia))]
		BackMuscles = 6,

		[RadioReportId("abd_m_0902157", InstanceName = nameof(GastrointestinalTractFindingType.Hernia))]
		HiatalHernia = 7,

		[RadioReportId("abd_m_0902158", InstanceName = nameof(GastrointestinalTractFindingType.Hernia))]
		InternalHernia = 8
	}
}