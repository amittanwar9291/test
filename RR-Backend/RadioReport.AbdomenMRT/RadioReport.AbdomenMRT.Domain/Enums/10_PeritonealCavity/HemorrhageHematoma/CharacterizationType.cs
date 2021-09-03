using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.PeritonealCavity
{
	public enum CharacterizationType : byte
	{
		None = 0,

		[RadioReportId("abd_m_100416", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
		Hyperacute = 1,

		[RadioReportId("abd_m_100417", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
		Acute = 2,

		[RadioReportId("abd_m_100418", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
		EarlySubacute = 3,

		[RadioReportId("abd_m_100419", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
		LateSubacute = 4,

		[RadioReportId("abd_m_100420", InstanceName = nameof(PeritonealCavityFindingType.HemorrhageHematoma))]
		Chronic = 5
	}
}