using RadioReport.Common.Logic.Attributes;

namespace RadioReport.CardioMRT.Domain.Enums.PericardiumVessels
{
	public enum SuperiorVariantsType : byte
	{
		None = 0,

		[RadioReportId("car_m_090431")]
		PersistentVCSLeft = 1,

		[RadioReportId("car_m_090432")]
		MirrorinvertedVCS = 2,

		[RadioReportId("car_m_090433")]
		RetroaortalVBrachioCephalica = 3
	}
}
