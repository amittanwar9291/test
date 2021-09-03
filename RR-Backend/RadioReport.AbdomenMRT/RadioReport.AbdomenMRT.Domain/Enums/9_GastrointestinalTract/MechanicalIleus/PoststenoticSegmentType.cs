using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.GastrointestinalTract
{
	public enum PoststenoticSegmentType : byte
	{
		None = 0,

		[RadioReportId("abd_m_090571", InstanceName = nameof(GastrointestinalTractFindingType.MechanicalIleus))]
		NormalCaliber = 1,

		[RadioReportId("abd_m_090572", InstanceName = nameof(GastrointestinalTractFindingType.MechanicalIleus))]
		Collapsed = 2
	}
}