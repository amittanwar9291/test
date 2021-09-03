using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.GastrointestinalTract
{
	public enum StomachResectionType : byte
	{
		None = 0,

		[RadioReportId("abd_m_090342", InstanceName = nameof(GastrointestinalTractFindingType.PostoperativeGastricImaging))]
		Partial = 1,

		[RadioReportId("abd_m_090343", InstanceName = nameof(GastrointestinalTractFindingType.PostoperativeGastricImaging))]
		Complete = 2
	}
}