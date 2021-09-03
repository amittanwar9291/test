using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenCT.Domain.Enums.Spleen
{
	public enum DelimitationType : byte
	{
		None = 0,

		[RadioReportId("abd_c_050423", InstanceName = nameof(SpleenFindingType.Mass))]
		Circumscribed = 1,

		[RadioReportId("abd_c_050424", InstanceName = nameof(SpleenFindingType.Mass))]
		NonCircumscribed = 2,

		[RadioReportId("abd_c_050425", InstanceName = nameof(SpleenFindingType.Mass))]
		Nodular = 3,

		[RadioReportId("abd_c_050426", InstanceName = nameof(SpleenFindingType.Mass))]
		Multinodular = 4
	}
}
