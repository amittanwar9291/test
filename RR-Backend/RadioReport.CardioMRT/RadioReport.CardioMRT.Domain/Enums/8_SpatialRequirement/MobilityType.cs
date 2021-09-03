using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.SpatialRequirement
{
	public enum MobilityType : byte
	{
		None = 0,	

		[RadioReportId("car_m_080516")]
		No = 1,

		[RadioReportId("car_m_080517")]
		Mild = 2,

		[RadioReportId("car_m_080518")]
		High = 3

	}
}
