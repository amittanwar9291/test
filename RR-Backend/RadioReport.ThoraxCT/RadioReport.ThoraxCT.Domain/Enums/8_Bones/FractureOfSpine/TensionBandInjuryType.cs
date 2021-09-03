using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum TensionBandInjuryType : byte
	{
		None = 0,

		[RadioReportId("tho_c_080423", InstanceName = nameof(BonesFindingType.FractureOfSpine))]
        B1MonosegmentalOsseousFailure = 1,

		[RadioReportId("tho_c_080424", InstanceName = nameof(BonesFindingType.FractureOfSpine))]
        B2DisruptionOfPostTensionBand = 2,

		[RadioReportId("tho_c_080425", InstanceName = nameof(BonesFindingType.FractureOfSpine))]
		B3DestructionOfTheIntervertebralDisc = 3
	}
}
