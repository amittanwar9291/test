using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum HeterogeneousType : byte
	{
		None = 0,

		[RadioReportId("tho_c_070368", InstanceName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
		Centrally = 1,

		[RadioReportId("tho_c_070369", InstanceName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
		Peripheral = 2
	}
}
