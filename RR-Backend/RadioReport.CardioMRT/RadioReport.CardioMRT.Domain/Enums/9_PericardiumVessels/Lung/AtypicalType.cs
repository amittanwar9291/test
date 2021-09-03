using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.PericardiumVessels
{
	public enum AtypicalType : byte
	{
		None = 0,

		[RadioReportId("car_m_090439")]
		Diffuse = 1,

		[RadioReportId("car_m_090440")]
		Multifocal = 2
	}
}
