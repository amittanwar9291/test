using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxMRT.Domain.Enums
{
	public enum LymphNodesAxillaType : byte
	{
		None = 0,

		[RadioReportId("tho_m_0602100", InstanceName = nameof(PleuraFindingType.LymphNodesAxilla))]
        BorderlineCentralFatHilusPreserved = 1,

		[RadioReportId("tho_m_0602101", InstanceName = nameof(PleuraFindingType.LymphNodesAxilla))]
        Pathological = 2
	}
}
