using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.PericardiumVessels
{
	public enum DistributionType : byte
	{
		None = 0,

		[RadioReportId("car_m_090437")]
		Lobar = 1,

		[RadioReportId("car_m_090438")]
		Atypical = 2

	}
}
