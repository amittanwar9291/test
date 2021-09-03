using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMX.Domain.Enums.UltrasoundFinding
{
	public enum MarginEchodelimitationType : byte
	{
		None = 0,

		[RadioReportId("mam_mx_070405", InstanceName = nameof(UltrasoundFindingType.Mass))]
		Circumscribed = 1,

		[RadioReportId("mam_mx_070406", InstanceName = nameof(UltrasoundFindingType.Mass))]
		NotCircumscribed = 2

	}
}
