using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum SoftPartsGrowthPatternsType : byte
	{
		None = 0,

		[RadioReportId("tho_c_070282", InstanceName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
        NoDisplacement = 1,

		[RadioReportId("tho_c_070281", InstanceName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
        Subcutaneous = 2,

		[RadioReportId("tho_c_070283", InstanceName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
        Infiltration = 3
	}
}
