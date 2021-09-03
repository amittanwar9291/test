using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMX.Domain.Enums.UltrasoundFinding
{
	public enum OrientationType : byte
	{
		None = 0,

		[RadioReportId("mam_mx_070402", InstanceName = nameof(UltrasoundFindingType.Mass))]
		Parallel = 1,

		[RadioReportId("mam_mx_070403", InstanceName = nameof(UltrasoundFindingType.Mass))]
		NotParallel = 2
	}
}
