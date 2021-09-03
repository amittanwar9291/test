using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMX.Domain.Enums.UltrasoundFinding
{
	public enum EchoPatternType : byte
	{
		None = 0,

		[RadioReportId("mam_mx_070412", InstanceName = nameof(UltrasoundFindingType.Mass))]
		Homogeneous = 1,

		[RadioReportId("mam_mx_070413", InstanceName = nameof(UltrasoundFindingType.Mass))]
		Inhomogeneous = 2
	}
}
