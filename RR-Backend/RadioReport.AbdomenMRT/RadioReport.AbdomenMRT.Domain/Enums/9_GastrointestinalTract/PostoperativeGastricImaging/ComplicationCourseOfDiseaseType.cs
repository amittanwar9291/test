using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.GastrointestinalTract
{
	public enum ComplicationCourseOfDiseaseType : byte
	{
		None = 0,

		[RadioReportId("abd_m_090233", InstanceName = nameof(GastrointestinalTractFindingType.PostoperativeGastricImaging))]
		AnastomoticInsufficiency = 1,

		[RadioReportId("abd_m_090234", InstanceName = nameof(GastrointestinalTractFindingType.PostoperativeGastricImaging))]
		ExtraintestinalFluidCollection = 2,

		[RadioReportId("abd_m_090235", InstanceName = nameof(GastrointestinalTractFindingType.PostoperativeGastricImaging))]
		FluidCollection = 3,

		[RadioReportId("abd_m_090236", InstanceName = nameof(GastrointestinalTractFindingType.PostoperativeGastricImaging))]
		Hematoma = 4,

		[RadioReportId("abd_m_090237", InstanceName = nameof(GastrointestinalTractFindingType.PostoperativeGastricImaging))]
		StatusPost = 5
	}
}