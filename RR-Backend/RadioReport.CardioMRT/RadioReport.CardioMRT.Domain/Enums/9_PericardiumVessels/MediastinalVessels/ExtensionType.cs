using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.PericardiumVessels
{
	public enum ExtensionType : byte
	{
		None = 0,

		[RadioReportId("car_m_090306")]
		Elongation = 1,

		[RadioReportId("car_m_090307")]
		Aneurysm = 2
	}
}
