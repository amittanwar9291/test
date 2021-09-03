using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.CoronaryArteries
{
	public enum OtherDrainageType : byte
	{
		None = 0,

		[RadioReportId("ang_c_040334", InstanceName = nameof(CoronaryArteriesFindingType.CoronaryAnomaly))]
		LeftVentricle = 1,

		[RadioReportId("ang_c_040335", InstanceName = nameof(CoronaryArteriesFindingType.CoronaryAnomaly))]
		LeftAtrium = 2,

		[RadioReportId("ang_c_040336", InstanceName = nameof(CoronaryArteriesFindingType.CoronaryAnomaly))]
		PulmonaryArtery = 3
	}
}