using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum SoftPartsFormType : byte
	{
		None = 0,

		[RadioReportId("tho_c_070302", InstanceName = nameof(SoftPartsFindingType.PleuralEffusion))]
		Biconvex = 1,

		[RadioReportId("tho_c_070303", InstanceName = nameof(SoftPartsFindingType.PleuralEffusion))]
		Concave = 2,

		[RadioReportId("tho_c_070467", InstanceName = nameof(SoftPartsFindingType.Mamma))]
		Round = 3,

		[RadioReportId("tho_c_070468", InstanceName = nameof(SoftPartsFindingType.Mamma))]
		Oval = 4,

		[RadioReportId("tho_c_070469", InstanceName = nameof(SoftPartsFindingType.Mamma))]
		Irregular = 5
	}
}
