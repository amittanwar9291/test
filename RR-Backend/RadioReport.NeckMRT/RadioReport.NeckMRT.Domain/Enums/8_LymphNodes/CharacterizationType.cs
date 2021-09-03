using RadioReport.Common.Logic.Attributes;

namespace RadioReport.NeckMRT.Domain.Enums.LymphNodes
{
	public enum CharacterizationType : byte
	{
		None = 0,

		[RadioReportId("nec_m_080502", InstanceName = nameof(LymphNodesFindingType.LymphNodes))]
		BorderlineEnlarged = 1,

		[RadioReportId("nec_m_080503", InstanceName = nameof(LymphNodesFindingType.LymphNodes))]
		Pathologic = 2

	}
}
