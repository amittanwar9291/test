using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum GradingType : byte
	{
		None = 0,

		[RadioReportId("tho_c_0703144", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenKidneyAdrenalGland))]
		Grade1 = 1,

		[RadioReportId("tho_c_0703145", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenKidneyAdrenalGland))]
		Grade2 = 2,

		[RadioReportId("tho_c_0703146", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenKidneyAdrenalGland))]
		Grade3 = 3,

		[RadioReportId("tho_c_0703147", InstanceName = nameof(SoftPartsFindingType.UpperAbdomenKidneyAdrenalGland))]
		Grade4 = 4
	}
}
