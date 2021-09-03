using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.Abdomen
{
	public enum PearlLikeChangesType : byte
	{
		None = 0,

		[RadioReportId("ang_c_080343", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
		DistalRenalArtery = 1,

		[RadioReportId("ang_c_080344", InstanceName = nameof(AbdomenFindingType.RenalArtery))]
		SegmentArteries = 2
	}
}
