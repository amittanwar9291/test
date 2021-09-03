using RadioReport.Common.Logic.Attributes;

namespace RadioReport.SpineMRT.Domain.Enums.Summary
{
	public enum InterventionType : byte
	{
		None = 0,

		[RadioReportId("spi_m_100203")]
		Periradicular = 1,

		[RadioReportId("spi_m_100204")]
		Epidural = 2,

		[RadioReportId("spi_m_100205")]
		FacetJointInfiltration = 3,

		[RadioReportId("spi_m_100208")]
        SIJInfiltration = 4
	}
}
