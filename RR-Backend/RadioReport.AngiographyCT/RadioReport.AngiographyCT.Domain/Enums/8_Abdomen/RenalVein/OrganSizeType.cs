using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.Abdomen
{
	public enum OrganSizeType : byte
	{
		None = 0,

		[RadioReportId("ang_c_080386", InstanceName = nameof(AbdomenFindingType.RenalVein))]
		Enlargement = 1,

		[RadioReportId("ang_c_080387", InstanceName = nameof(AbdomenFindingType.RenalVein))]
		ShrunkenKidney = 2
	}
}
