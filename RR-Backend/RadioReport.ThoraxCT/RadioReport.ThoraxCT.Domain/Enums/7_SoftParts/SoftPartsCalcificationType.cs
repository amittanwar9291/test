using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum SoftPartsCalcificationType : byte
	{
		None = 0,

		[RadioReportId("tho_c_070226", InstanceName = nameof(SoftPartsFindingType.PleuralMass))]
        Partial = 1,

		[RadioReportId("tho_c_070227", InstanceName = nameof(SoftPartsFindingType.PleuralMass))]
		Complete = 2,

		[RadioReportId("tho_c_070536", InstanceName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
		Diffuse = 3,

		[RadioReportId("tho_c_070537", InstanceName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
		Centrally = 4,

		[RadioReportId("tho_c_070538", InstanceName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
		Eccentric = 5,

		[RadioReportId("tho_c_070539", InstanceName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
		Microcalcification = 6,

		[RadioReportId("tho_c_070540", InstanceName = nameof(SoftPartsFindingType.ChestWallSoftTissueMass))]
		Phlebolite = 7
	}
}
