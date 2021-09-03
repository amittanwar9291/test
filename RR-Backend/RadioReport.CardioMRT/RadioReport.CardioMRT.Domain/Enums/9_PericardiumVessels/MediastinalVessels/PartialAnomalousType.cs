using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.PericardiumVessels
{
	public enum PartialAnomalousType : byte
	{
		None = 0,

		[RadioReportId("car_m_090326")]
		OpeningOfRightUpperPulmVein = 1,

		[RadioReportId("car_m_090327")]
		ScimitarSyndrome = 2
	}
}
