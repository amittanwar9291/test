using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.PericardiumVessels
{
	public enum UnknownType : byte
	{
		None = 0,

		[RadioReportId("car_m_090462")]
		ComplicatedCyst = 1,

		[RadioReportId("car_m_090463")]
		SolidMass = 2
	}
}
