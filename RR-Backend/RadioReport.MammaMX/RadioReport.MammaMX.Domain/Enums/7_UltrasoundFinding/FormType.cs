using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMX.Domain.Enums.UltrasoundFinding
{
	public enum FormType : byte
	{
		None = 0,

		[RadioReportId("mam_mx_070315", InstanceName = nameof(UltrasoundFindingType.Mass))]
		Oval = 1,

		[RadioReportId("mam_mx_070316", InstanceName = nameof(UltrasoundFindingType.Mass))]
		Round = 2,

		[RadioReportId("mam_mx_070317", InstanceName = nameof(UltrasoundFindingType.Mass))]
		Irregular = 3
	}
}
