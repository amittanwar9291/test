using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.GastrointestinalTract
{
	public enum HeightType : byte
	{
		None = 0,

		[RadioReportId("abd_m_0902132", InstanceName = nameof(GastrointestinalTractFindingType.Appendagitis))]
		[RadioReportId("abd_m_0903149", InstanceName = nameof(GastrointestinalTractFindingType.Hernia))]
		UpperAbdomen = 1,

		[RadioReportId("abd_m_0902133", InstanceName = nameof(GastrointestinalTractFindingType.Appendagitis))]
		[RadioReportId("abd_m_0903150", InstanceName = nameof(GastrointestinalTractFindingType.Hernia))]
		MiddleAbdomen = 2,

		[RadioReportId("abd_m_0902134", InstanceName = nameof(GastrointestinalTractFindingType.Appendagitis))]
		[RadioReportId("abd_m_0903151", InstanceName = nameof(GastrointestinalTractFindingType.Hernia))]
		LowerAbdomen = 3
	}
}