using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AbdomenMRT.Domain.Enums.AdrenalGlands
{
	public enum LocalizationType : byte
	{
		None = 0,

		[RadioReportId("abd_m_080204", InstanceName = nameof(AdrenalGlandsFindingType.Mass))]
		Right = 1,

		[RadioReportId("abd_m_080205", InstanceName = nameof(AdrenalGlandsFindingType.Mass))]
		Left = 2
	}
}