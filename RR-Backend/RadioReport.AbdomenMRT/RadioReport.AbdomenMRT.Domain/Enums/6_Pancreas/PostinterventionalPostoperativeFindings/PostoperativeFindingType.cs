using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Pancreas
{
	public enum PostoperativeFindingType : byte
	{
		None = 0,

		[RadioReportId("abd_m_0603105")]
		GastricOutletObstruction = 1,

		[RadioReportId("abd_m_0603106")]
		AnastomoticInsufficiency = 2,

		[RadioReportId("abd_m_0603107")]
		PancreaticFistula = 3,

		[RadioReportId("abd_m_0603108")]
		Pancreatitis = 4,

		[RadioReportId("abd_m_0603109")]
        BiliaryStricture = 5,

		[RadioReportId("abd_m_0603110")]
		SignsOfInfection = 6,

		[RadioReportId("abd_m_0603111")]
		Abscess = 7,

		[RadioReportId("abd_m_0603112")]
		Hemorrhage = 8,

		[RadioReportId("abd_m_0603113")]
		HepaticInfarction = 9,

		[RadioReportId("abd_m_0603114")]
		PortomesentericThrombosis = 10,

		[RadioReportId("abd_m_0603115")]
		Stent = 11
	}
}
