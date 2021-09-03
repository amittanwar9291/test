using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum DistributionType : byte
	{
		None = 0,

		[RadioReportId("tho_c_070305", InstanceName = nameof(SoftPartsFindingType.PleuralEffusion))]
        FreeFlow = 1,

		[RadioReportId("tho_c_070306", InstanceName = nameof(SoftPartsFindingType.PleuralEffusion))]
        Interlobal = 2,

		[RadioReportId("tho_c_070307", InstanceName = nameof(SoftPartsFindingType.PleuralEffusion))]
        Encapsulated = 3
	}
}
