using RadioReport.Common.Logic.Attributes;
using RadioReport.MammaMX.Domain.Models;

namespace RadioReport.MammaMX.Domain.Enums
{
	public enum ClassificationType : byte
	{
		None = 0,

		[RadioReportId("mam_mx_080205", InstanceName = nameof(LymphNodesFinding.RightLymphNodeDetails))]
		[RadioReportId("mam_mx_080403", InstanceName = nameof(LymphNodesFinding.LeftLymphNodeDetails))]
		NoSuspiciousLymphNodes = 1,

		[RadioReportId("mam_mx_080206", InstanceName = nameof(LymphNodesFinding.RightLymphNodeDetails))]
		[RadioReportId("mam_mx_080404", InstanceName = nameof(LymphNodesFinding.LeftLymphNodeDetails))]
		SuspiciousLymphNode = 2,

		[RadioReportId("mam_mx_080207", InstanceName = nameof(LymphNodesFinding.RightLymphNodeDetails))]
		[RadioReportId("mam_mx_080405", InstanceName = nameof(LymphNodesFinding.LeftLymphNodeDetails))]
		PathologicallyEnlargedLymphNode = 3,

		[RadioReportId("mam_mx_080208", InstanceName = nameof(LymphNodesFinding.RightLymphNodeDetails))]
		[RadioReportId("mam_mx_080406", InstanceName = nameof(LymphNodesFinding.LeftLymphNodeDetails))]
		IncreasedNumberOfLymphNodes = 4
	}
}
