using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMX.Domain.Enums.UltrasoundFinding
{
	public enum DeformabilityCompressionType : byte
	{
		None = 0,

		[RadioReportId("mam_mx_070213", InstanceName = nameof(UltrasoundFindingType.Mass))]
		Good = 1,

		[RadioReportId("mam_mx_070214", InstanceName = nameof(UltrasoundFindingType.Mass))]
		Missing = 2
	}
}
