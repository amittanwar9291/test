using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.CoronaryArteries
{
	public enum GradingType : byte
	{
		None = 0,

		[RadioReportId("ang_c_040343", InstanceName = nameof(CoronaryArteriesFindingType.Calcification))]
		NoCalcifications = 1,

		[RadioReportId("ang_c_040366", InstanceName = nameof(CoronaryArteriesFindingType.Calcification))]
		Minimal = 2,

		[RadioReportId("ang_c_040344", InstanceName = nameof(CoronaryArteriesFindingType.Calcification))]
		Low = 3,

		[RadioReportId("ang_c_040345", InstanceName = nameof(CoronaryArteriesFindingType.Calcification))]
		Moderate = 4,

		[RadioReportId("ang_c_040346", InstanceName = nameof(CoronaryArteriesFindingType.Calcification))]
		Severe = 5
	}
}