using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.GastrointestinalTract
{
	public enum AbdominalWallHerniaType : byte
	{
		None = 0,

		[RadioReportId("abd_m_0903153", InstanceName = nameof(GastrointestinalTractFindingType.Hernia))]
		MedianAbdominalWallHernia = 1,

		[RadioReportId("abd_m_0903156", InstanceName = nameof(GastrointestinalTractFindingType.Hernia))]
		LateralAbdominalWallHernia = 2,

	}
}