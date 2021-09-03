using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.GastrointestinalTract
{
	public enum TransitionalSegmentType : byte
	{
		None = 0,

		[RadioReportId("abd_m_090574", InstanceName = nameof(GastrointestinalTractFindingType.MechanicalIleus))]
		NormalIntestinalWall = 1,

		[RadioReportId("abd_m_090575", InstanceName = nameof(GastrointestinalTractFindingType.MechanicalIleus))]
		ThickenedWall = 2
	}
}