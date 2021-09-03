using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.Abdomen
{
	public enum OrganSizeType : byte
	{
		None = 0,

		[RadioReportId("ang_m_070386", InstanceName = nameof(AbdomenFindingType.RenalVein))]
		Enlargement = 1,

		[RadioReportId("ang_m_070387", InstanceName = nameof(AbdomenFindingType.RenalVein))]
		ShrunkenKidney = 2
	}
}
