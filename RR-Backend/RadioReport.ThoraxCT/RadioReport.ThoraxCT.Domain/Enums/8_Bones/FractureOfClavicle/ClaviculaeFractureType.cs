using RadioReport.Common.Logic.Attributes;

namespace RadioReport.ThoraxCT.Domain.Enums
{
	public enum ClaviculaeFractureType : byte
	{
		None = 0,

		[RadioReportId("tho_c_0803203", InstanceName = nameof(BonesFindingType.FractureOfClavicle))]
        Fifteen1MedialEndSegment = 1,

		[RadioReportId("tho_c_0803208", InstanceName = nameof(BonesFindingType.FractureOfClavicle))]
        Fifteen2DiaphysealSegment = 2,

		[RadioReportId("tho_c_0804200", InstanceName = nameof(BonesFindingType.FractureOfClavicle))]
        Fifteen3LateralEndSegment = 3,

		[RadioReportId("tho_c_0804204", InstanceName = nameof(BonesFindingType.FractureOfClavicle))]
        FifteenNotFurtherSpecified = 4
	}
}
