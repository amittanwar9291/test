using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.Aorta
{
	public enum FollowUpType : byte
	{
		None = 0,

		[RadioReportId("ang_c_070403", InstanceName = nameof(AortaFindingType.DilatationAorta))]
		Progression = 1,

		[RadioReportId("ang_c_070404", InstanceName = nameof(AortaFindingType.DilatationAorta))]
		NoChange = 2,

		[RadioReportId("ang_c_070405", InstanceName = nameof(AortaFindingType.DilatationAorta))]
		Regression = 3
	}
}