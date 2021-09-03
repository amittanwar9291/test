using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum FractureOfSpineType : byte
	{
		None = 0,

		[RadioReportId("tho_c_080339", InstanceName = nameof(BonesFindingType.FractureOfSpine))]
		ACompressionInjury = 1,

		[RadioReportId("tho_c_080422", InstanceName = nameof(BonesFindingType.FractureOfSpine))]
        BTensionBandInjury = 2,

		[RadioReportId("tho_c_080426", InstanceName = nameof(BonesFindingType.FractureOfSpine))]
        CTranslationalInjury = 3,

		[RadioReportId("tho_c_080427", InstanceName = nameof(BonesFindingType.FractureOfSpine))]
        NotFurtherDefined = 4,

		[RadioReportId("tho_c_080502", InstanceName = nameof(BonesFindingType.FractureOfSpine))]
        PathologyNoFracture = 5
	}
}
