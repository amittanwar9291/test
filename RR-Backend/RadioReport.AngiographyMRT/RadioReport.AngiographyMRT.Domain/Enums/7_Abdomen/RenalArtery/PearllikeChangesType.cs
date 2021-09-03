using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyMRT.Domain.Enums.Abdomen
{
	public enum PearlLikeChangesType : byte
	{
		None = 0,

		[RadioReportId("ang_m_070343", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
		DistalRenalArtery = 1,

		[RadioReportId("ang_m_070344", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
		SegmentArteries = 2
	}
}
