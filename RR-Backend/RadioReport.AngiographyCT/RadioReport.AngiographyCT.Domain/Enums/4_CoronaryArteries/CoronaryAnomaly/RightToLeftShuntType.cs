using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.CoronaryArteries
{
	public enum RightToLeftShuntType : byte
	{
		None = 0,

		[RadioReportId("ang_c_040328", InstanceName = nameof(CoronaryArteriesFindingType.CoronaryAnomaly))]
		RightVentricle = 1,

		[RadioReportId("ang_c_040329", InstanceName = nameof(CoronaryArteriesFindingType.CoronaryAnomaly))]
		RightAtrium = 2,

		[RadioReportId("ang_c_040330", InstanceName = nameof(CoronaryArteriesFindingType.CoronaryAnomaly))]
		CoronarySinus = 3,

		[RadioReportId("ang_c_040331", InstanceName = nameof(CoronaryArteriesFindingType.CoronaryAnomaly))]
		CardiacVein = 4,

		[RadioReportId("ang_c_040332", InstanceName = nameof(CoronaryArteriesFindingType.CoronaryAnomaly))]
		PulmonaryVein = 5
	}
}