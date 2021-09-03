using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Prostata
{
    public enum MarginType : byte
	{
		None = 0,

		[RadioReportId("pel_m_040311")]
		Circumscribed = 1,

		[RadioReportId("pel_m_040312")]
		NonCircumscribed = 2

	}
}
