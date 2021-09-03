using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ShoulderMRT.Domain.Enums
{
	public enum LymphNodesAxillaryType : byte
	{
		None = 0,

		[RadioReportId("sho_m_080203", InstanceName = nameof(SoftPartsFindingType.LymphNodes))]
		BorderlineLNHilarFatPreserved = 1,

		[RadioReportId("sho_m_080204", InstanceName = nameof(SoftPartsFindingType.LymphNodes))]
		Lymphadenopathy = 2
	}
}
