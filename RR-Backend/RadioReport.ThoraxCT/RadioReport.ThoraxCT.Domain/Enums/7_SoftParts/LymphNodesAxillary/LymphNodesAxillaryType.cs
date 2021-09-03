using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum LymphNodesAxillaryType : byte
	{
		None = 0,

		[RadioReportId("tho_c_0702100", InstanceName = nameof(SoftPartsFindingType.LymphNodesAxilla))]
        BorderlineCentralFatHilusPreserved = 1,

		[RadioReportId("tho_c_0702101", InstanceName = nameof(SoftPartsFindingType.LymphNodesAxilla))]
        Pathological = 2
	}
}
