using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMX.Domain.Enums.UltrasoundFinding
{
	public enum MovabilityType : byte
	{
		None = 0,

		[RadioReportId("mam_mx_070216", InstanceName = nameof(UltrasoundFindingType.Mass))]
		Moveable = 1,

		[RadioReportId("mam_mx_070217", InstanceName = nameof(UltrasoundFindingType.Mass))]
		NotMoveable = 2
	}
}
