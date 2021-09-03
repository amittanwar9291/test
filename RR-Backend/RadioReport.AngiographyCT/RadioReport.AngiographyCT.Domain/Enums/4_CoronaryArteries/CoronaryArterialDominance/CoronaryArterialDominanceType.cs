using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.CoronaryArteries
{
	public enum CoronaryArterialDominanceType : byte
	{
		None = 0,

		[RadioReportId("ang_c_040203", InstanceName = nameof(CoronaryArteriesFindingType.CoronaryArterialDominance))]
		RightDominant = 1,

		[RadioReportId("ang_c_040204", InstanceName = nameof(CoronaryArteriesFindingType.CoronaryArterialDominance))]
		LeftDominant = 2,

		[RadioReportId("ang_c_040205", InstanceName = nameof(CoronaryArteriesFindingType.CoronaryArterialDominance))]
		Codominant = 3
	}
}