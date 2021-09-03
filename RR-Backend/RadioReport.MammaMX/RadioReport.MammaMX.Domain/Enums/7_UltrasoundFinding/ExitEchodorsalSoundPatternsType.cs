using RadioReport.Common.Logic.Attributes;

namespace RadioReport.MammaMX.Domain.Enums.UltrasoundFinding
{
	public enum ExitEchodorsalSoundPatternsType : byte
	{
		None = 0,

		[RadioReportId("mam_mx_070508", InstanceName = nameof(UltrasoundFindingType.Mass))]
		NoPosteriorFeatures = 1,

		[RadioReportId("mam_mx_070509", InstanceName = nameof(UltrasoundFindingType.Mass))]
		SoundEnhancement = 2,

		[RadioReportId("mam_mx_070510", InstanceName = nameof(UltrasoundFindingType.Mass))]
		PosteriorShadowing = 3,

		[RadioReportId("mam_mx_070511", InstanceName = nameof(UltrasoundFindingType.Mass))]
		CombinedPattern = 4
	}
}
