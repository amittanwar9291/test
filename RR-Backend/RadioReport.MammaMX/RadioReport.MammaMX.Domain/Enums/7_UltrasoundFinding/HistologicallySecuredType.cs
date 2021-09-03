using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMX.Domain.Enums.UltrasoundFinding
{
	public enum HistologicallySecuredType : byte
	{
		None = 0,

		[RadioReportId("mam_mx_070206", InstanceName = nameof(UltrasoundFindingType.Mass))]
		Benign = 1,

		[RadioReportId("mam_mx_070207", InstanceName = nameof(UltrasoundFindingType.Mass))]
		Malignant = 2

	}
}
