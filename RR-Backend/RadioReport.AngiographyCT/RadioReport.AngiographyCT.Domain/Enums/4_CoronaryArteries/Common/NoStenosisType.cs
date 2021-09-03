using RadioReport.Common.Logic.Attributes;

namespace RadioReport.AngiographyCT.Domain.Enums.CoronaryArteries
{
	public enum NoStenosisType : byte
	{
		None = 0,

		[RadioReportId("ang_c_040529", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterBypass))]
		[RadioReportId("ang_c_040536", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterStent))]
		IntactAndNoStenosis = 1,

		[RadioReportId("ang_c_040530", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterBypass))]
		Stenosis = 2,

		[RadioReportId("ang_c_040532", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterBypass))]
		[RadioReportId("ang_c_040538", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterStent))]
		Occlusion = 3,

		[RadioReportId("ang_c_040537", InstanceName = nameof(CoronaryArteriesFindingType.FollowUpAfterStent))]
		InStentStenosis = 4
	}
}