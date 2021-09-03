using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.GastrointestinalTract
{
	public enum MarginType : byte
	{
		None = 0,

		[RadioReportId("abd_m_090502", InstanceName = nameof(GastrointestinalTractFindingType.GastricMass))]
		[RadioReportId("abd_m_090274", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		Circumscribed = 1,

		[RadioReportId("abd_m_090503", InstanceName = nameof(GastrointestinalTractFindingType.GastricMass))]
		[RadioReportId("abd_m_090275", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		NonCircumscribed = 2,

		[RadioReportId("abd_m_090276", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		Nodular = 3,

		[RadioReportId("abd_m_090277", InstanceName = nameof(GastrointestinalTractFindingType.IntestinalMass))]
		Multinodular = 4
	}
}