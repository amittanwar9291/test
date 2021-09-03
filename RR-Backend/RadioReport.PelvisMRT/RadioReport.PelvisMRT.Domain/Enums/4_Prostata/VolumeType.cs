using RadioReport.Common.Logic.Attributes;

namespace RadioReport.PelvisMRT.Domain.Enums.Prostata
{
    public enum VolumeType : byte
	{
		None = 0,

		[RadioReportId("pel_m_040212")]
		Inconspicuous = 1,

		[RadioReportId("pel_m_040213")]
		Enlarged = 2

	}
}
