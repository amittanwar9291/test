using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMX.Domain.Enums.UltrasoundFinding
{
	public enum DescriptionType : byte
	{
		None = 0,

		[RadioReportId("mam_mx_070111", InstanceName = nameof(UltrasoundFindingType.Mass))]
		IDescribe = 1,

		[RadioReportId("mam_mx_070112", InstanceName = nameof(UltrasoundFindingType.Mass))]
		IKnow = 2
	}
}
