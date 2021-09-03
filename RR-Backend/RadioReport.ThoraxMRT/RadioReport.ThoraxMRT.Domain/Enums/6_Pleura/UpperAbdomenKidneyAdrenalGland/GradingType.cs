using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
	public enum GradingType : byte
	{
		None = 0,

		[RadioReportId("tho_m_0603117", InstanceName = nameof(PleuraFindingType.UpperAbdomenKidneyAdrenalGland))]
		Grade1 = 1,

		[RadioReportId("tho_m_0603118", InstanceName = nameof(PleuraFindingType.UpperAbdomenKidneyAdrenalGland))]
		Grade2 = 2,

		[RadioReportId("tho_m_0603119", InstanceName = nameof(PleuraFindingType.UpperAbdomenKidneyAdrenalGland))]
		Grade3 = 3,

		[RadioReportId("tho_m_0603120", InstanceName = nameof(PleuraFindingType.UpperAbdomenKidneyAdrenalGland))]
		Grade4 = 4
	}
}
