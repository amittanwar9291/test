using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMX.Domain.Enums.UltrasoundFinding
{
	public enum EchoContentType : byte
	{
		None = 0,

		[RadioReportId("mam_mx_070502", InstanceName = nameof(UltrasoundFindingType.Mass))]
		Anechoic = 1,

		[RadioReportId("mam_mx_070503", InstanceName = nameof(UltrasoundFindingType.Mass))]
		Hypoechoic = 2,

		[RadioReportId("mam_mx_070504", InstanceName = nameof(UltrasoundFindingType.Mass))]
		Isoechoic = 3,

		[RadioReportId("mam_mx_070505", InstanceName = nameof(UltrasoundFindingType.Mass))]
		Hyperechoic = 4,

		[RadioReportId("mam_mx_070506", InstanceName = nameof(UltrasoundFindingType.Mass))]
		Complex = 5
	}
}
