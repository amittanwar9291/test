using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.PericardiumVessels
{
	public enum StenosisType : byte
	{
		None = 0,

		[RadioReportId("car_m_090413")]
		AorticCoarctationStenosis = 1,

		[RadioReportId("car_m_090414")]
		Supravalvular = 2
	}
}
