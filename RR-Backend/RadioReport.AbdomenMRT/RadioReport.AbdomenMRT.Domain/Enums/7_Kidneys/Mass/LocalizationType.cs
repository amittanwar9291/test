using RadioReport.AbdomenMRT.Domain.Models;
using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.Kidneys
{
	public enum LocalizationType : byte
	{
		None = 0,

		[RadioReportId("abd_m_070324", InstanceName = nameof(KidneysFinding.LocalizationType))]
        [RadioReportId("abd_m_070362", InstanceName = nameof(KidneysFinding.RenalInfarctionLocalizationType))]
        UpperPoleOfTheKidney = 1,

		[RadioReportId("abd_m_070325", InstanceName = nameof(KidneysFinding.LocalizationType))]
        [RadioReportId("abd_m_070363", InstanceName = nameof(KidneysFinding.RenalInfarctionLocalizationType))]
		CranialThird = 2,

		[RadioReportId("abd_m_070326", InstanceName = nameof(KidneysFinding.LocalizationType))]
        [RadioReportId("abd_m_070364", InstanceName = nameof(KidneysFinding.RenalInfarctionLocalizationType))]
		MiddleThird = 3,

		[RadioReportId("abd_m_070327", InstanceName = nameof(KidneysFinding.LocalizationType))]
        [RadioReportId("abd_m_070365", InstanceName = nameof(KidneysFinding.RenalInfarctionLocalizationType))]
		LowerThird = 4,

		[RadioReportId("abd_m_070328", InstanceName = nameof(KidneysFinding.LocalizationType))]
        [RadioReportId("abd_m_070366", InstanceName = nameof(KidneysFinding.RenalInfarctionLocalizationType))]
		LowerPoleOfTheKidney = 5,

		[RadioReportId("abd_m_070329", InstanceName = nameof(KidneysFinding.LocalizationType))]
        [RadioReportId("abd_m_070367", InstanceName = nameof(KidneysFinding.RenalInfarctionLocalizationType))]
		RenalHilus = 6
	}
}