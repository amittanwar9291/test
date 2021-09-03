using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums.Summary
{
	public enum ConsultationType : byte
	{
		None = 0,

		[RadioReportId("spi_m_100109")]
		Neurology = 1,

		[RadioReportId("spi_m_100110")]
		Neurosurgery = 2,

		[RadioReportId("spi_m_100111")]
        OrthopaedicsOrTraumatology = 3,

		[RadioReportId("spi_m_100112")]
		PainTherapy = 4
	}
}
